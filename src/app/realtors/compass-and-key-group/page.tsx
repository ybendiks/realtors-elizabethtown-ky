import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CKG, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Compass and Key Group | Elizabethtown KY Real Estate",
  description:
    "Compass and Key Group is a veteran-owned real estate agency in Elizabethtown, KY led by USMC veteran Austin Kutz. Specializing in military relocation, VA loans, and local expertise.",
  alternates: { canonical: "/realtors/compass-and-key-group/" },
  openGraph: {
    title: "Compass and Key Group | Elizabethtown KY Real Estate",
    description:
      "Compass and Key Group is a veteran-owned real estate agency in Elizabethtown, KY led by USMC veteran Austin Kutz. Specializing in military relocation, VA loans, and local expertise.",
    url: `${SITE_URL}/realtors/compass-and-key-group/`,
  },
};

export default function CKGProfilePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Compass and Key Group",
          url: "https://compassandkeygroup.com",
          telephone: "(270) 735-3897",
          address: {
            "@type": "PostalAddress",
            streetAddress: "639 N Mulberry St",
            addressLocality: "Elizabethtown",
            addressRegion: "KY",
            postalCode: "42701",
          },
          founder: {
            "@type": "Person",
            name: "Austin Kutz",
            jobTitle: "Owner / Lead Agent",
            description:
              "U.S. Marine Corps veteran, Kentucky Real Estate License #277797",
          },
          areaServed: [
            "Elizabethtown, KY",
            "Radcliff, KY",
            "Vine Grove, KY",
            "Fort Knox, KY",
            "Hardin County, KY",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "25",
          },
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Breadcrumbs
            items={[
              { label: "Realtors", href: "/realtors/" },
              { label: "Compass and Key Group" },
            ]}
          />
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-navy text-4xl font-bold">AK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Featured Agency
                </span>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Veteran-Owned
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {CKG.name}
              </h1>
              <p className="text-xl text-gold mb-4">
                Veteran-Owned Real Estate Experts in Elizabethtown, KY
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white ml-2">5.0 ({CKG.reviewCount}+ reviews)</span>
              </div>
              <div className="space-y-1 text-gray-300 text-sm mb-6">
                <p>{CKG.address}</p>
                <p>{CKG.phone}</p>
                <p>Brokered by {CKG.brokerage}</p>
                <p>{CKG.license}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={CKG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded transition-colors"
                >
                  Schedule a Free Consultation
                </a>
                <a
                  href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`}
                  className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-6 py-3 rounded transition-colors"
                >
                  Call {CKG.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-4xl">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">About Compass and Key Group</h2>
            <p className="text-gray-body mb-4">
              Compass and Key Group was founded by Austin Kutz, a proud United States Marine Corps veteran
              who served five years on active duty, including two overseas tours. After transitioning from
              active duty to the Army Reserves, Austin pursued a Bachelor&apos;s degree in Business and
              discovered a passion for real estate that aligned naturally with his military background —
              discipline, integrity, attention to detail, and a commitment to serving others.
            </p>
            <p className="text-gray-body mb-4">
              Based in Elizabethtown, Kentucky and brokered under Real Broker, LLC, Compass and Key Group
              has quickly become one of the most trusted real estate teams in the Hardin County area. Austin
              holds Kentucky Real Estate License #277797 and has built a reputation for honest, client-first
              service that&apos;s earned a perfect 5-star rating across every review platform.
            </p>
            <p className="text-gray-body mb-4">
              The name &quot;Compass and Key&quot; reflects the team&apos;s mission: to guide clients in the
              right direction (the compass) and unlock the door to their next home (the key). Whether
              you&apos;re a first-time homebuyer overwhelmed by the process, a soldier PCSing to Fort Knox
              with just weeks to find a home, or a homeowner ready to sell and move on to the next chapter,
              Compass and Key Group tailors their approach to fit your specific needs and timeline.
            </p>
            <p className="text-gray-body">
              Austin&apos;s military experience isn&apos;t just a talking point — it&apos;s the foundation
              of how CKG operates. He understands the urgency of a PCS move, the complexities of BAH budgets
              and VA loans, and the stress of relocating a family across the country. That first-hand
              understanding makes all the difference when time is short and the stakes are high.
            </p>
          </section>

          {/* Why Choose CKG */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Why Choose Compass and Key Group</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-5">
                <h3 className="text-lg font-bold text-navy mb-2">Veteran-Owned, Veteran-Focused</h3>
                <p className="text-gray-body">
                  Austin Kutz isn&apos;t just veteran-friendly — he&apos;s a veteran himself. He&apos;s
                  navigated PCS moves, lived on BAH, and understands the VA loan process from a personal
                  level. When military families work with CKG, they&apos;re working with someone who truly
                  gets it. From understanding PCS timelines to knowing exactly what an E-5&apos;s BAH can
                  afford in Elizabethtown, Austin brings perspective that most agents simply can&apos;t match.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-5">
                <h3 className="text-lg font-bold text-navy mb-2">Deep Local Market Knowledge</h3>
                <p className="text-gray-body">
                  Austin knows Elizabethtown inside and out — from the established, tree-lined streets of{" "}
                  <Link href="/elizabethtown/neighborhoods/helmwood-heights/" className="text-navy font-semibold hover:text-gold-dark">
                    Helmwood Heights
                  </Link>{" "}
                  to the upscale homes near the country club in{" "}
                  <Link href="/elizabethtown/neighborhoods/thousand-oaks/" className="text-navy font-semibold hover:text-gold-dark">
                    Thousand Oaks
                  </Link>
                  , from the best{" "}
                  <Link href="/elizabethtown/schools/" className="text-navy font-semibold hover:text-gold-dark">
                    school districts
                  </Link>{" "}
                  to the quickest commute routes to{" "}
                  <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
                    Fort Knox
                  </Link>
                  . This hyper-local expertise means smarter pricing, faster closings, and homes that
                  genuinely fit your lifestyle.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-5">
                <h3 className="text-lg font-bold text-navy mb-2">Full-Service From Listing to Closing</h3>
                <p className="text-gray-body">
                  Compass and Key Group isn&apos;t a referral service or lead generator — Austin is hands-on
                  from your first phone call through closing day and beyond. Buyers get full representation
                  including home tours, offer strategy, inspection guidance, and closing coordination.
                  Sellers receive professional market analysis, pricing strategy, marketing exposure, and
                  negotiation expertise. No handoffs, no surprises.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-5">
                <h3 className="text-lg font-bold text-navy mb-2">Military Relocation Specialist</h3>
                <p className="text-gray-body">
                  PCS moves don&apos;t wait, and neither does Austin. He&apos;s experienced with remote
                  house hunting via video tours, tight closing timelines, and the unique requirements of{" "}
                  <Link href="/fort-knox/va-loans-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
                    VA-backed transactions
                  </Link>
                  . Whether you&apos;re buying from 700 miles away or need to list your home the week you
                  receive orders, CKG is built for the pace and pressure of military real estate.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-5">
                <h3 className="text-lg font-bold text-navy mb-2">Proven Results, Real Reviews</h3>
                <p className="text-gray-body">
                  With a perfect 5.0-star rating across {CKG.reviewCount}+ client reviews, Compass and Key
                  Group&apos;s track record speaks for itself. Clients consistently highlight Austin&apos;s
                  professionalism, responsiveness, and genuine care. Much of CKG&apos;s business comes from
                  repeat clients and referrals — the strongest endorsement an agent can receive.
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Services We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Home Buying Assistance",
                  desc: "Whether it's your first home, a move-up property, or an investment purchase, we guide you through every step — from pre-approval to closing day. We'll help you find the right home at the right price in the right neighborhood.",
                },
                {
                  title: "Home Selling & Listing",
                  desc: "Selling in the Elizabethtown market requires smart pricing and strategic marketing. We provide comprehensive market analysis, professional listing preparation, and skilled negotiation to maximize your return.",
                },
                {
                  title: "Military Relocation (PCS)",
                  desc: "PCSing to or from Fort Knox? We specialize in military moves — remote buying, tight timelines, coordinating with your relocation office, and making sure you're settled before your report date.",
                },
                {
                  title: "VA Loan Guidance",
                  desc: "As a veteran, Austin understands VA loans firsthand. We'll walk you through eligibility, connect you with experienced VA lenders, and ensure the VA appraisal process goes smoothly.",
                },
                {
                  title: "Investment Property Consulting",
                  desc: "Elizabethtown's steady military rental demand makes it an excellent investment market. We help investors identify properties with strong rental yields, especially near Fort Knox.",
                },
                {
                  title: "Free Market Analysis",
                  desc: "Thinking about selling? We provide complimentary comparative market analyses so you know exactly what your home is worth in today's Hardin County market. No obligation, no pressure.",
                },
              ].map((service) => (
                <div key={service.title} className="bg-gray-light rounded-lg p-5">
                  <h3 className="font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-body">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Areas Served */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Areas We Serve</h2>
            <p className="text-gray-body mb-4">
              Compass and Key Group serves buyers and sellers throughout Hardin County and the greater
              Central Kentucky region. Our primary service areas include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                { name: "Elizabethtown", href: "/elizabethtown/" },
                { name: "Radcliff", href: "/fort-knox/radcliff-ky/" },
                { name: "Vine Grove", href: "/fort-knox/vine-grove-ky/" },
                { name: "Fort Knox Area", href: "/fort-knox/" },
                { name: "Brandenburg", href: "/fort-knox/brandenburg-ky/" },
                { name: "Hardin County", href: "/elizabethtown/neighborhoods/" },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex items-center gap-2 text-navy hover:text-gold-dark font-medium"
                >
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {area.name}
                </Link>
              ))}
            </div>
            <p className="text-gray-body text-sm">
              We also serve clients in Bardstown, Shepherdsville, and the greater Louisville area. If
              you&apos;re buying or selling anywhere in Central Kentucky, give us a call.
            </p>
          </section>

          {/* Client Reviews */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6">What Our Clients Say</h2>
            <div className="space-y-6">
              {[
                {
                  name: "Tom",
                  text: "Everything was perfect from start to finish. Austin was friendly, professional, and genuinely invested in helping us find the right home. He was always available to answer questions and went out of his way to make sure every detail was handled. We couldn't have asked for a better experience.",
                },
                {
                  name: "Sarah & Michael",
                  text: "Austin went above and beyond to help us find the perfect home when we were relocating across the country. Moving from out of state was stressful, but Austin made the process incredibly smooth with virtual tours, detailed neighborhood insights, and constant communication. He took the anxiety out of a long-distance move.",
                },
                {
                  name: "David & Emily",
                  text: "Austin did an amazing job helping us find the perfect home — not just for us, but for our three dogs too. He listened to exactly what we needed, including a big yard and a neighborhood where we could walk our dogs safely. His patience and dedication made all the difference.",
                },
                {
                  name: "James",
                  text: "Working with Austin from 700 miles away could have been a nightmare, but he made the entire process smooth and easy. His communication was outstanding — video walkthroughs, detailed photos, and honest assessments of every property. It felt like we were right there with him. Highly recommend for anyone buying remotely.",
                },
                {
                  name: "The Martinez Family",
                  text: "As a military family PCSing to Fort Knox, we needed an agent who understood our timeline and budget. Austin delivered on every front. He knew the area, understood our BAH situation, and had us under contract within two weeks of our first call. Couldn't have had a smoother transition.",
                },
              ].map((review, index) => (
                <div key={index} className="bg-gray-light rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-body italic mb-3">&quot;{review.text}&quot;</p>
                  <p className="text-sm font-semibold text-navy">— {review.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-navy rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Make Your Move?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Whether you&apos;re buying, selling, or relocating to the Elizabethtown area, Compass and Key
              Group is ready to help. Contact Austin Kutz today for a free, no-obligation consultation.
            </p>
            <div className="space-y-3">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={CKG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded transition-colors"
                >
                  Visit Our Website
                </a>
                <a
                  href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`}
                  className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-3 rounded transition-colors"
                >
                  Call {CKG.phone}
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                {CKG.address} | Brokered by {CKG.brokerage}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
