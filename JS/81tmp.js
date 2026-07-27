import { Kernel81 } from "./3x81.js";

export async function _81tmp() {
    const atom = await Kernel81();

    return {
        "81_A": "Elektron → " + atom.Elektron,
        "81_B": "Proton → " + atom.Proton,
        "81_C": "Neutron → " + atom.Neutron,
        "81_D": "Operator → " + atom.Operator,
        "81_E": "Orbit → " + atom.Orbit,
        "81_F": "Länge → " + atom.Elektron.length
    };
}
