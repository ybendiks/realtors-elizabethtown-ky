import Link from "next/link";
import { CKG, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-2">
            Ready to Find Your Home in Elizabethtown?
          </h3>
          <p className="text-navy/80 mb-4">
            Contact Compass and Key Group for expert guidance on buying or selling in the E-town area.
          </p>
          <Link
            href="/realtors/compass-and-key-group/"
            className="inline-block bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Contact Compass and Key Group
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{SITE_NAME}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your complete guide to real estate agents, neighborhoods, schools, and living in the
              Elizabethtown and Fort Knox area of Kentucky.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Find a Realtor", href: "/realtors/" },
                { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
                { label: "Schools", href: "/elizabethtown/schools/" },
                { label: "Fort Knox Guide", href: "/fort-knox/" },
                { label: "Real Estate Market", href: "/real-estate-market/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
                { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
                { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
                { label: "PCS to Fort Knox", href: "/fort-knox/pcs-guide/" },
                { label: "About This Directory", href: "/about/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Agency */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Featured Agency</h4>
            <div className="bg-navy-dark rounded-lg p-4">
              <p className="font-bold text-gold">{CKG.name}</p>
              <p className="text-gray-300 text-sm mt-1">Veteran-Owned</p>
              <p className="text-gray-300 text-sm">{CKG.phone}</p>
              <p className="text-gray-300 text-sm">{CKG.address}</p>
              <Link
                href={CKG.profileUrl}
                className="inline-block mt-3 text-gold hover:text-gold-light text-sm font-medium transition-colors"
              >
                View Profile →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact/" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
