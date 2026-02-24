# Project Blueprint: realtorsrelizabethtownky.com

## Executive Summary

Build a local real estate directory + community resource site for Elizabethtown, KY that functions as a legitimate local authority site while strategically promoting Compass and Key Group (CKG) as the featured agency. The site will contain ~105 pages of local content targeting Elizabethtown, Hardin County, and Fort Knox military audiences.

**Strategic Approach:** Real directory model. List actual competing realtors with basic profiles, but CKG gets premium placement, the most detailed profile, dedicated page, and all internal linking juice. Other realtors get listed but receive NO outbound links to their sites. This is defensible — directories aren't obligated to link out. The value prop is being listed, not linked.

---

## Tech Stack

| Component | Choice | Notes |
|-----------|--------|-------|
| Framework | Next.js 14 (App Router) | Static site generation (SSG) for all pages |
| Styling | Tailwind CSS | Utility-first, fast to build |
| Deployment | Vercel | Free tier, auto-deploy from GitHub |
| Domain | realtorsrelizabethtownky.com | Migrate after proof of concept |
| CMS | None | All content baked into codebase |
| Analytics | Plausible or GA4 | Add post-launch |

### Vercel Setup Instructions
1. Create GitHub repo: `realtors-elizabethtown-ky`
2. `npx create-next-app@latest realtors-etown --typescript --tailwind --app --src-dir`
3. Push to GitHub
4. Connect repo to Vercel
5. Deploy automatically on every push

---

## Site Architecture

### URL Structure

```
/ (homepage)
/realtors/ (directory listing page)
/realtors/compass-and-key-group/ (featured CKG profile - dedicated page)
/realtors/[other-agent-slug]/ (basic profiles for other realtors)
/elizabethtown/ (area overview hub)
/elizabethtown/neighborhoods/[slug]/ (neighborhood guides)
/elizabethtown/schools/[slug]/ (school guides)
/elizabethtown/parks-recreation/[slug]/ (parks & outdoor guides)
/elizabethtown/things-to-do/[slug]/ (attractions, dining, entertainment)
/elizabethtown/cost-of-living/ (cost of living breakdown)
/elizabethtown/weather-climate/ (weather and seasonal guide)
/real-estate-market/ (market overview hub)
/real-estate-market/[slug]/ (market content pages)
/fort-knox/ (Fort Knox hub)
/fort-knox/[slug]/ (Fort Knox / military content pages)
/guides/[slug]/ (buyer/seller/investor guides)
/about/ (about the directory)
/contact/ (contact page)
```

### Navigation Structure

```
Home
Realtors ▾
  → Find a Realtor (directory)
  → Compass and Key Group (featured)
Elizabethtown ▾
  → Area Overview
  → Neighborhoods
  → Schools
  → Parks & Recreation
  → Things to Do
Fort Knox ▾
  → Military Relocation Guide
  → PCS to Fort Knox
  → Off-Post Housing
  → BAH & VA Loans
Real Estate Market ▾
  → Market Overview
  → Buying Guide
  → Selling Guide
```

---

## Complete Page Taxonomy (~108 pages)

### 1. Core Pages (4 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 1 | Homepage | `/` | realtors in elizabethtown ky, real estate agents elizabethtown ky |
| 2 | About | `/about/` | about realtors elizabethtown directory |
| 3 | Contact | `/contact/` | contact realtors elizabethtown ky |
| 4 | Privacy Policy | `/privacy/` | — |

### 2. Realtor Directory Pages (10 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 5 | Directory Listing | `/realtors/` | realtors in elizabethtown ky, real estate agents elizabethtown |
| 6 | **Compass and Key Group (FEATURED)** | `/realtors/compass-and-key-group/` | compass and key group elizabethtown, austin kutz realtor |
| 7 | Schuler Bauer Real Estate | `/realtors/schuler-bauer/` | schuler bauer elizabethtown |
| 8 | Olive + Oak Realty | `/realtors/olive-oak-realty/` | olive oak realty elizabethtown |
| 9 | RE/MAX Executive Group | `/realtors/remax-executive-group/` | remax elizabethtown ky |
| 10 | Greystone Realtors | `/realtors/greystone-realtors/` | greystone realtors elizabethtown |
| 11 | Network Realty | `/realtors/network-realty/` | network realty elizabethtown |
| 12 | Keller Williams Realty | `/realtors/keller-williams-elizabethtown/` | keller williams elizabethtown ky |
| 13 | Century 21 Advantage Realty | `/realtors/century-21-advantage/` | century 21 elizabethtown ky |
| 14 | Coldwell Banker Legacy Group | `/realtors/coldwell-banker-legacy/` | coldwell banker elizabethtown |

