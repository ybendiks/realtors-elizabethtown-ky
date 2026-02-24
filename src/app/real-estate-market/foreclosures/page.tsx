import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Foreclosures in Elizabethtown KY | Hardin Co",
  description:
    "Find foreclosures in Elizabethtown and Hardin County, KY. REO properties, short sales, auction process, and what buyers need to know about distressed properties.",
  alternates: { canonical: "/real-estate-market/foreclosures/" },
};

export default function Foreclosures() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Real Estate Market", href: "/real-estate-market/" },
        { label: "Foreclosures" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "Investment Properties", href: "/real-estate-market/investment-properties/" },
          { label: "Market Trends", href: "/real-estate-market/trends/" },
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
          { label: "Home Appraisal Guide", href: "/guides/home-appraisal-guide/" },
          { label: "Property Taxes", href: "/real-estate-market/property-taxes/" },
        ],
        relatedTitle: "Related Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Foreclosures in Elizabethtown and Hardin County, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Foreclosed properties can represent significant savings for buyers willing to navigate a
        more complex purchase process. While Elizabethtown&apos;s healthy real estate market means
        foreclosures are relatively uncommon compared to post-recession years, distressed properties
        do appear in Hardin County. Here is how to find them, what types exist, and what risks you
        should understand before pursuing one.
      </p>

      {/* How to Find Foreclosures */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        How to Find Foreclosures in Hardin County
      </h2>
      <p className="text-gray-body mb-4">
        Foreclosed properties in the Elizabethtown area surface through several channels:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>MLS listings.</strong> Many bank-owned (REO) properties are listed on the
          local MLS just like any other home. Your real estate agent can set up automated
          searches filtered for foreclosure and bank-owned status. This is the most reliable
          way to find competitively priced distressed properties.
        </li>
        <li>
          <strong>Hardin County courthouse.</strong> Kentucky foreclosures go through a judicial
          process, meaning they are filed and processed through the courts. Auction notices are
          posted at the Hardin County courthouse and published in local legal notices.
          Commissioner&apos;s sales (judicial auctions) are held on the courthouse steps.
        </li>
        <li>
          <strong>HUD and government-owned properties.</strong> HUD homes (FHA-insured properties
          that foreclosed) are listed on the HUD Home Store website. VA-foreclosed properties
          appear on the VA&apos;s property listing site. Both sources occasionally have Hardin
          County listings.
        </li>
        <li>
          <strong>Bank and servicer websites.</strong> Large banks and mortgage servicers maintain
          their own REO listing pages. Checking these can surface properties before they hit the
          MLS or shortly after.
        </li>
      </ul>

      {/* Types of Distressed Properties */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        REO vs. Short Sale vs. Auction
      </h2>
      <p className="text-gray-body mb-4">
        Not all distressed properties are the same. Understanding the three main types helps you
        set realistic expectations:
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">REO (Real Estate Owned)</h3>
      <p className="text-gray-body mb-4">
        REO properties have already gone through the foreclosure process, and the bank now owns
        them. These are the most straightforward distressed purchases. The bank lists the property,
        often through a local agent, and buyers submit offers much like a traditional sale. Banks
        are motivated sellers but may take longer to respond to offers due to internal approval
        processes. Properties are sold as-is, though you can still conduct an inspection.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Short Sales</h3>
      <p className="text-gray-body mb-4">
        A short sale occurs when a homeowner sells for less than what they owe on the mortgage,
        with the lender&apos;s approval. Short sales can offer good prices but require patience.
        The lender must approve the sale, which can take 60-120 days or longer. In Elizabethtown,
        short sales are relatively rare given the strong market, but they do occur in situations
        involving financial hardship, divorce, or military relocation where timing does not allow
        for a full-price sale.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Courthouse Auctions</h3>
      <p className="text-gray-body mb-4">
        Kentucky foreclosure auctions (commissioner&apos;s sales) are held at the Hardin County
        courthouse. These sales typically require a deposit on the day of auction and full payment
        within 30 days. Properties sold at auction are strictly as-is with no inspection period.
        There may also be liens, back taxes, or title issues that the buyer inherits. Auctions
        offer the deepest discounts but carry the highest risk. They are best suited for
        experienced investors who can assess a property&apos;s value from the exterior and accept
        the uncertainty.
      </p>

      {/* Risks and Opportunities */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Risks and Opportunities</h2>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Opportunities</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Below-market pricing.</strong> REO and foreclosure properties in Hardin County
          are often priced 10-20% below comparable market-rate homes, creating an equity
          advantage from day one.
        </li>
        <li>
          <strong>Investment potential.</strong> A discounted foreclosure can become a strong{" "}
          <Link
            href="/real-estate-market/investment-properties/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            rental property
          </Link>{" "}
          with higher cash-on-cash returns due to the lower purchase price.
        </li>
        <li>
          <strong>Less competition.</strong> Many buyers avoid foreclosures due to the complexity,
          which means less competition compared to traditional listings.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Risks</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Property condition.</strong> Foreclosed homes may have deferred maintenance,
          vandalism, or damage. Budget for repairs and consider a thorough inspection before
          committing (when the purchase type allows it).
        </li>
        <li>
          <strong>As-is sales.</strong> Most distressed properties are sold as-is. The bank will
          not make repairs or offer concessions for defects discovered during inspection.
        </li>
        <li>
          <strong>Title complications.</strong> Liens, back taxes, and unclear title histories
          can complicate ownership transfer. Always order title insurance and have an attorney
          review the title commitment before closing.
        </li>
        <li>
          <strong>Financing challenges.</strong> Some distressed properties may not meet minimum
          condition standards required by FHA or{" "}
          <Link
            href="/fort-knox/va-loans-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            VA loan
          </Link>{" "}
          appraisals. Buyers may need conventional financing, a renovation loan (FHA 203k), or
          cash to complete the purchase.
        </li>
      </ul>

      <p className="text-gray-body mb-4">
        For buyers who are prepared and well-advised, foreclosures can be a path to significant
        savings. For a broader understanding of the local market and home values, review our{" "}
        <Link
          href="/real-estate-market/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          market overview
        </Link>{" "}
        and{" "}
        <Link
          href="/real-estate-market/trends/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          market trends
        </Link>{" "}
        to understand what comparable non-distressed properties sell for.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Navigate Foreclosures with Local Expertise
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Buying a foreclosure requires an agent who understands bank-owned transactions and can
          identify properties worth pursuing.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            Compass and Key Group
          </Link>{" "}
          can help you evaluate distressed properties in Hardin County, estimate repair costs,
          and negotiate with banks to secure the best possible price. Contact their team to
          discuss current foreclosure opportunities.
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
