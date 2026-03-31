# sharno site (Eleventy)

This repo uses Eleventy (11ty) to generate the static site and Pages CMS for editing content.

## Local development

```bash
npm install
npm run start
```

Then open `http://localhost:8080`.

## Build

```bash
npm run build
```

The generated site will be in `_site/`.

## Pages CMS setup

1. Go to `https://app.pagescms.org/`.
2. Sign in with GitHub and grant access to `sharno/sharno.github.io`.
3. Pages CMS will read [`.pages.yml`](/home/sharno/src/sharno.github.io/.pages.yml) automatically.
4. Edit content directly from the Pages CMS dashboard.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` to build on every push to `main`
and publish `_site/` to the `gh-pages` branch.

In your GitHub repo settings:
- Pages > Source: select `Deploy from a branch`
- Branch: `gh-pages` / `/ (root)`

## Notes

- The source of truth lives under `src/`. Generated files should only be published from `_site` via the workflow.
- Posts inherit their layout, collection tag, and permalink from `src/posts/posts.11tydata.js`.
- Pages CMS configuration lives in `.pages.yml`.
- Static assets in `css/` and `favicon.ico` are passed through as-is.
- Uploads from the CMS land in `src/assets/uploads/`.
