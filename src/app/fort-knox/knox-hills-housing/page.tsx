import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Knox Hills Housing Fort Knox | On-Post Guide",
  description:
    "Knox Hills on-post housing at Fort Knox. 20 neighborhoods, application process, unit types, amenities, and what to expect living in privatized military housing.",
  alternates: { canonical: "/fort-knox/knox-hills-housing/" },
};

export default function KnoxHillsHousing() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: "Knox Hills Housing" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
          { label: "PCS to Fort Knox Guide", href: "/fort-knox/pcs-guide/" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Military Relocation Guide", href: "/fort-knox/military-relocation-guide/" },
        ],
        relatedTitle: "Fort Knox Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Residence",
          name: "Knox Hills Housing at Fort Knox",
          description:
            "Knox Hills is the privatized military housing community at Fort Knox, Kentucky, managed by Lendlease. It includes 20 neighborhoods with two-, three-, and four-bedroom homes for military families.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fort Knox",
            addressRegion: "KY",
            postalCode: "40121",
          },
          telephone: "(502) 378-3708",
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Knox Hills Housing at Fort Knox — On-Post Living Guide
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Knox Hills is the privatized military housing community on Fort Knox, managed by Lendlease
        under the Centinel brand. If you are considering on-post housing at Fort Knox, Knox Hills
        is your only option — and for many families, it is a good one. This guide covers everything
        you need to know: the application process, what to expect, the neighborhoods, and how to
        decide if on-post is the right call for your family.
      </p>

      <div className="bg-gray-light border-l-4 border-gold rounded-r-lg p-5 mb-8">
        <h2 className="text-lg font-bold text-navy mb-3">Knox Hills Quick Facts</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Management Company</dt>
            <dd className="text-sm text-gray-body font-medium">Lendlease (Centinel)</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Neighborhoods</dt>
            <dd className="text-sm text-gray-body font-medium">20 on-post communities</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Unit Types</dt>
            <dd className="text-sm text-gray-body font-medium">2BR, 3BR, 4BR homes</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Contact</dt>
            <dd className="text-sm text-gray-body font-medium">(502) 378-3708</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Cost</dt>
            <dd className="text-sm text-gray-body font-medium">100% of BAH (auto-allotted)</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">Utilities</dt>
            <dd className="text-sm text-gray-body font-medium">Included in BAH allotment</dd>
          </div>
        </dl>
      </div>

      {/* Overview */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">What Is Knox Hills?</h2>
      <p className="text-gray-body mb-4">
        Knox Hills is part of the Military Housing Privatization Initiative (MHPI), which
        transferred management of on-post housing from the Army to private companies. Lendlease
        operates Knox Hills under a 50-year partnership with the Army, maintaining and renovating
        homes across <strong>20 neighborhoods</strong> on Fort Knox.
      </p>
      <p className="text-gray-body mb-4">
        When you move into Knox Hills, your{" "}
        <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
          Basic Allowance for Housing (BAH)
        </Link>{" "}
        is allotted directly to the housing office — you do not receive a BAH check and then pay
        rent. The allotment covers your home, basic utilities (electric, water, gas, trash), and
        maintenance. There is no security deposit and no lease in the traditional sense — you sign
        a housing agreement that lasts as long as you are assigned to Fort Knox.
      </p>

      {/* Neighborhoods */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">The 20 Neighborhoods</h2>
      <p className="text-gray-body mb-4">
        Knox Hills spans 20 neighborhoods across the installation, ranging from older historic
        areas to recently renovated communities. The neighborhoods are divided by rank tier and
        family size, though specific assignments depend on availability at the time you apply.
        Some of the neighborhoods include:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Anderson, Gruber, and Hammond</strong> — Larger homes typically assigned to
          senior NCOs and officers. Many have been recently renovated with updated kitchens,
          flooring, and HVAC systems.
        </li>
        <li>
          <strong>Prichard Place, Walker, and Wilson</strong> — Mid-range neighborhoods serving
          NCOs and junior officers. A mix of renovated and original condition homes.
        </li>
        <li>
          <strong>Craig, Gruber, and Brandenburg Station</strong> — Communities serving a range
          of ranks with two- to four-bedroom options.
        </li>
        <li>
          <strong>Gold Vault and other junior-grade areas</strong> — Smaller two- and
          three-bedroom homes for junior enlisted families.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        The condition and style of homes varies significantly across neighborhoods. Some have been
        through recent renovation cycles with modern finishes, while others are older and more
        utilitarian. You may be able to request a preferred neighborhood, but assignment is
        ultimately based on availability, rank, and family size.
      </p>

      {/* Application Process */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Application Process</h2>
      <p className="text-gray-body mb-4">
        Applying for Knox Hills housing is straightforward, but timing matters — especially during
        peak PCS season. Here is the step-by-step process:
      </p>
      <ol className="list-decimal pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Contact Knox Hills as early as possible.</strong> Call (502) 378-3708 or visit
          their office on post. You can begin the application process as soon as you receive your
          PCS orders to Fort Knox — you do not need to be on the ground.
        </li>
        <li>
          <strong>Submit your application.</strong> You will need a copy of your PCS orders, your
          LES (Leave and Earnings Statement), a completed application form, and family member
          information (dependents who will live with you).
        </li>
        <li>
          <strong>Get placed on the waitlist.</strong> Knox Hills will assess your rank, family
          size, and housing needs and place you on a waitlist for an appropriate unit. Waitlist
          times vary:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>2-bedroom:</strong> Typically 2-4 weeks</li>
            <li><strong>3-bedroom:</strong> Typically 4-8 weeks, longer in summer</li>
            <li><strong>4-bedroom:</strong> Typically 6-12 weeks during peak season</li>
          </ul>
        </li>
        <li>
          <strong>Accept your assigned home.</strong> When a unit becomes available, Knox Hills
          will contact you with the address and schedule a walkthrough. You can accept or decline
          — but declining may move you to the back of the waitlist.
        </li>
        <li>
          <strong>Move in.</strong> Sign the housing agreement, set up your BAH allotment through
          your finance office, and pick up your keys. Knox Hills will provide a move-in checklist
          and a guide to maintenance request procedures.
        </li>
      </ol>

      {/* Unit Types and Amenities */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Unit Types and Amenities</h2>
      <p className="text-gray-body mb-4">
        Knox Hills homes are single-family residences, duplexes, and townhomes depending on the
        neighborhood. Most homes include:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Two to four bedrooms with one to two and a half bathrooms</li>
        <li>Attached or detached garage or carport (varies by neighborhood)</li>
        <li>Fenced or unfenced yard (varies — some neighborhoods have standard fencing)</li>
        <li>Washer and dryer hookups (some units include the appliances)</li>
        <li>Kitchen appliances: refrigerator, stove/oven, dishwasher, microwave</li>
        <li>Central heating and air conditioning</li>
        <li>Basic lawn care for common areas (you maintain your yard)</li>
      </ul>

      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Community Amenities</h3>
      <p className="text-gray-body mb-4">
        Knox Hills neighborhoods include shared amenities that vary by community:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Community centers and gathering spaces</li>
        <li>Playgrounds and tot lots in most neighborhoods</li>
        <li>Dog parks in select communities</li>
        <li>Walking trails connecting neighborhoods to on-post facilities</li>
        <li>Resident events organized by Knox Hills community management</li>
      </ul>
      <p className="text-gray-body mb-4">
        Beyond the Knox Hills community itself, on-post living gives you easy access to Fort
        Knox&apos;s full range of MWR facilities — fitness centers, pools, bowling alley, Otter
        Creek Outdoor Recreation Area, the commissary, PX, and Ireland Army Health Clinic.
      </p>

      {/* What to Expect */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">What to Expect Living in Knox Hills</h2>
      <p className="text-gray-body mb-4">
        Living on-post at Knox Hills has a different feel than living in the civilian community.
        Here is an honest assessment of the day-to-day experience:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Maintenance response times vary.</strong> Routine work orders (leaky faucet,
          broken blinds) may take days to weeks. Emergency maintenance (burst pipe, no heat) is
          typically same-day. Experiences vary by neighborhood and season — winter heating season
          can strain response times.
        </li>
        <li>
          <strong>Community standards are enforced.</strong> Knox Hills expects you to maintain your
          yard, keep the exterior clean, and follow noise and guest policies. Periodic inspections
          occur, though they are generally not invasive.
        </li>
        <li>
          <strong>Your neighbors are all military.</strong> This is either a pro or a con depending
          on your perspective. The shared experience creates natural bonds, but it also means the
          military is omnipresent — there is no separation between work and home life.
        </li>
        <li>
          <strong>Move-out can be stressful.</strong> When you PCS out, Knox Hills conducts a
          detailed move-out inspection. You are responsible for leaving the home in good condition.
          Professional cleaning is often recommended to avoid charges.
        </li>
      </ul>

      {/* Temporary Housing */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Temporary Housing While You Wait</h2>
      <p className="text-gray-body mb-4">
        If you arrive at Fort Knox before your Knox Hills home is ready, temporary options include:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Knox Hills temporary/guest housing:</strong> Limited furnished units may be
          available for waitlisted families. Ask when you apply.
        </li>
        <li>
          <strong>IHG Army Hotels on post:</strong> Government-rate hotel rooms on Fort Knox. Book
          early during PCS season.
        </li>
        <li>
          <strong>Off-post extended stay:</strong> Elizabethtown has several extended-stay hotels
          along the I-65 corridor with kitchenettes.
        </li>
        <li>
          <strong>TLE reimbursement:</strong> You are authorized up to 10 days of Temporary Lodging
          Expense per your orders, which helps offset temporary housing costs.
        </li>
      </ul>

      {/* Is Knox Hills Right for You */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Is Knox Hills Right for Your Family?</h2>
      <p className="text-gray-body mb-4">
        Knox Hills works well for families who value convenience, community, and simplicity.
        It works less well for families who want to build equity, have specific neighborhood
        preferences, or value separation between their military and home lives. Our{" "}
        <Link href="/fort-knox/on-post-vs-off-post/" className="text-navy font-semibold hover:text-gold-dark">
          on-post vs off-post comparison
        </Link>{" "}
        provides a detailed decision framework. If you decide off-post is the better fit, the{" "}
        <Link href="/fort-knox/off-post-housing/" className="text-navy font-semibold hover:text-gold-dark">
          off-post housing guide
        </Link>{" "}
        compares Elizabethtown, Radcliff, Vine Grove, and Brandenburg.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Considering Off-Post Instead?</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          If the Knox Hills waitlist is too long or you would rather build equity in your own home,{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          can help. Austin Kutz is a Marine Corps veteran who specializes in helping Fort Knox
          families find off-post homes that fit their{" "}
          <Link href="/fort-knox/bah-rates/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            BAH budget
          </Link>. From{" "}
          <Link href="/fort-knox/va-loans-elizabethtown/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            VA loan
          </Link>{" "}
          pre-approval to closing, Austin handles the process so you can focus on your mission.
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
