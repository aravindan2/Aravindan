// @ts-check
import { defineConfig } from 'astro/config';

// Static output for GitHub Pages.
//
// `site` and `base` are supplied by CI (.github/workflows/deploy.yml) so the
// same config works for both repository layouts:
//   - user/organization site  -> https://<owner>.github.io/            (base "/")
//   - project repository      -> https://<owner>.github.io/<repo>/     (base "/<repo>/")
//
// For a local production build with a project base path, run:
//   SITE_URL=https://<owner>.github.io BASE_PATH=/<repo>/ npm run build
// export default defineConfig({
//   site: process.env.SITE_URL || undefined,
//   base: process.env.BASE_PATH || '/',
// });


export default defineConfig({
  site: 'https://aravindan2.github.io',
});
