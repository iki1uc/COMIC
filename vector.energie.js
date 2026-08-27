const { CONSEQUENCE_BIO } = require('./consequence.bio.js');
const { PICASSO } = require('./PICASSO.js');

function VECTOR_ENERGIE_BIO(qi, iqq, t = performance.now() * 0.001) {

    const mech = VECTOR_ENERGIE(qi, iqq);

    const bio = CONSEQUENCE_BIO(mech, qi + iqq, t);

    return {
        typ: "vector.energie.bio",

        mechanik: mech,

        growth: bio.growth,
        pulse: bio.pulse,
        mutate: bio.mutate,
        branch: bio.branch,

        hologram: bio.hologram,

        picasso: PICASSO.run(bio.growth)
    };
}
