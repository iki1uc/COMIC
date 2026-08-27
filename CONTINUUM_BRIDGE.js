import { QI_IQQ } from '../PUBLIC/VECTOR_SYSTEM/qi-iqq.js';
import { CONSEQUENCE_BIO } from '../core/consequence.bio.js';

CONTINUUM_BRIDGE.energy = function(t = performance.now() * 0.001) {

    // QI / IQQ Energie holen
    const energie = QI_IQQ.status();

    // SOLL / REALY definieren
    const soll  = energie.qi;
    const realy = energie.flow;

    // CONSEQUENCE BIO HOLOGRAMM
    const bio = CONSEQUENCE_BIO(soll, realy, t);

    // öffentlich machen
    this.öffentlich.qi          = energie.qi;
    this.öffentlich.iqq         = energie.iqq;
    this.öffentlich.flow        = energie.flow;
    this.öffentlich.stabilität  = energie.stabilität;

    // CONSEQUENCE BIO Werte
    this.öffentlich.diff        = bio.diff;
    this.öffentlich.n6          = bio.n6;
    this.öffentlich.growth      = bio.growth;
    this.öffentlich.pulse       = bio.pulse;
    this.öffentlich.mutate      = bio.mutate;
    this.öffentlich.branch      = bio.branch;

    // HOLOGRAMM
    this.öffentlich.hologram    = bio.hologram;

    // MÜNZEN (organisch)
    this.öffentlich.münzen = {
        gold:     Math.abs(bio.growth * 0.12),
        silber:   Math.abs(bio.pulse  * 0.08),
        bronze:   Math.abs(bio.mutate * 0.06),
        platin:   Math.abs(bio.branch * 0.14),
        diamant:  Math.abs(bio.hologram.shimmer * 0.2)
    };
};
