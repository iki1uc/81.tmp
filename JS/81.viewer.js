
// tmp/81.viewer.js

import { MATRIX_81 } from "./81.tmp.js";

export function VIEW_81_MATRIX() {

    const div = document.createElement("div");
    div.className = "block";

    div.innerHTML = `
        <h2>WSAD‑Matrix</h2>
        W: ${MATRIX_81.W}<br>
        S: ${MATRIX_81.S}<br>
        A: ${MATRIX_81.A}<br>
        D: ${MATRIX_81.D}<br>
    `;

    return div;
}
