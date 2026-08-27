import { CONSEQUENCE_BIO } from './consequence.bio.js';

export function VECTOR_SCHLAG_BIO(qi, iqq, t = performance.now() * 0.001) {

    const schlag = VECTOR_SCHLAG(qi, iqq);

    const bio = CONSEQUENCE_BIO(schlag.impuls, schlag.ausgang, t);

    return {
        typ: "vector.schlag.bio",
        impuls: schlag.impuls,

        growth: bio.growth,
        pulse: bio.pulse,
        mutate: bio.mutate,
        branch: bio.branch,

        hologram: bio.hologram,

        picasso: PICASSO.run(bio.growth)
    };
}
