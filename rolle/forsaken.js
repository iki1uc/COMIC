// ROLLE – Lauf 4 – forsaken.js
// Zustand: Bewegung fällt aus der Achse und ordnet sich neu

export function FORSAKEN(rolle, markt, impuls) {

    // Zerfall der rechten Achse
    const drop = (rolle.power * markt.volumen) - impuls;

    // Neuordnung der Bewegung
    const reorder = Math.abs(drop) ** 0.5;

    // Schattenbewegung (forsaken)
    const shadow = (rolle.power + markt.impuls) * 0.333;

    // Rückkehr in die Achse
    const returnFlow = reorder + shadow;

    return {
        drop,
        reorder,
        shadow,
        returnFlow
    };
}
