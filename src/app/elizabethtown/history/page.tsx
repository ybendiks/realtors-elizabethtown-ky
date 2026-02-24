import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";

export const metadata: Metadata = {
  title: "History of Elizabethtown, KY",
  description:
    "The history of Elizabethtown, KY from its 1797 founding through the Civil War, the railroad era, Fort Knox, and modern growth along the I-65 corridor.",
  alternates: { canonical: "/elizabethtown/history/" },
};

export default function History() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Elizabethtown", href: "/elizabethtown/" },
        { label: "History" },
      ]}
      sidebar={{
        relatedPages: [
          { label: "Area Overview", href: "/elizabethtown/" },
          { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
          { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
          { label: "Fort Knox", href: "/fort-knox/" },
          { label: "Nearby Communities", href: "/elizabethtown/nearby-communities/" },
          { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
        ],
        relatedTitle: "Related Pages",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        History of Elizabethtown, KY
      </h1>

      <p className="text-lg text-gray-body mb-6">
        Elizabethtown&apos;s story stretches back more than two centuries, from a frontier
        settlement on the edge of the Kentucky wilderness to a modern city shaped by railroads,
        war, military installations, and interstate highways. Understanding that history helps
        explain why E-town looks and feels the way it does today — and why it continues to draw new
        residents who recognize the same qualities that attracted settlers more than 200 years ago.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Founding and Early Settlement (1790s-1830s)
      </h2>
      <p className="text-gray-body mb-4">
        Elizabethtown was <strong>founded in 1797</strong> and established as the seat of Hardin
        County. The city is named for <strong>Elizabeth Hynes</strong>, the wife of Colonel Andrew
        Hynes, who donated the land on which the original town was built. The site was chosen for
        its location along the main road connecting Louisville to Nashville, making it a natural
        stopping point for travelers heading through the Kentucky interior.
      </p>
      <p className="text-gray-body mb-4">
        In its earliest decades, Elizabethtown was a small but strategically placed frontier town.
        The county courthouse, a handful of taverns, a general store, and a few churches made up
        the core. Farming — particularly tobacco, corn, and livestock — drove the local economy,
        and the surrounding Hardin County landscape was a patchwork of family farms carved from the
        hardwood forests that once blanketed the region.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        The Lincoln Connection
      </h2>
      <p className="text-gray-body mb-4">
        Abraham Lincoln&apos;s ties to the Elizabethtown area run deep. Lincoln&apos;s father,
        Thomas Lincoln, lived and worked as a carpenter in Elizabethtown before moving the family
        to the nearby Sinking Spring Farm, where Abraham was born in 1809. The Abraham Lincoln
        Birthplace National Historical Park is located in <strong>Hodgenville</strong>, just 12
        miles east of E-town on Lincoln Parkway. Thomas Lincoln later returned to the
        Elizabethtown area, and several Lincoln family sites can still be visited in and around
        Hardin County.
      </p>
      <p className="text-gray-body mb-4">
        This connection to the 16th president is a point of local pride, and visitors to the area
        can follow the Lincoln Heritage Trail that links sites across central Kentucky. The Hardin
        County History Museum in downtown E-town preserves artifacts and records from this era.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        The Civil War in Elizabethtown
      </h2>
      <p className="text-gray-body mb-4">
        Kentucky&apos;s position as a border state made it a contested battleground during the
        Civil War, and Elizabethtown saw direct military action. In December 1862, Confederate
        General John Hunt Morgan led a cavalry raid through central Kentucky that targeted
        the <strong>Louisville and Nashville Railroad</strong> supply line. Morgan&apos;s forces
        attacked the Union garrison at Elizabethtown on December 27, 1862, shelling the town and
        forcing the roughly 650 Union soldiers defending it to surrender after a brief but intense
        engagement.
      </p>
      <p className="text-gray-body mb-4">
        Morgan&apos;s raiders destroyed railroad bridges and trestles in the area before continuing
        their ride north, disrupting Union supply lines for weeks. The raid left a lasting mark on
        the community, and Civil War history remains a visible thread in E-town&apos;s identity.
        Several historical markers around town note sites related to the raid, and the downtown
        area preserves buildings that date to the antebellum and Civil War eras.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        The Railroad Era (1850s-1920s)
      </h2>
      <p className="text-gray-body mb-4">
        The arrival of the <strong>Louisville and Nashville Railroad</strong> in the 1850s
        transformed Elizabethtown from a rural county seat into a regionally significant town. The
        railroad made it possible to ship agricultural products — especially tobacco and grain — to
        markets in Louisville and beyond, and it brought new businesses, residents, and commerce.
        E-town became a railroad hub, with the depot serving as the economic center of the
        community.
      </p>
      <p className="text-gray-body mb-4">
        Throughout the late 1800s and into the early 1900s, Elizabethtown grew steadily. The
        downtown business district expanded, churches and schools multiplied, and the town took on
        the character of a prosperous small Kentucky city — brick-fronted commercial buildings,
        tree-lined residential streets, and a courthouse square that served as the civic heart of
        Hardin County.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Fort Knox and the Military Era (1918-Present)
      </h2>
      <p className="text-gray-body mb-4">
        The establishment of <strong>Camp Knox in 1918</strong> as a training facility during World
        War I was the single most consequential event in Elizabethtown&apos;s modern history. The
        military installation, later renamed{" "}
        <Link href="/fort-knox/" className="text-navy font-semibold hover:text-gold-dark">
          Fort Knox
        </Link>
        , grew through World War II into one of the Army&apos;s premier armored training centers.
        The U.S. Bullion Depository — the famous Gold Vault — was built on the post in 1936,
        giving Fort Knox a national profile that far exceeded its military role.
      </p>
      <p className="text-gray-body mb-4">
        The base brought thousands of soldiers and their families to the region, and Elizabethtown
        and neighboring Radcliff grew dramatically to serve them. The military presence introduced
        a level of diversity and transience unusual for a small Kentucky city — families from every
        state and many countries cycled through, and a significant number chose to retire in the
        area. Today, Fort Knox is home to the U.S. Army Human Resources Command and the U.S. Army
        Cadet Command, and it remains the largest employer in the region.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
        Modern Growth and the I-65 Corridor
      </h2>
      <p className="text-gray-body mb-4">
        The construction of <strong>Interstate 65</strong> through Hardin County in the 1960s
        opened a new chapter for Elizabethtown. The highway placed E-town within easy reach of
        Louisville and Nashville, transforming it from an isolated small city into a viable
        commuter and commercial hub. Retail development followed the interstate, and the stretch of
        US-31W between E-town and I-65 became the area&apos;s primary commercial corridor.
      </p>
      <p className="text-gray-body mb-4">
        Since the 1990s, Elizabethtown has experienced steady population growth, driven by a
        combination of military families, Louisville commuters attracted by lower{" "}
        <Link
          href="/elizabethtown/cost-of-living/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          housing costs
        </Link>
        , retirees, and workers in the regional healthcare, education, and manufacturing sectors.
        The city has invested in downtown revitalization, bringing new restaurants, shops, and
        public spaces to the historic core while expanding{" "}
        <Link
          href="/elizabethtown/neighborhoods/"
          className="text-navy font-semibold hover:text-gold-dark"
        >
          residential neighborhoods
        </Link>{" "}
        outward.
      </p>
      <p className="text-gray-body mb-4">
        Today, Elizabethtown is a city of approximately 33,000 residents — large enough to have
        quality schools, healthcare, and retail, but small enough to preserve the neighborly,
        community-oriented character that has defined it since its founding. The blend of military
        heritage, small-town values, and modern accessibility makes it one of Kentucky&apos;s most
        appealing mid-sized communities.
      </p>

      <div className="bg-navy rounded-lg p-6 text-white mt-10">
        <h2 className="text-xl font-bold text-white mb-2">
          Become Part of E-town&apos;s Story
        </h2>
        <p className="text-gray-300 text-sm mb-4">
          Elizabethtown has been welcoming new residents for over 200 years.{" "}
          <Link
            href="/realtors/compass-and-key-group/"
            className="text-gold hover:text-gold-light"
          >
            Compass and Key Group
          </Link>{" "}
          is a veteran-owned real estate agency with deep roots in the community. Whether
          you&apos;re drawn by the military connection, the affordable housing, or the quality of
          life, they can help you find a home in the neighborhood that fits your family.
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
