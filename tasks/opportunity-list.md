# Ranked content opportunities — etownkyrealtors.com

From DataForSEO Labs keyword and live SERP pulls, 2026-10-18. Baseline: the site
ranks for 65 keywords, none in the top three, with ~8 of 111 pages ranking at all.

## The ranking, and the reasoning

| # | Opportunity | Vol/mo | Now | Winnable? | Verdict |
|---|---|---|---|---|---|
| 1 | Agent / directory comparison | ~3,520 | p39 | **Yes** | **Build now** |
| 2 | Fort Knox BAH cluster | ~400 | **p9-13** | Already won | **Defend — hard deadline** |
| 3 | Cost of living / "good place to live" | ~100 | p9-12 | Already won | Extend |
| 4 | Things to do / tourism | large | p25-28 | Partly | Low commercial value |
| 5 | Homes for sale | ~54,000 | — | **No** | **Do not attempt** |
| 6 | Rentals / apartments | ~49,180 | — | **No** | **Do not attempt** |

Cluster volumes are summed across near-duplicate variants that Google groups, so
treat them as relative scale, not additive traffic forecasts.

---

## 1. Agent / directory comparison — build this

Lower volume than the listings clusters by an order of magnitude, and it is still
the top priority, because it is the only commercially valuable cluster this site
can actually win. It is also the thing the site already claims to be.

Current state: `elizabethtown realtors` p28, `realtor elizabethtown ky` p39,
`realtors elizabethtown ky` p42, `elizabethtown ky real estate agents` p62.

**What the SERP for "best realtors in elizabethtown ky" actually rewards** —
every result is an agent-comparison page, and almost all of them list *named
individual agents*:

| # | Result | Format |
|---|---|---|
| 1 | bestsellshomes.com | Brokerage homepage, "Best Realtors" in the title |
| 2 | zillow.com | Named agents with reviews |
| 3 | yelp.com | "TOP 10 BEST Realtor near Elizabethtown" |
| 4 | fastexpert.com | **Numbered list of named agents** |
| 5 | realestate.usnews.com | Named agents **plus an FAQ block** |
| 6 | realtor.com | Agents with years of experience and listing counts |
| 7 | schulerbauer.com | Office page: agent names, phones, license numbers |
| 10 | olive-oak.com | Comparison blog post by a competitor brokerage |

**The format finding that matters: this SERP is won at the agent level, not the
brokerage level.** This site's directory is organised by brokerage. Every page
outranking it names individual people, usually with experience, licence number
or listing count attached.

Also worth noting: **Austin Kutz already appears at #4 on the fastexpert list**,
so the client has independent third-party validation that the site itself does
not currently surface.

**Done in this phase:** a brokerage-level comparison page at
`/realtors/best-realtors-elizabethtown-ky/`, built on the five brokerages whose
details were verified against the HKAR roster.

**Not done, and the bigger prize:** agent-level coverage. HKAR publishes an agent
directory per office, which is an authoritative source. Matching the format that
actually wins this SERP means sourcing named agents with licence numbers — real
work, and it should not be done by guessing. Treat as the next project.

## 2. Fort Knox BAH — defend, with a deadline

`bah fort knox 2026` p9, `fort knox zip code bah` p9, `bah fort knox` p13. Small
volume, but it is the only near-page-one position on the site and it is defensible
because it is informational: no listings feed required.

**2027 rates publish around December 2026.** Whoever updates first takes the
"2027 BAH Fort Knox" cluster from a standing start. `BAH_NEXT_UPDATE_DUE` in
`market-facts.ts` flags it; the full 24-grade table swaps in one edit.

## 3. Cost of living — extend

`elizabethtown ky cost of living` p9, `cost of living in elizabethtown ky` p11,
`is elizabethtown ky a good place to live` p12. Informational, winnable, and
feeds relocation intent, which is the site's actual audience. Now backed by
sourced figures, which is exactly what this query type rewards.

## 4. Things to do — already carrying the site, low commercial value

`/elizabethtown/things-to-do/` accounts for roughly 30 of the 65 ranking
keywords. It is why DataForSEO returns tripadvisor, touretown.com and
kentuckytourism.com as the site's closest competitors. It brings visitors who
are not buying houses. Maintain; do not invest further.

## 5 & 6. Listings intents — do not attempt

`homes for sale elizabethtown ky` is 5,400/mo at **KD 2**, which makes it look
like the easiest win on the board. It is not.

The live top 15 is **100% portals with live inventory counts**: realtor.com
("365 single family homes"), Zillow ×3, Trulia, Redfin, eXp, Century 21,
buyowner, forsalebyowner, and hardinhomes.com — a local IDX site. Not one static
content page ranks.

The barrier is not link difficulty, it is **content type**. Google serves a
listings SERP here, and a static export with no MLS feed cannot satisfy it. The
same holds for `houses for rent elizabethtown ky` (1,900/mo, KD 3) and
`elizabethtown ky apartments` (2,900/mo).

Winning these requires an IDX/MLS integration — a different project with a
different cost structure and ongoing data licensing. Worth a separate
conversation; not worth a single static page.

## Housekeeping

`/contact/` ranks for geography the business does not serve — `realtors
middlesboro ky`, `real estate agents morehead ky`, `realtors in leitchfield ky`,
`your town realtors`. These are accidental, bring unqualified traffic, and make
the page look spun. Worth tightening the copy.
