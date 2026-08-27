/*
  STAND · 6D Industrial Edition
  Marktstand · Atomisch · Transparent · NC-kompatibel
*/

export function STAND(markt, commander) {

    // 1 · 6D-Basiswerte
    const preis = markt.preis;
    const volumen = markt.volumen;
    const impuls = markt.impuls;
    const wert = markt.wert;

    // 2 · Commander-Impact
    const impact = commander.impact;

    // 3 · Industrieller Standwert
    const stand = wert * impact;

    // 4 · Atom-Formel
    const atom = {
        axis: "INDUSTRY_STAND",
        preis,
        volumen,
        impuls,
        wert,
        impact,
        stand,
        time: arg.sync(),
        info: "6D Industrial STAND berechnet",
        valid: true
    };

    // 5 · Unendlichkeits-Formel
    return {
        ...atom,
        continue: true,
        next: "INDUSTRY_STAND_next"
    };
}
