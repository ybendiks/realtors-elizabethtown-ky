import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PCS to Fort Knox Guide 2026 | Moving Checklist",
  description:
    "Complete PCS to Fort Knox guide. Timeline, housing options, school enrollment, BAH rates, and step-by-step checklist for military families moving to Fort Knox, KY.",
  alternates: { canonical: "/fort-knox/pcs-guide/" },
};

const faqData = [
  {
    question: "How far in advance should I start house hunting for a PCS to Fort Knox?",
    answer:
      "Ideally, start researching housing 60-90 days before your report date. If you plan to buy off-post, contact a realtor as soon as you receive orders. VA loan pre-approval takes 1-2 weeks, and homes in the Elizabethtown area typically go under contract within 15-30 days of listing. For Knox Hills on-post housing, apply as early as possible — waitlists can run 30-90 days depending on the unit size.",
  },
  {
    question: "Can I buy a house near Fort Knox using a VA loan?",
    answer:
      "Yes. VA loans are the most common mortgage for military homebuyers in the Fort Knox area. They require zero down payment, have no private mortgage insurance (PMI), and offer competitive interest rates. The median home price in Elizabethtown is around $250,000, and BAH for most ranks with dependents will cover a full mortgage payment including taxes and insurance. You will need a Certificate of Eligibility (COE) from the VA to begin the process.",
  },
  {
    question: "Is it better to live on-post or off-post at Fort Knox?",
    answer:
      "It depends on your priorities. On-post Knox Hills housing offers convenience, zero commute, included maintenance, and a built-in military community. Off-post housing in Elizabethtown, Radcliff, or Vine Grove offers more space, the ability to build equity, and more freedom in choosing your home. If your tour is 3+ years and you plan to use a VA loan, buying off-post often makes strong financial sense. For shorter tours or families who prefer simplicity, on-post can be the right call.",
  },
  {
    question: "What schools are available for military children near Fort Knox?",
    answer:
      "Military families have three school system options. DoDEA (Department of Defense) schools are available on-post for families living in Knox Hills. Off-post, the Hardin County Schools district (28 schools, all Purple Star designated for military family support) serves most neighborhoods in Elizabethtown, Radcliff, and Vine Grove. Elizabethtown Independent Schools is a smaller district serving families within the E-town city limits. All three systems have experience with PCS transitions and military-connected students.",
  },
  {
    question: "How long does it take to get on-post housing at Fort Knox?",
    answer:
      "Knox Hills waitlists vary by unit size and season. Two-bedroom units may be available within 2-4 weeks, while three- and four-bedroom homes can have waitlists of 30-90 days, particularly during summer PCS season (May-August). Apply as soon as you receive orders by contacting Knox Hills at (502) 378-3708. Temporary housing options are available on post while you wait.",
  },
  {
    question: "What is the BAH rate for Fort Knox in 2026?",
    answer:
      "2026 BAH rates for Fort Knox increased 7.2% over 2025. For example, an E-5 with dependents receives $1,647 per month, an O-3 with dependents receives $2,421 per month, and an O-5 with dependents receives $2,943 per month. These rates cover the ZIP codes 40121, 40160, and 42701, which include Fort Knox, Radcliff, and Elizabethtown. In most cases, BAH fully covers a mortgage payment in the area.",
  },
  {
    question: "What should I do the first week after arriving at Fort Knox?",
    answer:
      "During your first week, report to your unit and complete in-processing. Visit the Housing Services Office if you need housing assistance. If you have children, enroll them in school — bring immunization records, previous school records, and a copy of your orders. Set up your DEERS enrollment and get your ID cards updated. Register vehicles on post. Open a local bank account if needed, and set up utilities for off-post housing. The on-post Welcome Center can help coordinate all first-week tasks.",
  },
];

