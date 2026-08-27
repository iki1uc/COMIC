// COMMANDER – COMIC Impuls-Achse
export function COMMANDER(input) {
    const cmd = input;               // Richtung / Befehl
    const impuls = Math.random();    // Impuls-Achse
    const zeit = Date.now();         // Zeit-Achse

    const neutral = (cmd.length + impuls + zeit) / 3;  // Neutralpunkt
    const continuum = impuls * cmd.length;             // Continuum-Achse
    const sprung = continuum + impuls;                 // Impuls-Sprung

    return {
        cmd,
        impuls,
        zeit,
        neutral,
        continuum,
        sprung,
        impact: sprung
    };
}
