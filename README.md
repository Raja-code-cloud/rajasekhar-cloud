# rajasekhar.cloud (static site)

Personal site: multi-cloud architecture, case studies, resume.

## Hosting: GitHub Pages

The live site is built and published by **GitHub Actions** on every push to `main`.

| URL | Notes |
|-----|--------|
| **https://raja-code-cloud.github.io/rajasekhar-cloud/** | Default GitHub Pages URL (always works once Actions succeed) |
| **https://rajasekhar.cloud/** | Custom domain (after DNS points to GitHub — see below) |

**Repository:** [github.com/Raja-code-cloud/rajasekhar-cloud](https://github.com/Raja-code-cloud/rajasekhar-cloud)

### One-time: enable Pages

1. Repo **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Wait for the **Deploy to GitHub Pages** workflow to finish (**Actions** tab)

### Custom domain `rajasekhar.cloud` on GitHub

This repo includes a **`CNAME`** file (`rajasekhar.cloud`). To serve the site on that domain:

1. In **Settings** → **Pages** → **Custom domain**, enter `rajasekhar.cloud` and save (GitHub may detect the `CNAME` file).
2. At your DNS host (e.g. GoDaddy), **remove** records that point the domain to Netlify, then add GitHub’s records. Official steps: [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. Enable **Enforce HTTPS** in Pages settings after DNS verifies.

Until DNS is updated, keep using the **github.io** URL above.

## Résumé files

| File | Use |
|------|-----|
| `resume.html` | Default, linked from the site; **role titles only** (no employer names or dates). |
| `resume-full.html` | Alternate print styling; same experience text as `resume.html`. |
| `resume-private.html` | **Employers + dates** for recruiters; **`noindex`**, **not linked** from `index.html` or `resume.html`—send the URL directly. On a **public** repo the path can still be guessed; treat as convenience, not secrecy. |

## Local preview

Open `index.html` in a browser, or run any static server from this folder.

## Optional: Netlify

`netlify.toml` remains if you ever mirror the site there; it is **not** required for GitHub hosting. Keep `.netlify-token` local only (see `.gitignore`).
