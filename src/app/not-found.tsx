import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
      <h2 className="text-2xl font-bold text-navy mb-4">Page Not Found</h2>
      <p className="text-gray-body mb-8">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find
        what you&apos;re looking for in the Elizabethtown area.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/realtors/"
          className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded transition-colors"
        >
          Browse Realtors
        </Link>
      </div>
      <div className="mt-12 text-left bg-gray-light rounded-lg p-6">
        <h3 className="font-bold text-navy mb-3">Popular Pages</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/realtors/compass-and-key-group/" className="text-navy hover:text-gold-dark">
              Compass and Key Group — Featured Agency
            </Link>
          </li>
          <li>
            <Link href="/elizabethtown/neighborhoods/" className="text-navy hover:text-gold-dark">
              Elizabethtown Neighborhood Guides
            </Link>
          </li>
          <li>
            <Link href="/fort-knox/pcs-guide/" className="text-navy hover:text-gold-dark">
              PCS to Fort Knox Guide
            </Link>
          </li>
          <li>
            <Link href="/fort-knox/bah-rates/" className="text-navy hover:text-gold-dark">
              2026 Fort Knox BAH Rates
            </Link>
          </li>
          <li>
            <Link href="/real-estate-market/" className="text-navy hover:text-gold-dark">
              Elizabethtown Real Estate Market
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
