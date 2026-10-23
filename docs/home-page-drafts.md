# Home page drafts

Three deliberately different home pages live beside the real one so Liv and Matt can compare them on the live site. Project pages, About and Contact are unchanged. `/` still shows the original home page until one draft is chosen.

| Route | Draft | Idea | Mood |
|---|---|---|---|
| `/home-a/` | A · Desk | A foxed paper table. Scanned ledger and notebook scraps, tape, and white-border plates scattered at angles, with the work listed as a ledger register. Hovering a row drops a plate beside it. | Light, archival, tactile |
| `/home-b/` | B · Night garden | Black-rose and navy botanical prints behind everything. Project covers sit inside gold art nouveau frames, with outlined numerals and ornaments that drift on scroll. | Dark romantic, formal |
| `/home-c/` | C · Lookbook | A lookbook you page through sideways (scroll-snap). Foxed Victorian grounds, covers seen through burnt holes in handwritten notes, taped corners. | Sepia, editorial, intimate |
| `/homes/` | Index | Links to all three. | |

A floating switcher (`components/VariantNav.tsx`) sits at the bottom of each draft. The drafts are `noindex`.

## Choosing one

1. Pick a draft. Copy its page body into `app/page.tsx` and its stylesheet into `app/globals.css` (or keep the `home-*.css` file and import it).
2. Delete the other two draft folders, `app/homes/`, `components/VariantNav.tsx`, and the `/public/collage` files that are no longer referenced.
3. Remove the `.variant-nav` and `.draft-list` rules from `app/homes.css`.

## Files

- `app/home-a|b|c/page.tsx` and a matching `home-*.css`. Class names are prefixed `ha-`, `hb-`, `hc-` so the drafts cannot collide with each other or with `globals.css`.
- `app/homes.css`: switcher and index styles shared by the drafts.
- `public/collage/`: processed Envato assets (see below).
- Nothing in `lib/` or `components/` other than `VariantNav` was touched. Fonts, colour tokens and spacing come from `globals.css`.

## Assets (`public/collage/`)

All from Matt's Envato downloads in `H:\My Drive\Liv Portfolio Site\envato`. They were resized and converted to WebP; the originals stay in Drive.

| Folder | Source pack | Notes |
|---|---|---|
| `bg/rose-night.webp`, `bg/botanical-navy.webp` | Gothic Floral wallpaper, Gothic Floral | Full-bleed print grounds for draft B |
| `bg/sepia-*.webp` | The Sepia Season, Victorian Editorial Backgrounds (backgrounds 03, 06, 14, 19, 21, 23, 26, 32) | Foxed and embossed grounds for drafts A and C |
| `gold/*.webp` | Art Nouveau Frame Ornament | Gold-on-black JPGs converted to transparent PNG-style alpha by luminance |
| `scrap/bt*.webp` | Burnt and Torn Vintage Paper Textures | Transparent cut-outs: ledgers, notes, tape, burnt windows. `bt10` and `bt11` have a hole that frames a photo. |
| `orn/*.svg` | Vintage Frame and Ornament Collection | Copied for later use; not yet referenced |

Not used: Paper Cut Out Playground (colour palette too bright for this direction), Deckle Edge Torn Paper Cliparts (1.3 GB, too large to pull through the file bridge; worth using for section edges in the chosen draft).

## Copy

No new copy was written. The drafts reuse the intro line, project titles, categories and contact details already in `lib/projects.ts`. Labels such as "Plate 01" and "Register of work" are structural; change or drop them if Liv prefers.

## Known gaps

- Draft C's cover panel is wide; on phones the rail is a horizontal swipe, which is intentional.
- Draft B's scroll drift uses CSS `animation-timeline: view()`. Browsers without it (older Firefox) show the same layout without movement.
- Cover images are slides with their own text, so they are shown whole or lightly cropped. Better crops would come from Liv's originals.
