# sharno site (Eleventy)

This repo uses Eleventy (11ty) to generate the static site and Decap CMS for editing posts.

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

1. Update `src/admin/config.yml` if your repo, branch, or site URL changes.
2. Deploy the `_site/` output.
3. Visit `/admin` on your deployed site.

### Decap CMS auth (required for GitHub Pages)

GitHub Pages is static, so the Decap `github` backend needs an external OAuth service.
This repo is configured to use the community OAuth endpoint:

`https://decap-cms-oauth.netlify.app/auth`

If that service stops working for you, replace `base_url` and `auth_endpoint` with your own OAuth proxy.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` to build on every push to `master`
and publish `_site/` to the `gh-pages` branch.

In your GitHub repo settings:
- Pages > Source: select `Deploy from a branch`
- Branch: `gh-pages` / `/ (root)`

## Notes

- The source of truth lives under `src/`. Generated files should only be published from `_site` via the workflow.
- Posts inherit their layout, collection tag, and permalink from `src/posts/posts.11tydata.js`.
- Static assets in `css/` and `favicon.ico` are passed through as-is.
- Uploads from the CMS land in `src/assets/uploads/`.
