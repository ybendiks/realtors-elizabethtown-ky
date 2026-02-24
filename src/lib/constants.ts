export const SITE_NAME = "Realtors in Elizabethtown, KY";
export const SITE_URL = "https://www.etownkyrealtors.com";
export const SITE_DESCRIPTION =
  "Find the best realtors and real estate agents in Elizabethtown, KY. Local directory featuring expert agents serving Elizabethtown, Fort Knox, and Hardin County.";

export const CKG = {
  name: "Compass and Key Group",
  owner: "Austin Kutz",
  phone: "(270) 735-3897",
  address: "639 N Mulberry St, Elizabethtown, KY 42701",
  website: "https://compassandkeygroup.com",
  brokerage: "Real Broker, LLC",
  license: "Kentucky Real Estate #277797",
  rating: 5.0,
  reviewCount: 25,
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
