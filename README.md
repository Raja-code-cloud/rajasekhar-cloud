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
2. At your DNS host (e.g. GoDaddy), add the **A / CNAME / ALIAS** records GitHub shows for your domain. Official steps: [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. Enable **Enforce HTTPS** in Pages settings after DNS verifies.

Until DNS is updated, keep using the **github.io** URL above.

## Résumé files (`resume/`)

| Path | Use |
|------|-----|
| **`resume/index.html`** | Default (**https://rajasekhar.cloud/resume/**); **role titles only** (no employer names or dates). |
| **`resume/print.html`** | Alternate print styling; same experience text as `index.html`. |
| **`resume/private.html`** | **Employers + dates** for recruiters; **`noindex`**, **not linked** from the public site—send the URL directly. |

Root **`resume.html`**, **`resume-full.html`**, and **`resume-private.html`** are short redirects so old bookmarks keep working.

## Local preview

Open `index.html` in a browser, or run any static server from this folder.
