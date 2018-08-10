<script src="../js/Chart.js"></script>

<template>
<div class="headstart">
    <div class="container-headstart">
        <div class="vis-col">
            <div id="headstart-chart">
                <svg id="chart-svg" :height="height" :width="width">
                    <g id="chart_canvas">
                        <rect
                                id="map-rect"
                                :height="height"
                                :width="width"
                                class="zoomed_out"
                                x="0"
                                y="0"
                        ></rect>
                        <slot></slot>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg {
        border: 1px #000 solid;
    }
</style>
