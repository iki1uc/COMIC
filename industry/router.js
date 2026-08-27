// ============================================================
// ORT · Router · Industrie6D · NC² · 12e
// Achsen: ORT → TMP → ACHSE → LAGE → laTER → RAUM → QUANT → SYN
// ============================================================

export const ORT_ROUTER = {

    axes: {
        ORT:   "./ORT.html",
        TMP:   "./tmp.a",
        ACHSE: "./ACHSE.axm",
        LAGE:  "./room/LAGE.room",
        laTER: "./laTER.respo",
        RAUM:  "./RAUM.html",
        QUANT: "./QUANT.raw",
        SYN:   "./Freq.html"
    },

    master: "./MAIN.respo",

    state: {
        axis: "ORT",
        master: false,
        user: null,
        freq: "12e"
    },

    go(axis) {
        if (axis === "MAIN") {
            this.state.master = true;
            window.location.href = this.master;
            return;
        }

        if (!this.axes[axis]) return;
        this.state.axis = axis;
        window.location.href = this.axes[axis];
    },

    async loadUser() {
        try {
            const html = await fetch("./user/ID.html").then(r => r.text());
            this.state.user = html;
        } catch {
            this.state.user = null;
        }
        return this.state.user;
    }
};
