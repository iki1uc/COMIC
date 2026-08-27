export function CONSEQUENCE(slide, wette, rolle) {
    return {
        cause: slide * 0.618,
        effect: wette * rolle.power,
        consequence: (slide * 0.618) + (wette * rolle.power)
    };
}
