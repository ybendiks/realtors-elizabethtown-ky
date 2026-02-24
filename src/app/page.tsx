import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, CKG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Realtors in Elizabethtown, KY | Find Local Real Estate Agents",
  description:
    "Find the best realtors and real estate agents in Elizabethtown, KY. Local directory covering E-town, Fort Knox, and Hardin County neighborhoods, schools, and market data.",
  openGraph: {
    title: "Realtors in Elizabethtown, KY | Find Local Real Estate Agents",
    description:
      "Find the best realtors and real estate agents in Elizabethtown, KY. Local directory covering E-town, Fort Knox, and Hardin County neighborhoods, schools, and market data.",
    url: SITE_URL,
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Realtors in Elizabethtown, KY",
          url: SITE_URL,
          description:
            "Find the best realtors and real estate agents in Elizabethtown, KY. Local directory featuring expert agents serving Elizabethtown, Fort Knox, and Hardin County.",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Find the Best Realtors in Elizabethtown, KY
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Your complete guide to real estate agents, neighborhoods, schools, and living in the
              Elizabethtown and Fort Knox area. Whether you&apos;re buying your first home, PCSing to
              Fort Knox, or selling in Hardin County, we&apos;ll help you find the right agent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/realtors/"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3.5 rounded-lg text-lg transition-colors"
              >
                Browse Realtors
              </Link>
              <Link
                href="/fort-knox/pcs-guide/"
                className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
              >
                PCS to Fort Knox?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agency Block */}
      <section className="bg-gray-light py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white border-2 border-gold rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">AK</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Featured Agency
                  </span>
                  <span className="bg-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Veteran-Owned
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-1">{CKG.name}</h2>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-medium ml-1">5.0 ({CKG.reviewCount}+ reviews)</span>
                </div>
                <p className="text-gray-body mb-4">
                  Led by U.S. Marine Corps veteran Austin Kutz, Compass and Key Group brings military
                  discipline and deep local expertise to every transaction. Specializing in buyer and
                  seller representation, military relocation, VA loans, and investment properties across
                  Elizabethtown, Fort Knox, and Hardin County.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={CKG.profileUrl}
                    className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-2.5 rounded transition-colors"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`}
                    className="border border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-2.5 rounded transition-colors"
                  >
                    {CKG.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elizabethtown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Why Elizabethtown, KY?
          </h2>
          <div className="prose max-w-none text-gray-body">
            <p>
              Elizabethtown — or &quot;E-town&quot; as locals call it — is the heart of Hardin County and one
              of Kentucky&apos;s most livable small cities. With a population of roughly <strong>32,500
              residents</strong>, it offers the perfect balance of small-town charm and modern convenience.
              Situated just <strong>35 miles south of Louisville via I-65</strong>, E-town gives you easy
              access to big-city amenities while keeping the cost of living well below national averages.
            </p>
            <p>
              The housing market here is one of the most affordable in the region. The{" "}
              <strong>median home price hovers around $250,000</strong> — well below the national median of
              roughly $390,000. That affordability, paired with quality school districts and a strong sense
              of community, makes Elizabethtown a magnet for families, military personnel from nearby{" "}
              <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
                Fort Knox
              </Link>
              , retirees, and first-time homebuyers.
            </p>
            <p>
              Fort Knox, located about 15 miles north of downtown, is home to the U.S. Army Human Resources
              Command and the U.S. Army Cadet Command. The base drives a significant portion of the local
              economy and housing demand, creating a steady stream of military families looking for homes in
              the E-town area. With <strong>BAH rates that often cover a full mortgage payment</strong>,
              many service members choose to buy rather than rent.
            </p>
            <p>
              Whether you&apos;re relocating for the military, looking for your first home, or investing in
              rental property, Elizabethtown&apos;s real estate market offers real value. And with a roster
              of experienced local agents — led by{" "}
              <Link href={CKG.profileUrl} className="text-navy font-semibold hover:text-gold-dark">
                veteran-owned Compass and Key Group
              </Link>
              {" "}— you&apos;ll have expert guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Explore Elizabethtown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Neighborhoods",
                desc: "Explore 14 neighborhoods from established Helmwood Heights to upscale Thousand Oaks.",
                href: "/elizabethtown/neighborhoods/",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                title: "Schools",
                desc: "Hardin County Schools, E-town Independent, and Fort Knox DoDEA — all Purple Star designated.",
                href: "/elizabethtown/schools/",
                icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
              },
              {
                title: "Fort Knox & Military",
                desc: "PCS guides, BAH rates, VA loans, off-post housing, and everything for military families.",
                href: "/fort-knox/",
                icon: "M3 21V7l9-4 9 4v14M9 21V11l3-1.5L15 11v10",
              },
              {
                title: "Real Estate Market",
                desc: "Market trends, home prices, buyer and seller guides, and investment opportunities.",
                href: "/real-estate-market/",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                title: "Parks & Recreation",
                desc: "Freeman Lake Park, Saunders Springs, nature trails, playgrounds, and community centers.",
                href: "/elizabethtown/parks-recreation/",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "Things to Do",
                desc: "Restaurants, shopping, family activities, seasonal events, golf, and nightlife in E-town.",
                href: "/elizabethtown/things-to-do/",
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-border hover:border-gold transition-all group"
              >
                <svg
                  className="w-10 h-10 text-gold mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
                <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Military Relocation Callout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-navy rounded-xl p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Military Families
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                PCSing to Fort Knox? We&apos;ve Got You Covered.
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Moving to Fort Knox is a big transition. Our comprehensive military relocation guides cover
                everything from BAH rates and VA loans to the best off-post neighborhoods and schools for
                military families. As a site founded with military families in mind, we understand the unique
                challenges of a PCS move — tight timelines, remote house hunting, and navigating a new community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/fort-knox/pcs-guide/"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded transition-colors"
                >
                  Fort Knox PCS Guide
                </Link>
                <Link
                  href="/fort-knox/bah-rates/"
                  className="border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-6 py-3 rounded transition-colors"
                >
                  2026 BAH Rates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Elizabethtown Real Estate at a Glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Median Home Price", value: "$249,900", note: "Hardin County" },
              { label: "Avg. Days on Market", value: "49", note: "Faster than national avg." },
              { label: "Price Per Sq Ft", value: "$145", note: "Below state average" },
              { label: "BAH E-5 w/ Dep.", value: "$2,034+/mo", note: "2026 Fort Knox rate" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm font-semibold text-gray-body mt-1">{stat.label}</p>
                <p className="text-xs text-gray-medium mt-1">{stat.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-medium mt-4">
            Data as of early 2026. Sources: Zillow, Realtor.com, DoD BAH calculator. Contact a{" "}
            <Link href="/realtors/" className="text-navy hover:text-gold-dark">local agent</Link> for the
            most up-to-date figures.
          </p>
        </div>
      </section>
    </>
  );
}
