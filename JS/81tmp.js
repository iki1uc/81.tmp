// Neue Version – 81.tmp kompatibel
import { Kernel81 } from "./3x81.js";
import structure from "./81.tmp.js";

export async function _81tmp() {
    const atom = await Kernel81();

    return {
        X: structure.X,
        Q: structure.Q,
        TMP: structure.TMP,

        // optional: alte Werte bleiben verfügbar
        Elektron: atom.Elektron,
        Proton: atom.Proton,
        Neutron: atom.Neutron,
        Orbit: atom.Orbit,
        Operator: atom.Operator
    };
}
