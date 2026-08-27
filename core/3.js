function n6Orbitals(t) {
  const phi = 1.6180339887; // Goldener Schnitt

  // Grundorbitale (wie bei dir)
  const o1 = 40 * phi + Math.sin(t) * 6;
  const o2 = 60 * phi + Math.sin(t * 1.3) * 8;
  const o3 = 80 * phi + Math.sin(t * 1.6) * 10;

  // Whirlwind – 3-Potenzkette
  const whirl = [3, 9, 27, 81, 243, 729];
  const density = whirl[Math.floor((t * 2) % whirl.length)];

  // 12e Frequenz-Puls
  const pulse12e = Math.sin(t * 12);

  // 6D-Rotation (Orbitale drehen sich im Raum)
  const rot = {
    x: Math.cos(t * 0.7) * o3,
    y: Math.sin(t * 0.7) * o3
  };

  return {
    orbitals: [o1, o2, o3],
    density,     // NC²-Dichte
    pulse12e,    // 12e-Frequenz
    rot          // 6D-Rotationsachse
  };
}
