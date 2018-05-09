<template>
    <g
            class="paper"
            :id="'paper' + id"
            :transform="translateString"
            style="display: block;"
            @mouseover="$emit('bubbleMouseEnter', bubbleId)"
            @mouseout="$emit('bubbleMouseLeave', bubbleId)"
    >

        <path
                id="region"
                :d="paperPath"
                class="unframed"
                style="fill-opacity: 1;">
        </path>
        <path
                class="dogear"
                :d="dogearPath"></path>

        <foreignObject
                id="article_metadata"
                class="paperContent"
                :width="w"
                :height="h"
                @mouseover="$emit('bubbleMouseEnter', bubbleId)"
                @mouseout="$emit('bubbleMouseLeave', bubbleId)"
        >
            <body>
                <div class="paper_holder">

                    <div class="metadata" :style="{ height: metadata_height + 'px', width: metadata_width + 'px'}">
                        <div id="icons">
                            <p id="open-access-logo">&#xf09c;</p>
                        </div>
                        <p id="title" class="highlightable">
                            {{ title }}<br />
                        </p>
                        <p id="details" class="highlightable">{{ authors_string }}</p>
                        <p id="in">in <span class="highlightable">{{ published_in }} <span class="pubyear">({{ year }})</span></span></p>
                    </div>
                    <div class="readers">
                        <p id="readers"><span id="num-readers">{{ readers }}</span><span class="readers_entity"> {{ base_unit }}</span></p>

                    </div>
                </div>
            </body>
        </foreignObject>
    </g>
</template>

<script>
  export default {
    name: "Paper",
    props: {
      x: Number,
      y: Number,
      w: Number,
      h: Number,
      id: Number,
      bubbleId: Number,
      metadata_height: Number,
      metadata_width: Number,
      title: String,
      authors_string: String,
      published_in: String,
      year: String,
      readers: String,
      base_unit: String
    },
    computed: {
      translateString: function() {
        return "translate(" + this.x + "," + this.y + ")";
      },
      paperPath: function() {
        return `M 0 0 h ${0.9*this.w} l ${0.1*this.w} ${0.1*this.h} v ${0.9*this.h} h ${-this.w} v ${-this.h}`
      },
      dogearPath: function() {
        return `M ${0.9*this.w} 0 v ${0.1*this.w} h ${0.1*this.h}`
      }
    }
  }
</script>

<style scoped>

</style>