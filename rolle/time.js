// time.js – COMIC Rollen-Stand (Markt + Commander)
export function STAND(markt, commander) {
    const preis = markt.preis;
    const volumen = markt.volumen;
    const impuls = markt.impuls;
    const wert = markt.wert;

    const impact = commander.impact;

    // COMIC-konforme Achsen
    const neutral = (preis + volumen + impuls + impact) / 4;   // Neutralpunkt
    const continuum = impuls * impact;                         // Continuum-Achse
    const sprung = continuum + wert;                           // Rollen-Sprung
    const stand = sprung;                                      // Stand = Ausgang

    return {
        preis,
        volumen,
        impuls,
        wert,
        impact,
        neutral,
        continuum,
        sprung,
        stand
    };
}
