// OrbitSync.js
// ∞‑Orbit: Elektron^Proton + Neutron^Orbit

export function OrbitSync(atom) {
    return (
        atom.Elektron ** atom.Proton
    ) + (
        atom.Neutron ** (atom.Orbit || 1)
    );
}
