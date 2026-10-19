# Sourced market facts — etownkyrealtors.com

Every figure published on the site must trace to a row here. Retrieved 2026-10-18 unless noted.
**No number on this site may be estimated, interpolated, or "refreshed" by judgement.**

## Confirmed corrections (site is wrong)

| Fact | Site currently says | Verified value | Source | As of |
|---|---|---|---|---|
| Median home price | **$250,000** (11 places) | **$304,005** median *sale* price, +6.5% YoY | Redfin Elizabethtown housing market | 3 months ending Sep 2026 |
| Avg days on market | **49** (home) / **40** (market) | **63** days | Redfin | Sep 2026 |
| Population | **32,500** / **33,000** | **35,448** | US Census QuickFacts (V2025) | Jul 1 2025 est. |
| Homestead exemption | **$46,350** | **$49,100** | Hardin County PVA rates table | 2025/26 cycle |
| State property tax rate | **$0.1220** / $100 | **$0.1060** / $100 | Hardin County PVA | 2025 schedule |
| County property tax rate | **~$0.476** / $100 | **$0.1080** / $100 | Hardin County PVA | 2025 schedule |
| Mortgage rate in examples | **6.5%** / **7%** | **7.40%** 30-yr fixed | Freddie Mac PMMS | Oct 15 2026 |
| BAH 2026 increase | **7.2%** / **5-7%** (contradictory) | ~**8.1%** — *not officially verified* | vetcalc.org (DTMO mirror) | 2026 |

The PVA page explicitly lists both `HOMESTEAD/DISABILITY EX 2025/26 - $49,100` and
`HOMESTEAD/DISABILITY EX 2023/24 - $46,350` — direct confirmation the site is one cycle behind.

## Property tax: the site's single combined rate is misleading

The combined rate depends on **which school district** the home sits in — a ~20% swing the
site does not mention. From the Hardin County PVA 2025 Real Estate Tax Rate Schedule
(cents per $100 of assessed value):

| Component | Hardin Co. School | E-town Independent School |
|---|---|---|
| State | 10.60 | 10.60 |
| School | 65.20 | 85.70 |
| County | 10.80 | 10.80 |
| Ag Extension | 1.80 | 1.80 |
| Health | 2.20 | 2.20 |
| Soil | 0.20 | 0.20 |
| **District total** | **90.80** | **111.30** |
| + City of E-town real estate | 10.70 | 10.70 |
| **Combined (in city limits)** | **$1.0150 / $100** | **$1.2200 / $100** |

The site's flat "$1.07 per $100" matches neither. Other city rates: Radcliff 12.9,
Vine Grove 16.3, Sonora 20.0, Upton 25.0, West Point 26.8.

## Verified correct (no change needed)

| Fact | Value | Source |
|---|---|---|
| BAH E-5 w/dependents | $1,647/mo | matches DTMO mirrors |
| BAH E-3 w/dependents | $1,575/mo | matches |
| BAH O-3 w/dependents | $2,421/mo | matches |

The 2026 BAH **table** is accurate. Only the year-over-year *increase* claim is wrong,
and it contradicts itself across two pages.

## New sourced figures available to use

| Fact | Value | Source | As of |
|---|---|---|---|
| Median sale $/sqft | $170, +12.6% YoY | Redfin | Sep 2026 |
| Sale-to-list ratio | 98.1% | Redfin | Sep 2026 |
| Homes sold in month | 135 (up from 117) | Redfin | Sep 2026 |
| Redfin Compete Score | 43 — "somewhat competitive" | Redfin | Sep 2026 |
| Median **active list** price | $349,950 (n=144 residential) | Zillow via Apify | Oct 18 2026 |
| Median active $/sqft | $155 | Zillow via Apify | Oct 18 2026 |
| Average rent, all beds | $1,380 — **down $95 YoY** | Zillow Rentals | Oct 15 2026 |
| Available rentals | 126 | Zillow Rentals | Oct 15 2026 |
| Rental market temperature | COOL | Zillow Rentals | Oct 15 2026 |
| 15-yr fixed mortgage | 6.71% | Freddie Mac PMMS | Oct 15 2026 |

### Do not conflate list price with sale price
Median **active list** ($349,950) and median **sale** ($304,005) are different statistics.
Active inventory skews high because expensive homes accumulate in the pool — median days on
Zillow for current active listings is 100, against 63 days to sell. Publish each only with
its own label.

### Rent figures are a known gap
The site publishes per-bedroom rents (1BR $850, 2BR $1,050, 3BR $1,250) that are **not
sourced**. The only sourced figure available is Zillow's all-bedroom average of $1,380, which
is not directly comparable. Per the governing constraint these per-bedroom claims must be
re-sourced or removed — not adjusted by estimation. Note the direction of the error: the site
presents E-town rents as low, while the sourced average is higher and the market is cooling.

