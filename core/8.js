function ghost7Sinn(t) {
  const f = forsakenBoost(t);
  const o = n6Orbitals(t);
  const b = run3Beam(t);

  return {
    forsaken: f,
    orbitals: o,
    beam: b,
    depth: (f.gamma + o[2] + b.pos) / 3
  };
}
