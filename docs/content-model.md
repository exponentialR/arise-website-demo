# Content model

## Collections

Astro validates seven build-time content collections in `src/content.config.ts`.

| Collection     | Purpose                                                  | Important relationships                                       |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| `people`       | Researcher and leadership profiles                       | institution; optionally curated projects/publications         |
| `institutions` | Universities and other programme context                 | referenced by people and projects                             |
| `projects`     | Research activity                                        | people, institutions; optional curated publications/resources |
| `publications` | Bibliographic records                                    | authors and projects                                          |
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
                   ├─ Resource
                   └─ Media
```

References use record IDs—the Markdown filename without `.md`. Astro validates those IDs during the build, so a misspelled or missing relationship fails before deployment.

## Enter facts once

The publication is the canonical source for its citation, authors and related projects. A project page finds publication records that reference that project. A person page finds publication records that reference that author.

As a result, adding `src/content/publications/a-paper.md` updates:

- the publications index;
- the publication detail page;
- every referenced project page;
- every referenced author profile;
- year and type groupings.

Project and person schemas also permit optional curated forward references. Detail pages merge those with reverse relationships and remove duplicate records. Ordinary publication maintenance should use the publication record as the source of truth.

## Profile photographs

A person record may include an optional `photo` block with `url`, `alt`, `sourceUrl` and `sourceLabel`. The source fields make the image's public institutional origin visible on the profile page. If no appropriate verified photograph is available, the templates render the person's initials instead of inventing or substituting a likeness. Image selection and reuse permission must be confirmed before an official launch.

## Demonstration records

Every intentionally fictional record has `demo: true` and visible wording such as `[DEMONSTRATION RECORD]`. Real supplied facts are kept deliberately concise where approved copy has not been provided.

Before an official launch:

1. remove or replace demonstration records;
2. verify names, roles and affiliations;
3. verify official funding and collaboration wording;
4. verify every publication field and external link;
5. obtain permission and alt text for supplied imagery;
6. run `npm run check` and `npm run build`.

## Templates

Copy the `.md.example` file in the relevant content directory, rename it with a stable lowercase ID and replace every placeholder. These example files are not loaded into the website because the collection loader only matches `.md`.

Available templates:

- `src/content/people/_template.md.example`
- `src/content/projects/_template.md.example`
- `src/content/publications/_template.md.example`
- `src/content/news/_template.md.example`
- `src/content/media/_template.md.example`
