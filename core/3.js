function n6Orbitals(t) {
  const phi = 1.6180339887; // N6 goldener Schnitt
  return [
    40 * phi + Math.sin(t) * 6,
    60 * phi + Math.sin(t * 1.3) * 8,
    80 * phi + Math.sin(t * 1.6) * 10
  ];
}
