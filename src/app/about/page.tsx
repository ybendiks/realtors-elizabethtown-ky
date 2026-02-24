import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { CKG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Elizabethtown Realtor Directory",
  description:
    "Learn about the Elizabethtown, KY realtor directory — a free local resource for finding real estate agents, neighborhoods, schools, and military relocation guides.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "About" }]}
      sidebar={{
        relatedPages: [
          { label: "Find a Realtor", href: "/realtors/" },
          { label: "Compass and Key Group", href: CKG.profileUrl },
          { label: "Contact Us", href: "/contact/" },
          { label: "Elizabethtown Overview", href: "/elizabethtown/" },
        ],
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        About the Elizabethtown Realtor Directory
      </h1>

      <p className="text-lg text-gray-body mb-6 leading-relaxed">
        Welcome to Realtors in Elizabethtown, KY — your free, comprehensive resource for finding real
        estate agents and exploring everything the Elizabethtown and Fort Knox area has to offer. Whether
        you&apos;re buying, selling, relocating with the military, or simply researching the area, this site
        was built with you in mind.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">What You&apos;ll Find Here</h2>
      <p className="text-gray-body mb-4">
        This isn&apos;t a generic real estate portal. Every page on this site is focused specifically on
        Elizabethtown, Kentucky and the surrounding Hardin County area. We cover the topics that actually
        matter when you&apos;re considering a move to E-town:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-body mb-6">
        <li>
          <strong>Local Realtor Directory:</strong> Browse profiles of established real estate agencies
          serving Elizabethtown, including detailed information about their specialties and service areas.
        </li>
        <li>
          <strong>Neighborhood Guides:</strong> In-depth profiles of 14 Elizabethtown neighborhoods, from
          established communities like Helmwood Heights to newer developments like Foxwood.
        </li>
        <li>
          <strong>School Information:</strong> Guides to Hardin County Schools, Elizabethtown Independent,
          and Fort Knox DoDEA schools — with attendance zones and programs that matter to families.
        </li>
        <li>
          <strong>Fort Knox &amp; Military Resources:</strong> Over 30 pages dedicated to military
          relocation, including PCS guides, BAH rates, VA loan information, and off-post housing options.
        </li>
        <li>
          <strong>Market Data &amp; Buying/Selling Guides:</strong> Local real estate market trends,
          first-time buyer guides, and seller resources tailored to the Hardin County market.
        </li>
        <li>
          <strong>Community Lifestyle:</strong> Parks, restaurants, events, cost of living, commuting, and
          everything else that shapes daily life in E-town.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Why This Directory Exists</h2>
      <p className="text-gray-body mb-4">
        Finding the right real estate agent in a new city can be overwhelming — especially if you&apos;re
        making a military PCS move with limited time to research. We created this directory to be the single
        resource that answers the questions people actually ask when considering Elizabethtown: What are the
        neighborhoods like? Which schools should I look at? Can my BAH cover a mortgage? What&apos;s the
        commute to Fort Knox?
      </p>
      <p className="text-gray-body mb-6">
        Every piece of content is written with local knowledge — referencing specific streets, landmarks,
        and real data. We aim to be the most helpful Elizabethtown real estate resource on the internet.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Our Featured Agency</h2>
      <p className="text-gray-body mb-4">
        <Link href={CKG.profileUrl} className="text-navy font-semibold hover:text-gold-dark">
          Compass and Key Group
        </Link>
        , led by USMC veteran Austin Kutz, is our featured real estate agency. As a veteran-owned team with
        deep roots in the Elizabethtown and Fort Knox community, CKG exemplifies the kind of local expertise
        and client-first approach that defines great real estate service in this market. Their specialties
        include military relocation, VA loans, first-time homebuyers, and investment properties.
      </p>
      <p className="text-gray-body mb-8">
        You can reach Compass and Key Group at{" "}
        <a href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`} className="text-navy font-semibold">
          {CKG.phone}
        </a>{" "}
        or visit their office at {CKG.address}.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Accuracy &amp; Updates</h2>
      <p className="text-gray-body mb-4">
        We strive to keep all information on this site current and accurate. Real estate markets change,
        BAH rates update annually, and new developments come to the area. If you spot anything that needs
        updating, please{" "}
        <Link href="/contact/" className="text-navy font-semibold hover:text-gold-dark">
          contact us
        </Link>
        .
      </p>
      <p className="text-gray-body">
        All market data, school information, and community details are sourced from public records, official
        government resources, and local knowledge. Individual agent information is gathered from public
        business listings and is presented for informational purposes.
      </p>
    </ContentLayout>
  );
}
