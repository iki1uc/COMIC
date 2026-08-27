// --- Börsen‑VEC: Volatilitäts‑Kern ---
const VEC = {
    active: true,
    vola: true,          // Volatilität aktiv
    axes: [6, 9, 12],    // Börsen‑Achsen
    control: false,
    passage: false,
    state: "idle",
    swings: []           // Schwankungen statt Trades
};

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
    return `Börsen‑Routing über Achse ${axis}: Impuls='${impulse}'`;
}

// --- GENIE.vola Bewertung ---
function GENIE_rate(impulse) {
    const swing = Math.round(Math.random() * 100);
    return `GENIE.vola Schwankungsbewertung für '${impulse}': ${swing}`;
}

// --- Börsen‑Impuls ---
function VEC_swing(impulse) {
    if (!VEC.passage) return "Impuls blockiert → kein Börsen‑Übergang.";
    const rating = GENIE_rate(impulse);
    VEC.swings.push({ impulse, rating });
    return `Börsen‑Schwankung verarbeitet: ${impulse} → ${rating}`;
}

module.exports = {
    VEC,
    DOO_control,
    DOOR_passage,
    VECTOR_route,
    GENIE_rate,
    VEC_swing
};
