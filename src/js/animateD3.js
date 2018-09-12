import { select } from 'd3-selection';

function animateD3(transition, element, newElement) {
  // get target coords, dimensions
  // get dom elements circle, foreignObject
  if (element.type === 'bubble') {
    const bubbleNode = select(`#bubble${element.id}`);
    const circleNode = bubbleNode.select('circle');
    const foreignObjectNode = bubbleNode.select('foreignobject');
    bubbleNode
      .transition(transition)
      .attr('transform', `translate(${newElement.x} ${newElement.y})`);
    foreignObjectNode
      .transition(transition)
      .attr('x', 0 - newElement.r / Math.sqrt(2))
      .attr('width', (2 * newElement.r) / Math.sqrt(2));
    circleNode.transition(transition).attr('r', newElement.r);
  } else {
    const paperNode = select(`#paper${element.id}`);
    paperNode
      .transition(transition)
      .attr('transform', `translate(${newElement.x} ${newElement.y})`);
  }
}

export { animateD3 };

/*
    // add d3 transition here
    let bubbleTransition = transition().duration(500);
    this.bubblesStore.entities.forEach((entity) => {
      const {x_, y_, r_} = entity.getZoomedCoords(z, transX, transY);
      // console.log(x_, y_, r_);
      const bubble = select(this.bubbleRefs[entity.id]);
      const circle = bubble.select("circle");
      const foreignObject = bubble.select("foreignobject");
      foreignObject.transition(bubbleTransition)
        .attr("x", 0-r_/Math.sqrt(2.))
        // .attr("y", 0-r_/Math.sqrt(2.))
        .attr("width", 2.*r_/Math.sqrt(2.))
        // .attr("height", 2.*r_/Math.sqrt(2.))
      bubble.transition(bubbleTransition)
        .attr("transform", "translate("+x_+" " + y_ +")");
      circle.transition(bubbleTransition)
        .attr("r", r_);
    });
    this.papersStore.entities.forEach((paper) => {
      const {x, y, w, h} = paper.getZoomedCoords(z, transX, transY);
      // console.log(this.paperRefs[paper.id]);
      const domPaper = select(this.paperRefs[paper.id]);
      domPaper.transition(bubbleTransition)
        .attr("transform", "translate("+x+" "+y+")");
      domPaper.select(".paperBorder")
        .transition(bubbleTransition)
        .attr("d", 'M ' + 0 + ' ' + 0 +
          ' h ' + (0.9*w) +
          ' l ' + (0.1*w) + ' ' + (0.1*h) +
          ' v ' + (0.9*h) +
          ' h ' + (-w) +
          ' v ' + (-h))
      domPaper.select(".dogear")
        .transition(bubbleTransition)
        .attr("d", "M " + (0 + 0.9*w) + ' ' + 0 + " v " + (0.1*h) + " h " + (0.1*w));
      domPaper.select(".paperContent")
        .transition(bubbleTransition)
        .attr("width", w)
        .attr("height", h);
    });
    bubbleTransition.on("end", () => {
      this.animationLock = false;
      this.translationVecX = this.svgWidth * 0.5 - z*x;
      this.translationVecY = this.svgHeight * 0.5 - z*y;
      this.isZoomed = false;
      this.zoomFactor = z;
      if (isFunction(callback))
        callback();
    }); */
