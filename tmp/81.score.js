// tmp/81.score.js

import { MATRIX_81 } from "./81.tmp.js";

export function SCORE() {
    return (
        MATRIX_81.W +
        MATRIX_81.S +
        MATRIX_81.A +
        MATRIX_81.D
    );
}
