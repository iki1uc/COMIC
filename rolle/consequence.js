// CONSEQUENCE – COMIC Achsen-Fusion (slide, wette, rolle)
export function CONSEQUENCE(slide, wette, rolle) {
    const power = rolle.power;

    // 1. Neutralpunkt (Balance der drei Kräfte)
    const neutral = (slide + wette + power) / 3;

    // 2. Continuum-Achse (Bewegung zwischen Wette & Rolle)
    const continuum = wette * power;

    // 3. Sprung-Achse (Ausgang der Bewegung)
    const sprung = continuum + slide;

    // 4. Konsequenz = COMIC-Ausgang
    const consequence = sprung;

    return {
        neutral,
        continuum,
        sprung,
        consequence
    };
}
