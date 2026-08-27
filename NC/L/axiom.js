// ============================================================
//  AXIOM · 3-6-9 · 729-Optimiert
// ============================================================
export const AXIOM = {

    // ─── 1. MANA · Energiefluss ───────────────────────────────
    MANA(flow = 1) {
        return {
            id: "AXIOM-MANA",
            type: "energy",
            flow,
            axis: 3,          // Achse 3
            layer: 1,         // unterste Schicht
            pulse() {
                return this.flow * (0.95 + Math.random() * 0.1);
            },
            expand729() {
                return this.flow * 9 * 9 * 9; // 9³
            }
        };
    },

    // ─── 2. AURA · Resonanzfeld ───────────────────────────────
    AURA(radius = 3) {
        return {
            id: "AXIOM-AURA",
            type: "field",
            radius,
            axis: 6,          // Achse 6
            layer: 2,         // mittlere Schicht
            resonance() {
                return this.radius * (0.85 + Math.random() * 0.15);
            },
            expand729() {
                return this.radius * 9 * 9 * 9;
            }
        };
    },

    // ─── 3. KRAFT · Impuls ─────────────────────────────────────
    KRAFT(force = 1) {
        return {
            id: "AXIOM-KRAFT",
            type: "impact",
            force,
            axis: 9,          // Achse 9
            layer: 3,         // obere Schicht
            impulse() {
                return this.force * (0.9 + Math.random() * 0.3);
            },
            expand729() {
                return this.force * 9 * 9 * 9;
            }
        };
    }
};
