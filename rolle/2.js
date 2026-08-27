// STATION – COMIC Wert-Achse
export function STATION(eingang) {
    const preis = eingang.preis;
    const volumen = eingang.volumen;
    const impuls = eingang.impuls;

    // 1. Neutralpunkt
    const neutral = (preis + volumen + impuls) / 3;

    // 2. Continuum-Achse
    const continuum = volumen * impuls;

    // 3. Sprung / Wert
    const sprung = continuum + preis;

    return {
        axis: "STATION",
        ...eingang,
        neutral,
        continuum,
        sprung,
        wert: sprung
    };
}
