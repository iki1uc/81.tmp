import { Kernel81 } from "./81.kernel.js";

export async function RESPO_81.tmp() {
    const atom = await Kernel81();

    return {
        RESPO_A: "81.tmp-A → " + atom.Elektron,
        RESPO_B: "81.tmp-B → " + atom.Proton,
        RESPO_C: "81.tmp-C → " + atom.Neutron,
        RESPO_D: "81.tmp-D → " + atom.Operator
    };
}

