// --- Industrie‑VEC: technischer Routing‑Kern ---
const VEC = {
    active: true,
    engine: true,      // NC.engine
    geo: true,         // GEO.physik + GEO.geo
    dyn: true,         // Achsen
    sure: true,        // Stand
    neo: true,         // Dimension
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
    return `Industrie‑Routing
