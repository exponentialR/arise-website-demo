# Demonstrator architecture

## Outcome

The repository produces a static public website. Visitors receive generated HTML and CSS from GitHub Pages; there is no database query or application-server request behind a page view.

```text
Structured content
      ↓
Astro content collections
      ↓
Astro templates and components
      ↓
Static HTML and CSS
      ↓
GitHub repository
      ↓
GitHub Actions
      ↓
GitHub Pages
      ↓
Public website
```

## Why this fits ARISE

The expected public material—people, institutions, projects, publications, news, media coverage and resource links—is structured and relatively low frequency. It can be validated and assembled during a build rather than requested from a continuously running database.

The production website therefore requires:

- no database;
- no application server;
- no authentication system;
- no CMS licence;
- no paid deployment platform;
- minimal browser JavaScript.

This does not prevent ARISE adding an editing interface later. A future CMS could write to the same structured content model without replacing the public-site architecture.

## Current infrastructure cost model

For this public demonstrator:

| Item           | Demonstrator model          |
| -------------- | --------------------------- |
| Hosting/server | £0 via GitHub Pages         |
| Database       | Not required                |
| CMS licence    | Not required                |
| SSL/HTTPS      | Provided by GitHub Pages    |
| Deployment     | Automated by GitHub Actions |
| Framework      | Astro, open source          |

This is an architecture and cost model, not a contractual promise about future third-party terms. It excludes staff time, optional domain registration and any future services chosen by the consortium.

## Domain routes

### A. GitHub Pages address

The demonstrator uses `https://exponentialR.github.io/arise-website-demo/`. The current infrastructure charge is £0/year, with the trade-off of a less polished address.

### B. Institutional subdomain

An institution could provide a subdomain such as `arise.qub.ac.uk` while GitHub Pages continues to host the generated site. This is potentially £0/year to ARISE if the institution provides the subdomain and its IT team configures the required DNS and custom-domain settings.

### C. Independent ARISE domain

The consortium could register a domain such as `arise-research.org` and map it to GitHub Pages. Hosting remains unchanged; domain registration is the recurring cost. Registration prices vary and are deliberately not quoted here.

## Deployment path

The workflow in `.github/workflows/deploy.yml` uses Astro's maintained GitHub Action and GitHub's Pages deployment action. A push to `main` builds and publishes the static site. The repository is configured with:

- `site: https://exponentialr.github.io`
- `base: /arise-website-demo`
- `output: static`

When a custom domain is adopted, update `site`, remove the repository `base` path and add the approved `public/CNAME` record.

## Governance boundary

This technical model does not decide who may publish. A production workflow should establish:

1. who can propose a content change;
2. who verifies factual and publication metadata;
3. who approves public wording;
4. who can merge to the deployment branch;
5. who owns the repository, domain and public contact route.

The intended long-term model is shared consortium governance, not a permanent single-person webmaster role.
