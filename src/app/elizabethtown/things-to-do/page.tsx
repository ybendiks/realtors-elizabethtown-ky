import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CKGWidget from "@/components/CKGWidget";
import { thingsToDo } from "@/data/things-to-do";

export const metadata: Metadata = {
  title: "Things to Do in Elizabethtown, KY",
  description:
    "Discover things to do in Elizabethtown, KY — restaurants, shopping, family activities, events, golf, and nightlife in E-town and the Fort Knox area.",
  alternates: { canonical: "/elizabethtown/things-to-do/" },
};

export default function ThingsToDoHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Elizabethtown", href: "/elizabethtown/" },
          { label: "Things to Do" },
        ]}
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Things to Do in Elizabethtown, KY
          </h1>
          <p className="text-lg text-gray-body mb-4">
            Elizabethtown may be a small city, but it&apos;s far from boring. E-town offers a solid range
            of dining, shopping, family activities, seasonal events, and entertainment options that keep
            residents engaged year-round. Add in Louisville&apos;s world-class attractions just 45 minutes
            up I-65, and you&apos;ve got the best of both worlds — small-town living with big-city access.
          </p>
          <p className="text-gray-body mb-8">
            Whether you&apos;re a longtime resident looking for something new or a newcomer getting oriented,
            these guides cover everything from the best restaurants to where to catch live music on a Friday
            night.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {thingsToDo.map((t) => (
              <Link
                key={t.slug}
                href={`/elizabethtown/things-to-do/${t.slug}/`}
                className="bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
              >
                <h2 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                  {t.name}
                </h2>
                <p className="text-sm text-gray-body line-clamp-3">{t.intro.slice(0, 180)}...</p>
                <span className="inline-block mt-3 text-sm text-gold font-medium">Explore →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-gray-light rounded-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">Moving to E-town?</h2>
            <p className="text-gray-body text-sm mb-3">
              Lifestyle matters when choosing where to live. If you want to be close to E-town&apos;s best
              dining, shopping, and entertainment, let{" "}
              <Link href="/realtors/compass-and-key-group/" className="text-navy font-semibold hover:text-gold-dark">
                Compass and Key Group
              </Link>{" "}
              help you find a home in the right neighborhood. Call Austin Kutz at (270) 735-3897.
            </p>
          </div>
        </main>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <CKGWidget />
            <div className="bg-gray-light rounded-lg p-5">
              <h3 className="font-bold text-navy mb-3">Explore E-town</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/elizabethtown/neighborhoods/" className="text-navy hover:text-gold-dark">Neighborhoods →</Link></li>
                <li><Link href="/elizabethtown/parks-recreation/" className="text-navy hover:text-gold-dark">Parks & Recreation →</Link></li>
                <li><Link href="/elizabethtown/cost-of-living/" className="text-navy hover:text-gold-dark">Cost of Living →</Link></li>
                <li><Link href="/fort-knox/" className="text-navy hover:text-gold-dark">Fort Knox Guide →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
