// DIAGONAL – COMIC Diagonal-Achse
export function DIAGONAL(l1, l3, l5) {
    const neutral = (l1 + l3 + l5) / 3;      // Neutralpunkt
    const continuum = l1 * l5;              // Continuum-Achse
    const sprung = continuum + l3;          // Diagonal-Sprung
    const diag = sprung;                    // COMIC-Diagonal

    return {
        neutral,
        continuum,
        sprung,
        diag,
        raster: [l1, l3, l5]                // Raster-Achse
    };
}
