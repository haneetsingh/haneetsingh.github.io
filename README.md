# haneetsingh.github.io

Personal portfolio. Static site built with [Astro](https://astro.build).

## Structure

- [`src/data/resume.ts`](src/data/resume.ts) — the single source of content: profile, experience, projects, skills, education. Edit this file to change what the site or résumé says; both read from it.
- [`src/pages/index.astro`](src/pages/index.astro) + [`src/layouts/Layout.astro`](src/layouts/Layout.astro) — the page markup and shell.
- [`src/styles/global.css`](src/styles/global.css) — all styling.
- [`scripts/generate-resume.ts`](scripts/generate-resume.ts) — generates `public/Haneet_Singh_Resume.pdf` from the same data using `pdfkit`, with the Lato font family embedded from [`scripts/fonts/`](scripts/fonts). Runs automatically before every build (see `prebuild` below) — it isn't committed, and shouldn't be edited by hand.

## Commands

| Command                | Action                                              |
| :---------------------- | :---------------------------------------------------- |
| `npm install`            | Install dependencies                                  |
| `npm run dev`            | Start local dev server                                 |
| `npm run generate-resume`| Regenerate `public/Haneet_Singh_Resume.pdf` on demand  |
| `npm run build`          | Regenerate the résumé (`prebuild`), then build the site to `./dist/` |
| `npm run preview`        | Preview the production build locally                   |

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages. Pull requests trigger the same build (without deploying), to catch breaking changes before merge. In the repo settings, **Pages → Source** must be set to **GitHub Actions** (one-time setup).
