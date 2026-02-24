import Link from "next/link";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function LinkCard({ title, description, href, icon }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-gray-border rounded-lg p-5 hover:shadow-lg hover:border-gold transition-all group"
    >
      {icon && <div className="mb-3 text-gold">{icon}</div>}
      <h3 className="font-bold text-navy group-hover:text-gold-dark transition-colors">{title}</h3>
      <p className="text-sm text-gray-medium mt-1 leading-relaxed">{description}</p>
      <span className="inline-block mt-3 text-sm text-gold font-medium group-hover:translate-x-1 transition-transform">
        Learn more →
      </span>
    </Link>
  );
}
