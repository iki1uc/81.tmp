// 81tmp.hyper.js
// Hyper‑Matrix für 81.tmp

import { MATRIX_81 } from "./81.tmp.js";

export function HYPER_81() {

    const hyper = {};

    for (const key in MATRIX_81) {
        const val = MATRIX_81[key];
        hyper[key] = {
            raw: val,
            sq: val ** 2,
            rt: Math.sqrt(Math.abs(val)),
            sign: Math.sign(val)
        };
    }

    return hyper;
}

