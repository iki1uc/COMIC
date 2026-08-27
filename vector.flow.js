// vector.flow.js
// FLOW = Energiefluss zwischen QI und IQQ
// Erweiterte E‑Anweisung · iki1uc · industry-6.0

import { PICASSO } from './PICASSO.js';

// QI = Rolle + Ort + Home
export function QI(rolle, ort, home) {
    const base = rolle + ort + home;
    const reinheit = base / 3; // E‑Normierung
    const p = PICASSO.run(reinheit);
    return { base, reinheit, picasso: p };
}

// IQQ = Suite + Bildung
export function IQQ(suite, bildung) {
    const base = suite + bildung;
    const reinheit = base / 2; // E‑Normierung
    const p = PICASSO.run(reinheit);
    return { base, reinheit, picasso: p };
}

// ENGINE = Mischung aus QI und IQQ
export function ENGINE(qi, iqq) {
    const engine = (qi.reinheit * 0.6) + (iqq.reinheit * 0.4);
    const kraft = engine * 1.2; // E‑Verstärkung
    const p = PICASSO.run(kraft);
    return { engine, kraft, picasso: p };
}

// FLOW-Wert (0–1)
export function FLOW(qi, iqq) {
    const e = ENGINE(qi, iqq);

    const flow = Math.min(1, Math.max(0, e.engine / 100));
    const stabilität = 1 - Math.abs(flow - 0.5);

    const impuls = (qi.reinheit - iqq.reinheit) * flow;

    return {
        flow,
        stabilität,
        impuls,
        picasso: PICASSO.run(impuls)
    };
}

// Potender (steigend)
export function potenderVector(qi, iqq) {
    const f = FLOW(qi, iqq);
    const e = ENGINE(qi, iqq);

    const richtung = (e.kraft + f.impuls) * 0.8;
    const ausgang = e.kraft + richtung;

    return {
        typ: "potender",
        flow: f.flow,
        stabilität: f.stabilität,
        engine: e.engine,
        richtung,
        ausgang,
        picasso: PICASSO.run(ausgang)
    };
}

// Abfall (fallend)
export function abfallVector(qi, iqq) {
    const f = FLOW(qi, iqq);
    const e = ENGINE(qi, iqq);

    const richtung = (e.kraft - (qi.reinheit + iqq.reinheit)) * 0.7;
    const ausgang = e.kraft + richtung;

    return {
        typ: "abfall",
        flow: f.flow,
        stabilität: f.stabilität,
        engine: e.engine,
        richtung,
        ausgang,
        picasso: PICASSO.run(ausgang)
    };
}
