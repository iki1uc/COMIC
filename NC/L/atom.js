export const Atom = {
    electron: -1,
    proton: +1,
    neutron: 0,

    charge(state) {
        return state.reduce((a, b) => a + b, 0);
    },

    vital(p, v, i) {
        return (p + v + i) / 3;
    },

    // 243-Zustände erzeugen
    state243() {
        const states = [];
        for (let a = -1; a <= 1; a++) {
            for (let b = -1; b <= 1; b++) {
                for (let c = -1; c <= 1; c++) {
                    for (let p = 1; p <= 3; p++) {
                        for (let v = 1; v <= 3; v++) {
                            states.push({
                                charge: this.charge([a, b, c]),
                                vital: this.vital(p, v, 1),
                                axis: [3, 6, 9][(p + v + 1) % 3]
                            });
                        }
                    }
                }
            }
        }
        return states;
    }
};
