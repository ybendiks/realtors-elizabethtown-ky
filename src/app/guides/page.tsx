import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, CKG } from "@/lib/constants";
import {
  MEDIAN_SALE_PRICE,
  DAYS_ON_MARKET,
  MORTGAGE_RATE_30YR,
  LAST_DATA_REVIEW,
  usd,
} from "@/data/market-facts";

export const metadata: Metadata = {
  title: "Elizabethtown KY Real Estate Guides",
  description:
    "Step-by-step guides to buying and selling a home in Elizabethtown, KY: the full purchase process, first-time buyer help, appraisals, timing the market, and selling.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    title: "Elizabethtown KY Real Estate Guides",
    description:
      "Guides to buying and selling a home in Elizabethtown, KY, written for this market rather than the national average.",
    url: `${SITE_URL}/guides/`,
  },
};

const GUIDES = [
  {
    href: "/guides/buying-home-elizabethtown/",
    title: "Buying a Home in Elizabethtown",
    blurb:
      "The full process from first search to closing day, with the local steps a national guide will not tell you.",
    who: "Start here if you are buying",
  },
  {
    href: "/guides/first-time-homebuyer-elizabethtown/",
    title: "First-Time Homebuyer Guide",
    blurb:
      "Down payment options, credit thresholds, Kentucky assistance programmes and what closing actually costs here.",
    who: "Buying your first home",
  },
  {
    href: "/guides/selling-home-elizabethtown/",
    title: "Selling Your Home in Elizabethtown",
    blurb:
      "Pricing strategy, what to fix and what to leave, how listings are marketed locally, and the timeline to expect.",
    who: "Preparing to sell",
  },
  {
    href: "/guides/best-time-to-buy-elizabethtown/",
    title: "Best Time to Buy in Elizabethtown",
    blurb:
      "Seasonal patterns in this market, how PCS season moves inventory, and when negotiating leverage shifts.",
    who: "Deciding when to move",
  },
  {
    href: "/guides/home-appraisal-guide/",
    title: "Home Appraisal Guide",
    blurb:
      "How appraisals work, what happens when one comes in low, and the specifics of a VA appraisal.",
    who: "Under contract",
  },
];

export default function GuidesHub() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Guides" }]}
      sidebar={{
        relatedPages: [
          { label: "Elizabethtown Market Overview", href: "/real-estate-market/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Fort Knox Relocation", href: "/fort-knox/" },
          { label: "Find a Realtor", href: "/realtors/" },
        ],
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Elizabethtown KY Real Estate Guides",
          description: metadata.description,
          url: `${SITE_URL}/guides/`,
          dateModified: LAST_DATA_REVIEW,
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: GUIDES.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: g.title,
              url: `${SITE_URL}${g.href}`,
            })),
          },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        Elizabethtown Real Estate Guides
      </h1>
      <p className="text-sm text-gray-medium mb-6">
        Market figures from Redfin, {MEDIAN_SALE_PRICE.asOf}. Last reviewed {LAST_DATA_REVIEW}.
      </p>

      <p className="text-gray-body mb-8">
        These are written for Elizabethtown rather than the national average, which matters more
        than it sounds. The median sale price here is {usd(MEDIAN_SALE_PRICE.value)}, homes take
        about {DAYS_ON_MARKET.value} days to sell, and 30-year rates sit at{" "}
        {MORTGAGE_RATE_30YR.value}%. A guide written around a $400,000 coastal market will give you
        the wrong advice on every one of those numbers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {GUIDES.map((g) => (
          <div
            key={g.href}
            className="border border-gray-border rounded-lg p-5 hover:border-gold transition-colors"
          >
            <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-1">
              {g.who}
            </p>
            <h2 className="text-lg font-bold text-navy mb-2">
              <Link href={g.href} className="hover:text-gold-dark">
                {g.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-body mb-3">{g.blurb}</p>
            <Link
              href={g.href}
              className="text-sm text-navy font-medium hover:text-gold-dark"
            >
              Read the guide →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-navy rounded-lg p-6" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Rather just ask someone?
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          {CKG.owner} will answer the specific version of your question, about a specific house, in
          one call. Buying, selling, first home or investment property.{" "}
          {CKG.rating.toFixed(1)} from {CKG.reviewCount} {CKG.reviewSource} reviews.
        </p>
        <a
          href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`}
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors"
          style={{ backgroundColor: "#D4A843", color: "#1B365D" }}
        >
          Call {CKG.phone}
        </a>
      </div>
    </ContentLayout>
  );
}
