export function OrbitSync(atom) {
    return {
        O1: "Orbit(X) → " + atom.Elektron,
        O2: "Orbit(Q) → " + atom.Proton,
        O3: "Orbit(N) → " + atom.Neutron,
        Dynamic: "Orbit-Dynamic → " + atom.Orbit
    };
}