**CRITICAL DIRECTORY RULES:**
- CKG profile: 1,500–2,000 words, reviews, services, areas served, team bios, CTAs, rich schema
- Other realtor profiles: 200–300 words, basic info, address, phone, areas served, NO outbound links
- Directory page: CKG listed first with "Featured Agency" badge, larger card, more prominent design
- CKG is the ONLY listing with a call-to-action button
- CKG is the ONLY listing with a link to their external site (compassandkeygroup.com)

### 3. Elizabethtown Neighborhood Guides (15 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 15 | Neighborhoods Hub | `/elizabethtown/neighborhoods/` | elizabethtown ky neighborhoods, best neighborhoods elizabethtown |
| 16 | Helmwood Heights | `/elizabethtown/neighborhoods/helmwood-heights/` | helmwood heights elizabethtown ky |
| 17 | Woodland Heights | `/elizabethtown/neighborhoods/woodland-heights/` | woodland heights elizabethtown |
| 18 | Pear Orchard | `/elizabethtown/neighborhoods/pear-orchard/` | pear orchard elizabethtown ky |
| 19 | Ring Road Area | `/elizabethtown/neighborhoods/ring-road/` | ring road area elizabethtown |
| 20 | Foxborough Estates | `/elizabethtown/neighborhoods/foxborough-estates/` | foxborough estates elizabethtown |
| 21 | The Cedars | `/elizabethtown/neighborhoods/the-cedars/` | the cedars elizabethtown ky |
| 22 | Thousand Oaks | `/elizabethtown/neighborhoods/thousand-oaks/` | thousand oaks elizabethtown ky |
| 23 | Nicholas Ridge | `/elizabethtown/neighborhoods/nicholas-ridge/` | nicholas ridge elizabethtown |
| 24 | Covington Ridge | `/elizabethtown/neighborhoods/covington-ridge/` | covington ridge elizabethtown |
| 25 | Freeman Creek Estates | `/elizabethtown/neighborhoods/freeman-creek-estates/` | freeman creek estates elizabethtown |
| 26 | Winding Springs | `/elizabethtown/neighborhoods/winding-springs/` | winding springs elizabethtown |
| 27 | Triple Crown | `/elizabethtown/neighborhoods/triple-crown/` | triple crown elizabethtown ky |
| 28 | Downtown Elizabethtown | `/elizabethtown/neighborhoods/downtown/` | downtown elizabethtown ky living |
| 29 | Foxwood Subdivision | `/elizabethtown/neighborhoods/foxwood/` | foxwood elizabethtown ky |

**Neighborhood Page Template (600–800 words each):**
- Overview & location description
- Housing stock (types, age, price ranges)
- Nearby schools (link to school guide pages)
- Parks & amenities nearby
- Commute times (to Fort Knox, to Louisville via I-65)
- Who this neighborhood is best for (families, military, retirees, first-time buyers)
- CTA: "Looking for homes in [Neighborhood]? Contact Compass and Key Group for a personalized search."

### 4. School Guides (10 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 30 | Schools Hub | `/elizabethtown/schools/` | elizabethtown ky schools, schools in elizabethtown kentucky |
| 31 | Hardin County Schools Overview | `/elizabethtown/schools/hardin-county-schools/` | hardin county schools ky |
| 32 | Elizabethtown Independent Schools | `/elizabethtown/schools/elizabethtown-independent/` | elizabethtown independent school district |
| 33 | Central Hardin High School | `/elizabethtown/schools/central-hardin-high/` | central hardin high school |
| 34 | John Hardin High School | `/elizabethtown/schools/john-hardin-high/` | john hardin high school |
| 35 | Elizabethtown High School | `/elizabethtown/schools/elizabethtown-high/` | elizabethtown high school |
| 36 | North Hardin High School | `/elizabethtown/schools/north-hardin-high/` | north hardin high school |
| 37 | Heartland Elementary | `/elizabethtown/schools/heartland-elementary/` | heartland elementary elizabethtown |
| 38 | Helmwood Heights Elementary | `/elizabethtown/schools/helmwood-heights-elementary/` | helmwood heights elementary |
| 39 | Fort Knox DoDEA Schools | `/elizabethtown/schools/fort-knox-dodea/` | fort knox schools, DoDEA schools fort knox |

