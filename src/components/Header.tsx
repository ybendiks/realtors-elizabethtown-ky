"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

function NavLink({
  href,
  children,
  onClick,
  baseColor = "#ffffff",
  hoverColor = "#D4A843",
  style,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  baseColor?: string;
  hoverColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ color: hovered ? hoverColor : baseColor, ...style }}
      className={className}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header style={{ backgroundColor: "#1B365D" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink href="/" className="flex items-center gap-2">
            <Image
              src="/images/ckg-logo.png"
              alt="Compass and Key Group - Realtors in Elizabethtown, KY"
              width={434}
              height={200}
              className="h-9 w-auto"
              priority
            />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium rounded inline-flex items-center"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </NavLink>
                {item.children && openDropdown === item.label && (
                  <div style={{ backgroundColor: "#ffffff", borderColor: "#E5E7EB" }} className="absolute top-full left-0 shadow-xl rounded-md py-2 min-w-[220px] border">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        href={child.href}
                        baseColor="#333333"
                        hoverColor="#1B365D"
                        className="block px-4 py-2 text-sm"
                        style={{ backgroundColor: "transparent" }}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <NavLink
              href="/realtors/compass-and-key-group/"
              baseColor="#1B365D"
              hoverColor="#1B365D"
              className="hidden md:inline-block font-semibold px-4 py-2 rounded text-sm"
              style={{ backgroundColor: "#D4A843" }}
            >
              Featured Agent
            </NavLink>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "#ffffff" }}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#0F1F3D", borderTopColor: "#2A4A7F" }} className="lg:hidden border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <NavLink
                  href={item.href}
                  className="block px-3 py-2 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        href={child.href}
                        baseColor="#d1d5db"
                        className="block px-3 py-1.5 text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <NavLink
              href="/realtors/compass-and-key-group/"
              baseColor="#1B365D"
              hoverColor="#1B365D"
              className="block font-semibold px-4 py-2 rounded text-center mt-4"
              style={{ backgroundColor: "#D4A843" }}
              onClick={() => setMobileOpen(false)}
            >
              Featured Agent
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
