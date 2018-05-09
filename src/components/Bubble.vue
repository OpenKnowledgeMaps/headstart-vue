<template>
    <g class="bubble_frame" :transform="translateString" :id="'bubble' + id">
        <circle
                :class="{ area: !zoomedOut, zoom_selected: zoomedOut }"
                :r="r"
                cx="0"
                cy="0"
                style="fill-opacity: 0.8; display: block;"
                @mouseover="$emit('bubbleMouseEnter', id)"
                @mouseout="$emit('bubbleMouseLeave', id)"
                @click="$emit('bubbleClick', id)"
                @dblclick.prevent="$emit('bubbleDoubleClick', id)"
        >
            <title>{{title}}</title>
        </circle>
        <foreignObject
                id="area_title_object"
                class="headstart"
                :x="foreignObjectX"
                :y="foreignObjectY"
                :width="inscribedSquareLength"
                :height="inscribedSquareLength"
                style="visibility: visible; display: block;"
                @mouseover="$emit('bubbleMouseEnter', id)"
                @mouseout="$emit('bubbleMouseLeave', id)"
                @click="$emit('bubbleClick', id)"
                @dblclick.prevent="$emit('bubbleDoubleClick', id)"
        >
            <body style="word-wrap: break-word;">
            <div id="area_title" :style="{width: inscribedSquareLength + 'px', height: inscribedSquareLength + 'px'}">
                <h2 class="highlightable" style="font-size: 12px;">
                    {{title}}
                </h2>
            </div>
            </body>
        </foreignObject>
    </g>
</template>

<script>
  export default {
    name: "Bubble",
    props: {
      id: Number,
      x: Number,
      y: Number,
      r: Number,
      title: String,
      zoomedOut: Boolean
    },
    computed: {
      translateString: function() {
        return "translate(" + this.x + "," + this.y + ")";
      },
      inscribedSquareLength: function () {
        return Math.sqrt(2*this.r*this.r);
      },
      foreignObjectX: function() {
        return -0.5*Math.sqrt(2*this.r*this.r);
      },
      foreignObjectY: function() {
        return -0.5*Math.sqrt(2*this.r*this.r);
      }
    }
  }
</script>