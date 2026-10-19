# Content refresh — status

Branch `feat/content-refresh` merged to `main` and deployed 2026-10-18.

## Phase 1 — integrity & freshness ✅

- [x] Pull sourced market data (Redfin, Zillow, Census, Freddie Mac, Hardin County PVA, DTMO)
- [x] Build `src/data/market-facts.ts` as the single source of truth
- [x] Replace hardcoded statistics sitewide
- [x] Add `dateModified` and visible as-of lines
- [x] Rewrite the sitemap generator

Seven factual errors corrected. Full table in `data-sources.md`.

## Phase 2 — verification & expansion ✅

- [x] Verify all 8 brokerages against the 160-office HKAR roster
- [x] Expand profiles with verified detail; make contact fields nullable
- [x] Build reusable `Faq` component
- [x] Add FAQs to the 6 thinnest Fort Knox pages
- [x] Add JSON-LD to the 29 pages that had none
- [x] Remove 3 unverifiable brokerages; migrate the Coldwell Banker slug

## Phase 3 — not started

- [ ] Rank the keyword opportunity list from the DataForSEO pulls
- [ ] Build a "Best Realtors in Elizabethtown KY" comparison page
- [ ] Decide how to handle Olive + Oak, which is both a directory entry and
      the strongest organic competitor

## Review

The brief was "refresh the site and add content updates". The data said the
problem was not volume. The site had 111 pages and ranked for 65 keywords with
nothing in the top three; what it actually had was a correctness problem —
every statistic eight months stale, several contradicting each other across
pages, and half the competitor directory describing businesses that were
wrong or could not be confirmed to exist.

So the work went to accuracy before volume. The clearest example: the site told
military buyers that BAH covers a mortgage here, published as FAQ structured
data. At the real median and the real rate it misses by $458 a month. Adding
content on top of that would have been the wrong job.

Two things deliberately **not** done:

1. **No page targets "homes for sale" intent.** That cluster (5,400/mo, KD 2)
   looks like the easiest win available. The live SERP is 100% listing portals
   with live inventory counts. A static export cannot satisfy it; winning it
   needs an IDX/MLS integration, which is a different project.
2. **The realtor profiles were not padded.** They grew 40-60% on verified facts
   and stopped at ~190 words because no further verified information existed.
   Padding is what made them doorway pages to begin with.

### Standing maintenance

- **2027 BAH rates** publish around December 2026 — `BAH_NEXT_UPDATE_DUE` in
  `market-facts.ts`. The Fort Knox BAH cluster is the site's only near-page-one
  asset, so this one has a real deadline.
- **Homestead exemption** re-indexes for the 2027-2028 cycle.
- **Mortgage rate** moves weekly; worked examples compute from it via
  `monthlyPI()`, so only the constant needs changing.
- `aggregateRating` now publishes 5.0 from 94, verified against the Google
  Business Profile and linked from the page via `sameAs`. Review counts only
  grow, so re-check it periodically and update `CKG.reviewsAsOf` with it.
- **NAP mismatch, owner action:** the site and compassandkeygroup.com use
  (270) 735-3897; the Google Business Profile lists (270) 817-3311. Site and
  profile disagreeing is a local-ranking signal, and `sameAs` now makes it
  machine-checkable. Resolve by updating the profile, not the site.
- Ryan Wheeler's `reviewCount: 311` in `constants.ts` is still unverified,
  the same pattern as CKG's old 25. Deliberately left for now.

## Phase 3 — done

