// MARKT_STATION – COMIC Markt-Achse
export const MARKT_STATION = {
    preis(t) { return t.p; },          // Preis
    volumen(t) { return t.v; },        // Volumen
    impuls(t) { return t.i; },         // Impuls

    neutral(t) {
        return (t.p + t.v + t.i) / 3;  // Neutralpunkt
    },

    continuum(t) {
        return t.v * t.i;              // Continuum-Achse
    },

    wert(t) {
        return this.continuum(t) + t.p; // COMIC-Wert
    },

    station(t) {
        return {
            axis: "MARKT",
            preis: this.preis(t),
            volumen: this.volumen(t),
            impuls: this.impuls(t),
            neutral: this.neutral(t),
            continuum: this.continuum(t),
            wert: this.wert(t)
        };
    }
};
