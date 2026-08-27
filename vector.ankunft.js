const { CONSEQUENCE_BIO } = require('./consequence.bio.js');
const { PICASSO } = require('./PICASSO.js');

function VECTOR_ANKUNFT_BIO(qi, iqq, t = performance.now() * 0.001) {

    const mech = VECTOR_ANKUNFT(qi, iqq);

    const bio = CONSEQUENCE_BIO(mech.ankunft, mech.ausgang, t);

    return {
        typ: "vector.ankunft.bio",

        energie: mech.energie,
        pover: mech.pover,
        schlag: mech.schlag,
        ankunft: mech.ankunft,

        growth: bio.growth,
        pulse: bio.pulse,
        mutate: bio.mutate,
        branch: bio.branch,

        hologram: bio.hologram,

        picasso: PICASSO.run(bio.growth)
    };
}
