<script src="../js/Bubble.js">
</script>

<template>
<g class="bubble_frame" :transform="translateString" :id="'bubble' + id">
    <circle
            :class="{ area: !hovered, zoom_selected: hovered }"
            :r="r"
            cx="0"
            cy="0"
            style="fill-opacity: 0.8; display: block;"
            @mouseover="$emit('mouseEnter', id)"
            @mouseout="$emit('mouseLeave', id)"
            @click="$emit('click', id)"
            @dblclick.prevent="$emit('doubleClick', id)"
    >
        <title>{{area}}</title>
    </circle>
    <foreignObject
            id="area_title_object"
            class="headstart"
            :x="foreignObjectX"
            :y="foreignObjectY"
            :width="inscribedSquareLength"
            :height="inscribedSquareLength"
            style="visibility: visible; display: block;"
            @mouseover="$emit('mouseEnter', id)"
            @mouseout="$emit('mouseLeave', id)"
            @click="$emit('click', id)"
            @dblclick.prevent="$emit('doubleClick', id)"
    >
        <body style="word-wrap: break-word;">
        <div id="area_title" :style="{width: inscribedSquareLength + 'px', height: inscribedSquareLength + 'px'}">
            <h2 class="highlightable" style="font-size: 12px;" v-show="!hovered">
                {{area}}
            </h2>
        </div>
        </body>
    </foreignObject>
</g>
</template>
