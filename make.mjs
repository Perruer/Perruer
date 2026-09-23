// Generates the profile banner (dark and light SVG) with the project icons embedded inline,
// plus PNG previews.   node make.mjs
import { readFileSync, writeFileSync } from "node:fs";

const icons = ["gorget", "unclick", "notewing", "cookietin", "wordtoast", "skullclick"].map((name) => {
  let svg = readFileSync(`${name}.svg`, "utf8").replace(/<\?xml[^>]*>/, "");
  // Give every id a unique prefix so the embedded icons do not clash.
  svg = svg.replace(/id="([^"]+)"/g, `id="${name}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${name}-$1)`);
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] || "0 0 128 128";
  return { name, inner, viewBox };
});

const LABEL = { gorget: "Gorget", unclick: "Unclick", notewing: "Notewing", cookietin: "CookieTin", wordtoast: "WordToast", skullclick: "SkullClick" };

function banner(theme) {
  const dark = theme === "dark";
  const c = dark
    ? { bg1: "#0d1117", bg2: "#161b33", text: "#e6edf3", muted: "#8b949e", accent: "#8a84ff", card: "#161b22", border: "#30363d", grid: "#ffffff", gridOp: 0.035, glow: "#6d6af5" }
    : { bg1: "#ffffff", bg2: "#eef0ff", text: "#1f2328", muted: "#59636e", accent: "#5048e5", card: "#ffffff", border: "#d8dcef", grid: "#1f2328", gridOp: 0.05, glow: "#a5a1ff" };

  const pos = [
    { x: 732, y: 14 },
    { x: 930, y: 34 },
    { x: 732, y: 118 },
    { x: 930, y: 138 },
    { x: 732, y: 222 },
    { x: 930, y: 242 },
  ];
  const cards = icons
    .map((ic, i) => {
      const p = pos[i];
      return `<g class="f f${i}">
    <rect x="${p.x}" y="${p.y}" width="176" height="92" rx="16" fill="${c.card}" stroke="${c.border}"/>
    <svg x="${p.x + 14}" y="${p.y + 18}" width="56" height="56" viewBox="${ic.viewBox}">${ic.inner}</svg>
    <text x="${p.x + 80}" y="${p.y + 44}" class="t" font-size="15" font-weight="700" fill="${c.text}">${LABEL[ic.name]}</text>
    <text x="${p.x + 80}" y="${p.y + 64}" font-size="12" fill="${c.ok || "#2ea043"}">● revived</text>
  </g>`;
    })
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="340" viewBox="0 0 1200 340" role="img" aria-label="Perruer: giving abandoned open-source projects a second life">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c.bg1}"/><stop offset="1" stop-color="${c.bg2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${c.glow}" stop-opacity="${dark ? 0.35 : 0.45}"/><stop offset="1" stop-color="${c.glow}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="${c.grid}" stroke-opacity="${c.gridOp}"/>
    </pattern>
    <clipPath id="frame"><rect width="1200" height="340" rx="18"/></clipPath>
  </defs>
  <style>
    text { font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }
    .f { animation: float 6s ease-in-out infinite; }
    .f1 { animation-delay: -1.2s; } .f2 { animation-delay: -2.4s; } .f3 { animation-delay: -3.6s; } .f4 { animation-delay: -4.8s; } .f5 { animation-delay: -6s; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    .spark { animation: blink 3s ease-in-out infinite; }
    .s2 { animation-delay: -1s; } .s3 { animation-delay: -2s; }
    @keyframes blink { 0%, 100% { opacity: .15; } 50% { opacity: 1; } }
    .dash { stroke-dasharray: 6 8; animation: flow 2.4s linear infinite; }
    @keyframes flow { to { stroke-dashoffset: -28; } }
    @media (prefers-reduced-motion: reduce) { .f, .spark, .dash { animation: none; } }
  </style>
  <g clip-path="url(#frame)">
    <rect width="1200" height="340" fill="url(#bg)"/>
    <rect width="1200" height="340" fill="url(#grid)"/>
    <circle cx="930" cy="170" r="260" fill="url(#glow)"/>

    <text x="64" y="104" font-size="20" fill="${c.accent}" font-weight="600">Hi there 👋, I'm</text>
    <text x="62" y="170" font-size="64" font-weight="800" fill="${c.text}" letter-spacing="-2">Perruer</text>
    <text x="64" y="214" font-size="23" fill="${c.text}">Giving abandoned open-source projects a second life</text>
    <text x="64" y="252" font-size="16" fill="${c.muted}">Browser extensions · Web apps · CLI tools · Always crediting the original authors</text>

    <g font-family="ui-monospace, SFMono-Regular, Consolas, monospace" font-size="13">
      <rect x="64" y="276" width="222" height="30" rx="8" fill="${c.card}" stroke="${c.border}"/>
      <text x="78" y="296" fill="${c.muted}">$ git commit -m <tspan fill="${c.accent}">"revive ✓"</tspan></text>
    </g>

    <path class="dash" d="M706 300 C 724 200, 700 120, 752 70" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity=".6"/>
    <path class="dash" d="M1145 60 C 1180 140, 1170 230, 1125 262" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity=".45"/>
    <g fill="${c.accent}">
      <path class="spark" d="M712 176l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/>
      <path class="spark s2" d="M1150 300l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>
      <path class="spark s3" d="M905 26l3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/>
    </g>
  ${cards}
  </g>
</svg>
`;
}

writeFileSync("banner-dark.svg", banner("dark"));
writeFileSync("banner-light.svg", banner("light"));
console.log("wrote banner-dark.svg, banner-light.svg");
