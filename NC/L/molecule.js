import { Atom } from "./atom.js";

export const Molecule = {
    H2O() {
        return {
            name: "Wasser",
            atoms: ["H", "H", "O"],
            charge: Atom.charge([Atom.proton, Atom.proton, Atom.neutron]),
            vital: Atom.vital(1, 1, 1),
            axis: 3,          // Wasser = Basisachse
            layer: 1,         // unterste Schicht im 9³-Körper
            index: 1          // Startpunkt
        };
    },
    O2() {
        return {
            name: "Sauerstoff",
            atoms: ["O", "O"],
            charge: Atom.charge([Atom.neutron, Atom.neutron]),
            vital: Atom.vital(2, 1, 1),
            axis: 6,          // Sauerstoff = Resonanzachse
            layer: 2,         // mittlere Schicht
            index: 2
        };
    },
    CO2() {
        return {
            name: "Kohlenstoffdioxid",
            atoms: ["C", "O", "O"],
            charge: Atom.charge([Atom.neutron, Atom.neutron, Atom.neutron]),
            vital: Atom.vital(3, 2, 1),
            axis: 9,          // CO2 = Impulsachse (ROLLE)
            layer: 3,         // obere Schicht
            index: 3
        };
    }
};
