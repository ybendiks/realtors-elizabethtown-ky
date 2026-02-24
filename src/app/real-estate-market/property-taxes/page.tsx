import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Property Taxes Elizabethtown KY | Hardin Co",
  description:
    "Property tax rates in Elizabethtown and Hardin County, KY. Tax assessments, homestead exemptions, how rates compare to neighboring counties, and what homeowners pay.",
  alternates: { canonical: "/real-estate-market/property-taxes/" },
};

export default function PropertyTaxes() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Real Estate Market", href: "/real-estate-market/" },
        { label: "Property Taxes" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
          { label: "Investment Properties", href: "/real-estate-market/investment-properties/" },
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
          { label: "First-Time Buyer Guide", href: "/guides/first-time-homebuyer-elizabethtown/" },
          { label: "Home Appraisal Guide", href: "/guides/home-appraisal-guide/" },
        ],
        relatedTitle: "Related Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Property Taxes in Elizabethtown and Hardin County, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Property taxes are a key factor in your total homeownership cost, and Kentucky delivers
        good news on this front. The state consistently ranks among the lowest in the nation for
        property tax burden, and Hardin County is no exception. Whether you are buying your first
        home in Elizabethtown or evaluating an{" "}
        <Link
          href="/real-estate-market/investment-properties/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          investment property
        </Link>
        , understanding how property taxes work here will help you budget accurately.
      </p>

      {/* Tax Rates */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Hardin County Property Tax Rates
      </h2>
      <p className="text-gray-body mb-4">
        Property taxes in the Elizabethtown area are calculated using multiple overlapping rates.
        The combined rate for a home within city limits is approximately{" "}
        <strong>$1.07 per $100 of assessed value</strong>. This includes:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>State of Kentucky rate:</strong> $0.1220 per $100 (set by the state, applies to
          all Kentucky property).
        </li>
        <li>
          <strong>Hardin County rate:</strong> Approximately $0.476 per $100 (covers county
          government services).
        </li>
        <li>
          <strong>Hardin County Schools or Elizabethtown Independent Schools rate:</strong> The
          school tax is typically the largest component, varying by which school district your
          property falls within.
        </li>
        <li>
          <strong>City of Elizabethtown rate:</strong> Applies only to properties within E-town
          city limits. Homes in unincorporated Hardin County pay county and state rates only,
          resulting in a lower total.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        For a home assessed at <strong>$250,000</strong> (the current median), the annual property
        tax bill within Elizabethtown city limits works out to approximately{" "}
        <strong>$2,675</strong>. Homes outside city limits but within Hardin County pay
        somewhat less, typically in the $2,000-$2,400 range depending on the specific taxing
        district.
      </p>

      {/* How Assessments Work */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        How Property Tax Assessments Work in Kentucky
      </h2>
      <p className="text-gray-body mb-4">
        Kentucky assesses real property at <strong>100% of fair market value</strong>. The Hardin
        County Property Valuation Administrator (PVA) is responsible for determining the assessed
        value of every property in the county. Here is how the process works:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          The PVA office reviews property values annually based on recent sales data, property
          characteristics, and market conditions.
        </li>
        <li>
          When you purchase a home, the sale price typically becomes the new assessed value. For
          existing owners who have not sold, the PVA adjusts values based on comparable sales in
          the area.
        </li>
        <li>
          Assessment notices are mailed to property owners, usually in late spring. If you believe
          your assessment is inaccurate, you can file an appeal with the PVA within 30 days of
          the notice.
        </li>
        <li>
          Kentucky does not have a Proposition 13-style cap on assessment increases. Assessed
          values can rise with market conditions, which means property taxes may increase even
          without a rate change if home values appreciate.
        </li>
      </ul>

      {/* Homestead Exemption */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Homestead Exemption
      </h2>
      <p className="text-gray-body mb-4">
        Kentucky offers a homestead exemption that reduces the taxable value of a primary
        residence for qualifying homeowners:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Eligibility:</strong> Homeowners who are age 65 or older, or who are classified
          as totally disabled, qualify for the exemption.
        </li>
        <li>
          <strong>Exemption amount:</strong> The current exemption is{" "}
          <strong>$46,350</strong> of assessed value. This amount is adjusted periodically by the
          Kentucky General Assembly.
        </li>
        <li>
          <strong>Impact:</strong> For a qualifying homeowner with a $250,000 home, the exemption
          reduces the taxable value to $203,650, saving approximately $495 per year at current
          rates. The exemption applies to all property tax levies (state, county, school, and city).
        </li>
        <li>
          <strong>How to apply:</strong> File with the Hardin County PVA office. You will need
          proof of age or disability status and verification that the property is your primary
          residence.
        </li>
      </ul>

      {/* Comparison to Neighboring Counties */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        How Hardin County Compares
      </h2>
      <p className="text-gray-body mb-4">
        Property tax rates vary across Kentucky counties. Here is how Hardin County stacks up
        against nearby areas:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Jefferson County (Louisville):</strong> Combined rates are higher, typically
          $1.15-$1.25 per $100. Combined with Louisville&apos;s higher home values, the total
          tax burden is meaningfully greater than Hardin County.
        </li>
        <li>
          <strong>Bullitt County:</strong> Rates are comparable to Hardin County, in the $1.00-$1.10
          range. Bullitt County borders Louisville to the south and competes for many of the same
          commuter buyers.
        </li>
        <li>
          <strong>Meade County:</strong> Slightly lower rates than Hardin County, though the
          smaller population means fewer services and amenities. Meade County attracts some Fort
          Knox families seeking lower taxes and more rural settings.
        </li>
        <li>
          <strong>Nelson County:</strong> Rates are similar to Hardin County. Nelson County (home
          to Bardstown) is growing but offers fewer employment options than the Elizabethtown area.
        </li>
        <li>
          <strong>Indiana (Clark and Floyd counties):</strong> Homeowners who cross the river to
          Indiana face significantly higher property tax rates, often double what Kentucky
          charges. This is a major reason many Louisville-area workers choose Kentucky addresses.
        </li>
      </ul>

      <p className="text-gray-body mb-4">
        The bottom line: Hardin County&apos;s property taxes are among the most reasonable in the
        Louisville metro area. Combined with Elizabethtown&apos;s lower home prices, the total
        annual tax bill is very manageable. For a broader comparison of expenses, see our{" "}
        <Link
          href="/elizabethtown/cost-of-living/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          cost of living guide
        </Link>
        .
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10">
        <h2 className="text-xl font-bold text-white mb-2">
          Understand Your Total Homeownership Cost
        </h2>
        <p className="text-gray-300 text-sm mb-4">
          Property taxes are just one piece of the puzzle.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
          >
            Compass and Key Group
          </Link>{" "}
          helps buyers understand the full picture — purchase price, taxes, insurance, and
          maintenance — so you can budget with confidence. Whether you are buying with a VA loan
          or conventional financing, their veteran-owned team can walk you through the numbers
          specific to any property in Hardin County.
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
