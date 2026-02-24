import Link from "next/link";
import { CKG, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white" style={{ backgroundColor: "#1B365D" }}>
      {/* CTA Banner */}
      <div className="bg-gold" style={{ backgroundColor: "#D4A843" }}>
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-2" style={{ color: "#1B365D" }}>
            Ready to Find Your Home in Elizabethtown?
          </h3>
          <p className="text-navy/80 mb-4" style={{ color: "rgba(27, 54, 93, 0.8)" }}>
            Contact Compass and Key Group for expert guidance on buying or selling in the E-town area.
          </p>
          <Link
            href="/realtors/compass-and-key-group/"
            className="inline-block bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded transition-colors"
            style={{ backgroundColor: "#1B365D", color: "#ffffff" }}
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
            <h4 className="text-lg font-bold mb-4" style={{ color: "#ffffff" }}>{SITE_NAME}</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
              Your complete guide to real estate agents, neighborhoods, schools, and living in the
              Elizabethtown and Fort Knox area of Kentucky.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: "#ffffff" }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Find a Realtor", href: "/realtors/" },
                { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
                { label: "Schools", href: "/elizabethtown/schools/" },
                { label: "Fort Knox Guide", href: "/fort-knox/" },
                { label: "Real Estate Market", href: "/real-estate-market/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold text-sm transition-colors" style={{ color: "#d1d5db" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: "#ffffff" }}>Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
                { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
                { label: "Cost of Living", href: "/elizabethtown/cost-of-living/" },
                { label: "PCS to Fort Knox", href: "/fort-knox/pcs-guide/" },
                { label: "About This Directory", href: "/about/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold text-sm transition-colors" style={{ color: "#d1d5db" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Agency */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: "#ffffff" }}>Featured Agency</h4>
            <div className="bg-navy-dark rounded-lg p-4" style={{ backgroundColor: "#0F1F3D" }}>
              <p className="font-bold text-gold" style={{ color: "#D4A843" }}>{CKG.name}</p>
              <p className="text-sm mt-1" style={{ color: "#d1d5db" }}>Veteran-Owned</p>
              <p className="text-sm" style={{ color: "#d1d5db" }}>{CKG.phone}</p>
              <p className="text-sm" style={{ color: "#d1d5db" }}>{CKG.address}</p>
              <Link
                href={CKG.profileUrl}
                className="inline-block mt-3 text-gold hover:text-gold-light text-sm font-medium transition-colors"
                style={{ color: "#D4A843" }}
              >
                View Profile →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400" style={{ color: "#9ca3af" }}>
          <p style={{ color: "#9ca3af" }}>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="text-gray-400 hover:text-gold transition-colors" style={{ color: "#9ca3af" }}>
              Privacy Policy
            </Link>
            <Link href="/contact/" className="text-gray-400 hover:text-gold transition-colors" style={{ color: "#9ca3af" }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
