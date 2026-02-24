import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import QuickFacts from "@/components/QuickFacts";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { parks } from "@/data/parks";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return parks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = parks.find((p) => p.slug === slug);
  if (!p) return {};

  const title =
    p.slug === "pritchard-community-center"
      ? "Pritchard Community Center | E-town KY"
      : p.slug === "saunders-springs"
        ? "Saunders Springs Preserve | E-town KY"
        : `${p.name} | Elizabethtown KY Parks`;

  const description = `${p.name} in Elizabethtown, KY — trails, amenities, activities, and nearby neighborhoods. Plan your visit to one of E-town's favorite parks.`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical: `/elizabethtown/parks-recreation/${slug}/` },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: `${SITE_URL}/elizabethtown/parks-recreation/${slug}/`,
    },
  };
}

export default async function ParkPage({ params }: Props) {
  const { slug } = await params;
  const p = parks.find((p) => p.slug === slug);
  if (!p) notFound();

  const quickFacts: Record<string, string> = {
    "Park": p.name,
    "Location": slug === "freeman-lake-park"
      ? "Freeman Lake Road, Elizabethtown, KY"
      : slug === "mike-carroll-park"
        ? "301 Peterson Dr, Elizabethtown, KY"
        : slug === "university-drive-park"
          ? "1527 University Dr, Elizabethtown, KY"
          : slug === "haycraft-park"
            ? "Haycraft Street, Elizabethtown, KY"
            : slug === "pritchard-community-center"
              ? "404 S Mulberry St, Elizabethtown, KY"
              : slug === "nature-park"
                ? "Elizabethtown, KY (south side)"
                : "Southwest of Elizabethtown, KY",
    "Type": slug === "pritchard-community-center"
      ? "Community Center & Recreation"
      : slug === "nature-park" || slug === "saunders-springs"
        ? "Nature Preserve & Trails"
        : slug === "freeman-lake-park"
          ? "Lakeside Park (~164 acres)"
          : "Neighborhood Park",
    "Managed By": "E-town Parks & Recreation",
    "Admission": "Free",
    "Hours": slug === "pritchard-community-center"
      ? "Varies by program — call (270) 765-6121"
      : "Dawn to dusk, daily",
  };

  const related = [
    { label: "All Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
    { label: "Elizabethtown Overview", href: "/elizabethtown/" },
    { label: "Neighborhoods Guide", href: "/elizabethtown/neighborhoods/" },
    { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
    ...p.nearbyNeighborhoods.map((n) => ({ label: n.name, href: n.href })),
  ];

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
        { label: p.name },
      ]}
      sidebar={{ relatedPages: related, relatedTitle: "Related Guides" }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": slug === "pritchard-community-center" ? "CivicStructure" : "Park",
          name: `${p.name}, Elizabethtown, KY`,
          description: p.overview.slice(0, 200),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Elizabethtown",
            addressRegion: "KY",
            addressCountry: "US",
          },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        {p.name} — Elizabethtown, KY
      </h1>

      <QuickFacts facts={quickFacts} />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Overview</h2>
        <p className="text-gray-body">{p.overview}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Amenities &amp; Facilities</h2>
        <div
          className="text-gray-body"
          dangerouslySetInnerHTML={{
            __html: p.amenities.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Activities &amp; Things to Do</h2>
        <div
          className="text-gray-body"
          dangerouslySetInnerHTML={{
            __html: p.activities.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Visiting &amp; Practical Info</h2>
        <div
          className="text-gray-body"
          dangerouslySetInnerHTML={{
            __html: p.visiting.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </section>

      {p.nearbyNeighborhoods.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-navy mb-3">Nearby Neighborhoods</h2>
          <p className="text-gray-body mb-3">
            Explore the Elizabethtown neighborhoods closest to {p.name}:
          </p>
          <div className="flex flex-wrap gap-2">
            {p.nearbyNeighborhoods.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-navy hover:text-gold-dark font-medium underline"
              >
                {n.name} →
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="bg-gold/10 border-2 border-gold rounded-lg p-6 mt-10">
        <p className="text-gray-body font-medium">{p.ctaText}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="tel:2707353897"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
          >
            Call (270) 735-3897
          </a>
          <Link
            href="/realtors/compass-and-key-group/"
            className="inline-block bg-navy hover:bg-navy/90 text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
          >
            View CKG Profile →
          </Link>
        </div>
      </div>
    </ContentLayout>
  );
}
