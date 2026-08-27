export function coreScan(){
    return {
        id: "CORE2",
        core: true,
        fn: true,
        stable: true,
        ready: true,

        respo360: {
            id: "RESPO2",
            active: true,
            level: 360,
            pulse: Date.now()
        },

        vector: { x:0, y:0, z:0 },
        source: "RAW",
        stamp: Date.now()
    };
}
