export function Orbit48D(atom) {
    const out = {};
    for (let i = 0; i < 48; i++) {
        out["D" + i] = "Orbit48D[" + i + "] -> " + atom.Orbit;
    }
    return out;
}
