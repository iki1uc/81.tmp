// JS/station.wsad.js

import { Z_Axis } from "./Z.axis.js";
import { V_Axis } from "./V.axis.js";
import { Triangle } from "./Triangle.js";
import { OrbitSync } from "./OrbitSync.js";

import { W } from "./W.vector.js";
import { S } from "./S.vector.js";
import { A } from "./A.vector.js";
import { D } from "./D.vector.js";

import { DA } from "./DA.js";
import { NE } from "./NE.js";
import { BEN } from "./BEN.js";
import { NEU } from "./NEU.js";

export function Station(atom) {

    const Z = Z_Axis(atom);
    const V = V_Axis(atom);
    const T = Triangle(atom);
    const O = OrbitSync(atom);

    const d = DA(atom);
    const n = NE(atom);
    const b = BEN(atom);
    const u = NEU(atom);

    const Σ = Z + V + T + O + d + n + b + u;

    return {
        W: W(Σ),
        S: S(Σ),
        A: A(Σ),
        D: D(Σ)
    };
}
