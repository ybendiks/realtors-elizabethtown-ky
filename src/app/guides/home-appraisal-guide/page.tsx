import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Appraisal Guide | Elizabethtown KY",
  description:
    "Home appraisal guide for Elizabethtown, KY buyers and sellers. How appraisals work, VA appraisal specifics, what affects home value, and what to do if it comes in low.",
  alternates: { canonical: "/guides/home-appraisal-guide/" },
};

export default function HomeAppraisalGuide() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Guides", href: "/guides/buying-home-elizabethtown/" },
        { label: "Home Appraisal Guide" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
          { label: "Selling Guide", href: "/guides/selling-home-elizabethtown/" },
          { label: "First-Time Buyer Guide", href: "/guides/first-time-homebuyer-elizabethtown/" },
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "VA Loans", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Property Taxes", href: "/real-estate-market/property-taxes/" },
        ],
        relatedTitle: "Related Guides",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Home Appraisal Guide for Elizabethtown, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        A home appraisal is a critical step in nearly every real estate transaction. Whether you
        are buying, selling, or refinancing in Elizabethtown, the appraisal determines the
        property&apos;s market value and directly affects financing. Understanding how appraisals
        work — and what to do when one does not go as expected — gives you a significant advantage.
      </p>

      {/* How the Appraisal Process Works */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        How the Appraisal Process Works
      </h2>
      <p className="text-gray-body mb-4">
        After a buyer goes under contract and their lender begins processing the loan, the lender
        orders an appraisal through an Appraisal Management Company (AMC). The key steps:
      </p>
      <ol className="list-decimal pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Assignment.</strong> A licensed appraiser is assigned to the property. Neither
          the buyer, seller, nor agents choose the appraiser — this independence is required by
          federal regulations.
        </li>
        <li>
          <strong>Property visit.</strong> The appraiser visits the home, typically spending
          30-60 minutes measuring, photographing, and noting the property&apos;s condition,
          features, and any issues. They examine both the interior and exterior.
        </li>
        <li>
          <strong>Comparable sales analysis.</strong> The appraiser identifies 3-6 recent sales
          of similar properties in the area (comparables or &quot;comps&quot;). They adjust for
          differences in square footage, lot size, condition, location, and features to arrive
          at a market value.
        </li>
        <li>
          <strong>Report delivery.</strong> The appraisal report is sent to the lender, typically
          within 7-14 business days of the property visit. In the Elizabethtown market,
          turnaround is generally on the faster end due to the availability of good comparable
          sales data.
        </li>
      </ol>
      <p className="text-gray-body mb-4">
        The appraisal fee is paid by the buyer and typically costs <strong>$400-$600</strong>
        {" "}for a standard single-family home in Hardin County. VA appraisals are slightly higher
        due to additional requirements.
      </p>

      {/* VA Appraisal Specifics */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        VA Appraisal Specifics
      </h2>
      <p className="text-gray-body mb-4">
        If you are purchasing with a{" "}
        <Link
          href="/fort-knox/va-loans-elizabethtown/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          VA loan
        </Link>
        , the appraisal process has additional layers that both buyers and sellers should
        understand:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>VA-assigned appraiser.</strong> The VA appraisal is ordered through the VA&apos;s
          own portal, not the lender&apos;s typical AMC. VA appraisers are specifically trained
          and credentialed.
        </li>
        <li>
          <strong>Minimum Property Requirements (MPRs).</strong> Beyond establishing market value,
          the VA appraiser checks that the home meets the VA&apos;s habitability and safety
          standards. This includes functional heating, safe roofing, adequate water supply, proper
          electrical systems, and no significant health hazards (lead paint, exposed wiring, etc.).
        </li>
        <li>
          <strong>Repair requirements.</strong> If the VA appraiser identifies MPR deficiencies,
          they must be corrected before the loan can close. Common flagged items include peeling
          paint on pre-1978 homes, missing handrails, and non-functional appliances. These are
          typically inexpensive repairs.
        </li>
        <li>
          <strong>Tidewater process.</strong> If the VA appraiser believes the property may not
          support the contract price, they may invoke the &quot;Tidewater&quot; procedure, which
          gives the buyer&apos;s agent 48 hours to submit additional comparable sales data before
          the final value is set. This is a valuable safeguard.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        In the Elizabethtown area, VA appraisals generally align well with market values because
        the area has ample recent sales data and a stable appreciation trend. Sellers accustomed
        to working with military buyers find the process straightforward.
      </p>

      {/* What Affects Appraised Value */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        What Affects Your Home&apos;s Appraised Value
      </h2>
      <p className="text-gray-body mb-4">
        Several factors influence how an appraiser values a home in the Elizabethtown{" "}
        <Link
          href="/real-estate-market/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          market
        </Link>
        :
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Recent comparable sales.</strong> This is the most heavily weighted factor.
          What similar homes in your{" "}
          <Link
            href="/elizabethtown/neighborhoods/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            neighborhood
          </Link>{" "}
          have sold for in the past 3-6 months sets the baseline.
        </li>
        <li>
          <strong>Square footage and layout.</strong> Livable square footage is a primary driver.
          Basements, bonus rooms, and non-conforming spaces are valued differently than main-level
          living areas.
        </li>
        <li>
          <strong>Condition and updates.</strong> A renovated kitchen, new roof, or updated HVAC
          add value. Deferred maintenance subtracts it.
        </li>
        <li>
          <strong>Location.</strong> Proximity to{" "}
          <Link
            href="/elizabethtown/schools/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            good schools
          </Link>
          , low-crime areas, and desirable amenities positively influences value. Busy roads,
          commercial adjacency, or flood zone proximity can reduce it.
        </li>
        <li>
          <strong>Lot size and features.</strong> Larger lots, fenced yards, and outbuildings
          (garages, workshops) contribute to value, particularly in rural areas of Hardin County.
        </li>
        <li>
          <strong>Market conditions.</strong> Appraisers account for current supply and demand
          trends. In a rising market like E-town&apos;s, this generally supports higher valuations.
        </li>
      </ul>

      {/* What to Do If the Appraisal Comes in Low */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        What to Do If the Appraisal Comes in Low
      </h2>
      <p className="text-gray-body mb-4">
        A low appraisal — where the appraised value is below the contract price — creates a gap
        that must be addressed. While this is uncommon in Elizabethtown due to consistent
        appreciation and good comparable data, it does happen. Here are your options:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Renegotiate the price.</strong> The most common resolution. The seller reduces
          the price to the appraised value, or the parties meet somewhere in between. An
          experienced agent can navigate this negotiation effectively.
        </li>
        <li>
          <strong>Buyer covers the gap.</strong> If you have the cash and strongly want the home,
          you can pay the difference between the appraised value and the contract price out of
          pocket. This amount cannot be financed.
        </li>
        <li>
          <strong>Challenge the appraisal.</strong> Your agent or lender can submit a
          Reconsideration of Value (ROV) with additional comparable sales the appraiser may have
          missed. This is sometimes successful, particularly if strong recent sales support a
          higher value.
        </li>
        <li>
          <strong>Walk away.</strong> If the contract includes an appraisal contingency (standard
          in most E-town transactions), the buyer can terminate the contract and receive their
          earnest money back.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Tips for Sellers to Support the Appraisal</h3>
      <p className="text-gray-body mb-4">
        If you are selling, you can help ensure the appraisal supports your contract price:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Provide your agent with a list of all improvements and upgrades, including dates and costs.</li>
        <li>Ensure the home is clean and accessible on appraisal day.</li>
        <li>Have your agent prepare a packet of comparable sales that support the contract price for the appraiser&apos;s reference.</li>
      </ul>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Appraisal Questions? Get Expert Answers
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Appraisals can make or break a deal, and having an agent who understands the process is
          essential.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            Compass and Key Group
          </Link>{" "}
          handles appraisal-related negotiations regularly and knows how to protect your interests
          whether you are buying or selling. Their veteran-owned team understands both conventional
          and VA appraisal processes and can guide you through any scenario.
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
