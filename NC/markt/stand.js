/*
  MARKT_STATION
  Open Door · Atomisch · Transparent · NC-kompatibel
  Jeder Wert erklärt sich selbst.
  Keine Blackbox. Keine Fremdlogik.
*/

export const MARKT_STATION = {

    // 1 · Preis (Atom)
    preis(t) {
        return {
            axis: "MARKT",
            key: "preis",
            value: t.p,
            info: "Preiswert aus t.p"
        };
    },

    // 2 · Volumen (Atom)
    volumen(t) {
        return {
            axis: "MARKT",
            key: "volumen",
            value: t.v,
            info: "Volumen aus t.v"
        };
    },

    // 3 · Impuls (Atom)
    impuls(t) {
        return {
            axis: "MARKT",
            key: "impuls",
            value: t.i,
            info: "Impuls aus t.i"
        };
    },

    // 4 · Wert (Atom)
    wert(t) {
        const w = t.p * t.v * t.i;
        return {
            axis: "MARKT",
            key: "wert",
            value: w,
            info: "Wert = preis * volumen * impuls"
        };
    },

    // 5 · Station (Unendlichkeits-Formel)
    station(t) {

        const atom = {
            axis: "MARKT",
            preis: this.preis(t),
            volumen: this.volumen(t),
            impuls: this.impuls(t),
            wert: this.wert(t),
            time: arg.sync(), // universelle Zeitachse
            info: "MARKT_STATION → vollständige Marktstation erzeugt",
            valid: true
        };

        // Unendlichkeits-Formel
        return {
            ...atom,
            continue: true,
            next: "MARKT_STATION_next"
        };
    }
};
