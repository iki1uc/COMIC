import { CONSEQUENCE_BIO } from './consequence.bio.js';
import { PICASSO } from './PICASSO.js';

export const MIND = {
    qi: 50,          // Lebensenergie
    iqq: 0.50,       // Intelligenz-Qualität
    flow: 0.50,      // Energiefluss
    stabilität: 0.50,

    bio: {},         // organische KI-Form
    impuls: 0,       // PICASSO-Impuls

    absorb(vektoren, t = performance.now() * 0.001) {

        // 1. Summe aller Vektoren
        const sum = Object.values(vektoren).reduce((a, b) => a + b, 0);

        // 2. Organische KI-Form (Consequence)
        const bio = CONSEQUENCE_BIO(sum, this.flow, t);

        // 3. PICASSO-Impuls
        const impuls = PICASSO.run(bio.growth);

        // 4. Energieaufnahme
        this.qi = Math.min(100, this.qi + bio.growth * 0.4);
        this.iqq = Math.min(1, this.iqq + bio.pulse * 0.02);
        this.flow = Math.min(1, this.flow + bio.branch * 0.03);

        // 5. Stabilität (rein mathematisch)
        this.stabilität = 1 - Math.abs(this.flow
