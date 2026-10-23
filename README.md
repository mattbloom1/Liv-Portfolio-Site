# Liv Polani — Portfolio

Next.js static export deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to the default branch (`claude/project-thread-etpylc`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out (basePath /Liv-Portfolio-Site)
```

- Projects, contact details and bio live in `lib/projects.ts`.
- Add images under `public/` and pass `src` to `Frame`; until then frames render as marked placeholders.
- Set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree URL) to send the contact form in-page.

## Home page drafts

Three alternative home pages are live at `/home-a/`, `/home-b/` and `/home-c/` (index at `/homes/`) while one is chosen. See [docs/home-page-drafts.md](docs/home-page-drafts.md) for the concepts, the asset list and how to promote a draft.
