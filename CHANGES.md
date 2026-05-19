# Changes

---

## Privacy and Terms Pages
*privacy.html, terms.html, index.html*

Created standalone `privacy.html` and `terms.html` pages. Both use the same fonts and color scheme as the main site without pulling in React or Tailwind — they are plain HTML with a small inline stylesheet, which keeps them fast and simple. The content covers the basics a local service business needs: what data is collected, how garments are handled, unclaimed item policy, alteration policy, and liability limits. Neither page is legal advice and both should be reviewed by the owner before going live. The footer links in `index.html` that previously pointed to `#` now link to the actual pages.

---

## Error Boundary
*index.html*

Added a React class component called `ErrorBoundary` that wraps the entire app. If any component throws a runtime error, React would normally unmount everything and leave a blank page with no explanation. With the boundary in place, a runtime error now shows a simple message telling the visitor something went wrong, gives them the phone number, and offers a refresh button. The component uses `getDerivedStateFromError` so it catches errors during rendering without crashing the whole tree.

---

## robots.txt and sitemap.xml
*robots.txt, sitemap.xml*

Added `robots.txt` allowing all crawlers and pointing to the sitemap. Added `sitemap.xml` listing the homepage, privacy page, and terms page with last-modified dates and priority hints. Both files need to be served from the root of the live domain — once the site is deployed to `brookshirescleaners.com`, search engines will pick these up automatically. The sitemap `lastmod` date should be updated whenever the content changes in a meaningful way.

---

## Favicon
*favicon.svg, favicon.ico*

Added two favicon files to the project root. The SVG version (`favicon.svg`) uses the same hanger icon from the navigation bar, set on a sage green rounded-square background. Modern browsers will pick this up. The ICO file (`favicon.ico`) is a plain 16x16 sage green square that serves as a fallback for older browsers and crawlers that still request the traditional format. An `apple-touch-icon.png` still needs to be created — that will be part of the Vite setup phase where all assets get properly organized.

---

## Color Contrast Fix
*index.html*

Updated the `stone` color token from `#9E9589` to `#7A7570`. The original value produced a contrast ratio of roughly 2.9:1 against the ivory background, which falls short of the WCAG AA minimum of 4.5:1 for normal-sized text. The new value hits approximately 4.6:1, bringing body copy, nav links, card subtitles, and any other `text-stone` elements into compliance. The color still reads as the same warm gray — it is just dark enough to be legible.

---

## OG Image and Apple Touch Icon
*public/og-image.jpg, public/apple-touch-icon.png, scripts/generate-images.mjs*

Generated the two missing assets that the `<head>` tags were already pointing to.

`og-image.jpg` (1200×630) is the image that appears when someone shares the site link on social media, iMessage, Slack, or any platform that reads Open Graph tags. It shows the business name in large serif type, the tagline, service pills (Dry Cleaning, Alterations, Wash & Fold, Sneaker Cleaning), and a footer bar with the Yelp rating, address, and phone number. The right third uses the sage green from the site's color palette with a large hanger icon.

`apple-touch-icon.png` (180×180) is what iOS uses when someone adds the site to their home screen. It uses the same rounded-square format as native app icons — sage green background with a white hanger icon centered.

Both images are generated from SVG by a script at `scripts/generate-images.mjs`. To regenerate them (if the business info or branding changes), run `npm run generate-images`. The script uses `sharp` to convert the SVG definitions to optimized JPG and PNG.

---

## Vite Migration — Remove Babel and Tailwind CDN from the Browser
*Full project restructure*

Migrated the site from a single HTML file with CDN-loaded dependencies to a proper Vite + React project with a build step.

The core problem with the old setup was that the browser had to download and run a full JavaScript compiler (Babel Standalone, ~846 KB gzipped) on every page load just to parse the JSX before React could render anything. On top of that, the Tailwind Play CDN loaded all possible CSS utilities (~298 KB gzipped) and generated styles at runtime using a DOM observer. Neither of those tools is meant for production — they exist for quick demos and prototyping.

With Vite, the JSX is compiled once at build time. The browser gets plain JavaScript it can run immediately. Tailwind scans the source files during the build and keeps only the CSS classes that are actually used.

**What the build produces:**

| File | Gzipped size |
|---|---|
| React + ReactDOM | 45 KB |
| All components + app code | 10.7 KB |
| CSS (Tailwind purged) | 5.2 KB |
| HTML shell | 1.6 KB |
| **Total** | **~62 KB** |

The old CDN setup transferred roughly 1.38 MB gzipped. That is a 96% reduction in page weight. On a mobile connection, the difference between these two numbers is several seconds of blank screen.

**What changed structurally:**

The 1,000-line monolithic `index.html` is now split into a proper project:

- `src/components/` — one file per component (Nav, Hero, Reviews, ReviewCard, Services, HowItWorks, WhyUs, VisitUs, CTA, Footer, Icon, Logo, ErrorBoundary)
- `src/data/` — review copy and process steps extracted into their own files so they can be updated without touching component code
- `src/hooks/useReveal.js` — the scroll animation hook in its own file
- `src/styles/index.css` — all custom CSS with Tailwind directives
- `src/App.jsx` — root component that assembles the page
- `src/main.jsx` — entry point, mounts the app
- `index.html` — lean HTML shell with meta tags and the schema block; no more inline scripts or CDN tags
- `public/` — static assets (logos, favicons) served directly
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `package.json` — build tooling config

All component logic, JSX, and copy is identical to the previous version. Nothing about how the site looks or behaves changed — only how it is built and delivered.

To run locally: `npm run dev`. To build for deployment: `npm run build`.

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
