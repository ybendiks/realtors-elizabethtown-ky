import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CKGWidget from "@/components/CKGWidget";
import RyanWheelerWidget from "@/components/RyanWheelerWidget";
import { schools } from "@/data/schools";

export const metadata: Metadata = {
  title: "Elizabethtown KY Schools | School District Guide for Families",
  description:
    "Complete guide to schools in Elizabethtown, KY. Hardin County Schools, Elizabethtown Independent, and Fort Knox DoDEA schools — enrollment, academics, and military family support.",
  alternates: { canonical: "/elizabethtown/schools/" },
};

const districts = [
  {
    slugs: ["hardin-county-schools"],
    heading: "Hardin County Schools",
    description:
      "The largest district in the area with 28 schools and approximately 14,714 students. Hardin County Schools serves most of the Elizabethtown area outside the city limits, plus Radcliff, Cecilia, Vine Grove, and surrounding communities. Every campus carries the Purple Star designation for military-family support.",
  },
  {
    slugs: ["elizabethtown-independent"],
    heading: "Elizabethtown Independent Schools",
    description:
      "A smaller, community-focused district serving approximately 2,465 students within the Elizabethtown city limits. Families often choose E-town Independent for its smaller class sizes, strong academic reputation, and tight-knit school community.",
  },
  {
    slugs: ["fort-knox-dodea"],
    heading: "Fort Knox DoDEA Schools",
    description:
      "Department of Defense Education Activity schools located on Fort Knox, serving eligible military dependents and DoD civilian families. DoDEA schools offer curriculum continuity for families who move between installations.",
  },
];

export default function SchoolsHub() {
  const highSchools = schools.filter((s) =>
    ["central-hardin-high", "john-hardin-high", "elizabethtown-high", "north-hardin-high"].includes(s.slug)
  );
  const elementarySchools = schools.filter((s) =>
    ["heartland-elementary", "helmwood-heights-elementary"].includes(s.slug)
  );
  const districtOverviews = schools.filter((s) =>
    ["hardin-county-schools", "elizabethtown-independent", "fort-knox-dodea"].includes(s.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Elizabethtown", href: "/elizabethtown/" },
          { label: "Schools" },
        ]}
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Schools in Elizabethtown, KY — Complete Guide for Families
          </h1>
          <p className="text-lg text-gray-body mb-4">
            Families moving to Elizabethtown have access to three distinct school systems:
            the large <strong>Hardin County Schools</strong> district, the smaller
            and community-focused <strong>Elizabethtown Independent Schools</strong>,
            and on-post <strong>DoDEA schools at Fort Knox</strong>. Which system
            your child attends depends primarily on where you live — making school
            choice and home location decisions closely connected.
          </p>
          <p className="text-gray-body mb-4">
            Hardin County Schools is a <strong>Purple Star district</strong>,
            meaning every one of its 28 campuses has been recognized for
            military-friendly enrollment policies, trained staff, and dedicated
            military family liaisons. This designation matters for{" "}
            <Link
              href="/fort-knox/"
              className="text-navy font-semibold hover:text-gold-dark"
            >
              Fort Knox
            </Link>{" "}
            families who want assurance that their children will be supported
            through PCS transitions, deployments, and the other realities of
            military life.
          </p>
          <p className="text-gray-body mb-8">
            Below you will find detailed guides for each district and individual
            school, covering academics, military family resources, and the{" "}
            <Link
              href="/elizabethtown/neighborhoods/"
              className="text-navy font-semibold hover:text-gold-dark"
            >
              neighborhoods
            </Link>{" "}
            that feed into each school. Use these guides to make an informed
            decision about where to live based on your family&apos;s educational
            priorities.
          </p>

          {/* District Overviews */}
          <h2 className="text-2xl font-bold text-navy mb-4">
            School Districts
          </h2>
          <div className="grid grid-cols-1 gap-5 mb-10">
            {districts.map((d) => {
              const school = schools.find((s) => d.slugs.includes(s.slug));
              if (!school) return null;
              return (
                <Link
                  key={school.slug}
                  href={`/elizabethtown/schools/${school.slug}/`}
                  className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
                >
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                    {d.heading}
                  </h3>
                  <p className="text-sm text-gray-body">{d.description}</p>
                  <span className="inline-block mt-3 text-sm text-gold font-medium">
                    Read full guide →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* High Schools */}
          <h2 className="text-2xl font-bold text-navy mb-4">High Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {highSchools.map((s) => (
              <Link
                key={s.slug}
                href={`/elizabethtown/schools/${s.slug}/`}
                className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                  {s.name}
                </h3>
                <div className="text-xs text-gray-medium space-y-1 mb-3">
                  <p>
                    <span className="font-semibold">District:</span>{" "}
                    {s.quickFacts["District"]}
                  </p>
                  <p>
                    <span className="font-semibold">Enrollment:</span>{" "}
                    {s.quickFacts["Enrollment"]}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {s.quickFacts["Location"]}
                  </p>
                </div>
                <p className="text-sm text-gray-body line-clamp-2">
                  {s.overview.slice(0, 150)}...
                </p>
                <span className="inline-block mt-3 text-sm text-gold font-medium">
                  Read full guide →
                </span>
              </Link>
            ))}
          </div>

          {/* Elementary Schools */}
          <h2 className="text-2xl font-bold text-navy mb-4">
            Elementary Schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {elementarySchools.map((s) => (
              <Link
                key={s.slug}
                href={`/elizabethtown/schools/${s.slug}/`}
                className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                  {s.name}
                </h3>
                <div className="text-xs text-gray-medium space-y-1 mb-3">
                  <p>
                    <span className="font-semibold">District:</span>{" "}
                    {s.quickFacts["District"]}
                  </p>
                  <p>
                    <span className="font-semibold">Enrollment:</span>{" "}
                    {s.quickFacts["Enrollment"]}
                  </p>
                  <p>
                    <span className="font-semibold">Feeds Into:</span>{" "}
                    {s.quickFacts["Feeds Into"]}
                  </p>
                </div>
                <p className="text-sm text-gray-body line-clamp-2">
                  {s.overview.slice(0, 150)}...
                </p>
                <span className="inline-block mt-3 text-sm text-gold font-medium">
                  Read full guide →
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-navy rounded-lg p-6 text-white" style={{ backgroundColor: "#1B365D" }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
              Need Help Finding the Right School Zone?
            </h2>
            <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
              School zoning in Elizabethtown depends on your exact home address,
              and district boundaries do not always follow obvious geographic
              lines. Austin Kutz at{" "}
              <Link
                href="/realtors/compass-and-key-group/"
                className="text-gold hover:text-gold-light"
                style={{ color: "#D4A843" }}
              >
                Compass and Key Group
              </Link>{" "}
              has helped dozens of families find homes in the right school
              district. As a veteran-owned agency with deep local knowledge, CKG
              can match your family&apos;s school priorities to the perfect
              neighborhood and home.
            </p>
            <a
              href="tel:2707353897"
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
              style={{ backgroundColor: "#D4A843", color: "#1B365D" }}
            >
              Call (270) 735-3897
            </a>
          </div>
        </main>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <CKGWidget />
            <RyanWheelerWidget />
            <div className="bg-gray-light rounded-lg p-5">
              <h3 className="font-bold text-navy mb-3">Explore More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/elizabethtown/neighborhoods/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Neighborhood Guides →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/elizabethtown/parks-recreation/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Parks &amp; Recreation →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fort-knox/military-relocation-guide/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Military Relocation Guide →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fort-knox/off-post-housing/"
                    className="text-navy hover:text-gold-dark"
                  >
                    Off-Post Housing →
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
