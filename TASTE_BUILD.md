# FlowFix rebuild with Taste Skill and Awesome Design MD

## Direction dealt
- Taste Skill v2, direction `dense-tiles` — The well-kept board, seed 147474991, drawn 2026-11-02.
- Hero blueprint: Name band and rails. Type: Schibsted Grotesk, display 800. Colour: Three stones — ground #eeecea, surface #e4e1dd, ink #333231, muted #6b6763, accent #5c6b54, field #cdc3b6. Motion: edge-to-edge marquee.
- Idea sentence: On this page, FlowFix's dispatch board becomes the page itself — every tile is a job, a slot, a service, an area, a price or a proof.
- Live thing: the booking board. Pick a service and an area and see the response time and starting price before booking, then get a booking reference, a named technician and a calendar file.
- Redraws: none. The dealt photographs (Field and farm set) were not used, because they do not fit a Karachi plumber and must never stand in for the subject.

## Brand system borrowed, then adapted
- Awesome Design MD, exactly one brand: Wise (`design-md/wise/DESIGN.md`). Chosen for clear pricing, surface contrast as elevation, heavy display type and a friendly, trustworthy service voice.
- Adaptations, with Taste Skill taking precedence where the two conflict: Wise Sans (proprietary) and Inter are replaced by the dealt Schibsted Grotesk, one family only. Wise lime #9fe870 is replaced by the dealt grey-green accent #5c6b54, so there is still one accent. Wise 24px pill buttons and cards are replaced by the direction's one 8px radius and rectangular buttons. Wise sage canvas and white cards are replaced by the dealt stone ground and surface, keeping Wise's surface-contrast idea, not its colours.
- No logo, name, proprietary typeface or whole site was copied. FlowFix keeps its own name, test phone, test email and Karachi content.

## Pictures, honestly sourced
- Four pictures from Wikimedia Commons, via the Taste Skill assets script, used as Wikimedia URLs on the page so the GitHub snapshot (text only) and the Vercel direct deployment (text only) still work. Local downloads are in `assets/` for reference.
- Three Plumbers with Pipes and Tools, 1870s, CC0, via Wikimedia Commons.
- Plumber uses two wrenches to tighten a fitting, by Tomwsulcer, CC0, via Wikimedia Commons.
- Street in Karachi, Pakistan, by Jan Kranendonk, CC BY-SA 4.0, via Wikimedia Commons.
- Karachi street scene, by Jan Kranendonk, CC BY-SA 4.0, via Wikimedia Commons.
- These pictures show the trade and Karachi streets. They are not FlowFix's own team or premises, and the footer credit line says so in the picture credits.

## Sections, in argument order
- Hero board, intro lead with four columns, booking board, services mosaic with filters, proof tiles, marquee, how-it-works accordion (dark to light, no visible numbers), pricing table with a recommended accent column, areas as filled bars, reviews with breakdown and a rotating name/quote split, FAQ bands with search and categories (all answers visible), action tile, footer with a large block wordmark and four link columns.
- House rules kept: headlines two lines or fewer, one h1, a heading on every section, equal outer margins, no eyebrows, no monospace, no index numbers, no thin rules outside tables and forms, no gradients, no shadows at rest, no icon-topped cards, no emoji, no styled accent word in a headline.

## Gate check, honestly
- Taste Skill lint on page, styles and layout: 0 FAIL, 1 WARN. The warning is the 1px border on real form inputs, which the house rules allow for form fields.
- Taste Skill real-browser inspector could not run in this VM: no Chrome was found, and the Meta Chromium binary exits with a Hatch WebGL domain policy error. This is not claimed as a passed inspect. The page was instead verified by a production Next.js build and, after deployment, by a fresh live read.

## Test data, not real claims
- FlowFix is fictional. Phone +92 300 0000000 is a test number, email hello@flowfix.example is a test address, licence reference KHI-PLM-2024-1187 is fictional, and reviews, prices and response times are test content for this page. Booking on the page creates a local confirmation only and dispatches no technician.
