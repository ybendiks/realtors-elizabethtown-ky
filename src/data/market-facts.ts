/**
 * Single source of truth for every statistic published on this site.
 *
 * RULE: no number here may be estimated, interpolated, or "refreshed" by judgement.
 * Every value must trace to a row in tasks/data-sources.md with a real source and date.
 * If a figure cannot be sourced, delete the claim rather than guess at it.
 *
 * Last full data review: 2026-10-18
 */

export interface SourcedFact<T> {
  value: T;
  /** Human-readable period, rendered to users. e.g. "September 2026" */
  asOf: string;
  /** ISO date for JSON-LD dateModified. */
  isoDate: string;
  source: string;
  sourceUrl: string;
  /** Caveat for editors, never rendered. */
  note?: string;
}

/** Date of the most recent full verification pass. Drives sitewide dateModified. */
export const LAST_DATA_REVIEW = "2026-10-18";

const REDFIN_URL = "https://www.redfin.com/city/6247/KY/Elizabethtown/housing-market";
const ZILLOW_RENT_URL =
  "https://www.zillow.com/rental-manager/market-trends/elizabethtown-ky/";
const PVA_URL = "https://www.qpublic.net/ky/hardin/rates.html";
const PMMS_URL = "https://www.freddiemac.com/pmms";

// ---------------------------------------------------------------------------
// Housing market - Redfin, 3 months ending September 2026
// ---------------------------------------------------------------------------

export const MEDIAN_SALE_PRICE: SourcedFact<number> = {
  value: 304005,
  asOf: "September 2026",
  isoDate: "2026-09-30",
  source: "Redfin",
  sourceUrl: REDFIN_URL,
  note: "Median SALE price, 3-month rolling. Not the same as median list price.",
};

export const MEDIAN_SALE_PRICE_YOY: SourcedFact<number> = {
  value: 6.5,
  asOf: "September 2026",
  isoDate: "2026-09-30",
  source: "Redfin",
  sourceUrl: REDFIN_URL,
};

export const DAYS_ON_MARKET: SourcedFact<number> = {
  value: 63,
  asOf: "September 2026",
  isoDate: "2026-09-30",
  source: "Redfin",
  sourceUrl: REDFIN_URL,
  note: "Days for SOLD homes. Active inventory sits far longer (~100 days).",
};

export const PRICE_PER_SQFT: SourcedFact<number> = {
  value: 170,
  asOf: "September 2026",
  isoDate: "2026-09-30",
  source: "Redfin",
  sourceUrl: REDFIN_URL,
};

export const SALE_TO_LIST: SourcedFact<number> = {
  value: 98.1,
  asOf: "September 2026",
  isoDate: "2026-09-30",
  source: "Redfin",
  sourceUrl: REDFIN_URL,
};

export const HOMES_SOLD_MONTHLY: SourcedFact<number> = {
  value: 135,
  asOf: "September 2026",
  isoDate: "2026-09-30",
  source: "Redfin",
  sourceUrl: REDFIN_URL,
};

/** Active inventory asking price - a DIFFERENT statistic from MEDIAN_SALE_PRICE. */
export const MEDIAN_LIST_PRICE: SourcedFact<number> = {
  value: 349950,
  asOf: "October 2026",
  isoDate: "2026-10-18",
  source: "Zillow active listings (n=144 residential)",
  sourceUrl: "https://www.zillow.com/elizabethtown-ky/",
  note: "Asking prices of CURRENT inventory. Skews high; never present as the market median.",
};

// ---------------------------------------------------------------------------
// Rentals - Zillow Rentals, 15 October 2026
// ---------------------------------------------------------------------------

export const AVG_RENT_ALL_BEDS: SourcedFact<number> = {
  value: 1380,
  asOf: "October 2026",
  isoDate: "2026-10-15",
  source: "Zillow Rentals",
  sourceUrl: ZILLOW_RENT_URL,
  note: "All bedroom counts and property types combined. Down $95 year over year.",
};

