# haneetsingh.github.io

Personal portfolio. Static site built with [Astro](https://astro.build).

## Commands

| Command           | Action                              |
| :----------------- | :----------------------------------- |
| `npm install`       | Install dependencies                 |
| `npm run dev`       | Start local dev server               |
| `npm run build`     | Build production site to `./dist/`   |
| `npm run preview`   | Preview the production build locally |

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo settings, set **Pages → Source** to **GitHub Actions** (one-time setup).

Content lives in [`src/data/resume.ts`](src/data/resume.ts) — edit that file to update experience, projects, or skills.
