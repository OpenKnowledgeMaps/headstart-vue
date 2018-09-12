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
import { resetPaperOrBubble, transformPaperOrBubble, setZoomState } from './js/zoomMath.js'

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
        applied: {
          bubble: {
            x: 0,
            y: 0,
            r: config.svgWidth*0.5*0.5
          },
          centerPoint: {
            x: 0,
            y: 0,
          },
          factor: 1,
          zoomed: false
        },
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
      let bubble = this.bubbles.find(bubble => bubble.id === id);
      this.doBubbleZoom(bubble);
    },
    doBubbleZoom(bubble) {
        const applied = this.zoomState.applied;

        const originBubble = resetPaperOrBubble(applied, bubble);
        const zoomState = setZoomState(originBubble, this.getChartCenter, originBubble.r, this.zoomedBubbleTargetRadius);
        this.sortedPapersAndBubbles.forEach((bbl) => {
            Object.assign(bbl, 
              transformPaperOrBubble(zoomState, resetPaperOrBubble(applied, bbl)));
        });
        Object.assign(this.zoomState.applied, zoomState);
    },
    onBubbleDoubleClick(id) {
      console.log(`Doubleclicked bubble ${id} - not implemented yet`);
    },
    onRectMouseClick() {
      console.log("rect clicked");
      this.doZoomOut();
    },
    doZoomOut() {
      const prevBubble = this.zoomState.applied.bubble;
      const applied = this.zoomState.applied;

      this.sortedPapersAndBubbles.forEach((bbl) => {
        Object.assign(bbl, resetPaperOrBubble(applied, bbl));
      });
      Object.assign(this.zoomState.applied, this.getZoomedOutState);
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
    },
    getZoomedOutState() {
      return {
          bubble: {
            x: 0,
            y: 0,
            r: config.svgWidth*0.5*0.5
          },
          centerPoint: {
            x: 0,
            y: 0,
          },
          factor: 1,
          zoomed: false
        }
    }
  },
};
</script>
