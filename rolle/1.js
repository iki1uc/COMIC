// EINGANG – COMIC Ursprungs-Achse
export function EINGANG(p, v, i) {
    const preis = p;
    const volumen = v;
    const impuls = i;

    // 1. Neutralpunkt
    const neutral = (p + v + i) / 3;

    // 2. Continuum-Achse
    const continuum = v * i;

    // 3. Sprung / Eingang
    const sprung = continuum + p;

    return {
        axis: "EINGANG",
        preis,
        volumen,
        impuls,
        neutral,
        continuum,
        sprung,
        eingang: sprung
    };
}
