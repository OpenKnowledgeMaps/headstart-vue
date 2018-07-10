<template>
  <div id="app">
    <Chart :height="svgHeight" :width="svgWidth">
        <Bubble
                v-for="bubble in bubbles"
                :key="bubble.id"
                v-bind="bubble"
                v-on:bubbleMouseEnter="onBubbleMouseEnter"
                v-on:bubbleMouseLeave="onBubbleMouseLeave"
                v-on:bubbleClick="zoomD3"
                v-on:bubbleDoubleClick="zoomOutD3"
        ></Bubble>
        <Paper v-for="paper in papers"
               :key="paper.id"
               v-bind="paper"
               v-on:bubbleMouseEnter="onBubbleMouseEnter"
               v-on:bubbleMouseLeave="onBubbleMouseLeave"
               v-on:bubbleClick="zoomD3"
               v-on:bubbleDoubleClick="zoomOutD3"
        ></Paper>
    </Chart>
  </div>
</template>

<script>
import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import Chart from './components/Chart.vue'
import Paper from './components/Paper.vue'
import Bubble from './components/Bubble.vue'

export default {
      name: 'app',
      components: {
        Chart,
        Paper,
        Bubble
      },
      props: {
        payload: {
          type: Object,
          required: true
        }
      },
      data: function() {
        return {
                    svgHeight: 600,
                    svgWidth: 600,
                    zoomFactor: 1,
                    zoomed: false,
                    papers: JSON.parse(JSON.stringify(this.payload.papers)),
                    bubbles: JSON.parse(JSON.stringify(this.payload.bubbles))
                }
  },
  methods: {
    onBubbleMouseEnter: function(id) {
      this.bubbles.find((bubble) => bubble.id === id).zoomedOut = true;
    },
    onBubbleMouseLeave: function(id) {
      this.bubbles.find((bubble) => bubble.id === id).zoomedOut = false;
    },
    zoomD3: function(id) {
      let bubble = this.bubbles.find((bubble) => bubble.id === id);
      if (!this.zoomed || !bubble.selected) {

        const ZOOMED_RADIUS = this.svgWidth * 0.33;
        const FACTOR = ZOOMED_RADIUS / bubble.r;
        const TRANSLATE_X = this.svgWidth * 0.5 - bubble.x * FACTOR;
        const TRANSLATE_Y = this.svgHeight * 0.5 - bubble.y * FACTOR;
        const params = { ZOOMED_RADIUS, FACTOR, TRANSLATE_X, TRANSLATE_Y };
        this.zoomD3DOM(id, params, () => {
          this.bubbles.forEach((bubble) => {
            bubble.x = bubble.x*FACTOR + TRANSLATE_X;
            bubble.y = bubble.y*FACTOR + TRANSLATE_Y;
            bubble.r = bubble.r*FACTOR;
            bubble.selected = false;
          });
          this.zoomed = true;
          bubble.selected = true;
        });
      }
    },

    zoomOutD3: function(id) {
      let bubble = this.bubbles.find((bubble) => bubble.id === id);
      if (this.zoomed) {
        let originalBubble = this.payload.bubbles.find((obubble) => obubble.id === bubble.id);

        const ZOOMED_RADIUS = originalBubble.r;
        const FACTOR = ZOOMED_RADIUS / bubble.r;
        const TRANSLATE_X = originalBubble.x - bubble.x*FACTOR;
        const TRANSLATE_Y = originalBubble.y - bubble.y*FACTOR;
        const params = { ZOOMED_RADIUS, FACTOR, TRANSLATE_X, TRANSLATE_Y };
        this.zoomD3DOM(id, params, () => {
          this.bubbles.forEach((bubble) => {
            bubble.x = bubble.x*FACTOR + TRANSLATE_X;
            bubble.y = bubble.y*FACTOR + TRANSLATE_Y;
            bubble.r = bubble.r*FACTOR;
            bubble.selected = false;
          });
          this.zoomed = false;
        });
      }
    },

    zoomD3DOM: function(id, params, callback) {
        let { FACTOR, TRANSLATE_X, TRANSLATE_Y } = params;

        let bubbleTransition = transition().duration(300);
        this.bubbles.forEach((bubble) => {
            const bubbleDOM = select("#bubble"+bubble.id);
            const circle = bubbleDOM.select("circle");
            const foreignObject = bubbleDOM.select("foreignObject");

            bubbleDOM.transition(bubbleTransition)
              .attr("transform", 'translate(' + (bubble.x*FACTOR + TRANSLATE_X) + ',' + (bubble.y*FACTOR + TRANSLATE_Y) +  ')');
            foreignObject.transition(bubbleTransition)
              .attr("x",-0.5*Math.sqrt(2*FACTOR*FACTOR*bubble.r*bubble.r))
              .attr("y",-0.5*Math.sqrt(2*FACTOR*FACTOR*bubble.r*bubble.r))
              .attr("width", Math.sqrt(2*FACTOR*FACTOR*bubble.r*bubble.r))
              .attr("height", Math.sqrt(2*FACTOR*FACTOR*bubble.r*bubble.r));
            circle.transition(bubbleTransition)
              .attr("r", FACTOR*bubble.r);
        });

        // let paper = this.papers.find((paper) => paper.bubbleId === id);
        // if (paper) {
        //     const domPaper = select("#paper" + paper.id);
        //     domPaper.select(".unframed")
        //       .transition(bubbleTransition)
        //       .attr("d", 'M ' + 0 + ' ' + 0 +
        //         ' h ' + (0.9*paper.w*FACTOR) +
        //         ' l ' + (0.1*paper.w*FACTOR) + ' ' + (0.1*paper.h*FACTOR) +
        //         ' v ' + (0.9*paper.h*FACTOR) +
        //         ' h ' + (-paper.w*FACTOR) +
        //         ' v ' + (-paper.h*FACTOR));
        //     domPaper.select(".dogear")
        //       .transition(bubbleTransition)
        //       .attr("d", "M " + (0 + 0.9*paper.w*FACTOR) + ' ' + 0 + " v " + (0.1*paper.h*FACTOR) + " h " + (0.1*paper.w*FACTOR));
        //     domPaper.select(".paperContent")
        //       .transition(bubbleTransition)
        //       .attr("width", paper.w*FACTOR)
        //       .attr("height", paper.h*FACTOR);
        // }

        bubbleTransition.on("end", () => {
          callback();
        });
      }
  }
}
</script>
