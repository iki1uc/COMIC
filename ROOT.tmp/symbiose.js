export const SYMBIOSE = {
    ware: null,
    markt: null,

    init(user, use) {
        this.ware = user;
        this.markt = use;
    },

    flow() {
        return {
            wert: this.ware.preis * this.markt.volumen,
            impuls: this.ware.impuls + this.markt.impuls,
            slide: this.markt.slide,
            wette: this.ware.wette
        };
    }
};
