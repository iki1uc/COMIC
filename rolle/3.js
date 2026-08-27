// WIRKUNG – COMIC Impuls-Achse
export function WIRKUNG(station) {
    const wert = station.wert;
    const impuls = Math.random();          // Impuls-Achse

    // 1. Neutralpunkt
    const neutral = (wert + impuls) / 2;

    // 2. Continuum-Achse
    const continuum = wert * impuls;

    // 3. Sprung / Wirkung
    const sprung = continuum + neutral;

    return {
        ...station,
        impuls,
        neutral,
        continuum,
        sprung,
        wirkung: sprung
    };
}
