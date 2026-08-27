const { CONSEQUENCE_BIO } = require('./consequence.bio.js');
const { PICASSO } = require('./PICASSO.js');

function VECTOR_POVER_BIO(qi, iqq, t = performance.now() * 0.001) {

    const mech = VECTOR_POVER(qi, iqq);

    const bio = CONSEQUENCE_BIO(mech.potenz, mech.pover, t);

    return {
        typ: "vector.pover.bio",

        potenz: mech.potenz,
        pover: mech.pover,

        growth: bio.growth,
        pulse: bio.pulse,
        mutate: bio.mutate,
        branch: bio.branch,

        hologram: bio.hologram,

        picasso: PICASSO.run(bio.growth)
    };
}
