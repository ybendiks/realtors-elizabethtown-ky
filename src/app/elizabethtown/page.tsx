import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Living in Elizabethtown, KY | Area Guide",
  description:
    "Complete guide to living in Elizabethtown, KY. Learn about E-town's neighborhoods, schools, cost of living, Fort Knox proximity, and why families choose this Kentucky city.",
  alternates: { canonical: "/elizabethtown/" },
};

export default function ElizabethtownHub() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Elizabethtown" }]}
      sidebar={{
        relatedPages: [
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Schools", href: "/elizabethtown/schools/" },
          { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
          { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
          { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
          { label: "Weather & Climate", href: "/elizabethtown/weather-climate/" },
          { label: "Commuting", href: "/elizabethtown/commuting/" },
          { label: "History", href: "/elizabethtown/history/" },
          { label: "Nearby Communities", href: "/elizabethtown/nearby-communities/" },
          { label: "Fort Knox", href: "/fort-knox/" },
        ],
        relatedTitle: "Explore E-town",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Place",
          name: "Elizabethtown, Kentucky",
          description: "Elizabethtown is the county seat of Hardin County, Kentucky, located 35 miles south of Louisville via I-65.",
          address: { "@type": "PostalAddress", addressLocality: "Elizabethtown", addressRegion: "KY" },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Living in Elizabethtown, KY — Your Complete Area Guide
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Elizabethtown — &quot;E-town&quot; to the locals — is a city of roughly <strong>33,000 residents</strong> nestled
        in Hardin County, Kentucky, about <strong>35 miles south of Louisville</strong> along the I-65 corridor. It&apos;s
        the kind of place that surprises people: affordable enough to buy a home on a modest income, close enough
        to Louisville for big-city access, and community-oriented in a way that larger cities can&apos;t replicate.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Why People Move to Elizabethtown</h2>
      <p className="text-gray-body mb-4">
        The reasons people land in E-town vary, but a few themes come up again and again. <strong>Military families</strong> arrive
        because of{" "}
        <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">Fort Knox</Link>,
        located about 15 miles north. <strong>Louisville commuters</strong> come for the dramatically lower housing costs — you
        can buy a spacious family home here for what a cramped condo costs in the Highlands. <strong>Retirees</strong> appreciate
        the slow pace, low cost of living, and access to quality healthcare. And <strong>first-time homebuyers</strong> discover
        that E-town is one of the rare places where homeownership is genuinely attainable on a single income.
      </p>
      <p className="text-gray-body mb-4">
        The median home price in Elizabethtown hovers around <strong>$250,000</strong> — roughly 35% below the national median.
        With Fort Knox BAH rates that often cover a full mortgage payment and property taxes that are among the lowest in
        the state, the math works for a wide range of buyers.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">The Community</h2>
      <p className="text-gray-body mb-4">
        E-town has a distinctly welcoming, tight-knit feel. Neighbors wave, local businesses remember your name, and
        community events draw people out throughout the year. The city has invested in its downtown revitalization,
        bringing new restaurants, shops, and energy to the Main Street area. Freeman Lake Park serves as the city&apos;s
        outdoor gathering place, and seasonal events from the county fair to the Christmas parade bring the community together.
      </p>
      <p className="text-gray-body mb-4">
        The military presence from Fort Knox gives E-town a uniquely diverse and transient population. On any given day,
        you&apos;ll meet families from every corner of the country — and many of them choose to stay after their service,
        which says something about the quality of life here.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Economy &amp; Employment</h2>
      <p className="text-gray-body mb-4">
        Fort Knox is the region&apos;s largest employer, home to the U.S. Army Human Resources Command and the U.S. Army
        Cadet Command. Beyond the military, Hardin Memorial Health (Baptist Health Hardin) is a major employer,
        along with the Hardin County school system, local government, and a growing retail and service sector along the
        I-65 corridor. Elizabethtown Community and Technical College (ECTC) provides workforce training and associate
        degree programs.
      </p>
      <p className="text-gray-body mb-4">
        For those willing to commute, Louisville&apos;s diverse economy — healthcare, logistics (UPS Worldport),
        manufacturing, bourbon industry, and corporate headquarters — is accessible within 45-60 minutes.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Explore Elizabethtown</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/", desc: "14 community guides with prices and schools" },
          { label: "Schools", href: "/elizabethtown/schools/", desc: "Hardin County, E-town Independent, and DoDEA schools" },
          { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/", desc: "Freeman Lake, nature trails, and community centers" },
          { label: "Things to Do", href: "/elizabethtown/things-to-do/", desc: "Dining, shopping, events, and entertainment" },
          { label: "Cost of Living", href: "/elizabethtown/cost-of-living/", desc: "Housing, utilities, and comparison data" },
          { label: "Weather & Climate", href: "/elizabethtown/weather-climate/", desc: "What to expect through four seasons" },
          { label: "Commuting", href: "/elizabethtown/commuting/", desc: "Routes to Fort Knox, Louisville, and beyond" },
          { label: "History", href: "/elizabethtown/history/", desc: "From 1797 founding to modern growth" },
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

      <div className="bg-navy rounded-lg p-6 text-white" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Ready to Make E-town Home?</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Whether you&apos;re PCSing to Fort Knox, commuting to Louisville, or simply looking for an affordable,
          family-friendly city to put down roots,{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          has the local expertise to find your perfect home. As a veteran-owned agency, they understand what
          makes E-town special and can match you with the right neighborhood.
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
