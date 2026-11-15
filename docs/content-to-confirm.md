# Content to confirm with Michelle

Copy written on 2026-11-15 that goes beyond what Michelle has told us directly. Each item is live on the site as written; confirm or correct it, then delete the line. Copy lives in `client/src/content/`.

## Services and what's included

- **PA system** (Weddings page, FAQ "Do you bring a PA system?"): the old site said she can perform "unplugged (no PA)", so the site says she can bring a PA. Confirm.
- **Props and decorations** (Weddings): from the old site ("provide some props and decoration"). Still true?
- **Rituals offered** (Weddings, FAQs, Other ceremonies): handfasting, sand blending, ring warming, candle lighting, tree planting, rose petal blessings, bubble wishes. Naming rituals come from the old site; the wedding ones are common examples. Remove any she doesn't do.
- **Keepsake certificates** for vow renewals and namings: based on photos showing certificates. Confirm.
- **Kitchen-table and backyard weddings** (Weddings): based on the "Kitchen Table Weddings" photo. Does she offer these as a named option?
- **Other ceremonies list**: commitment ceremonies, blended family ceremonies, home blessings, milestones (birthdays, anniversaries, retirements). Based on the reference site, as agreed. Which does she actually offer?
- **Funerals**: working alongside funeral directors, services in chapels, at gravesides and at home, memorials and ash scatterings, help with music and readings. Confirm. Does she also help with an order of service?
- **Meeting before booking** (FAQ, How it works): the site says "let's have a chat", with no pressure. Is the first chat free? In person, by phone, or by video?
- **Ceremony draft**: How it works says "I'll write your ceremony and we'll shape it together". Does she send a draft for review?

## Practical details

- **Travel**: the site says she covers Camden, Campbelltown, Wollondilly and South West Sydney, and to "get in touch" for further away. Are there travel fees, or a boundary?
- **Booking lead time** (FAQ): "a few months' notice is ideal". Any typical lead time she'd like to state?
- **Response time**: the site only says "I'll be in touch soon". Add a promise (e.g. within 24 hours) if she's happy to.

## Area pages

`client/src/content/locations.js`. Each suburb page has short copy naming well-known local features. These details are believed accurate but unconfirmed; check them, and swap in places where Michelle has actually held ceremonies (the single best improvement for local search):

- Mount Annan: the Australian Botanic Garden.
- Harrington Park: the lake.
- Oran Park: formerly a raceway, now a fast-growing community.
- Cobbitty: the heritage-listed Heber Chapel.
- Catherine Field: Gledswood Homestead & Winery as an example venue.
- Picton: historic main street and sandstone railway viaduct.
- Thirlmere: the NSW Rail Museum and Thirlmere Lakes National Park.
- The Oaks and Oakdale: near the Burragorang Valley.
- Menangle: historic village on the Nepean.
- Wilton: Bingara Gorge.
- Appin: one of the oldest villages in the area, near Dharawal National Park.
- Spring Farm, Elderslie, Kirkham and Menangle pages say Michelle is close by or can easily visit.

## Suggested additions

- **Higher-resolution photos**: the naming page photo of Michelle with a mother and baby (`Baby Naming/318022498_…jpg`) is only 420px wide and looks soft on large screens. A full-size original would help.

- **Credentials**: is she a Commonwealth-registered marriage celebrant, and since when? How many ceremonies has she done? Both build trust. Professional memberships (e.g. an association) could go in the footer.
- **Acknowledgement of Country** in the footer (Dharawal and Gundungurra Country covers much of Macarthur and Wollondilly). Only if Michelle would like one.
- **Google reviews link**: replace the search link in `client/src/siteConfig.js` (`googleReviews`) with the direct link from her Google Business Profile ("Ask for reviews" or "Read reviews").
- **Personal details for the About section**: a few real, specific things about Michelle (family, what she loves, why she became a celebrant) would make the home page feel much more like her. The reference site marrymenicky.com.au does this well.
- **Notice of Intended Marriage**: `local assets/Documents/notice-of-intended-marriage.DOCX` exists. The official form is available from the Attorney-General's Department website. The site could link to it from the Weddings page or FAQs. Confirm she'd like that.
