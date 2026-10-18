/**
 * Sitemap generator.
 *
 * Runs after `next build`, against the exported `out/` directory.
 *
 * Two deliberate design choices, both fixing real defects in the previous version:
 *
 * 1. URLs are discovered by walking the actual build output instead of being
 *    re-declared as hardcoded slug arrays. The old script duplicated every slug
 *    from src/data/*.ts, so a new page was silently missing from the sitemap
 *    until someone remembered to update two files.
 *
 * 2. `lastmod` is resolved per URL from git history of the file that actually
 *    produces that page. The old script stamped today's date on all 111 URLs on
 *    every build, which claimed the whole site changed each time it was deployed.
 *    Where the backing file cannot be resolved, `lastmod` is OMITTED rather than
 *    guessed — a wrong lastmod is worse than none, since Google discounts the
 *    signal entirely once it proves unreliable.
 */

import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = join(ROOT, "out");
const APP = join(ROOT, "src", "app");
const SITE_URL = "https://www.etownkyrealtors.com";

/** Routes that exist as files but must never appear in the sitemap. */
const EXCLUDE = new Set(["/404/", "/_not-found/"]);

// --- discover routes from the build output -------------------------------

function findRoutes(dir, base = "") {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "_next") continue;
      routes.push(...findRoutes(full, `${base}/${entry}`));
    } else if (entry === "index.html") {
      routes.push(base === "" ? "/" : `${base}/`);
    }
  }
  return routes;
}

// --- resolve lastmod from git --------------------------------------------

const gitDateCache = new Map();

function gitLastModified(absPath) {
  if (gitDateCache.has(absPath)) return gitDateCache.get(absPath);
  let date = null;
  try {
    const rel = relative(ROOT, absPath).split("\\").join("/");
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", rel], {
      cwd: ROOT,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out;
  } catch {
    // Not a git checkout, or the file is untracked. Leave null; lastmod is omitted.
  }
  gitDateCache.set(absPath, date);
  return date;
}

/**
 * Map a route back to the source file(s) that produce it.
 * A static route maps to its own page.tsx. A templated route maps to the
 * nearest [slug] template plus the data file it reads, and takes the later date.
 */
function sourcesForRoute(route) {
  const segments = route.split("/").filter(Boolean);
  const direct = join(APP, ...segments, "page.tsx");
  if (existsSync(direct)) return [direct];

  // Walk up looking for a dynamic [slug] template.
  for (let i = segments.length - 1; i >= 0; i--) {
    const parent = segments.slice(0, i);
    const tpl = join(APP, ...parent, "[slug]", "page.tsx");
    if (existsSync(tpl)) {
      const sources = [tpl];
      // The matching data module, by convention src/data/<parent-leaf>.ts
      const leaf = parent[parent.length - 1];
      if (leaf) {
        const data = join(ROOT, "src", "data", `${leaf}.ts`);
        if (existsSync(data)) sources.push(data);
      }
      return sources;
    }
  }
  return [];
}

function lastmodFor(route) {
  const dates = sourcesForRoute(route)
    .map(gitLastModified)
    .filter(Boolean)
    .sort();
  return dates.length ? dates[dates.length - 1] : null;
}

// --- priority / changefreq ------------------------------------------------

function depthOf(route) {
  return route.split("/").filter(Boolean).length;
}

function priorityFor(route) {
  if (route === "/") return "1.0";
  return depthOf(route) <= 1 ? "0.9" : "0.8";
}

function changefreqFor(route) {
  return route === "/" ? "weekly" : "monthly";
}

// --- build ----------------------------------------------------------------

if (!existsSync(OUT)) {
  console.error(`[sitemap] ${OUT} not found — run \`next build\` first.`);
  process.exit(1);
}

const routes = findRoutes(OUT)
  .filter((r) => !EXCLUDE.has(r))
  .sort();

let withLastmod = 0;
const urls = routes.map((route) => {
  const lastmod = lastmodFor(route);
  if (lastmod) withLastmod++;
  return [
    "  <url>",
    `    <loc>${SITE_URL}${route}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreqFor(route)}</changefreq>`,
    `    <priority>${priorityFor(route)}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

writeFileSync(join(OUT, "sitemap.xml"), xml, "utf-8");
console.log(
  `[sitemap] ${routes.length} URLs written to out/sitemap.xml ` +
    `(${withLastmod} with lastmod, ${routes.length - withLastmod} omitted)`,
);
