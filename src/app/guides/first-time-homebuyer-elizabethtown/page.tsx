import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "First-Time Homebuyer Guide Elizabethtown KY",
  description:
    "First-time homebuyer guide for Elizabethtown, KY. Step-by-step process, down payment options, VA and FHA loans, KHC programs, and E-town tips for new buyers.",
  alternates: { canonical: "/guides/first-time-homebuyer-elizabethtown/" },
};

const faqData = [
  {
    question: "How much do I need for a down payment in Elizabethtown, KY?",
    answer:
      "It depends on your loan type. VA loans require zero down payment and are available to eligible service members and veterans. FHA loans require 3.5% down (about $8,750 on a $250,000 home). Conventional loans start at 3-5% down. Kentucky Housing Corporation (KHC) offers down payment assistance grants and loans that can cover some or all of the down payment for qualifying buyers.",
  },
  {
    question: "What credit score do I need to buy a home in Elizabethtown?",
    answer:
      "Most lenders require a minimum credit score of 620 for conventional loans and 580 for FHA loans (with 3.5% down). VA loans have no VA-mandated minimum score, though most lenders set a floor around 620. If your score is below these thresholds, some lenders offer manual underwriting or credit repair programs. A higher score — 700 or above — will qualify you for the best interest rates.",
  },
  {
    question: "How long does it take to buy a house in Elizabethtown?",
    answer:
      "From the time you start looking to closing day, the typical timeline is 60-90 days. Pre-approval takes 1-2 weeks. Active house hunting may take 2-4 weeks depending on inventory. Once you are under contract, closing takes 30-45 days for most loan types. VA loans may take slightly longer due to the VA appraisal process, but experienced local lenders keep timelines on track.",
  },
  {
    question: "What are closing costs in Kentucky?",
    answer:
      "Buyers in Kentucky typically pay 2-4% of the purchase price in closing costs. On a $250,000 home, that is approximately $5,000-$10,000. Closing costs include lender fees, title insurance, appraisal fees, prepaid taxes and insurance, and recording fees. In the Elizabethtown market, it is common to negotiate seller concessions that cover part or all of the buyer's closing costs.",
  },
  {
    question: "Should I buy or rent in Elizabethtown?",
    answer:
      "If you plan to stay in the area for at least 2-3 years, buying generally makes more financial sense than renting in Elizabethtown. The median mortgage payment (including taxes and insurance) on a $250,000 home is comparable to or lower than renting a similar property. If you are a military family on a short assignment (under 2 years), renting may be the better option to avoid transaction costs.",
  },
  {
    question: "Do I need a real estate agent to buy a home?",
    answer:
      "You are not legally required to use an agent, but it is strongly recommended, especially for first-time buyers. A buyer's agent represents your interests, helps you navigate negotiations, coordinates inspections and appraisals, and guides you through closing. In most cases, the seller pays the buyer's agent commission, so buyer representation costs you nothing directly.",
  },
];

