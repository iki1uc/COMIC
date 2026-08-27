export function DIAGONAL(l1, l3, l5) {
    return {
        diag: (l1 + l3 + l5) / 3,
        raster: [l1, l3, l5]
    };
}
