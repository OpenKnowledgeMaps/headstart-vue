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
          default: () => ({ papers: [], bubbles: [] })
        }
      },
      data: function() {
        return {
                    svgHeight: 600,
                    svgWidth: 600,
                    zoomFactor: 1,
                    zoomed: false,
                    papers: this.payload.papers,
                    bubbles: this.payload.bubbles
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
      if (!this.zoomed) {
        let bubble = this.bubbles.find((bubble) => bubble.id === id);
        const TR = 200;
        const FACT = TR/74.;
        let bubbleTransition = transition().duration(300);

        const bubbleDOM = select("#bubble1");
        const circle = bubbleDOM.select("circle");
        const foreignObject = bubbleDOM.select("foreignObject");
        foreignObject.transition(bubbleTransition)
          .attr("x", -0.5*Math.sqrt(2*TR*TR))
          .attr("y", -0.5*Math.sqrt(2*TR*TR))
          .attr("width", Math.sqrt(2*TR*TR))
          .attr("height", Math.sqrt(2*TR*TR));
        circle.transition(bubbleTransition)
          .attr("r", TR);

        let paper = this.papers.find((paper) => paper.bubbleId === id);
        const domPaper = select("#paper0");
        domPaper.select(".unframed")
          .transition(bubbleTransition)
          .attr("d", 'M ' + 0 + ' ' + 0 +
            ' h ' + (0.9*paper.w*FACT) +
            ' l ' + (0.1*paper.w*FACT) + ' ' + (0.1*paper.h*FACT) +
            ' v ' + (0.9*paper.h*FACT) +
            ' h ' + (-paper.w*FACT) +
            ' v ' + (-paper.h*FACT));
        domPaper.select(".dogear")
          .transition(bubbleTransition)
          .attr("d", "M " + (0 + 0.9*paper.w*FACT) + ' ' + 0 + " v " + (0.1*paper.h*FACT) + " h " + (0.1*paper.w*FACT));
        domPaper.select(".paperContent")
          .transition(bubbleTransition)
          .attr("width", paper.w*FACT)
          .attr("height", paper.h*FACT);

        bubbleTransition.on("end", () => {
          bubble.r = TR;
          paper.w = paper.w*FACT;
          paper.h = paper.h*FACT;
          this.zoomed = true;
        });
      }
    },
    zoomOutD3: function(id) {
      if (this.zoomed) {
        let bubble = this.bubbles.find((bubble) => bubble.id === id);
        const TR = 74.4123;
        const FACT = TR/200.;

        let bubbleTransition = transition().duration(300);

        const bubbleDOM = select("#bubble1");
        const circle = bubbleDOM.select("circle");
        const foreignObject = bubbleDOM.select("foreignObject");
        foreignObject.transition(bubbleTransition)
          .attr("x", -0.5*Math.sqrt(2*TR*TR))
          .attr("y", -0.5*Math.sqrt(2*TR*TR))
          .attr("width", Math.sqrt(2*TR*TR))
          .attr("height", Math.sqrt(2*TR*TR))
        circle.transition(bubbleTransition)
          .attr("r", TR);

        let paper = this.papers.find((paper) => paper.bubbleId === id);
        const domPaper = select("#paper0");
        domPaper.select(".unframed")
          .transition(bubbleTransition)
          .attr("d", 'M ' + 0 + ' ' + 0 +
            ' h ' + (0.9*paper.w*FACT) +
            ' l ' + (0.1*paper.w*FACT) + ' ' + (0.1*paper.h*FACT) +
            ' v ' + (0.9*paper.h*FACT) +
            ' h ' + (-paper.w*FACT) +
            ' v ' + (-paper.h*FACT));
        domPaper.select(".dogear")
          .transition(bubbleTransition)
          .attr("d", "M " + (0 + 0.9*paper.w*FACT) + ' ' + 0 + " v " + (0.1*paper.h*FACT) + " h " + (0.1*paper.w*FACT));
        domPaper.select(".paperContent")
          .transition(bubbleTransition)
          .attr("width", paper.w*FACT)
          .attr("height", paper.h*FACT);

        bubbleTransition.on("end", () => {
          bubble.r = TR;
          paper.w = paper.w*FACT;
          paper.h = paper.h*FACT;
          this.zoomed = false;
        });
      }
    }
  }
}
</script>
