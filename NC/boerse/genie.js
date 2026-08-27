/*
  GENIE_structure · Tiefe Edition
  Nur Tiefe · Höhe/Breite bleiben extern
*/

export function GENIE_structure(struct) {

    // Tiefe (3. Dimension)
    const tiefe = Math.round(Math.random() * 100);

    return {
        axis: "GENIE",
        id: `S-${Date.now()}`,
        struct,
        tiefe,                 // <--- nur Tiefe
        info: "GENIE erzeugt Tiefe (3. Dimension)",
        valid: true,
        continue: true,
        next: "GENIE_structure_next"
    };
}
