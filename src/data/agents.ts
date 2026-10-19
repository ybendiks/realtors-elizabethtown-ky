/**
 * Licensed agents at each brokerage in this directory.
 *
 * Source: Heart of Kentucky Association of REALTORS member roster (hkar.com),
 * scraped 2026-10-18. The agent lister returns results in a non-deterministic
 * order, so a single pass misses people; this set is the union of eight passes,
 * continued until all 643 association members had been seen at least once.
 *
 * RULE, as everywhere else in this codebase: nothing here is inferred. Name,
 * phone and membership class come from the roster and nothing else. HKAR
 * publishes no tenure, sales volume or licence number on the public listing,
 * so this file carries none of those -- do not add them from another source
 * without logging it in tasks/data-sources.md.
 *
 * Compass and Key Group trades under Real Broker, LLC, which has 10 HKAR
 * members across several independent teams, so the roster alone cannot say
 * who belongs to CKG. The three listed here were confirmed by the owner on
 * 2026-10-18: Austin Kutz, Ciara Hardesty and Steve Nikirk. Two corroborate
 * independently -- Kutz's roster phone matches CKG.phone exactly, and
 * Nikirk's own Google Business Profile reads "Steve Nikirk, Compass and Key
 * Group - Real Broker, LLC" at the same address. The remaining seven Real
 * Broker members are not CKG and are deliberately omitted.
 *
 * No individual agent pages: name, phone and membership class is not enough
 * substance for a page, and three brokerage pages were removed from this site
 * recently for exactly that thinness.
 */

export type AgentRole = "realtor" | "designated-realtor" | "managing-agent";

export interface Agent {
  /** HKAR member id, kept so a future pass can re-verify a specific record. */
  hkarId: string;
  name: string;
  /** Matches a slug in src/data/realtors.ts, or "compass-and-key-group". */
  brokerageSlug: string;
  phone: string;
  role: AgentRole;
}

export const AGENTS_SOURCE = {
  source: "Heart of Kentucky Association of REALTORS member roster",
  sourceUrl: "https://www.hkar.com/",
  checkedOn: "2026-10-18",
} as const;

