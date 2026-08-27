function forsakenBoost(t) {
  const alpha = Math.sin(t * 3) * 80;
  const beta  = Math.abs(alpha) ** 0.7;
  const gamma = beta + (alpha * 0.333);

  return { alpha, beta, gamma };
}
