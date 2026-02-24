import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { realtors } from "@/data/realtors";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return realtors.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const realtor = realtors.find((r) => r.slug === slug);
  if (!realtor) return {};
  return {
    title: `${realtor.name} | Elizabethtown KY Realtor`,
    description: `${realtor.name} is a real estate agency serving Elizabethtown, KY and Hardin County. View their profile in our local realtor directory.`,
    alternates: { canonical: `/realtors/${slug}/` },
    openGraph: {
      title: `${realtor.name} | Elizabethtown KY Realtor`,
      description: `${realtor.name} is a real estate agency serving Elizabethtown, KY and Hardin County.`,
      url: `${SITE_URL}/realtors/${slug}/`,
    },
  };
}

export default async function RealtorProfilePage({ params }: Props) {
  const { slug } = await params;
  const realtor = realtors.find((r) => r.slug === slug);
  if (!realtor) notFound();

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Realtors", href: "/realtors/" },
        { label: realtor.name },
      ]}
      sidebar={{
        relatedPages: [
          { label: "View All Realtors", href: "/realtors/" },
          { label: "Compass and Key Group", href: "/realtors/compass-and-key-group/" },
          { label: "Elizabethtown Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Fort Knox Relocation", href: "/fort-knox/" },
        ],
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: realtor.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Elizabethtown",
            addressRegion: "KY",
          },
          telephone: realtor.phone,
          areaServed: realtor.areas,
        }}
      />

      <h1 className="text-3xl font-bold text-navy mb-4">{realtor.name}</h1>

      <div className="bg-gray-light rounded-lg p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="font-semibold text-navy">Address:</span>{" "}
            <span className="text-gray-body">{realtor.address}</span>
          </div>
          <div>
            <span className="font-semibold text-navy">Phone:</span>{" "}
            <span className="text-gray-body">{realtor.phone}</span>
          </div>
        </div>
      </div>

      <div className="text-gray-body mb-6">
        <p>{realtor.description}</p>
      </div>

      <h2 className="text-xl font-bold text-navy mb-3">Areas Served</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-body mb-6">
        {realtor.areas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-navy mb-3">Services</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-body mb-8">
        {realtor.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <div className="bg-gray-light rounded-lg p-5 text-sm text-gray-body">
        <p>
          Looking for a realtor in Elizabethtown?{" "}
          <Link href="/realtors/" className="text-navy font-semibold hover:text-gold-dark">
            Browse our full directory
          </Link>{" "}
          to compare local agencies, or check out our{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-navy font-semibold hover:text-gold-dark">
            featured agency, Compass and Key Group
          </Link>
          , for veteran-owned expertise in the E-town and Fort Knox market.
        </p>
      </div>
    </ContentLayout>
  );
}
