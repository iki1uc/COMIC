/*
  STAND · Börse 6.0
  Schwankungen + Vibrationen integriert
*/

export function STAND(markt, commander) {

    const stand = markt.wert * commander.impact;

    // 1 · Mikro‑Vibration (kleine Schwankung)
    const vibe = (Math.sin(stand) * 0.1);

    // 2 · Volatilität (Breite der Schwankung)
    const vola = Math.abs(markt.impuls - commander.impact);

    // 3 · Swing (Richtung + Stärke)
    const swing = (markt.impuls * commander.impact) - markt.preis * 0.01;

    return {
        axis: "BOERSE_STAND",
        preis: markt.preis,
        volumen: markt.volumen,
        impuls: markt.impuls,
        wert: markt.wert,
        impact: commander.impact,
        stand,
        vibe,      // Mikro‑Vibration
        vola,      // Volatilität
        swing,     // Schwankungsrichtung
        info: "Börsenstand + Schwankungen/Vibrationen berechnet",