export default function FirstTimeHomebuyerGuide() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Guides", href: "/guides/buying-home-elizabethtown/" },
        { label: "First-Time Homebuyer" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
          { label: "Home Appraisal Guide", href: "/guides/home-appraisal-guide/" },
          { label: "Best Time to Buy", href: "/guides/best-time-to-buy-elizabethtown/" },
          { label: "Market Overview", href: "/real-estate-market/" },
          { label: "VA Loans", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
        ],
        relatedTitle: "Buyer Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        First-Time Homebuyer Guide for Elizabethtown, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Buying your first home is one of the biggest financial decisions you will make, and
        Elizabethtown is one of the best markets in Kentucky to do it. With a median home price
        around $250,000, low property taxes, and multiple down payment assistance programs
        available, homeownership is genuinely achievable here — even if you think you are not
        ready. This guide walks you through every step, from getting pre-approved to picking up
        the keys.
      </p>

      {/* Step 1: Assess Your Finances */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Step 1: Assess Your Financial Readiness
      </h2>
      <p className="text-gray-body mb-4">
        Before you start browsing listings, take an honest look at your financial picture:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Credit score.</strong> Check your score through your bank or a free service.
          Most loan programs require 580-620 as a minimum. Higher scores (700+) unlock better
          interest rates.
        </li>
        <li>
          <strong>Debt-to-income ratio (DTI).</strong> Lenders want your total monthly debt
          payments (including the future mortgage) to stay below 43-45% of your gross monthly
          income. Calculate your current debts and estimate where a mortgage payment would put you.
        </li>
        <li>
          <strong>Savings.</strong> You will need money for a down payment (potentially zero with
          VA), closing costs (2-4% of purchase price), and a cash reserve for emergencies. Even
          with low-down-payment programs, having $3,000-$5,000 saved gives you a cushion.
        </li>
        <li>
          <strong>Employment stability.</strong> Lenders look for at least two years of steady
          employment or income history. Military service counts, and active-duty LES
          documentation satisfies lender requirements.
        </li>
      </ul>

      {/* Step 2: Get Pre-Approved */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Step 2: Get Pre-Approved for a Mortgage
      </h2>
      <p className="text-gray-body mb-4">
        Pre-approval is not optional in today&apos;s market — it is essential. A pre-approval
        letter tells sellers you are a serious, qualified buyer. Here is how the process works:
      </p>
      <ol className="list-decimal pl-6 text-gray-body mb-4 space-y-2">
        <li>
          Contact a mortgage lender (bank, credit union, or mortgage company). In the
          Elizabethtown area, several lenders specialize in VA and FHA loans.
        </li>
        <li>
          Provide documentation: pay stubs, W-2s or tax returns, bank statements, and ID. For
          military buyers, your LES and orders are key documents.
        </li>
        <li>
          The lender pulls your credit, reviews your income and debts, and issues a pre-approval
          letter stating the loan amount you qualify for.
        </li>
        <li>
          Pre-approval is free and typically takes 1-2 weeks. It is valid for 60-90 days.
        </li>
      </ol>
      <p className="text-gray-body mb-4">
        Get pre-approved <strong>before</strong> you start touring homes. In Elizabethtown&apos;s
        competitive market, sellers and listing agents take pre-approved buyers far more seriously
        than those still shopping without financing in place.
      </p>

      {/* Step 3: Down Payment Options */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Step 3: Understand Your Down Payment Options
      </h2>
      <p className="text-gray-body mb-4">
        The down payment is often the biggest hurdle for first-time buyers. The good news: you
        likely have more options than you realize.
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>VA loan (0% down).</strong> Available to active-duty service members, veterans,
          and eligible surviving spouses. No down payment, no PMI, competitive rates. If you are
          stationed at{" "}
          <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
            Fort Knox
          </Link>{" "}
          or are a veteran, this is almost always the best option. See our full{" "}
          <Link
            href="/fort-knox/va-loans-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            VA loan guide
          </Link>
          .
        </li>
        <li>
          <strong>FHA loan (3.5% down).</strong> Popular with first-time buyers who do not have
          VA eligibility. More flexible credit requirements (580+ score). On a $250,000 home,
          3.5% down is approximately $8,750. FHA loans require mortgage insurance (MIP), which
          adds to the monthly payment.
        </li>
        <li>
          <strong>Conventional loan (3-5% down).</strong> Some conventional programs allow as
          little as 3% down for first-time buyers. Conventional loans avoid FHA&apos;s upfront
          mortgage insurance premium but require PMI until you reach 20% equity.
        </li>
        <li>
          <strong>Kentucky Housing Corporation (KHC) programs.</strong> KHC offers several
          programs specifically for Kentucky homebuyers, including down payment assistance (DPA)
          in the form of forgivable loans or grants. KHC&apos;s programs can be combined with
          FHA, VA, or conventional loans. Income and purchase price limits apply, and most
          first-time buyers in the Elizabethtown price range qualify.
        </li>
        <li>
          <strong>USDA loan (0% down).</strong> Available for properties in USDA-eligible rural
          areas. Some areas surrounding Elizabethtown qualify. Income limits apply.
        </li>
      </ul>

      {/* Step 4: Find a Home */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Step 4: Find Your Home
      </h2>
      <p className="text-gray-body mb-4">
        With pre-approval in hand, it is time to search. In Elizabethtown, first-time buyers
        typically focus on the $180,000-$260,000 range, which includes:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          Three-bedroom, two-bath homes in established{" "}
          <Link
            href="/elizabethtown/neighborhoods/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            neighborhoods
          </Link>{" "}
          like Helmwood, Valley Creek, and Pear Orchard.
        </li>
        <li>
          Newer townhomes and starter homes in developments along Ring Road and south of town.
        </li>
        <li>
          Entry-level{" "}
          <Link
            href="/real-estate-market/new-construction/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            new construction
          </Link>{" "}
          in communities like Foxwood and Cowley Farms (higher end of the range).
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        Work with a local real estate agent who knows the inventory, school districts, and
        neighborhood dynamics. A good agent will help you avoid overpaying and identify properties
        that match both your needs and your budget.
      </p>

      {/* Step 5: Make an Offer and Close */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Step 5: Make an Offer and Close
      </h2>
      <p className="text-gray-body mb-4">
        Once you find the right home, your agent will help you submit an offer. In Elizabethtown,
        the process typically looks like this:
      </p>
      <ol className="list-decimal pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Submit your offer</strong> with your pre-approval letter. Your agent will advise
          on pricing strategy based on comparable sales and current competition.
        </li>
        <li>
          <strong>Negotiate terms.</strong> In E-town, most transactions involve some negotiation.
          You can request seller concessions toward closing costs, ask for repairs after
          inspection, or negotiate on price.
        </li>
        <li>
          <strong>Home inspection.</strong> Always get a professional inspection, even on newer
          homes. In Kentucky, pay attention to foundation drainage (clay soil is common), HVAC
          condition, and the roof. Inspections cost $350-$500 and are worth every dollar.
        </li>
        <li>
          <strong>Appraisal.</strong> Your lender orders an appraisal to verify the home&apos;s
          value. In Elizabethtown, appraisals generally come in at or above the contract price
          due to steady appreciation and ample comparable sales data. See our{" "}
          <Link
            href="/guides/home-appraisal-guide/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            appraisal guide
          </Link>{" "}
          for details.
        </li>
        <li>
          <strong>Final underwriting and clear to close.</strong> The lender completes their
          review and issues a clear-to-close. You will receive a Closing Disclosure at least
          three days before closing.
        </li>
        <li>
          <strong>Closing day.</strong> Sign your documents at a local title company, pay any
          remaining closing costs, and receive your keys. The entire closing appointment takes
          about an hour.
        </li>
      </ol>

      {/* E-town Specific Tips */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Elizabethtown-Specific Tips for First-Time Buyers
      </h2>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Consider school districts early.</strong>{" "}
          <Link
            href="/elizabethtown/schools/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            Elizabethtown Independent Schools
          </Link>{" "}
          and Hardin County Schools serve different areas. If schools matter to you, confirm which
          district a property falls in before making an offer.
        </li>
        <li>
          <strong>Watch for PCS season.</strong> May through August brings a surge of military
          buyers and sellers. Inventory increases, but so does competition. The{" "}
          <Link
            href="/guides/best-time-to-buy-elizabethtown/"
            className="text-navy font-semibold hover:text-gold-dark"
          >
            best time to buy
          </Link>{" "}
          may be spring or fall, just before or after the peak.
        </li>
        <li>
          <strong>Budget for Kentucky-specific costs.</strong> Property taxes are low
          (approximately $2,675/year on a median-priced home), but factor in homeowners insurance
          ($1,200-$1,800/year) and potential HOA fees in newer subdivisions ($200-$600/year).
        </li>
        <li>
          <strong>Ask about seller concessions.</strong> In the current market, many sellers are
          willing to contribute 2-3% toward buyer closing costs. This can save you thousands at
          the closing table.
        </li>
      </ul>

      {/* FAQ Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-bold text-navy mb-2">{faq.question}</h3>
          <p className="text-gray-body">{faq.answer}</p>
        </div>
      ))}

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10">
        <h2 className="text-xl font-bold text-white mb-2">
          Start Your Homebuying Journey
        </h2>
        <p className="text-gray-300 text-sm mb-4">
          First-time buyers deserve an agent who will take the time to explain every step.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
          >
            Compass and Key Group
          </Link>{" "}
          is a veteran-owned team that specializes in guiding first-time buyers through the
          Elizabethtown market. From pre-approval to closing, Austin Kutz and his team provide
          patient, knowledgeable support and ensure you understand every decision along the way.
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