export const AVG_RENT_YOY_CHANGE: SourcedFact<number> = {
  value: -95,
  asOf: "October 2026",
  isoDate: "2026-10-15",
  source: "Zillow Rentals",
  sourceUrl: ZILLOW_RENT_URL,
};

export const RENTALS_AVAILABLE: SourcedFact<number> = {
  value: 126,
  asOf: "October 2026",
  isoDate: "2026-10-15",
  source: "Zillow Rentals",
  sourceUrl: ZILLOW_RENT_URL,
};

// ---------------------------------------------------------------------------
// Demographics - US Census QuickFacts
// ---------------------------------------------------------------------------

export const POPULATION: SourcedFact<number> = {
  value: 35448,
  asOf: "July 2025",
  isoDate: "2025-07-01",
  source: "U.S. Census Bureau QuickFacts",
  sourceUrl:
    "https://www.census.gov/quickfacts/fact/table/elizabethtowncitykentucky/PST045224",
  note: "Up 12.9% from the 2020 census count of 31,394.",
};

// ---------------------------------------------------------------------------
// Mortgage rates - Freddie Mac PMMS, 15 October 2026
// ---------------------------------------------------------------------------

export const MORTGAGE_RATE_30YR: SourcedFact<number> = {
  value: 7.4,
  asOf: "October 2026",
  isoDate: "2026-10-15",
  source: "Freddie Mac Primary Mortgage Market Survey",
  sourceUrl: PMMS_URL,
  note: "Moves weekly. Any worked example using it needs the as-of date beside it.",
};

export const MORTGAGE_RATE_15YR: SourcedFact<number> = {
  value: 6.71,
  asOf: "October 2026",
  isoDate: "2026-10-15",
  source: "Freddie Mac Primary Mortgage Market Survey",
  sourceUrl: PMMS_URL,
};

// ---------------------------------------------------------------------------
// Property tax - Hardin County PVA, 2025 rate schedule
// ---------------------------------------------------------------------------

/**
 * Combined rates in dollars per $100 of assessed value, for a home inside
 * Elizabethtown city limits. The rate depends on SCHOOL DISTRICT - a ~20% swing
 * that the site previously flattened into a single misleading figure.
 */
export const PROPERTY_TAX_RATES = {
  hardinCountySchool: 1.015,
  etownIndependentSchool: 1.22,
  components: {
    state: 0.106,
    county: 0.108,
    agExtension: 0.018,
    health: 0.022,
    soil: 0.002,
    schoolHardinCounty: 0.652,
    schoolEtownIndependent: 0.857,
    cityElizabethtown: 0.107,
  },
  otherCityRates: {
    radcliff: 0.129,
    vineGrove: 0.163,
    sonora: 0.2,
    upton: 0.25,
    westPoint: 0.268,
  },
  asOf: "2025 rate schedule",
  isoDate: "2025-01-01",
  source: "Hardin County PVA",
  sourceUrl: PVA_URL,
} as const;

export const HOMESTEAD_EXEMPTION: SourcedFact<number> = {
  value: 49100,
  asOf: "2025-2026 tax period",
  isoDate: "2025-01-01",
  source: "Kentucky Department of Revenue / Hardin County PVA",
  sourceUrl: PVA_URL,
  note: "Re-indexed every two years. Next change due for the 2027-2028 cycle.",
};

// ---------------------------------------------------------------------------
// Fort Knox BAH - 2026 rates, effective 1 January 2026
// ---------------------------------------------------------------------------

export interface BahRow {
  rank: string;
  withDep: number;
  withoutDep: number;
}

export const BAH_YEAR = 2026;

/**
 * 2027 rates publish around December 2026, effective 1 January 2027.
 * Everything is keyed off BAH_YEAR so the annual swap is one edit in this file.
 */
export const BAH_NEXT_UPDATE_DUE = "2026-12-15";

