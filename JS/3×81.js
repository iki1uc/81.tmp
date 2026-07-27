export async function Kernel3x81() {
    const Elektron = await fetch("./x.tmp").then(r => r.text());
    const Proton   = await fetch("./q.tmp").then(r => r.text());
    const Operator = await fetch("./operator.tmp").then(r => r.text());
    const Orbit    = await fetch("./U/81.tmp").then(r => r.text());
    const Neutron  = await fetch("./U/81.tmp").then(r => r.text());

    return { Elektron, Proton, Neutron, Operator, Orbit };
}
