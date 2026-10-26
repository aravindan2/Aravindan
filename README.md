# Aravindan Vemula — Personal Portfolio

A minimal, dark-themed, single-page portfolio built with [Astro](https://astro.build),
TypeScript, and vanilla CSS. Static output, no client-side framework, no extra
dependencies.

## Structure

```text
src/
├── components/
│   ├── Navbar.astro        # Sticky navigation
│   ├── Hero.astro          # Intro, "View Projects" CTA, profile links
│   ├── ProjectCard.astro   # Reusable project card (title, description, tags, links)
│   ├── SocialLinks.astro   # GitHub / LinkedIn / Email links (reused in hero + contact)
│   └── Footer.astro
├── data/
│   └── projects.ts         # Typed project data — edit this to add projects/links
├── layouts/
│   └── Layout.astro        # Head, SEO/OG metadata, JSON-LD, skip link
├── pages/
│   └── index.astro         # All page sections (About, Projects, Experience, …)
└── styles/
    └── global.css          # Design tokens, reset, shared utilities
```

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at `localhost:4321`|
| `npm run build`   | Build the production site to `dist/`|
| `npm run preview` | Preview the production build        |

## Editing content

- **Projects:** edit `src/data/projects.ts`. Each entry has optional `repoUrl`
  and `demoUrl` fields — they render as GitHub / Live Demo links only when set,
  so leave them out until a real URL exists.
- **Everything else** (about text, experience, education, skills,
  publications/certifications, contact details) lives in `src/pages/index.astro`.

## Deployment: GitHub Pages

`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on
every push to `master` (or manually via *Run workflow*).

The workflow derives the Astro `site` and `base` values automatically, so it
works for either repository layout — no config changes needed:

| Repository type               | Example                                  | Result URL                          |
| :---------------------------- | :--------------------------------------- | :---------------------------------- |
| User/organization site        | `aravindan2/aravindan2.github.io`        | `https://aravindan2.github.io/`     |
| Project repository            | `aravindan2/personal-website`            | `https://aravindan2.github.io/personal-website/` |

### One-time repository settings

1. Push this repository to GitHub (branch `master`).
2. Open the repository on GitHub → **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `master` (or trigger the workflow from the **Actions** tab). The first
   run takes a couple of minutes; the site URL appears in the workflow summary
   and under **Settings → Pages**.

No secrets or tokens are required — the workflow uses the built-in
`GITHUB_TOKEN` via the standard `id-token: write` / `pages: write` permissions.

### Building locally with a base path

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH` from the environment (set by
CI). To emulate a project-site build locally on Linux/macOS:

```sh
SITE_URL=https://<owner>.github.io BASE_PATH=/<repo>/ npm run build
```

Note: on WSL, Windows-installed Node does not inherit exported bash environment
variables, so use a Linux Node install or set the values directly in
`astro.config.mjs` for that test.

## Notes

- Static-only: no database, auth, analytics, or contact form backend.
- An `og:image` is intentionally omitted; add one (1200×630 PNG/JPG in `public/`)
  and reference it in `src/layouts/Layout.astro` if share previews with an image
  are wanted.
