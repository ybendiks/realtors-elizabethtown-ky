import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";
import { thingsToDo } from "@/data/things-to-do";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return thingsToDo.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = thingsToDo.find((t) => t.slug === slug);
  if (!t) return {};
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: `/elizabethtown/things-to-do/${slug}/` },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      url: `${SITE_URL}/elizabethtown/things-to-do/${slug}/`,
    },
  };
}

export default async function ThingToDoPage({ params }: Props) {
  const { slug } = await params;
  const t = thingsToDo.find((t) => t.slug === slug);
  if (!t) notFound();

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
        { label: t.name },
      ]}
      sidebar={{
        relatedPages: [
          { label: "All Things to Do", href: "/elizabethtown/things-to-do/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
          { label: "Fort Knox Guide", href: "/fort-knox/" },
          { label: "Find a Realtor", href: "/realtors/" },
        ],
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{t.name}</h1>

      <p className="text-lg text-gray-body mb-8">{t.intro}</p>

      <h2 className="text-2xl font-bold text-navy mb-4">Top Picks</h2>
      <div className="space-y-4 mb-8">
        {t.picks.map((pick, i) => (
          <div key={i} className="bg-gray-light rounded-lg p-5">
            <h3 className="font-bold text-navy mb-2">{pick.name}</h3>
            <p className="text-sm text-gray-body">{pick.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-navy mb-3">Tips for Newcomers</h2>
      <p className="text-gray-body mb-8">{t.tips}</p>

      <div className="bg-gold/10 border-2 border-gold rounded-lg p-6">
        <p className="text-gray-body font-medium">{t.ctaText}</p>
      </div>
    </ContentLayout>
  );
}
