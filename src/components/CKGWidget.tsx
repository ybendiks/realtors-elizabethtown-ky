import Image from "next/image";
import Link from "next/link";
import { CKG } from "@/lib/constants";

export default function CKGWidget() {
  return (
    <div className="bg-white border-2 border-gold rounded-lg p-5 shadow-md">
      {/* Austin Headshot */}
      <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden">
        <Image
          src="/images/austin-kutz-headshot-600.png"
          alt="Austin Kutz - Lead Agent at Compass and Key Group"
          width={600}
          height={753}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-center font-bold text-navy text-lg">{CKG.name}</h3>

      {/* Stars */}
      <div className="flex justify-center items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-medium ml-1">({CKG.reviewCount} reviews)</span>
      </div>

      <p className="text-center text-sm text-gray-medium mt-2">{CKG.phone}</p>
      <p className="text-center text-xs text-gold font-medium mt-1">Veteran-Owned</p>

      <Link
        href={CKG.profileUrl}
        className="block mt-4 bg-gold hover:bg-gold-dark text-navy font-semibold text-center py-2.5 rounded transition-colors text-sm"
      >
        Contact Us →
      </Link>
    </div>
  );
}
