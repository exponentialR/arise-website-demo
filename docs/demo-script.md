# ARISE website demonstrator — meeting script

Allow about 12–15 minutes for the walkthrough and leave the rest of the meeting for decisions.

## 1. Open the live website

Open <https://exponentialR.github.io/arise-website-demo/>.

Frame it as a working vertical slice, not the final or official ARISE website. Point out the persistent demonstrator notice and evidence-safe placeholders.

## 2. Show the homepage

Use the hero and the sections below it to explain the public purpose: one coherent route into the programme, collaborating universities, funding, research, publications, engagement, news and resources. Note that the visual direction is intentionally scholarly rather than product/startup styled.

## 3. Open ISC-XR

Open **Research → ISC-XR**.

Explain that ISC-XR is the supplied representative ARISE-related project. Its linked publications and authors are now verified from publisher and proceedings records, while the project's complete scope, team and approved programme wording remain clearly labelled for consortium review.

## 4. Show the connected records

On the ISC-XR page, scroll through **Project people**, **Linked publications**, and **Resources and coverage**. Explain that these are generated from content relationships, not copied into the page.

## 5. Open a person profile

Open **Samuel Adebayo** from the project page. Show that his institutional profile is concise, while the related research and publications are derived from project and publication records rather than copied into his profile.

## 6. Open Publications

Open **Publications** and show the year grouping, output type and linked project. Open **ConPose** and point out its verified author list, journal, DOI and publisher link.

## 7. Show one raw content record

Open [`src/content/publications/conpose.md`](https://github.com/exponentialR/arise-website-demo/blob/main/src/content/publications/conpose.md) in GitHub.

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

The ConPose record owns its citation metadata and references. The publication index, detail page, ISC-XR page, each author profile and grouping views all query that one record.

The relationship to demonstrate is:

```text
one verified publication record
        ↓
publication index
        ↓
author profiles
        ↓
relevant project page
```

## 9. Separate funders from institutions

Open **Funding**. Show that NSF, SFI and DfE are funding bodies with award records—not university cards. Open NSF to show the award identifier, evidence labels and the wider set of research outputs reported against or acknowledging the award.

Stress that a funding relationship and an ISC-XR project relationship are separate fields. The catalogue does not force every award output onto the ISC-XR page.

## 10. Show engagement as connected content

Open **Engagement**. Use the CIB World Building Congress record to show how a presentation can connect to its publication while leaving the presenter and exact session date blank when the source does not establish them.

## 11. Show automated deployment

Open [`.github/workflows/deploy.yml`](https://github.com/exponentialR/arise-website-demo/blob/main/.github/workflows/deploy.yml), then the repository **Actions** tab. A push to `main` builds the static site and deploys it to GitHub Pages.

## 12. Open the architecture page

Open <https://exponentialR.github.io/arise-website-demo/demo/architecture/>.

Walk left to right through content → Astro → GitHub → automated build → GitHub Pages → public website.

## 13. Explain avoided infrastructure

Use the cost table to distinguish infrastructure from staff/editorial work. For this demonstrator there is no paid host, database, CMS licence, application server or SSL certificate purchase. Note the caveat about future third-party policies and optional additions.

## 14. Explain the domain routes

- **A — GitHub Pages URL:** current prototype route, £0/year infrastructure.
- **B — institutional subdomain:** preferred potential zero-cost route if an institution supplies the subdomain and DNS support.
- **C — independent domain:** GitHub Pages still hosts the site; only variable domain registration introduces recurring cost.

## 15. Finish with decisions, not more technology

Ask Debra to help establish:

1. approved branding and programme wording;
2. official repository ownership;
3. who proposes, verifies and approves content;
4. who needs repository access;
5. the preferred domain route;
6. the public programme contact;
7. permission to use each institution and funder's official identity mark.

Close by noting that the repository can be transferred to an official ARISE organisation later without rebuilding the website.
