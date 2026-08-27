// weg.forsaken.js – alpha/beta/gamma – naxiom-gerecht

export function WEG_FORSAKEN(weg) {

    // alpha – Zerfall der Strecke
    const alpha = weg.distanz - weg.richtung;

    // beta – Neuordnung
    const beta = Math.abs(alpha) ** 0.5;

    // gamma – Rückkehr
    const gamma = beta + (weg.distanz * 0.333);

    return {
        alpha,
        beta,
        gamma
    };
}
