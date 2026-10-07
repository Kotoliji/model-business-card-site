# Ebrar — Model Portfolio (Design Drafts)

A one-page model portfolio site, built as four independent visual directions to compare side by side before picking (or merging) one. **Nothing here is final** — photos, name usage, bio, measurements and contact details are all placeholders, clearly marked as such in the markup and on the pages themselves.

Static HTML / CSS / vanilla JS. No build step, no framework, no backend, no dependencies to install. Every page runs by opening the `.html` file directly — double-click it, or open it in a browser — no local server required.

## Preview

Open [`index.html`](index.html) — it's a small switcher page linking to all four variants. Or jump straight into one:

| Variant | Folder | Direction |
|---|---|---|
| **A — Editorial Agency** | [`variant-a-editorial/`](variant-a-editorial/index.html) | Black & white, bold uppercase type, agency "comp card" stats block, masonry portfolio grid. Minimal, exclusive, casting-ready. |
| **B — Cinematic Story** | [`variant-b-cinematic/`](variant-b-cinematic/index.html) | Warm cream & rust palette, serif-italic voice, narrative alternating photo layout, personal "story" section. Softer, more personal brand feel. |
| **C — Field Notes** | [`variant-c-fieldnotes/`](variant-c-fieldnotes/index.html) | Dark brutalist-editorial zine. Portfolio split into four mood/location chapters (Studio, Urban, Night, Archive), each an edge-to-edge asymmetric photo mosaic (no plain rectangles — varied grid spans, two angled clip-path crops), a scrolling marquee ticker, and a sticky scroll-spy chapter index on desktop. |
| **D — Departures** | [`variant-d-departures/`](variant-d-departures/index.html) | Photo cards cascade in from the side on load, a dark editorial interlude, then a horizontal-scroll city carousel (Madrid / Barcelona / London) — each city has a real darkened photo background with 4–5 portraits scattered over it in random position, rotation and stacking order (re-shuffles on every reload), styled differently per city. |

## Project structure

```
Ebrar_model_site/
├── index.html                  — switcher/landing page linking to all four variants
├── variant-a-editorial/
│   ├── index.html, style.css, script.js
│   └── assets/                 — placeholder photos for this variant
├── variant-b-cinematic/        — same shape as above
├── variant-c-fieldnotes/       — same shape as above
├── variant-d-departures/       — same shape as above
├── README.md                    — this file
└── STATUS.md                    — short working note: what's done, what's open, next steps
```

Each variant is fully self-contained (its own CSS, JS and `assets/` folder) — nothing is shared between them, so any one of them can be deleted or copied out on its own without breaking the others.

## What's real vs. placeholder

- **Photos** are temporary stock photos (Unsplash — free license), stored locally in each variant's `assets/` folder rather than hotlinked, so the swap is just "replace the file, keep the name" (or update the `<img src="">` path). None of these are the real model.
- **Name, bio, measurements, agency, contact email/Instagram, city names** (Variant D's Madrid/Barcelona/London) are all placeholder text, written to show where real content will go — not to be mistaken for real information.
- Nothing is connected to a backend, a contact form handler, or any third-party service. Contact links are plain `mailto:` / `tel:` / profile links, not working forms — intentionally, so nothing *looks* functional that isn't.

## How to preview

No server, no install:

1. Open the project folder in Windows Explorer.
2. Double-click `index.html` (or any `variant-*/index.html`) — it opens in your default browser as a local `file://` page.
3. Navigate between variants from the switcher, or bookmark a specific variant while comparing.

All four variants have been checked in headless Chrome at both desktop (1440px) and mobile (390px) widths, via real scripted scrolling/clicking (not static screenshots) — see [`STATUS.md`](STATUS.md) for the specific bugs that were found and fixed along the way.

## Tech notes

- Fonts are loaded from Google Fonts via `@import` in each variant's `style.css` (so an internet connection is needed for fonts to render as designed; everything else — layout, images, scripts — works fully offline).
- No build tooling, no package manager, no `node_modules` — everything in this repo is the shipped code.
- Browser support target: evergreen Chrome/Edge/Firefox/Safari. Not tested on legacy browsers.

## Status / next steps

See [`STATUS.md`](STATUS.md) for the current decision point (which variant to carry forward, or what to merge from several), what's been verified, and what's explicitly still unchecked (real touch devices, cross-browser beyond Chrome, accessibility audit).
