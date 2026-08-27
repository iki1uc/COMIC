export function N6_FLOW(user, use, lr, weg) {
    return {
        n1: user.preis,
        n2: use.volumen,
        n3: lr.balance,
        n4: weg,
        n5: SLIDE(user.preis + use.volumen),
        n6: WETTE(use.risk, user.preis)
    };
}
