# Canva sources

Project images are exported from Liv's Canva designs (via the Canva connector, PDF export) and rendered to 1600px-wide WebP, Soft Structure at 2400px. Only pages visible in each design's public view are published; pages hidden in Canva are skipped. File names are the Canva page numbers.

| Project | Canva design | Published pages |
|---|---|---|
| Endure | `DAHS80ffgVs` | 3–16 (1–2, 17–19 hidden) |
| Distorted Bloom | `DAHGOawJZTg` | 1, 2, 4–9 (3, 10, 11 hidden) |
| Desert Wildflower | `DAHIuVotABk` | 1–9 |
| Soft Structure | `DAHEahiG3FU` | 1–2 |
| Knitwear Technique Binder | `DAGTGR2lEZY` | 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 (6 hidden since) |
| The Sweat Set | `DAHPkniAGMA` | 1–19 |
| Résumé (About page) | `DAHBmzVpfSs` | Embedded live (`CanvaEmbed`), so Canva edits show up without a deploy |

The Mali Blouse tech pack comes from Liv's spreadsheet (`Tech_Pack_3.xltx`), one image per sheet. `lib/image-sizes.json` holds every image's pixel size and must be regenerated when images change.

`components/CanvaEmbed.tsx` shows a Canva page live with no Canva controls: the iframe is 120px taller above and below its frame so the toolbar falls in a clipped strip, and a cover blocks clicks and hover. This depends on how Canva lays out its embed viewer; recheck it if Canva changes.
