// Triangle.js
// ∞‑Dreieck: 1‑2‑3‑Exponent

export function Triangle(atom) {
    return (
        atom.Elektron ** 1 +
        atom.Proton   ** 2 +
        atom.Neutron  ** 3
    );
}
