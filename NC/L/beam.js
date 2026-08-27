// ============================================================
// BEAM · Kernel · 729-Strahlkörper · sichtbar/unsichtbar/stofflich
// ============================================================
export async function BEAM_KERNEL() {
    let beam;

    try {
        beam = await fetch("./beam.json").then(r => r.json());
    } catch (err) {
        console.warn("BEAM → beam.json konnte nicht geladen werden, nutze Standardwerte", err);
        beam = { id: "BEAM-01", axis: "X", layer: 1, x4: true, state: "active", nc: true };
    }

    // ─────────────────────────────────────────────────────────────
    // 1. 729-Strahlkörper erzeugen (9³)
    // ─────────────────────────────────────────────────────────────
    const beam729 = [];
    for (let i = 1; i <= 729; i++) {
        beam729.push({
            id: `BEAM-${i}`,
            axis: beam.axis,
            layer: Math.ceil(i / 81),   // 9 Schichten à 81
            index: i,
            x4: (i % 4 === 0),
            state: beam.state,
            nc: beam.nc,
            timestamp: Date.now()
        });
    }

    // ─────────────────────────────────────────────────────────────
    // 2. Sichtbare / Unsichtbare / Stoffliche Ebenen
    // ─────────────────────────────────────────────────────────────
    const sichtbar = {
        hoehe: RAWATOR_LIFE.vital,
        breite: RAWATOR_LIFE.vital * 0.75
    };

    const unsichtbar = {
        tiefe: RAWATOR_LIFE.vital * 0.33,
        raw81: RAWATOR_LIFE.hologramm.length,
        raw729: beam729.length
    };

    const stoff = {
        nebel: RAWATOR_LIFE.vital < 0.3,
        gas: RAWATOR_LIFE.vital >= 0.3 && RAWATOR_LIFE.vital < 0.6,
        sauerstoff: RAWATOR_LIFE.sauerstoff.vital,
        co2: RAWATOR_LIFE.co2.vital,
        wasser: RAWATOR_LIFE.wasser.vital
    };

    // ─────────────────────────────────────────────────────────────
    // 3. BEAM → RAWATOR verbinden
    // ─────────────────────────────────────────────────────────────
    window.RAWATOR = {
        wake: true,
        evo: "city",
        travel: "atlantis",
        beam: beam729,
        sichtbar,
        unsichtbar,
        stoff
    };

    console.log("BEAM ACTIVE → RAWATOR 729-STRUKTUR WAKING…");
    return beam729;
}
