// Area pages for local search: two regions (Camden, Wollondilly), each with
// its own suburb pages. Every page needs copy specific to its place.
// Keep facts general and checkable (well-known landmarks only), and never
// claim Michelle has held a ceremony somewhere unless she has told us so.
// Unconfirmed local details are listed in docs/content-to-confirm.md.

export const regions = [
  {
    slug: 'camden',
    path: '/locations/camden',
    name: 'Camden',
    title: 'Camden Celebrant | Weddings, Namings & Funerals',
    description:
      'Michelle Anne is a local Camden celebrant creating personal weddings, vow renewals, naming ceremonies and funerals right across the Camden area.',
    heading: 'Your local Camden celebrant',
    image: 'wedding-barn-wide',
    lead: 'Camden is home for me, so if your ceremony is anywhere in the Camden area, I’m practically a neighbour.',
    paragraphs: [
      'From the heritage streets of Camden town to the newer neighbourhoods of Oran Park and Gregory Hills, this area has a wonderful mix of places to celebrate: historic homesteads and farm venues, riverside parks along the Nepean, beautiful gardens and plenty of generous backyards.',
      'Being local means I know how the area works. I can meet you for a chat without a long drive, and I’m never far away on the day.',
    ],
    suburbs: ['spring-farm', 'narellan', 'mount-annan', 'elderslie', 'harrington-park', 'oran-park', 'gregory-hills', 'currans-hill', 'cobbitty', 'catherine-field', 'kirkham'],
  },
  {
    slug: 'wollondilly',
    path: '/locations/wollondilly',
    name: 'Wollondilly',
    title: 'Wollondilly Celebrant | Picton, Thirlmere & The Oaks',
    description:
      'Country and bush ceremonies across the Wollondilly Shire, from Picton and Thirlmere to The Oaks, Menangle and Appin. Michelle Anne, celebrant.',
    heading: 'Country ceremonies across Wollondilly',
    image: 'wedding-bush-garden',
    lead: 'If you’re dreaming of rolling paddocks, gum trees and big open skies, Wollondilly is hard to beat, and it’s only a short drive from me.',
    paragraphs: [
      'From the historic villages of Picton, Menangle and Appin to the farms around The Oaks and Oakdale, the shire is made for relaxed country ceremonies. Private properties, rural venues and family farms all make beautiful settings.',
      'Outdoor ceremonies in the country come with their own surprises. I’m calm in the wind and the rain, and I’ll help you plan for the weather so nothing spoils your day.',
    ],
    suburbs: ['picton', 'thirlmere', 'the-oaks', 'oakdale', 'menangle', 'wilton', 'appin'],
  },
];

