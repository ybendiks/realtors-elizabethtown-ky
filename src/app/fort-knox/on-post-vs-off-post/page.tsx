import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "On-Post vs Off-Post Housing | Fort Knox Guide",
  description:
    "Compare on-post Knox Hills housing vs off-post homes near Fort Knox. Pros, cons, costs, and a decision framework based on rank, family size, and tour length.",
  alternates: { canonical: "/fort-knox/on-post-vs-off-post/" },
};

export default function OnPostVsOffPost() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: "On-Post vs Off-Post" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
          { label: "PCS to Fort Knox Guide", href: "/fort-knox/pcs-guide/" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
        ],
        relatedTitle: "Fort Knox Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "On-Post vs Off-Post Housing at Fort Knox, KY",
          description:
            "Detailed comparison of living on-post in Knox Hills privatized housing vs off-post in Elizabethtown, Radcliff, and surrounding communities near Fort Knox.",
          url: `${SITE_URL}/fort-knox/on-post-vs-off-post/`,
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        On-Post vs Off-Post Housing at Fort Knox
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Should you live on-post at Fort Knox or find a home in the surrounding community? This is
        one of the first and most consequential decisions you will face during your PCS, and
        there is no one-size-fits-all answer. The right choice depends on your rank, family size,
        tour length, financial goals, and personal preferences. This guide lays out the honest pros
        and cons of both options so you can make the decision that fits your situation.
      </p>

      {/* Side by Side Comparison */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">At a Glance</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3 font-semibold">Factor</th>
              <th className="text-left p-3 font-semibold">On-Post (Knox Hills)</th>
              <th className="text-left p-3 font-semibold">Off-Post</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Monthly Cost</td>
              <td className="p-3 text-gray-body">100% of BAH (auto-deducted)</td>
              <td className="p-3 text-gray-body">Varies — often less than BAH</td>
            </tr>
            <tr className="bg-gray-light border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Equity Building</td>
              <td className="p-3 text-gray-body">None</td>
              <td className="p-3 text-gray-body">Yes, if buying with VA loan</td>
            </tr>
            <tr className="bg-white border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Commute</td>
              <td className="p-3 text-gray-body">Minutes or walking distance</td>
              <td className="p-3 text-gray-body">5-20 min depending on community</td>
            </tr>
            <tr className="bg-gray-light border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Maintenance</td>
              <td className="p-3 text-gray-body">Included — Knox Hills handles it</td>
              <td className="p-3 text-gray-body">Your responsibility (own) or landlord (rent)</td>
            </tr>
            <tr className="bg-white border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Home Choice</td>
              <td className="p-3 text-gray-body">Assigned based on availability</td>
              <td className="p-3 text-gray-body">Full market selection</td>
            </tr>
            <tr className="bg-gray-light border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Utilities</td>
              <td className="p-3 text-gray-body">Included in BAH allotment</td>
              <td className="p-3 text-gray-body">Your expense ($150-$300/mo typical)</td>
            </tr>
            <tr className="bg-white border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Schools</td>
              <td className="p-3 text-gray-body">DoDEA on-post schools</td>
              <td className="p-3 text-gray-body">Hardin County or E-town Independent</td>
            </tr>
            <tr className="bg-gray-light border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Community</td>
              <td className="p-3 text-gray-body">All-military neighborhood</td>
              <td className="p-3 text-gray-body">Mixed civilian-military</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 font-semibold text-navy">Pets</td>
              <td className="p-3 text-gray-body">Allowed with restrictions</td>
              <td className="p-3 text-gray-body">Depends on landlord/HOA</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* On-Post Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">On-Post: Knox Hills Privatized Housing</h2>
      <p className="text-gray-body mb-4">
        <Link href="/fort-knox/knox-hills-housing/" className="text-navy font-semibold hover:text-gold-dark">
          Knox Hills
        </Link>{" "}
        is the privatized housing community on Fort Knox, managed by Lendlease (operating as
        Centinel). It includes <strong>20 neighborhoods</strong> across the installation, offering
        two-, three-, and four-bedroom homes for military families. When you live in Knox Hills,
        your entire BAH is allotted directly to the housing office — you do not receive a separate
        housing check.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Pros of Living On-Post</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Zero commute.</strong> You live on the installation. PT formation is a short drive
          or walk. Recalls and early mornings are manageable. For dual-military couples both
          stationed at Knox, on-post eliminates commute time entirely.
        </li>
        <li>
          <strong>Community and security.</strong> Knox Hills neighborhoods are gated within the
          installation. Your neighbors are fellow military families who understand the lifestyle.
          Kids play together, spouses connect naturally, and there is a built-in support network —
          especially valuable for families on their first PCS.
        </li>
        <li>
          <strong>Maintenance included.</strong> Knox Hills handles all maintenance — HVAC, plumbing,
          appliances, lawn care for common areas, and snow removal. You submit a work order and
          they fix it. No landlord negotiations, no out-of-pocket repair costs.
        </li>
        <li>
          <strong>Utilities included.</strong> Your BAH allotment covers utilities (electric, water,
          gas) within the standard usage cap. In most months, you will not pay a separate utility
          bill.
        </li>
        <li>
          <strong>Proximity to on-post amenities.</strong> Commissary, PX, MWR facilities, child
          care (CDC), Ireland Army Health Clinic, and DoDEA schools are all nearby.
        </li>
        <li>
          <strong>Simplicity.</strong> No lease to sign, no deposits, no utility setup. You check
          in, get assigned a home, and you are done. For families arriving with limited time or
          energy, this simplicity is valuable.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cons of Living On-Post</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Waitlists.</strong> Depending on the unit size and season, waitlists can run 30-90
          days. During peak PCS season (May-August), three- and four-bedroom homes are in high
          demand. You may need temporary housing while you wait.
        </li>
        <li>
          <strong>You give up your entire BAH.</strong> Every dollar of your housing allowance goes
          to Knox Hills. There is no opportunity to pocket the difference or build equity. At an
          E-5 rate of $1,551/month, that is $55,836 over three years with nothing to show for it
          at the end.
        </li>
        <li>
          <strong>Limited choice.</strong> You do not choose your home — you are assigned a unit
          based on availability, rank, and family size. The homes are functional but may not match
          your preferences in terms of neighborhood feel, layout, or condition.
        </li>
        <li>
          <strong>Inspection and rules.</strong> Living on-post comes with more oversight — yard
          standards, noise policies, guest policies, and periodic inspections. Some families find
          this constraining.
        </li>
        <li>
          <strong>Home condition varies.</strong> Knox Hills homes range from recently renovated to
          decades old. The unit you are assigned may be in excellent shape or may have maintenance
          issues that take time to resolve through work orders.
        </li>
      </ul>

      {/* Off-Post Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Off-Post: Buying or Renting in the Community</h2>
      <p className="text-gray-body mb-4">
        Living off-post means finding a home in one of the{" "}
        <Link href="/fort-knox/off-post-housing/" className="text-navy font-semibold hover:text-gold-dark">
          surrounding communities
        </Link>{" "}
        — Elizabethtown (15 min), Radcliff (5 min), Vine Grove (10 min), or Brandenburg (20 min).
        You receive your full BAH and use it to pay rent or a mortgage. Any BAH left over is yours
        to keep.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Pros of Living Off-Post</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Build equity.</strong> This is the biggest financial advantage. With a{" "}
          <Link href="/fort-knox/va-loans-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
            VA loan
          </Link>{" "}
          at zero down, your BAH goes toward your own mortgage instead of a housing company. In
          Elizabethtown, home values have appreciated 4-6% annually, meaning a $250,000 home could
          be worth $280,000-$290,000 by the end of a three-year tour. That is real wealth you take
          with you.
        </li>
        <li>
          <strong>More space and choice.</strong> Off-post, you choose your home — the neighborhood,
          the lot size, the layout, the school district. Elizabethtown alone has{" "}
          <Link href="/elizabethtown/neighborhoods/" className="text-navy font-semibold hover:text-gold-dark">
            14 distinct neighborhoods
          </Link>{" "}
          to explore, from starter homes under $200,000 to executive properties over $400,000.
        </li>
        <li>
          <strong>Pocket BAH savings.</strong> In many cases, especially at mid-to-senior enlisted
          and officer ranks, your BAH exceeds the actual cost of a mortgage or rent in the area.
          That difference stays in your pocket.
        </li>
        <li>
          <strong>Freedom.</strong> No housing office inspections, no on-post rules about yard
          maintenance standards, no guest policies. Your home is your own.
        </li>
        <li>
          <strong>School district options.</strong> Off-post, you can choose between{" "}
          <Link href="/elizabethtown/schools/" className="text-navy font-semibold hover:text-gold-dark">
            Hardin County Schools
          </Link>{" "}
          and Elizabethtown Independent Schools based on where you live. Both systems are Purple
          Star designated and have strong programs for military families.
        </li>
        <li>
          <strong>Investment potential.</strong> If you PCS before you are ready to sell, you can
          rent the property to the next wave of military families. The Fort Knox area has strong
          and consistent rental demand.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cons of Living Off-Post</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Commute.</strong> Even a 15-minute commute adds up — especially for 0500 PT
          formations in January. Radcliff minimizes this, but it is still more than walking across
          post.
        </li>
        <li>
          <strong>Maintenance responsibility.</strong> If you own, you handle repairs —
          or pay for them. A new HVAC system or roof is on you, not a work order.
        </li>
        <li>
          <strong>Utility costs.</strong> Unlike on-post housing, you pay your own utilities
          off-post. Budget $150-$300/month for electricity, water, gas, and trash depending on home
          size and season.
        </li>
        <li>
          <strong>Upfront costs when buying.</strong> While VA loans require zero down, you may
          still need funds for a home inspection ($300-$500) and some closing costs (though sellers
          often cover these in the E-town market).
        </li>
        <li>
          <strong>Selling pressure at PCS.</strong> If you buy and then receive short-notice orders,
          you will need to sell or find a tenant quickly. The Fort Knox market is forgiving here —
          homes sell in 15-30 days typically — but it adds stress.
        </li>
      </ul>

      {/* Decision Framework */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Decision Framework: Which Is Right for You?</h2>
      <p className="text-gray-body mb-4">
        Use these questions to guide your decision. There are no wrong answers — only what works
        best for your family right now.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Based on Tour Length</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Under 2 years:</strong> On-post or renting off-post is usually the simpler choice.
          Buying for a short tour can work, but you are betting on appreciation and may not break
          even on closing costs.
        </li>
        <li>
          <strong>2-3 years:</strong> Either option works. If you want simplicity, go on-post. If
          you want to build equity and have the energy to manage a home purchase, buying off-post
          with a VA loan is viable.
        </li>
        <li>
          <strong>3+ years:</strong> Buying off-post strongly favors you financially. Three years
          of BAH going toward your own mortgage, combined with steady home appreciation in Hardin
          County, builds meaningful wealth.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Based on Rank</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Junior enlisted (E-1 to E-4):</strong> On-post is often the easiest option.{" "}
          <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
            BAH at these ranks
          </Link>{" "}
          is lower, and the financial margin is tighter. On-post simplifies the equation.
        </li>
        <li>
          <strong>Mid-grade enlisted (E-5 to E-7):</strong> Off-post buying becomes very attractive.
          An E-5 with dependents at $1,551/month can comfortably afford a home in Radcliff,
          Vine Grove, or entry-level E-town neighborhoods. An E-7 at $1,668/month has even more
          room.
        </li>
        <li>
          <strong>Officers (O-1 to O-5+):</strong> Off-post is the norm. BAH at officer ranks
          provides significant purchasing power in the E-town market. An O-3 at $1,845/month and
          an O-5 at $2,079/month can afford spacious family homes in E-town&apos;s best
          neighborhoods.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Based on Family Size</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Single or couple without children:</strong> On-post is simple and convenient.
          Off-post renting is also easy.
        </li>
        <li>
          <strong>Family with children:</strong> Consider school districts carefully. Off-post gives
          you school choice. On-post uses DoDEA schools, which are solid but limited in size.
        </li>
        <li>
          <strong>Large family (3+ children):</strong> Four-bedroom Knox Hills homes have the
          longest waitlists. Off-post gives you access to larger homes with more bedrooms and yard
          space.
        </li>
      </ul>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10">
        <h2 className="text-xl font-bold text-white mb-2">Leaning Toward Off-Post? Let a Veteran Guide You.</h2>
        <p className="text-gray-300 text-sm mb-4">
          Austin Kutz at{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light">
            Compass and Key Group
          </Link>{" "}
          is a Marine Corps veteran who understands exactly what you are weighing. He has helped
          military families at every rank find the right off-post home — from E-5s buying their
          first home in Radcliff to O-5s settling into E-town&apos;s best neighborhoods. Austin
          can walk you through the{" "}
          <Link href="/fort-knox/va-loans-elizabethtown/" className="text-gold hover:text-gold-light">
            VA loan process
          </Link>, match your{" "}
          <Link href="/fort-knox/bah-rates/" className="text-gold hover:text-gold-light">
            BAH
          </Link>{" "}
          to a home, and close on your timeline.
        </p>
        <a
          href="tel:2707353897"
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
        >
          Call (270) 735-3897
        </a>
      </div>
    </ContentLayout>
  );
}
