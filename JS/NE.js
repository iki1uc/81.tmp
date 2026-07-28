// NE.js
// REAL‑Quelle → ∞‑Formel

export function NE(atom) {
    return (
        atom.Elektron * 0.33 +
        atom.Proton   * 0.22 +
        atom.Neutron  * 0.11
    );
}
