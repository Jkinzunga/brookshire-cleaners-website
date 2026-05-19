import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');

// ─── OG Image SVG (1200 × 630) ───────────────────────────────────────────────

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="rightPanel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4A7C6F"/>
      <stop offset="100%" style="stop-color:#3a6158"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#F7F4EF"/>

  <!-- Right sage panel -->
  <rect x="760" y="0" width="440" height="630" fill="url(#rightPanel)"/>

  <!-- Subtle noise overlay on right panel -->
  <rect x="760" y="0" width="440" height="630" fill="#4A7C6F" opacity="0.04"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="760" height="5" fill="#4A7C6F"/>

  <!-- Left content area -->
  <!-- Hanger icon (top left badge) -->
  <rect x="56" y="52" width="52" height="52" rx="12" fill="none" stroke="#1C1C1E" stroke-width="2"/>
  <g transform="translate(67, 63)" stroke="#1C1C1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M0 21L15 21L7.5 11L0 21Z"/>
    <line x1="7.5" y1="11" x2="7.5" y2="7"/>
    <path d="M5.5 7 a2 2 0 1 1 4 0"/>
  </g>

  <!-- Business name -->
  <text x="56" y="192" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="bold" fill="#1C1C1E" letter-spacing="-1">Brookshire's</text>
  <text x="56" y="262" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="bold" fill="#1C1C1E" letter-spacing="-1">Cleaners</text>

  <!-- Divider -->
  <rect x="56" y="285" width="56" height="3" fill="#4A7C6F" rx="2"/>

  <!-- Tagline -->
  <text x="56" y="334" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="24" fill="#7A7570" letter-spacing="0.2">Charlotte's trusted dry cleaner since 2009.</text>

  <!-- Services pills -->
  <rect x="56" y="372" width="148" height="36" rx="18" fill="#4A7C6F" opacity="0.12"/>
  <text x="130" y="395" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="15" fill="#4A7C6F" font-weight="600" text-anchor="middle">Dry Cleaning</text>

  <rect x="214" y="372" width="130" height="36" rx="18" fill="#4A7C6F" opacity="0.12"/>
  <text x="279" y="395" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="15" fill="#4A7C6F" font-weight="600" text-anchor="middle">Alterations</text>

  <rect x="354" y="372" width="134" height="36" rx="18" fill="#4A7C6F" opacity="0.12"/>
  <text x="421" y="395" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="15" fill="#4A7C6F" font-weight="600" text-anchor="middle">Wash &amp; Fold</text>

  <rect x="498" y="372" width="174" height="36" rx="18" fill="#4A7C6F" opacity="0.12"/>
  <text x="585" y="395" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="15" fill="#4A7C6F" font-weight="600" text-anchor="middle">Sneaker Cleaning</text>

  <!-- Bottom info row -->
  <rect x="0" y="546" width="760" height="84" fill="#EDE9E1"/>

  <!-- Stars -->
  <text x="56" y="595" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="18" fill="#F5A623">★★★★★</text>
  <text x="168" y="595" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="18" fill="#7A7570">4.6 on Yelp</text>

  <!-- Divider dot -->
  <circle cx="278" cy="590" r="3" fill="#C8DBD5"/>

  <!-- Address -->
  <text x="294" y="595" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="18" fill="#7A7570">3900 Brookshire Blvd, Charlotte NC</text>

  <!-- Divider dot -->
  <circle cx="574" cy="590" r="3" fill="#C8DBD5"/>

  <!-- Phone -->
  <text x="590" y="595" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="18" fill="#4A7C6F" font-weight="600">(704) 393-0088</text>

  <!-- Right panel content — large hanger icon -->
  <g transform="translate(980, 315) scale(5.5)" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.9">
    <path d="M-9 9H9L0 0L-9 9Z"/>
    <line x1="0" y1="0" x2="0" y2="-4"/>
    <path d="M-2 -4 a2 2 0 1 1 4 0"/>
  </g>

  <!-- Right panel text -->
  <text x="980" y="430" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="16" fill="white" opacity="0.5" text-anchor="middle" letter-spacing="3">CHARLOTTE, NC</text>
  <text x="980" y="460" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="14" fill="white" opacity="0.4" text-anchor="middle" letter-spacing="2">SINCE 2009</text>
</svg>
`;

// ─── Apple Touch Icon SVG (180 × 180) ────────────────────────────────────────

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <!-- Background -->
  <rect width="180" height="180" rx="40" fill="#4A7C6F"/>

  <!-- Subtle gradient overlay -->
  <rect width="180" height="180" rx="40" fill="white" opacity="0.04"/>

  <!-- Hanger icon centered, scaled up -->
  <g transform="translate(90, 88) scale(4.8)" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M-9 9H9L0 0L-9 9Z"/>
    <line x1="0" y1="0" x2="0" y2="-4"/>
    <path d="M-2 -4 a2 2 0 1 1 4 0"/>
  </g>
</svg>
`;

// ─── Generate files ───────────────────────────────────────────────────────────

async function run() {
  // og-image.jpg — 1200×630
  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(resolve(publicDir, 'og-image.jpg'));
  console.log('✓  public/og-image.jpg');

  // apple-touch-icon.png — 180×180
  await sharp(Buffer.from(iconSvg))
    .png()
    .toFile(resolve(publicDir, 'apple-touch-icon.png'));
  console.log('✓  public/apple-touch-icon.png');
}

run().catch((err) => { console.error(err); process.exit(1); });