**School Page Template (500–700 words each):**
- School overview (grades served, enrollment, district)
- Academic performance summary
- Notable programs (JROTC, STEM, athletics)
- Nearby neighborhoods that feed into this school
- School contact info
- CTA: "Moving to [School] district? Compass and Key Group can help you find homes in the right attendance zone."

### 5. Parks & Recreation (8 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 40 | Parks Hub | `/elizabethtown/parks-recreation/` | parks in elizabethtown ky |
| 41 | Freeman Lake Park | `/elizabethtown/parks-recreation/freeman-lake-park/` | freeman lake park elizabethtown |
| 42 | Mike Carroll Park | `/elizabethtown/parks-recreation/mike-carroll-park/` | mike carroll park elizabethtown |
| 43 | University Drive Park | `/elizabethtown/parks-recreation/university-drive-park/` | university drive park elizabethtown |
| 44 | Haycraft Park | `/elizabethtown/parks-recreation/haycraft-park/` | haycraft park elizabethtown |
| 45 | Pritchard Community Center | `/elizabethtown/parks-recreation/pritchard-community-center/` | pritchard community center elizabethtown |
| 46 | Elizabethtown Nature Park | `/elizabethtown/parks-recreation/nature-park/` | elizabethtown nature park |
| 47 | Saunders Springs Nature Preserve | `/elizabethtown/parks-recreation/saunders-springs/` | saunders springs nature preserve |

**Parks Page Template (400–600 words each):**
- Park overview and location
- Amenities (playgrounds, trails, sports fields, pavilions)
- Activities and events
- Best times to visit
- Nearby neighborhoods
- CTA: "Love the outdoors? Find homes near [Park] — contact Compass and Key Group."

### 6. Things to Do / Lifestyle (8 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 48 | Things to Do Hub | `/elizabethtown/things-to-do/` | things to do in elizabethtown ky |
| 49 | Dining & Restaurants | `/elizabethtown/things-to-do/restaurants/` | restaurants in elizabethtown ky, best restaurants etown |
| 50 | Shopping & Retail | `/elizabethtown/things-to-do/shopping/` | shopping in elizabethtown ky |
| 51 | Swope's Cars of Yesteryear Museum | `/elizabethtown/things-to-do/swopes-museum/` | swopes cars museum elizabethtown |
| 52 | Elizabethtown Seasonal Events | `/elizabethtown/things-to-do/seasonal-events/` | elizabethtown ky events, etown festivals |
| 53 | Golf Courses Near Elizabethtown | `/elizabethtown/things-to-do/golf-courses/` | golf courses elizabethtown ky |
| 54 | Family Activities | `/elizabethtown/things-to-do/family-activities/` | family things to do elizabethtown ky |
| 55 | Nightlife & Entertainment | `/elizabethtown/things-to-do/nightlife/` | nightlife elizabethtown ky, bars etown |

### 7. Area Overview Pages (5 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 56 | Elizabethtown Area Overview | `/elizabethtown/` | living in elizabethtown ky, elizabethtown ky guide |
| 57 | Cost of Living | `/elizabethtown/cost-of-living/` | cost of living elizabethtown ky |
| 58 | Weather & Climate | `/elizabethtown/weather-climate/` | elizabethtown ky weather, climate elizabethtown kentucky |
| 59 | Commuting from Elizabethtown | `/elizabethtown/commuting/` | commute elizabethtown to louisville, commute elizabethtown to fort knox |
| 60 | Elizabethtown History | `/elizabethtown/history/` | history of elizabethtown ky |

