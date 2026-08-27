// --- Börsen‑VEC: Volatilitäts‑Kern ---
const VEC = {
    active: true,
    vola: true,          // Volatilität aktiv
    axes: [6, 9, 12],    // Börsen‑Achsen (Breite)
    depth: 0,            // <--- NEUE TIEFE
    control: false,
    passage: false,
    state: "idle",
    swings: []           // Schwankungen statt Trades
};

// --- Tiefe berechnen (Volatilitäts‑Schichtung) ---
function VEC_depth(impulse) {
    // Tiefe = Komplexität des Impulses
    const base = impulse.length || 1;
    const random = Math.random() * 10;
    VEC.depth = Math.round(base + random);
    return `Tiefe berechnet: ${VEC.depth}`;
}

// --- DOO/IT.vola Kontrolle ---
function DOO_control() {
    VEC.control = true;
    VEC.state = "vola-control-ready";
    return "DOO/IT.vola Kontrolle aktiviert.";
}

// --- DOOR.vola Übergang ---
function DOOR_passage() {
    VEC.passage = true;
    VEC.state = VEC.control ? "stable-vola" : "tmp-vola";
    return `DOOR.vola geöffnet → Zustand: ${VEC.state}`;
}

// --- VECTOR.vola Routing ---
function VECTOR_route(impulse) {
    if (!VEC.passage) return "Kein Börsen‑Übergang aktiv.";
    const axis = VEC.axes[Math.floor(Math.random() * VEC.axes.length)];
    const depthInfo = VEC_depth(impulse);   // <--- Tiefe einbauen
    return `Börsen‑Routing über Achse ${axis}: Impuls='${impulse}' → ${depthInfo}`;
}

// --- GENIE.vola Bewertung ---
function GENIE_rate(impulse) {
    const swing = Math.round(Math.random() * 100);
    return `GENIE
