/**
 * Generates sitemap.xml during the build process.
 * Run after `next build` to produce a sitemap in the /out directory.
 * Usage: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.etownkyrealtors.com";

// All static routes (trailing slashes enforced)
const staticPages = [
  "/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/realtors/",
  "/realtors/compass-and-key-group/",
  "/elizabethtown/",
  "/elizabethtown/neighborhoods/",
  "/elizabethtown/schools/",
  "/elizabethtown/parks-recreation/",
  "/elizabethtown/things-to-do/",
  "/elizabethtown/cost-of-living/",
  "/elizabethtown/weather-climate/",
  "/elizabethtown/commuting/",
  "/elizabethtown/history/",
  "/elizabethtown/nearby-communities/",
  "/fort-knox/",
  "/fort-knox/pcs-guide/",
  "/fort-knox/bah-rates/",
  "/fort-knox/va-loans-elizabethtown/",
  "/fort-knox/off-post-housing/",
  "/fort-knox/military-relocation-guide/",
  "/fort-knox/on-post-vs-off-post/",
  "/fort-knox/knox-hills-housing/",
  "/real-estate-market/",
  "/real-estate-market/trends/",
  "/real-estate-market/investment-properties/",
  "/real-estate-market/new-construction/",
  "/real-estate-market/foreclosures/",
  "/real-estate-market/rental-market/",
  "/real-estate-market/property-taxes/",
  "/guides/first-time-homebuyer-elizabethtown/",
  "/guides/selling-home-elizabethtown/",
  "/guides/buying-home-elizabethtown/",
  "/guides/home-appraisal-guide/",
  "/guides/best-time-to-buy-elizabethtown/",
];

// Dynamic routes from data files
const realtorSlugs = [
  "schuler-bauer", "olive-oak-realty", "remax-executive-group",
  "greystone-realtors", "network-realty", "keller-williams-elizabethtown",
  "century-21-advantage", "coldwell-banker-legacy",
];

const neighborhoodSlugs = [
  "helmwood-heights", "woodland-heights", "pear-orchard", "ring-road",
  "foxborough-estates", "the-cedars", "thousand-oaks", "nicholas-ridge",
  "covington-ridge", "freeman-creek-estates", "winding-springs",
  "triple-crown", "downtown", "foxwood",
];

const schoolSlugs = [
  "hardin-county-schools", "elizabethtown-independent", "central-hardin-high",
  "john-hardin-high", "elizabethtown-high", "north-hardin-high",
  "heartland-elementary", "helmwood-heights-elementary", "fort-knox-dodea",
];

const parkSlugs = [
  "freeman-lake-park", "mike-carroll-park", "university-drive-park",
  "haycraft-park", "pritchard-community-center", "nature-park",
  "saunders-springs",
];

const thingsToDoSlugs = [
  "restaurants", "shopping", "swopes-museum", "seasonal-events",
  "golf-courses", "family-activities", "nightlife",
];

const communitySlugs = [
  "hodgenville", "glendale", "cecilia", "rineyville", "sonora",
];

const fortKnoxDynamicSlugs = [
  "best-neighborhoods-military", "schools-military-families",
  "commute-to-elizabethtown", "radcliff-ky", "vine-grove-ky",
  "brandenburg-ky", "selling-home-pcs", "first-home-va-loan",
  "amenities", "military-spouse-employment", "base-info",
  "temporary-housing", "dislocation-allowance", "renting-vs-buying",
  "military-lenders", "efmp-special-needs", "pet-friendly-housing",
  "recreation", "military-discounts", "dual-military-housing",
  "military-investment-properties", "pcs-checklist",
];

// Build all URLs
const allUrls = [
  ...staticPages,
  ...realtorSlugs.map((s) => `/realtors/${s}/`),
  ...neighborhoodSlugs.map((s) => `/elizabethtown/neighborhoods/${s}/`),
  ...schoolSlugs.map((s) => `/elizabethtown/schools/${s}/`),
  ...parkSlugs.map((s) => `/elizabethtown/parks-recreation/${s}/`),
  ...thingsToDoSlugs.map((s) => `/elizabethtown/things-to-do/${s}/`),
  ...communitySlugs.map((s) => `/elizabethtown/nearby-communities/${s}/`),
  ...fortKnoxDynamicSlugs.map((s) => `/fort-knox/${s}/`),
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${url === "/" ? "1.0" : url.split("/").filter(Boolean).length <= 1 ? "0.9" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const outPath = resolve(__dirname, "..", "out", "sitemap.xml");
try {
  writeFileSync(outPath, xml, "utf-8");
  console.log(`Sitemap generated: ${outPath} (${allUrls.length} URLs)`);
} catch {
  // If /out doesn't exist yet, write to public
  const publicPath = resolve(__dirname, "..", "public", "sitemap.xml");
  writeFileSync(publicPath, xml, "utf-8");
  console.log(`Sitemap generated: ${publicPath} (${allUrls.length} URLs)`);
}
