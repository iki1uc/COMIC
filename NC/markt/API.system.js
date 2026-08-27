/*
  API.system.js · Virtual Marketplace Core
  Open Door · Atomisch · Transparent · NC-kompatibel
*/

export const VEC = {
    active: true,
    vector: true,
    genie: true,
    control: false,
    passage: false,
    state: "idle",
    trades: []
};

// 1 · Kontrolle durch DOO/IT
export function DOO_control() {
    VEC.control = true;
    VEC.state = "control-ready";
    return {
        axis: "API",
        step: "DOO_control",
        state: VEC.state,
        info: "DOO/IT Kontrolle aktiviert",
        valid: true,
        next: "DOO_control_next"
    };
}

// 2 · DOOR Übergang
export function DOOR_passage() {
    VEC.passage = true;

    const mode = VEC.control
        ? "stable-transition"
        : "tmp-transition";

    VEC.state = mode;

    return {
        axis: "API",
        step: "DOOR_passage",
        state: VEC.state,
        info: `DOOR geöffnet → ${mode}`,
        valid: true,
        next: "DOOR_passage_next"
    };
}

// 3 · VECTOR Routing
export function VECTOR_route(input) {
    if (!VEC.passage) {
        return {
            axis: "API",
            step: "VECTOR_route",
            info: "Kein Übergang aktiv",
            valid: false
        };
    }

    return {
        axis: "API",
        step: "VECTOR_route",
        route: input,
        info: `Routing über .VECTOR: ${input}`,
        valid: true,
        next: "VECTOR_route_next"
    };
}

// 4 · GENIE Bewertung
export function
