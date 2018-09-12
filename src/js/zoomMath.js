function applyZoomOutTransformation({ bubble, centerPoint, factor }, paperOrBubble) {
  return {
    x: (paperOrBubble.x - centerPoint.x) / factor + bubble.x,
    y: (paperOrBubble.y - centerPoint.y) / factor + bubble.y,
  };
}

function applyZoomInTransformation({ bubble, centerPoint, factor }, paperOrBubble) {
  return {
    x: centerPoint.x + (paperOrBubble.x - bubble.x) * factor,
    y: centerPoint.y + (paperOrBubble.y - bubble.y) * factor,
  };
}

function setZoomState(center, startRadius, targetRadius) {
  return {
    centerPoint: center,
    factor: targetRadius / startRadius,
    zoomed: true,
  };
}

function resetPaperOrBubble(appliedZoomState, paperOrBubble) {
  const result = {};
  Object.assign(result, applyZoomOutTransformation(appliedZoomState, paperOrBubble), {
    r: paperOrBubble.r / appliedZoomState.factor,
  });
  return result;
}

function transformPaperOrBubble(zoomState, paperOrBubble) {
  const result = {};
  Object.assign(result, applyZoomInTransformation(zoomState, paperOrBubble), {
    r: paperOrBubble.r * zoomState.factor,
  });
  return result;
}

function doZoomEvent() {
  // get previous bubble
  // get clicked bubble
  // reset clicked bubble
  // setZoomState from previous bubble, clicked bubble
  // reset all bubbles
  // transform all bubbles
}
