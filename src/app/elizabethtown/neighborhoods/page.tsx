import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CKGWidget from "@/components/CKGWidget";
import { neighborhoods } from "@/data/neighborhoods";

export const metadata: Metadata = {
  title: "Elizabethtown KY Neighborhoods | Best Areas to Live",
  description:
    "Explore 14 Elizabethtown, KY neighborhoods. Detailed guides covering housing, schools, prices, and commute times for every E-town community.",
  alternates: { canonical: "/elizabethtown/neighborhoods/" },
};

export default function NeighborhoodsHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Elizabethtown", href: "/elizabethtown/" },
          { label: "Neighborhoods" },
        ]}
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Best Neighborhoods in Elizabethtown, KY
          </h1>
          <p className="text-lg text-gray-body mb-4">
            Elizabethtown offers a wide range of neighborhoods — from historic downtown bungalows to luxury
            new construction on acre-plus lots. Whether you&apos;re a military family PCSing to{" "}
            <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">Fort Knox</Link>,
            a first-time buyer on a budget, or looking for an upscale family home, there&apos;s a community
            here that fits your lifestyle and price range.
          </p>
          <p className="text-gray-body mb-8">
            Below you&apos;ll find detailed guides for 14 E-town neighborhoods covering housing stock,
            price ranges, schools, commute times, and who each neighborhood is best for. Each guide includes
            specific local data to help you make an informed decision about where to live.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/elizabethtown/neighborhoods/${n.slug}/`}
                className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
              >
                <h2 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                  {n.name}
                </h2>
                <div className="text-xs text-gray-medium space-y-1 mb-3">
                  <p><span className="font-semibold">Price Range:</span> {n.quickFacts["Price Range"]}</p>
                  <p><span className="font-semibold">Home Types:</span> {n.quickFacts["Home Types"]}</p>
                  <p><span className="font-semibold">Fort Knox:</span> {n.quickFacts["Distance to Fort Knox"]}</p>
                </div>
                <p className="text-sm text-gray-body line-clamp-2">{n.overview.slice(0, 150)}...</p>
                <span className="inline-block mt-3 text-sm text-gold font-medium">Read full guide →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-navy rounded-lg p-6 text-white" style={{ backgroundColor: "#1B365D" }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Need Help Choosing a Neighborhood?</h2>
            <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
              Every family has different priorities — school districts, commute times, lot sizes, and budget.
              Austin Kutz at{" "}
              <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
                Compass and Key Group
              </Link>{" "}
              has helped dozens of families find the right neighborhood in Elizabethtown. As a veteran who
              knows E-town inside and out, he can match your needs to the perfect community.
            </p>
            <a
              href="tel:2707353897"
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
              style={{ backgroundColor: "#D4A843", color: "#1B365D" }}
            >
              Call (270) 735-3897
            </a>
          </div>
        </main>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <CKGWidget />
            <div className="bg-gray-light rounded-lg p-5">
              <h3 className="font-bold text-navy mb-3">Explore More</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/elizabethtown/schools/" className="text-navy hover:text-gold-dark">School Guides →</Link></li>
                <li><Link href="/elizabethtown/parks-recreation/" className="text-navy hover:text-gold-dark">Parks & Recreation →</Link></li>
                <li><Link href="/elizabethtown/cost-of-living/" className="text-navy hover:text-gold-dark">Cost of Living →</Link></li>
                <li><Link href="/fort-knox/best-neighborhoods-military/" className="text-navy hover:text-gold-dark">Best for Military →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
