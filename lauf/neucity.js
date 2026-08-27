// NEUCITY – COMIC Lauf 5 – Achsen-Stadt
import { GEOG } from "./GEO.geo.js";

export const NEUCITY = {

    // Leitbahn-Achse
    leitbahn(v) {
        const breite = v * 3;
        const hoehe = v * 9;
        const tiefe = v * 27;
        const trans = v * 81;

        const neutral = (breite + hoehe + tiefe + trans) / 4;
        const continuum = breite * trans;
        const sprung = continuum + hoehe;

        return {
            axis: "LEITBAHN",
            breite,
            hoehe,
            tiefe,
            trans,
            neutral,
            continuum,
            sprung
        };
    },

    // Gegen-Cache-Achse
    gegenCache() {
        const HY = GEOG.HY().reverse();
        const PE = GEOG.PE().reverse();
        const PER = GEOG.PER().reverse();

        const neutral = (HY.length + PE.length + PER.length) / 3;
        const continuum = HY.length * PER.length;
        const sprung = continuum + PE.length;

        return {
            axis: "GEGENCACHE",
            HY,
            PE,
            PER,
            neutral,
            continuum,
            sprung
        };
    },

    // TMP-Resultierende-Achse
    tmpResult(v) {
        const TMPa = GEOG.TMPa().map(x => x + "_a");
        const TMPb = GEOG.TMPb().map(x => x + "_b");
        const TMPg = GEOG.TMPg().map(x => x + "_g");

        const neutral = (TMPa.length + TMPb.length + TMPg.length) / 3;
        const continuum = TMPa.length * TMPg.length;
        const sprung = continuum + TMPb.length;

        return {
            axis: "TMP",
            TMPa,
            TMPb,
            TMPg,
            neutral,
            continuum,
            sprung,
            value: v
        };
    },

    // Gesamtpaket
    city(v) {
        return {
            leitbahn: this.leitbahn(v),
            gegenCache: this.gegenCache(),
            tmp: this.tmpResult(v),
            mode: "NEUCITY"
        };
    }
};
