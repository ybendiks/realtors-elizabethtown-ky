import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Elizabethtown, KY realtor directory website. Learn how we handle your data.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <ContentLayout breadcrumbs={[{ label: "Privacy Policy" }]}>
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-medium mb-8">Last updated: February 2026</p>

      <div className="prose max-w-none text-gray-body space-y-6">
        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Information We Collect</h2>
        <p>
          This website is a static informational directory. We do not collect personal information through
          forms, user accounts, or registration processes. If you contact us via email, we may retain your
          correspondence for the purpose of responding to your inquiry.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Analytics</h2>
        <p>
          We may use third-party analytics services (such as Google Analytics or Plausible Analytics) to
          understand how visitors interact with our website. These services may collect anonymized data such
          as pages visited, time on site, referring URLs, and general geographic location. No personally
          identifiable information is collected through analytics.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Cookies</h2>
        <p>
          This website uses minimal cookies required for basic functionality. Third-party analytics services
          may set their own cookies. You can control cookie behavior through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Third-Party Links</h2>
        <p>
          This site contains links to external websites, including real estate agency websites and government
          resources. We are not responsible for the privacy practices or content of these external sites. We
          encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Directory Listings</h2>
        <p>
          The real estate agent and agency information displayed on this site is sourced from publicly
          available business listings, websites, and public records. If you are a listed agent or agency and
          wish to update or remove your information, please contact us at info@realtorsrelizabethtownky.com.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Children&apos;s Privacy</h2>
        <p>
          This website is not directed at individuals under the age of 13. We do not knowingly collect
          personal information from children.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be reflected on this page
          with an updated revision date.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Contact Us</h2>
        <p>
          If you have questions about this privacy policy, contact us at info@realtorsrelizabethtownky.com.
        </p>
      </div>
    </ContentLayout>
  );
}