- [x] Rank the keyword opportunity list (`opportunity-list.md`)
- [x] Build `/realtors/best-realtors-elizabethtown-ky/`
- [x] Make nav dropdown links crawlable (they were in no page's static HTML)
- [x] Correct the review count and link the Google profile
- [x] Correct the address to 617 N Mulberry St #105B and centralise NAP on `CKG`

## Phase 4 - agent-level coverage ✅

- [x] Scrape the HKAR roster to convergence (the lister is non-deterministic)
- [x] Add `src/data/agents.ts` with 115 verified agents across six brokerages
- [x] Surface them via `AgentList` on every brokerage page
- [x] Add agent counts to the comparison table
- [x] Emit agents as `Person` under the brokerage's `employee` property

Compass and Key Group is listed with its three agents (Austin Kutz, Ciara
Hardesty, Steve Nikirk), confirmed by the owner. CKG trades under Real Broker,
LLC, which has ten HKAR members across several independent teams; the other
seven are not CKG.

**No individual agent pages.** The roster publishes only name, phone and
membership class, which is roughly 60 words. Three brokerage pages were removed
from this site for exactly that thinness. Individual pages become defensible
only if a source for per-agent detail (tenure, transaction history,
specialisms) is found and logged in `data-sources.md` first.

**If the roster is ever refreshed:** run it to convergence. The HKAR lister
returns different members on repeated requests to the same offset, so a single
pass produces a plausible but incomplete roster. The published set is the union
of eight passes, continued until all 643 association members had been seen.

## Phase 5 - full copy review ✅

A three-part review of all 108 pages found 66 items. Fixed in four commits.

**Regressions I had introduced** (all passed typecheck, lint and build):
- 14 H1 headings read as lists where a title separator became a comma
- six sentences lost their connector where an em-dash sat after a `</Link>`
- testimonials rendered as ", James"
- the contact page shipped a literal `{CKG.phone}` in its meta description

**Copy that sold for the competition** (mine): Olive + Oak's profile published
our own SEO analysis and certified them on CKG's ground; RE/MAX was "a
practical first call"; a Fort Knox FAQ told readers to join a referral
programme "before you contact an agent"; the agent rosters gave ~110
competitor agents one-tap dial buttons.

**Pre-existing credibility problems:** seven neighbourhood entries claimed BAH
grades could afford homes they cannot (an E-5 was $62k short of the Nicholas
Ridge floor); the PCS guide quoted two different medians on one page;
appreciation appeared as both 4-6% and 3-5% with a projected future value;
three pages carried the pre-2024 "representation costs you nothing" line;
four subdivision names appeared in prose with no page behind them; Freeman
Lake Park was 164 acres containing a 170-acre lake; Hodgenville was placed in
three directions.

**Conversion:** the 14 neighbourhood and 7 things-to-do pages had no tappable
call button; the contact page closed by recruiting competitor agents; the
directory hub had no CTA at all.

**Template tells:** all 14 neighbourhood openings shared one sentence shape;
the five nearby-community entries shared a heading and closing sentence;
Haycraft Park opened three paragraphs with what it lacks; five passages cited
survey-grade social proof with no survey behind it.

### Standing rules this established

- **BAH budgets are quoted as PITI, not principal and interest.** The
  allowance has to cover tax and insurance too. At 7.40%: E-5 $198k, E-6
  $261k, O-3 $297k, O-4 $336k, O-5 $365k. `loanFromPayment()` computes it.
- **CKG is not a military-only agency.** Non-military buyers are most of the
  business. Military and VA depth is a differentiator, not the boundary.
- **Describe competitors, never recommend them.** Five accurate competitor
  profiles are why the directory is credible. "First call", "just as well"
  and anything resembling a referral are not.
- **A passing build proves nothing about copy.** Every regression in this
  phase compiled cleanly. Grep the rendered output, not the source.

## Phase 6 - conversion work ✅

- [x] Removed the "Our Featured Agency" section from About, at the owner's
      direction. A directory that announces who it favours invites the reader
      to discount everything else on it. The About body now carries no CKG
      mention; the sidebar widget stays, since a listing is not an endorsement.
- [x] Built the missing `/guides/` hub. All five guides had breadcrumbed to
      `/guides/buying-home-elizabethtown/`, so "Guides" pointed at a guide.
- [x] Home hero: the primary gold button sent ready buyers into `/realtors/`,
      which lists five competitors, and there was no phone CTA above the fold.
      Primary action is now the phone; the directory is a secondary link.
- [x] Selling guide now leads with the free, no-obligation CMA, which the CKG
      profile advertises and the page sellers land on never mentioned.

Left deliberately: the Ryan Wheeler widget. A lender is a non-competing
business line, so its "Get a Quote" button stays where it is.

### Still open

**Time-sensitive**
- 2027 BAH rates publish around December. `BAH_NEXT_UPDATE_DUE` flags it.

**Factual, unresolved**
- Vine Grove and Brandenburg populations differ between hub and `[slug]` pages.
- T.K. Stone appears as an E-town Independent elementary on one page and a
  Hardin County middle school on another.
- "15-20% below the national average" on cost-of-living is unsourced.
- Eight school enrolment figures carry no source or year.

**Owner actions**
- Google Business Profile still lists (270) 817-3311; the site and his own
  website use (270) 735-3897. Fix the profile, not the site.
- Rotate the Apify token and DataForSEO password.
- Ryan Wheeler's review count of 311 is unverified.

**Content opportunities not taken**
- Glendale's page describes BlueOval SK as "large-scale manufacturing
  projects" rather than naming the largest economic event in the county in a
  generation.
- `/contact/` ranks for Middlesboro, Morehead and Leitchfield, towns the
  business does not serve.
- Neighbourhood hub cards truncate mid-word via `slice(0, 150)`.

### Resolved 2026-10-19

- Weather page: "interior safe rooms" removed. Basements are common in Hardin
  County stock, confirmed by the owner, so that half of the claim stands and
  is now framed as a search criterion. The safe-rooms half was not real.
- Cost-of-living rents now use the sourced $1,380 all-bedroom average (Zillow,
  October 2026) with its year-over-year decline, replacing the unsourced
  $850 / $1,050 / $1,250 per-bedroom figures that understated the market.
