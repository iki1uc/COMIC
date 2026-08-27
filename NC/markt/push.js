/*
  COMMANDER
  Atomisch · Transparent · Unendlich · Markt-Impuls
  Jeder Commander erzeugt einen Impuls, der sich selbst erklärt.
*/

export function COMMANDER(input) {

    // Atom-Einheit
    const atom = {
        axis: "COMMANDER",
        cmd: input,
        impact: Math.random(),      // Marktimpuls
        time: arg.sync(),           // universelle Zeitachse
        info: "Commander erzeugt neuen Impuls",
        valid: true
    };

    // Unendlichkeits-Formel
    return {
        ...atom,
        continue: true,
        next: "COMMANDER_next"
    };
}
