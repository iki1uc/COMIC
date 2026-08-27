/*
  COMMANDER · NC Edition
  Atomisch · Transparent · Marktimpuls · Selbst-erklärend
*/

export function COMMANDER(input) {

    // Atom-Einheit
    const atom = {
        axis: "COMMANDER",
        cmd: input,
        impact: Math.random(),     // Marktimpuls
        time: arg.sync(),          // NC-Zeitachse
        info: "COMMANDER erzeugt neuen Impuls",
        valid: true
    };

    // Unendlichkeits-Formel
    return {
        ...atom,
        continue: true,
        next: "COMMANDER_next"
    };
}
