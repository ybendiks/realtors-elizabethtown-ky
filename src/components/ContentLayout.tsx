import Breadcrumbs from "./Breadcrumbs";
import Sidebar from "./Sidebar";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface ContentLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  sidebar?: {
    relatedPages?: RelatedLink[];
    relatedTitle?: string;
  };
  children: React.ReactNode;
}

export default function ContentLayout({ breadcrumbs, sidebar, children }: ContentLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 min-w-0">{children}</main>
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            <Sidebar
              relatedPages={sidebar?.relatedPages}
              relatedTitle={sidebar?.relatedTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
