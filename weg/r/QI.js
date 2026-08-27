export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE2",
            core: !!obj.core,
            fn: !!obj.fn,
            stable: !!obj.stable,
            ready: !!obj.ready,
            respo: !!obj.respo360,
            time: Date.now(),
            keys: Object.keys(obj)
        };
    }
};
