/*
  GENIE_structure · 2D Edition
  Höhe + Breite · Atomisch · NC-kompatibel
*/

export function GENIE_structure(struct) {

    // Höhe (vertical)
    const hoehe = Math.round(Math.random() * 100);

    // Breite (horizontal)
    const breite = Math.round(Math.random() * 100);

    const atom = {
        axis: "GENIE",
        id: `S-${Date.now()}`,
        struct,
        hoehe,
        breite,
        time: arg.sync(),
        info: "GENIE erzeugt 2D Struktur (Höhe + Breite)",
        valid: true
    };

    return {
        ...atom,
        continue: true,
        next: "GENIE_structure_next"
    };
}
