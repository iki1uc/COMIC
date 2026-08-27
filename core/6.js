function moleculeRotation(cx, cy, r, t) {
  return {
    x: cx + r * Math.cos(t),
    y: cy + r * Math.sin(t)
  };
}
