# Home page

The home page (`app/page.tsx`, styles in `app/home.css`) is the "Desk" concept, chosen by Matt from three drafts on 2026-10-23. The other two drafts (night garden, lookbook) and the draft switcher were deleted; they remain in git history (PR #1, commit d045a21) if they are ever wanted again.

## Concept

A foxed paper table. Scanned ledger and notebook scraps, tape and white-border plates are scattered at angles over the paper. Below the fold, the work is listed as a ledger register (hovering or focusing a row drops a plate beside it), followed by a taped correspondence slip with email and social links.

- The hero is a fixed 16:10 stage scaled with container query units, so the collage keeps its composition at every desktop width. Below 800px the stage becomes a simple two-column stack of plates and the loose scraps are hidden.
- Plates 01 to 03 show the Endure, Strapless Dress and Isabel Marant covers. The portrait is `public/about/liv.webp`.
- Copy comes from `lib/projects.ts` (intro line, titles, categories, contact). "Plate 01" and "Register of work" are structural labels; change or drop them if Liv prefers.

## Assets (`public/collage/`)

Processed from Matt's Envato downloads in `H:\My Drive\Liv Portfolio Site\envato` (resized, converted to WebP). Originals stay in Drive.

| File | Source pack | Use |
|---|---|---|
| `scrap/bt2, bt3, bt20, bt22.webp` | Burnt and Torn Vintage Paper Textures | Tape pieces |
| `scrap/bt5.webp` | same | Ledger page (hero, lower left) |
| `scrap/bt6.webp`, `bt29.webp`, `bt31.webp` | same | Burnt note and handwritten notes behind the title |
| `scrap/bt23.webp` | same | Margin note beside the register (desktop) |
| `bg/sepia-32.webp` | The Sepia Season, Victorian Editorial Backgrounds | Foxing overlay on the page |

Evaluated and left out: Gothic Floral and its wallpaper, Art Nouveau Frame Ornament, Vintage Frame and Ornament Collection, Paper Cut Out Playground. The Deckle Edge Torn Paper pack (1.3 GB) was too large to pull in; it is the next candidate for torn section edges.

## Known gaps

- Cover images are slides with their own text, so they are shown whole or lightly cropped. Better crops would come from Liv's originals.
- The "Endure" title baked into its cover sits over the face; use a different cover image if Liv has one.
