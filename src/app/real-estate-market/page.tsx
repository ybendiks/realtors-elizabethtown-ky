import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";
import {
  MEDIAN_SALE_PRICE,
  MEDIAN_SALE_PRICE_YOY,
  DAYS_ON_MARKET,
  PRICE_PER_SQFT,
  SALE_TO_LIST,
  HOMES_SOLD_MONTHLY,
  LAST_DATA_REVIEW,
  usd,
} from "@/data/market-facts";

export const metadata: Metadata = {
  title: "Elizabethtown KY Real Estate Market Overview",
  description:
    "Current Elizabethtown, KY real estate market data. Median home prices, inventory levels, days on market, and year-over-year trends for Hardin County buyers and sellers.",
  alternates: { canonical: "/real-estate-market/" },
};

export default function RealEstateMarket() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Real Estate Market" }]}
      sidebar={{
        relatedPages: [
          { label: "Market Trends", href: "/real-estate-market/trends/" },
          { label: "Investment Properties", href: "/real-estate-market/investment-properties/" },
          { label: "New Construction", href: "/real-estate-market/new-construction/" },
          { label: "Foreclosures", href: "/real-estate-market/foreclosures/" },
          { label: "Rental Market", href: "/real-estate-market/rental-market/" },
          { label: "Property Taxes", href: "/real-estate-market/property-taxes/" },
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
          { label: "Selling Guide", href: "/guides/selling-home-elizabethtown/" },
          { label: "First-Time Buyer Guide", href: "/guides/first-time-homebuyer-elizabethtown/" },
        ],
        relatedTitle: "Market Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Elizabethtown, KY Real Estate Market Overview
      </h1>
      <p className="text-sm text-gray-medium mb-6">
        Market data from Redfin for the three months ending {MEDIAN_SALE_PRICE.asOf}. Page last
        reviewed {LAST_DATA_REVIEW}.
      </p>

      <p className="text-lg text-gray-body mb-6">
        Elizabethtown&apos;s real estate market continues to reward both buyers and sellers with strong
        fundamentals. Sitting at the crossroads of I-65 and the Western Kentucky Parkway, E-town draws
        demand from military families stationed at{" "}
        <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
          Fort Knox
        </Link>
        , Louisville commuters seeking affordable homeownership, and long-time Hardin County residents
        moving up or downsizing. Understanding the current numbers is the first step toward making a
        smart real estate decision in this market.
      </p>

      {/* Current Market Snapshot */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Current Market Snapshot</h2>
      <p className="text-gray-body mb-4">
        As of early 2026, the Elizabethtown and Hardin County housing market remains firmly tilted
        toward sellers. Here are the key indicators:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Median sale price:</strong> <strong>{usd(MEDIAN_SALE_PRICE.value)}</strong> over the
          three months ending {MEDIAN_SALE_PRICE.asOf}, up {MEDIAN_SALE_PRICE_YOY.value}% year over year.
          The median sale price per square foot is {usd(PRICE_PER_SQFT.value)}, up 12.6% over the same
          period &mdash; square-foot pricing is climbing faster than headline prices, which means buyers
          are paying more for less space than they were a year ago.
        </li>
        <li>
          <strong>Days on market (DOM):</strong> Homes in Elizabethtown sell after an average of{" "}
          <strong>{DAYS_ON_MARKET.value} days</strong>, against 62 days a year ago. Sellers are getting{" "}
          {SALE_TO_LIST.value}% of list price, and {HOMES_SOLD_MONTHLY.value} homes changed hands in the
          most recent month reported. Well-priced homes in desirable{" "}
          <Link
            href="/elizabethtown/neighborhoods/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            neighborhoods
          </Link>{" "}
          often receive offers within the first two weeks, while overpriced or poorly marketed listings
          sit longer and require price reductions.
        </li>
        <li>
          <strong>Active inventory:</strong> Low. The Elizabethtown market consistently has fewer
          available homes than buyer demand warrants. At current pace, the area operates with roughly
          2-3 months of housing supply, compared to the 5-6 months that would indicate a balanced
          market.
        </li>
        <li>
          <strong>Sale-to-list ratio:</strong> Homes are selling at approximately 97-99% of their
          asking price. Extreme overbidding is uncommon, but significant discounts are equally rare
          for well-maintained, correctly priced properties.
        </li>
      </ul>

      {/* Buyer's vs Seller's Market */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Is Elizabethtown a Buyer&apos;s or Seller&apos;s Market?
      </h2>
      <p className="text-gray-body mb-4">
        By every standard metric, Elizabethtown is currently a <strong>seller&apos;s market</strong>.
        Low inventory, sustained demand from military relocations and local population growth, and
        steady appreciation all favor homeowners looking to sell. Listings that are priced correctly,
        staged well, and marketed through a knowledgeable agent sell quickly and at strong prices.
      </p>
      <p className="text-gray-body mb-4">
        That said, this is not the frenzied environment seen in some coastal cities during 2021-2022.
        Buyers in Elizabethtown still have room to negotiate, can include reasonable contingencies
        (inspection, appraisal, financing), and are not routinely waiving protections to win offers.
        The market is competitive without being reckless, which is healthy for both sides of the
        transaction.
      </p>
      <p className="text-gray-body mb-4">
        For buyers, the key to success in this market is preparation: get{" "}
        <Link
          href="/guides/first-time-homebuyer-elizabethtown/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          pre-approved for financing
        </Link>{" "}
        before you start touring homes, understand your budget (especially if you are working with{" "}
        <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
          BAH
        </Link>
        ), and be ready to make a clean offer when the right property appears.
      </p>

      {/* Year-Over-Year Trends */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Year-Over-Year Trends</h2>
      <p className="text-gray-body mb-4">
        Elizabethtown has experienced steady, sustainable appreciation over the past several years.
        Unlike markets that spiked 15-20% in a single year and then corrected, E-town has posted
        consistent <strong>3-5% annual gains</strong>, reflecting genuine demand rather than
        speculation. This pattern benefits homeowners building equity and protects buyers from
        purchasing at an unsustainable peak.
      </p>
      <p className="text-gray-body mb-4">
        The trajectory tells the story: median prices have climbed from roughly $200,000 in 2021 to
        approximately $250,000 in 2026. That represents a cumulative gain of about 25% over five
        years, tracking closely with national appreciation trends while maintaining the area&apos;s
        affordability advantage. For a deeper look at these numbers,{" "}
        <Link
          href="/real-estate-market/trends/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          see our full market trends analysis
        </Link>
        .
      </p>

      {/* What's Driving the Market */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        What&apos;s Driving the Elizabethtown Market
      </h2>
      <p className="text-gray-body mb-4">
        Several factors combine to keep demand strong in Hardin County:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Fort Knox and military relocations.</strong> As home to U.S. Army Human Resources
          Command and the Army Cadet Command, Fort Knox generates a constant flow of PCS moves into
          the area. Many military families choose to buy off-post using{" "}
          <Link
            href="/fort-knox/va-loans-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            VA loans
          </Link>
          , and their BAH often covers a full mortgage payment on a median-priced home.
        </li>
        <li>
          <strong>Louisville commuter demand.</strong> With Louisville just 45 minutes north on I-65,
          an increasing number of workers are choosing to live in E-town where their dollar goes
          significantly further. Remote and hybrid work arrangements have accelerated this trend.
        </li>
        <li>
          <strong>New construction activity.</strong> Builders like Ball Homes are developing new
          subdivisions such as{" "}
          <Link
            href="/real-estate-market/new-construction/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            Foxwood and Cowley Farms
          </Link>
          , adding inventory but also attracting buyers from outside the area who are drawn by
          modern homes at Kentucky prices.
        </li>
        <li>
          <strong>Limited land and supply constraints.</strong> While Hardin County has developable
          land, the pace of new construction has not kept up with demand. This supply-demand
          imbalance keeps prices firm and inventory tight.
        </li>
      </ul>

      {/* Market Segments */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Market Segments at a Glance</h2>
      <p className="text-gray-body mb-4">
        Different price ranges behave differently. The {DAYS_ON_MARKET.value}-day citywide average
        is the benchmark each segment moves around &mdash; the figures below describe relative pace,
        not separately measured averages.
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Under $200,000:</strong> The most competitive segment. Starter homes here move
          considerably faster than the citywide average, inventory is tight, and multiple-offer
          situations are common.
        </li>
        <li>
          <strong>$200,000 - $300,000:</strong> Now below the {usd(MEDIAN_SALE_PRICE.value)} median,
          this band has shifted from the middle of the market toward its affordable end. It still
          holds most three- and four-bedroom family homes and is where military buyers concentrate.
        </li>
        <li>
          <strong>$300,000 - $450,000:</strong> The band containing the current median, covering
          move-up and new-construction buyers. Expect pace near the citywide average and negotiation
          on price and terms.
        </li>
        <li>
          <strong>Above $450,000:</strong> The luxury tier for Elizabethtown, often involving
          acreage, custom builds, or premium locations near Freeman Lake. This is where inventory
          accumulates &mdash; marketing and patience are essential.
        </li>
      </ul>

      {/* Explore More */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Explore the Elizabethtown Market</h2>
      <p className="text-gray-body mb-4">
        Dive deeper into specific aspects of the local real estate market:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Link
          href="/real-estate-market/trends/"
          className="block p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-sm transition-all"
        >
          <span className="font-bold text-navy">Market Trends</span>
          <span className="block text-sm text-gray-body mt-1">
            Price history, inventory data, and where the market is headed.
          </span>
        </Link>
        <Link
          href="/real-estate-market/investment-properties/"
          className="block p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-sm transition-all"
        >
          <span className="font-bold text-navy">Investment Properties</span>
          <span className="block text-sm text-gray-body mt-1">
            Rental yields, best neighborhoods, and military tenant demand.
          </span>
        </Link>
        <Link
          href="/real-estate-market/new-construction/"
          className="block p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-sm transition-all"
        >
          <span className="font-bold text-navy">New Construction</span>
          <span className="block text-sm text-gray-body mt-1">
            Active builders, new subdivisions, and the build process.
          </span>
        </Link>
        <Link
          href="/real-estate-market/rental-market/"
          className="block p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-sm transition-all"
        >
          <span className="font-bold text-navy">Rental Market</span>
          <span className="block text-sm text-gray-body mt-1">
            Average rents, popular areas, and tenant demographics.
          </span>
        </Link>
        <Link
          href="/real-estate-market/property-taxes/"
          className="block p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-sm transition-all"
        >
          <span className="font-bold text-navy">Property Taxes</span>
          <span className="block text-sm text-gray-body mt-1">
            Tax rates, assessments, homestead exemptions, and comparisons.
          </span>
        </Link>
        <Link
          href="/real-estate-market/foreclosures/"
          className="block p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-sm transition-all"
        >
          <span className="font-bold text-navy">Foreclosures</span>
          <span className="block text-sm text-gray-body mt-1">
            How to find foreclosures in Hardin County and what to expect.
          </span>
        </Link>
      </div>
      <p className="text-gray-body mb-4">
        If you are preparing to buy or sell, these guides walk through the process step by step:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-6 space-y-2">
        <li>
          <Link
            href="/guides/buying-home-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            Buying a Home in Elizabethtown
          </Link>
        </li>
        <li>
          <Link
            href="/guides/selling-home-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            Selling a Home in Elizabethtown
          </Link>
        </li>
        <li>
          <Link
            href="/guides/first-time-homebuyer-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            First-Time Homebuyer Guide
          </Link>
        </li>
        <li>
          <Link
            href="/guides/home-appraisal-guide/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            Home Appraisal Guide
          </Link>
        </li>
        <li>
          <Link
            href="/guides/best-time-to-buy-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            Best Time to Buy in Elizabethtown
          </Link>
        </li>
      </ul>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Get Expert Market Guidance
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Numbers tell part of the story, but local expertise fills in the rest.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
            style={{ color: "#D4A843" }}
          >
            Compass and Key Group
          </Link>{" "}
          is a veteran-owned real estate team that tracks the Elizabethtown market daily. Whether you
          are buying your first home, selling a property, or evaluating an investment opportunity,
          Austin Kutz and his team can provide the current data and local insight you need to make a
          confident decision.
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
