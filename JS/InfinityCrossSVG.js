export function InfinityCrossSVG() {
    return `
        <svg width="300" height="300" viewBox="0 0 300 300">
            <line x1="150" y1="20"  x2="150" y2="280" stroke="cyan" stroke-width="4"/>
            <line x1="20"  y1="150" x2="280" y2="150" stroke="magenta" stroke-width="4"/>
            <circle cx="150" cy="150" r="40" stroke="yellow" stroke-width="4" fill="none"/>
            <text x="140" y="60" fill="white">X</text>
            <text x="140" y="140" fill="white">PI</text>
            <text x="140" y="220" fill="white">Z</text>
            <text x="240" y="160" fill="white">V</text>
        </svg>
    `;
}
