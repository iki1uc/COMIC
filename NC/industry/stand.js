/*
  MARKT_STATION · NC Edition
  Atomisch · Transparent · Selbst-erklärend
*/

import { arg } from "../core/arg.js";

export const MARKT_STATION = {

    // Atomare Grundwerte
    preis(t) { return t.p; },
    volumen(t) { return t.v; },
    impuls(t) { return t.i; },

    // Wertberechnung
    wert(t) {
        return t.p * t.v * t.i;
    },

    // NC-Station (Atom + Unendlichkeits-Formel)
    station(t) {

        const atom = {
            axis: "MARKT",
            preis: this.preis(t),
            volumen: this.volumen(t),
            impuls: this.impuls(t),
            wert: this.wert(t),
            time: arg.sync(),
            info: "MARKT_STATION erzeugt atomare Marktstruktur",
            valid: true
        };

        return {
            ...atom,
            continue: true,
            next: "MARKT_STATION_next"
        };
    }
};
