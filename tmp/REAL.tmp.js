// tmp/REAL.tmp.js

import { UPDATE_STATION } from "./81.tmp.js";

export function REAL_REASPO_SCAN(atom) {

    UPDATE_STATION(atom);

    return {
        W: MATRIX_81.W,
        S: MATRIX_81.S,
        A: MATRIX_81.A,
        D: MATRIX_81.D
    };
}
