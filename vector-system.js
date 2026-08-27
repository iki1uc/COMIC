import { VECTOR_ENERGIE } from './vector.energie.js';
import { VECTOR_POVER } from './vector.pover.js';
import { VECTOR_SCHLAG } from './vector.schlag.js';
import { VECTOR_ANKUNFT } from './vector.ankunft.js';
import { FLOW } from './vector.flow.js';
import { VECTOR_TIEFE_PICASSO } from './vector.tiefe.js';
import { CONSEQUENCE_BIO } from './consequence.bio.js';
import { PICASSO } from './PICASSO.js';

export const VECTOR_SYSTEM = {

    earn: { wert: 0 },
    qi: { wert: 50 },
    iqq: { wert: 0.5 },

    vektoren: {
        tiefe: 0.5,
        energie: 0.5,
        flow: 0.5,
        pover: 0.5,
        schlag: 0.5,
        ankunft: 0.5
    },

    mind: {
        qi: 50,
        iqq: 0.5,
        flow: 0.5,
        stabilität: 0.5
    },

    continuum: "geöffnet",

    brücke: {
        verbindungen: [],
        verbinden(ziel, vektor) {
            this.verbindungen.push({ ziel, vektor });
        }
    },

    // QI / Earn
    setzeEarn(rolle, ort, home) {
        this.earn.wert = rolle + ort + home;
        this.qi.wert = 50 + rolle - home;
    },

    // IQQ
    setzeIQQ(suite, bildung) {
        this.iqq.wert = suite + bildung;
        this.mind.iqq = suite + bildung;
    },

    // Organische Vektor-Mechanik
    updateVektoren(t = performance.now() * 0.001) {

        const qi = this.qi.wert;
        const iqq = this.iqq.wert;

        // Mechanische Energie
        const energie = VECTOR_ENERGIE(qi, iqq);

        // Potenzkraft
        const pover = VECTOR_POVER(qi, iqq);

        // Momentimpuls
        const schlag = VECTOR_SCHLAG(qi, iqq);

        // Endpunkt
        const ankunft = VECTOR_ANKUNFT(qi, iqq);

        // Flow
        const flow = FLOW({ base: qi }, { base: iqq });

        // Tiefe (organisch)
        const tiefe = VECTOR_TIEFE_PICASSO(q
