import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Investment Properties Elizabethtown KY",
  description:
    "Guide to investment properties in Elizabethtown, KY. Rental yields, best neighborhoods for investors, Fort Knox tenant demand, and BAH-based rental strategies.",
  alternates: { canonical: "/real-estate-market/investment-properties/" },
};

export default function InvestmentProperties() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Real Estate Market", href: "/real-estate-market/" },
        { label: "Investment Properties" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "Market Trends", href: "/real-estate-market/trends/" },
          { label: "Rental Market", href: "/real-estate-market/rental-market/" },
          { label: "Property Taxes", href: "/real-estate-market/property-taxes/" },
          { label: "New Construction", href: "/real-estate-market/new-construction/" },
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
        ],
        relatedTitle: "Investor Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Investment Properties in Elizabethtown, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Elizabethtown offers a compelling case for real estate investors. A combination of strong
        rental demand, affordable purchase prices, and a stable economic base anchored by{" "}
        <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
          Fort Knox
        </Link>{" "}
        creates the kind of predictable cash flow that investors seek. Whether you are a local
        landlord adding to your portfolio or an out-of-state investor looking at Kentucky for the
        first time, here is what you need to know about the Elizabethtown investment market.
      </p>

      {/* Rental Demand Drivers */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">What Drives Rental Demand</h2>
      <p className="text-gray-body mb-4">
        Elizabethtown benefits from multiple rental demand drivers that operate independently,
        reducing the risk that any single economic shift will collapse the market:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Fort Knox military families.</strong> PCS rotations bring a constant stream of
          tenants who need housing for 2-3 year assignments. Many of these families prefer to rent
          rather than buy, especially for shorter tours. Military tenants are generally reliable,
          with steady income backed by{" "}
          <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
            BAH
          </Link>
          .
        </li>
        <li>
          <strong>Elizabethtown Community and Technical College (ECTC) students.</strong> ECTC
          enrollment creates demand for affordable rental units, particularly one- and two-bedroom
          apartments near campus and along the Dixie Highway corridor.
        </li>
        <li>
          <strong>Young professionals and civilian workers.</strong> Fort Knox&apos;s civilian
          workforce, local healthcare employers, and the growing logistics sector along I-65
          generate demand from professionals who are not yet ready to buy or prefer renting
          flexibility.
        </li>
        <li>
          <strong>Louisville commuters.</strong> Some workers commuting to Louisville choose to rent
          in E-town for the lower cost of living while testing the area before committing to a
          purchase.
        </li>
      </ul>

      {/* Average Rental Yields */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Average Rental Yields</h2>
      <p className="text-gray-body mb-4">
        Gross rental yields in the Elizabethtown market typically fall in the{" "}
        <strong>6-9% range</strong>, depending on the property type, location, and condition.
        Here is a general breakdown:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Single-family homes ($180,000-$240,000 purchase):</strong> Renting for
          $1,200-$1,500/month, these properties generate gross yields of approximately 7-8%.
          After expenses (taxes, insurance, maintenance, vacancy), net yields typically settle
          around 4-6%.
        </li>
        <li>
          <strong>Duplexes and small multifamily:</strong> Less common in E-town but available.
          When you find them, cap rates can reach 8-10% because both units generate income
          against a single property tax and insurance cost.
        </li>
        <li>
          <strong>Townhomes and condos ($150,000-$200,000 purchase):</strong> Renting for
          $950-$1,150/month. HOA fees reduce net yield, but lower maintenance responsibility
          can offset some of that impact.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        Compared to markets like Louisville, Nashville, or Indianapolis, Elizabethtown offers
        higher cash-on-cash returns due to lower entry prices and a rental market supported by the
        military tenant base. For current average rent data, see our{" "}
        <Link
          href="/real-estate-market/rental-market/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          rental market overview
        </Link>
        .
      </p>

      {/* Best Neighborhoods for Investment */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Best Neighborhoods for Investment
      </h2>
      <p className="text-gray-body mb-4">
        Not every neighborhood in Elizabethtown makes an equally good investment. Here are the
        areas that consistently perform well for rental properties:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Helmwood and Valley Creek.</strong> Established subdivisions with affordable
          single-family homes in the $180,000-$220,000 range. Strong rental demand from military
          families, low vacancy rates, and predictable tenant turnover aligned with PCS cycles.
        </li>
        <li>
          <strong>Radcliff and Vine Grove (adjacent communities).</strong> Even more affordable
          than Elizabethtown proper, with strong proximity to Fort Knox gates. Properties here
          attract military tenants who want the shortest possible commute to post.
        </li>
        <li>
          <strong>Near Elizabethtown Community and Technical College.</strong> One- and two-bedroom
          units near campus or along Ring Road attract student and young professional tenants.
          Turnover is higher, but rents are steady.
        </li>
        <li>
          <strong>Newer subdivisions (Windermere, The Reserve).</strong> Higher purchase prices
          mean lower percentage yields, but these areas attract higher-quality tenants willing to
          pay premium rents. Maintenance costs are also lower on newer construction.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        For a full breakdown of{" "}
        <Link
          href="/elizabethtown/neighborhoods/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          Elizabethtown neighborhoods
        </Link>
        , including school ratings, amenities, and home values, see our neighborhood guide.
      </p>

      {/* Military Tenant Considerations */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Military Tenant Considerations
      </h2>
      <p className="text-gray-body mb-4">
        Renting to military families near Fort Knox offers distinct advantages, but investors should
        understand the unique aspects of this tenant pool:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>BAH-based affordability.</strong> Military tenants budget their housing based on
          their Basic Allowance for Housing. For an E-5 with dependents, that is approximately
          $1,647/month in 2026. Most military renters look for homes at or below their BAH rate.
          Pricing your rental at or slightly under the BAH rate for your target rank ensures fast
          occupancy.
        </li>
        <li>
          <strong>Predictable lease cycles.</strong> PCS orders create 2-3 year tenancies that are
          relatively predictable. However, the Servicemembers Civil Relief Act (SCRA) allows
          military tenants to break a lease with 30 days&apos; notice when they receive PCS
          orders. Factor this into your planning.
        </li>
        <li>
          <strong>Property condition expectations.</strong> Military families typically expect
          clean, well-maintained homes. Properties that meet the standards of on-post housing
          will attract tenants quickly, while deferred-maintenance properties will struggle.
        </li>
        <li>
          <strong>Income reliability.</strong> Military pay arrives on the 1st and 15th of every
          month without fail. Rent collection from military tenants is among the most reliable
          of any tenant demographic.
        </li>
      </ul>

      {/* Getting Started */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Getting Started as an Investor</h2>
      <p className="text-gray-body mb-4">
        If you are considering purchasing an investment property in Elizabethtown, preparation is
        key. Start by researching{" "}
        <Link
          href="/real-estate-market/property-taxes/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          Hardin County property tax rates
        </Link>{" "}
        and local landlord-tenant regulations. Kentucky is generally landlord-friendly compared to
        many states, with no rent control and reasonable eviction timelines, but you should still
        understand your obligations regarding security deposits, lease terms, and property maintenance.
      </p>
      <p className="text-gray-body mb-4">
        Working with a real estate agent who understands both the investment and military sides of
        the equation will help you identify properties that meet cash flow targets while appealing
        to the tenant base that drives this market.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Find Your Next Investment Property
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            Compass and Key Group
          </Link>{" "}
          works with investors throughout Hardin County, helping identify properties that meet
          cash flow targets and align with military tenant demand. As a veteran-owned team, they
          understand both the buyer and tenant side of the Fort Knox rental market and can help
          you make investment decisions grounded in local knowledge.
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
