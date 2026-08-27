// OLDCITY – COMIC Lauf 4 – Segment-Achsen
export const OLDCITY = {

    HY() {
        const seg = ["◉", 3, 9, "◎", 81, "3↺"];
        const neutral = (3 + 9 + 81) / 3;
        const continuum = 3 * 81;
        const sprung = continuum + 9;

        return {
            name: "HY",
            seg,
            neutral,
            continuum,
            sprung,
            cache: false
        };
    },

    PE() {
        const seg = ["◉", 9, "◎", 81, "◆", "△", "▣"];
        const neutral = (9 + 81) / 2;
        const continuum = 9 * 81;
        const sprung = continuum + 9;

        return {
            name: "PE",
            seg,
            neutral,
            continuum,
            sprung,
            cache: false
        };
    },

    PER() {
        const seg = [3, 9, 81, "◆", 756, "△", 27, "▣", "3↺"];
        const neutral = (3 + 9 + 81 + 756 + 27) / 5;
        const continuum = 3 * 756;
        const sprung = continuum + 81;

        return {
            name: "PER",
            seg,
            neutral,
            continuum,
            sprung,
            cache: false
        };
    },

    all() {
        return {
            HY: this.HY(),
            PE: this.PE(),
            PER: this.PER()
        };
    }
};
