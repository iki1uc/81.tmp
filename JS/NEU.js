// NEU.js
// Dynamische Quelle → ∞‑Formel

export function NEU(atom) {
    return (
        (atom.Elektron + atom.Proton + atom.Neutron) ** 0.5
    );
}
