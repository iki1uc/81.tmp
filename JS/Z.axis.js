// Z.axis.js
// ∞³‑Vektor: Proton‑Elektron‑Neutron‑Interaktion

export function Z_Axis(atom) {
    return (
        (atom.Proton * atom.Elektron) -
        (atom.Neutron / (atom.Proton || 1))
    ) ** 3;
}
