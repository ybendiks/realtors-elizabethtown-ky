/**
 * Competitor brokerage directory.
 *
 * Contact details were verified on 2026-10-18 against the Heart of Kentucky
 * Association of REALTORS office roster (hkar.com), the authoritative local
 * membership list, covering all 160 member offices.
 *
 * RULE: `address` and `phone` may only hold values confirmed against a named
 * source. Where a listing could not be confirmed, both are null and
 * `verification.status` is "unverified", the page then omits the PostalAddress
 * from its structured data rather than publishing an unverified business
 * address. Do not fill these in from memory or from the previous values; four
 * of the original eight entries were wrong, including one brokerage that is
 * located 150 miles away in London, Kentucky.
 */

export interface RealtorVerification {
  status: "verified" | "unverified";
  checkedOn: string;
  source?: string;
  sourceUrl?: string;
  /** Rendered to the user when status is "unverified". */
  note?: string;
}

export interface Realtor {
  slug: string;
  name: string;
  /** Null when no address could be confirmed against a named source. */
  address: string | null;
  /** Null when no phone could be confirmed against a named source. */
  phone: string | null;
  description: string;
  areas: string[];
  services: string[];
  /** Verified facts rendered as a definition list above the prose. */
  quickFacts?: Record<string, string>;
  verification: RealtorVerification;
}

const HKAR = {
  source: "Heart of Kentucky Association of REALTORS office roster",
  sourceUrl: "https://www.hkar.com/",
  checkedOn: "2026-10-18",
};

export const realtors: Realtor[] = [
  {
    slug: "schuler-bauer",
    name: "Schuler Bauer Real Estate Services ERA Powered",
    address: "100 Drexler Circle, Elizabethtown, KY 42701",
    phone: "(270) 740-2100",
    description:
      "Schuler Bauer Real Estate Services operates as an ERA Powered brokerage, a regional firm with roots in Southern Indiana and the Louisville metro that expanded south into Hardin County. It is the largest multi-office operation in this directory: alongside the Elizabethtown office on Drexler Circle, the firm runs a Brandenburg branch and a Louisville-area office, so its footprint covers the I-65 corridor as well as Hardin County. The Elizabethtown office handles residential and commercial work across Hardin County and is a member of the Heart of Kentucky Association of REALTORS.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Brandenburg", "Louisville Metro"],
    services: [
      "Residential Sales",
      "Commercial Real Estate",
      "Buyer Representation",
      "Relocation Services",
    ],
    quickFacts: {
      "Office": "100 Drexler Circle, Elizabethtown",
      "Phone": "(270) 740-2100",
      "Brand": "ERA Powered",
      "Other area offices": "Brandenburg (270) 422-4687; Louisville (502) 339-1740",
      "HKAR member": "Yes",
    },
    verification: { status: "verified", ...HKAR },
  },
  {
    slug: "olive-oak-realty",
    name: "Olive + Oak Realty",
    address: "310 College St, Elizabethtown, KY 42701",
    phone: "(270) 751-7339",
    description:
      "Olive + Oak Realty is a boutique brokerage on College Street in Elizabethtown, working both residential and commercial sides of the Hardin County market. Its agents handle VA transactions and it takes on Fort Knox relocations alongside general residential work. Buyers who want commercial and residential handled under one roof are its natural fit.",
    areas: ["Elizabethtown", "Fort Knox", "Radcliff", "Vine Grove", "Hardin County"],
    services: [
      "Residential Sales",
      "Commercial Real Estate",
      "Military Relocation",
      "VA Transaction Support",
    ],
    quickFacts: {
      "Office": "310 College St, Elizabethtown",
      "Phone": "(270) 751-7339",
      "Type": "Independent boutique brokerage",
      "Focus": "Residential, commercial, Fort Knox relocation",
      "HKAR member": "Yes",
    },
    verification: { status: "verified", ...HKAR },
  },
  {
    slug: "remax-executive-group",
    name: "RE/MAX Executive Group",
    address: "100 Chase Way, Suite 1, Elizabethtown, KY 42701",
    phone: "(270) 769-1655",
    description:
      "RE/MAX Executive Group is a locally owned franchise of the RE/MAX network, operating from Chase Way in Elizabethtown. Unusually for the area it runs ongoing property management alongside sales, so landlords who want one firm for leasing and tenant handling will find that service here. The office also carries the RE/MAX referral network.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Fort Knox Area", "Central Kentucky"],
    services: [
      "Residential Sales",
      "Property Management",
      "Buyer Representation",
      "Investment Properties",
    ],
    quickFacts: {
      "Office": "100 Chase Way, Suite 1, Elizabethtown",
      "Phone": "(270) 769-1655",
      "Fax": "(270) 765-2238",
      "Brand": "RE/MAX franchise, locally owned",
      "HKAR member": "Yes",
    },
    verification: { status: "verified", ...HKAR },
  },
  {
    slug: "keller-williams-elizabethtown",
    name: "Keller Williams Heartland Realty",
    address: "950 N Mulberry Street, Suite 290, Elizabethtown, KY 42701",
    phone: "(270) 986-7296",
    description:
      "Keller Williams Heartland is the Elizabethtown-area Keller Williams market center, on North Mulberry Street. It operates a second office in Shepherdsville, which extends its reach up the I-65 corridor toward the Louisville suburbs, relevant if your search spans both Hardin and Bullitt counties rather than sitting inside E-town. Keller Williams market centers are agent-heavy by design, so the practical consideration here is choosing the individual agent rather than the office: the brand supplies the technology and training, but experience varies widely within a market center of this size.",
    areas: [
      "Elizabethtown",
      "Hardin County",
      "Radcliff",
      "Fort Knox Area",
      "Bullitt County",
    ],
    services: [
      "Residential Sales",
      "Buyer Representation",
      "Investment Properties",
      "First-Time Buyers",
    ],
    quickFacts: {
      "Office": "950 N Mulberry St, Suite 290, Elizabethtown",
      "Phone": "(270) 986-7296",
      "Brand": "Keller Williams market center",
      "Other area offices": "Shepherdsville (502) 252-1183",
      "HKAR member": "Yes",
    },
    verification: { status: "verified", ...HKAR },
  },
  {
    slug: "coldwell-banker-mcmahan",
    name: "Coldwell Banker McMahan",
    address: "1690 Ring Road, Suite 230, Elizabethtown, KY 42701",
    phone: "(270) 234-8600",
    description:
      "Coldwell Banker McMahan is the Coldwell Banker office serving Elizabethtown, located in the Ring Road commercial corridor. It brings the Coldwell Banker relocation and referral network to Hardin County, and handles residential buying and selling across the county. Buyers whose move is being routed by a national employer's relocation programme sometimes arrive pre-assigned to an affiliate like this one.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Central Kentucky"],
    services: [
      "Residential Sales",
      "Buyer Representation",
      "Relocation Services",
      "Listing Services",
    ],
    quickFacts: {
      "Office": "1690 Ring Road, Suite 230, Elizabethtown",
      "Phone": "(270) 234-8600 / (270) 234-1341",
      "Brand": "Coldwell Banker affiliate",
      "HKAR member": "Yes",
    },
    verification: {
      status: "verified",
      ...HKAR,
      note:
        "Previously published here as 'Coldwell Banker Legacy Group' with phone (270) 765-0001. "
        + "Neither matched any HKAR member office. Coldwell Banker Legacy Group is a Bowling "
        + "Green firm; the Coldwell Banker office actually serving Elizabethtown is McMahan. "
        + "The old /realtors/coldwell-banker-legacy/ URL 301s here (see vercel.json).",
    },
  },
];
