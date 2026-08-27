function run3Beam(t) {
  // Grundbewegung
  const pos = 50  + Math.sin(t * 2) * 40;
  const neg = 450 + Math.cos(t * 2) * 40;

  // Whirlwind – 3-Potenzkette
  const whirl = [3, 9, 27, 81, 243, 729];
  const density = whirl[Math.floor((t * 2) % whirl.length)];

  // 12e Frequenz-Puls
  const pulse12e = Math.sin(t * 12);

  // Beine – 6D-Schrittachsen
  const legs = {
    left: {
      x: pos - 20 + Math.sin(t * 3) * 15,
      y: 200 + Math.cos(t * 3) * 10
    },
    right: {
      x: pos + 20 - Math.sin(t * 3) * 15,
      y: 200 + Math.cos(t * 3) * 10
    }
  };

  return {
    pos,
    neg,
    legs,
    density,
    pulse12e
  };
}
