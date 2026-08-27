import { VECTOR_TIEFE_PICASSO } from './vector.tiefe.js';
import { CONSEQUENCE_BIO } from './consequence.bio.js';
import { PICASSO } from './PICASSO.js';

export function VIS_EXPORT(n6, qi, iqq, t = performance.now() * 0.001) {

    // VECTOR Tiefe
    const tiefe = VECTOR_TIEFE_PICASSO(qi, iqq, t);

    // CONSEQUENCE Bio
    const bio = CONSEQUENCE_BIO(tiefe.tiefe, tiefe.consequence, t);

    return {
        // N6 Export
        ware: n6.n1,
        markt: n6.n2,
        balance: n6.n3,
        weg: n6.n4,
        slide: n6.n5,
        wette: n6.n6,

        // VECTOR Tiefe
        vector: {
            trieb: tiefe.trieb,
            engine: tiefe.engine,
            tiefe: tiefe.tiefe,
            consequence: tiefe.consequence,
            picasso: tiefe.picasso
        },

        // BIO Consequence
        bio: {
            growth: bio.growth,
            pulse: bio.pulse,
            mutate: bio.mutate,
            branch: bio.branch,
            hologram: bio.hologram
        },

        // PICASSO Visualisierung
        vis: PICASSO.run(bio.growth)
    };
}
