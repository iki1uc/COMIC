function run3Beam(t) {
  return {
    pos: 50 + Math.sin(t * 2) * 40,
    neg: 450 + Math.cos(t * 2) * 40
  };
}
