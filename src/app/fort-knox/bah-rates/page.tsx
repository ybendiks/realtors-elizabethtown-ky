import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "2026 Fort Knox BAH Rates by Rank | Housing Guide",
  description:
    "2026 BAH rates for Fort Knox, KY by rank with and without dependents. See how BAH compares to housing costs in Elizabethtown, Radcliff, and Vine Grove.",
  alternates: { canonical: "/fort-knox/bah-rates/" },
};

const bahRates = [
  { rank: "E-1", withDep: "$1,575", withoutDep: "$1,350" },
  { rank: "E-2", withDep: "$1,575", withoutDep: "$1,350" },
  { rank: "E-3", withDep: "$1,575", withoutDep: "$1,350" },
  { rank: "E-4", withDep: "$1,575", withoutDep: "$1,350" },
  { rank: "E-5", withDep: "$1,647", withoutDep: "$1,443" },
  { rank: "E-6", withDep: "$2,136", withoutDep: "$1,602" },
  { rank: "E-7", withDep: "$2,241", withoutDep: "$1,680" },
  { rank: "E-8", withDep: "$2,352", withoutDep: "$1,764" },
  { rank: "E-9", withDep: "$2,505", withoutDep: "$1,893" },
  { rank: "W-1", withDep: "$2,157", withoutDep: "$1,617" },
  { rank: "W-2", withDep: "$2,286", withoutDep: "$1,746" },
  { rank: "W-3", withDep: "$2,424", withoutDep: "$1,911" },
  { rank: "W-4", withDep: "$2,538", withoutDep: "$2,157" },
  { rank: "W-5", withDep: "$2,679", withoutDep: "$2,265" },
  { rank: "O-1", withDep: "$1,710", withoutDep: "$1,503" },
  { rank: "O-1E", withDep: "$2,259", withoutDep: "$1,695" },
  { rank: "O-2", withDep: "$2,133", withoutDep: "$1,683" },
  { rank: "O-2E", withDep: "$2,403", withoutDep: "$1,860" },
  { rank: "O-3", withDep: "$2,421", withoutDep: "$1,956" },
  { rank: "O-3E", withDep: "$2,559", withoutDep: "$2,130" },
  { rank: "O-4", withDep: "$2,724", withoutDep: "$2,241" },
  { rank: "O-5", withDep: "$2,943", withoutDep: "$2,301" },
  { rank: "O-6", withDep: "$2,964", withoutDep: "$2,403" },
  { rank: "O-7", withDep: "$2,985", withoutDep: "$2,442" },
];

