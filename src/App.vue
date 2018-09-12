<template>
  <div id="app">
    <Chart 
      :height="chartDimensions.height" 
      :width="chartDimensions.width"
      v-on:click="onRectMouseClick"  
    >
      <SvgConditionalElement
        v-for="paperOrBubble in sortedPapersAndBubbles"
        :key="paperOrBubble.id"
      >
        <template slot='paper' v-if="paperOrBubble.type === 'paper'">
          <Paper
            v-bind="paperOrBubble"
            v-on:mouseEnter="onPaperMouseEnter"
            v-on:mouseLeave="onPaperMouseLeave"
            v-on:click="onPaperMouseClick"
            v-on:doubleClick="onPaperDoubleClick"
          />
        </template>
        <template slot='bubble' v-if="paperOrBubble.type === 'bubble'">
          <Bubble
            v-bind="paperOrBubble"
            v-on:mouseEnter="onBubbleMouseEnter"
            v-on:mouseLeave="onBubbleMouseLeave"
            v-on:click="onBubbleMouseClick"
            v-on:doubleClick="onBubbleDoubleClick"
          />
        </template>
      </SvgConditionalElement>
    </Chart>
  </div>
</template>

<script>
import Chart from './templates/Chart.vue';
import Paper from './templates/Paper.vue';
import Bubble from './templates/Bubble.vue';
import SvgConditionalElement from './templates/SvgConditionalElement.vue';

import backendData from './js/backendFakeAPIData.js';
import config from './js/config.js';

export default {
  name: 'app',
  components: {
    Chart,
    Paper,
    Bubble,
    SvgConditionalElement,
  },
  data() {
    return {
      chartDimensions: {
        width: config.svgWidth,
        height: config.svgHeight,
      },
      zoomState: {
        factor: 1,
        centerPoint: {
          x: 0,
          y: 0,
        },
        applied: {
          bubble: {
            x: 0,
            y: 0,
          },
          centerPoint: {
            x: 0,
            y: 0,
          },
          factor: 1
        },
        zoomed: false,
      },
      papers: backendData.papers,
      bubbles: backendData.bubbles
    };
  },
  methods: {
    onBubbleMouseEnter(id) {
      let bubble = this.bubbles.find(bubble => bubble.id === id); 
      bubble.hovered = true;
      let topElement = this.sortedPapersAndBubbles.slice(-1)[0];
      let tmpOrder = topElement.order;
      topElement.order = bubble.order;
      bubble.order = tmpOrder;
    },
    onBubbleMouseLeave(id) {
      this.bubbles.find(bubble => bubble.id === id).hovered = false;
    },
    onBubbleMouseClick(id) {
        this.zoomState.zoomed = true;
        let bubble = this.bubbles.find(bubble => bubble.id === id);
        this.setZoomStateFromBubble(this.getChartCenter, bubble.r, this.zoomedBubbleTargetRadius);
        this.updateZoomState(bubble);
    },
    onRectMouseClick() {
        console.log("rect clicked");
        this.resetZoomState();
    },
    setZoomStateFromBubble(center, startRadius, targetRadius) {
      this.zoomState.centerPoint = center;
      // wrong zoomfactor if already zoomed
      this.zoomState.factor = targetRadius/startRadius;
      this.zoomState.zoomed = true;
    },
    resetZoomState() {
      const { applied } = this.zoomState;
      this.sortedPapersAndBubbles.forEach((paperOrBubble) => {
        Object.assign(paperOrBubble, this.undoTransformation(
          applied.bubble,
          applied.centerPoint,
          applied.factor,
          paperOrBubble
        ));
        // if (paperOrBubble.type === 'bubble') paperOrBubble.r = paperOrBubble.r/applied.factor;
      });
      this.zoomState.applied = {
          bubble: {
            x: 0,
            y: 0,
          },
          centerPoint: {
            x: 0,
            y: 0,
          },
          factor: 1
      }
      console.log(this.zoomState.applied);
    },
    updateZoomState(bubble) {
      const { factor, centerPoint } = this.zoomState;
      const { applied } = this.zoomState;
      const tmpBubble = {
        x: bubble.x,
        y: bubble.y
      }
      this.resetZoomState();

      this.sortedPapersAndBubbles.forEach((paperOrBubble) => {
        // apply the new transformation
        Object.assign(paperOrBubble, this.applyTransformation(bubble, centerPoint, factor, paperOrBubble));
        if (paperOrBubble.type === 'bubble') paperOrBubble.r *= factor;
      });

      this.zoomState.applied = {
          bubble: {
            x: tmpBubble.x,
            y: tmpBubble.y,
          },
          centerPoint: {
            x: centerPoint.x,
            y: centerPoint.y,
          },
          factor: factor
      }
      console.log(this.zoomState.applied);
    },
    undoTransformation(selectedBubbleCoords, referenceCoords, factor, bubble) {
      return {
        x: (bubble.x - referenceCoords.x)/factor + selectedBubbleCoords.x,
        y: (bubble.y - referenceCoords.y)/factor + selectedBubbleCoords.y,
      }
    },
    applyTransformation(selectedBubbleCoords, referenceCoords, factor, bubble) {
      return { 
        x: referenceCoords.x + (bubble.x - selectedBubbleCoords.x)*factor,
        y: referenceCoords.y + (bubble.y - selectedBubbleCoords.y)*factor }
    },
    onBubbleDoubleClick(id) {
      console.log(`Doubleclicked bubble ${id} - not implemented yet`);
    },
    onPaperMouseEnter(id) {
      // eslint-disable-next-line
      console.log(`Hovered Paper ${id} - not implemented yet`);
    },
    onPaperMouseLeave(id) {
      // eslint-disable-next-line
      console.log(`Mouse left Paper ${id} - not implemented yet`);
    },
    onPaperMouseClick(id) {
      // eslint-disable-next-line
      console.log(`Clicked Paper ${id} - not implemented yet`);
    },
    onPaperDoubleClick(id) {
      // eslint-disable-next-line
      console.log(`Doubleclicked Paper ${id} - not implemented yet`);
    },
  },
  computed: {
    sortedPapersAndBubbles() {
      return [...this.papers, ...this.bubbles].sort((elemA, elemB) => elemA.order - elemB.order);
    },
    zoomedBubbleTargetRadius() {
      return this.chartDimensions.width*0.5*0.5;
    },
    getChartCenter() {
      return { x: this.chartDimensions.width*0.5, y: this.chartDimensions.height*0.5};
    }
  },
};
</script>
