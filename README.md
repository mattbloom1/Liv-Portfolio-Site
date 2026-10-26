# Liv Polani — Portfolio

Live at https://livpolani.com. Next.js static export deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to the default branch (`claude/project-thread-etpylc`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out (basePath /Liv-Portfolio-Site unless CUSTOM_DOMAIN is set)
```

- Projects, contact details and bio live in `lib/projects.ts`.
- Add images under `public/` and pass `src` to `Frame`; until then frames render as marked placeholders.
- Set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree URL) to send the contact form in-page.

## Home page

The home page is the "Desk" collage of scanned paper scraps, tape and plates. Concept, assets and known gaps are in [docs/home-page.md](docs/home-page.md).

## Custom domain

Setup steps (Namecheap DNS + GitHub Pages) are in [docs/custom-domain.md](docs/custom-domain.md).