export default function PCSGuide() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: "PCS Guide" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/" },
          { label: "Military Relocation Guide", href: "/fort-knox/military-relocation-guide/" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "E-town Schools", href: "/elizabethtown/schools/" },
        ],
        relatedTitle: "Fort Knox Resources",
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
        PCS to Fort Knox — Complete Guide for 2026
      </h1>

      <p className="text-lg text-gray-body mb-6">
        You got your orders. Fort Knox, Kentucky. Whether this is your first PCS or your fifth,
        every move comes with a mountain of logistics, decisions, and deadlines. This guide walks
        you through everything — from the day you receive orders to the day you settle into your
        new home near Fort Knox. It was written with the same straightforward approach you&apos;d
        want from a battle buddy who&apos;s been through it.
      </p>

      <div className="bg-gray-light border-l-4 border-gold rounded-r-lg p-5 mb-8">
        <h2 className="text-lg font-bold text-navy mb-3">Key Contacts</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Housing Services Office</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-3669</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Knox Hills Housing</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 378-3708</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Transportation Office (ITO)</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-5372</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Fort Knox Operator</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-1141</dd>
          </div>
        </dl>
      </div>

      {/* Timeline Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Your PCS Timeline: Orders to Moving Day</h2>
      <p className="text-gray-body mb-6">
        The following timeline assumes a typical PCS with 60-90 days of lead time. Adjust as
        needed — some of you will get 30 days of notice and have to compress everything. That&apos;s
        the military for you.
      </p>

      {/* 90 Days */}
      <h3 className="text-xl font-bold text-navy mt-8 mb-3">90 Days Out: Receive Orders</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Review your orders carefully.</strong> Confirm your report date, authorized
          dependents, and any special entitlements (EFMP, advance housing allowance, TLE
          authorization).
        </li>
        <li>
          <strong>Call the Fort Knox Housing Services Office at (502) 624-3669.</strong> This is your
          first call. They&apos;ll walk you through on-post and off-post options, provide current
          Knox Hills availability, and connect you with resources.
        </li>
        <li>
          <strong>Decide: on-post or off-post?</strong> Read our{" "}
          <Link href="/fort-knox/on-post-vs-off-post/" className="text-navy font-semibold hover:text-gold-dark">
            on-post vs off-post comparison
          </Link>{" "}
          to understand the tradeoffs. If you&apos;re leaning toward buying, get pre-approved for a{" "}
          <Link href="/fort-knox/va-loans-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
            VA loan
          </Link>{" "}
          now — it takes 1-2 weeks and costs nothing.
        </li>
        <li>
          <strong>If buying off-post, contact a realtor.</strong> Start your home search early,
          especially if you&apos;re moving during summer PCS season (May-August) when inventory
          moves fast. A local agent who understands military timelines is essential.
        </li>
        <li>
          <strong>Apply for Knox Hills if going on-post.</strong> Call (502) 378-3708. Waitlists
          can run 30-90 days, so don&apos;t wait.
        </li>
        <li>
          <strong>Review your{" "}
          <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
            BAH rate for Fort Knox
          </Link>.</strong>{" "}
          Know your monthly housing budget before you start looking. The 2026 rates increased 5-7%
          over 2025.
        </li>
      </ul>

      {/* 60 Days */}
      <h3 className="text-xl font-bold text-navy mt-8 mb-3">60 Days Out: Schedule Your Move</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Schedule your household goods (HHG) move.</strong> Log into DPS (Defense Personal
          Property System) at{" "}
          <span className="font-medium">move.mil</span> to schedule your government-funded move.
          Summer dates fill up fast — book as early as possible. See our{" "}
          <Link href="/fort-knox/military-relocation-guide/" className="text-navy font-semibold hover:text-gold-dark">
            military relocation guide
          </Link>{" "}
          for details on HHG vs PPM (DITY) moves.
        </li>
        <li>
          <strong>Research schools.</strong> If you have children, identify which school system
          you&apos;ll use:{" "}
          <Link href="/elizabethtown/schools/" className="text-navy font-semibold hover:text-gold-dark">
            Hardin County Schools
          </Link>{" "}
          (off-post, Purple Star designated), Elizabethtown Independent (off-post, within city
          limits), or DoDEA (on-post). Gather immunization records, previous school transcripts,
          and a copy of your orders.
        </li>
        <li>
          <strong>Arrange temporary housing if needed.</strong> Fort Knox has on-post temporary
          lodging (IHG hotel) and Knox Hills offers temporary units for waitlisted families. Off-post,
          there are extended-stay hotels along the I-65 corridor in Elizabethtown. You&apos;re
          authorized up to 10 days of TLE (Temporary Lodging Expense).
        </li>
        <li>
          <strong>Finalize your housing decision.</strong> If buying, this is when you should be
          under contract or close to it. If renting, secure a lease. If going on-post, confirm your
          Knox Hills status.
        </li>
      </ul>

      {/* 30 Days */}
      <h3 className="text-xl font-bold text-navy mt-8 mb-3">30 Days Out: Final Preparations</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Set up utilities for off-post housing.</strong> Electricity is typically through
          Nolin RECC or E.ON/LG&E depending on your location. Water and sewer vary by municipality.
          Internet providers include Spectrum and AT&T.
        </li>
        <li>
          <strong>Forward your mail.</strong> Update your address with USPS, your bank, insurance,
          and any subscription services.
        </li>
        <li>
          <strong>Prepare your vehicle registration.</strong> Kentucky requires vehicle registration
          within 30 days of establishing residency. Active duty military have some exemptions — check
          with your legal office.
        </li>
        <li>
          <strong>Gather important documents.</strong> Orders, marriage certificate, birth
          certificates, POA (if spouse needs to handle anything), vehicle titles, insurance cards,
          medical and dental records, and school records for children.
        </li>
        <li>
          <strong>Confirm your HHG pickup date.</strong> Verify the movers are coming when expected.
          Have a plan B if they don&apos;t.
        </li>
      </ul>

      {/* Moving Week */}
      <h3 className="text-xl font-bold text-navy mt-8 mb-3">Moving Week</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Clear your current housing.</strong> Complete your move-out inspection if on-post,
          or your lease walkthrough if renting.
        </li>
        <li>
          <strong>Travel to Fort Knox.</strong> Keep all travel receipts — fuel, lodging, meals.
          You&apos;re entitled to MALT (mileage allowance) and per diem for the travel days
          authorized on your orders.
        </li>
        <li>
          <strong>Check into temporary lodging if needed.</strong> The on-post hotel accepts
          reservations at government rates. Extended-stay options in E-town include hotels along
          the N Dixie Avenue corridor.
        </li>
      </ul>

      {/* First Week */}
      <h3 className="text-xl font-bold text-navy mt-8 mb-3">First Week at Fort Knox</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Report to your unit and in-process.</strong> Your gaining unit will provide an
          in-processing checklist. Follow it to the letter.
        </li>
        <li>
          <strong>Visit the Housing Services Office.</strong> Even if you&apos;ve already secured
          housing, check in so they can update your status.
        </li>
        <li>
          <strong>Enroll children in school.</strong> Visit the school with your child, orders,
          immunization records, and previous transcripts. Hardin County schools have dedicated
          military family liaisons to ease the transition.
        </li>
        <li>
          <strong>Update DEERS and get new ID cards.</strong> The Fort Knox ID card center handles
          this during in-processing.
        </li>
        <li>
          <strong>Register your vehicle on post.</strong> You&apos;ll need a valid driver&apos;s
          license, vehicle registration, and proof of insurance to get a post access decal.
        </li>
        <li>
          <strong>Set up banking.</strong> Several banks and credit unions have branches on post,
          including Armed Forces Bank and Fort Knox Federal Credit Union.
        </li>
      </ul>

      {/* Housing Decision Framework */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">On-Post vs Off-Post: The Quick Decision Framework</h2>
      <p className="text-gray-body mb-4">
        This is the biggest decision most PCSing families face. Here&apos;s a simplified framework:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-light rounded-lg p-5">
          <h3 className="font-bold text-navy mb-2">Consider On-Post If...</h3>
          <ul className="list-disc pl-5 text-sm text-gray-body space-y-1">
            <li>Your tour is under 2 years</li>
            <li>You want zero maintenance responsibility</li>
            <li>You prefer the built-in military community</li>
            <li>You want the shortest commute possible</li>
            <li>You&apos;re on a tight timeline and need housing immediately</li>
          </ul>
        </div>
        <div className="bg-gray-light rounded-lg p-5">
          <h3 className="font-bold text-navy mb-2">Consider Off-Post If...</h3>
          <ul className="list-disc pl-5 text-sm text-gray-body space-y-1">
            <li>Your tour is 3+ years</li>
            <li>You want to build equity with a VA loan</li>
            <li>You want more space and neighborhood choice</li>
            <li>Your BAH covers a full mortgage (it usually does here)</li>
            <li>You value school district flexibility</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-body mb-4">
        Read the full comparison in our{" "}
        <Link href="/fort-knox/on-post-vs-off-post/" className="text-navy font-semibold hover:text-gold-dark">
          on-post vs off-post guide
        </Link>. If you&apos;re leaning toward buying, our{" "}
        <Link href="/fort-knox/off-post-housing/" className="text-navy font-semibold hover:text-gold-dark">
          off-post housing guide
        </Link>{" "}
        compares Elizabethtown, Radcliff, Vine Grove, and Brandenburg side by side.
      </p>

      {/* School Enrollment */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">School Enrollment Timeline</h2>
      <p className="text-gray-body mb-4">
        If you have school-age children, plan for enrollment as part of your PCS — not an afterthought.
        Here&apos;s how it works:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>60+ days out:</strong> Identify which school district your housing falls in. Use
          our{" "}
          <Link href="/elizabethtown/neighborhoods/" className="text-navy font-semibold hover:text-gold-dark">
            neighborhood guides
          </Link>{" "}
          to see school assignments by area.
        </li>
        <li>
          <strong>30 days out:</strong> Contact the school directly to ask about enrollment
          procedures, required documents, and class availability. Request to be connected with the
          school&apos;s military family liaison.
        </li>
        <li>
          <strong>First week:</strong> Visit the school in person with your child. Bring orders,
          immunization records, previous school transcripts (or a contact for the sending school),
          birth certificate, and proof of address. Kentucky participates in the Interstate Compact
          on Educational Opportunity for Military Children, which protects your child&apos;s academic
          placement during PCS transitions.
        </li>
      </ul>

      {/* Temporary Housing */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Temporary Housing Options</h2>
      <p className="text-gray-body mb-4">
        Not everyone lands in permanent housing on day one. Here are your temporary options:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>On-post hotel:</strong> IHG Army Hotels on Fort Knox offers rooms at government
          rates. Book early during PCS season.
        </li>
        <li>
          <strong>Knox Hills temporary housing:</strong> If you&apos;re waitlisted for on-post
          housing, Knox Hills may have temporary furnished units available.
        </li>
        <li>
          <strong>Off-post extended stay:</strong> Elizabethtown has several extended-stay hotels
          along N Dixie Avenue and the I-65 corridor, including options with kitchenettes.
        </li>
        <li>
          <strong>TLE entitlement:</strong> You&apos;re authorized up to 10 days of Temporary
          Lodging Expense per your orders, which reimburses a portion of temporary lodging costs.
        </li>
      </ul>

      {/* FAQ Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6 mb-8">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-border pb-4">
            <h3 className="font-bold text-navy mb-2">{faq.question}</h3>
            <p className="text-gray-body text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Need a Realtor Who Understands PCS Moves?</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Austin Kutz at{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          is a U.S. Marine Corps veteran who has been through military relocations himself. He
          specializes in helping PCSing families find homes in the Fort Knox area — whether
          you&apos;re buying your first home with a VA loan, searching remotely from your current
          duty station, or need to close on a tight timeline. Austin knows the neighborhoods, the
          schools, and the BAH math inside and out.
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