export default function BAHRates() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: "BAH Rates 2026" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "PCS to Fort Knox Guide", href: "/fort-knox/pcs-guide/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
        ],
        relatedTitle: "Fort Knox Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "2026 BAH Rates for Fort Knox, KY",
          description:
            "Complete 2026 Basic Allowance for Housing (BAH) rate table for Fort Knox, Kentucky, covering ZIP codes 40121, 40160, and 42701.",
          url: `${SITE_URL}/fort-knox/bah-rates/`,
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        2026 BAH Rates for Fort Knox, KY
      </h1>
      <p className="text-sm text-gray-medium mb-6">Last updated: February 2026</p>

      <p className="text-lg text-gray-body mb-6">
        Basic Allowance for Housing (BAH) is the monthly stipend the military pays service members
        to cover housing costs when government quarters are not provided. For Fort Knox, the 2026
        BAH rates increased approximately <strong>7.2% over 2025 rates</strong>, reflecting rising
        housing costs in the region. The rates below apply to ZIP codes <strong>40121</strong> (Fort
        Knox), <strong>40160</strong> (Radcliff), and <strong>42701</strong> (Elizabethtown).
      </p>

      <div className="bg-gray-light border-l-4 border-gold rounded-r-lg p-5 mb-8">
        <h2 className="text-lg font-bold text-navy mb-3">Quick Facts</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Rate Year</dt>
            <dd className="text-sm text-gray-body font-medium">2026 (effective Jan 1)</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">YOY Change</dt>
            <dd className="text-sm text-gray-body font-medium">7.2% increase over 2025</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">ZIP Codes</dt>
            <dd className="text-sm text-gray-body font-medium">40121, 40160, 42701</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Median Home Price (E-town)</dt>
            <dd className="text-sm text-gray-body font-medium">~$250,000</dd>
          </div>
        </dl>
      </div>

      {/* BAH Rate Table */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2026 BAH Rate Table — Fort Knox</h2>
      <p className="text-gray-body mb-4">
        The following table shows estimated 2026 monthly BAH rates for Fort Knox by pay grade, with
        and without dependents. Rates are based on DOD calculations for the Fort Knox MHA (Military
        Housing Area).
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white" style={{ backgroundColor: "#1B365D" }}>
              <th className="text-left p-3 font-semibold" style={{ color: "#ffffff" }}>Pay Grade</th>
              <th className="text-right p-3 font-semibold" style={{ color: "#ffffff" }}>With Dependents</th>
              <th className="text-right p-3 font-semibold" style={{ color: "#ffffff" }}>Without Dependents</th>
            </tr>
          </thead>
          <tbody>
            {bahRates.map((rate, index) => (
              <tr
                key={rate.rank}
                className={`border-b border-gray-border ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-light"
                } ${
                  ["E-5", "O-3", "O-5"].includes(rate.rank) ? "font-semibold bg-gold/10" : ""
                }`}
              >
                <td className="p-3 text-navy">{rate.rank}</td>
                <td className="p-3 text-right text-gray-body">{rate.withDep}</td>
                <td className="p-3 text-right text-gray-body">{rate.withoutDep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-medium mb-8">
        * Rates shown are estimates based on DOD BAH calculation methodology and may vary slightly
        from final published rates. Confirm your exact rate through your finance office or the DOD
        BAH calculator. Highlighted rows show the most commonly referenced ranks.
      </p>

      {/* BAH vs Housing Costs */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">BAH vs Actual Housing Costs in the Fort Knox Area</h2>
      <p className="text-gray-body mb-4">
        Here is the math that makes the Fort Knox area one of the best duty stations for
        homeownership: <strong>your BAH often covers your entire mortgage payment</strong>,
        including principal, interest, taxes, and insurance (PITI). In many other duty station
        markets — think Fort Liberty, JBLM, or any base near a major metro — BAH barely covers
        rent, let alone a mortgage.
      </p>
      <p className="text-gray-body mb-4">
        Consider a typical scenario. An <strong>E-5 with dependents</strong> receives approximately{" "}
        <strong>$1,647/month</strong> in BAH. The median home price in Elizabethtown is roughly
        $250,000. With a{" "}
        <Link href="/fort-knox/va-loans-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
          VA loan
        </Link>{" "}
        at zero down and a 6.5% interest rate, the estimated monthly PITI on a $250,000 home is
        approximately <strong>$1,500-$1,600</strong>. That E-5&apos;s BAH covers the payment
        with room to spare — and they are building equity instead of paying rent.
      </p>
      <p className="text-gray-body mb-4">
        At the <strong>O-3 level with dependents ($2,421/month)</strong>, the picture is even more
        comfortable. You can afford homes in the $325,000-$380,000 range while still having BAH
        cover the full PITI. At the <strong>O-5 level ($2,943/month)</strong>, you&apos;re looking
        at homes up to $450,000+ with BAH fully covering the mortgage.
      </p>

      <div className="bg-gray-light rounded-lg p-5 mb-8">
        <h3 className="font-bold text-navy mb-3">BAH vs Housing Costs by Community</h3>
        <div className="space-y-3 text-sm text-gray-body">
          <div className="flex justify-between border-b border-gray-border pb-2">
            <span className="font-semibold text-navy">Elizabethtown</span>
            <span>Median home ~$250K | Avg rent ~$1,100-$1,300/mo</span>
          </div>
          <div className="flex justify-between border-b border-gray-border pb-2">
            <span className="font-semibold text-navy">Radcliff</span>
            <span>Median home ~$195K | Avg rent ~$950-$1,150/mo</span>
          </div>
          <div className="flex justify-between border-b border-gray-border pb-2">
            <span className="font-semibold text-navy">Vine Grove</span>
            <span>Median home ~$185K | Avg rent ~$900-$1,100/mo</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-navy">Brandenburg</span>
            <span>Median home ~$210K | Avg rent ~$900-$1,100/mo</span>
          </div>
        </div>
      </div>

      {/* BAH Toward Mortgage vs Rent */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Using BAH Toward a Mortgage vs Rent</h2>
      <p className="text-gray-body mb-4">
        This is one of the most important financial decisions you&apos;ll make at each duty station.
        When you rent, your entire BAH goes to a landlord and you build zero equity. When you buy
        with a VA loan, your BAH goes toward your own mortgage — and a portion of every payment
        builds equity in an asset you own.
      </p>
      <p className="text-gray-body mb-4">
        At Fort Knox, the numbers strongly favor buying if your tour is <strong>3 years or
        longer</strong>. Here&apos;s why:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>VA loans require $0 down</strong>, so you don&apos;t need savings to get started.
        </li>
        <li>
          <strong>BAH covers the full mortgage</strong> in most Elizabethtown and Radcliff
          neighborhoods at most ranks.
        </li>
        <li>
          <strong>Hardin County home values have appreciated steadily</strong> — roughly 4-6%
          annually in recent years. A $250,000 home could be worth $280,000-$290,000 in three years.
        </li>
        <li>
          <strong>If you PCS before selling</strong>, you can rent the property out. The Fort Knox
          area has strong rental demand from incoming military families, making it a viable
          investment property.
        </li>
        <li>
          <strong>Tax benefits</strong> — mortgage interest is deductible, and military personnel
          have favorable capital gains treatment on primary residences even with PCS-related
          absences.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        Renting still makes sense for short tours (under 2 years) or if you&apos;re uncertain about
        your plans. Average rents in{" "}
        <Link href="/fort-knox/off-post-housing/" className="text-navy font-semibold hover:text-gold-dark">
          off-post communities
        </Link>{" "}
        range from $900-$1,300 per month for a 3-bedroom home, leaving some BAH left over at
        mid-to-senior enlisted and officer ranks.
      </p>

      {/* ZIP Code Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Fort Knox BAH ZIP Codes</h2>
      <p className="text-gray-body mb-4">
        BAH is calculated based on the duty station ZIP code, not where you live off-post. For
        Fort Knox, the Department of Defense uses the following ZIP codes in the Military Housing
        Area (MHA) calculation:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li><strong>40121</strong> — Fort Knox proper</li>
        <li><strong>40160</strong> — Radcliff</li>
        <li><strong>42701</strong> — Elizabethtown</li>
      </ul>
      <p className="text-gray-body mb-4">
        Regardless of whether you choose to live in Elizabethtown, Radcliff, Vine Grove,
        Brandenburg, or anywhere else in the region, your BAH rate remains the same. It&apos;s
        based on your duty station assignment to Fort Knox, not your personal address.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Make Your BAH Work Harder</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          As a Marine Corps veteran, Austin Kutz at{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          understands BAH budgeting from personal experience. He helps military families find homes
          where BAH covers the full mortgage — turning a housing allowance into real equity. Whether
          you&apos;re an E-5 looking at your first home or an O-5 ready to invest, Austin can match
          your BAH to the right{" "}
          <Link href="/elizabethtown/neighborhoods/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Elizabethtown neighborhood
          </Link>.
        </p>
        <a
          href="tel:2707353897"
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
          style={{ backgroundColor: "#D4A843", color: "#1B365D" }}
        >
          Call (270) 735-3897
        </a>
      </div>
    </ContentLayout>
  );
}
