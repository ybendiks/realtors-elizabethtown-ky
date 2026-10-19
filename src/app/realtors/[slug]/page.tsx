import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, CKG } from "@/lib/constants";
import { realtors } from "@/data/realtors";
import { agentsFor } from "@/data/agents";
import AgentList from "@/components/AgentList";

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
      {/* Only assert a business address and phone when they were confirmed
          against a named source. An unverified entry emits neither. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: realtor.name,
          url: `${SITE_URL}/realtors/${realtor.slug}/`,
          areaServed: realtor.areas,
          ...(realtor.verification.status === "verified" && realtor.address
            ? {
                address: {
                  "@type": "PostalAddress",
                  streetAddress: realtor.address.split(",")[0].trim(),
                  addressLocality: realtor.address.includes("London")
                    ? "London"
                    : "Elizabethtown",
                  addressRegion: "KY",
                },
              }
            : {}),
          ...(realtor.verification.status === "verified" && realtor.phone
            ? { telephone: realtor.phone }
            : {}),
          // Named agents as Person, not a second RealEstateAgent: nesting one
          // agency inside another would describe each person as their own
          // brokerage.
          ...(agentsFor(realtor.slug).length
            ? {
                employee: agentsFor(realtor.slug).map((a) => ({
                  "@type": "Person",
                  name: a.name,
                  telephone: a.phone,
                  worksFor: { "@type": "RealEstateAgent", name: realtor.name },
                })),
              }
            : {}),
        }}
      />

      <h1 className="text-3xl font-bold text-navy mb-4">{realtor.name}</h1>

      {realtor.verification.status === "verified" ? (
        <>
          <div className="bg-gray-light rounded-lg p-5 mb-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {Object.entries(realtor.quickFacts ?? {}).map(([k, v]) => (
                <div key={k}>
                  <dt className="font-semibold text-navy inline">{k}:</dt>{" "}
                  <dd className="text-gray-body inline">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="text-xs text-gray-medium mb-6">
            Office details verified {realtor.verification.checkedOn} against the{" "}
            {realtor.verification.source}.
          </p>
        </>
      ) : (
        <div className="border-l-4 border-gold bg-gold/5 p-4 mb-6">
          <p className="text-gray-body text-sm">
            <strong>Contact details being updated.</strong> We verify every listing against the{" "}
            {realtor.verification.source} and are confirming this one. If you represent this
            brokerage, get in touch and we will update the entry.
          </p>
        </div>
      )}

      <div className="text-gray-body mb-6">
        <p>{realtor.description}</p>
      </div>

      <h2 className="text-xl font-bold text-navy mb-3">Areas Served</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-body mb-6">
        {realtor.areas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>

      <AgentList brokerageSlug={realtor.slug} />

      <h2 className="text-xl font-bold text-navy mb-3">Services</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-body mb-8">
        {realtor.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <div className="bg-navy rounded-lg p-6 mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Want a small team that answers its own phone?
        </h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          {CKG.owner} runs {CKG.name} and is personally involved in every transaction, from
          first-time buyers and move-up families to sellers, investors and PCS moves.{" "}
          {CKG.rating.toFixed(1)} from {CKG.reviewCount} {CKG.reviewSource} reviews, across
          Elizabethtown, Radcliff, Vine Grove and Hardin County.
        </p>
        <a
          href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`}
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors"
          style={{ backgroundColor: "#D4A843", color: "#1B365D" }}
        >
          Call {CKG.phone}
        </a>
      </div>
    </ContentLayout>
  );
}
