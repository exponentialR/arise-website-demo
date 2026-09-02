import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const outputDirectory = new URL("../dist/", import.meta.url).pathname;
const basePath = "/arise-website-demo";

function filesBelow(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(path) : [path];
  });
}

function targetFor(href) {
  const clean = href.split(/[?#]/)[0];
  const path = clean.slice(basePath.length).replace(/^\//, "");
  if (!path) return join(outputDirectory, "index.html");
  if (path.endsWith("/")) return join(outputDirectory, path, "index.html");
  return join(outputDirectory, path);
}

const htmlFiles = filesBelow(outputDirectory).filter((file) =>
  file.endsWith(".html"),
);
const errors = [];
let internalLinkCount = 0;
let scriptCount = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const label = relative(outputDirectory, file);
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  if (h1Count !== 1) errors.push(`${label}: expected one h1, found ${h1Count}`);

  scriptCount += (html.match(/<script(?:\s|>)/g) ?? []).length;

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0)
    errors.push(
      `${label}: duplicate IDs ${[...new Set(duplicateIds)].join(", ")}`,
    );

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith(basePath)) {
      internalLinkCount += 1;
      const target = targetFor(href);
      if (!existsSync(target))
        errors.push(`${label}: missing internal target ${href}`);
    } else if (href.startsWith("/") && !href.startsWith("//")) {
      errors.push(
        `${label}: internal link omits the GitHub Pages base path: ${href}`,
      );
    }
  }
}

const requiredPages = [
  "index.html",
  "about/index.html",
  "research/isc-xr/index.html",
  "people/samuel-adebayo/index.html",
  "publications/index.html",
  "news/index.html",
  "media/index.html",
  "resources/index.html",
  "partners-contact/index.html",
  "demo/architecture/index.html",
];

for (const page of requiredPages) {
  if (!existsSync(join(outputDirectory, page)))
    errors.push(`missing required page: ${page}`);
}

for (const page of [
  "research/isc-xr/index.html",
  "people/example-researcher/index.html",
  "publications/demo-linked-publication/index.html",
]) {
  const html = readFileSync(join(outputDirectory, page), "utf8");
  if (!html.includes("Demonstration content"))
    errors.push(`${page}: demonstration label is not visible`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Verified ${htmlFiles.length} generated HTML files, ${internalLinkCount} base-aware internal links, one h1 per page, unique IDs and ${scriptCount} client scripts.`,
  );
}
