function forsakenBoost(t) {
  // Original-Kern (dein Picasso)
  const alpha = Math.sin(t * 3) * 80;
  const beta  = Math.abs(alpha) ** 0.7;
  const gamma = beta + (alpha * 0.333);

  // Whirlwind – 3-Potenzkette
  const whirl = [3, 9, 27, 81, 243, 729];
  const density = whirl[Math.floor((t * 2) % whirl.length)];

  // 12e Frequenz-Puls
  const pulse12e = Math.sin(t * 12);

  // 6D-Rotation
  const rot = {
    x: Math.cos(t * 0.5) * gamma,
    y: Math.sin(t * 0.5) * gamma
  };

  // NC²-Meta-Dichte
  const meta = gamma * density;

  return { alpha, beta, gamma, density, pulse12e, rot, meta };
}
