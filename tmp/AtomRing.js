export function AtomRing() {
    const style = `
        <style>
            .ring {
                width: 140px;
                height: 140px;
                border-radius: 50%;
                border: 6px solid;
                animation: spin 2.5s linear infinite;
                margin: 10px;
                display: inline-block;
            }
            .elektron { border-color: yellow; animation-duration: 2s; }
            .proton   { border-color: red;    animation-duration: 3s; }
            .neutron  { border-color: green;  animation-duration: 4s; }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
            }
        </style>
    `;

    const html = `
        ${style}
        <div class="ring elektron"></div>
        <div class="ring proton"></div>
        <div class="ring neutron"></div>
    `;

    return html;
}