export const BAH_RATES: SourcedFact<BahRow[]> = {
  value: [
    { rank: "E-1", withDep: 1575, withoutDep: 1350 },
    { rank: "E-2", withDep: 1575, withoutDep: 1350 },
    { rank: "E-3", withDep: 1575, withoutDep: 1350 },
    { rank: "E-4", withDep: 1575, withoutDep: 1350 },
    { rank: "E-5", withDep: 1647, withoutDep: 1443 },
    { rank: "E-6", withDep: 2136, withoutDep: 1602 },
    { rank: "E-7", withDep: 2241, withoutDep: 1680 },
    { rank: "E-8", withDep: 2352, withoutDep: 1764 },
    { rank: "E-9", withDep: 2505, withoutDep: 1893 },
    { rank: "W-1", withDep: 2157, withoutDep: 1617 },
    { rank: "W-2", withDep: 2286, withoutDep: 1746 },
    { rank: "W-3", withDep: 2424, withoutDep: 1911 },
    { rank: "W-4", withDep: 2538, withoutDep: 2157 },
    { rank: "W-5", withDep: 2679, withoutDep: 2265 },
    { rank: "O-1E", withDep: 2259, withoutDep: 1695 },
    { rank: "O-2E", withDep: 2403, withoutDep: 1860 },
    { rank: "O-3E", withDep: 2559, withoutDep: 2130 },
    { rank: "O-1", withDep: 1710, withoutDep: 1503 },
    { rank: "O-2", withDep: 2133, withoutDep: 1683 },
    { rank: "O-3", withDep: 2421, withoutDep: 1956 },
    { rank: "O-4", withDep: 2724, withoutDep: 2241 },
    { rank: "O-5", withDep: 2943, withoutDep: 2301 },
    { rank: "O-6", withDep: 2964, withoutDep: 2403 },
    { rank: "O-7", withDep: 2985, withoutDep: 2442 },
  ],
  asOf: "2026 (effective 1 January 2026)",
  isoDate: "2026-01-01",
  source: "Defense Travel Management Office 2026 BAH rate file, MHA KY110",
  sourceUrl: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/",
  note:
    "Full 24-grade table for the Fort Knox MHA (KY110), both dependency statuses, " +
    "verified 2026-10-18 against a published DTMO mirror. Replace wholesale when the " +
    "2027 file publishes - see BAH_NEXT_UPDATE_DUE.",
};

// ---------------------------------------------------------------------------
// Formatters
// ---------------------------------------------------------------------------

export function usd(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

/** Rounds to the nearest $1,000 for prose that should not imply false precision. */
export function usdApprox(n: number): string {
  return "$" + (Math.round(n / 1000) * 1000).toLocaleString("en-US");
}

/** "(Redfin, September 2026)" - the standard inline attribution. */
export function attribution(f: { source: string; asOf: string }): string {
  return "(" + f.source + ", " + f.asOf + ")";
}

/**
 * The loan a given monthly payment supports, the inverse of monthlyPI.
 * Used to turn a BAH rate into a purchase budget.
 */
export function loanFromPayment(
  payment: number,
  annualRatePct: number = MORTGAGE_RATE_30YR.value,
  years: number = 30,
): number {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return payment * n;
  return (payment * (1 - Math.pow(1 + r, -n))) / r;
}

/**
 * Monthly principal + interest on a fully amortising loan.
 * Worked examples must be computed, never written as literals, so they cannot
 * drift away from MORTGAGE_RATE_30YR when the rate is updated.
 */
export function monthlyPI(
  principal: number,
  annualRatePct: number = MORTGAGE_RATE_30YR.value,
  years: number = 30,
): number {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

/** Pay-grade groupings for rendering the BAH table. */
export const BAH_GROUPS: { label: string; ranks: string[] }[] = [
  { label: "Enlisted", ranks: ["E-1", "E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9"] },
  { label: "Warrant Officer", ranks: ["W-1", "W-2", "W-3", "W-4", "W-5"] },
  { label: "Commissioned Officer (Prior Enlisted)", ranks: ["O-1E", "O-2E", "O-3E"] },
  { label: "Commissioned Officer", ranks: ["O-1", "O-2", "O-3", "O-4", "O-5", "O-6", "O-7"] },
];
