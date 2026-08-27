// y.js – COMIC Rollen-Bewegung (p = Position, v = Verlauf, i = Impuls)
export function Y(p, v, i) {
    const position = p;                 // ORT
    const verlauf = v;                  // Verlauf / HOME → USER
    const impuls = i;                   // Impuls / USE → OUT

    const neutral = (p + v + i) / 3;    // Neutralpunkt der Rolle
    const continuum = p * i;            // Continuum-Achse (Bewegung)
    const sprung = continuum + v;       // Rollen-Sprung (Ausgang)

    const wirkung = sprung;             // Wirkung = Ausgang

    return {
        p: position,
        v: verlauf,
        i: impuls,
        neutral,
        continuum,
        sprung,
        wirkung
    };
}
