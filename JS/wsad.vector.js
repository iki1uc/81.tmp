// wsad.vector.js
// Unendlichkeits‑Vektor‑Motor für dein 81.tmp‑System

import { Z_Axis } from "./Z.axis.js";
import { V_Axis } from "./V.axis.js";
import { Triangle } from "./Triangle.js";
import { OrbitSync } from "./OrbitSync.js";

import { DA } from "./DA.js";
import { NE } from "./NE.js";
import { BEN } from "./BEN.js";
import { NEU } from "./NEU.js";

// Nicht‑lineare Score‑Ableitung
function Score(v) {
    return Math.sign(v) * Math.log(Math.abs(v) + 1);
}

// W‑S‑A‑D‑Vektoren (∞‑Richtungen)
function W(v) { return v ** +1; }   // Aufstieg (∞+)
function S(v) { return v ** -1; }   // Abstieg (∞−)
function A(v) { return -v; }        // Linksrotation (∞↺)
function D(v) { return +v; }        // Rechtsrotation (∞↻)

// Haupt‑Vektor‑Motor
export function WSAD(atom) {

    // Achsen
    const Z = Z_Axis(atom);
    const V = V_Axis(atom);
    const T = Triangle(atom);
    const O = OrbitSync(atom);

    // Quellen
    const d = DA(atom);
    const n = NE(atom);
    const b = BEN(atom);
    const u = NEU(atom);

    // Unendlichkeits‑Summenvektor
    const Σ = Z + V + T + O + d + n + b + u;

    // Score‑Ableitung
    const SΣ = Score(Σ);

    // W‑S‑A‑D‑Vektoren
    return {
        W: W(SΣ),
        S: S(SΣ),
        A: A(SΣ),
        D: D(SΣ)
    };
}
