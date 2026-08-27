// x.js – COMIC Rollen-Struktur (p = Position, v = Verlauf, i = Impuls)
export function X(p, v, i) {
    const position = p;                 // ORT
    const verlauf = v;                  // Verlauf / HOME → USER
    const impuls = i;                   // Impuls / USE → OUT

    const neutral = (p + v + i) / 3;    // Neutralpunkt der Struktur
    const continuum = v * i;            // Continuum-Achse (Struktur)
    const ursprung = p + continuum;     // Rollen-Ursprung (Eingang)

    const ursache = ursprung;           // Ursache = Eingang

    return {
        p: position,
        v: verlauf,
        i: impuls,
        neutral,
        continuum,
        ursprung,
        ursache
    };
}