## Still unverified — do not publish as fact
- Official DoD/DTMO confirmation of the 2026 BAH year-over-year increase (third-party only).
- 2027 BAH rates — publish ~Dec 2026, effective Jan 1 2027. **Diary this.**
- Compass & Key Group review count (hardcoded `"25"` in `aggregateRating` structured data).
- Per-bedroom rent medians.
- School enrollment figures in `src/data/schools.ts` (no source year on any of them).

---

## Agent roster (added 2026-10-18)

**Source:** Heart of Kentucky Association of REALTORS public member directory,
`hkar.com`, agent lister at `index.php?src=directory&view=rets_agent&...&pos=OFFSET,15,643`.
Retrieved 2026-10-18. Stored in `src/data/agents.ts`.

**Fields taken:** name, phone, HKAR membership class (REALTOR, Designated
REALTOR, Managing agent), HKAR member id. Nothing else. The public listing
carries no tenure, sales volume or licence number, so none is published.

### The lister is non-deterministic, and one pass is not enough

Repeated requests to the same `pos=` offset return different members, so a
single sweep silently under-reports. Two independent single passes returned
different Real Broker rosters, one of which omitted Austin Kutz entirely.

The published set is the **union of eight passes**, continued until all 643
association members had been seen at least once. Convergence was measured, not
assumed: distinct members seen went 608 -> 637 -> 643 across the passes, and
the per-brokerage counts stopped moving at 122.

**If this is ever refreshed, run it to convergence the same way.** A single
pass will produce a plausible but incomplete roster, which is the worst kind of
wrong because nothing about it looks broken.

### Counts

| Brokerage | Agents published |
|---|---|
| RE/MAX Executive Group | 41 |
| Schuler Bauer ERA Powered (Elizabethtown) | 32 |
| Keller Williams Heartland | 19 |
| Olive + Oak Realty | 11 |
| Coldwell Banker McMahan | 9 |
| Compass and Key Group | 3 |
| **Total** | **115** |

### Phone: the profile mismatch is call tracking, not an error

The site uses (270) 735-3897; the Google Business Profile shows
(270) 817-3311. The owner confirms the profile number is call tracking.
Neither should be "corrected" to match the other.

### Compass and Key Group: 3 of 10, confirmed by the owner

CKG is not a separate HKAR office. It trades under **Real Broker, LLC**, which
has 10 HKAR members spread across several independent teams in this area, so
the roster on its own cannot say who belongs to CKG.

The owner confirmed the team on 2026-10-18: **Austin Kutz**, **Ciara Hardesty**
and **Steve Nikirk**. Two of the three corroborate independently:

- **Austin Kutz** (HKAR 35704) - roster phone `270-735-3897` matches `CKG.phone` exactly.
- **Steve Nikirk** (HKAR 33303) - his own Google Business Profile reads
  "Steve Nikirk, Compass and Key Group - Real Broker, LLC" at 617 N Mulberry St #105B,
  the same address as CKG.
- **Ciara Hardesty** (HKAR 37235, `270-734-5552`) - on the Real Broker roster;
  team membership is on the owner's confirmation, which is the authoritative
  source for who works there.

The remaining seven Real Broker members (Andrew Pruitt, Christopher Harris,
Denise Wisdom, Kelly Crutcher, Melody Duvall, Terry Brown, Thue Ignacio) are
not Compass and Key Group and are excluded.

### Cross-validation

Four of the published names independently appear on competing pages that rank
for the target term, which is a useful sanity check on the roster:
Jerry Dempsey and Jessica Parnell on fastexpert's top-agents list, Douglas
Clinkenbeard and Stephanie Wade on Zillow's Elizabethtown agent list.

### Deliberately not done: individual agent pages

Name, phone and membership class is roughly 60 words of substance. Three
brokerage pages were removed from this site days ago for exactly that thinness,
and adding 114 pages of it would repeat the mistake at scale. Agents are listed
on their brokerage's page and counted on the comparison page. Individual pages
only become defensible if a source for per-agent detail (tenure, transaction
history, specialisms) is found and logged here first.

### Inventory below the E-5 BAH threshold

| Fact | Value | Source | As of |
|---|---|---|---|
| Active residential listings, Elizabethtown | 164 | Zillow via Apify | 2026-10-18 |
| ...at or below $238,000 | 23 (14%, about one in seven) | same scrape | 2026-10-18 |

$238,000 is the loan an E-5-with-dependents allowance of $1,647 supports at the
Freddie Mac 30-year rate of 7.40%, computed by `loanFromPayment()` in
`market-facts.ts` rather than written as a literal.

An earlier draft said there was "steady inventory at that level across
Elizabethtown, Radcliff and Vine Grove". The scrape supports neither the other
two cities nor the word "steady": all 23 qualifying listings were in
Elizabethtown. Corrected to the measured one-in-seven figure.
