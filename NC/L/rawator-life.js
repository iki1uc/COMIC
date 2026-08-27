generateDome(vital) {
    const dome = [];
    const r = vital;

    for (let deg = 0; deg <= 180; deg += 6) {
        const theta = deg * (Math.PI / 180);
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        const z = Math.sqrt(Math.max(0, r*r - x*x - y*y));
        dome.push({ deg, x, y, z });
    }

    return dome;
}
RAWATOR_LIFE erzeugt aus Mana, Aura und Kraft einen Vitalwert. Dieser
Vitalwert bildet die Grundlage einer 180°-Hemisphäre über dem SEED ⟁.
Die Halbkugel ist die Meta-Achse des Systems und entspricht der Achse
MYSTERY. Sie liegt über der GEO-Matrix (ORT, HOME, USER, USE, OUT,
ROLLE) und bildet die übergeordnete Struktur des RAWATOR-Kerns.

Die Größe der Kuppel ist proportional zur Vitalität und wird aus der
Superposition der drei RAWATOR-Kräfte berechnet. Damit ist die Kuppel
eine reine mathematische Form ohne Last und ohne Engine, die die
übergeordnete Achse des Systems darstellt.
