# Status — 2026-10-06

## What this is
Four working draft directions for a one-page model "business card" portfolio template (not tied to any real person — demo content uses the placeholder name "Anastasia"). Static HTML/CSS/JS, no build step, no backend. All photos are Unsplash placeholders (stored locally in each variant's `assets/` folder, not hotlinked) and all text (name use, bio, measurements, contact info, agency, city names) is placeholder — none of it is real.

## Structure
- `index.html` — landing page comparing all four variants, open this first.
- `variant-a-editorial/` — "Editorial Agency": black & white, uppercase type, comp-card stats block, masonry portfolio grid. Agency/casting feel.
- `variant-b-cinematic/` — "Cinematic Story": warm cream/rust palette, serif-italic voice, narrative alternating work layout, personal "story" section.
- `variant-c-fieldnotes/` — "Field Notes": dark brutalist-editorial zine. Portfolio split into four location/mood chapters (Studio, Urban, Night, Archive), each an edge-to-edge asymmetric mosaic grid (CSS Grid spans, angled clip-path crops on two images), scrolling marquee ticker, sticky scroll-spy chapter index on desktop.
- `variant-d-departures/` — "Departures": photo cards cascade in from the right (overlapping, like a dealt hand) on load, then a dark editorial interlude (top-left: tight eye close-up band; below it, same width, a taller street portrait; to the right, one large portrait spanning the combined height of both), then a **horizontal-scroll city carousel** — Madrid, Barcelona, London, each with a real darkened city photo as background (not text) and 4–5 portraits scattered over it in random position/rotation/stacking order on every page load (re-shuffles on reload), styled per city (Madrid: cream polaroid frames; Barcelona: white polaroid frames; London: dark thin-bordered frames) — navigated by native swipe/trackpad-scroll plus visible prev/next arrows and dot indicators — then a contact section.
  - Design note: the city carousel uses native horizontal `scroll-snap` (plus buttons) rather than hijacking the vertical scroll to drive horizontal motion — more robust/testable across devices than a full scroll-jack, at the cost of needing a swipe/arrow-click instead of "just keep scrolling down" to move between cities. Worth discussing if a full scroll-jacked version is wanted instead.
  - Rebuilt once already based on user feedback on the first pass: fan entrance now enters from one side instead of expanding from center; interlude layout rebuilt to the exact 3-rectangle spec above (was a different arrangement before); all three cities now share Barcelona's "scattered photos over a real, darkened background photo" treatment (Madrid/London were a plain CSS grid with ghost-text background before, which read as flat/boring) — real Madrid/Barcelona/London photos were sourced from Unsplash for the backgrounds, and the scatter position/rotation/order is now randomized in JS per page load rather than hand-placed.

## Published
Repo: https://github.com/Kotoliji/model-business-card-site — live via GitHub Pages at **https://kotoliji.github.io/model-business-card-site/** (source: GitHub Actions workflow in `.github/workflows/pages.yml`, redeploys on every push to `master`). Pages had to be enabled once via the REST API because the default Actions token can't enable it on first run; after that the workflow deploys on its own. Verified live: root page, variant pages, images, CSS and JS all return 200 under the `/model-business-card-site/` subpath.

## Verified working
All four variants checked in headless Chrome at desktop (1440px) and mobile (390px) via scripted interaction (real scrolling, real clicks on nav/arrows/dots/menu — not just static screenshots, since reveal animations, the fan entrance, and the city carousel all depend on it). No console errors on any variant (only the harmless automatic `favicon.ico` 404).

Bugs found and fixed during testing:
1. Variant A mobile: hero's "Scroll" cue overlapped the tagline text — hidden on small screens.
2. Variant C mosaic grid: mixing grid-cells of different row-heights in the same row left visible gaps (Urban chapter). Rebuilt the span system so every row-group shares one row-height and column-spans sum to exactly 6 — zero gaps regardless of chapter image count.
3. Variant C: several photos had their faces cropped out in wide/short mosaic cells because `object-fit: cover` was center-cropping by default while the face sat in the upper third of the source photo. Re-checked each affected source image and set a per-image `object-position` so the face stays in frame.
4. Variant D: the "Scroll or swipe →" hint overlapped the fixed header nav (both near the top-right corner). Moved the hint down below the header.

**Not yet checked:** real touch-device behavior (only emulated viewport width/synthetic clicks, not real swipe gestures), cross-browser (only tested in Chrome), real network/slow-connection image loading, accessibility audit (contrast, screen reader labels beyond basic alt text, keyboard-only navigation of the city carousel).

## Decision pending
User wants all four directions available to compare (or mix elements from each) — not yet decided which one (or hybrid) to move forward with.

## Next steps
1. User reviews all four drafts in a real browser on desktop + phone, including actually swiping through Variant D's city carousel on a touch device if possible (only emulated so far).
2. Pick a direction (or specify what to combine — e.g. Variant D's city-carousel structure with Variant C's chapter typography, etc.).
3. Replace placeholder photos in the chosen variant's `assets/` folder (keep filenames or update `<img src>` references). For Variant C, decide on real chapter themes/locations; for Variant D, decide on the real cities (currently Madrid/Barcelona/London as placeholders) and confirm whether the swipe/arrow city-switcher is the wanted interaction or a full scroll-jacked version should replace it.
4. Confirm real name/language/bio/measurements/contact method to replace placeholders.
5. Decide whether to keep all variants in the repo or delete the ones not chosen, and whether `index.html` should become the live site or redirect straight to the chosen variant.
