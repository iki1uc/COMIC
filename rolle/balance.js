// BALANCE – COMIC 6-Linien-Achse
export function BALANCE(l1, l2, l3, l4, l5, l6) {
    const neutral = (l1 + l2 + l3 + l4 + l5 + l6) / 6;   // Neutralpunkt

    const continuum = (l1 * l4) + (l2 * l5) + (l3 * l6); // Continuum-Achse

    const sprung = continuum + neutral;                 // Achsen-Sprung

    return {
        neutral,
        continuum,
        sprung,
        raster: [l1, l2, l3, l4, l5, l6]
    };
}
