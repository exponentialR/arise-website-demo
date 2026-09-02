# Codex instructions — ARISE Website Demo

## Objective
Build a polished demonstration website for ARISE, an international multi-university academic research programme.

## Technology
- Astro with TypeScript.
- Fully static output compatible with GitHub Pages.
- No database.
- No authentication.
- No server-side runtime dependency.
- Minimal JavaScript and dependencies.

## Content model
Use Astro content collections for:
- people
- institutions
- projects
- publications
- news
- media

Model relationships between these content types. Publications may reference people/projects; people reference institutions; projects reference people/institutions/publications; media may reference projects.

## Pages
Create Home, About, Projects, individual project pages, People, individual person pages, Publications, News, In the Media, and Partners/Contact.

## Demo content
Do not present unpublished work in progress as a project or create a publication record for it until its verified title, authorship and status are supplied. Use realistic structure, but do not invent achievements, funding claims, people, affiliations or publication details that are not explicitly provided. Use obvious placeholders where necessary.

## Design
Professional international academic/research-programme aesthetic. White/light backgrounds, restrained blue/grey palette, generous spacing, strong accessible typography, responsive layouts. Avoid startup-style gradients, glassmorphism, excessive animation or generic AI imagery.

## Deployment
Configure GitHub Actions and Astro for GitHub Pages. Document how a custom or institutional domain can later be attached.

## Documentation
README should explain architecture, content editing, deployment, and why the approach does not require a database/server/CMS subscription.

## Quality gate
Run the production build, fix TypeScript/build errors, check key responsive layouts, and keep dependencies minimal.
