// Client testimonials. Source text and display rules: docs/testimonials.md.
// Long reviews are trimmed to their strongest lines ("…" marks a cut);
// spelling lightly tidied. `highlight` marks the full-width feature tile.
// `year` is a best guess from Google's relative dates when the reviews were
// copied on 2026-11-15 ("a year ago" = 2025, "2 years ago" = 2024, "3 years
// ago" = 2023), approved by the owner. The old-site testimonials have no year.

const all = [
  {
    name: 'Jess',
    highlight: true,
    year: 2026,
    tag: 'wedding',
    quote:
      'Michelle was everything we could have hoped for in a celebrant and more. Her energy is infectious, her warmth is genuine, and she brought such a beautiful, calming presence to our wedding day. … She made us feel completely at ease and created a ceremony that felt authentically us.',
  },
  {
    name: 'Sam & Emma',
    year: 2024,
    tag: 'wedding',
    quote:
      'Our ceremony was on New Year’s Day and we were finding it hard to find someone, but luckily we found Michelle. Michelle has a unique ability to capture the essence of a couple’s journey, creating a ceremony that felt deeply personal, humorous and heartfelt.',
  },
  {
    name: 'Sue',
    tag: 'funeral',
    quote:
      'Thank you Michelle for ensuring the funeral service was such a perfect reflection of Mum’s life. You created such a sense of “us” as a family, and set the tone exactly as we wanted.',
  },
  {
    name: 'Mel & Luke',
    year: 2026,
    tag: 'wedding',
    quote:
      'On the day of the ceremony, a storm rolled in which threw a bit of a spanner in the plans, but Michelle remained completely calm and accommodating. Her relaxed approach helped keep us at ease and made the whole experience feel seamless despite the change.',
  },
  {
    name: 'Jennifer',
    tag: 'naming',
    quote:
      'I just wanted to say a massive thank you for everything you did yesterday. The naming ceremony was everything and more. Thank you for all the time and effort you put in for making a lovely service for my daughter.',
  },
  {
    name: 'Aimee',
    year: 2024,
    tag: 'wedding',
    quote:
      'Even with last-minute changes, and running late (true to my style, lol), we never felt like we were inconveniencing or troubling her. … Even through my nervous laughter (the whole time) and our awkwardness, she managed to provide exactly the ceremony we envisioned.',
  },
  {
    name: 'Annette',
    year: 2024,
    tag: 'wedding',
    quote:
      'We felt at ease with Michelle from our very first meeting and knew straight away that she was the one to marry us! She guided us through everything from what the ceremony would entail to all the legal jargon and paperwork.',
  },
  {
    name: 'Maria & Lynn',
    tag: 'funeral',
    quote:
      'It was just as my mother would have liked it. I was also very pleased with the way that you seemed to pick up my mother’s way of thinking so very quickly, even without knowing her. My family and I appreciated the way the whole funeral service was conducted with much respect.',
  },
  {
    name: 'Ben',
    year: 2024,
    tag: 'wedding',
    quote:
      'She truly listened and understood our needs, exuded incredible friendliness, and even went above and beyond in her preparation. … Her warmth and great sense of humour made everyone feel comfortable and created a special and memorable ceremony from start to finish.',
  },
  {
    name: 'Julia & Mitchell',
    tag: 'wedding',
    quote:
      'Michelle was a wonderful part of our wedding day. We are so grateful for her patience and commitment to creating a ceremony that suited us. We would recommend Michelle to anyone. Thanks for telling our little love story!',
  },
  {
    name: 'Leanne',
    year: 2025,
    tag: 'wedding',
    quote:
      'Michelle was simply amazing. She made us feel so relaxed and the way she automatically included our son in the ceremony with ease was perfection. Cannot recommend Michelle enough. Simply the best!',
  },
  {
    name: 'John',
    year: 2023,
    tag: 'elopement',
    quote:
      'Michelle Stannard, our celebrant for our elopement ceremony, was simply exceptional. Her impeccable organisation, warmth, and wonderful sense of humour transformed our intimate event into an unforgettable experience. … Her heartfelt words were a reflection of our love and commitment.',
  },
  {
    name: 'Carol',
    tag: 'funeral',
    quote:
      'Thank you Michelle for your kind words. I had some people remark on how wonderful you were with running the funeral service for Mum, and wanted to know where I found you.',
  },
  {
    name: 'Sonjae',
    year: 2023,
    tag: 'wedding',
    quote:
      'She is a true professional, super informative, with a heart full of love and a talent for crafting beautiful moments. … In addition to officiating, she took us for a walk around the venue to show us all the best photo opportunities!',
  },
  {
    name: 'Bianca',
    year: 2026,
    tag: 'wedding',
    quote:
      'Michelle, an absolute star. She was the best celebrant I could have asked for. We very last-minute planned the wedding and Michelle was so chill about my severe lack of organisation. I’m so glad we decided to have our wedding at home and Michelle marry us.',
  },
  {
    name: 'Rhiannon & Andrew',
    tag: 'elopement',
    quote: 'Thank you so much again Michelle for performing our elopement ceremony. You were a pleasure to work with.',
  },
  {
    name: 'Nicole',
    year: 2024,
    tag: 'wedding',
    quote:
      'Michelle has a warm nature and a great sense of humour which really helps you feel comfortable on the big day. I would recommend her services to anyone. It was the best day of our lives.',
  },
  {
    name: 'John S.',
    year: 2024,
    tag: 'wedding',
    quote:
      'Michelle is an incredible individual who will completely enhance your event with love, empathy and an intuitive (and hilarious) sense of humour. You will not be disappointed if you go with this extraordinary human.',
  },
  {
    name: 'Candis',
    year: 2023,
    tag: 'wedding',
    quote:
      'She made our wedding day feel extra special and put up with our crazy families with a smile on her face. She’s great company and she did such a great job on our wedding day.',
  },
  {
    name: 'Liz',
    year: 2024,
    tag: 'wedding',
    quote:
      'As soon as you meet Michelle you feel at ease and comfortable in her presence. Michelle is warm, kind and has a great sense of humour. Absolutely recommend without hesitation.',
  },
  {
    name: 'Keith',
    year: 2025,
    tag: 'wedding',
    quote: 'A wonderful experience dealing with Michelle! She is professional, efficient, and understanding. Highly recommended!',
  },
  {
    name: 'Racheal',
    year: 2024,
    tag: 'wedding',
    quote: 'Michelle was absolutely wonderful. She helped to make our day feel special.',
  },
];

// Order used everywhere: the highlighted testimonial first, then newest year
// first, with undated ones last (keeping their order above within a year).
export const testimonials = [...all].sort((a, b) => {
  if (a.highlight !== b.highlight) return a.highlight ? -1 : 1;
  return (b.year ?? 0) - (a.year ?? 0);
});

// Home page and area pages: the most recent (2025 and 2026).
export const featuredTestimonials = testimonials.filter((t) => t.highlight || t.year >= 2025);

export const testimonialsByTags = (tags, limit = 3) =>
  testimonials.filter((t) => tags.includes(t.tag)).slice(0, limit);
