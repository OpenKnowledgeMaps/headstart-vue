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
            v-if="!zoomState.applied.zoomed"
          />
        </template>
        <template slot='bubble' v-if="paperOrBubble.type === 'bubble'">
          <Bubble
            v-bind="paperOrBubble"
            v-on:mouseEnter="onBubbleMouseEnter"
            v-on:mouseLeave="onBubbleMouseLeave"
            v-on:click="onBubbleMouseClick"
            v-on:doubleClick="onBubbleDoubleClick"
            :zoomed="zoomState.applied.zoomed"
          />
        </template>
      </SvgConditionalElement>
    </Chart>
  </div>
</template>

<script>
// dependencies
import { transition } from 'd3-transition';

// components
import Chart from './templates/Chart.vue';
import Paper from './templates/Paper.vue';
import Bubble from './templates/Bubble.vue';
import SvgConditionalElement from './templates/SvgConditionalElement.vue';

// functions
import { resetPaperOrBubble, transformPaperOrBubble, setZoomState } from './js/zoomMath.js';
import { animateD3 } from './js/animateD3';

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

        let trans = transition().duration(config.transitionDuration);
        let elements = [];
        this.sortedPapersAndBubbles.forEach((element) => {
            const newElement = transformPaperOrBubble(zoomState, resetPaperOrBubble(applied, element));
            animateD3(trans, element, newElement);
            elements.push([element, newElement]);
        });
        trans.on('end', () => {
          console.log('mod state zoom');
          elements.forEach((element) => {
            const selected = element[0].id === bubble.id ? {selected: true} : {selected: false}
            Object.assign(element[0], element[1], selected);
          })
          Object.assign(this.zoomState.applied, zoomState);
        })
    },
    onBubbleDoubleClick(id) {
      console.log(`Doubleclicked bubble ${id} - not implemented yet`);
    },
    onRectMouseClick() {
      console.log("rect clicked");
      this.doZoomOut();
    },
    doZoomOut() {
      this.zoomState.applied.zoomed = false;
      setTimeout(() => {
        const prevBubble = this.zoomState.applied.bubble;
        const applied = this.zoomState.applied;

        let trans = transition().duration(config.transitionDuration);
        let elements = [];

        this.sortedPapersAndBubbles.forEach((element) => {
          const newElement = resetPaperOrBubble(applied, element);
          animateD3(trans, element, newElement);
          elements.push([element, newElement]);
        });

        trans.on('end', () => {
          elements.forEach((element) => {
            Object.assign(element[0], element[1], { selected: false });
          })
          Object.assign(this.zoomState.applied, this.getZoomedOutState);
        })
      }, 0)
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
