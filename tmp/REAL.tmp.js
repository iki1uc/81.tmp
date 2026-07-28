import { MATRIX_81 } from "./81.tmp.js";
import { UPDATE_81 } from "./81.score.js";
import { VIEW_81_MATRIX } from "./81.viewer.js";

export function REAL_REASPO_SCAN() {

    UPDATE_81(MATRIX_81, "d1", +1);
    UPDATE_81(MATRIX_81, "e3", -2);
    UPDATE_81(MATRIX_81, "s7", +3);

    const div = document.createElement("div");
    div.appendChild(VIEW_81_MATRIX(MATRIX_81));

    return div;
}
