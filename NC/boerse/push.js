/*
  COMMANDER · 2D Edition
  Höhe + Breite · NC-kompatibel
*/

export function COMMANDER(input) {

    // Höhe (vertical)
    const impact_h = Math.random();

    // Breite (horizontal)
    const impact_b = Math.random() * 0.5 + impact_h * 0.5;

    return {
        axis: "COMMANDER",
        cmd: input,
        impact_h: impact_h,     // Höhe
        impact_b: impact_b,     // Breite
        time: Date.now(),
        info: "2D Commander erzeugt (Höhe + Breite)",
        valid: true,
        continue: true,
        next: "COMMANDER_next"
    };
}
