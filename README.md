# ARISE website demonstrator

[![Deploy to GitHub Pages](https://github.com/exponentialR/arise-website-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/exponentialR/arise-website-demo/actions/workflows/deploy.yml)

A polished vertical-slice demonstrator for a public ARISE research programme website.

**Live demo:** <https://exponentialR.github.io/arise-website-demo/>

This repository is a prototype under Samuel Adebayo's personal GitHub account. It is not yet the official ARISE website, and its visibly labelled demonstration records must be replaced with verified, approved programme content before an official launch.

## What the demonstrator proves

- an international research programme can have a credible, accessible public site;
- people, institutions, funders, projects, publications, engagement, news, media and resources can be structured and related;
- a record entered once can be reused across every relevant page;
- content changes can be validated, built and deployed automatically;
- the public site can run as static files without a database, server or paid CMS.

## Architecture

```text
Structured Markdown records
          ↓
Astro content collections
          ↓
Templates and components
          ↓
Static HTML and CSS
          ↓
GitHub repository
          ↓
GitHub Actions
          ↓
GitHub Pages
```

Astro validates the content and generates the complete site during the build. GitHub Pages serves the output directly. No database, authentication system, server-side runtime, WordPress host or CMS subscription is required for this demonstrator.

See [architecture.md](docs/architecture.md) for the cost boundary, domain options and governance assumptions.

## Technology

- Astro 7 and TypeScript
- Astro build-time content collections
- static site generation
- semantic HTML and responsive CSS
- GitHub Actions and GitHub Pages
- no client-side framework and no application JavaScript bundle

## Local development

Requirements: Node.js 22.12 or newer and npm.

```bash
npm install
npm run dev
```

Astro prints the local address. Because this repository is deployed below a GitHub Pages base path, open the URL ending in `/arise-website-demo/`.

Before committing a change:

```bash
npm run format
npm run check
npm run build
```

The production site is generated in `dist/` and is not committed.

## Content structure

Collections live in `src/content/` and their validation schemas live in `src/content.config.ts`.

```text
src/content/
├── engagement/
├── funders/
├── institutions/
├── media/
├── news/
├── people/
├── projects/
├── publications/
└── resources/
```

Each filename is its stable record ID. For example, `src/content/projects/isc-xr.md` becomes the project ID `isc-xr` and the page `/research/isc-xr/`.

### Add a person

```bash
cp src/content/people/_template.md.example src/content/people/given-family.md
```

Add only verified name, role, affiliation, biography and profile links. Set `institution` to the filename ID of an existing institution record. The optional `photo` block records a local or external image URL, descriptive alt text, a source label and an optional source-page URL; omit it to use the initials fallback.

### Add an institution

Create `src/content/institutions/institution-id.md` with `name`, `kind`, `relationship`, `summary`, official evidence URL and optional region, website and status note. Add an approved description in the Markdown body. Official logos are optional and should be added only after confirming the institution's brand-use requirements.

### Add a funder or award

```bash
cp src/content/funders/_template.md.example src/content/funders/funder-id.md
```

Funders are deliberately separate from universities. Record the official body, jurisdiction, scheme, award identifier and primary evidence source.

### Add a project

```bash
cp src/content/projects/_template.md.example src/content/projects/project-id.md
```

Reference existing people and institutions by ID. Publications and resources that reference this project appear automatically on its page.

### Add a publication

```bash
cp src/content/publications/_template.md.example src/content/publications/publication-id.md
```

Verify the title, year, exact published author names, venue, type, DOI and external URL. Each author entry stores the published name and may also reference a verified person record. `projects` and `funding` are separate optional relationships: do not infer a project from an award acknowledgement.

Once added, one publication record can appear on:

- the publications index and year grouping;
- its publication detail page;
- every referenced project page;
- every referenced author profile;
- every referenced funder page.

### Add engagement

```bash
cp src/content/engagement/_template.md.example src/content/engagement/activity-id.md
```

Use this collection for verified presentations, exhibitions, workshops, webinars and outreach. It can reference people, projects and publications. Leave a relationship empty when the event source does not establish it.

### Add news or media

```bash
cp src/content/news/_template.md.example src/content/news/article-id.md
cp src/content/media/_template.md.example src/content/media/coverage-id.md
```

News bodies are stored locally. Media records catalogue and link to the original coverage instead of copying it.

### Add a resource

Create a record in `src/content/resources/` with its type, summary, related project IDs and external URL. Large datasets, videos and software releases should remain in appropriate external repositories; the website acts as the catalogue and front door.

See [content-model.md](docs/content-model.md) for all collections, relationship rules and the pre-launch content checklist.

## Relationships and reuse

Astro's `reference()` schema validates links between records at build time. A publication owns its citation plus author and project references. Project and person pages find the relevant publication instead of copying the citation.

```text
Person ───── Institution
  │
  ├──────── Project
  │            │
  └ Publication┤
       │       ├ Resource
       │       └ Media
       ├────── Funding award
       └────── Engagement
```

A missing or mistyped referenced ID causes the content check/build to fail before deployment. See [research-audit.md](docs/research-audit.md) for the dated funding/publication evidence method and its completeness limits.

## Deployment

The repository is configured for:

```text
https://exponentialR.github.io/arise-website-demo/
```

The workflow at `.github/workflows/deploy.yml` follows Astro's maintained GitHub Pages approach:

1. a change is reviewed and merged to `main`;
2. GitHub Actions installs dependencies and builds the static site;
3. the generated artifact is deployed to GitHub Pages;
4. the public URL updates.

Repository Pages settings must use **GitHub Actions** as the source. No deployment token is stored in this repository; the workflow uses GitHub's scoped Pages permissions.

## Domain options

### A — GitHub Pages address

Use the generated GitHub address. The demonstrator's current infrastructure cost is £0/year, with a less polished URL.

### B — institutional subdomain

An institution can provide a subdomain such as `arise.qub.ac.uk` while GitHub Pages continues to host the site. This is potentially £0/year to ARISE if the institution supplies the subdomain and configures the required DNS/custom-domain mapping.

### C — independent ARISE domain

Register an independent domain and map it to GitHub Pages. Hosting remains unchanged; domain registration is the recurring cost. Prices vary, so this repository makes no guaranteed price claim.

These statements describe the demonstrator's current architecture and remain subject to third-party terms and policy changes.

## Governance and future editing

There is deliberately no admin dashboard in this prototype. The meeting should decide:

- official branding and programme wording;
- repository and domain ownership;
- who can propose, verify and approve content;
- who maintains content and receives public enquiries;
- who should have repository access.

The architecture does not assume Samuel is the permanent webmaster. Consortium editors can use a reviewed Git/Markdown workflow. If non-technical editing becomes a requirement, a suitable editing interface or CMS can later write to the same structured content without replacing the public site.

## Future transfer

If the consortium approves the approach, the repository can be transferred from `exponentialR` to an official ARISE GitHub organisation. The site does not need to be rebuilt from scratch: update the repository ownership, Pages URL/base configuration, workflow permissions and any chosen custom domain.

## Meeting walkthrough

Use [demo-script.md](docs/demo-script.md) for the live meeting sequence, including the raw publication record, automated workflow, architecture page and decisions to request.
