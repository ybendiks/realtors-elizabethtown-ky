import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import QuickFacts from "@/components/QuickFacts";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { schools } from "@/data/schools";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = schools.find((s) => s.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} | Elizabethtown KY School Guide`,
    description: `Guide to ${s.name} in Elizabethtown, KY. ${s.quickFacts["Enrollment"] || s.quickFacts["Schools"] || ""}, academics, military family support, and nearby neighborhoods.`,
    alternates: { canonical: `/elizabethtown/schools/${slug}/` },
    openGraph: {
      title: `${s.name} | Elizabethtown KY School Guide`,
      description: `Guide to ${s.name} in Elizabethtown, KY. Academics, military family resources, and nearby neighborhoods.`,
      url: `${SITE_URL}/elizabethtown/schools/${slug}/`,
    },
  };
}

export default async function SchoolPage({ params }: Props) {
  const { slug } = await params;
  const s = schools.find((s) => s.slug === slug);
  if (!s) notFound();

  const related = [
    { label: "All Schools", href: "/elizabethtown/schools/" },
    { label: "Elizabethtown Overview", href: "/elizabethtown/" },
    { label: "Neighborhoods Guide", href: "/elizabethtown/neighborhoods/" },
    { label: "Fort Knox Guide", href: "/fort-knox/" },
    ...s.nearbyNeighborhoods.map((n) => ({ label: n.name, href: n.href })),
  ];

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "Schools", href: "/elizabethtown/schools/" },
        { label: s.name },
      ]}
      sidebar={{ relatedPages: related, relatedTitle: "Related Guides" }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: s.name,
          description: s.overview.slice(0, 200),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Elizabethtown",
            addressRegion: "KY",
          },
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        {s.name} — Elizabethtown, KY School Guide
      </h1>

      <QuickFacts facts={s.quickFacts} />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Overview</h2>
        <p className="text-gray-body">{s.overview}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">Academics &amp; Programs</h2>
        <div
          className="text-gray-body"
          dangerouslySetInnerHTML={{
            __html: s.academics.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">
          Military Family Resources
        </h2>
        <div
          className="text-gray-body"
          dangerouslySetInnerHTML={{
            __html: s.military.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy mb-3">
          Nearby Neighborhoods
        </h2>
        <div
          className="text-gray-body"
          dangerouslySetInnerHTML={{
            __html: s.neighborhoods.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
        {s.nearbyNeighborhoods.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {s.nearbyNeighborhoods.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-navy hover:text-gold-dark font-medium underline"
              >
                {n.name} →
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="bg-gold/10 border-2 border-gold rounded-lg p-6 mt-10">
        <p className="text-gray-body font-medium">{s.ctaText}</p>
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
            View CKG Profile
          </Link>
        </div>
      </div>
    </ContentLayout>
  );
}
