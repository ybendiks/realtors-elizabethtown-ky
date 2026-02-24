import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";
import { fortKnoxPages } from "@/data/fort-knox";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fortKnoxPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = fortKnoxPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { canonical: `/fort-knox/${slug}/` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url: `${SITE_URL}/fort-knox/${slug}/`,
    },
  };
}

const fortKnoxRelated = [
  { label: "Fort Knox Hub", href: "/fort-knox/" },
  { label: "PCS Guide", href: "/fort-knox/pcs-guide/" },
  { label: "BAH Rates 2026", href: "/fort-knox/bah-rates/" },
  { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
  { label: "VA Loans", href: "/fort-knox/va-loans-elizabethtown/" },
  { label: "Best Neighborhoods", href: "/fort-knox/best-neighborhoods-military/" },
  { label: "PCS Checklist", href: "/fort-knox/pcs-checklist/" },
  { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
];

export default async function FortKnoxDynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = fortKnoxPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: page.title.length > 40 ? page.metaTitle : page.title },
      ]}
      sidebar={{
        relatedPages: fortKnoxRelated.filter((r) => r.href !== `/fort-knox/${slug}/`),
        relatedTitle: "Fort Knox Guides",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{page.title}</h1>
      <div
        className="prose-etown"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </ContentLayout>
  );
}
