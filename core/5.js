function forsakenGeometry(t) {
  const base = 40 + Math.sin(t) * 10;

  return {
    triangle: [
      { x: 0, y: -base },
      { x: -base, y: base },
      { x: base, y: base }
    ],
    pyramid: [
      { x: 0, y: -base * 1.5 }, // Spitze
      { x: -base, y: base },
      { x: base, y: base },
      { x: 0, y: base * 1.5 }  // Boden
    ]
  };
}

