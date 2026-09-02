# ARISE website demonstrator — meeting script

Allow about 10–12 minutes for the walkthrough and leave the rest of the meeting for decisions.

## 1. Open the live website

Open <https://exponentialR.github.io/arise-website-demo/>.

Frame it as a working vertical slice, not the final or official ARISE website. Point out the persistent demonstrator notice and evidence-safe placeholders.

## 2. Show the homepage

Use the hero and the sections below it to explain the public purpose: one coherent route into the programme, people, research, publications, news and resources. Note that the visual direction is intentionally scholarly rather than product/startup styled.

## 3. Open ISC-XR

Open **Research → ISC-XR**.

Explain that only the supplied fact—that ISC-XR is a representative ARISE-related project—is treated as real. Missing scope, aims, team and outputs are clearly labelled for verification.

## 4. Show the connected records

On the ISC-XR page, scroll through **Project people**, **Linked publications**, and **Resources and coverage**. Explain that these are generated from content relationships, not copied into the page.

## 5. Open a person profile

Open **Example Researcher** from the project page. State explicitly that it is a placeholder profile. Show how its related research and publication are derived from the project and publication records.

## 6. Open Publications

Open **Publications** and show the year grouping, output type and linked project. Reiterate that the visible record is labelled as demonstration content and is not a fake citation presented as fact.

## 7. Show one raw content record

Open [`src/content/publications/demo-linked-publication.md`](https://github.com/exponentialR/arise-website-demo/blob/main/src/content/publications/demo-linked-publication.md) in GitHub.

Point to `authors` and `projects`. Explain the maintenance story:

```text
Add publication record
        ↓
Review and merge
        ↓
GitHub Actions rebuilds
        ↓
Publication appears on the site
        ↓
Project and author pages update automatically
```

## 8. Explain “entered once, reused”

The publication record owns its citation and references. The listing, detail page, project page, author profile and grouping views all query that one record.

## 9. Show automated deployment

Open [`.github/workflows/deploy.yml`](https://github.com/exponentialR/arise-website-demo/blob/main/.github/workflows/deploy.yml), then the repository **Actions** tab. A push to `main` builds the static site and deploys it to GitHub Pages.

## 10. Open the architecture page

Open <https://exponentialR.github.io/arise-website-demo/demo/architecture/>.

Walk left to right through content → Astro → GitHub → automated build → GitHub Pages → public website.

## 11. Explain avoided infrastructure

Use the cost table to distinguish infrastructure from staff/editorial work. For this demonstrator there is no paid host, database, CMS licence, application server or SSL certificate purchase. Note the caveat about future third-party policies and optional additions.

## 12. Explain the domain routes

- **A — GitHub Pages URL:** current prototype route, £0/year infrastructure.
- **B — institutional subdomain:** preferred potential zero-cost route if an institution supplies the subdomain and DNS support.
- **C — independent domain:** GitHub Pages still hosts the site; only variable domain registration introduces recurring cost.

## 13. Finish with decisions, not more technology

Ask Debra to help establish:

1. approved branding and programme wording;
2. official repository ownership;
3. who proposes, verifies and approves content;
4. who needs repository access;
5. the preferred domain route;
6. the public programme contact.

Close by noting that the repository can be transferred to an official ARISE organisation later without rebuilding the website.