### 8. Real Estate Market Pages (12 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 61 | Market Overview Hub | `/real-estate-market/` | elizabethtown ky real estate market |
| 62 | Market Trends & Stats | `/real-estate-market/trends/` | elizabethtown ky housing market trends |
| 63 | First-Time Homebuyer Guide | `/guides/first-time-homebuyer-elizabethtown/` | first time homebuyer elizabethtown ky |
| 64 | Home Selling Guide | `/guides/selling-home-elizabethtown/` | selling a home in elizabethtown ky |
| 65 | Home Buying Process | `/guides/buying-home-elizabethtown/` | buying a home in elizabethtown ky |
| 66 | Investment Properties | `/real-estate-market/investment-properties/` | investment property elizabethtown ky |
| 67 | New Construction | `/real-estate-market/new-construction/` | new construction homes elizabethtown ky |
| 68 | Foreclosures & Short Sales | `/real-estate-market/foreclosures/` | foreclosures elizabethtown ky |
| 69 | Rental Market Overview | `/real-estate-market/rental-market/` | rental market elizabethtown ky, rent elizabethtown |
| 70 | Property Taxes Hardin County | `/real-estate-market/property-taxes/` | property taxes hardin county ky, elizabethtown property tax rate |
| 71 | Home Appraisal Guide | `/guides/home-appraisal-guide/` | home appraisal elizabethtown ky |
| 72 | Seasonal Buying Guide | `/guides/best-time-to-buy-elizabethtown/` | best time to buy house elizabethtown ky |

### 9. Fort Knox & Military Content (30 pages — ~30% of content)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 73 | Fort Knox Hub | `/fort-knox/` | fort knox ky, living near fort knox |
| 74 | PCS to Fort Knox Complete Guide | `/fort-knox/pcs-guide/` | pcs to fort knox, fort knox pcs |
| 75 | Fort Knox Off-Post Housing Guide | `/fort-knox/off-post-housing/` | fort knox off post housing, living off post fort knox |
| 76 | BAH Rates Fort Knox 2026 | `/fort-knox/bah-rates/` | fort knox bah rates 2026, bah rates fort knox |
| 77 | VA Loans Elizabethtown | `/fort-knox/va-loans-elizabethtown/` | va loans elizabethtown ky, va home loan fort knox |
| 78 | Military Relocation Guide | `/fort-knox/military-relocation-guide/` | military relocation elizabethtown, fort knox relocation |
| 79 | On-Post vs Off-Post Living | `/fort-knox/on-post-vs-off-post/` | fort knox on post housing vs off post |
| 80 | Knox Hills Housing Review | `/fort-knox/knox-hills-housing/` | knox hills fort knox, knox hills housing reviews |
| 81 | Best Neighborhoods for Military | `/fort-knox/best-neighborhoods-military/` | best neighborhoods near fort knox, military friendly neighborhoods elizabethtown |
| 82 | Schools for Military Families | `/fort-knox/schools-military-families/` | fort knox schools, schools near fort knox for military families |
| 83 | Fort Knox to Elizabethtown Commute | `/fort-knox/commute-to-elizabethtown/` | fort knox to elizabethtown commute |
| 84 | Radcliff KY Guide | `/fort-knox/radcliff-ky/` | radcliff ky, living in radcliff ky |
| 85 | Vine Grove KY Guide | `/fort-knox/vine-grove-ky/` | vine grove ky, living in vine grove ky |
| 86 | Brandenburg KY Guide | `/fort-knox/brandenburg-ky/` | brandenburg ky real estate |
| 87 | Selling Your Home at PCS | `/fort-knox/selling-home-pcs/` | selling home pcs fort knox, sell house military move |
| 88 | Buying Your First Home with VA Loan | `/fort-knox/first-home-va-loan/` | first home va loan fort knox, va loan first time buyer |
| 89 | Fort Knox Commissary & Amenities | `/fort-knox/amenities/` | fort knox commissary, fort knox amenities |
| 90 | Military Spouse Employment | `/fort-knox/military-spouse-employment/` | military spouse jobs elizabethtown, jobs near fort knox |
| 91 | Fort Knox Base Info & History | `/fort-knox/base-info/` | fort knox army base, fort knox history |
| 92 | Temporary Housing During PCS | `/fort-knox/temporary-housing/` | temporary housing fort knox, temporary lodging fort knox pcs |
| 93 | DLA & Moving Allowances | `/fort-knox/dislocation-allowance/` | dislocation allowance fort knox, military moving allowance |
| 94 | Renting vs Buying Near Fort Knox | `/fort-knox/renting-vs-buying/` | renting vs buying fort knox, should military buy or rent |
| 95 | Military-Friendly Lenders | `/fort-knox/military-lenders/` | military friendly lenders elizabethtown, va loan lenders fort knox |
| 96 | EFMP & Special Needs Resources | `/fort-knox/efmp-special-needs/` | efmp fort knox, special needs resources fort knox |
| 97 | Pet-Friendly Housing Near Fort Knox | `/fort-knox/pet-friendly-housing/` | pet friendly housing fort knox, pet friendly rentals elizabethtown |
| 98 | Fort Knox Recreation & Outdoor | `/fort-knox/recreation/` | fort knox recreation, otter creek fort knox |
| 99 | Military Discount Programs | `/fort-knox/military-discounts/` | military discounts elizabethtown, fort knox military discounts |
| 100 | Dual Military Housing Guide | `/fort-knox/dual-military-housing/` | dual military housing fort knox, dual military bah |
| 101 | Investment Properties for Military | `/fort-knox/military-investment-properties/` | military investment property elizabethtown, buy rental property fort knox |
| 102 | PCS Checklist & Timeline | `/fort-knox/pcs-checklist/` | pcs checklist fort knox, military move checklist |

