import Link from "next/link";
import CKGWidget from "./CKGWidget";
import RyanWheelerWidget from "./RyanWheelerWidget";

interface RelatedLink {
  label: string;
  href: string;
}

interface SidebarProps {
  relatedPages?: RelatedLink[];
  relatedTitle?: string;
}

export default function Sidebar({ relatedPages, relatedTitle = "Related Pages" }: SidebarProps) {
  return (
    <aside className="space-y-6">
      <CKGWidget />
      <RyanWheelerWidget />

      {relatedPages && relatedPages.length > 0 && (
        <div className="bg-gray-light rounded-lg p-5">
          <h3 className="font-bold text-navy text-lg mb-3">{relatedTitle}</h3>
          <ul className="space-y-2">
            {relatedPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-gray-body hover:text-navy flex items-center gap-2 transition-colors"
                >
                  <svg className="w-3 h-3 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
