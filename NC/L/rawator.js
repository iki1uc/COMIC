// ============================================================
// RAWATOR · Start-Routine · 180°-Kuppel über HOME (⟁)
// ============================================================
import { AXIOM } from "./axiom.js";
import { HOLO_ENGINE } from "./HOLO.engine.js";

const mana = AXIOM.MANA();
const aura = AXIOM.AURA();
const kraft = AXIOM.KRAFT();

function hemisphere(vital) {
    const points = [];
    const r = vital;

    for (let deg = 0; deg <= 180; deg += 10) {
        const theta = deg * (Math.PI / 180);
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        const z = Math.sqrt(Math.max(0, r*r - x*x - y*y));
        points.push({ x, y, z });
    }

    return points;
}

export function RAWATOR_START() {
    HOLO_ENGINE.init();

    const manaPulse = mana.pulse();
    const auraPulse = aura.resonance();
    const kraftPulse = kraft.impulse();
    const vital = (manaPulse + auraPulse + kraftPulse) / 3;

    const dome = hemisphere(vital); // 180°-Kuppel erzeugen

    HOLO_ENGINE.update({
        vital,
        mana: manaPulse,
        aura: auraPulse,
        kraft: kraftPulse,
        dome   // Kuppel über HOME
    });

    console.log("RAWATOR → gestartet, vital:", vital.toFixed(4));
    return { vital, dome };
}
