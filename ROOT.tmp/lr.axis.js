export function LR_AXIS(rawator, rolle) {
    return {
        links: rawator,
        rechts: rolle,
        balance: (rawator.power + rolle.power) / 2
    };
}
