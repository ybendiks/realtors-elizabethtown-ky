import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import { SITE_URL } from "@/lib/constants";
import { communities } from "@/data/nearby-communities";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);
  if (!community) return {};
  return {
    title: community.metaTitle,
    description: community.metaDesc,
    alternates: { canonical: `/elizabethtown/nearby-communities/${slug}/` },
    openGraph: {
      title: community.metaTitle,
      description: community.metaDesc,
      url: `${SITE_URL}/elizabethtown/nearby-communities/${slug}/`,
    },
  };
}

const communityRelated = [
  { label: "Nearby Communities", href: "/elizabethtown/nearby-communities/" },
  { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
  { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
  { label: "Commuting", href: "/elizabethtown/commuting/" },
  { label: "Fort Knox", href: "/fort-knox/" },
  { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
];

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);
  if (!community) notFound();

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "Nearby Communities", href: "/elizabethtown/nearby-communities/" },
        { label: community.name },
      ]}
      sidebar={{
        relatedPages: communityRelated.filter(
          (r) => r.href !== `/elizabethtown/nearby-communities/${slug}/`
        ),
        relatedTitle: "Related Guides",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        {community.name} — Community Guide
      </h1>
      <div
        className="prose-etown"
        dangerouslySetInnerHTML={{ __html: community.content }}
      />
    </ContentLayout>
  );
}
