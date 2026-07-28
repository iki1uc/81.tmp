// DA.js
// HDF‑Quelle → ∞‑Formel

export function DA(atom) {
    return (
        (atom.Proton + atom.Neutron) /
        (atom.Elektron + 1)
    );
}
