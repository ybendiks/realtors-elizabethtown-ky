export interface Realtor {
  slug: string;
  name: string;
  address: string;
  phone: string;
  description: string;
  areas: string[];
  services: string[];
}

export const realtors: Realtor[] = [
  {
    slug: "schuler-bauer",
    name: "Schuler Bauer Real Estate",
    address: "1609 N Dixie Hwy, Elizabethtown, KY 42701",
    phone: "(270) 740-2100",
    description:
      "Schuler Bauer Real Estate Services, now ERA Powered, is a large regional brokerage with roots in Southern Indiana and Louisville that expanded into the Elizabethtown market. Their E-town office on North Dixie Highway provides residential and commercial real estate services across Hardin County, with agents experienced in the local market. The firm offers buyer and seller representation along with relocation services for clients moving to the area.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Brandenburg", "Louisville Metro"],
    services: ["Residential Sales", "Commercial Real Estate", "Buyer Representation", "Relocation Services"],
  },
  {
    slug: "olive-oak-realty",
    name: "Olive + Oak Realty",
    address: "112 N Main St, Elizabethtown, KY 42701",
    phone: "(270) 319-1416",
    description:
      "Olive + Oak Realty is a boutique real estate agency located in downtown Elizabethtown on North Main Street. Known for their active presence in the Fort Knox military relocation market, they work with service members and families PCSing to and from the area. The agency provides a personalized approach to buying and selling in Hardin County, with agents familiar with VA transactions and the unique needs of military clients.",
    areas: ["Elizabethtown", "Fort Knox", "Radcliff", "Vine Grove", "Hardin County"],
    services: ["Residential Sales", "Military Relocation", "Buyer Representation", "VA Transaction Support"],
  },
  {
    slug: "remax-executive-group",
    name: "RE/MAX Executive Group",
    address: "100 Chase Way, Ste 1, Elizabethtown, KY 42701",
    phone: "(270) 769-1655",
    description:
      "RE/MAX Executive Group is a locally owned franchise of the national RE/MAX brand, operating from their office on Chase Way in Elizabethtown. The brokerage has a team of experienced agents serving the greater Hardin County market, including property management services for rental investors. With the backing of the RE/MAX network, agents have access to national marketing tools and referral networks while maintaining strong local market knowledge.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Fort Knox Area", "Central Kentucky"],
    services: ["Residential Sales", "Property Management", "Buyer Representation", "Investment Properties"],
  },
  {
    slug: "greystone-realtors",
    name: "Greystone Realtors",
    address: "Elizabethtown, KY 42701",
    phone: "(270) 763-0025",
    description:
      "Greystone Realtors is an independent real estate agency that has served the Elizabethtown and Hardin County market for years. As a locally owned brokerage, they focus on residential sales throughout the E-town area and surrounding communities. Their agents bring familiarity with Hardin County neighborhoods, pricing trends, and the local buying and selling process.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Vine Grove"],
    services: ["Residential Sales", "Buyer Representation", "Listing Services"],
  },
  {
    slug: "network-realty",
    name: "Network Realty",
    address: "307 N Mulberry St, Elizabethtown, KY 42701",
    phone: "(270) 769-6315",
    description:
      "Network Realty is a local real estate agency with an office on North Mulberry Street in Elizabethtown. They serve buyers and sellers throughout Hardin County and the surrounding region, with agents who know the local neighborhoods and market conditions. The brokerage also has a presence in Radcliff, providing coverage for clients looking near the Fort Knox area.",
    areas: ["Elizabethtown", "Radcliff", "Hardin County", "Vine Grove"],
    services: ["Residential Sales", "Buyer Representation", "Listing Services"],
  },
  {
    slug: "keller-williams-elizabethtown",
    name: "Keller Williams Heartland Realty",
    address: "950 N Mulberry St, Ste 290, Elizabethtown, KY 42701",
    phone: "(270) 986-7296",
    description:
      "Keller Williams Heartland Realty is the Elizabethtown-area franchise of the nationally recognized Keller Williams brand. Located on North Mulberry Street, the office supports a team of agents with the technology platforms, training, and marketing resources that Keller Williams is known for. Their agents serve the full Hardin County market with specialties ranging from first-time buyers to investment properties.",
    areas: ["Elizabethtown", "Hardin County", "Radcliff", "Fort Knox Area", "Central Kentucky"],
    services: ["Residential Sales", "Buyer Representation", "Investment Properties", "First-Time Buyers"],
  },
  {
    slug: "century-21-advantage",
    name: "Century 21 Advantage Realty",
    address: "5375 N Dixie Hwy, Elizabethtown, KY 42701",
    phone: "(270) 765-4846",
    description:
      "Century 21 Advantage Realty brings the Century 21 national brand to the Elizabethtown market from their North Dixie Highway office. The brokerage offers residential real estate services with the marketing reach and referral network of one of the most recognized names in real estate. Their agents serve Hardin County and surrounding areas with both buyer and seller representation.",
    areas: ["Elizabethtown", "Hardin County", "Central Kentucky"],
    services: ["Residential Sales", "Buyer Representation", "Listing Services", "Relocation"],
  },
  {
    slug: "coldwell-banker-legacy",
    name: "Coldwell Banker Legacy Group",
    address: "Elizabethtown, KY 42701",
    phone: "(270) 765-0001",
    description:
      "Coldwell Banker Legacy Group brings the resources and national brand recognition of Coldwell Banker to the Elizabethtown and greater Central Kentucky market. The brokerage provides residential real estate services with agents experienced in the local market. Backed by Coldwell Banker's technology, marketing, and global referral network, the team serves buyers and sellers across Hardin County and surrounding communities.",
    areas: ["Elizabethtown", "Hardin County", "Central Kentucky", "Southern Kentucky"],
    services: ["Residential Sales", "Buyer Representation", "Relocation Services", "Listing Services"],
  },
];
