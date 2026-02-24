import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Off-Post Housing Fort Knox | Community Guide",
  description:
    "Compare off-post housing near Fort Knox. Elizabethtown, Radcliff, Vine Grove, and Brandenburg compared by price, commute, schools, and lifestyle.",
  alternates: { canonical: "/fort-knox/off-post-housing/" },
};

export default function OffPostHousing() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Fort Knox", href: "/fort-knox/" },
        { label: "Off-Post Housing" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Fort Knox Overview", href: "/fort-knox/" },
          { label: "PCS to Fort Knox Guide", href: "/fort-knox/pcs-guide/" },
          { label: "2026 BAH Rates", href: "/fort-knox/bah-rates/" },
          { label: "VA Loans in E-town", href: "/fort-knox/va-loans-elizabethtown/" },
          { label: "On-Post vs Off-Post", href: "/fort-knox/on-post-vs-off-post/" },
          { label: "Knox Hills Housing", href: "/fort-knox/knox-hills-housing/" },
          { label: "E-town Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "E-town Schools", href: "/elizabethtown/schools/" },
        ],
        relatedTitle: "Fort Knox Resources",
      }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Off-Post Housing Near Fort Knox, KY",
          description:
            "Comprehensive comparison of off-post housing communities near Fort Knox, KY including Elizabethtown, Radcliff, Vine Grove, and Brandenburg.",
          url: `${SITE_URL}/fort-knox/off-post-housing/`,
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Off-Post Housing Near Fort Knox — Community Comparison
      </h1>

      <p className="text-lg text-gray-body mb-6">
        If you&apos;ve decided to live off-post at Fort Knox — or you&apos;re weighing it against{" "}
        <Link href="/fort-knox/knox-hills-housing/" className="text-navy font-semibold hover:text-gold-dark">
          Knox Hills on-post housing
        </Link>{" "}
        — the next question is <em>where</em>. Four communities surround Fort Knox, each with a
        different character, price point, and commute. This guide breaks them down side by side so
        you can make an informed decision before your boots hit Kentucky soil.
      </p>

      <p className="text-gray-body mb-4">
        The good news: every community listed here is within 20 minutes of Fort Knox&apos;s gates,
        and{" "}
        <Link href="/fort-knox/bah-rates/" className="text-navy font-semibold hover:text-gold-dark">
          BAH at most ranks
        </Link>{" "}
        covers the full cost of housing in all four areas — whether you&apos;re renting or buying
        with a{" "}
        <Link href="/fort-knox/va-loans-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
          VA loan
        </Link>.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white" style={{ backgroundColor: "#1B365D" }}>
              <th className="text-left p-3 font-semibold" style={{ color: "#ffffff" }}>Community</th>
              <th className="text-center p-3 font-semibold" style={{ color: "#ffffff" }}>Drive to Knox</th>
              <th className="text-center p-3 font-semibold" style={{ color: "#ffffff" }}>Median Home</th>
              <th className="text-center p-3 font-semibold" style={{ color: "#ffffff" }}>Avg Rent (3BR)</th>
              <th className="text-center p-3 font-semibold" style={{ color: "#ffffff" }}>Population</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Elizabethtown</td>
              <td className="p-3 text-center text-gray-body">~15 min</td>
              <td className="p-3 text-center text-gray-body">~$250,000</td>
              <td className="p-3 text-center text-gray-body">$1,100-$1,300</td>
              <td className="p-3 text-center text-gray-body">~33,000</td>
            </tr>
            <tr className="bg-gray-light border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Radcliff</td>
              <td className="p-3 text-center text-gray-body">~5 min</td>
              <td className="p-3 text-center text-gray-body">~$195,000</td>
              <td className="p-3 text-center text-gray-body">$950-$1,150</td>
              <td className="p-3 text-center text-gray-body">~23,000</td>
            </tr>
            <tr className="bg-white border-b border-gray-border">
              <td className="p-3 font-semibold text-navy">Vine Grove</td>
              <td className="p-3 text-center text-gray-body">~10 min</td>
              <td className="p-3 text-center text-gray-body">~$185,000</td>
              <td className="p-3 text-center text-gray-body">$900-$1,100</td>
              <td className="p-3 text-center text-gray-body">~7,000</td>
            </tr>
            <tr className="bg-gray-light">
              <td className="p-3 font-semibold text-navy">Brandenburg</td>
              <td className="p-3 text-center text-gray-body">~20 min</td>
              <td className="p-3 text-center text-gray-body">~$210,000</td>
              <td className="p-3 text-center text-gray-body">$900-$1,100</td>
              <td className="p-3 text-center text-gray-body">~3,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Elizabethtown */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Elizabethtown — 15 Minutes South</h2>
      <p className="text-gray-body mb-4">
        Elizabethtown — &quot;E-town&quot; — is the largest community near Fort Knox and where most
        military families choose to live. The city of roughly <strong>33,000 residents</strong> sits
        about 15 minutes south of Fort Knox&apos;s main gate via US-31W. It is the Hardin County
        seat and the commercial center of the region, which means you will find everything you need
        here without driving to Louisville.
      </p>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Why Families Choose E-town</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Most amenities:</strong> E-town has the best selection of restaurants, shopping
          (Towne Mall, Ring Road corridor), grocery stores, medical facilities (Baptist Health
          Hardin), and entertainment in the area.
        </li>
        <li>
          <strong>School quality:</strong> Families can choose between{" "}
          <Link href="/elizabethtown/schools/" className="text-navy font-semibold hover:text-gold-dark">
            Hardin County Schools
          </Link>{" "}
          and Elizabethtown Independent Schools, both with strong reputations and Purple Star
          designations for military family support.
        </li>
        <li>
          <strong>Neighborhood variety:</strong> From established communities like Helmwood Heights
          to newer developments like Foxwood and Nicholas Ridge, E-town has{" "}
          <Link href="/elizabethtown/neighborhoods/" className="text-navy font-semibold hover:text-gold-dark">
            14 distinct neighborhoods
          </Link>{" "}
          across every price range.
        </li>
        <li>
          <strong>Louisville access:</strong> E-town sits right on I-65, putting Louisville about
          45 minutes north for those who want occasional access to a larger city.
        </li>
      </ul>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Considerations</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Slightly longer commute to Fort Knox compared to Radcliff or Vine Grove (15-20 minutes vs 5-10).</li>
        <li>Higher home prices than Radcliff or Vine Grove, though still very affordable by national standards.</li>
        <li>More traffic congestion along Ring Road and N Dixie Avenue during peak hours.</li>
      </ul>
      <div className="bg-gray-light rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-body">
          <strong>Median home price:</strong> ~$250,000 | <strong>Average 3BR rent:</strong> $1,100-$1,300/mo | <strong>Commute:</strong> ~15 min via US-31W
        </p>
      </div>

      {/* Radcliff */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Radcliff — 5 Minutes from the Gate</h2>
      <p className="text-gray-body mb-4">
        Radcliff is the closest community to Fort Knox and the most military-concentrated town in
        the area. With a population of about <strong>23,000</strong>, it sits immediately south of
        the installation&apos;s main entrance along US-31W. If you want the shortest commute
        possible while still living off-post, Radcliff is your answer.
      </p>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Why Families Choose Radcliff</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Proximity:</strong> You can be at work in 5 minutes. For early-morning PT
          formations or unexpected recalls, nothing beats being this close.
        </li>
        <li>
          <strong>Affordability:</strong> Radcliff&apos;s median home price of roughly $195,000 is
          significantly lower than E-town, meaning more BAH stays in your pocket or goes toward
          equity faster.
        </li>
        <li>
          <strong>Military community:</strong> Radcliff has a very high percentage of
          military-connected residents. Your neighbors understand the lifestyle, and the community
          is geared toward service members and their families.
        </li>
        <li>
          <strong>Decent schools:</strong> North Hardin High School and John Hardin High School are
          both in the area, with strong JROTC programs and military family support.
        </li>
      </ul>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Considerations</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Fewer restaurants, shopping, and entertainment options compared to Elizabethtown.</li>
        <li>The town has a more utilitarian feel — strip malls and chain restaurants dominate the commercial corridor.</li>
        <li>Some neighborhoods show their age and lack the curb appeal of E-town&apos;s newer developments.</li>
        <li>Property values have historically appreciated more slowly than Elizabethtown.</li>
      </ul>
      <div className="bg-gray-light rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-body">
          <strong>Median home price:</strong> ~$195,000 | <strong>Average 3BR rent:</strong> $950-$1,150/mo | <strong>Commute:</strong> ~5 min via US-31W
        </p>
      </div>

      {/* Vine Grove */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Vine Grove — 10 Minutes, Small-Town Feel</h2>
      <p className="text-gray-body mb-4">
        Vine Grove is a small town of about <strong>7,000 residents</strong> located roughly 10
        minutes west of Fort Knox along KY-313. It offers a quieter, more rural alternative to
        Radcliff and Elizabethtown — the kind of place where you know your neighbors and kids ride
        bikes in the street.
      </p>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Why Families Choose Vine Grove</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Most affordable option:</strong> With a median home price around $185,000, Vine
          Grove offers the most house for the money. An E-5&apos;s BAH would leave significant
          breathing room each month.
        </li>
        <li>
          <strong>Quiet, family-friendly atmosphere:</strong> Vine Grove has a genuine small-town
          character that many military families appreciate after living near busier installations.
        </li>
        <li>
          <strong>Reasonable commute:</strong> At 10 minutes to Fort Knox, you get the small-town
          feel without a painful drive.
        </li>
        <li>
          <strong>Larger lots:</strong> Properties in Vine Grove tend to have more land than
          comparable homes in Radcliff or E-town.
        </li>
      </ul>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Considerations</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Very limited commercial amenities — you will drive to Radcliff or E-town for most shopping and dining.</li>
        <li>Fewer neighborhood options and less housing inventory when searching.</li>
        <li>Slower appreciation rates compared to E-town, though the lower entry price offsets this.</li>
      </ul>
      <div className="bg-gray-light rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-body">
          <strong>Median home price:</strong> ~$185,000 | <strong>Average 3BR rent:</strong> $900-$1,100/mo | <strong>Commute:</strong> ~10 min via KY-313
        </p>
      </div>

      {/* Brandenburg */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Brandenburg — 20 Minutes, Room to Breathe</h2>
      <p className="text-gray-body mb-4">
        Brandenburg is the Meade County seat, a small Ohio River town of about <strong>3,000
        residents</strong> located roughly 20 minutes northeast of Fort Knox. It is the most rural
        option and the farthest from post, but it offers something the other communities
        don&apos;t: space, privacy, and a distinctly non-military atmosphere.
      </p>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Why Families Choose Brandenburg</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>
          <strong>Larger properties:</strong> If you want acreage, a big yard, or a home away from
          subdivisions, Brandenburg and surrounding Meade County deliver. Multi-acre lots are common
          and affordable.
        </li>
        <li>
          <strong>Ohio River access:</strong> Outdoor enthusiasts appreciate the river access,
          fishing, boating, and the natural beauty of the area. Otter Creek Outdoor Recreation Area
          is nearby.
        </li>
        <li>
          <strong>Non-military vibe:</strong> Some families prefer a community where the military
          presence is less dominant. Brandenburg offers a more typical rural Kentucky experience.
        </li>
        <li>
          <strong>Moderate prices:</strong> The median home price of roughly $210,000 reflects
          the larger lot sizes and rural character.
        </li>
      </ul>
      <h3 className="text-lg font-bold text-navy mt-6 mb-2">Considerations</h3>
      <ul className="list-disc pl-6 text-gray-body mb-4 space-y-2">
        <li>Longest commute of the four communities — 20-25 minutes to Fort Knox in good conditions.</li>
        <li>Meade County Schools (not Hardin County), which may have different programs and ratings.</li>
        <li>Very limited local shopping and dining — you will rely on E-town or Radcliff for most errands.</li>
        <li>More isolated feel that some families find too quiet, especially those accustomed to on-post life.</li>
      </ul>
      <div className="bg-gray-light rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-body">
          <strong>Median home price:</strong> ~$210,000 | <strong>Average 3BR rent:</strong> $900-$1,100/mo | <strong>Commute:</strong> ~20 min via US-31W N
        </p>
      </div>

      {/* Decision Guide */}
      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Which Community Is Right for You?</h2>
      <div className="space-y-3 mb-8">
        <div className="bg-gray-light rounded-lg p-4">
          <p className="text-sm text-gray-body">
            <strong className="text-navy">Best overall for families:</strong> Elizabethtown — the
            most schools, neighborhoods, amenities, and long-term home value appreciation.
          </p>
        </div>
        <div className="bg-gray-light rounded-lg p-4">
          <p className="text-sm text-gray-body">
            <strong className="text-navy">Shortest commute:</strong> Radcliff — 5 minutes to the
            gate, military-friendly community, most affordable rentals.
          </p>
        </div>
        <div className="bg-gray-light rounded-lg p-4">
          <p className="text-sm text-gray-body">
            <strong className="text-navy">Most affordable to buy:</strong> Vine Grove — lowest
            median home prices, small-town charm, reasonable 10-minute commute.
          </p>
        </div>
        <div className="bg-gray-light rounded-lg p-4">
          <p className="text-sm text-gray-body">
            <strong className="text-navy">Most space and privacy:</strong> Brandenburg — acreage,
            river access, rural character, but the longest commute.
          </p>
        </div>
      </div>
      <p className="text-gray-body mb-4">
        Still weighing your options? Our{" "}
        <Link href="/fort-knox/on-post-vs-off-post/" className="text-navy font-semibold hover:text-gold-dark">
          on-post vs off-post comparison
        </Link>{" "}
        can help you decide whether to go off-post at all, and the{" "}
        <Link href="/fort-knox/pcs-guide/" className="text-navy font-semibold hover:text-gold-dark">
          PCS guide
        </Link>{" "}
        covers the full moving timeline.
      </p>

      {/* CKG CTA */}
      <div className="bg-navy rounded-lg p-6 text-white mt-10" style={{ backgroundColor: "#1B365D" }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Find Your Off-Post Home Near Fort Knox</h2>
        <p className="text-sm mb-4" style={{ color: "#d1d5db" }}>
          Austin Kutz at{" "}
          <Link href="/realtors/compass-and-key-group/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            Compass and Key Group
          </Link>{" "}
          is a Marine Corps veteran who helps military families find the right home in the right
          community. Whether you&apos;re drawn to E-town&apos;s neighborhoods, Radcliff&apos;s
          proximity, Vine Grove&apos;s charm, or Brandenburg&apos;s open spaces, Austin knows
          every corner of the Fort Knox area and can match your{" "}
          <Link href="/fort-knox/bah-rates/" className="text-gold hover:text-gold-light" style={{ color: "#D4A843" }}>
            BAH budget
          </Link>{" "}
          to a home your family will love.
        </p>
        <a
          href="tel:2707353897"
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
          style={{ backgroundColor: "#D4A843", color: "#1B365D" }}
        >
          Call (270) 735-3897
        </a>
      </div>
    </ContentLayout>
  );
}
