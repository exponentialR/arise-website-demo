# ARISE website demonstrator — meeting script

Allow about 12–15 minutes for the walkthrough and leave the rest of the meeting for decisions.

## 1. Open the live website

Open <https://exponentialR.github.io/arise-website-demo/>.

Frame it as a working vertical slice, not the final or official ARISE website. The public pages present ARISE directly; the separate internal architecture page explains the demonstrator and its evidence limits.

## 2. Show the homepage

Use the hero and the sections below it to explain the public purpose: one coherent route into the programme, collaborating universities, funding, research, publications, engagement, news and resources. Note that the visual direction is intentionally scholarly rather than product/startup styled.

## 3. Open Research

Open **Research**.

Explain how the page presents connected areas of enquiry without labelling them as formal work packages. Named projects can be added later when their approved identity, scope and relationships are available.

## 4. Open a verified publication

Open **Publications → ConPose**. Point out its verified author list, journal, DOI, publisher link and funding evidence.

## 5. Open a person profile

Open **Samuel Adebayo** from the ConPose author list. Show that his institutional profile is concise, while related publications are derived from publication authorship rather than copied into his profile.

## 6. Open Publications

Open **Publications** and show the year grouping, output type, authorship and funding evidence. Explain that project links are optional and are only added where a named project relationship is independently supported.

## 7. Show one raw content record

Open [`src/content/publications/conpose.md`](https://github.com/exponentialR/arise-website-demo/blob/main/src/content/publications/conpose.md) in GitHub.

Point to `authors`, `funding` and `projects`. Explain the maintenance story:

```text
Add publication record
        ↓
Review and merge
        ↓
GitHub Actions rebuilds
        ↓
Publication appears on the site
        ↓
Author and funding pages update automatically
```

## 8. Explain “entered once, reused”

The ConPose record owns its citation metadata and references. The publication index, detail page, author profiles, funding pages and grouping views all query that one record.

The relationship to demonstrate is:

```text
one verified publication record
        ↓
publication index
        ↓
author profiles
        ↓
relevant funding pages
```

## 9. Separate funders from institutions

Open **Funding**. Show that NSF, SFI and DfE are funding bodies with award records—not university cards. Open NSF to show the award identifier, evidence labels and the wider set of research outputs reported against or acknowledging the award.

Stress that funding evidence and project relationships are separate fields. The catalogue does not force an award output into a named project.

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
