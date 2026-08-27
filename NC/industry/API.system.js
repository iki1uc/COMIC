/*
  Industrie‑VEC · 6.0 Router
  Erweiterung: Breite (neo.breite)
*/

const VEC = {
    active: true,
    engine: true,      // NC.engine
    geo: true,         // GEO.physik + GEO.geo
    dyn: true,         // Achsen
    sure: true,        // Stand
    neo: {
        hoehe: true,
        breite: true,      // <--- NEUE DIMENSION
        tiefe: false
    },
    control: false,
    passage: false,
    state: "idle",
    impulses: []       // technische Impulse, keine Trades
};

// --- DOO/IT.tech Kontrolle ---
function DOO_control() {
    VEC.control = true;
    VEC.state = "control-ready";
    return "DOO/IT.tech Kontrolle aktiviert.";
}

// --- DOOR.tech Übergang ---
function DOOR_passage() {
    VEC.passage = true;
    VEC.state = VEC.control ? "stable-transition" : "tmp-transition";
    return `DOOR.tech geöffnet → ${VEC.state}`;
}

// --- VECTOR.tech Routing ---
function VECTOR_route(segment, axis) {
    if (!VEC.passage) return "Kein technischer Übergang aktiv.";

    return {
        axis: "VECTOR.tech",
        segment,
        axisRoute: axis,
        breite: VEC.neo.breite ? "aktiv" : "inaktiv",
        info: "Industrie‑Routing über VEC.tech",
        valid: true
    };
}

module.exports = {
    VEC,
    DOO_control,
    DOOR_passage,
    VECTOR_route
};
