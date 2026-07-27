export function AtomRings5D() {
    const style = `
        <style>
            .ring5d {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                border: 6px solid;
                margin: 20px;
                display: inline-block;
                animation: spin5d 4s linear infinite;
                transform-style: preserve-3d;
            }

            .elektron { border-color: yellow; animation-duration: 2s; }
            .proton   { border-color: red;    animation-duration: 3s; }
            .neutron  { border-color: green;  animation-duration: 4s; }
            .vector   { border-color: cyan;   animation-duration: 5s; }
            .hyper    { border-color: magenta; animation-duration: 6s; }

            @keyframes spin5d {
                0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                50%  { transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) rotate3d(1,1,0,90deg); }
                100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) rotate3d(1,1,0,180deg); }
            }
        </style>
    `;

    return `
        ${style}
        <div class="ring5d elektron"></div>
        <div class="ring5d proton"></div>
        <div class="ring5d neutron"></div>
        <div class="ring5d vector"></div>
        <div class="ring5d hyper"></div>
    `;
}
