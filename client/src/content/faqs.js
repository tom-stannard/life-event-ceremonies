// FAQs, grouped for the FAQ page. Tags decide which ceremony pages show them.
// Legal answers reflect the Marriage Act 1961 and NSW practice; check with
// Michelle before changing them. Items marked `confirm` need her sign-off
// (see docs/content-to-confirm.md).

export const faqGroups = [
  {
    id: 'legal',
    heading: 'Getting married: the legal bits',
    items: [
      {
        q: 'How far ahead should we book?',
        a: [
          'As early as you can, especially if you’re after a Saturday in spring or autumn. By law, your Notice of Intended Marriage has to reach me at least one month before the wedding, so a few months’ notice is ideal.',
          'Working to a tight timeline? Get in touch anyway. I’ve helped couples who organised their wedding at the last minute, and we still had a wonderful day.',
        ],
      },
      {
        q: 'What is a Notice of Intended Marriage?',
        a: [
          'It’s the official form every couple marrying in Australia must complete. It needs to reach me at least one month, and no more than 18 months, before your wedding. I’ll help you fill it in and make sure it’s all correct.',
        ],
      },
      {
        q: 'What documents do we need?',
        a: [
          'You’ll each need proof of your date and place of birth (a birth certificate or passport) and photo ID. If either of you has been married before, you’ll also need the divorce certificate or the death certificate of your former spouse. Documents in another language need an English translation.',
        ],
      },
      {
        q: 'Can we get married in less than a month?',
        a: [
          'Sometimes. In certain circumstances, such as medical reasons, travel or work commitments, a prescribed authority can approve a shortening of time. Talk to me and I’ll explain how it works.',
        ],
      },
      {
        q: 'Do we need witnesses?',
        a: ['Yes, you need two witnesses who are 18 or older. They can be anyone you like: friends, family, even your photographer.'],
      },
      {
        q: 'Do we need to be Australian citizens or residents?',
        a: ['No. Anyone can marry in Australia as long as they meet the legal requirements, so visitors and couples from overseas are very welcome.'],
      },
      {
        q: 'Do you marry same-sex couples?',
        a: ['Absolutely. Everyone is welcome here, and I’d be honoured to be part of your day.'],
      },
      {
        q: 'What happens with the paperwork after the wedding?',
        a: [
          'You’ll sign your certificates during the ceremony and take home a ceremonial marriage certificate on the day. I then register your marriage with NSW Births, Deaths & Marriages. If you need an official registered certificate, for example to change your name, you can order one from them once the marriage is registered.',
        ],
      },
    ],
  },
  {
    id: 'planning',
    heading: 'Planning your ceremony',
    items: [
      {
        q: 'Can we meet before we book?',
        a: ['Yes, please do. Choosing a celebrant is all about feeling comfortable with them, so let’s have a chat and see if I’m the right person for you.'],
      },
      {
        q: 'Can you help us with our vows?',
        a: ['Of course. You can write your own and I’ll help you polish them, or choose from my collection of written vows. If speaking in front of people makes you nervous, we’ll find a way that works for you.'],
      },
      {
        q: 'Can our children and family be part of the ceremony?',
        a: ['I’d love that. Children, grandparents, best friends and even the family dog can all have a role, from readings and rituals to handing over the rings.'],
      },
      {
        q: 'Can we include rituals?',
        a: ['Yes. Handfasting, sand blending, candle lighting, ring warmings, tree planting, rose petal blessings: I have lots of ideas and I’m always happy to include your own cultural or family traditions.'],
      },
      {
        q: 'Do you bring a PA system?',
        confirm: true,
        a: ['I can bring a PA system so your guests can hear every word. If you’d rather keep things simple and unplugged, that’s fine too.'],
      },
      {
        q: 'What if it rains?',
        a: ['I’ve married couples in rain, wind and the odd storm, and we’ve laughed through all of it. I’ll help you think through a wet weather plan, and on the day I’ll stay calm so you can too.'],
      },
      {
        q: 'Where do you travel to?',
        a: ['I’m based in Spring Farm and look after couples and families across Camden, Campbelltown, Wollondilly and South West Sydney. Planning something further away? Get in touch and we can talk it through.'],
      },
      {
        q: 'How much does a ceremony cost?',
        a: ['Every ceremony is different, so I’ll give you a quote once I know a little about what you have in mind. Send me an enquiry and we can go from there.'],
      },
    ],
  },
  {
    id: 'funeral',
    heading: 'Funerals and memorials',
    items: [
      {
        q: 'Do you work with funeral directors?',
        a: ['Yes. I’m happy to work alongside your funeral director so the arrangements run smoothly. If you’re planning a memorial yourselves, you can come to me directly.'],
      },
      {
        q: 'Does the service need to be religious?',
        a: ['That’s entirely up to you and your family. A service can be completely non-religious, or include prayers, hymns or readings that were important to your loved one.'],
      },
      {
        q: 'Where can a funeral or memorial be held?',
        a: ['Anywhere that feels right: a chapel, the graveside, a family home, a garden, or a place that meant something to the person you’re farewelling. Memorials and ash scatterings can happen whenever you’re ready.'],
      },
      {
        q: 'How do you get to know our loved one?',
        a: ['We’ll sit down together and you’ll tell me about them: their story, their quirks, what they loved. I’ll take it from there and make sure the service sounds like them.'],
      },
    ],
  },
  {
    id: 'naming',
    heading: 'Naming ceremonies',
    items: [
      {
        q: 'Is a naming ceremony a legal requirement?',
        a: ['No. Your child’s birth is registered separately with NSW Births, Deaths & Marriages. A naming ceremony is simply a celebration, which means we can make it whatever you like.'],
      },
      {
        q: 'How old should our child be?',
        a: ['Any age at all. Tiny babies, toddlers and older children are all welcome, and a naming ceremony is a lovely way to celebrate a blended family or adoption too.'],
      },
      {
        q: 'What are guide-parents?',
        a: ['Guide-parents are a non-religious alternative to godparents: special people who promise to support and guide your child as they grow. Godparents and grandparents can take part too.'],
      },
    ],
  },
];

export const faqsByTag = (tags) => faqGroups.filter((g) => tags.includes(g.id));
