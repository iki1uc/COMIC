// GENIE_structure – COMIC Bewertungs-Achse
export function GENIE_structure(struct) {
    const { p, v, i } = struct;

    const neutral = (p + v + i) / 3;     // Neutralpunkt
    const continuum = v * i;            // Continuum-Achse
    const sprung = continuum + p;       // Bewertungs-Sprung
    const score = Math.round(sprung);   // COMIC-Score

    return {
        id: `S-${Date.now()}`,
        struct,
        neutral,
        continuum,
        sprung,
        score
    };
}
