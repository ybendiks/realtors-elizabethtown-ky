import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buying a Home in Elizabethtown KY | Guide",
  description:
    "Complete guide to buying a home in Elizabethtown, KY. From search to close, including local tips on inspections, closing costs, and navigating the E-town market.",
  alternates: { canonical: "/guides/buying-home-elizabethtown/" },
};

export default function BuyingHomeGuide() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Guides", href: "/guides/buying-home-elizabethtown/" },
        { label: "Buying a Home" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "First-Time Buyer Guide", href: "/guides/first-time-homebuyer-elizabethtown/" },
          { label: "Home Appraisal Guide", href: "/guides/home-appraisal-guide/" },
          { label: "Best Time to Buy", href: "/guides/best-time-to-buy-elizabethtown/" },
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "VA Loans", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Selling Guide", href: "/guides/selling-home-elizabethtown/" },
        ],
        relatedTitle: "Buyer Resources",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Buying a Home in Elizabethtown, KY — From Search to Close
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Buying a home is a multi-step process, and understanding each phase before you begin
        prevents surprises and puts you in a stronger negotiating position. Elizabethtown&apos;s
        market has its own rhythm — influenced by military PCS cycles, local inventory patterns,
        and Kentucky-specific closing practices. This guide covers the full journey from initial
        search to getting the keys.
      </p>

      {/* Phase 1: Preparation */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Phase 1: Preparation
      </h2>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Get Your Finances in Order</h3>
      <p className="text-gray-body mb-4">
        Before you browse a single listing, take care of the financial groundwork. Check your
        credit score and address any issues. Calculate your comfortable monthly payment — not just
        what a lender says you can afford, but what fits your lifestyle. In Elizabethtown, where
        the median home price is approximately $250,000, monthly mortgage payments (including taxes
        and insurance) typically fall in the $1,500-$1,900 range depending on your down payment and
        interest rate.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Choose Your Loan Type</h3>
      <p className="text-gray-body mb-4">
        The Elizabethtown market accommodates all major loan types:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>VA loans:</strong> The most popular option for{" "}
          <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
            Fort Knox
          </Link>{" "}
          military families. Zero down, no PMI, competitive rates. See our detailed{" "}
          <Link
            href="/fort-knox/va-loans-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            VA loan guide
          </Link>
          .
        </li>
        <li>
          <strong>FHA loans:</strong> 3.5% down with a 580+ credit score. Good for buyers who
          do not have VA eligibility but want a low down payment option.
        </li>
        <li>
          <strong>Conventional loans:</strong> 3-20% down, no upfront mortgage insurance premium.
          Best rates available for 740+ credit scores.
        </li>
        <li>
          <strong>KHC-assisted loans:</strong> Kentucky Housing Corporation programs can provide
          down payment assistance for qualifying buyers. Worth exploring if you are a first-time
          buyer. Our{" "}
          <Link
            href="/guides/first-time-homebuyer-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            first-time buyer guide
          </Link>{" "}
          covers these in detail.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Get Pre-Approved</h3>
      <p className="text-gray-body mb-4">
        Contact a lender, provide your financial documentation (W-2s, pay stubs, bank statements,
        LES for military), and get a pre-approval letter. This process takes 1-2 weeks and costs
        nothing. In E-town&apos;s competitive market, a pre-approval letter is essential — sellers
        take pre-approved buyers seriously, and some listing agents will not schedule showings for
        buyers without one.
      </p>

      {/* Phase 2: The Search */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Phase 2: The Search
      </h2>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Work with a Local Agent</h3>
      <p className="text-gray-body mb-4">
        An agent who knows Elizabethtown&apos;s{" "}
        <Link
          href="/elizabethtown/neighborhoods/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          neighborhoods
        </Link>
        , school districts, and market dynamics is invaluable. They can identify listings that
        match your criteria, schedule showings efficiently, and provide insight into pricing and
        competition that online platforms cannot offer. In most cases, the seller pays the buyer
        agent&apos;s commission, so professional representation costs you nothing directly.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Define Your Priorities</h3>
      <p className="text-gray-body mb-4">
        Elizabethtown offers diverse housing options. Before you start touring, decide what matters
        most:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Commute:</strong> How close do you need to be to Fort Knox, I-65, or your
          workplace? Commute times vary from 10 to 30 minutes depending on the neighborhood.
        </li>
        <li>
          <strong>Schools:</strong> Elizabethtown Independent and Hardin County Schools serve
          different areas. Verify which district covers properties you are considering.
        </li>
        <li>
          <strong>New vs. existing:</strong> Would you prefer a brand-new home in a community like
          Foxwood, or a more established neighborhood with mature trees and larger lots?
        </li>
        <li>
          <strong>Investment potential:</strong> If you might convert the home to a rental when you
          move, consider{" "}
          <Link
            href="/real-estate-market/investment-properties/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            neighborhoods with strong rental demand
          </Link>
          .
        </li>
      </ul>

      {/* Phase 3: Making an Offer */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Phase 3: Making an Offer
      </h2>
      <p className="text-gray-body mb-4">
        When you find the right home, your agent will help you craft a competitive offer. In
        Elizabethtown, here is what to consider:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Offer price:</strong> Your agent will analyze comparable sales to determine a
          fair offer. In the current market, homes sell at 97-99% of list price. Starting
          significantly below asking risks losing the home to another buyer.
        </li>
        <li>
          <strong>Earnest money:</strong> A deposit (typically $1,000-$2,500 in E-town) that
          shows good faith. It is applied toward your down payment at closing.
        </li>
        <li>
          <strong>Contingencies:</strong> Standard contingencies include financing, inspection,
          and appraisal. These protect you as a buyer and are expected in this market.
        </li>
        <li>
          <strong>Closing timeline:</strong> Standard is 30-45 days. If the seller needs specific
          timing (common with PCS moves), matching their timeline can strengthen your offer.
        </li>
        <li>
          <strong>Seller concessions:</strong> You can request the seller contribute toward your
          closing costs (up to 3% for conventional, 4% for VA, 6% for FHA). This is common and
          often accepted in E-town.
        </li>
      </ul>

      {/* Phase 4: Under Contract */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Phase 4: Under Contract
      </h2>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Home Inspection</h3>
      <p className="text-gray-body mb-4">
        Always get a professional inspection, even in a competitive market. In Kentucky,
        inspectors should pay particular attention to:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Foundation and drainage.</strong> Central Kentucky&apos;s clay soil can cause
          foundation settling and basement moisture. Look for cracks, bowing walls, and water
          intrusion signs.
        </li>
        <li>
          <strong>HVAC systems.</strong> Kentucky&apos;s four seasons put heavy demands on heating
          and cooling. Verify the system&apos;s age, condition, and recent maintenance history.
        </li>
        <li>
          <strong>Roofing.</strong> Hail and wind storms are common in the E-town area. Check the
          roof&apos;s age and condition, and ask about any insurance claims.
        </li>
        <li>
          <strong>Termites and pests.</strong> Termite inspections are common in Kentucky real
          estate transactions. Many lenders (especially VA) require a clear termite inspection
          before closing.
        </li>
        <li>
          <strong>Radon.</strong> Kentucky has elevated radon levels in many areas. A radon test
          ($150-$200) is strongly recommended, and mitigation systems ($800-$1,500) are
          straightforward to install if levels are high.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Appraisal</h3>
      <p className="text-gray-body mb-4">
        Your lender will order an{" "}
        <Link
          href="/guides/home-appraisal-guide/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          appraisal
        </Link>{" "}
        to verify the home&apos;s market value. In Elizabethtown, appraisals typically support the
        contract price due to steady appreciation and good comparable sales data. VA appraisals
        include additional property condition requirements (Minimum Property Requirements) that
        must be met before closing.
      </p>

      {/* Phase 5: Closing */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Phase 5: Closing
      </h2>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Closing Costs in Kentucky</h3>
      <p className="text-gray-body mb-4">
        Buyer closing costs in Kentucky typically total <strong>2-4% of the purchase price</strong>.
        On a $250,000 home, expect $5,000-$10,000, which covers:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Lender origination fees and processing charges.</li>
        <li>Appraisal fee ($400-$600).</li>
        <li>Title search and title insurance ($800-$1,200).</li>
        <li>Prepaid property taxes and homeowners insurance (escrowed into closing).</li>
        <li>Recording fees and state transfer taxes.</li>
        <li>VA funding fee (for VA loans — can be rolled into the loan amount).</li>
      </ul>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Closing Day</h3>
      <p className="text-gray-body mb-4">
        Kentucky closings typically take place at a title company or attorney&apos;s office. You
        will review and sign the mortgage documents, deed, and various disclosures. Bring your
        government-issued ID and a cashier&apos;s check or wire transfer for your closing costs
        and down payment (if applicable). The entire appointment takes about an hour. At the end,
        you receive the keys and the home is yours.
      </p>

      <h3 className="text-xl font-bold text-navy mt-8 mb-3">After Closing</h3>
      <p className="text-gray-body mb-4">
        Transfer utilities into your name, update your address with the post office and military
        records (if applicable), and file your homestead exemption if you qualify. Set up a
        maintenance schedule for your new home and keep records of any improvements — they may
        reduce your tax liability when you sell.
      </p>

      <p className="text-gray-body mb-4">
        For seasonal timing advice that could save you money, check our guide on the{" "}
        <Link
          href="/guides/best-time-to-buy-elizabethtown/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          best time to buy in Elizabethtown
        </Link>
        .
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10">
        <h2 className="text-xl font-bold text-white mb-2">
          Let a Local Expert Guide Your Purchase
        </h2>
        <p className="text-gray-300 text-sm mb-4">
          Buying a home involves dozens of decisions, and having the right agent makes each one
          easier.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
          >
            Compass and Key Group
          </Link>{" "}
          is a veteran-owned team that has guided hundreds of buyers through the Elizabethtown
          market. From your first search to closing day, Austin Kutz and his team provide the
          local knowledge and hands-on support that make the process smooth and confident.
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
