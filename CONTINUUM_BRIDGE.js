CONTINUUM_BRIDGE.energy = function(t = performance.now() * 0.001) {

    const energie = QI_IQQ.status();

    const soll  = energie.qi;
    const realy = energie.flow;

    const bio = CONSEQUENCE_BIO(soll, realy, t);

    this.öffentlich.qi          = energie.qi;
    this.öffentlich.iqq         = energie.iqq;
    this.öffentlich.flow        = energie.flow;
    this.öffentlich.stabilität  = energie.stabilität;

    this.öffentlich.diff        = bio.diff;
    this.öffentlich.n6          = bio.n6;
    this.öffentlich.growth      = bio.growth;
    this.öffentlich.pulse       = bio.pulse;
    this.öffentlich.mutate      = bio.mutate;
    this.öffentlich.branch      = bio.branch;
    this.öffentlich.hologram    = bio.hologram;

    // FORSAKEN – Schattenimpuls
    this.öffentlich.forsaken = Math.abs(soll - realy) * 0.33;

    this.öffentlich.münzen = {
        gold:     Math.abs(bio.growth * 0.12),
        silber:   Math.abs(bio.pulse  * 0.08),
        bronze:   Math.abs(bio.mutate * 0.06),
        platin:   Math.abs(bio.branch * 0.14),
        diamant:  Math.abs(bio.hologram.shimmer * 0.2)
    };
};
