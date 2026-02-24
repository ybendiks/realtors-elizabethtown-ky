import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CKG, SITE_URL } from "@/lib/constants";
import { realtors } from "@/data/realtors";

export const metadata: Metadata = {
  title: "Real Estate Agents in Elizabethtown, KY | Local Realtor Directory",
  description:
    "Browse our directory of real estate agents serving Elizabethtown, KY. Find experienced realtors for buying, selling, and military relocation in the Fort Knox area.",
  alternates: { canonical: "/realtors/" },
  openGraph: {
    title: "Real Estate Agents in Elizabethtown, KY | Local Realtor Directory",
    description:
      "Browse our directory of real estate agents serving Elizabethtown, KY. Find experienced realtors for buying, selling, and military relocation in the Fort Knox area.",
    url: `${SITE_URL}/realtors/`,
  },
};

export default function DirectoryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Realtors in Elizabethtown, KY",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "RealEstateAgent",
                name: "Compass and Key Group",
                url: `${SITE_URL}/realtors/compass-and-key-group/`,
              },
            },
            ...realtors.map((r, i) => ({
              "@type": "ListItem",
              position: i + 2,
              item: {
                "@type": "RealEstateAgent",
                name: r.name,
                url: `${SITE_URL}/realtors/${r.slug}/`,
              },
            })),
          ],
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Realtors" }]} />

        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
          Real Estate Agents in Elizabethtown, KY
        </h1>

        <div className="max-w-3xl mb-10">
          <p className="text-gray-body mb-4">
            Choosing the right real estate agent is one of the most important decisions you&apos;ll make
            when buying or selling a home in Elizabethtown. The best agents bring deep knowledge of Hardin
            County neighborhoods, pricing trends, and local market conditions — along with the negotiation
            skills and responsiveness that make the process smooth.
          </p>
          <p className="text-gray-body mb-4">
            For military families PCSing to{" "}
            <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
              Fort Knox
            </Link>
            , working with an agent who understands VA loans, BAH budgets, and PCS timelines can save you
            thousands of dollars and weeks of stress. Look for agents with military relocation experience
            and familiarity with the communities closest to post.
          </p>
          <p className="text-gray-body">
            Below you&apos;ll find established real estate agencies serving Elizabethtown, Hardin County,
            and the Fort Knox area. Each listing includes the agency&apos;s specialties, service areas, and
            contact information to help you compare and connect.
          </p>
        </div>

        {/* Featured Agency: CKG */}
        <div className="mb-12">
          <div className="bg-white border-2 border-gold rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-bl-lg uppercase tracking-wide">
              Featured Agency
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">AK</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-navy text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                    Veteran-Owned
                  </span>
                  <span className="bg-gold/20 text-navy text-xs font-bold px-2.5 py-0.5 rounded-full">
                    Military Relocation
                  </span>
                  <span className="bg-gold/20 text-navy text-xs font-bold px-2.5 py-0.5 rounded-full">
                    VA Loans
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-1">
                  <Link href={CKG.profileUrl} className="hover:text-gold-dark transition-colors">
                    {CKG.name}
                  </Link>
                </h2>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-medium ml-1">5.0 ({CKG.reviewCount}+ reviews)</span>
                </div>
                <p className="text-gray-body mb-3">
                  Led by USMC veteran Austin Kutz, Compass and Key Group brings military discipline, deep
                  local expertise, and a client-first approach to every transaction. Brokered under Real
                  Broker, LLC, CKG specializes in buyer and seller representation, military relocation,
                  VA loans, and investment properties across Elizabethtown, Fort Knox, Radcliff, Vine Grove,
                  Brandenburg, and all of Hardin County.
                </p>
                <div className="text-sm text-gray-medium space-y-1 mb-4">
                  <p>{CKG.address}</p>
                  <p>{CKG.phone}</p>
                  <p>Areas: Elizabethtown, Radcliff, Vine Grove, Fort Knox, Brandenburg, Hardin County</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={CKG.profileUrl}
                    className="bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
                  >
                    View Full Profile
                  </Link>
                  <a
                    href={CKG.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy hover:bg-navy-dark text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
                  >
                    Contact Compass and Key Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Agencies */}
        <h2 className="text-2xl font-bold text-navy mb-6">More Agencies Serving Elizabethtown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {realtors.map((realtor) => (
            <div
              key={realtor.slug}
              className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-navy mb-2">
                <Link
                  href={`/realtors/${realtor.slug}/`}
                  className="hover:text-gold-dark transition-colors"
                >
                  {realtor.name}
                </Link>
              </h3>
              <p className="text-sm text-gray-body mb-3 line-clamp-3">{realtor.description}</p>
              <div className="text-xs text-gray-medium space-y-1">
                <p>{realtor.address}</p>
                <p>{realtor.phone}</p>
                <p>Areas: {realtor.areas.join(", ")}</p>
              </div>
              <Link
                href={`/realtors/${realtor.slug}/`}
                className="inline-block mt-3 text-sm text-navy font-medium hover:text-gold-dark transition-colors"
              >
                View Profile →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
