// V.axis.js
// ∞⁴‑Hypervektor: Elektron‑Proton‑Neutron‑Multiplikation

export function V_Axis(atom) {
    return (
        atom.Elektron *
        atom.Proton *
        atom.Neutron
    ) ** 4;
}
