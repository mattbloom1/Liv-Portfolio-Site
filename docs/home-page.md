# Home page

The home page (`app/page.tsx`, styles in `app/home.css`) is the "Desk" concept, chosen by Matt from three drafts on 2026-10-23. The other two drafts (night garden, lookbook) and the draft switcher were deleted; they remain in git history (PR #1, commit d045a21) if they are ever wanted again.

## Concept

A foxed paper table. Scanned ledger and notebook scraps, tape and white-border plates are scattered at angles over the paper. Below the fold, the work is listed as a ledger register (hovering or focusing a row drops a plate beside it), followed by a taped correspondence slip with email and social links.

- The hero name is one upright line, "Liv Polani", in the display face. Hovering it triggers an ink bleed: letters near the pointer thicken and roughen through an SVG displacement filter (`components/InkName.tsx`, `.ink-l` rules in `app/home.css`). The effect is pointer-only and is skipped under `prefers-reduced-motion`; the name is exposed to screen readers as plain text.
- The hero is a fixed 16:10 stage scaled with container query units, so the collage keeps its composition at every desktop width. Below 800px the stage becomes a simple two-column stack of plates and the loose scraps are hidden.
- Plates 01 to 03 are links to their projects. Hover or keyboard focus tilts the plate a few degrees further and slides up a caption (title and category) over the lower edge of the cover. Touch devices (no hover) show the caption permanently; reduced motion keeps the caption but drops the tilt and transitions.
- Ink bleed listens on the whole document, not just the name, with a reach of about two letter-heights, so it starts before the pointer touches the text.
- Plates 01 to 03 show the Endure, Strapless Dress and Isabel Marant covers. The portrait is `public/about/liv.webp`.
- Copy comes from `lib/projects.ts` (intro line, titles, categories, contact). "Plate 01" and "Register of work" are structural labels; change or drop them if Liv prefers.

## Header and footer (site-wide)

- Header: white bar with an ink hairline. The wordmark and nav links share the display face, upright (no italics).
- Footer (`components/Footer.tsx`, `.site-footer` in `app/globals.css`): solid oxblood block with the damask pattern (`public/textures/damask.webp`, from the Antique Ornament pack) blended over it, a huge uppercase "Liv Polani" bottom-left, and on the right the email line plus three columns (Work, Pages, Elsewhere) with small uppercase headings over serif link lists. Inspired by the Coutumes footer Matt shared, in the project palette. On phones it stacks with the wordmark last.

## Assets (`public/collage/`)

Processed from Matt's Envato downloads in `H:\My Drive\Liv Portfolio Site\envato` (resized, converted to WebP). Originals stay in Drive.

| File | Source pack | Use |
|---|---|---|
| `scrap/bt2, bt3, bt20, bt22.webp` | Burnt and Torn Vintage Paper Textures | Tape pieces |
| `scrap/bt5.webp` | same | Ledger page (hero, lower left) |
| `scrap/bt6.webp`, `bt29.webp`, `bt31.webp` | same | Burnt note and handwritten notes behind the title |
| `scrap/bt23.webp` | same | Margin note beside the register (desktop) |
| `lace/lace-a..d.webp` | Fine Lace Textures (Matt's Downloads; images 12, 8, 2, 11) | Real lace photographed on black: luminance becomes alpha, tinted ivory, trimmed and resized. Scattered down the home background and around the portrait on About |
| `bg/sepia-32.webp` | The Sepia Season, Victorian Editorial Backgrounds | Foxing overlay on the page |

Evaluated and left out: Gothic Floral and its wallpaper, Art Nouveau Frame Ornament, Vintage Frame and Ornament Collection, Paper Cut Out Playground. The Deckle Edge Torn Paper pack (1.3 GB) was too large to pull in; it is the next candidate for torn section edges.

## Known gaps

- Cover images are slides with their own text, so they are shown whole or lightly cropped. Better crops would come from Liv's originals.
- The "Endure" title baked into its cover sits over the face; use a different cover image if Liv has one.

## Other pages

- Projects: a single column; covers alternate left and right and all use a 4:3 crop (`components/ProjectTile.tsx`, `.gallery` in `app/globals.css`).
- About: the portrait is surrounded by lace, ledger scrap, note scrap and tape pieces (`.about-art`, `.ap-*`).
- Lace cutouts come from the Fine Lace Textures pack (15 black-background photos, 5000px). Other images in it (1, 3, 4, 5, 6, 7, 9, 10, 13 to 15) are unused and can be cut the same way (alpha from luminance).
