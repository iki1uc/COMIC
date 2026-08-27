function ghost7Sinn(t) {
  const f = forsakenBoost(t);   // Energie / Gamma
  const o = n6Orbitals(t);      // Orbitale / Atomschalen
  const b = run3Beam(t);        // Beam / Positiv-Negativ

  // Whirlwind – 3-Potenzkette
  const whirl = {
    base: 3,
    seq: [3, 9, 27, 81, 243, 729],     // 3^1 bis 3^6
    pow8: Math.pow(3, 8),              // 3^8 = 6561
    pow81: Math.pow(3, 81),            // 3^81 = astronomische Dichte
    density: Math.pow(3, o[2] % 6),    // Orbitale → Dichte-Modulation
    pulse: Math.sin(t * 12),           // 12e Frequenz-Puls
  };

  return {
    forsaken: f,
    orbitals: o,
    beam: b,

    depth: (f.gamma + o[2] + b.pos) / 3,

    whirlwind: whirl,                  // Whirlwind-Achse integriert
    density: whirl.density,            // NC²-Dichte
    pulse12e: whirl.pulse,             // 12e-Puls
    meta: f.gamma * whirl.pow8         // Industrie-Meta-Kern
  };
}
