# rajasekhar.cloud (static site)

Personal site: multi-cloud architecture, case studies, resume.

## GitHub Pages

After the first push, enable Pages once:

1. Repo **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**

The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`.

## Local preview

Open `index.html` in a browser, or run any static server from this folder.

## Deploy elsewhere

`netlify.toml` is included for Netlify. Keep `.netlify-token` local only (see `.gitignore`).
