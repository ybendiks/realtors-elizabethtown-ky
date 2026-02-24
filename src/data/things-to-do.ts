export interface ThingToDo {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  picks: { name: string; desc: string }[];
  tips: string;
  ctaText: string;
}

export const thingsToDo: ThingToDo[] = [
  {
    slug: "restaurants",
    name: "Dining & Restaurants in Elizabethtown",
    metaTitle: "Best Restaurants in Elizabethtown, KY",
    metaDesc: "Discover the best restaurants in Elizabethtown, KY. From Southern comfort food and BBQ to local favorites and family dining along the Ring Road corridor.",
    intro: "Elizabethtown's dining scene punches well above its weight for a city of 33,000. From genuine Kentucky barbecue and Southern comfort food to international cuisine and farm-to-table fare, E-town offers a surprisingly diverse restaurant landscape. Most dining options cluster along the Ring Road commercial corridor and North Dixie Highway, with a growing number of locally owned gems in the downtown area. Whether you're grabbing a quick lunch between house tours or celebrating a successful closing, you'll find plenty of excellent options.",
    picks: [
      { name: "Back Home Restaurant", desc: "A beloved local institution serving classic Southern home-style cooking. Known for their plate lunches, country fried steak, and homemade desserts. This is the kind of place where the sweet tea flows freely and portions are generous. A true E-town original." },
      { name: "Stone Hearth", desc: "Upscale casual dining with a focus on wood-fired pizzas, steaks, and fresh seafood. One of E-town's nicer sit-down options, perfect for date nights or celebrations. The atmosphere is warm and inviting with exposed brick and a quality bar program." },
      { name: "Colton's Steakhouse", desc: "A regional favorite for hand-cut steaks, ribs, and hearty American fare. Popular with families and groups. The rolls and honey butter alone are worth the visit. Consistently reliable for a quality meal in a casual setting." },
      { name: "Impellizzeri's Pizza", desc: "Louisville's legendary pizza chain has a presence in E-town, and locals are grateful for it. Known for their thick, cheesy pies and generous toppings. A great family-friendly option with a casual, welcoming vibe." },
      { name: "El Nopal Mexican Restaurant", desc: "One of several quality Mexican restaurants in E-town, El Nopal is a local favorite for authentic Mexican dishes, generous margaritas, and a lively atmosphere. The lunch specials are a particularly good value." },
      { name: "Denny's Bar-B-Que", desc: "For genuine Kentucky barbecue, Denny's is the go-to. Slow-smoked pulled pork, brisket, and ribs with traditional sides. The kind of no-frills BBQ joint where the food speaks for itself. A must-try for newcomers." },
      { name: "Fazoli's / Rafferty's / O'Charley's", desc: "E-town has a solid lineup of regional chains along the Ring Road corridor for reliable, family-friendly dining. These familiar names make the transition easier for newcomers while you discover the local gems." },
      { name: "Downtown E-town restaurants", desc: "The downtown area has seen a revival of locally owned eateries and coffee shops. Check out the growing scene around Main Street for brunch spots, craft coffee, and unique dining experiences you won't find in chain-heavy commercial corridors." },
    ],
    tips: "Most restaurants in E-town are casual and family-friendly — you won't need a reservation at most places. The Ring Road corridor gets busy on Friday and Saturday evenings, so plan accordingly. For the best local experience, ask a neighbor or coworker for their favorite spot. Locals are proud of their food and happy to share recommendations. If you're PCSing from a larger city, give E-town's dining scene a chance — you might be pleasantly surprised by the quality and value.",
    ctaText: "Love great food? Find a home near E-town's best dining with Compass and Key Group. Call (270) 735-3897.",
  },
  {
    slug: "shopping",
    name: "Shopping & Retail in Elizabethtown",
    metaTitle: "Shopping in Elizabethtown, KY | Retail Guide",
    metaDesc: "Guide to shopping in Elizabethtown, KY. From Towne Mall and Ring Road retail to downtown boutiques and the North Dixie corridor.",
    intro: "Elizabethtown serves as the retail hub for Hardin County and much of the surrounding region. The city's commercial corridors — primarily Ring Road and North Dixie Highway — offer a full range of shopping options from major retailers and grocery stores to specialty shops and locally owned boutiques. For a city its size, E-town provides surprisingly comprehensive shopping, and Louisville's extensive retail is just 45 minutes up I-65 for anything you can't find locally.",
    picks: [
      { name: "Towne Mall Elizabethtown", desc: "The city's indoor shopping mall located on Ring Road, featuring a mix of national retailers and local shops. While like many American malls it has evolved over the years, it remains a destination for shopping, dining, and entertainment. The surrounding area includes additional retail and restaurants." },
      { name: "Ring Road Corridor", desc: "The Ring Road commercial strip is E-town's primary retail artery. You'll find Walmart Supercenter, Kroger, Lowe's, Home Depot, Target, and dozens of other national retailers and restaurants. For most daily shopping needs, Ring Road has everything within a concentrated area." },
      { name: "North Dixie Highway", desc: "The North Dixie corridor (US-31W) offers additional retail options heading north toward Radcliff and Fort Knox. Auto dealers, furniture stores, specialty retailers, and service businesses line this route. It's also the main artery for Fort Knox-bound traffic." },
      { name: "Downtown Shops", desc: "Elizabethtown's revitalized downtown along Main Street features locally owned boutiques, antique shops, gift stores, and specialty retailers. Shopping downtown supports local businesses and gives you a taste of E-town's small-town character. The downtown area hosts seasonal markets and events that draw shoppers from across the region." },
      { name: "Grocery Options", desc: "Multiple grocery options serve the community: Kroger (with fuel points), Walmart Supercenter, Aldi for budget-friendly staples, and Save-A-Lot. The Fort Knox Commissary is available to military families with base access, offering tax-free groceries at competitive prices." },
      { name: "Louisville Shopping (45 min)", desc: "For specialty items, luxury brands, or the widest selection, Louisville's retail scene is just 45 minutes north via I-65. Oxmoor Center, Mall St. Matthews, and the Outlets of Bluegrass are popular day-trip destinations for E-town residents." },
    ],
    tips: "Most major retailers are concentrated along Ring Road, making it efficient to handle multiple errands in one trip. If you're moving from a larger city, you'll find that E-town covers about 90% of your everyday shopping needs locally. The remaining 10% is an easy Louisville day trip. Downtown shopping is best on Saturday mornings when the area is most vibrant. Military families should take advantage of the Fort Knox Commissary and PX for significant savings on groceries and household goods.",
    ctaText: "Want to live near E-town's best shopping? Contact a local Elizabethtown realtor at Compass and Key Group — (270) 735-3897.",
  },
  {
    slug: "swopes-museum",
    name: "Swope's Cars of Yesteryear Museum",
    metaTitle: "Swope's Cars of Yesteryear Museum | E-town",
    metaDesc: "Visit Swope's Cars of Yesteryear Museum in Elizabethtown, KY. A unique local attraction featuring vintage and classic automobiles for car enthusiasts of all ages.",
    intro: "Swope's Cars of Yesteryear Museum is one of Elizabethtown's unique local attractions and a must-visit for anyone with an appreciation for classic automobiles and American automotive history. Located in E-town, this museum showcases a curated collection of vintage cars, trucks, and automotive memorabilia that spans decades of American motoring history. It's the kind of hidden gem that makes a small city feel special — a passion project that's become a genuine point of local pride.",
    picks: [
      { name: "Classic Car Collection", desc: "The museum's collection features beautifully restored vintage automobiles from various eras of American automotive history. From gleaming chrome bumpers to hand-polished paint jobs, each vehicle is maintained to show-quality standards. Car enthusiasts can spend hours admiring the craftsmanship and detail." },
      { name: "Automotive Memorabilia", desc: "Beyond the cars themselves, the museum features a collection of automotive memorabilia including vintage signs, advertisements, tools, and accessories that tell the broader story of American car culture. It's a nostalgia trip for older visitors and an education for younger ones." },
      { name: "Family-Friendly Experience", desc: "The museum is accessible for all ages. Kids are fascinated by the vintage vehicles, and adults appreciate the historical context. It's an excellent rainy-day activity or a fun addition to a weekend of exploring E-town's attractions." },
      { name: "Local Character", desc: "Swope's represents the kind of locally owned, passion-driven attraction that gives Elizabethtown its character. The owners are knowledgeable and enthusiastic, happy to share stories about the vehicles and the history behind them." },
    ],
    tips: "Check hours before visiting, as smaller museums sometimes have limited or seasonal schedules. The museum makes a great activity to combine with lunch at a nearby downtown restaurant. If you're new to E-town and looking for things to do on a weekend, Swope's paired with a walk around downtown and a stop at Freeman Lake Park makes for a full and enjoyable day. Car club members and enthusiasts should ask about any special events or car shows the museum participates in.",
    ctaText: "Discovering E-town's hidden gems? Find your perfect home in this charming city with Compass and Key Group. Call (270) 735-3897.",
  },
  {
    slug: "seasonal-events",
    name: "Elizabethtown Seasonal Events & Festivals",
    metaTitle: "Events & Festivals in Elizabethtown, KY",
    metaDesc: "Guide to seasonal events and festivals in Elizabethtown, KY. From the E-town Fair and Christmas parade to farmers markets and community celebrations year-round.",
    intro: "Elizabethtown comes alive throughout the year with seasonal events, festivals, and community celebrations that bring residents together and showcase the city's small-town spirit. From summer fairs and fall festivals to holiday parades and farmers markets, there's always something happening in E-town. For newcomers — especially military families PCSing to the area — these events are one of the best ways to connect with the community and start feeling at home.",
    picks: [
      { name: "E-town Fair & Expo", desc: "The annual Hardin County Fair and Expo is a summer highlight, featuring carnival rides, livestock shows, live entertainment, food vendors, and all the small-town fair tradition you could ask for. It's a quintessential Kentucky summer experience and a great family outing." },
      { name: "Elizabethtown Christmas Parade", desc: "The annual Christmas parade through downtown is one of the city's most beloved traditions. Floats, marching bands, local organizations, and of course Santa Claus make their way down Main Street while the community gathers to kick off the holiday season. Arrive early for the best viewing spots." },
      { name: "Farmers Market", desc: "The Elizabethtown Farmers Market runs through the growing season, offering locally grown produce, baked goods, crafts, and artisan products. It's a Saturday morning tradition for many residents and a great way to connect with local growers and makers. Typically held in the downtown area." },
      { name: "Freeman Lake Events", desc: "Freeman Lake Park hosts various events throughout the year including fishing derbies, community picnics, outdoor concerts, and seasonal celebrations. The lakeside setting makes any event more special, and the park's facilities can accommodate gatherings of all sizes." },
      { name: "Fourth of July Celebrations", desc: "Elizabethtown's Independence Day celebrations typically include fireworks, community gatherings, and patriotic events. With a large military community nearby, the Fourth of July carries special significance in E-town. Local parks and community spaces host festivities throughout the day." },
      { name: "Downtown Events", desc: "The revitalized downtown hosts a growing calendar of events including art walks, live music nights, holiday open houses, and community gatherings. The downtown merchants association and tourism bureau coordinate events that bring people to Main Street throughout the year." },
      { name: "Fort Knox Events", desc: "Fort Knox hosts various events open to the public throughout the year, including the Otter Creek outdoor activities, holiday events, and community programs. Military families have access to additional on-post events and MWR-sponsored activities." },
    ],
    tips: "Follow the Elizabethtown Tourism & Convention Bureau and the City of Elizabethtown on social media for the most current event calendar. Many events are free and family-friendly. The PCS season (May-August) coincides with some of E-town's best outdoor events, giving newly arriving military families immediate opportunities to explore their new community. Bring lawn chairs and blankets to outdoor events — Kentuckians know how to settle in and enjoy.",
    ctaText: "Ready to join the E-town community? Find your perfect home with Elizabethtown's top-rated real estate agency — Compass and Key Group. Call (270) 735-3897.",
  },
  {
    slug: "golf-courses",
    name: "Golf Courses Near Elizabethtown",
    metaTitle: "Golf Courses Near Elizabethtown, KY",
    metaDesc: "Find golf courses near Elizabethtown, KY. From the Elizabethtown Country Club to public courses and Fort Knox's Lindsey Golf Course.",
    intro: "Kentucky is golf country, and Elizabethtown offers solid options for golfers of all skill levels. From the private Elizabethtown Country Club to public courses and the military-accessible links at Fort Knox, you'll find enough variety to keep your game sharp year-round. The region's gentle rolling terrain and moderate climate (playable roughly 9-10 months of the year) make E-town an appealing home base for golf enthusiasts.",
    picks: [
      { name: "Elizabethtown Country Club", desc: "The premier private golf club in the area, featuring an 18-hole championship course set among mature trees and manicured fairways near the Thousand Oaks neighborhood. Members enjoy golf, swimming, tennis, dining, and social events. The course is well-maintained and offers a challenging but enjoyable round for players of varying abilities." },
      { name: "Lindsey Golf Course (Fort Knox)", desc: "Located on Fort Knox, Lindsey Golf Course is an 18-hole course available to military personnel, retirees, DoD civilians, and their guests. The course offers affordable green fees and a relaxed atmosphere. It's a popular option for military families looking for accessible golf without premium pricing. Equipment rental is available." },
      { name: "Heartland Golf Course", desc: "A public course in the Elizabethtown area that provides an accessible option for golfers who prefer not to join a private club. The course offers a pleasant round in a scenic Kentucky setting with reasonable green fees and a welcoming atmosphere for all skill levels." },
      { name: "Pine Valley Country Club", desc: "Located in the broader Central Kentucky region, Pine Valley offers another option for golfers willing to drive a short distance from E-town. The course provides a quality golfing experience in a scenic setting." },
      { name: "Louisville-area courses (45 min)", desc: "For the widest selection, Louisville's golf scene is about 45 minutes north and includes numerous public, semi-private, and private courses. Valhalla Golf Club (host of multiple PGA Championships) is the most famous course in the region, though public options like Charlie Vettiner and Nevel Meade offer quality rounds at reasonable prices." },
    ],
    tips: "Golf season in E-town typically runs from March through November, with the best conditions in spring and fall when temperatures are mild and the humidity drops. Summer rounds are playable but warm — tee times before 9 AM or after 4 PM beat the heat. Military golfers should check Fort Knox MWR for league play, tournaments, and special rates. If you're house-hunting near the Elizabethtown Country Club, the Thousand Oaks neighborhood puts you minutes from the first tee.",
    ctaText: "Want to live near the links? Austin Kutz at Compass and Key Group can find you a home near E-town's best golf. Call (270) 735-3897.",
  },
  {
    slug: "family-activities",
    name: "Family Activities in Elizabethtown",
    metaTitle: "Family Things to Do in Elizabethtown, KY",
    metaDesc: "Discover family-friendly activities in Elizabethtown, KY. Bowling, swimming, parks, movies, and kid-friendly fun in the E-town area.",
    intro: "Elizabethtown is a genuinely family-friendly city, and keeping the kids entertained is easier here than you might expect. From outdoor adventures at Freeman Lake to bowling alleys, movie theaters, and seasonal activities, there's plenty to fill weekends and school breaks. Military families new to the area will find that E-town's family scene is welcoming and accessible, with most activities affordable and conveniently located.",
    picks: [
      { name: "Freeman Lake Park", desc: "E-town's flagship park is a family paradise. Walking and biking trails around the lake, multiple playgrounds for different age groups, fishing piers, picnic pavilions, and open green spaces for sports and games. Pack a lunch and make a day of it — kids never get tired of this park." },
      { name: "Bowling", desc: "E-town has bowling centers offering league play, open bowling, and cosmic/glow bowling on weekend evenings. It's an affordable family activity that works for all ages, and the air conditioning is a bonus during Kentucky summers. Birthday party packages are typically available." },
      { name: "Movie Theaters", desc: "Catch the latest releases at local movie theaters. Matinee pricing makes movies an affordable family outing, and the theaters offer standard concessions and comfortable seating. A go-to rainy day option for families." },
      { name: "Swimming & Water Activities", desc: "Elizabethtown offers public swimming pools during the summer months, and several neighborhoods have community pool access. Freeman Lake provides opportunities for kayaking and paddleboarding. Fort Knox families have access to on-post pools and aquatic facilities through MWR." },
      { name: "Saunders Springs Nature Preserve", desc: "For nature-loving families, Saunders Springs offers hiking trails through a beautiful natural setting with springs, rock formations, and diverse plant life. The trails vary in difficulty, making it accessible for families with younger children. It's an outdoor classroom and adventure rolled into one." },
      { name: "Elizabethtown Nature Park", desc: "Another great outdoor option for families who enjoy nature walks and wildlife observation. The nature park provides a quieter, more contemplative outdoor experience compared to the busier Freeman Lake Park." },
      { name: "Seasonal Activities", desc: "Throughout the year, E-town offers seasonal family activities — pumpkin patches and corn mazes in fall, Christmas events in winter, Easter egg hunts in spring, and outdoor festivals in summer. The community calendar stays active year-round." },
      { name: "Fort Knox MWR Activities", desc: "Military families have access to Fort Knox's extensive MWR (Morale, Welfare, and Recreation) programs including youth sports leagues, arts and crafts, outdoor adventure programs, child care, and family events. The Otter Creek Outdoor Recreation Area is a particular highlight for outdoor families." },
    ],
    tips: "E-town's family activities are spread throughout the year, so there's always something to do regardless of season. For the best experience, connect with other families in your neighborhood or through school parent groups — word of mouth is how locals discover the best family activities. Military families should sign up for Fort Knox MWR newsletters as soon as they arrive for access to programs and events. Many family activities in E-town are free or very affordable, which is a real quality-of-life bonus.",
    ctaText: "Looking for a family-friendly neighborhood in E-town? Compass and Key Group specializes in helping families find the perfect home. Call (270) 735-3897.",
  },
  {
    slug: "nightlife",
    name: "Nightlife & Entertainment in Elizabethtown",
    metaTitle: "Nightlife in Elizabethtown, KY",
    metaDesc: "Guide to nightlife and entertainment in Elizabethtown, KY. Bars, live music, movie theaters, and evening entertainment options in E-town.",
    intro: "Let's be honest — Elizabethtown isn't Nashville or Louisville when it comes to nightlife. But it's not trying to be. What E-town does offer is a relaxed selection of bars, restaurants with good happy hours, occasional live music, and enough entertainment options to keep your evenings interesting without the crowds, traffic, and prices of a big city. And Louisville's more extensive nightlife scene is just 45 minutes up I-65 for when you want the full experience.",
    picks: [
      { name: "Local Bars & Pubs", desc: "E-town has a handful of neighborhood bars and pubs that serve as casual gathering spots. These are the kind of places where you'll run into people you know, bartenders remember your order, and the atmosphere is relaxed and welcoming. Pool tables, darts, and big-screen TVs for game nights are standard." },
      { name: "Restaurant Bars", desc: "Several of E-town's sit-down restaurants offer full bar service with happy hour specials. Stone Hearth, in particular, offers a quality bar experience with craft cocktails and a good beer selection. It's a popular spot for after-work drinks and casual evening dining." },
      { name: "Live Music", desc: "Live music pops up at various venues around E-town, particularly on weekends. Check local event listings for acoustic acts, cover bands, and occasional touring performers at area bars and restaurants. The downtown area has been growing its live entertainment presence." },
      { name: "Movie Theaters", desc: "Evening movie showings are a reliable entertainment option. The local theaters show first-run films, and ticket prices are lower than big-city cinemas. A movie and dinner combo makes for an easy, enjoyable evening out." },
      { name: "Louisville Nightlife (45 min)", desc: "For a bigger night out, Louisville's Bardstown Road, NuLu district, and 4th Street Live offer extensive bar, club, restaurant, and live music options. Many E-town residents make periodic Louisville evenings a part of their social routine. Plan for a designated driver or rideshare." },
      { name: "Fort Knox Entertainment", desc: "Fort Knox offers on-post entertainment options including a bowling center, movie theater, and occasional MWR-sponsored events. These are convenient options for military families looking for an evening out without leaving the post area." },
    ],
    tips: "Elizabethtown's nightlife is best described as 'chill and accessible.' If you're coming from a major metro, adjust your expectations and embrace the slower pace — you might find you prefer it. The upside is that everything is close, parking is easy and free, and you won't spend half your evening stuck in traffic or waiting for a table. For bigger nights out, Louisville is close enough for an occasional trip, and Uber/Lyft service is available in the area. E-town's bar scene is friendly and safe, which military families and newcomers especially appreciate.",
    ctaText: "Looking for a home in E-town with everything nearby? Contact Compass and Key Group — your local Elizabethtown real estate experts. Call (270) 735-3897.",
  },
];
