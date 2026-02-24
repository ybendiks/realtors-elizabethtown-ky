import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Military Relocation Guide | Fort Knox, KY",
  description:
    "Military relocation guide for Fort Knox. HHG vs DITY moves, essential resources, phone numbers, and what to do when you arrive at Fort Knox, KY.",
  alternates: { canonical: "/fort-knox/military-relocation-guide/" },
};

export default function MilitaryRelocationGuide() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: "Military Relocation Guide" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "PCS to Fort Knox Guide", href: "/fort-knox/pcs-guide/" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
        ],
        relatedTitle: "Fort Knox Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Military Relocation Guide for Fort Knox, KY",
          description:
            "Essential guide to military relocation logistics for service members PCSing to Fort Knox, Kentucky. Covers HHG moves, PPM moves, resources, and arrival procedures.",
          url: `${SITE_URL}/fort-knox/military-relocation-guide/`,
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Military Relocation Guide — Moving to Fort Knox, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Moving your family across the country (or across the world) is one of the most stressful
        parts of military life. This guide covers the logistics side of relocating to Fort Knox —
        how to move your household goods, which resources are available to you, and what to do
        during your first days on the ground. For the housing-specific side of the move, see our{" "}
        <Link href="/fort-knox/pcs-guide/" className="text-navy font-semibold hover:text-gold-dark">
          PCS to Fort Knox guide
        </Link>.
      </p>

      {/* Essential Phone Numbers */}
      <div className="bg-gray-light border-l-4 border-gold rounded-r-lg p-5 mb-8">
        <h2 className="text-lg font-bold text-navy mb-3">Essential Phone Numbers</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Fort Knox Operator</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-1141</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Transportation Office (ITO)</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-5372</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Housing Services Office</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-3669</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Knox Hills Housing</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 378-3708</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Ireland Army Health Clinic</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-9333</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Military OneSource</dt>
            <dd className="text-sm text-gray-body font-medium">1-800-342-9647</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">ACS (Army Community Service)</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-2709</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">School Liaison Officer</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 624-2883</dd>
          </div>
        </dl>
      </div>

      {/* Resources Section */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Your Relocation Resources</h2>
      <p className="text-gray-body mb-4">
        The military provides a suite of resources to help with every PCS move. Knowing what is
        available — and using it early — makes the difference between a chaotic move and a smooth
        one.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Military OneSource</h3>
      <p className="text-gray-body mb-4">
        Military OneSource (1-800-342-9647) is your one-stop resource for relocation assistance.
        They offer free relocation planning tools, counseling, financial guidance, and can connect
        you with local services at your gaining installation. Their website includes a &quot;Plan My
        Move&quot; tool that generates a personalized PCS checklist based on your specific situation
        — family size, pets, overseas vs CONUS, etc. Use it. It saves time and prevents you from
        missing critical steps.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Fort Knox Transportation Office (ITO)</h3>
      <p className="text-gray-body mb-4">
        The Installation Transportation Office at (502) 624-5372 handles all inbound and outbound
        household goods shipments. Contact them to schedule your HHG delivery, file claims for
        damaged items, and get answers about weight allowances. They are your point of contact for
        any issues with the moving company.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Army Community Service (ACS)</h3>
      <p className="text-gray-body mb-4">
        ACS at (502) 624-2709 provides relocation readiness services, including welcome packets,
        area orientation, lending closet items (temporary household goods while you wait for your
        HHG), and connections to spouse employment programs. They also host newcomer orientations
        that walk you through everything Fort Knox has to offer.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Housing Services Office</h3>
      <p className="text-gray-body mb-4">
        The Housing Services Office at (502) 624-3669 is a mandatory stop for families making
        housing decisions. They can provide current{" "}
        <Link href="/fort-knox/knox-hills-housing/" className="text-navy font-semibold hover:text-gold-dark">
          Knox Hills availability
        </Link>,
        off-post housing referrals, and a list of landlords and property managers who work with
        military tenants. They also provide tenant rights information for Kentucky, which is
        important if you are renting off-post.
      </p>

      {/* HHG vs PPM */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">HHG vs PPM/DITY Moves</h2>
      <p className="text-gray-body mb-4">
        You have two primary options for moving your household goods to Fort Knox. Understanding
        the tradeoffs helps you decide which works best for your situation.
      </p>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Household Goods (HHG) Move — Government-Arranged</h3>
      <p className="text-gray-body mb-4">
        In an HHG move, the government arranges and pays for a commercial moving company to pack,
        transport, and deliver your belongings. This is the most common option and the easiest in
        terms of effort. Here is what to expect:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Scheduling:</strong> Book through the Defense Personal Property System (DPS) at
          move.mil. Do this as early as possible — summer dates fill up fast, and a delayed HHG
          pickup can cascade into problems at the other end.
        </li>
        <li>
          <strong>Packing:</strong> The movers pack everything. You do not need to do anything
          except be present on packing day and make sure they have access to all rooms.
        </li>
        <li>
          <strong>Weight allowance:</strong> Your authorized weight depends on rank and whether you
          have dependents. An E-5 with dependents is authorized 9,000 lbs; an O-3 with dependents
          gets 13,500 lbs. Exceeding your weight allowance means paying out of pocket for the
          overage.
        </li>
        <li>
          <strong>Delivery:</strong> Transit time to Fort Knox varies by origin — typically 1-3
          weeks from CONUS locations. The movers deliver to your new home and unpack if requested.
        </li>
        <li>
          <strong>Claims:</strong> If anything is damaged or missing, file a claim through DPS
          within 75 days of delivery. Document everything on delivery day — photograph damaged
          items before the movers leave.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Personally Procured Move (PPM / DITY Move)</h3>
      <p className="text-gray-body mb-4">
        In a PPM (formerly called DITY — Do It Yourself), you move your own household goods and the
        government reimburses you based on what an HHG move would have cost. You keep the difference
        between the reimbursement and your actual expenses, which can be significant — often
        $2,000-$5,000+ depending on the distance and weight.
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>How it works:</strong> Rent a truck (U-Haul, Penske), load your own belongings,
          drive to Fort Knox, and weigh the truck at certified scales before and after. Submit your
          weight tickets and receipts through DPS for reimbursement.
        </li>
        <li>
          <strong>Financial upside:</strong> The government pays you 100% of what the HHG move
          would have cost. If you can move for less — renting a truck, enlisting friends, being
          efficient — you pocket the savings. This income is taxable, so set aside about 25% for
          taxes.
        </li>
        <li>
          <strong>Best for:</strong> Families with smaller households, those who want maximum
          control over their belongings, or service members looking to earn extra PCS income.
        </li>
        <li>
          <strong>Partial PPM:</strong> You can also do a partial PPM — let the government move
          most of your HHG while you personally transport a trailer or vehicle load of items you
          want to keep with you.
        </li>
      </ul>

      {/* What to Do First When You Arrive */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">What to Do First When You Arrive at Fort Knox</h2>
      <p className="text-gray-body mb-4">
        Your first 72 hours at Fort Knox set the tone for your entire tour. Here is a prioritized
        checklist:
      </p>
      <ol className="list-decimal pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Check into temporary lodging</strong> if your permanent housing is not ready. The
          IHG Army Hotels on post or extended-stay options in Elizabethtown work for short stays.
        </li>
        <li>
          <strong>Report to your gaining unit.</strong> Get your in-processing checklist and begin
          working through it immediately.
        </li>
        <li>
          <strong>Visit the Housing Services Office.</strong> Even if you have housing secured,
          check in to update your status and get the local newcomer packet.
        </li>
        <li>
          <strong>Update DEERS and ID cards.</strong> The ID Card Center on post handles updates for
          you, your spouse, and dependents.
        </li>
        <li>
          <strong>Enroll children in school.</strong> Visit the school with your child, orders, shot
          records, and transcripts. See the{" "}
          <Link href="/fort-knox/pcs-guide/" className="text-navy font-semibold hover:text-gold-dark">
            PCS guide school enrollment section
          </Link>{" "}
          for details.
        </li>
        <li>
          <strong>Register your vehicle on post.</strong> Bring your license, registration, and
          insurance to the visitor center for a post access pass.
        </li>
        <li>
          <strong>Set up utilities</strong> for off-post housing — electricity (Nolin RECC or
          LG&E), water (varies by municipality), internet (Spectrum or AT&T).
        </li>
        <li>
          <strong>Visit the commissary and PX.</strong> Stock up on essentials and get oriented with
          what is available on post.
        </li>
        <li>
          <strong>Register with Ireland Army Health Clinic</strong> and enroll in TRICARE if you
          need to update your regional plan.
        </li>
        <li>
          <strong>Explore your community.</strong> Drive around{" "}
          <Link href="/elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
            Elizabethtown
          </Link>,
          find your grocery store, your kids&apos; school routes, and the nearest{" "}
          <Link href="/elizabethtown/parks-recreation/" className="text-navy font-semibold hover:text-gold-dark">
            parks
          </Link>. Getting oriented early reduces stress for the whole family.
        </li>
      </ol>

      {/* Financial Considerations */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Financial Considerations for Your Move</h2>
      <p className="text-gray-body mb-4">
        A PCS involves several financial entitlements. Make sure you understand what you are owed:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>DLA (Dislocation Allowance):</strong> A flat-rate payment to offset the
          miscellaneous costs of relocating. Rates vary by rank and dependency status — check the
          current year&apos;s JTR for exact amounts.
        </li>
        <li>
          <strong>TLE (Temporary Lodging Expense):</strong> Reimburses temporary lodging costs for
          up to 10 days while you transition between homes.
        </li>
        <li>
          <strong>MALT (Monetary Allowance in Lieu of Transportation):</strong> A per-mile
          reimbursement for driving your personal vehicle to your new duty station.
        </li>
        <li>
          <strong>Per diem:</strong> A daily allowance for meals and incidental expenses during your
          travel days.
        </li>
        <li>
          <strong>Advance pay:</strong> You can request an advance on your housing allowance and
          basic pay to cover upfront housing costs at your new duty station.
        </li>
      </ul>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Relocating to Fort Knox? Let a Veteran Help.</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Austin Kutz at{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          is a U.S. Marine Corps veteran who has been on both sides of the PCS equation. He
          specializes in helping military families find{" "}
          <Link href="/fort-knox/off-post-housing/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            off-post housing
          </Link>{" "}
          in Elizabethtown, Radcliff, and surrounding communities — whether you&apos;re buying with
          a{" "}
          <Link href="/fort-knox/va-loans-elizabethtown/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            VA loan
          </Link>{" "}
          or looking for a rental that fits your BAH. Reach out before you arrive — Austin can
          start the search remotely so you hit the ground running.
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
