// --- GLOBAL Raumliste ---
const ROOMS = [
    "weg",
    "rolle",
    "industry",
    "core",
    "PUBLIC",
    "PIPELINE1",
    "PIPELINE2",
    "PIPELINE3",
    "PIPELINE4",
    "VECTOR_SYSTEM"
];

// --- GLOBAL VEC ---
const GLOBAL_VEC = {
    active: true,
    rooms: {},
    state: "idle"
};

// --- Räume initialisieren ---
function INIT_ROOMS() {
    ROOMS.forEach(room => {
        GLOBAL_VEC.rooms[room] = {
            control: false,
            passage: false,
            trades: [],
            state: "idle"
        };
    });
    GLOBAL_VEC.state = "ready";
    return "Alle Räume initialisiert.";
}
