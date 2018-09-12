export default {
  name: 'Bubble',
  props: {
    id: Number,
    x: Number,
    y: Number,
    r: Number,
    order: Number,
    area: String,
    hovered: Boolean,
    zoomed: Boolean,
    selected: Boolean,
  },
  computed: {
    translateString() {
      return `translate(${this.x},${this.y})`;
    },
    inscribedSquareLength() {
      return Math.sqrt(2 * this.r * this.r);
    },
    foreignObjectX() {
      return -0.5 * Math.sqrt(2 * this.r * this.r);
    },
    foreignObjectY() {
      return -0.5 * Math.sqrt(2 * this.r * this.r);
    },
  },
};
