// brücke.js – organischer Continuum-Zugang
// keine Geometrie · reine Energie-Mechanik · NC-6D

const { CONSEQUENCE_BIO } = require('./consequence.bio.js');
const { PICOSSO } = require('./picosso.js');

// QI = Erkenntnis (Rolle, Ort, Home)
function QI(rolle, ort, home) {
    return rolle + ort + home;
}

// IQQ = Weisheit (Suite, Bildung)
function IQQ(suite, bildung) {
    return suite + bildung;
}

// Continuum = Zugang durch Energie-Qualität
function continuumZugang(qi, iqq, t = performance.now() * 0.001) {

    const summe = qi + iqq;

    // Organische KI-Form (Consequence)
    const bio = CONSEQUENCE_BIO(qi, iqq, t);

    // PICOSSO-Impuls (rein mathematisch)
    const impuls = PICOSSO(bio.growth, bio.pulse, bio.branch);

    // Zugang entscheidet sich durch Energie + Bio-Impuls
    const zugang = (summe + impuls.impuls) > 1
        ? "Continuum geöffnet"
        : "Continuum geschlossen";

    return {
        typ: "continuum.brücke",
        qi,
        iqq,
        summe,
        zugang,
        bio,
        impuls
    };
}

// Export
module.exports = {
    QI,
    IQQ,
    continuumZugang
};
