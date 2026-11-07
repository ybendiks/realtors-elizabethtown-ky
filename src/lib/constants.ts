export const SITE_NAME = "Realtors in Elizabethtown, KY";
export const SITE_URL = "https://www.etownkyrealtors.com";
export const SITE_DESCRIPTION =
  "Find the best realtors and real estate agents in Elizabethtown, KY. Local directory featuring expert agents serving Elizabethtown, Fort Knox, and Hardin County.";

export const CKG = {
  name: "Compass and Key Group",
  owner: "Austin Kutz",
  /**
   * The number the site publishes everywhere. It is a Quo screening number
   * that masks the business line, (270) 735-3897, which is still live. Set
   * 2026-11-07. Publishing the line behind it would defeat the screening, so
   * do not "helpfully" swap it back.
   *
   * The Google Business Profile shows this same number, so site and profile
   * agree. The HKAR roster still lists the underlying line, which is expected
   * and is not a citation problem worth chasing.
   *
   * The Google Business Profile shows (270) 817-3311, which is call tracking
   * rather than an error, so do NOT "correct" either one to match the other.
   * Keeping the tracking number as the profile's primary and this one listed
   * there as an additional number is what keeps citations reconcilable.
   *
   * Everything on the site resolves from here: prose interpolates it, JSON-LD
   * reads it, and tel: links derive the digits from it. Changing the number is
   * this one line.
   */
  phone: "(270) 491-3450",
  address: "617 N Mulberry St #105B, Elizabethtown, KY 42701",
  website: "https://compassandkeygroup.com",
  brokerage: "Real Broker, LLC",
  license: "Kentucky Real Estate #277797",
  rating: 5.0,
  /**
   * Google Business Profile rating and review count.
   * Source: Compass and Key Group - Real Broker GBP, confirmed by the owner.
   * Counts only grow, so a stale value understates rather than overstates --
   * but it is published as aggregateRating structured data, so re-check it
   * when convenient and update reviewsAsOf with it.
   */
  reviewCount: 96,
  reviewsAsOf: "November 2026",
  reviewSource: "Google",
  /**
   * Canonical Google Business Profile link, in Google's documented stable
   * place-id form. Used as sameAs so the aggregateRating on this site can be
   * reconciled against the profile the reviews actually live on, and linked
   * visibly next to the rating so a reader can check it.
   */
  googleProfile:
    "https://www.google.com/maps/place/?q=place_id:ChIJYTRbPA9CHykRtua2fYwbMUA",
  profileUrl: "/realtors/compass-and-key-group/",
  directoryUrl: "/realtors/",
  tagline: "Veteran-Owned Real Estate Experts in Elizabethtown, KY",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Realtors",
    href: "/realtors/",
    children: [
      { label: "Find a Realtor", href: "/realtors/" },
      { label: "Best Realtors Compared", href: "/realtors/best-realtors-elizabethtown-ky/" },
      { label: "Compass and Key Group", href: "/realtors/compass-and-key-group/" },
    ],
  },
  {
    label: "Elizabethtown",
    href: "/elizabethtown/",
    children: [
      { label: "Area Overview", href: "/elizabethtown/" },
      { label: "Neighborhoods", href: "/elizabethtown/neighborhoods/" },
      { label: "Schools", href: "/elizabethtown/schools/" },
      { label: "Parks & Recreation", href: "/elizabethtown/parks-recreation/" },
      { label: "Things to Do", href: "/elizabethtown/things-to-do/" },
    ],
  },
  {
    label: "Fort Knox",
    href: "/fort-knox/",
    children: [
      { label: "Military Relocation Guide", href: "/fort-knox/military-relocation-guide/" },
      { label: "PCS to Fort Knox", href: "/fort-knox/pcs-guide/" },
      { label: "Off-Post Housing", href: "/fort-knox/off-post-housing/" },
      { label: "BAH & VA Loans", href: "/fort-knox/bah-rates/" },
    ],
  },
  {
    label: "Real Estate Market",
    href: "/real-estate-market/",
    children: [
      { label: "Market Overview", href: "/real-estate-market/" },
      { label: "Buying Guide", href: "/guides/buying-home-elizabethtown/" },
      { label: "Selling Guide", href: "/guides/selling-home-elizabethtown/" },
    ],
  },
];

export const RYAN_WHEELER = {
  name: "Ryan Wheeler",
  title: "President",
  company: "United Residential Mortgage",
  phone: "(270) 228-0074",
  address: "209 N Mulberry St. Suite 100, Elizabethtown, KY 42701",
  website: "https://www.unitedresidential.net",
  nmls: "NMLS #1326012",
  rating: 5.0,
  reviewCount: 311,
  reviewSource: "Google",
  tagline: "Personalized Mortgage Solutions in Elizabethtown, KY",
};

export const CKG_ANCHOR_TEXTS = [
  "Compass and Key Group",
  "Austin Kutz at Compass and Key Group",
  "veteran-owned real estate team in Elizabethtown",
  "Elizabethtown's top-rated real estate agency",
  "contact a local Elizabethtown realtor",
  "find an agent who knows Elizabethtown",
  "CKG real estate team",
  "your local Elizabethtown real estate experts",
];