export const agents: Agent[] = [
  // coldwell-banker-mcmahan (9)
  { hkarId: "32171", name: "Kathy Bragg", brokerageSlug: "coldwell-banker-mcmahan", phone: "270-307-2523", role: "realtor" },
  { hkarId: "36895", name: "Melissa Hamilton", brokerageSlug: "coldwell-banker-mcmahan", phone: "606-331-1609", role: "realtor" },
  { hkarId: "32280", name: "Brad Hilton", brokerageSlug: "coldwell-banker-mcmahan", phone: "270-234-3722", role: "realtor" },
  { hkarId: "35211", name: "Emily Kaiser", brokerageSlug: "coldwell-banker-mcmahan", phone: "270-735-5480", role: "realtor" },
  { hkarId: "34740", name: "Rachel Lopez", brokerageSlug: "coldwell-banker-mcmahan", phone: "270-319-8464", role: "realtor" },
  { hkarId: "32230", name: "Hardin McLane", brokerageSlug: "coldwell-banker-mcmahan", phone: "270-765-9000", role: "realtor" },
  { hkarId: "32240", name: "Marilyn McLane", brokerageSlug: "coldwell-banker-mcmahan", phone: "270-765-8555", role: "realtor" },
  { hkarId: "33153", name: "Kelly Smith", brokerageSlug: "coldwell-banker-mcmahan", phone: "502-727-6236", role: "realtor" },
  { hkarId: "33874", name: "Matthew Weaver", brokerageSlug: "coldwell-banker-mcmahan", phone: "502-376-0884", role: "designated-realtor" },

  // compass-and-key-group (3)
  { hkarId: "37235", name: "Ciara Hardesty", brokerageSlug: "compass-and-key-group", phone: "270-734-5552", role: "realtor" },
  { hkarId: "35704", name: "Austin Kutz", brokerageSlug: "compass-and-key-group", phone: "270-735-3897", role: "realtor" },
  { hkarId: "33303", name: "Steve Nikirk", brokerageSlug: "compass-and-key-group", phone: "270-872-3077", role: "realtor" },

  // keller-williams-elizabethtown (19)
  { hkarId: "37798", name: "Amy Bow", brokerageSlug: "keller-williams-elizabethtown", phone: "270-282-9454", role: "realtor" },
  { hkarId: "33595", name: "Rachel Brantingham", brokerageSlug: "keller-williams-elizabethtown", phone: "270-401-2801", role: "realtor" },
  { hkarId: "36862", name: "Blake Carter", brokerageSlug: "keller-williams-elizabethtown", phone: "270-230-5361", role: "realtor" },
  { hkarId: "33961", name: "David Chandler", brokerageSlug: "keller-williams-elizabethtown", phone: "270-319-2404", role: "realtor" },
  { hkarId: "37455", name: "Alyssa Evans", brokerageSlug: "keller-williams-elizabethtown", phone: "276-608-8824", role: "realtor" },
  { hkarId: "35588", name: "Dylan Goodin", brokerageSlug: "keller-williams-elizabethtown", phone: "270-401-2542", role: "realtor" },
  { hkarId: "34072", name: "Tiffany Grace", brokerageSlug: "keller-williams-elizabethtown", phone: "270-617-0850", role: "realtor" },
  { hkarId: "36801", name: "Kelly Harris", brokerageSlug: "keller-williams-elizabethtown", phone: "270-929-9606", role: "realtor" },
  { hkarId: "35732", name: "Sarah Heck", brokerageSlug: "keller-williams-elizabethtown", phone: "270-734-6557", role: "realtor" },
  { hkarId: "36838", name: "Guadalupe Jaramillo", brokerageSlug: "keller-williams-elizabethtown", phone: "270-734-6352", role: "realtor" },
  { hkarId: "37145", name: "Ryan Lear", brokerageSlug: "keller-williams-elizabethtown", phone: "270-723-7799", role: "realtor" },
  { hkarId: "33392", name: "Amanda Long", brokerageSlug: "keller-williams-elizabethtown", phone: "270-403-4999", role: "realtor" },
  { hkarId: "35204", name: "Evan Long", brokerageSlug: "keller-williams-elizabethtown", phone: "270-403-0155", role: "realtor" },
  { hkarId: "36504", name: "Reece McCoy", brokerageSlug: "keller-williams-elizabethtown", phone: "270-980-9095", role: "realtor" },
  { hkarId: "36560", name: "Kayla Nevills", brokerageSlug: "keller-williams-elizabethtown", phone: "270-723-5881", role: "realtor" },
  { hkarId: "37774", name: "Jennifer Phelps", brokerageSlug: "keller-williams-elizabethtown", phone: "502-551-0687", role: "realtor" },
  { hkarId: "36552", name: "Hailey Shelman", brokerageSlug: "keller-williams-elizabethtown", phone: "270-312-6782", role: "realtor" },
  { hkarId: "35421", name: "Maria Taul", brokerageSlug: "keller-williams-elizabethtown", phone: "270-763-3119", role: "realtor" },
  { hkarId: "34890", name: "Kaleb Voyles", brokerageSlug: "keller-williams-elizabethtown", phone: "270-547-8935", role: "realtor" },

  // olive-oak-realty (11)
  { hkarId: "37208", name: "Kera Basham", brokerageSlug: "olive-oak-realty", phone: "502-640-2577", role: "realtor" },
  { hkarId: "32963", name: "Ashley Bewley", brokerageSlug: "olive-oak-realty", phone: "270-723-4796", role: "realtor" },
  { hkarId: "37600", name: "Jessica Hardesty", brokerageSlug: "olive-oak-realty", phone: "502-389-8150", role: "realtor" },
  { hkarId: "34924", name: "Kristi Hardin", brokerageSlug: "olive-oak-realty", phone: "270-853-9519", role: "realtor" },
  { hkarId: "36852", name: "Rachel Hussain", brokerageSlug: "olive-oak-realty", phone: "270-706-2373", role: "realtor" },
  { hkarId: "36533", name: "Megan McDougal", brokerageSlug: "olive-oak-realty", phone: "270-847-6011", role: "realtor" },
  { hkarId: "34893", name: "Taryn Root", brokerageSlug: "olive-oak-realty", phone: "270-319-1416", role: "realtor" },
  { hkarId: "32639", name: "Tara Still", brokerageSlug: "olive-oak-realty", phone: "270-268-3848", role: "realtor" },
  { hkarId: "32378", name: "Beth Watkins", brokerageSlug: "olive-oak-realty", phone: "270-763-2484", role: "realtor" },
  { hkarId: "34943", name: "Erika Wiedeman", brokerageSlug: "olive-oak-realty", phone: "270-304-4204", role: "realtor" },
  { hkarId: "37032", name: "Nicole Williamson", brokerageSlug: "olive-oak-realty", phone: "270-872-6020", role: "realtor" },

  // remax-executive-group (41)
  { hkarId: "34231", name: "Brad Arnold", brokerageSlug: "remax-executive-group", phone: "270-734-0212", role: "realtor" },
  { hkarId: "34823", name: "Mary Ashburn", brokerageSlug: "remax-executive-group", phone: "270-505-5582", role: "realtor" },
  { hkarId: "34359", name: "Angela Ashe", brokerageSlug: "remax-executive-group", phone: "270-268-4055", role: "realtor" },
  { hkarId: "37164", name: "Patches Bell", brokerageSlug: "remax-executive-group", phone: "270-600-8763", role: "realtor" },
  { hkarId: "34316", name: "Blake Bramblett", brokerageSlug: "remax-executive-group", phone: "502-341-4440", role: "realtor" },
  { hkarId: "34255", name: "J.E. Bramblett", brokerageSlug: "remax-executive-group", phone: "270-769-1655", role: "designated-realtor" },
  { hkarId: "35820", name: "Tanasia Brashear", brokerageSlug: "remax-executive-group", phone: "270-734-2556", role: "realtor" },
  { hkarId: "34329", name: "Gregory Brownfield", brokerageSlug: "remax-executive-group", phone: "270-268-2599", role: "realtor" },
  { hkarId: "37474", name: "Sarah Buchanan", brokerageSlug: "remax-executive-group", phone: "270-234-7276", role: "realtor" },
  { hkarId: "34215", name: "Douglas Clinkenbeard", brokerageSlug: "remax-executive-group", phone: "270-735-1659", role: "realtor" },
  { hkarId: "33502", name: "Robin Cole", brokerageSlug: "remax-executive-group", phone: "502-644-0948", role: "realtor" },
  { hkarId: "36112", name: "Margaret Coursey", brokerageSlug: "remax-executive-group", phone: "270-874-7032", role: "realtor" },
  { hkarId: "34266", name: "Rhonda Crutcher", brokerageSlug: "remax-executive-group", phone: "270-317-1989", role: "realtor" },
  { hkarId: "33766", name: "Jerry Dempsey", brokerageSlug: "remax-executive-group", phone: "270-300-6013", role: "realtor" },
  { hkarId: "36493", name: "Ethan Devore", brokerageSlug: "remax-executive-group", phone: "270-872-9900", role: "realtor" },
  { hkarId: "33852", name: "Veronica Dilbeck", brokerageSlug: "remax-executive-group", phone: "270-769-1655", role: "realtor" },
  { hkarId: "34007", name: "Delaney Engle", brokerageSlug: "remax-executive-group", phone: "270-735-7895", role: "realtor" },
  { hkarId: "37275", name: "Amirr Evans", brokerageSlug: "remax-executive-group", phone: "270-401-8905", role: "realtor" },
  { hkarId: "37599", name: "David Feliciano", brokerageSlug: "remax-executive-group", phone: "409-553-6555", role: "realtor" },
  { hkarId: "34366", name: "Veronica A Francois-Phinazee", brokerageSlug: "remax-executive-group", phone: "270-300-5699", role: "realtor" },
  { hkarId: "34842", name: "Jenny Geist", brokerageSlug: "remax-executive-group", phone: "910-273-7727", role: "realtor" },
  { hkarId: "37338", name: "Steven Gibson", brokerageSlug: "remax-executive-group", phone: "318-423-2239", role: "realtor" },
  { hkarId: "34929", name: "Ma Jimenez Gutierrez", brokerageSlug: "remax-executive-group", phone: "270-401-3956", role: "realtor" },
  { hkarId: "37467", name: "Karl Hawkins", brokerageSlug: "remax-executive-group", phone: "270-723-7177", role: "realtor" },
  { hkarId: "32222", name: "Kathy Helm", brokerageSlug: "remax-executive-group", phone: "270-304-9263", role: "realtor" },
  { hkarId: "37058", name: "Steven Keen", brokerageSlug: "remax-executive-group", phone: "270-706-4926", role: "realtor" },
  { hkarId: "37462", name: "Stephanie Keyland", brokerageSlug: "remax-executive-group", phone: "859-553-6802", role: "realtor" },
  { hkarId: "37207", name: "Lily Ladd", brokerageSlug: "remax-executive-group", phone: "270-765-2638", role: "realtor" },
  { hkarId: "34855", name: "Tara Lopez", brokerageSlug: "remax-executive-group", phone: "270-723-2303", role: "realtor" },
  { hkarId: "32162", name: "Irvin Lyons", brokerageSlug: "remax-executive-group", phone: "270-312-4419", role: "realtor" },
  { hkarId: "36150", name: "John Oliver", brokerageSlug: "remax-executive-group", phone: "270-769-8723", role: "realtor" },
  { hkarId: "37404", name: "Jessica Pearl", brokerageSlug: "remax-executive-group", phone: "502-768-7229", role: "realtor" },
  { hkarId: "34327", name: "Janet L Perkins", brokerageSlug: "remax-executive-group", phone: "270-268-0111", role: "realtor" },
  { hkarId: "37047", name: "Lauren Roberts", brokerageSlug: "remax-executive-group", phone: "703-650-8291", role: "realtor" },
  { hkarId: "33776", name: "Kendra Scott", brokerageSlug: "remax-executive-group", phone: "270-312-7827", role: "realtor" },
  { hkarId: "36870", name: "Jesus Tamez-Garcia", brokerageSlug: "remax-executive-group", phone: "270-268-0333", role: "realtor" },
  { hkarId: "36759", name: "Nicole Trupp", brokerageSlug: "remax-executive-group", phone: "502-216-1677", role: "realtor" },
  { hkarId: "34265", name: "Stephanie Wade", brokerageSlug: "remax-executive-group", phone: "270-300-6224", role: "realtor" },
  { hkarId: "33633", name: "Robert Wilkins", brokerageSlug: "remax-executive-group", phone: "270-763-2303", role: "realtor" },
  { hkarId: "35087", name: "Brandon Yarbrough", brokerageSlug: "remax-executive-group", phone: "270-219-9029", role: "realtor" },
  { hkarId: "35887", name: "Ivanna Yeager", brokerageSlug: "remax-executive-group", phone: "270-589-0655", role: "realtor" },

  // schuler-bauer (32)
  { hkarId: "34834", name: "Natasha Clark", brokerageSlug: "schuler-bauer", phone: "270-300-9902", role: "realtor" },
  { hkarId: "32753", name: "Val Claycomb", brokerageSlug: "schuler-bauer", phone: "270-300-2753", role: "realtor" },
  { hkarId: "36414", name: "Pamela Ogden Crum", brokerageSlug: "schuler-bauer", phone: "270-272-4267", role: "realtor" },
  { hkarId: "36792", name: "Hope Cunningham", brokerageSlug: "schuler-bauer", phone: "270-763-7295", role: "realtor" },
  { hkarId: "34155", name: "David Earls", brokerageSlug: "schuler-bauer", phone: "502-974-4199", role: "realtor" },
  { hkarId: "34838", name: "Deanne Earls", brokerageSlug: "schuler-bauer", phone: "502-974-9627", role: "realtor" },
  { hkarId: "34839", name: "Rhonda Earls", brokerageSlug: "schuler-bauer", phone: "502-974-4200", role: "realtor" },
  { hkarId: "37198", name: "Elijah Fortner", brokerageSlug: "schuler-bauer", phone: "270-547-0754", role: "realtor" },
  { hkarId: "34866", name: "Christopher Heck", brokerageSlug: "schuler-bauer", phone: "502-612-3566", role: "realtor" },
  { hkarId: "32242", name: "Lisa Hornback", brokerageSlug: "schuler-bauer", phone: "270-723-1559", role: "realtor" },
  { hkarId: "33213", name: "Joseph Milesko II", brokerageSlug: "schuler-bauer", phone: "270-317-4392", role: "realtor" },
  { hkarId: "34936", name: "Hope Karlsen", brokerageSlug: "schuler-bauer", phone: "270-506-9366", role: "realtor" },
  { hkarId: "33902", name: "Lee Kershaw", brokerageSlug: "schuler-bauer", phone: "360-518-4535", role: "realtor" },
  { hkarId: "32051", name: "Angela LaPierre", brokerageSlug: "schuler-bauer", phone: "270-268-3844", role: "managing-agent" },
  { hkarId: "36659", name: "Ivie Lally", brokerageSlug: "schuler-bauer", phone: "270-668-2402", role: "realtor" },
  { hkarId: "33687", name: "April Meredith", brokerageSlug: "schuler-bauer", phone: "270-765-9579", role: "realtor" },
  { hkarId: "32019", name: "Jason Murrell", brokerageSlug: "schuler-bauer", phone: "270-505-0652", role: "realtor" },
  { hkarId: "32813", name: "Jeremy Murrell", brokerageSlug: "schuler-bauer", phone: "270-505-0552", role: "realtor" },
  { hkarId: "33804", name: "Melissa Murrell", brokerageSlug: "schuler-bauer", phone: "270-272-6481", role: "realtor" },
  { hkarId: "36968", name: "Brittany Newton", brokerageSlug: "schuler-bauer", phone: "270-200-0901", role: "realtor" },
  { hkarId: "33020", name: "Edward Parker", brokerageSlug: "schuler-bauer", phone: "270-766-4068", role: "realtor" },
  { hkarId: "36301", name: "Jessica Parnell", brokerageSlug: "schuler-bauer", phone: "931-996-9220", role: "realtor" },
  { hkarId: "34774", name: "Veronica Paulk", brokerageSlug: "schuler-bauer", phone: "270-501-0321", role: "realtor" },
  { hkarId: "33574", name: "Hannah Pharis-Keown", brokerageSlug: "schuler-bauer", phone: "270-589-8376", role: "realtor" },
  { hkarId: "36581", name: "Shasta Philpot", brokerageSlug: "schuler-bauer", phone: "270-317-7734", role: "realtor" },
  { hkarId: "34888", name: "Tyler Skaggs", brokerageSlug: "schuler-bauer", phone: "502-551-0123", role: "realtor" },
  { hkarId: "33754", name: "Denita Taylor", brokerageSlug: "schuler-bauer", phone: "270-766-3846", role: "realtor" },
  { hkarId: "34406", name: "Ellen J Thompson", brokerageSlug: "schuler-bauer", phone: "270-319-2071", role: "realtor" },
  { hkarId: "35416", name: "Richard Thompson", brokerageSlug: "schuler-bauer", phone: "270-300-2545", role: "realtor" },
  { hkarId: "37297", name: "Sharron Tucker", brokerageSlug: "schuler-bauer", phone: "803-412-6013", role: "realtor" },
  { hkarId: "33774", name: "Ron VanBlijenburgh", brokerageSlug: "schuler-bauer", phone: "270-317-0821", role: "realtor" },
  { hkarId: "37448", name: "Jessica Whitlock", brokerageSlug: "schuler-bauer", phone: "270-766-7059", role: "realtor" },
];

/** Agents at one brokerage, alphabetical by surname as the roster lists them. */
export function agentsFor(brokerageSlug: string): Agent[] {
  return agents.filter((a) => a.brokerageSlug === brokerageSlug);
}

/** Designated and managing brokers lead the office; useful for ordering. */
export function isPrincipal(a: Agent): boolean {
  return a.role !== "realtor";
}

export const ROLE_LABEL: Record<AgentRole, string> = {
  realtor: "REALTOR",
  "designated-realtor": "Designated REALTOR",
  "managing-agent": "Managing agent",
};
