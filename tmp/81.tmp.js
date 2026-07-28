// tmp/81.tmp.js

import { Station } from "../JS/station.wsad.js";

export const MATRIX_81 = {};

export function UPDATE_STATION(atom) {
    const v = Station(atom);

    MATRIX_81.W = v.W;
    MATRIX_81.S = v.S;
    MATRIX_81.A = v.A;
    MATRIX_81.D = v.D;
}
