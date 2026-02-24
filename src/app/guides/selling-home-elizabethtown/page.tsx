import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Selling Your Home in Elizabethtown KY",
  description:
    "Guide to selling your home in Elizabethtown, KY. Pricing strategy, preparing your home, marketing tips, showing expectations, closing process, and seller timeline.",
  alternates: { canonical: "/guides/selling-home-elizabethtown/" },
};

export default function SellingHomeGuide() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Guides", href: "/guides/buying-home-elizabethtown/" },
        { label: "Selling Your Home" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "Market Trends", href: "/real-estate-market/trends/" },
          { label: "Home Appraisal Guide", href: "/guides/home-appraisal-guide/" },
          { label: "Best Time to Buy/Sell", href: "/guides/best-time-to-buy-elizabethtown/" },
          { label: "Property Taxes", href: "/real-estate-market/property-taxes/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
        ],
        relatedTitle: "Seller Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Selling Your Home in Elizabethtown, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Selling a home in Elizabethtown&apos;s current market puts you in a strong position. Low
        inventory, steady demand, and consistent appreciation mean well-prepared sellers can
        achieve strong sale prices and relatively quick closings. Whether you are relocating for
        a{" "}
        <Link href="/fort-knox/pcs-guide/" className="text-navy font-semibold hover:text-gold-dark">
          PCS move
        </Link>
        , upgrading to a larger home, or downsizing, this guide walks you through the entire
        process from preparation to closing day.
      </p>

      {/* Preparing Your Home */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Preparing Your Home for Sale
      </h2>
      <p className="text-gray-body mb-4">
        The work you do before listing directly impacts your sale price and time on market. In
        Elizabethtown, buyers expect clean, well-maintained homes, and the competition from{" "}
        <Link
          href="/real-estate-market/new-construction/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          new construction
        </Link>{" "}
        raises the bar for existing home presentation.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Declutter and Deep Clean</h3>
      <p className="text-gray-body mb-4">
        Remove personal items, excess furniture, and anything that makes rooms feel smaller than
        they are. Rent a storage unit if needed. Have the home professionally cleaned, including
        carpets, windows, and fixtures. First impressions are formed in the first 30 seconds of
        a showing, and cleanliness is the foundation.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Address Deferred Maintenance</h3>
      <p className="text-gray-body mb-4">
        Fix the things buyers will notice: dripping faucets, cracked grout, scuffed paint, worn
        weather stripping, and landscaping that needs attention. These are small investments that
        prevent buyers from mentally discounting your home. In central Kentucky, pay particular
        attention to the exterior — curb appeal matters in a market where many buyers drive by
        before scheduling a showing.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Consider Strategic Upgrades</h3>
      <p className="text-gray-body mb-4">
        Not every upgrade delivers a return. In the E-town market, the highest-ROI improvements
        for sellers include:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Fresh interior paint in neutral tones ($2,000-$4,000 for an average home).</li>
        <li>Updated light fixtures and hardware ($500-$1,500).</li>
        <li>Landscaping refresh: mulch, trimmed bushes, a clean walkway ($500-$1,000).</li>
        <li>Kitchen and bathroom updates if fixtures are outdated (varies widely, but even small changes help).</li>
      </ul>
      <p className="text-gray-body mb-4">
        Major renovations (full kitchen remodel, adding a bathroom) rarely pay for themselves
        before sale. Focus on cosmetic improvements that make the home feel updated without a
        major investment.
      </p>

      {/* Pricing Strategy */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Pricing Strategy</h2>
      <p className="text-gray-body mb-4">
        Pricing is the single most important decision you will make as a seller. In
        Elizabethtown&apos;s current{" "}
        <Link
          href="/real-estate-market/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          seller&apos;s market
        </Link>
        , homes sell at approximately 97-99% of their asking price. This means the right price
        from day one is critical — overpricing leads to extended days on market, price reductions,
        and ultimately a lower net sale price than if you had priced correctly at the start.
      </p>
      <p className="text-gray-body mb-4">
        Your agent will prepare a Comparative Market Analysis (CMA) that examines recent sales of
        similar homes in your{" "}
        <Link
          href="/elizabethtown/neighborhoods/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          neighborhood
        </Link>
        . The CMA considers square footage, lot size, condition, upgrades, and location to
        establish a realistic market value range. The best strategy is to price at or slightly
        below market value to generate immediate interest and potentially multiple offers.
      </p>
      <p className="text-gray-body mb-4">
        Avoid the temptation to &quot;test the market&quot; with an aspirational price. In E-town,
        homes that sit on the market beyond 45-60 days develop stigma, and buyers assume something
        is wrong. The data consistently shows that homes priced correctly from day one sell faster
        and at higher net prices than those that start high and reduce later.
      </p>

      {/* Marketing Your Home */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Marketing Your Home</h2>
      <p className="text-gray-body mb-4">
        In 2026, over 95% of home buyers begin their search online. How your home appears in
        digital listings determines whether buyers schedule a showing or scroll past.
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Professional photography.</strong> Non-negotiable. Professional photos generate
          significantly more online views than smartphone images. Expect to pay $150-$300 for a
          full photo package.
        </li>
        <li>
          <strong>Video and virtual tours.</strong> Especially valuable for attracting military
          buyers who may be house hunting from across the country before their PCS. A 3D virtual
          tour allows remote buyers to walk through the home digitally.
        </li>
        <li>
          <strong>MLS listing.</strong> Your home will be listed on the local MLS, which
          syndicates to Zillow, Realtor.com, Redfin, and other major platforms. The listing
          description should highlight features that E-town buyers value: proximity to Fort Knox,
          school district, neighborhood amenities, and any recent updates.
        </li>
        <li>
          <strong>Social media and targeted ads.</strong> Effective agents promote listings through
          social media channels and targeted advertising that reaches buyers already searching in
          the Elizabethtown area.
        </li>
      </ul>

      {/* Showings */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Showing Your Home
      </h2>
      <p className="text-gray-body mb-4">
        Once your home is listed, expect showing requests to start within the first few days.
        Here is how to manage the process:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Keep the home show-ready.</strong> Make beds, clean counters, and ensure
          the home is presentable at all times. The best showing request is the one you can
          say yes to immediately.
        </li>
        <li>
          <strong>Leave during showings.</strong> Buyers are more comfortable and spend more
          time exploring a home when the owner is not present. Take the family and pets out
          during scheduled showings.
        </li>
        <li>
          <strong>Open houses.</strong> Your agent may recommend an open house during the first
          weekend on market to generate buzz and attract multiple interested buyers simultaneously.
        </li>
        <li>
          <strong>Feedback.</strong> Your agent will collect showing feedback from buyer agents.
          This information is valuable — if multiple buyers mention the same concern, address it.
        </li>
      </ul>

      {/* Reviewing Offers and Negotiating */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Reviewing Offers and Negotiating
      </h2>
      <p className="text-gray-body mb-4">
        In Elizabethtown&apos;s current market, well-priced homes often receive offers within the
        first two weeks. When evaluating offers, consider more than just price:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Financing type.</strong> Cash and conventional offers may close faster, but VA
          and FHA offers are equally reliable in this market. Do not dismiss a VA buyer — they are
          a large segment of E-town purchasers and their financing is dependable.
        </li>
        <li>
          <strong>Contingencies.</strong> Inspection, appraisal, and financing contingencies are
          standard. Waived contingencies increase certainty but are uncommon in this market.
        </li>
        <li>
          <strong>Closing timeline.</strong> If you need a specific close date (especially for PCS
          timing), evaluate whether the buyer&apos;s proposed timeline aligns with your needs.
        </li>
        <li>
          <strong>Seller concessions.</strong> Buyers may request that you cover a percentage of
          their closing costs. This is common and can be factored into your net proceeds calculation.
        </li>
      </ul>

      {/* The Closing Process */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        The Closing Process and Timeline
      </h2>
      <p className="text-gray-body mb-4">
        Once you accept an offer, closing typically takes <strong>30-45 days</strong>. Here is the
        timeline:
      </p>
      <ol className="list-decimal pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Days 1-10: Inspection period.</strong> The buyer conducts a home inspection and
          may request repairs or credits. Negotiate reasonable requests; in this market, minor
          repair credits ($500-$2,000) are common and keep deals on track.
        </li>
        <li>
          <strong>Days 10-21: Appraisal.</strong> The buyer&apos;s lender orders an{" "}
          <Link
            href="/guides/home-appraisal-guide/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            appraisal
          </Link>
          . If you priced correctly based on comparable sales, the appraisal should support the
          contract price. Appraisals in E-town typically take 7-14 business days.
        </li>
        <li>
          <strong>Days 14-35: Underwriting.</strong> The buyer&apos;s lender finalizes loan
          approval. You may receive requests for documentation (HOA info, utility statements, etc.).
        </li>
        <li>
          <strong>Days 35-45: Clear to close.</strong> The lender issues final approval. The
          buyer receives their Closing Disclosure. You receive the settlement statement showing
          your net proceeds.
        </li>
        <li>
          <strong>Closing day.</strong> Sign documents at the title company. The buyer&apos;s
          funds are disbursed, the deed is recorded, and your net proceeds are wired to your
          account or provided via check. Transfer the keys, garage remotes, and any relevant
          documents to the new owner.
        </li>
      </ol>

      {/* Seller Costs */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        What Sellers Pay in Elizabethtown
      </h2>
      <p className="text-gray-body mb-4">
        As a seller, your costs at closing typically include:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Real estate agent commissions (negotiable, typically 5-6% of the sale price).</li>
        <li>Title insurance and closing fees ($1,000-$2,000).</li>
        <li>Prorated property taxes through the date of closing.</li>
        <li>Any seller concessions agreed to in the contract.</li>
        <li>Mortgage payoff on your existing loan (if applicable).</li>
        <li>Kentucky transfer tax ($0.50 per $500 of the sale price).</li>
      </ul>
      <p className="text-gray-body mb-4">
        On a $250,000 sale, total seller costs typically run $15,000-$20,000, leaving net proceeds
        of $230,000-$235,000 (assuming no existing mortgage). Your agent will provide a detailed
        net sheet early in the process so there are no surprises at closing.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Sell Your Home with Confidence
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          The right pricing, preparation, and marketing strategy can mean tens of thousands of
          dollars in your pocket.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            Compass and Key Group
          </Link>{" "}
          is a veteran-owned real estate team that knows the Elizabethtown market inside and out.
          Austin Kutz and his team will price your home based on current data, market it to the
          right buyers, and manage the entire process from listing to closing.
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
