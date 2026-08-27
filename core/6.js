function moleculeRotation(cx, cy, r, t) {
  const core = {
    x: cx + r * Math.cos(t),
    y: cy + r * Math.sin(t)
  };

  // Beine – zwei Schrittachsen, die sich im Takt bewegen
  const legs = {
    left: {
      x: core.x - 10 * Math.sin(t * 2),
      y: core.y + 20 * Math.cos(t * 2)
    },
    right: {
      x: core.x + 10 * Math.sin(t * 2),
      y: core.y + 20 * Math.cos(t * 2)
    }
  };

  return {
    core,
    legs
  };
}
