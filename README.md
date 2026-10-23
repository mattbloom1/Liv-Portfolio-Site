# Liv Polani — Portfolio

Next.js static export deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out (basePath /Liv-Portfolio-Site)
```

- Projects, contact details and bio live in `lib/projects.ts`.
- Add images under `public/` and pass `src` to `Frame`; until then frames render as marked placeholders.
- Set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree URL) to send the contact form in-page.
