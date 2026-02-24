import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Elizabethtown KY Real Estate Market Trends",
  description:
    "Elizabethtown, KY housing market trends. Price appreciation, inventory data, interest rate impacts, and Fort Knox economic influence on Hardin County real estate.",
  alternates: { canonical: "/real-estate-market/trends/" },
};

export default function MarketTrends() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Real Estate Market", href: "/real-estate-market/" },
        { label: "Market Trends" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "Investment Properties", href: "/real-estate-market/investment-properties/" },
          { label: "New Construction", href: "/real-estate-market/new-construction/" },
          { label: "Rental Market", href: "/real-estate-market/rental-market/" },
          { label: "Property Taxes", href: "/real-estate-market/property-taxes/" },
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
          { label: "Best Time to Buy", href: "/guides/best-time-to-buy-elizabethtown/" },
        ],
        relatedTitle: "Market Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Elizabethtown, KY Real Estate Market Trends
      </h1>
      <p className="text-sm text-gray-medium mb-6">Last updated: February 2026</p>

      <p className="text-lg text-gray-body mb-6">
        Tracking market trends is essential whether you are buying, selling, or investing in
        Elizabethtown real estate. The Hardin County market has followed a remarkably consistent
        upward trajectory over the past several years, driven by strong demand fundamentals rather
        than speculation. Here is a detailed look at where prices have been, where inventory stands,
        and what forces are shaping the market today.
      </p>

      {/* Price Trends */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Price Trends: 2021 to 2026
      </h2>
      <p className="text-gray-body mb-4">
        The median home price in Elizabethtown has risen from approximately{" "}
        <strong>$200,000 in 2021</strong> to around <strong>$250,000 in early 2026</strong>. That
        represents roughly 25% cumulative appreciation over five years, or an average annual gain
        of about 4-5%. Breaking it down year by year:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>2021:</strong> Median around $200,000. The post-pandemic buying surge hit
          E-town, though less dramatically than major metros. Low mortgage rates fueled demand.
        </li>
        <li>
          <strong>2022:</strong> Median climbed to approximately $215,000-$220,000. Prices rose
          sharply nationwide, and E-town followed suit with gains in the 7-10% range, its
          strongest single-year appreciation in recent history.
        </li>
        <li>
          <strong>2023:</strong> Growth moderated to 3-4% as mortgage rates increased. Median
          settled around $225,000-$230,000. Some buyers paused, but inventory remained tight
          enough to sustain prices.
        </li>
        <li>
          <strong>2024:</strong> Steady 3-5% appreciation continued. Median reached approximately
          $235,000-$240,000. The market absorbed rate increases better than many analysts
          predicted, thanks to strong local demand drivers.
        </li>
        <li>
          <strong>2025-2026:</strong> Median has reached the $250,000 mark. Appreciation has
          settled into a sustainable 3-4% annual pace. Buyer activity remains solid, particularly
          in the $200,000-$300,000 range that forms the core of the market.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        The key takeaway: Elizabethtown has avoided the boom-and-bust pattern that affected some
        overheated markets. Prices have grown steadily, making real estate here a reliable long-term
        asset rather than a speculative gamble.
      </p>

      {/* Inventory Trends */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Inventory Trends</h2>
      <p className="text-gray-body mb-4">
        Housing inventory in Elizabethtown has been tight for the better part of five years, and
        that condition shows no immediate signs of changing. The area currently operates with
        approximately <strong>2-3 months of supply</strong>, well below the 5-6 months that
        economists consider balanced. Several factors contribute to the shortage:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Rate lock-in effect.</strong> Homeowners who secured mortgage rates in the 2-3%
          range during 2020-2021 have little incentive to sell and take on a new mortgage at
          higher rates. This is keeping existing homes off the market.
        </li>
        <li>
          <strong>Steady buyer inflow.</strong> Military PCS cycles bring a new wave of buyers to
          the Fort Knox area every year, particularly during the May-August{" "}
          <Link
            href="/guides/best-time-to-buy-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            PCS season
          </Link>
          . This creates perpetual demand that existing inventory cannot fully satisfy.
        </li>
        <li>
          <strong>Construction lag.</strong> While{" "}
          <Link
            href="/real-estate-market/new-construction/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            new construction
          </Link>{" "}
          is adding homes, the pace has not been sufficient to offset overall demand. Builder
          timelines, labor constraints, and material costs have slowed the delivery pipeline.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        For sellers, tight inventory means less competition and faster sales. For buyers, it means
        acting quickly when a well-priced property appears and being fully prepared with
        pre-approval in hand.
      </p>

      {/* Interest Rate Impact */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Interest Rate Impact on the Local Market
      </h2>
      <p className="text-gray-body mb-4">
        Rising mortgage rates from 2022 through 2024 impacted affordability nationwide, but
        Elizabethtown&apos;s lower price point cushioned the blow. Here is how rates have played
        out locally:
      </p>
      <p className="text-gray-body mb-4">
        When rates climbed from the historic lows of 2.5-3% to the 6.5-7% range, monthly payments
        on a median-priced home increased significantly. However, because E-town&apos;s median is
        $250,000 rather than $400,000+, the absolute dollar impact was less severe than in higher-cost
        markets. A $250,000 mortgage at 7% costs roughly $1,663 per month in principal and interest,
        compared to $2,661 on a $400,000 loan at the same rate. The gap matters.
      </p>
      <p className="text-gray-body mb-4">
        For military buyers using{" "}
        <Link
          href="/fort-knox/va-loans-elizabethtown/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          VA loans
        </Link>
        , the rate picture has been more favorable. VA loan rates typically run 0.25-0.50%
        below conventional rates, and with no down payment or PMI requirement, the effective
        monthly cost remains manageable within{" "}
        <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
          BAH budgets
        </Link>{" "}
        for most ranks.
      </p>
      <p className="text-gray-body mb-4">
        The broader takeaway: rate increases slowed buyer activity somewhat in 2023-2024 but did not
        meaningfully reduce prices in Elizabethtown. Demand remained strong enough, and inventory
        tight enough, to keep the market on a modest upward path.
      </p>

      {/* New Construction Impact */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">New Construction&apos;s Role</h2>
      <p className="text-gray-body mb-4">
        New construction is playing an increasingly important role in the Elizabethtown market.
        Subdivisions like Foxwood, Cowley Farms, and several smaller developments are adding new
        homes to the area&apos;s housing stock. Ball Homes and other regional builders have been
        active, offering homes in the $260,000-$380,000 range that appeal to both first-time and
        move-up buyers.
      </p>
      <p className="text-gray-body mb-4">
        New builds have introduced modern floor plans, energy-efficient construction, and amenities
        that older homes in established{" "}
        <Link
          href="/elizabethtown/neighborhoods/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          E-town neighborhoods
        </Link>{" "}
        cannot match. This has created a tiered market where buyers choosing between a renovated
        existing home and a brand-new build at similar price points weigh different trade-offs. For
        a full comparison, see our{" "}
        <Link
          href="/real-estate-market/new-construction/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          new construction guide
        </Link>
        .
      </p>

      {/* Fort Knox Economic Influence */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Fort Knox&apos;s Economic Influence
      </h2>
      <p className="text-gray-body mb-4">
        Fort Knox is the single largest economic engine in Hardin County, and its influence on the
        housing market cannot be overstated. The installation employs thousands of military
        personnel, civilian Department of Defense workers, and defense contractors. This workforce
        creates consistent demand for both rental and purchase housing throughout the area.
      </p>
      <p className="text-gray-body mb-4">
        Key military-driven market dynamics include the annual PCS cycle that peaks each summer,
        bringing hundreds of families seeking homes within a compressed timeline. BAH rates set a
        practical floor on what most military buyers can afford, which supports home prices in
        the $200,000-$280,000 range. Additionally, military families who buy during a three-year
        assignment and then PCS out often convert their homes to rentals, contributing to the
        investment property market.
      </p>
      <p className="text-gray-body mb-4">
        As long as Fort Knox remains an active military installation with a growing civilian mission,
        Elizabethtown&apos;s housing market will continue to benefit from a stable, recurring source
        of demand that most communities simply do not have.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Stay Ahead of the Market
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Market data is only useful when you know how to apply it.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            Compass and Key Group
          </Link>{" "}
          monitors Elizabethtown market conditions daily and can help you time your purchase or sale
          for the best possible outcome. As a veteran-owned agency, they bring firsthand understanding
          of the military buyer&apos;s perspective and the local market forces that drive prices.
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
