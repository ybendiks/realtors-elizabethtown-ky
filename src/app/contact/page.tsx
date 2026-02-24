import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { CKG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Elizabethtown KY Realtor Directory",
  description:
    "Get in touch with questions about Elizabethtown real estate, our directory, or to connect with a local agent. Contact Compass and Key Group at (270) 735-3897.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Contact" }]}
      sidebar={{
        relatedPages: [
          { label: "Find a Realtor", href: "/realtors/" },
          { label: "Compass and Key Group", href: CKG.profileUrl },
          { label: "About This Directory", href: "/about/" },
        ],
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-body mb-8 leading-relaxed">
        Have a question about our Elizabethtown realtor directory? Looking for help with your home search
        in the E-town or Fort Knox area? We&apos;re here to help. Reach out using the information below,
        and we&apos;ll get back to you as quickly as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-light rounded-lg p-6">
          <h2 className="text-xl font-bold text-navy mb-4">Directory Questions</h2>
          <p className="text-gray-body text-sm mb-4">
            For questions about this website, corrections to directory listings, or general inquiries about
            Elizabethtown real estate resources, contact us via email.
          </p>
          <p className="text-navy font-semibold">info@etownkyrealtors.com</p>
        </div>

        <div className="bg-gold/10 border-2 border-gold rounded-lg p-6">
          <h2 className="text-xl font-bold text-navy mb-4">Ready to Buy or Sell?</h2>
          <p className="text-gray-body text-sm mb-4">
            For direct real estate assistance in Elizabethtown and the Fort Knox area, contact our featured
            agency, Compass and Key Group.
          </p>
          <div className="space-y-2">
            <p className="font-bold text-navy">{CKG.name}</p>
            <p className="text-gray-body text-sm">{CKG.owner}, Owner &amp; Lead Agent</p>
            <p>
              <a
                href={`tel:${CKG.phone.replace(/[^0-9]/g, "")}`}
                className="text-navy font-semibold hover:text-gold-dark"
              >
                {CKG.phone}
              </a>
            </p>
            <p className="text-gray-body text-sm">{CKG.address}</p>
            <p>
              <a
                href={CKG.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-semibold hover:text-gold-dark"
              >
                compassandkeygroup.com
              </a>
            </p>
            <Link
              href={CKG.profileUrl}
              className="inline-block mt-3 bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-2.5 rounded transition-colors text-sm"
            >
              View Full Profile →
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Helpful Resources</h2>
      <p className="text-gray-body mb-4">
        Looking for something specific? These pages might help:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-body mb-6">
        <li>
          <Link href="/realtors/" className="text-navy font-semibold hover:text-gold-dark">
            Browse our full realtor directory
          </Link>{" "}
          to compare local agencies serving Elizabethtown and Hardin County.
        </li>
        <li>
          <Link href="/fort-knox/pcs-guide/" className="text-navy font-semibold hover:text-gold-dark">
            PCS to Fort Knox guide
          </Link>{" "}
          — comprehensive military relocation information for service members.
        </li>
        <li>
          <Link href="/elizabethtown/neighborhoods/" className="text-navy font-semibold hover:text-gold-dark">
            Neighborhood guides
          </Link>{" "}
          — explore 14 Elizabethtown communities with detailed profiles.
        </li>
        <li>
          <Link href="/guides/first-time-homebuyer-elizabethtown/" className="text-navy font-semibold hover:text-gold-dark">
            First-time homebuyer guide
          </Link>{" "}
          — step-by-step help for buying your first home in E-town.
        </li>
      </ul>

      <div className="bg-navy rounded-lg p-6 text-white" style={{ backgroundColor: "#1B365D" }}>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Are You a Local Real Estate Agent?</h3>
        <p className="text-sm" style={{ color: "#d1d5db" }}>
          If you&apos;re a real estate agent or agency serving the Elizabethtown and Hardin County area and
          would like to be included in our directory, please email us at info@etownkyrealtors.com
          with your agency information.
        </p>
      </div>
    </ContentLayout>
  );
}
