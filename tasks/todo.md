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

Still open from the opportunity list: **agent-level coverage**. Every page
outranking this site for the directory intent lists named individual agents
with experience, licence number or listing count. This directory is organised
by brokerage. HKAR publishes an agent roster per office, which is the
authoritative source for doing it properly.
