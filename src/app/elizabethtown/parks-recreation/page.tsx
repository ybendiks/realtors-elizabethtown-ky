import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CKGWidget from "@/components/CKGWidget";
import { parks } from "@/data/parks";

export const metadata: Metadata = {
  title: "Elizabethtown KY Parks & Recreation Guide",
  description:
    "Explore 7 parks in Elizabethtown, KY. Freeman Lake, nature preserves, playgrounds, sports fields, and community recreation — your complete guide to E-town outdoor life.",
  alternates: { canonical: "/elizabethtown/parks-recreation/" },
};

const parkSummaries: Record<string, string> = {
  "freeman-lake-park":
    "Elizabethtown's flagship park with 164 acres of lakeside trails, fishing, playgrounds, pavilions, and scenic walking paths along Freeman Lake.",
  "mike-carroll-park":
    "Family-friendly east-side park at 301 Peterson Drive featuring playgrounds, sports fields, basketball courts, and covered pavilions.",
  "university-drive-park":
    "Neighborhood playground at 1527 University Drive designed for children ages 5-12, with swings, climbing structures, and open green space.",
  "haycraft-park":
    "Quiet neighborhood park on Haycraft Street with a playground, benches, and open green space in central Elizabethtown.",
  "pritchard-community-center":
    "Community recreation hub at 404 South Mulberry offering a gymnasium, fitness classes, youth programs, senior activities, and event rentals.",
  "nature-park":
    "Wooded nature retreat on Elizabethtown's south side with hiking trails, wildlife observation, and interpretive signage for nature study.",
  "saunders-springs":
    "Scenic nature preserve southwest of Elizabethtown featuring natural springs, limestone formations, diverse wildlife, and forested hiking trails.",
};

const parkTypes: Record<string, string> = {
  "freeman-lake-park": "Lakeside Park",
  "mike-carroll-park": "Community Park",
  "university-drive-park": "Neighborhood Park",
  "haycraft-park": "Neighborhood Park",
  "pritchard-community-center": "Community Center",
  "nature-park": "Nature Park",
  "saunders-springs": "Nature Preserve",
};

export default function ParksRecreationHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Elizabethtown", href: "/elizabethtown/" },
          { label: "Parks & Recreation" },
        ]}
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Parks &amp; Recreation in Elizabethtown, KY
          </h1>
          <p className="text-lg text-gray-body mb-4">
            Elizabethtown&apos;s parks system offers something for everyone — from the 164-acre
            lakeside expanse of{" "}
            <Link
              href="/elizabethtown/parks-recreation/freeman-lake-park/"
              className="text-navy font-semibold hover:text-gold-dark"
            >
              Freeman Lake Park
            </Link>{" "}
            to wooded hiking trails at{" "}
            <Link
              href="/elizabethtown/parks-recreation/saunders-springs/"
              className="text-navy font-semibold hover:text-gold-dark"
            >
              Saunders Springs Nature Preserve
            </Link>
            . Managed by the Elizabethtown Parks and Recreation Department, these seven parks and
            facilities provide free or low-cost outdoor recreation, organized sports, community
            programs, and nature experiences throughout the year.
          </p>
          <p className="text-gray-body mb-8">
            For families relocating to E-town — especially those{" "}
            <Link
              href="/fort-knox/"
              className="text-navy font-semibold hover:text-gold-dark"
            >
              PCSing to Fort Knox
            </Link>{" "}
            — access to quality parks and recreation is a major factor in choosing a neighborhood.
            Below you&apos;ll find detailed guides for each park, including amenities, activities,
            nearby neighborhoods, and practical visiting information to help you evaluate the
            outdoor lifestyle in different parts of the city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {parks.map((p) => (
              <Link
                key={p.slug}
                href={`/elizabethtown/parks-recreation/${p.slug}/`}
                className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
              >
                <h2 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                  {p.name}
                </h2>
                <div className="text-xs text-gray-medium space-y-1 mb-3">
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {parkTypes[p.slug] || "Park"}
                  </p>
                  <p>
                    <span className="font-semibold">Neighborhoods:</span>{" "}
                    {p.nearbyNeighborhoods.map((n) => n.name).join(", ") || "Citywide"}
                  </p>
                </div>
                <p className="text-sm text-gray-body line-clamp-3">
                  {parkSummaries[p.slug] || p.overview.slice(0, 180) + "..."}
                </p>
                <span className="inline-block mt-3 text-sm text-gold font-medium">
                  Read full guide →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-navy rounded-lg p-6 text-white">
            <h2 className="text-xl font-bold text-white mb-2">
              Find a Home Near Your Favorite Park
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Whether you want a lakeside walk at Freeman Lake, nature trails at Saunders Springs,
              or a neighborhood playground your kids can walk to, the right home is out there.
              Austin Kutz at{" "}
              <Link
                href="/realtors/compass-and-key-group/"
                className="text-gold hover:text-gold-light"
              >
                Compass and Key Group
              </Link>{" "}
              is a veteran who knows every corner of Elizabethtown. He can match your outdoor
              lifestyle priorities with the perfect neighborhood and home.
            </p>
            <a
              href="tel:2707353897"
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Call (270) 735-3897
            </a>
          </div>
        </main>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <CKGWidget />
            <div className="bg-gray-light rounded-lg p-5">
              <h3 className="font-bold text-navy mb-3">Explore More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/elizabethtown/neighborhoods/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Neighborhoods Guide →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/elizabethtown/schools/"
                    className="text-navy hover:text-gold-dark"
                  >
                    School Guides →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/elizabethtown/things-to-do/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Things to Do →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/elizabethtown/cost-of-living/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Cost of Living →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fort-knox/military-relocation-guide/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Fort Knox Relocation →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
