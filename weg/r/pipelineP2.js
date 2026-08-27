export const P2 = {
    run(core){
        return {
            id: "P2:P2",
            phase: "vectorize",
            vector: {
                x: Math.random(),
                y: Math.random(),
                z: Math.random()
            },
            ready: true,
            core
        };
    }
};
