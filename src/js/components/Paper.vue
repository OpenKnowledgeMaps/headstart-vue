<template src="../../templates/paper.html"></template>

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
