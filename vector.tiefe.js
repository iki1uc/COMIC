import { CONSEQUENCE_BIO } from './consequence.bio.js';

export function VECTOR_TIEFE_BIO(qi, iqq, t = performance.now() * 0.001) {

    const tiefe = VECTOR_TIEFE(qi, iqq);

    const bio = CONSEQUENCE_BIO(tiefe.trieb, tiefe.engine, t);

    return {
        typ: "vector.tiefe.bio",
        trieb: tiefe.trieb,
        engine: tiefe.engine,
        tiefe: tiefe.tiefe,

        growth: bio.growth,
        pulse: bio.pulse,
        mutate: bio.mutate,
        branch: bio.branch,

        hologram: bio.hologram,

        picasso: PICASSO.run(bio.growth)
    };
}
