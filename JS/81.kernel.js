export async function Kernel81() {
    const X = await fetch("../x.tmp").then(r => r.text());
    const Q = await fetch("../q.tmp").then(r => r.text());
    const OP = await fetch("../operator.tmp").then(r => r.text());
    const ORBIT = await fetch("../U.orbit").then(r => r.text());
    const N81 = await fetch("../81.tmp").then(r => r.text());

    return {
        Elektron: X,
        Proton: Q,
        Neutron: N81,
        Operator: OP,
        Orbit: ORBIT
    };
}

