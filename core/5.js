function forsakenGeometry(t) {
  const base = 40 + Math.sin(t) * 10;

  // Whirlwind – 3-Potenzkette
  const whirl = [3, 9, 27, 81, 243, 729];
  const density = whirl[Math.floor((t * 2) % whirl.length)];

  // Beine – 6D-Schrittachsen
  const legs = {
    left: {
      x: -base * 0.6 + Math.sin(t * 2) * 12,
      y:  base * 1.4 + Math.cos(t * 2) * 18
    },
    right: {
      x:  base * 0.6 - Math.sin(t * 2) * 12,
      y:  base * 1.4 + Math.cos(t * 2) * 18
    }
  };

  return {
    triangle: [
      { x: 0,      y: -base },
      { x: -base,  y:  base },
      { x:  base,  y:  base }
    ],

    pyramid: [
      { x: 0,      y: -base * 1.5 }, // Spitze
      { x: -base,  y:  base },
      { x:  base,  y:  base },
      { x: 0,      y:  base * 1.5 }  // Boden
    ],

    legs,          // Bein-Achsen
    density,       // Whirlwind-Dichte
    pulse12e: Math.sin(t * 12) // 12e-Frequenz
  };
}
