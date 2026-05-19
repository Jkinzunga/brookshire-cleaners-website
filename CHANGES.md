# Changes

---

## Favicon
*favicon.svg, favicon.ico*

Added two favicon files to the project root. The SVG version (`favicon.svg`) uses the same hanger icon from the navigation bar, set on a sage green rounded-square background. Modern browsers will pick this up. The ICO file (`favicon.ico`) is a plain 16x16 sage green square that serves as a fallback for older browsers and crawlers that still request the traditional format. An `apple-touch-icon.png` still needs to be created — that will be part of the Vite setup phase where all assets get properly organized.

---

## Color Contrast Fix
*index.html*

Updated the `stone` color token from `#9E9589` to `#7A7570`. The original value produced a contrast ratio of roughly 2.9:1 against the ivory background, which falls short of the WCAG AA minimum of 4.5:1 for normal-sized text. The new value hits approximately 4.6:1, bringing body copy, nav links, card subtitles, and any other `text-stone` elements into compliance. The color still reads as the same warm gray — it is just dark enough to be legible.

---

## Quick Wins — Security, SEO & Accessibility
*index.html*

A set of small, targeted fixes to the existing single-file site. No restructuring, no new dependencies — just things that should have been there from the start.

### Security

- Added integrity hashes (SRI) to the three CDN script tags — React, ReactDOM, and Babel. Without these, a compromised CDN could silently serve malicious code to every visitor. The hashes lock each script to the exact file we tested against.

### SEO

- Added Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`). These control how the page appears when someone shares the link on social media or messaging apps.
- Added Twitter Card meta tags so the link preview looks right on Twitter/X.
- Added a canonical URL tag pointing to the primary domain. This tells search engines which URL is the definitive one and avoids duplicate-content issues.
- Added favicon link tags (`favicon.ico`, `favicon.svg`, `apple-touch-icon`). The actual favicon files still need to be created and dropped in the project folder.
- Added Schema.org `DryCleaningOrLaundry` structured data as a JSON-LD block at the bottom of the page. This tells Google the business name, address, phone number, hours, rating, and Yelp link in a machine-readable format — the main driver for showing up in the local search panel.

### Images

- Switched the hero image URL to request WebP format from Unsplash (`&fm=webp`). WebP files are typically 25-35% smaller than JPEG at the same quality.
- Added `srcSet` with three sizes (400w, 700w, 1000w) so the browser picks the right one for the current screen, rather than always loading the largest.
- Added `fetchPriority="high"` on the hero image so the browser prioritizes it over other resources. This directly improves LCP (how fast the main visible content loads).

### Accessibility

- Removed the redundant `role="navigation"` from the `<nav>` element. The nav tag already carries that role implicitly.
- Added `aria-expanded` and `aria-controls` attributes to the mobile hamburger button so screen readers know whether the menu is open and which element it controls.
- Added `id="mobile-menu"` to the mobile menu container to match the `aria-controls` reference.
- Added a skip navigation link at the top of the page. It is visually hidden until focused via keyboard, at which point it appears and lets keyboard users jump straight to the main content without tabbing through the nav.
- Added `id="main-content"` to the hero section as the skip link target.
- Replaced three instances of `<em className="not-italic">` with `<span className="italic">`. Using `<em>` with `not-italic` is contradictory — it tells screen readers to emphasize the text while removing the visual cue. Using `<span>` with explicit italic styling is the correct approach for decorative italics.

### External Links

- Added `noreferrer` to the Google Maps link. It was already using `noopener`, but `noreferrer` also prevents the browser from sending the page URL as a referrer header, which is the more complete fix.

---

*Next up: Vite migration to remove Babel Standalone and the Tailwind Play CDN from the browser.*
