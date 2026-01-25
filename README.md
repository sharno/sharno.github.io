# sharno site (Eleventy)

This repo now uses Eleventy (11ty) to generate the static site and Decap CMS for editing posts.

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

## Decap CMS setup

1. Update `src/admin/config.yml`:
   - `repo`: set to your GitHub repo, e.g. `sharno/sharno.github.io`
   - `branch`: set to your default branch
   - `auth_endpoint`: set to your OAuth server (see below)
   - `site_url`: set to your GitHub Pages URL
2. Deploy the `_site/` output.
3. Visit `/admin` on your site.

### Decap CMS auth (required for GitHub Pages)

GitHub Pages is static, so you must provide an external OAuth service for the GitHub backend.
Two common options:

1. Use the community OAuth server:
   - https://github.com/decaporg/decap-cms#authentication
2. Deploy your own `decap-cms-oauth` server (e.g. Render/Fly/Vercel).

Set `auth_endpoint` in `src/admin/config.yml` to the deployed URL.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` to build on every push to `master`
and publish `_site/` to the `gh-pages` branch.

In your GitHub repo settings:
- Pages > Source: select `Deploy from a branch`
- Branch: `gh-pages` / `/ (root)`

## Notes

- Static assets in `css/` and `favicon.ico` are passed through as-is.
- Uploads from the CMS land in `src/assets/uploads/`.
