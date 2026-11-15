// Business details shown on the site. Edit here rather than in components.
// Leave a value as null to hide it on the page.
export const site = {
  name: 'Michelle Anne',
  fullName: 'Michelle Stannard',
  business: 'Life Event Ceremonies',
  url: 'https://lifeeventceremonies.com.au',
  location: 'Spring Farm, NSW',
  email: 'hello@lifeeventceremonies.com.au',
  phone: '0412 235 472',
  facebook: 'https://www.facebook.com/people/Michelle-Anne-Celebrant-Life-Event-Ceremonies/100085498419318/',
  instagram: 'https://www.instagram.com/michelleannecelebrant',
  // TODO: replace with the direct "read reviews" link from Michelle's Google Business Profile.
  googleReviews: 'https://www.google.com/search?q=Michelle+Anne+Celebrant+Life+Event+Ceremonies',
  signOff: 'Your ceremony, your way.',
};

export const phoneHref = `tel:${site.phone.replace(/\s/g, '')}`;
