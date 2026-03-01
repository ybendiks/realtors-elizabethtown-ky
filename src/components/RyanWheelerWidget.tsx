import Image from "next/image";
import { RYAN_WHEELER } from "@/lib/constants";

export default function RyanWheelerWidget() {
  return (
    <div className="bg-white border-2 border-navy rounded-lg p-5 shadow-md">
      {/* Ryan Headshot */}
      <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden">
        <Image
          src="/images/ryan-wheeler.png"
          alt="Ryan Wheeler - President at United Residential Mortgage"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-center font-bold text-navy text-lg">{RYAN_WHEELER.name}</h3>
      <p className="text-center text-xs text-gray-medium mt-0.5">{RYAN_WHEELER.company}</p>

      {/* Stars */}
      <div className="flex justify-center items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-medium ml-1">({RYAN_WHEELER.reviewCount}+ reviews)</span>
      </div>

      <p className="text-center text-xs text-gray-medium mt-1">
        <svg className="w-3 h-3 inline-block mr-0.5 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
        Rated on {RYAN_WHEELER.reviewSource}
      </p>

      <p className="text-center text-sm text-gray-medium mt-2">{RYAN_WHEELER.phone}</p>
      <p className="text-center text-xs text-navy font-medium mt-1">{RYAN_WHEELER.nmls}</p>

      <a
        href={RYAN_WHEELER.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 bg-navy hover:bg-navy-dark text-white font-semibold text-center py-2.5 rounded transition-colors text-sm"
      >
        Get a Quote &rarr;
      </a>
    </div>
  );
}
