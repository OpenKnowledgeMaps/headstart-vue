<template src="./chart.html"></template>

<script>
  export default {
    name: "Chart",
    props: {
      height: Number,
      width: Number
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg {
        border: 1px #000 solid;
    }
</style>