// Suburb pages. `region` must match a region slug above.
export const suburbs = [
  // ---- Camden area
  {
    slug: 'spring-farm',
    region: 'camden',
    name: 'Spring Farm',
    image: 'wedding-arch-lawn',
    lead: 'Spring Farm is right on my doorstep, so a ceremony here is about as local as it gets for me.',
    paragraphs: [
      'This friendly, growing suburb sits between Camden and Mount Annan, close to the Nepean River, with parks, open green spaces and plenty of backyards made for celebrating.',
      'Whether it’s a relaxed wedding at home, a naming day in the garden or a gentle farewell, I can be there easily and I’m happy to pop over for a chat beforehand.',
    ],
  },
  {
    slug: 'narellan',
    region: 'camden',
    name: 'Narellan',
    image: 'wedding-window',
    lead: 'Narellan is the busy heart of the Camden area, and a great central spot for family and friends to gather.',
    paragraphs: [
      'With function rooms, restaurants and leafy parks all close together, Narellan makes it easy to hold your ceremony and celebration in one place, with plenty of parking for guests coming from across the area.',
      'From weddings to milestone birthdays, I’ll help you shape a ceremony that suits your space, whether that’s a function room or the backyard.',
    ],
  },
  {
    slug: 'mount-annan',
    region: 'camden',
    name: 'Mount Annan',
    image: 'wedding-walk',
    lead: 'Mount Annan is home to the Australian Botanic Garden, so it’s no surprise it’s a beautiful place for a ceremony.',
    paragraphs: [
      'Rolling hills, wide lawns and native gardens give Mount Annan a calm, green feel that’s perfect for outdoor weddings, vow renewals and naming days.',
      'If you’re planning a ceremony in a public garden or park, I’ll help you think through the practical bits, like where your guests will stand, what to do if it rains, and how to keep the moment feeling intimate in a big open space.',
    ],
  },
  {
    slug: 'elderslie',
    region: 'camden',
    name: 'Elderslie',
    image: 'wedding-autumn',
    lead: 'Elderslie sits just across the Nepean River from Camden town, close to everything and still full of green space.',
    paragraphs: [
      'Riverside parks, established gardens and quiet residential streets make Elderslie a lovely setting for relaxed ceremonies, from small backyard weddings to family naming days.',
      'It’s only minutes from me, which makes catching up to plan your ceremony nice and easy.',
    ],
  },
  {
    slug: 'harrington-park',
    region: 'camden',
    name: 'Harrington Park',
    image: 'wedding-lookout',
    lead: 'With its lake, walking paths and tree-lined streets, Harrington Park is one of the prettiest neighbourhoods in the Camden area.',
    paragraphs: [
      'Open green spaces and water views make a gorgeous backdrop for an outdoor wedding, elopement or vow renewal, and the photos are pretty special too.',
      'I’ll help you plan a ceremony that feels relaxed and personal, wherever you’ve chosen to celebrate.',
    ],
  },
  {
    slug: 'oran-park',
    region: 'camden',
    name: 'Oran Park',
    image: 'naming-balloons',
    lead: 'Once a famous raceway, Oran Park is now one of the fastest-growing communities in the Camden area, full of young families.',
    paragraphs: [
      'With so many new families calling Oran Park home, naming ceremonies are a lovely way to welcome a little one and bring everyone together, whether in a local park or your own backyard.',
      'I also create weddings, vow renewals and milestone celebrations here, all shaped around you and the people you love.',
    ],
  },
  {
    slug: 'gregory-hills',
    region: 'camden',
    name: 'Gregory Hills',
    image: 'naming-group',
    lead: 'Gregory Hills is a newer neighbourhood with plenty of parks and a real sense of community.',
    paragraphs: [
      'New homes, new families and new beginnings: Gregory Hills is the perfect place for a home blessing, a naming day or a relaxed backyard wedding.',
      'However big or small your celebration, I’ll help you create a ceremony that feels warm and personal.',
    ],
  },
  {
    slug: 'currans-hill',
    region: 'camden',
    name: 'Currans Hill',
    image: 'wedding-certificate',
    lead: 'Currans Hill is a friendly, established suburb close to Narellan and Mount Annan.',
    paragraphs: [
      'Its leafy streets, generous backyards and nearby green reserves make it ideal for intimate ceremonies at home, surrounded by the people who matter most.',
      'From weddings and vow renewals to naming ceremonies, I’ll make sure your day feels relaxed and completely yours.',
    ],
  },
  {
    slug: 'cobbitty',
    region: 'camden',
    name: 'Cobbitty',
    image: 'wedding-barn',
    lead: 'With its rolling farmland and historic village, Cobbitty has a timeless country charm.',
    paragraphs: [
      'Cobbitty’s history includes the heritage-listed Heber Chapel, and the surrounding rural properties and farm venues make stunning settings for country weddings and vow renewals.',
      'If you’re dreaming of an outdoor ceremony among the paddocks and gum trees, I’ll help you plan for the weather and the logistics so you can simply enjoy it.',
    ],
  },
  {
    slug: 'catherine-field',
    region: 'camden',
    name: 'Catherine Field',
    image: 'wedding-quartet',
    lead: 'Semi-rural Catherine Field offers wide open spaces and historic homesteads, just a short drive from Camden.',
    paragraphs: [
      'The area is home to venues such as Gledswood Homestead & Winery, along with private acreage properties that make beautiful backdrops for weddings and celebrations.',
      'Wherever you’re planning to celebrate in Catherine Field, I’ll create a ceremony that feels warm, relaxed and personal.',
    ],
  },
  {
    slug: 'kirkham',
    region: 'camden',
    name: 'Kirkham',
    image: 'wedding-forest-wide',
    lead: 'Quiet, leafy Kirkham sits just outside Camden town, with acreage properties and plenty of room to celebrate.',
    paragraphs: [
      'Private properties and big backyards make Kirkham ideal for an intimate wedding, a vow renewal under the trees or a family naming day.',
      'Being local, I can easily meet you at your property beforehand to help you plan the space.',
    ],
  },

  // ---- Wollondilly
  {
    slug: 'picton',
    region: 'wollondilly',
    name: 'Picton',
    image: 'wedding-barn-wide',
    lead: 'Picton is full of heritage charm, from its historic main street to its sandstone railway viaduct.',
    paragraphs: [
      'Historic buildings, country gardens and rural venues make Picton a beautiful setting for weddings, vow renewals and family celebrations.',
      'It’s an easy drive from me, and I’m always happy to come out and see your venue or property before the big day.',
    ],
  },
  {
    slug: 'thirlmere',
    region: 'wollondilly',
    name: 'Thirlmere',
    image: 'wedding-lawn-signing',
    lead: 'Thirlmere is a friendly village best known for the NSW Rail Museum and its quiet country streets.',
    paragraphs: [
      'With Thirlmere Lakes National Park nearby and plenty of rural properties around, it’s a lovely spot for relaxed outdoor ceremonies.',
      'From backyard weddings to naming days, I’ll help you create a ceremony that suits the setting and feels just like you.',
    ],
  },
  {
    slug: 'the-oaks',
    region: 'wollondilly',
    name: 'The Oaks',
    image: 'wedding-bush-garden',
    lead: 'The Oaks is a historic village at the gateway to the Burragorang Valley, surrounded by farmland and bush.',
    paragraphs: [
      'Its peaceful country setting is ideal for weddings and vow renewals with a relaxed, rustic feel, whether at a rural venue or on a family property.',
      'Country ceremonies can be at the mercy of the weather, so I’ll help you plan for every possibility and stay calm on the day.',
    ],
  },
  {
    slug: 'oakdale',
    region: 'wollondilly',
    name: 'Oakdale',
    image: 'wedding-forest-kiss',
    lead: 'Oakdale is true country living, with farms, bushland and wide open views not far from the Burragorang Valley.',
    paragraphs: [
      'If you’re planning a ceremony on a family farm or private property, Oakdale’s natural beauty makes for a truly special setting.',
      'I’ll work with you to make the most of your space and create a ceremony that feels relaxed, personal and full of heart.',
    ],
  },
  {
    slug: 'menangle',
    region: 'wollondilly',
    name: 'Menangle',
    image: 'wedding-hero',
    lead: 'Menangle is a small historic village on the Nepean River, with a country feel that’s only minutes from Camden.',
    paragraphs: [
      'Its heritage buildings, river views and surrounding farmland make a charming setting for weddings, vow renewals and family celebrations.',
      'Being so close to me, Menangle is easy to get to for a planning chat or a visit to your venue.',
    ],
  },
  {
    slug: 'wilton',
    region: 'wollondilly',
    name: 'Wilton',
    image: 'naming-family',
    lead: 'Wilton is growing fast, with new neighbourhoods like Bingara Gorge bringing plenty of new families to the area.',
    paragraphs: [
      'New homes and young families make Wilton a lovely place for naming ceremonies, home blessings and relaxed backyard weddings.',
      'I’ll help you create a ceremony that brings everyone together, whatever you’re celebrating.',
    ],
  },
  {
    slug: 'appin',
    region: 'wollondilly',
    name: 'Appin',
    image: 'vow-renewal',
    lead: 'Appin is one of the oldest villages in the area, surrounded by bushland and rolling country.',
    paragraphs: [
      'Historic charm and nearby bushland, including Dharawal National Park, give Appin a peaceful country setting for weddings, vow renewals and memorials.',
      'Whatever you’re planning, I’ll take the time to get to know you and create a ceremony that truly reflects you.',
    ],
  },
].map((s) => ({
  ...s,
  path: `/locations/${s.slug}`,
  title: `${s.name} Celebrant | Weddings, Namings & Funerals`,
  description: `Michelle Anne is a celebrant creating warm, personal weddings, vow renewals, naming ceremonies and funerals in ${s.name} and across the ${s.region === 'camden' ? 'Camden area' : 'Wollondilly Shire'}.`,
  heading: `Celebrant in ${s.name}`,
}));

export const regionBySlug = Object.fromEntries(regions.map((r) => [r.slug, r]));
export const suburbBySlug = Object.fromEntries(suburbs.map((s) => [s.slug, s]));
export const suburbsOf = (region) => region.suburbs.map((slug) => suburbBySlug[slug]);

// Every area page (regions and suburbs), for routing and prerendering.
export const allAreas = [...regions, ...suburbs];

// Kept for components that only need the top-level areas.
export const locations = regions;
