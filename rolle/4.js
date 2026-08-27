// AUSGANG – COMIC Ausgangs-Achse
export function AUSGANG(wirkung) {
    const eingang = wirkung.eingang;
    const output = wirkung.wirkung;

    // 1. Neutralpunkt
    const neutral = (eingang + output) / 2;

    // 2. Continuum-Achse
    const continuum = eingang * output;

    // 3. Sprung / Ausgang
    const sprung = continuum + neutral;

    // 4. Goldener Schnitt (6)
    const gs6 = sprung / 1.618;

    return {
        ...wirkung,
        neutral,
        continuum,
        sprung,
        ausgang: sprung,
        gs6
    };
}
