import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { SITE_URL, SITE_NAME, CKG } from "@/lib/constants";
import { realtors } from "@/data/realtors";
import {
  MEDIAN_SALE_PRICE,
  DAYS_ON_MARKET,
  SALE_TO_LIST,
  MORTGAGE_RATE_30YR,
  LAST_DATA_REVIEW,
  usd,
} from "@/data/market-facts";

const REVIEW_MONTH = "October 2026";

export const metadata: Metadata = {
  title: `Best Realtors in Elizabethtown, KY (${REVIEW_MONTH} Comparison)`,
  description:
    "Compare real estate agencies serving Elizabethtown and Hardin County. Every office verified against the Heart of Kentucky Association of REALTORS roster, with who each brokerage suits best.",
  alternates: { canonical: "/realtors/best-realtors-elizabethtown-ky/" },
  openGraph: {
    title: `Best Realtors in Elizabethtown, KY (${REVIEW_MONTH} Comparison)`,
    description:
      "Compare verified real estate agencies serving Elizabethtown and Hardin County, and see which suits your situation.",
    url: `${SITE_URL}/realtors/best-realtors-elizabethtown-ky/`,
  },
};

/** Short "best for" line per brokerage, drawn from the verified facts. */
const BEST_FOR: Record<string, string> = {
  "compass-and-key-group":
    "Military buyers and sellers, PCS timing, and VA purchases",
  "olive-oak-realty":
    "Boutique service, and buyers who want commercial and residential under one roof",
  "schuler-bauer":
    "Moves that cross markets, where one brokerage can hold both sides",
  "remax-executive-group":
    "Investors and anyone keeping a property as a rental",
  "keller-williams-elizabethtown":
    "Searches spanning Hardin and Bullitt counties",
  "coldwell-banker-mcmahan":
    "Corporate relocations arriving through a national referral network",
};

const FAQS = [
  {
    question: "How many real estate agencies serve Elizabethtown?",
    answer:
      "The Heart of Kentucky Association of REALTORS lists roughly 160 member offices across its territory, though only a fraction are based in Elizabethtown itself. This page covers the Elizabethtown-based offices we were able to verify against that roster in October 2026.",
  },
  {
    question: "Does it cost more to use a larger brokerage?",
    answer:
      "Not inherently. Commission is negotiated per transaction rather than set by brand, and since the 2024 changes to how buyer agency is compensated, buyers agree their agent's fee in writing up front. Ask any agency directly what they charge and what the agreement covers. A brokerage that will not answer that clearly is telling you something.",
  },
  {
    question: "Should I choose the brokerage or the individual agent?",
    answer:
      "The agent, in almost every case. The brokerage sets the tools, the marketing reach and the referral network, but your experience comes down to the person handling your transaction. Within a large market centre, experience varies widely. Use the brokerage to narrow the field, then interview the agent.",
  },
  {
    question: "What is the Elizabethtown market doing right now?",
    answer: `The median sale price was ${usd(MEDIAN_SALE_PRICE.value)} over the three months ending ${MEDIAN_SALE_PRICE.asOf}, up 6.5% year over year. Homes sell in about ${DAYS_ON_MARKET.value} days at ${SALE_TO_LIST.value}% of list price. With 30-year mortgage rates at ${MORTGAGE_RATE_30YR.value}%, affordability is tighter than it was, and pricing accurately at listing matters more than it did a year ago.`,
  },
  {
    question: "Do I need an agent who specialises in military relocation?",
    answer:
      "If you are PCSing to or from Fort Knox, it helps considerably. The difference is not knowledge of VA loans alone, which many agents have, but familiarity with the timing: report dates, temporary lodging windows, and the fact that a delayed closing is far more expensive when your household goods are already in transit.",
  },
];

