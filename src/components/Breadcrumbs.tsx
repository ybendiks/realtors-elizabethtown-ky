import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumbs({ items, variant = "light" }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const isDark = variant === "dark";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...(item.href
        ? { name: item.label, item: `${SITE_URL}${item.href}` }
        : { name: item.label }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex flex-wrap items-center gap-1 text-sm ${isDark ? "text-gray-300" : "text-gray-medium"}`}>
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <svg className={`w-3 h-3 ${isDark ? "text-gray-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href ? (
                <Link href={item.href} className={isDark ? "text-gray-300 hover:text-white transition-colors" : "text-gray-medium hover:text-navy transition-colors"}>
                  {item.label}
                </Link>
              ) : (
                <span className={isDark ? "text-white font-medium" : "text-navy font-medium"}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
