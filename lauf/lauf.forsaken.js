// lauf.forsaken.js – alpha/beta/gamma – naxiom-gerecht

export function LAUF_FORSAKEN(lauf) {

    // alpha – Zerfall der Bewegung
    const alpha = lauf.impuls - lauf.richtung;

    // beta – Neuordnung
    const beta = Math.abs(alpha) ** 0.5;

    // gamma – Rückkehr
    const gamma = beta + (lauf.impuls * 0.333);

    return {
        alpha,
        beta,
        gamma
    };
}