### 10. Additional Nearby Community Pages (6 pages)

| # | Page | URL | Target Keywords |
|---|------|-----|-----------------|
| 103 | Nearby Communities Hub | `/elizabethtown/nearby-communities/` | communities near elizabethtown ky |
| 104 | Hodgenville KY | `/elizabethtown/nearby-communities/hodgenville/` | hodgenville ky real estate |
| 105 | Glendale KY | `/elizabethtown/nearby-communities/glendale/` | glendale ky |
| 106 | Cecilia KY | `/elizabethtown/nearby-communities/cecilia/` | cecilia ky |
| 107 | Rineyville KY | `/elizabethtown/nearby-communities/rineyville/` | rineyville ky |
| 108 | Sonora KY | `/elizabethtown/nearby-communities/sonora/` | sonora ky |

---

## Internal Linking Strategy

### Link Hierarchy (Priority Order)

1. **Every content page** links to CKG profile page (`/realtors/compass-and-key-group/`) via contextual CTA
2. **Every content page** links to the directory page (`/realtors/`)
3. **Neighborhood pages** link to relevant school pages and parks pages
4. **School pages** link to neighborhoods in their attendance zone
5. **Fort Knox pages** interlink heavily with each other (cluster)
6. **Market pages** link to buyer/seller guides
7. **All pages** have breadcrumb navigation with schema

### CKG Internal Link Targets

Every page should contain at least ONE contextual link to CKG. Examples:

- Neighborhood pages: "Contact Compass and Key Group to find homes in [Neighborhood]"
- School pages: "Austin Kutz at Compass and Key Group specializes in helping families find homes in the right school district"
- Fort Knox pages: "As a veteran-owned agency, Compass and Key Group understands the military relocation process"
- Market pages: "Get a free market analysis from Compass and Key Group"

### Anchor Text Variation

Rotate these anchor texts across pages (never use the same one more than 3x):

- "Compass and Key Group"
- "Austin Kutz at Compass and Key Group"
- "veteran-owned real estate team in Elizabethtown"
- "Elizabethtown's top-rated real estate agency"
- "contact a local Elizabethtown realtor"
- "find an agent who knows Elizabethtown"
- "CKG real estate team"
- "your local Elizabethtown real estate experts"

---

## Schema Markup Specifications

### Every Page: BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://realtorsrelizabethtownky.com/" },
    { "@type": "ListItem", "position": 2, "name": "Category", "item": "https://realtorsrelizabethtownky.com/category/" },
    { "@type": "ListItem", "position": 3, "name": "Page Title" }
  ]
}
```

### Homepage: WebSite + SearchAction

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Realtors in Elizabethtown, KY",
  "url": "https://realtorsrelizabethtownky.com",
  "description": "Find the best realtors and real estate agents in Elizabethtown, KY. Local directory featuring expert agents serving Elizabethtown, Fort Knox, and Hardin County."
}
```

