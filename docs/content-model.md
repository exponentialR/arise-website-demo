# Content model

## Collections

Astro validates nine build-time content collections in `src/content.config.ts`.

| Collection     | Purpose                                                  | Important relationships                                       |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| `people`       | Researcher and leadership profiles                       | institution; optionally curated projects/publications         |
| `institutions` | Universities and research organisations                  | referenced by people and projects                             |
| `funders`      | Funding bodies, schemes and award evidence               | linked from publication funding records                       |
| `projects`     | Research activity                                        | people, institutions; optional curated publications/resources |
| `publications` | Bibliographic and award-linked output records            | named authors, optional people/projects and funding evidence  |
| `engagement`   | Presentations, exhibitions, workshops and outreach       | optional people, projects and publications                    |
| `news`         | Programme updates                                        | optional projects                                             |
| `media`        | Links to external coverage                               | optional project                                              |
| `resources`    | Dataset, software, repository, video and guide catalogue | projects and external location                                |

## Relationship shape

```text
Person ───────── Institution
  │
  ├──────────── Project
  │                │
  └─ Publication ──┤
        │          ├─ Resource
        │          └─ Media
        ├──────── Funding award
        └──────── Engagement
```

References use record IDs—the Markdown filename without `.md`. Astro validates those IDs during the build, so a misspelled or missing relationship fails before deployment.

## Enter facts once

The publication is the canonical source for its citation, authors, related projects and evidenced funding. Every published author name is stored exactly on the publication. Where the site also has a verified person profile, an optional `person` reference connects that name to the profile. A project page finds publication records that reference that project; a person page finds publication records whose named-author entry references that person.

As a result, adding `src/content/publications/a-paper.md` updates:

- the publications index;
- the publication detail page;
- every referenced project page;
- every referenced author profile;
- every referenced funder page;
- year and type groupings.

Project and person schemas also permit optional curated forward references. Detail pages merge those with reverse relationships and remove duplicate records. Ordinary publication maintenance should use the publication record as the source of truth.

## Profile photographs

A person record may include an optional `photo` block with `url`, `alt`, `sourceLabel` and an optional `sourceUrl`. A supplied local image uses a root-relative `/images/people/...` path; an externally hosted image uses its full URL. The source information is shown on the profile page. If no appropriate verified photograph is available, the templates render the person's initials instead of inventing or substituting a likeness. Image selection and reuse permission must be confirmed before an official launch.

A person profile is optional. A complete and exact author list can therefore be published without inventing an affiliation or profile for every co-author.

## Funding evidence

Funders are not institution records. A funder record stores the official body, scheme and award identifier. A publication may reference one or more awards with one of three visible evidence labels:

- **Acknowledged by publication:** the paper itself identifies the award;
- **Publisher funding metadata:** publisher-deposited metadata identifies the award;
- **Reported by funder:** an official funder record lists the output against the award.

These labels prevent a funder-reported output from being presented as though the paper itself contained the acknowledgement. Funding does not imply an ISC-XR project relationship; `projects` remains empty unless that narrower link is evidenced.

## Institution identity and logos

Institution records distinguish a **named programme collaborator** from a **contributor affiliation**. They also support an optional local `logo` block, but the demonstrator currently uses restrained typographic marks. Before adding a logo, obtain any required brand approval, store an approved asset in `public/images/institutions/`, record its source and provide accurate alt text.

## Engagement

Engagement records provide a structured home for presentations, exhibitions, workshops, webinars and public outreach. Records can link to people, projects and publications, but those relationships are optional: if an official event record does not name a presenter or exact session, leave the field empty and state the limitation.

## Demonstration records

Every intentionally fictional record has `demo: true` and visible wording such as `[DEMONSTRATION RECORD]`. Real supplied facts are kept deliberately concise where approved copy has not been provided.

Before an official launch:

1. remove or replace demonstration records;
2. verify names, roles and affiliations;
3. verify official funding and collaboration wording;
4. verify every publication field and external link;
5. obtain permission and alt text for supplied imagery;
6. confirm institutional-logo permissions before publishing official marks;
7. run `npm run check` and `npm run build`.

## Templates

Copy the `.md.example` file in the relevant content directory, rename it with a stable lowercase ID and replace every placeholder. These example files are not loaded into the website because the collection loader only matches `.md`.

Available templates:

- `src/content/people/_template.md.example`
- `src/content/projects/_template.md.example`
- `src/content/publications/_template.md.example`
- `src/content/funders/_template.md.example`
- `src/content/engagement/_template.md.example`
- `src/content/news/_template.md.example`
- `src/content/media/_template.md.example`
