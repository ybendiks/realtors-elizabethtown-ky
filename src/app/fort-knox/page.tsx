import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fort Knox KY | Military Base Guide & Housing",
  description:
    "Complete guide to Fort Knox, KY. Base info, PCS resources, BAH rates, off-post housing, VA loans, and Knox Hills for military families relocating to Fort Knox.",
  alternates: { canonical: "/fort-knox/" },
};

export default function FortKnoxHub() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Fort Knox" }]}
      sidebar={{
        relatedPages: [
          { label: "PCS to Fort Knox Guide", href: "/fort-knox/pcs-guide/" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/" },
          { label: "Military Relocation Guide", href: "/fort-knox/military-relocation-guide/" },
          { label: "Elizabethtown Overview", href: "/elizabethtown/" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
        ],
        relatedTitle: "Fort Knox Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Place",
          name: "Fort Knox, Kentucky",
          description:
            "Fort Knox is a U.S. Army installation in Hardin and Meade counties, Kentucky, home to the Human Resources Command, U.S. Army Cadet Command, and the United States Bullion Depository.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fort Knox",
            addressRegion: "KY",
            postalCode: "40121",
          },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Fort Knox, KY — Complete Guide for Military Families
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Fort Knox is one of the U.S. Army&apos;s most important installations, situated across
        Hardin and Meade counties in north-central Kentucky. Whether you&apos;re PCSing to Fort Knox
        for the first time, returning for another tour, or exploring the area as a civilian employee,
        this guide covers everything you need to know about the base, surrounding communities, and
        the housing market that supports military families every day.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">What&apos;s at Fort Knox Today</h2>
      <p className="text-gray-body mb-4">
        Fort Knox&apos;s mission has evolved significantly over the decades. It is no longer the home
        of the Armor School (which relocated to Fort Benning in 2011), but the installation remains a
        critical hub for the Army. Today, Fort Knox serves as the headquarters for several major
        commands and organizations:
      </p>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>U.S. Army Human Resources Command (HRC)</strong> — The Army&apos;s personnel
          headquarters, responsible for assignments, promotions, retirements, and career management
          for every soldier. HRC is the single largest employer on post, with thousands of military
          and civilian workers.
        </li>
        <li>
          <strong>U.S. Army Cadet Command</strong> — Oversees all ROTC programs nationwide, managing
          the training and commissioning pipeline for future Army officers.
        </li>
        <li>
          <strong>U.S. Army Recruiting Command (USAREC)</strong> — Manages the Army&apos;s nationwide
          recruiting operations from Fort Knox.
        </li>
        <li>
          <strong>United States Bullion Depository</strong> — The famous gold vault. While not an Army
          operation, the Depository is located on Fort Knox grounds and stores a significant portion
          of the nation&apos;s gold reserves. It is not open to the public, but it remains one of the
          most recognizable landmarks in Kentucky.
        </li>
        <li>
          <strong>84th Training Command</strong> and various Reserve and National Guard units that
          rotate through the installation for training.
        </li>
      </ul>
      <p className="text-gray-body mb-4">
        Fort Knox employs an estimated <strong>26,000 military and civilian personnel</strong>,
        making it the economic engine of Hardin County and the broader region. The installation
        covers roughly 109,000 acres, with its own schools (DoDEA), medical facilities (Ireland
        Army Health Clinic), and extensive MWR programs.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Living Near Fort Knox</h2>
      <p className="text-gray-body mb-4">
        Military families at Fort Knox have two broad options: live{" "}
        <Link href="/fort-knox/knox-hills-housing/" className="text-navy font-semibold hover:text-gold-dark">
          on post in Knox Hills
        </Link>{" "}
        privatized housing, or find a home in one of several{" "}
        <Link href="/fort-knox/off-post-housing/" className="text-navy font-semibold hover:text-gold-dark">
          off-post communities
        </Link>.
        The good news is that the Fort Knox area is one of the more affordable duty stations in the
        country, and{" "}
        <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
          BAH rates
        </Link>{" "}
        typically cover a full mortgage payment in Elizabethtown and surrounding communities.
      </p>
      <p className="text-gray-body mb-4">
        The most popular off-post communities include{" "}
        <strong>Elizabethtown</strong> (15 minutes south, the largest city with the most amenities),{" "}
        <strong>Radcliff</strong> (5 minutes from the main gate, the closest option),{" "}
        <strong>Vine Grove</strong> (10 minutes, small-town feel), and{" "}
        <strong>Brandenburg</strong> (20 minutes, rural and spacious). Each has a different character,
        price point, and lifestyle — and the right choice depends on your rank, family size, and
        what matters most to you. Our{" "}
        <Link href="/fort-knox/on-post-vs-off-post/" className="text-navy font-semibold hover:text-gold-dark">
          on-post vs off-post comparison
        </Link>{" "}
        breaks down the decision in detail.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">PCS Resources for Fort Knox</h2>
      <p className="text-gray-body mb-4">
        If you&apos;re headed to Fort Knox on PCS orders, the{" "}
        <Link href="/fort-knox/pcs-guide/" className="text-navy font-semibold hover:text-gold-dark">
          PCS to Fort Knox guide
        </Link>{" "}
        walks you through every step from receiving orders to settling in. You&apos;ll also want to
        review the{" "}
        <Link href="/fort-knox/military-relocation-guide/" className="text-navy font-semibold hover:text-gold-dark">
          military relocation guide
        </Link>{" "}
        for move logistics, and the{" "}
        <Link href="/fort-knox/va-loans-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
          VA loans page
        </Link>{" "}
        if you&apos;re considering buying a home with your VA benefit.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Explore Fort Knox Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          { label: "PCS to Fort Knox", href: "/fort-knox/pcs-guide/", desc: "Step-by-step guide from orders to moving day" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/", desc: "Complete rate tables by rank with and without dependents" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/", desc: "Zero-down homebuying with your VA benefit" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/", desc: "E-town, Radcliff, Vine Grove, and Brandenburg compared" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/", desc: "Decision framework for your housing choice" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/", desc: "On-post privatized housing details and application" },
          { label: "Military Relocation", href: "/fort-knox/military-relocation-guide/", desc: "HHG moves, resources, and arrival checklist" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/", desc: "14 community guides with prices and schools" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-gray-light rounded-lg p-4 hover:bg-gold/10 transition-colors group"
          >
            <h3 className="font-bold text-navy group-hover:text-gold-dark text-sm">{item.label}</h3>
            <p className="text-xs text-gray-medium mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Schools for Military Families</h2>
      <p className="text-gray-body mb-4">
        Military families at Fort Knox have access to three school systems. The{" "}
        <Link href="/elizabethtown/schools/" className="text-navy font-semibold hover:text-gold-dark">
          Hardin County Schools
        </Link>{" "}
        district is the largest, serving most off-post neighborhoods and earning a Purple Star
        designation across all 28 schools for their military family support programs. Elizabethtown
        Independent Schools offer a smaller, focused alternative for families living within the
        E-town city limits. On post, DoDEA (Department of Defense Education Activity) operates
        schools for families living in Knox Hills housing.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Why Families Stay</h2>
      <p className="text-gray-body mb-4">
        It says something about Elizabethtown that so many military families choose to stay after
        their service ends. The cost of living is well below the national average, the community is
        welcoming and accustomed to newcomers, and the access to Louisville (45 minutes north on I-65)
        provides big-city amenities without big-city prices. It&apos;s a place where your BAH
        actually builds equity instead of vanishing into rent — and where your kids can play in the
        front yard without worry.
      </p>

      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>PCSing to Fort Knox? Talk to Someone Who Gets It.</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          As a U.S. Marine Corps veteran, Austin Kutz at{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          understands military relocation firsthand — the tight timelines, the long-distance house
          hunting, the BAH math, and the stress of moving your family to a new duty station. He&apos;s
          built his real estate practice around helping military families find the right home in the
          Fort Knox area. Whether you&apos;re buying your first home with a VA loan or looking for
          a rental that fits your BAH, Austin and his team have you covered.
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
