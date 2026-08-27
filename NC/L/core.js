window.SYS.VIEW = function () {
    const vital = RAWATOR_LIFE.vital;

    // Sichtbare Ebene
    const sichtbar = {
        hoehe: vital,
        breite: vital * 0.75
    };

    // Unsichtbare Ebene
    const unsichtbar = {
        tiefe: vital * 0.33,
        raw81: RAWATOR_LIFE.hologramm.length,
        raw729: window.SYS.ROOM.NC.RAWATOR.holo.length
    };

    // Stoffliche Darstellung
    const stoff = {
        nebel: vital < 0.3,
        gas: vital >= 0.3 && vital < 0.6,
        sauerstoff: RAWATOR_LIFE.sauerstoff.vital,
        co2: RAWATOR_LIFE.co2.vital,
        wasser: RAWATOR_LIFE.wasser.vital
    };

    return { sichtbar, unsichtbar, stoff };
};
