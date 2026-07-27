export function Orbit6D(atom) {
    return {
        D0: "Root → " + atom.Elektron,
        D1: "Achse → " + atom.Proton,
        D2: "TMP → " + atom.Neutron,
        D3: "Lage → " + atom.Orbit,
        D4: "Later → " + atom.Operator,
        D5: "Ort → " + atom.Elektron.length
    };
}
