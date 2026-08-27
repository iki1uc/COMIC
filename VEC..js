export function VECTOR_SIEGER(qi, iqq) {

    const ausgang  = qi + iqq;
    const bewegung = (qi - iqq) + ausgang;

    const energie = (qi * 0.6) + (iqq * 0.4);
    const pover   = ((qi * qi) + (iqq * iqq)) / 9;
    const schlag  = (qi * iqq) / 9;
    const ankunft = (qi + iqq + energie + pover + schlag) / 9;

    const sieger = Math.max(energie, pover, schlag, ankunft);

    return {
        typ: "vector.sieger",
        ausgang,
        bewegung,
        energie,
        pover,
        schlag,
        ankunft,
        sieger
    };
}
