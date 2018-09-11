<template>
  <div id="app">
    <Chart :height="chartDimensions.height" :width="chartDimensions.width">
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
        translate: {
          x: 0,
          y: 0,
        },
        zoomed: false,
      },
      zoomFactor: 1,
      zoomed: false,
      papers: backendData.papers,
      bubbles: backendData.bubbles,
    };
  },
  methods: {
    onBubbleMouseEnter(id) {
      this.bubbles.find(bubble => bubble.id === id).hovered = true;
    },
    onBubbleMouseLeave(id) {
      this.bubbles.find(bubble => bubble.id === id).hovered = false;
    },
    onBubbleMouseClick(id) {
      // eslint-disable-next-line
      console.log(`Clicked Bubble ${id} - not implemented yet`);
    },
    onBubbleDoubleClick(id) {
      // eslint-disable-next-line
      console.log(`Doubleclicked Bubble ${id} - not implemented yet`);
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
  },
};
</script>
