import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const profileLink = z.object({
  label: z.string(),
  url: z.url(),
});

const profilePhoto = z.object({
  url: z.url(),
  alt: z.string(),
  sourceUrl: z.url(),
  sourceLabel: z.string(),
});

const people = defineCollection({
  loader: glob({ base: "./src/content/people", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    institution: reference("institutions").optional(),
    summary: z.string(),
    projects: z.array(reference("projects")).optional(),
    publications: z.array(reference("publications")).optional(),
    profileLinks: z.array(profileLink).default([]),
    photo: profilePhoto.optional(),
    demo: z.boolean().default(false),
    order: z.number().int().optional(),
  }),
});

const institutions = defineCollection({
  loader: glob({ base: "./src/content/institutions", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    shortName: z.string().optional(),
    kind: z.enum([
      "University",
      "Funding / collaboration context",
      "Demonstration placeholder",
    ]),
    countryOrRegion: z.string().optional(),
    summary: z.string(),
    website: z.url().optional(),
    statusNote: z.string().optional(),
    demo: z.boolean().default(false),
    order: z.number().int().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    summary: z.string(),
    status: z.enum([
      "Active",
      "Completed",
      "Planned",
      "Details to be confirmed",
    ]),
    people: z.array(reference("people")).default([]),
    institutions: z.array(reference("institutions")).default([]),
    relatedPublications: z.array(reference("publications")).optional(),
    resources: z.array(reference("resources")).optional(),
    featured: z.boolean().default(false),
    demo: z.boolean().default(false),
    imageAlt: z.string().optional(),
    order: z.number().int().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ base: "./src/content/publications", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    authors: z.array(reference("people")).default([]),
    projects: z.array(reference("projects")).default([]),
    venue: z.string().optional(),
    type: z.enum([
      "Journal article",
      "Conference paper",
      "Report",
      "Book chapter",
      "Other",
      "Demonstration record",
    ]),
    doi: z.string().optional(),
    externalUrl: z.url().optional(),
    summary: z.string().optional(),
    demo: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    projects: z.array(reference("projects")).default([]),
    demo: z.boolean().default(false),
  }),
});

const media = defineCollection({
  loader: glob({ base: "./src/content/media", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    project: reference("projects").optional(),
    externalUrl: z.url().optional(),
    demo: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ base: "./src/content/resources", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    type: z.enum([
      "Dataset",
      "Software",
      "Repository",
      "Video",
      "Guide",
      "Demonstration record",
    ]),
    summary: z.string(),
    projects: z.array(reference("projects")).default([]),
    externalUrl: z.url().optional(),
    demo: z.boolean().default(false),
  }),
});

export const collections = {
  people,
  institutions,
  projects,
  publications,
  news,
  media,
  resources,
};
