// tmp/81.scan.js

import { MATRIX_81 } from "./81.tmp.js";

export function SCAN_81() {

    const errors = [];
    const fixes = [];
    const empty = [];
    const invalid = [];

    for (const key in MATRIX_81) {

        const val = MATRIX_81[key];

        // Leere Felder
        if (val === undefined || val === null) {
            empty.push(key);
            MATRIX_81[key] = 0;
            fixes.push(`Set ${key} = 0`);
            continue;
        }

        // Ungültige Werte
        if (typeof val !== "number") {
            invalid.push(key);
            MATRIX_81[key] = Number(val) || 0;
            fixes.push(`Fix ${key} → Number`);
            continue;
        }

        // Negative Werte
        if (val < 0) {
            errors.push(key);
            MATRIX_81[key] = Math.abs(val);
            fixes.push(`Fix ${key} → abs`);
        }

        // Werte über 999
        if (val > 999) {
            errors.push(key);
            MATRIX_81[key] = 999;
            fixes.push(`Cap ${key} → 999`);
        }
    }

    return {
        status: errors.length === 0 ? "OK" : "FIX",
        empty,
        invalid,
        errors,
        fixes,
        matrix: MATRIX_81
    };
}
