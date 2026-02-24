import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import QuickFacts from "@/components/QuickFacts";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { neighborhoods } from "@/data/neighborhoods";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = neighborhoods.find((n) => n.slug === slug);
  if (!n) return {};
  return {
    title: `${n.name} | Elizabethtown KY Neighborhood Guide`,
    description: `Guide to ${n.name} in Elizabethtown, KY. Home prices ${n.quickFacts["Price Range"]}, schools, commute times, and what it's like to live here.`,
    alternates: { canonical: `/elizabethtown/neighborhoods/${slug}/` },
    openGraph: {
      title: `${n.name} | Elizabethtown KY Neighborhood Guide`,
      description: `Guide to ${n.name} in Elizabethtown, KY. Home prices ${n.quickFacts["Price Range"]}.`,
      url: `${SITE_URL}/elizabethtown/neighborhoods/${slug}/`,
    },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const n = neighborhoods.find((n) => n.slug === slug);
  if (!n) notFound();

  const related = [
    { label: "All Neighborhoods", href: "/elizabethtown/neighborhoods/" },
    { label: "Elizabethtown Overview", href: "/elizabethtown/" },
    { label: "Schools Guide", href: "/elizabethtown/schools/" },
    { label: "Fort Knox Guide", href: "/fort-knox/" },
    ...n.nearbySchools.map((s) => ({ label: s.name, href: s.href })),
    ...n.nearbyParks.map((p) => ({ label: p.name, href: p.href })),
  ];

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
        { label: n.name },
      ]}
      sidebar={{ relatedPages: related, relatedTitle: "Related Guides" }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Place",
          name: `${n.name}, Elizabethtown, KY`,
          description: n.overview.slice(0, 200),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Elizabethtown",
            addressRegion: "KY",
          },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        {n.name} — Elizabethtown, KY Neighborhood Guide
      </h1>

      <QuickFacts facts={n.quickFacts} />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Overview</h2>
        <p className="text-gray-body">{n.overview}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Housing Stock &amp; Prices</h2>
        <div className="text-gray-body" dangerouslySetInnerHTML={{ __html: n.housing.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Schools &amp; Families</h2>
        <div className="text-gray-body" dangerouslySetInnerHTML={{ __html: n.schools.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        {n.nearbySchools.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {n.nearbySchools.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-navy hover:text-gold-dark font-medium underline"
              >
                {s.name} →
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Nearby Amenities</h2>
        <div className="text-gray-body" dangerouslySetInnerHTML={{ __html: n.amenities.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        {n.nearbyParks.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {n.nearbyParks.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-sm text-navy hover:text-gold-dark font-medium underline"
              >
                {p.name} →
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Commute &amp; Transportation</h2>
        <div className="text-gray-body" dangerouslySetInnerHTML={{ __html: n.commute.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Who This Neighborhood Is Best For</h2>
        <div className="text-gray-body" dangerouslySetInnerHTML={{ __html: n.bestFor.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </section>

      <div className="bg-gold/10 border-2 border-gold rounded-lg p-6 mt-10">
        <p className="text-gray-body font-medium">{n.ctaText}</p>
      </div>
    </ContentLayout>
  );
}