### CKG Profile Page: RealEstateAgent + LocalBusiness + AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Compass and Key Group",
  "url": "https://compassandkeygroup.com",
  "telephone": "(270) 735-3897",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "639 N Mulberry St",
    "addressLocality": "Elizabethtown",
    "addressRegion": "KY",
    "postalCode": "42701"
  },
  "founder": {
    "@type": "Person",
    "name": "Austin Kutz",
    "jobTitle": "Owner / Lead Agent",
    "description": "U.S. Marine Corps veteran, Kentucky Real Estate License #277797"
  },
  "areaServed": [
    "Elizabethtown, KY",
    "Radcliff, KY",
    "Vine Grove, KY",
    "Fort Knox, KY",
    "Hardin County, KY"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "25"
  }
}
```

### Directory Page: ItemList

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Realtors in Elizabethtown, KY",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "RealEstateAgent",
        "name": "Compass and Key Group",
        "url": "/realtors/compass-and-key-group/"
      }
    }
  ]
}
```

### Neighborhood/Area Pages: Place

```json
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Helmwood Heights, Elizabethtown, KY",
  "description": "Family-friendly neighborhood in Elizabethtown...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Elizabethtown",
    "addressRegion": "KY"
  }
}
```

### FAQ Pages: FAQPage Schema

Add FAQ schema to guide pages (first-time buyer, selling, VA loans) to target featured snippets.

---

## CKG Profile Page — Detailed Spec

This is the most important page on the site. It should be 1,500–2,000 words.

### Content Sections:

1. **Hero Section**
   - Agency name, tagline: "Veteran-Owned Real Estate Experts in Elizabethtown, KY"
   - Austin Kutz headshot placeholder
   - Phone: (270) 735-3897
   - Address: 639 N Mulberry St, Elizabethtown, KY 42701
   - CTA button: "Contact Compass and Key Group" → link to compassandkeygroup.com

2. **About Section**
   - Veteran-owned (USMC veteran Austin Kutz, 5 years active duty, 2 overseas tours)
   - Brokered under Real Broker, LLC
   - Specializations: buyer representation, seller listing, military relocation, investment properties
   - Service areas: Elizabethtown, Radcliff, Vine Grove, Fort Knox, Brandenburg, Hardin County

3. **Why Choose CKG**
   - Military relocation expertise (understands PCS, BAH, VA loans)
   - Deep local market knowledge
   - Full-service from listing to closing
   - Kentucky Real Estate License #277797

4. **Client Reviews Section**
   - Pull from actual Zillow/FastExpert reviews
   - Include review schema markup

5. **Areas Served**
   - Link to each neighborhood guide on this site
   - Link to Fort Knox military pages

6. **Services Offered**
   - Home buying assistance
   - Home selling & listing
   - Military relocation (PCS)
   - VA loan guidance
   - Investment property consulting
   - Free market analysis

7. **Contact Form / CTA**
   - Name, email, phone, message
   - "Schedule a free consultation"
   - Direct link to compassandkeygroup.com

---

## Fort Knox Content Strategy (30% of Site)

### Target Audience
- Active duty military PCSing to Fort Knox
- Military spouses researching the area pre-move
- Veterans transitioning out and staying in the area
- Reserve/Guard personnel

### Key Data Points to Include Across Fort Knox Pages

**BAH Rates (2026 Fort Knox):**
- Increased 7.2% from 2025
- E-5 with dependents: ~$2,034+/month (use 2026 updated figure)
- Fort Knox BAH ranked 38th highest among Army bases
- ZIP codes covered: 40121, 40160, 42701, and surrounding

**Fort Knox Base Facts:**
- Home to U.S. Army Human Resources Command
- Home to U.S. Army Cadet Command (ROTC oversight)
- Famous for U.S. Bullion Depository
- Privatized housing managed by Knox Hills (Lendlease/Centinel Public Partnerships)
- On-post housing: 20 neighborhoods, 2-4 bedroom units
- E1-E5 single/unaccompanied required to live on-post
- Housing Services Office: (502) 624-3669

**Nearby Off-Post Communities:**
- Elizabethtown (15 min) — most amenities, best schools variety
- Radcliff (5 min) — closest, most military population
- Vine Grove (10 min) — smaller, affordable
- Brandenburg (20 min) — rural, river access
- All accessible via US-31W and I-65

**Military-Specific SEO Angles:**
- PCS + Fort Knox
- BAH rates + Fort Knox + current year
- VA loan + Elizabethtown
- Military relocation + Kentucky
- Off-post housing + Fort Knox
- Best neighborhoods + military families + Elizabethtown

