/*
  MARKT_STATION · 2D Edition
  Höhe + Breite · Atomisch · NC-kompatibel
*/

export const MARKT_STATION = {

    // Höhe (vertical)
    preis(t) { return t.p; },
    volumen(t) { return t.v; },
    impuls(t) { return t.i; },

    // Wert (Höhe)
    wert(t) {
        return t.p * t.v * t.i;
    },

    // Breite (horizontal)
    breite(t) {
        return t.p + t.v + t.i;
    },

    // Atom + 2D
    station(t) {

        const atom = {
            axis: "MARKT",
            preis: this.preis(t),
            volumen: this.volumen(t),
            impuls: this.impuls(t),
            wert: this.wert(t),      // Höhe
            breite: this.breite(t),  // Breite
            info: "MARKT_STATION erzeugt 2D Marktstruktur",
            valid: true
        };

        return {
            ...atom,
            continue: true,
            next: "MARKT_STATION_next"
        };
    }
};