export default function BestRealtorsPage() {
  const verified = realtors.filter((r) => r.verification.status === "verified");

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Realtors", href: "/realtors/" },
        { label: "Best Realtors in Elizabethtown" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Full Realtor Directory", href: "/realtors/" },
          { label: "Elizabethtown Market Overview", href: "/real-estate-market/" },
          { label: "Fort Knox Relocation Guide", href: "/fort-knox/military-relocation-guide/" },
          { label: "Buying a Home in Elizabethtown", href: "/guides/buying-home-elizabethtown/" },
        ],
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Best Realtors in Elizabethtown, KY (${REVIEW_MONTH} Comparison)`,
          description: metadata.description,
          url: `${SITE_URL}/realtors/best-realtors-elizabethtown-ky/`,
          dateModified: LAST_DATA_REVIEW,
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
          mainEntity: {
            "@type": "ItemList",
            name: "Real estate agencies serving Elizabethtown, KY",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "RealEstateAgent",
                  name: CKG.name,
                  url: `${SITE_URL}${CKG.profileUrl}`,
                  telephone: CKG.phone,
                },
              },
              ...verified.map((r, i) => ({
                "@type": "ListItem",
                position: i + 2,
                item: {
                  "@type": "RealEstateAgent",
                  name: r.name,
                  url: `${SITE_URL}/realtors/${r.slug}/`,
                  ...(r.phone ? { telephone: r.phone } : {}),
                },
              })),
            ],
          },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        Best Realtors in Elizabethtown, KY
      </h1>
      <p className="text-sm text-gray-medium mb-6">
        Reviewed {REVIEW_MONTH}. Market figures from Redfin, {MEDIAN_SALE_PRICE.asOf}.
      </p>

      <div className="border-l-4 border-gold bg-gold/5 p-4 mb-6">
        <p className="text-gray-body">
          <strong>How this list was built.</strong> Every office below was checked against the
          Heart of Kentucky Association of REALTORS member roster in {REVIEW_MONTH} &mdash; the
          authoritative local list, covering all 160 member offices. Addresses and phone numbers
          come from that roster, not from our own records. Three agencies that previously appeared
          in this directory were <strong>removed</strong> during that review because we could not
          confirm them, including one whose office turned out to be 150 miles away. We would rather
          publish a shorter list we can stand behind.
        </p>
      </div>

      <p className="text-gray-body mb-6">
        There is no single best agency in Elizabethtown, and any page that tells you otherwise is
        selling something. What there is: a handful of established offices, each genuinely better
        suited to some situations than others. Below is what each one is, verified, and who it
        tends to suit &mdash; so you can shorten your list before you start making calls.
      </p>

      {/* Comparison table */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">At a glance</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white" style={{ backgroundColor: "#1B365D" }}>
              <th className="p-3 text-left">Agency</th>
              <th className="p-3 text-left">Office</th>
              <th className="p-3 text-left">Best suited to</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-border bg-gold/10">
              <td className="p-3">
                <Link
                  href={CKG.profileUrl}
                  className="text-navy font-semibold hover:text-gold-dark"
                >
                  {CKG.name}
                </Link>
                <span className="block text-xs text-gray-medium">Featured &middot; veteran-owned</span>
              </td>
              <td className="p-3 text-gray-body">639 N Mulberry St</td>
              <td className="p-3 text-gray-body">{BEST_FOR["compass-and-key-group"]}</td>
            </tr>
            {verified.map((r) => (
              <tr key={r.slug} className="border-b border-gray-border">
                <td className="p-3">
                  <Link
                    href={`/realtors/${r.slug}/`}
                    className="text-navy font-semibold hover:text-gold-dark"
                  >
                    {r.name}
                  </Link>
                </td>
                <td className="p-3 text-gray-body">
                  {r.address ? r.address.split(",")[0] : "—"}
                </td>
                <td className="p-3 text-gray-body">{BEST_FOR[r.slug] ?? "General residential sales"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Featured */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        {CKG.name} &mdash; our recommendation for military moves
      </h2>
      <p className="text-gray-body mb-4">
        We run this directory, so treat this section as what it is: our own pick, with the reasoning
        shown so you can judge it. {CKG.owner} is a U.S. Marine Corps veteran who has been through
        military relocations personally, operating under {CKG.brokerage} ({CKG.license}). In a
        market where Fort Knox drives a large share of transactions, having an agent who has
        actually executed a PCS move is a narrower and more useful qualification than general
        familiarity with VA loans.
      </p>
      <p className="text-gray-body mb-6">
        If your move has nothing to do with the installation, the honest answer is that several of
        the agencies below will serve you just as well. Call {CKG.phone}, or see the{" "}
        <Link href={CKG.profileUrl} className="text-navy font-semibold hover:text-gold-dark">
          full profile
        </Link>
        .
      </p>

      {/* Per-agency detail */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">The other verified agencies</h2>
      {verified.map((r) => (
        <div key={r.slug} className="mb-6 border-b border-gray-border pb-5">
          <h3 className="text-lg font-bold text-navy mb-1">
            <Link href={`/realtors/${r.slug}/`} className="hover:text-gold-dark">
              {r.name}
            </Link>
          </h3>
          <p className="text-xs text-gray-medium mb-2">
            {r.address} &middot; {r.phone}
          </p>
          <p className="text-gray-body text-sm mb-2">{r.description}</p>
          <p className="text-sm">
            <span className="font-semibold text-navy">Best suited to:</span>{" "}
            <span className="text-gray-body">{BEST_FOR[r.slug] ?? "General residential sales"}</span>
          </p>
        </div>
      ))}

      {/* Guidance */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">How to choose between them</h2>
      <p className="text-gray-body mb-4">
        Three questions separate agents faster than anything on a comparison table:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>How many homes have you closed in this price band in the last year?</strong>{" "}
          The median sale price here is {usd(MEDIAN_SALE_PRICE.value)}. An agent whose volume sits
          well above or below that is working a different market than you are.
        </li>
        <li>
          <strong>What did your last three listings sell for against asking?</strong> The market
          average is {SALE_TO_LIST.value}% of list. An agent consistently below that is either
          pricing badly or negotiating badly, and either one costs you money.
        </li>
        <li>
          <strong>Which school district is this house in?</strong> A local agent answers instantly,
          because it changes both the schools and the property tax bill &mdash; roughly 20% on the
          same house, depending on whether it sits in the Hardin County or Elizabethtown Independent
          district. Hesitation here tells you how local they really are.
        </li>
      </ul>
      <p className="text-gray-body mb-6">
        One practical note on timing: homes are taking about {DAYS_ON_MARKET.value} days to sell,
        against 62 a year ago, while 30-year rates sit at {MORTGAGE_RATE_30YR.value}%. Buyers have
        marginally more room to negotiate than they did; sellers have less room to test a high
        asking price and correct later.
      </p>

      <Faq items={FAQS} />

      {/* CTA */}
      <div className="bg-navy rounded-lg p-6 text-white" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Still narrowing it down?
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Browse the{" "}
          <Link href="/realtors/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            full directory
          </Link>{" "}
          for every verified agency, or read the{" "}
          <Link
            href="/real-estate-market/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            market overview
          </Link>{" "}
          before you start interviewing.
        </p>
      </div>
    </ContentLayout>
  );
}