### CKG Military Messaging

Austin Kutz is a USMC veteran. This is CKG's strongest differentiator for the military audience. Every Fort Knox page should include:
- "As a Marine Corps veteran, Austin Kutz understands the unique challenges of military relocation"
- Mention of VA loan familiarity
- Understanding of PCS timelines and urgency
- Knowledge of BAH budgets and what they can afford locally

---

## SEO Technical Requirements

### On-Page SEO (Every Page)

- Unique `<title>` tag: Primary Keyword | Site Name (under 60 characters)
- Unique `<meta description>`: Include keyword + CTA (under 160 characters)
- One H1 per page containing primary keyword
- H2s for major sections, H3s for subsections
- Alt text on all images
- Internal links: minimum 3 per page (at least 1 to CKG)
- Canonical URL tag
- Open Graph tags (title, description, image, url)

### Technical SEO

- **XML Sitemap:** Auto-generated, submitted to Google Search Console
- **Robots.txt:** Allow all, reference sitemap
- **Page speed:** Target 90+ Lighthouse score (SSG helps here)
- **Mobile-first:** Fully responsive, all Tailwind
- **HTTPS:** Vercel provides by default
- **Trailing slashes:** Consistent — use trailing slashes on all URLs
- **404 page:** Custom, links back to homepage and directory
- **URL structure:** Lowercase, hyphens, no special characters

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://realtorsrelizabethtownky.com/sitemap.xml
```

---

## Design Guidelines

### Visual Identity

- **Primary Color:** Navy blue (#1B365D) — trust, authority, military-friendly
- **Secondary Color:** Gold/amber (#D4A843) — warmth, Kentucky heritage, compass imagery
- **Accent Color:** White (#FFFFFF) and light gray (#F5F5F5)
- **Font:** Inter or system font stack (fast loading)
- **Headings:** Bold, navy
- **Body:** Dark gray (#333333), 16px base

### Component Patterns

**Hero (Homepage):**
- Full-width, gradient overlay on stock Elizabethtown image
- H1: "Find the Best Realtors in Elizabethtown, KY"
- Subtext: "Your guide to real estate agents, neighborhoods, schools, and living in the Elizabethtown & Fort Knox area"
- CTA: "Browse Realtors" → /realtors/

**Realtor Card (Directory):**
- CKG: Large card, featured badge, gold border, photo, full description, CTA button
- Others: Standard card, smaller, gray border, basic info, no CTA button, no outbound link

**Content Page Layout:**
- Breadcrumbs at top
- H1 + meta info (reading time, last updated)
- Body content with H2/H3 sections
- Sidebar: Related pages, CKG mini-widget (photo + phone + "Contact Us")
- Bottom: Related articles grid
- Footer CTA banner: "Ready to find your home? Contact Compass and Key Group"

**CKG Sidebar Widget (appears on every content page):**
```
┌──────────────────────┐
│  [Austin Photo]       │
│  Compass and Key Group│
│  ★★★★★ (25 reviews)  │
│  (270) 735-3897       │
│  Veteran-Owned        │
│  [Contact Us →]       │
└──────────────────────┘
```

**Footer:**
- Site name + tagline
- Quick links: Realtors, Neighborhoods, Fort Knox, Market
- Featured: Compass and Key Group
- © 2026 + Privacy Policy

---

## Content Guidelines

### Writing Style
- Authoritative but approachable
- Second person ("you") for guides
- Local knowledge signals (reference specific streets, landmarks, local names like "E-town")
- Data-driven (include actual numbers: median prices, BAH rates, distances)
- Naturally integrate CKG mentions (not forced — contextual)

### Word Counts by Page Type
| Type | Word Count |
|------|-----------|
| CKG Profile | 1,500–2,000 |
| Neighborhood Guide | 600–800 |
| School Guide | 500–700 |
| Parks Guide | 400–600 |
| Fort Knox Guide | 800–1,200 |
| Real Estate Market | 800–1,000 |
| Buyer/Seller Guide | 1,000–1,500 |
| Area Overview | 800–1,000 |
| Other Realtor Profile | 200–300 |

### Content Quality Rules
- No thin content — every page must provide genuine value
- Include specific local details (street names, landmarks, distances)
- Reference actual data (BAH rates, home prices, school enrollment)
- Use natural language — not keyword-stuffed
- Each page answers a real question someone moving to E-town would ask

---

## Build Execution Order for Claude Code

### Phase 1: Project Setup
1. Initialize Next.js 14 project with TypeScript + Tailwind
2. Set up project structure (layouts, components, lib)
3. Create shared components (Header, Footer, Sidebar, BreadCrumbs, CKG Widget, SEO Head)
4. Set up Tailwind config with custom colors

### Phase 2: Core Pages + Layout
5. Build homepage
6. Build about page
7. Build contact page
8. Build 404 page

### Phase 3: Realtor Directory
9. Build directory listing page
10. Build CKG featured profile page (most detailed)
11. Build template for other realtor profiles
12. Generate 8 competitor listing pages

### Phase 4: Elizabethtown Content
13. Build Elizabethtown hub page
14. Build all 14 neighborhood guide pages
15. Build all 9 school guide pages
16. Build all 7 parks pages
17. Build all 8 things-to-do pages
18. Build 4 area overview pages (cost of living, weather, commuting, history)

### Phase 5: Fort Knox Content
19. Build Fort Knox hub page
20. Build all 30 Fort Knox/military pages

### Phase 6: Real Estate Market Content
21. Build market hub page
22. Build all 11 market + guide pages

### Phase 7: Nearby Communities
23. Build communities hub page
24. Build all 5 nearby community pages

### Phase 8: SEO & Technical
25. Generate XML sitemap
26. Configure robots.txt
27. Add JSON-LD schema to all pages
28. Add Open Graph tags
29. Verify all internal links
30. Run Lighthouse audit

### Phase 9: Deploy
31. Push to GitHub
32. Connect to Vercel
33. Deploy and verify

---

## Key Reference Data

### Compass and Key Group
- **Owner:** Austin Kutz (USMC veteran, 5 years active, 2 overseas tours)
- **Brokerage:** Real Broker, LLC
- **Address:** 639 N Mulberry St, Elizabethtown, KY 42701
- **Phone:** (270) 735-3897
- **Website:** compassandkeygroup.com
- **License:** Kentucky Real Estate #277797
- **Specialties:** Buyer/seller representation, military relocation, VA loans, investment properties
- **Service areas:** Elizabethtown, Radcliff, Vine Grove, Fort Knox, Brandenburg, Bardstown, Louisville, Shepherdsville, and broader Hardin County

### Elizabethtown Quick Facts
- **Population:** ~32,576
- **County:** Hardin County
- **Distance to Louisville:** ~35 miles south via I-65
- **Distance to Nashville:** ~2 hours south
- **Median home price:** ~$245,783 (below US median of $393,134)
- **Average days on market:** 49
- **School districts:** Hardin County Schools (28 schools, 14,714 students) + Elizabethtown Independent (8 schools, 2,465 students) + Fort Knox DoDEA
- **ZIP codes:** 42701, 42702
- **Major employer:** Fort Knox, Hardin Memorial Health, local government

### Fort Knox Quick Facts
- **Location:** ~15 miles north of Elizabethtown
- **Hosts:** U.S. Army Human Resources Command, U.S. Army Cadet Command
- **Famous for:** U.S. Bullion Depository
- **Housing:** Privatized, managed by Knox Hills (Lendlease)
- **BAH 2026:** Increased 7.2% from 2025, E-5 w/ dependents ~$2,034+/mo
- **Key ZIP:** 40121
- **Nearby communities:** Radcliff (closest), Vine Grove, Elizabethtown, Brandenburg

### Hardin County Schools — Purple Star District
- All schools earned the Purple Star Award (military-friendly designation)
- Two districts: Hardin County Schools + Elizabethtown Independent
- Fort Knox students attend DoDEA schools on-post

---

## Success Metrics (Post-Launch)

- **Indexed pages:** All 108 pages indexed within 30 days
- **Organic impressions:** Track via GSC for target keywords
- **Click-through to CKG:** Track internal link clicks to CKG profile + external link clicks to compassandkeygroup.com
- **Page 1 rankings:** Target 10+ pages ranking page 1 within 90 days for long-tail local keywords
- **Lighthouse score:** 90+ performance on all pages
