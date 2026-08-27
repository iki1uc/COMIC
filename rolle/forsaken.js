// FORSAKEN – COMIC Rollen-Drop + Rückkehr
export function FORSAKEN(rolle, markt, impuls) {

    const power = rolle.power;
    const volumen = markt.volumen;
    const marktImpuls = markt.impuls;

    // 1. Drop-Achse (Fall aus der Rolle)
    const drop = (power * volumen) - impuls;

    // 2. Neutralpunkt nach dem Fall
    const neutral = (power + volumen + impuls) / 3;

    // 3. Continuum-Achse (Neuordnung)
    const continuum = Math.abs(drop) * neutral;

    // 4. Schatten-Achse (forsaken)
    const shadow = (power + marktImpuls) / 3;

    // 5. Rückkehr in die Achse
    const returnFlow = continuum + shadow;

    return {
        drop,
        neutral,
        continuum,
        shadow,
        returnFlow
    };
}
