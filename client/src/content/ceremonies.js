// One entry per ceremony page. Copy follows the voice in docs/reference-sites.md:
// first person, warm and relaxed; gentle and calm for funerals.
// `enquiry` must match a value in content/enquiry.js.

export const ceremonies = [
  {
    slug: 'weddings',
    path: '/weddings',
    name: 'Weddings',
    enquiry: 'wedding',
    title: 'Wedding Celebrant in Camden, Campbelltown & Macarthur',
    description:
      'Relaxed, personal wedding ceremonies by Michelle Anne, a marriage celebrant based in Spring Farm. Elopements, backyard weddings and big days across Macarthur and South West Sydney.',
    image: 'wedding-forest-kiss',
    card: 'Big day, small day or just the two of you. A ceremony that sounds like you.',
    heading: 'Wedding ceremonies',
    lead: 'Country or city, traditional or totally relaxed, a hundred guests or just the two of you. Your wedding ceremony should feel like you, and helping you get there is my favourite part of the job.',
    intro: [
      'Country, city, modern, traditional, formal, casual or cultural: any of these can shape your ceremony, and we can mix and match. I’ll tell your love story, help you with your vows and suggest readings or rituals that suit you.',
      'Most importantly, I’ll look after you and your guests on the day, so you can stop worrying and actually enjoy it. Couples often tell me how relaxed they felt, rain, wind and all, and I can’t think of a better compliment.',
    ],
    offerHeading: 'What I bring to your day',
    offers: [
      'Your love story, told warmly, with a laugh or two if that’s your style',
      'Help with your vows, whether you write your own or choose from my collection',
      'Readings, poems and rituals, like handfasting, sand blending or a ring warming',
      'A PA system so everyone can hear, or an unplugged ceremony if you’d prefer',
      'Some props and decorations to help style your ceremony space',
      'All the legal paperwork, prepared and lodged for you',
      'A calm, friendly face looking after you and your guests',
    ],
    extra: {
      heading: 'The legal bits, made easy',
      paragraphs: [
        'You’ll need to complete a Notice of Intended Marriage and get it to me at least one month (and no more than 18 months) before your wedding. I’ll walk you through it, check your ID documents and make sure everything is in order.',
        'On the day you’ll sign your certificates in front of two witnesses aged 18 or over. Afterwards I lodge your marriage with NSW Births, Deaths & Marriages, so all you have to do is enjoy being married.',
      ],
    },
    styles: {
      heading: 'Every kind of wedding',
      items: [
        { name: 'Elopements', text: 'Just the two of you and two witnesses, wherever you like.' },
        { name: 'Backyard and kitchen-table weddings', text: 'Relaxed, at home and surrounded by the people you love.' },
        { name: 'Garden and bush weddings', text: 'Under the gums, beside the river or among the roses.' },
        { name: 'The full celebration', text: 'Venue, bridal party, string quartet: the whole beautiful lot.' },
      ],
    },
    gallery: ['wedding-garden-vows', 'wedding-rings', 'wedding-lookout', 'wedding-lawn-signing', 'wedding-walk', 'wedding-laughter'],
    testimonialTags: ['wedding', 'elopement'],
    faqTags: ['legal', 'planning'],
  },
  {
    slug: 'vow-renewals',
    path: '/vow-renewals',
    name: 'Vow Renewals',
    enquiry: 'vow-renewal',
    title: 'Vow Renewal Celebrant in Macarthur & South West Sydney',
    description:
      'Celebrate your marriage all over again with a fun, romantic or heartfelt vow renewal ceremony by Michelle Anne, a celebrant based in Spring Farm, NSW.',
    image: 'vow-renewal',
    card: 'Give your wedding day a do-over, your way this time.',
    heading: 'Vow renewal ceremonies',
    lead: 'How much fun would it be to give your wedding day a do-over? That’s exactly how it feels for a lot of couples who renew their vows.',
    intro: [
      'Maybe you married in a religion you no longer practise, in front of friends you no longer see. Maybe you eloped and the family still hasn’t forgiven you. Or maybe, after all these years, you simply want to say something new to each other.',
      'Vow renewals have no legal requirements, so we can make yours as fun, romantic or serious as you like. I can’t wait to hear your story.',
    ],
    offerHeading: 'What we can include',
    offers: [
      'The story of your years together, from how you met to where you are now',
      'New vows, the original ones, or a little of both',
      'A role for your children or grandchildren',
      'Poems, readings and rituals from my collection',
      'A keepsake certificate to mark the occasion',
    ],
    gallery: ['wedding-barn', 'wedding-hands', 'wedding-arch-lawn'],
    testimonialTags: ['vow-renewal', 'wedding'],
    faqTags: ['planning'],
  },
  {
    slug: 'naming-ceremonies',
    path: '/naming-ceremonies',
    name: 'Naming Ceremonies',
    enquiry: 'naming',
    title: 'Baby Naming Ceremonies in Camden, Campbelltown & Macarthur',
    description:
      'Welcome your little one with a joyful baby naming ceremony full of fun, laughter and love. Celebrant Michelle Anne, based in Spring Farm, NSW.',
    image: 'naming-balloons',
    card: 'Welcome your newest family member with the people who love them.',
    heading: 'Naming ceremonies',
    lead: 'What better way to welcome a new family member than a naming ceremony with all your loved ones around you?',
    intro: [
      'There are no legal requirements for a naming ceremony, so you have complete freedom to create something unique and memorable. Babies, toddlers, big kids, blended families: every naming day is different, and I’ll help you shape yours.',
      'These ceremonies are full of fun, laughter and love, and they’re one of my favourite things to do.',
    ],
    offerHeading: 'Ideas we can draw on',
    offers: [
      'Candles, lanterns, poems and readings',
      'Rituals the whole family can join in, like rose petal blessings, tree planting, bubble wishes and sand blending',
      'Guide-parents, godparents or grandparents taking part in the ceremony',
      'Heartwarming promises for family and friends to make to your child',
      'A naming certificate for your child to keep',
    ],
    gallery: ['naming-certificate', 'naming-family', 'naming-cradle'],
    testimonialTags: ['naming'],
    faqTags: ['naming', 'planning'],
  },
  {
    slug: 'funerals',
    path: '/funerals',
    name: 'Funerals',
    enquiry: 'funeral',
    title: 'Funeral & Memorial Celebrant in Camden & Macarthur',
    description:
      'Gentle, personal funeral and memorial services that honour a life well lived. Michelle Anne is a funeral celebrant based in Spring Farm, serving Macarthur and South West Sydney.',
    image: 'funeral-memorial',
    card: 'A gentle, personal farewell that honours a life well lived.',
    heading: 'Funerals and memorials',
    lead: 'Losing someone you love is one of the hardest times in life. My hope is to make this part of it a little easier for you.',
    intro: [
      'A funeral can be a celebration of a life lived, an acknowledgement of everything your loved one achieved, and a time of hope, love and support for family and friends in the days ahead.',
      'I’ll take the time to listen to your stories so the service truly reflects the person you’re farewelling. Families often tell me it felt as though I’d known them.',
    ],
    offerHeading: 'How I can help',
    offers: [
      'A gentle conversation with you and your family about the person you’re farewelling',
      'A personal service that tells their story, written with you and delivered with care',
      'Help choosing music, readings, poems and meaningful rituals',
      'Working alongside your funeral director, so the details are taken care of',
      'Services in a chapel, at the graveside, at home or somewhere that meant something to them',
      'Memorials and ash scatterings, whenever the time feels right',
    ],
    gallery: ['funeral-chapel'],
    testimonialTags: ['funeral'],
    faqTags: ['funeral'],
    gentle: true,
  },
  {
    slug: 'other-ceremonies',
    path: '/other-ceremonies',
    name: 'Other Ceremonies',
    enquiry: 'other',
    title: 'Commitment Ceremonies, Blessings & Milestones',
    description:
      'Commitment ceremonies, home blessings, blended family ceremonies and milestone celebrations by Michelle Anne, a celebrant in Spring Farm, NSW.',
    image: 'other-beach',
    card: 'Commitments, blessings and milestones. If it matters to you, let’s mark it.',
    heading: 'Other ceremonies',
    lead: 'Some of life’s biggest moments don’t come with a ready-made ceremony. If something matters to you, we can create a ceremony to mark it.',
    intro: [
      'These ceremonies have no rules and no legal requirements, so we can make them exactly what you need: intimate or grand, light-hearted or deeply moving.',
    ],
    offerHeading: 'Ceremonies I can create with you',
    styles: {
      items: [
        { name: 'Commitment ceremonies', text: 'Celebrate your love and your promises, without the legal side of marriage.' },
        { name: 'Blended family ceremonies', text: 'Bring two families together, with a part for every child.' },
        { name: 'Home blessings', text: 'Welcome a new chapter in a new home with the people who’ll fill it.' },
        { name: 'Milestones', text: 'Big birthdays, anniversaries, retirements and fresh starts.' },
      ],
    },
    offers: [
      'Symbolic rituals such as handfasting, sand blending, candle lighting or tree planting',
      'Readings, poems and words written just for you',
      'Roles for family and friends',
    ],
    gallery: ['family-celebration', 'wedding-bouquet'],
    testimonialTags: ['wedding', 'naming'],
    faqTags: ['planning'],
  },
];

export const ceremonyBySlug = Object.fromEntries(ceremonies.map((c) => [c.slug, c]));
