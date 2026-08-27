// LAUF_FORSAKEN – COMIC alpha/beta/gamma-Achse
export function LAUF_FORSAKEN(lauf) {
    const impuls = lauf.impuls;
    const richtung = lauf.richtung;

    // 1. alpha – Zerfall der Bewegung
    const alpha = impuls - richtung;

    // 2. Neutralpunkt
    const neutral = (impuls + richtung + alpha) / 3;

    // 3. beta – Neuordnung (Continuum)
    const continuum = Math.abs(alpha) * neutral;
    const beta = continuum ** 0.5;

    // 4. gamma – Rückkehr (Sprung)
    const sprung = beta + (impuls / 3);
    const gamma = sprung;

    return {
        alpha,
        neutral,
        continuum,
        beta,
        sprung,
        gamma
    };
}
