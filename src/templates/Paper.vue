<script src="../js/Paper.js">
</script>

<template>
<g
        class="paper"
        :id="'paper' + id"
        :transform="translateString"
        style="display: block;"
        @mouseover="$emit('mouseEnter', id)"
        @mouseout="$emit('mouseLeave', id)"
        @click="$emit('click', id)"
        @dblclick.prevent="$emit('doubleClick', id)"
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
            @mouseover="$emit('mouseEnter', id)"
            @mouseout="$emit('mouseLeave', id)"
            @click="$emit('click', id)"
            @dblclick.prevent="$emit('doubleClick', id)"
    >
        <body>
            <div class="paper_holder">

                <div class="metadata" :style="{ height: metadata.height + 'px', width: metadata.width + 'px'}">
                    <div id="icons">
                        <p id="open-access-logo">&#xf09c;</p>
                    </div>
                    <p id="title" class="highlightable">
                        {{ metadata.title }}<br />
                    </p>
                    <p id="details" class="highlightable">{{ metadata.authors_string }}</p>
                    <p id="in">in <span class="highlightable">{{ metadata.published_in }}
                        <span class="pubyear">({{ metadata.year }})</span></span></p>
                </div>
                <div class="readers">
                    <p id="readers"><span id="num-readers">{{ metadata.readers }}</span>
                        <span class="readers_entity"> {{ metadata.base_unit }}</span></p>

                </div>
            </div>
        </body>
    </foreignObject>
</g>
</template>

<style scoped>
</style>
