// yx.js – iki1uc Meta-Universum (COMIC-konform)
export function YX(x, y, q) {
    const unter = x;          // Unterraum
    const mittel = y;         // Mittelraum
    const ueber = q;          // Überraum

    const neutral = (unter + mittel + ueber) / 3;   // Neutralpunkt
    const continuum = unter * mittel;               // Continuum-Achse
    const sprung = continuum + ueber;               // Überraum-Sprung

    return {
        x: unter,
        y: mittel,
        q: ueber,
        neutral,
        continuum,
        sprung,
        yx: sprung
    };
}
