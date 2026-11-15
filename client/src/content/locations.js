// Location pages for local search. Each has copy specific to its area.
// Keep facts general and checkable: suburbs and well-known landmarks only.
// Listing a place here doesn't mean Michelle has held a ceremony there.

export const locations = [
  {
    slug: 'camden',
    path: '/locations/camden',
    name: 'Camden',
    title: 'Camden Celebrant | Weddings, Namings & Funerals',
    description:
      'Michelle Anne is a local Camden celebrant based in Spring Farm, creating personal weddings, vow renewals, naming ceremonies and funerals across the Camden area.',
    heading: 'Your local Camden celebrant',
    image: 'wedding-barn-wide',
    lead: 'I live in Spring Farm, just down the road from Camden, so this is home turf. If your ceremony is anywhere in the Camden area, I’m practically a neighbour.',
    paragraphs: [
      'From the heritage streets of Camden town to the newer neighbourhoods of Oran Park and Gregory Hills, this area has a wonderful mix of places to celebrate: historic homesteads and farm venues, riverside parks along the Nepean, beautiful gardens and plenty of generous backyards.',
      'Being local means I know how the area works. I can meet you for a chat without a long drive, and I’m never far away on the day.',
    ],
    suburbs: ['Camden', 'Spring Farm', 'Narellan', 'Mount Annan', 'Elderslie', 'Harrington Park', 'Oran Park', 'Gregory Hills', 'Currans Hill', 'Cobbitty', 'Catherine Field', 'Kirkham'],
  },
  {
    slug: 'campbelltown',
    path: '/locations/campbelltown',
    name: 'Campbelltown',
    title: 'Campbelltown Celebrant | Weddings, Namings & Funerals',
    description:
      'Personal, relaxed ceremonies across Campbelltown and surrounds. Weddings, vow renewals, naming ceremonies and funerals by Michelle Anne, celebrant.',
    heading: 'Celebrant for Campbelltown and surrounds',
    image: 'wedding-autumn',
    lead: 'Campbelltown is just across the way from me in Spring Farm, and I love creating ceremonies here, from small backyard weddings to big family naming days.',
    paragraphs: [
      'There’s so much variety in this part of Macarthur. You’ll find leafy parks and gardens, function centres and community halls, and bushland on the edges of town, all within easy reach.',
      'Wherever you’re planning to celebrate, I’ll help you make the most of your space and create a ceremony that feels warm and personal.',
    ],
    suburbs: ['Campbelltown', 'Leumeah', 'Ingleburn', 'Minto', 'Glen Alpine', 'Ambarvale', 'Rosemeadow', 'Bradbury', 'Raby', 'St Helens Park', 'Menangle Park', 'Gilead'],
  },
  {
    slug: 'wollondilly',
    path: '/locations/wollondilly',
    name: 'Wollondilly',
    title: 'Wollondilly Celebrant | Picton, Thirlmere & The Oaks',
    description:
      'Country and bush ceremonies across the Wollondilly Shire, from Picton and Thirlmere to The Oaks and Warragamba. Michelle Anne, celebrant.',
    heading: 'Country ceremonies across Wollondilly',
    image: 'wedding-bush-garden',
    lead: 'If you’re dreaming of rolling paddocks, gum trees and big open skies, Wollondilly is hard to beat, and it’s only a short drive from me.',
    paragraphs: [
      'From the historic villages of Picton and Thirlmere to the farms around The Oaks and the bushland out towards Warragamba, the shire is made for relaxed country ceremonies. Private properties, rural venues and family farms all make beautiful settings.',
      'Outdoor ceremonies in the country come with their own surprises. I’m calm in the wind and the rain, and I’ll help you plan for the weather so nothing spoils your day.',
    ],
    suburbs: ['Picton', 'Thirlmere', 'Tahmoor', 'Bargo', 'The Oaks', 'Oakdale', 'Silverdale', 'Warragamba', 'Appin', 'Douglas Park', 'Menangle', 'Wilton'],
  },
  {
    slug: 'south-west-sydney',
    path: '/locations/south-west-sydney',
    name: 'South West Sydney',
    title: 'South West Sydney Celebrant | Liverpool & Leppington',
    description:
      'Weddings, vow renewals, naming ceremonies and funerals across South West Sydney, including Liverpool, Leppington and surrounds. Michelle Anne, celebrant.',
    heading: 'Celebrant for South West Sydney',
    image: 'wedding-arch-lawn',
    lead: 'South West Sydney is growing fast, and so are the families who call it home. I’d love to help you celebrate the moments that matter, wherever you are in the area.',
    paragraphs: [
      'From established suburbs around Liverpool to the new communities in Leppington and Edmondson Park, I create ceremonies in function centres, parks, chapels, memorial parks and backyards right across the region.',
      'Every family and every culture celebrates a little differently. I’m always happy to weave your traditions, languages and rituals into a ceremony that feels like yours.',
    ],
    suburbs: ['Liverpool', 'Leppington', 'Edmondson Park', 'Austral', 'Casula', 'Prestons', 'Hoxton Park', 'Carnes Hill', 'Horningsea Park', 'Moorebank', 'Bringelly', 'Rossmore'],
  },
];

export const locationBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));
