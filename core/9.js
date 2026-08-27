// UNI-MATRIX – Natur/Atom/Gas/Industrie6 + Whirlwind-3-Potenzkette

const UNI = {
  POS: +1,              // positive Ladung
  NEG: -1,              // negative Ladung

  O2:  { orbit: O },    // Sauerstoff-Orbitale
  CO2: { beam: B },     // CO2 lineare Struktur

  GAS: G,               // Ghost7Sinn → Gasverhalten / Energiezustand
  GEO: GEO.pyramid,     // Molekül-Geometrie

  WHIRL: {
    base: 3,            // Grundachse
    seq: [3, 9, 27, 81, 243, 729], // 3^1 bis 3^6
    pow: {
      "3hoch8": Math.pow(3, 8),    // 6561
      "3hoch81": Math.pow(3, 81)   // astronomisch groß
    },
    axiom: "3^n = Industrie-Dichte",
    layer: "NC²-Dichte-Expansion"
  }
};
