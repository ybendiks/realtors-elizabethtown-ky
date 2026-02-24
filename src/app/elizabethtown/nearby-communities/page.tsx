import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { communities } from "@/data/nearby-communities";

export const metadata: Metadata = {
  title: "Nearby Communities | Elizabethtown KY Area",
  description:
    "Explore communities near Elizabethtown, KY — Hodgenville, Glendale, Cecilia, Rineyville, and Sonora. Compare housing costs, commute times, and lifestyle options.",
  alternates: { canonical: "/elizabethtown/nearby-communities/" },
};

export default function NearbyCommunities() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "Nearby Communities" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
          { label: "Commuting", href: "/elizabethtown/commuting/" },
          { label: "Fort Knox", href: "/fort-knox/" },
          { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
        ],
        relatedTitle: "Related Guides",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Nearby Communities — Towns Around Elizabethtown, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Elizabethtown doesn&apos;t exist in isolation. Several smaller communities surround E-town,
        each offering a different mix of affordability, character, and commute convenience. Whether
        you&apos;re looking for the lowest possible home price, a historic village atmosphere, or a
        quiet rural setting close to{" "}
        <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
          Fort Knox
        </Link>
        , one of these communities might be the right fit.
      </p>

      <p className="text-gray-body mb-8">
        Below you&apos;ll find guides to five communities within a 20-minute drive of E-town. Each
        guide covers housing prices, schools, commute times, and who the area is best suited for.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {communities.map((c) => (
          <Link
            key={c.slug}
            href={`/elizabethtown/nearby-communities/${c.slug}/`}
            className="bg-gray-light rounded-lg p-5 hover:bg-gold/10 transition-colors group"
          >
            <h2 className="font-bold text-navy group-hover:text-gold-dark">{c.name}</h2>
            <p className="text-sm text-gray-medium mt-1">{c.metaDesc.split("—")[1]?.trim() || c.metaDesc}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Quick Comparison</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-border">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3">Community</th>
              <th className="text-left p-3">Distance to E-town</th>
              <th className="text-left p-3">Home Prices</th>
              <th className="text-left p-3">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-border">
              <td className="p-3 font-semibold">Hodgenville</td>
              <td className="p-3">~20 min</td>
              <td className="p-3">$100K–$200K</td>
              <td className="p-3">Maximum affordability, rural character</td>
            </tr>
            <tr className="border-t border-gray-border bg-gray-light">
              <td className="p-3 font-semibold">Glendale</td>
              <td className="p-3">~10 min</td>
              <td className="p-3">$120K–$250K</td>
              <td className="p-3">Historic charm, I-65 access</td>
            </tr>
            <tr className="border-t border-gray-border">
              <td className="p-3 font-semibold">Cecilia</td>
              <td className="p-3">~10 min</td>
              <td className="p-3">$150K–$280K</td>
              <td className="p-3">Central Hardin HS zone, families</td>
            </tr>
            <tr className="border-t border-gray-border bg-gray-light">
              <td className="p-3 font-semibold">Rineyville</td>
              <td className="p-3">~10 min</td>
              <td className="p-3">$130K–$250K</td>
              <td className="p-3">Fort Knox commuters, quiet living</td>
            </tr>
            <tr className="border-t border-gray-border">
              <td className="p-3 font-semibold">Sonora</td>
              <td className="p-3">~15 min</td>
              <td className="p-3">$100K–$200K</td>
              <td className="p-3">Lowest cost, rural acreage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-navy rounded-lg p-6 text-white">
        <h2 className="text-xl font-bold text-white mb-2">Exploring Beyond E-town?</h2>
        <p className="text-gray-300 text-sm mb-4">
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light">
            Compass and Key Group
          </Link>{" "}
          serves the entire greater Hardin County region, including all the communities listed above.
          Whether you&apos;re drawn to Glendale&apos;s historic charm or Rineyville&apos;s Fort Knox
          convenience, their team can help you find the right property.
        </p>
        <a
          href="tel:2707353897"
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
        >
          Call (270) 735-3897
        </a>
      </div>
    </ContentLayout>
  );
}
