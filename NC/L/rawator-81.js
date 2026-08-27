export function RAWATOR_729() {
    const frames = [];
    for (let i = 1; i <= 729; i++) {
        frames.push({
            id: `RAW-${i}`,
            type: "raw-frame",
            neutral: true,
            market9: true,        // 9er-Achse aktiv
            conflict: false,
            payload: {},
            index: i,
            layer: Math.ceil(i / 81),  // 9 Schichten à 81
            timestamp: Date.now()
        });
    }
    return frames;
}
