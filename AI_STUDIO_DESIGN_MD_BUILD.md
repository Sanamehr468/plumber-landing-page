# FlowFix rebuild — AI Studio + Awesome Design MD, Taste Skill ignored

Date: 2026-11-01. Built at Sana's instruction after she rejected the Taste board version: ignore Taste Skill completely, take the work from Awesome Design MD and AI Studio, rebuild the page new, replace the code on GitHub.

## What was used
- AI Studio (Gemini, via the Google AI Studio connector, model gemini-3.5-flash-lite): given one self-contained prompt for a complete Next.js page.js and globals.css, and its full output was used. Raw output saved in this repo as GEMINI_UBER_APP.txt.
- Awesome Design MD: exactly one brand read in full — Uber (`design-md/uber/DESIGN.md`). Adapted, never copied: Inter replaces the proprietary UberMove/UberMoveText, no Uber name or logo anywhere, black-and-white duet with greys only, pill buttons (999px), 16px cards, 1200px container, sentence-case 700 headlines, alternating white and black bands, hero with a booking request card on the right.
- Taste Skill: NOT used at all in this build — no dealt direction, no board tiles, no stone palette, no Taste lint claim.

## What changed
The previous Taste board code in app/page.js and app/globals.css was replaced entirely with Gemini's new code. Sections: sticky nav, hero with booking request card, trust strip, services by problem with filters and Book-this-service preselect, why FlowFix black band, how it works in 3 steps, pricing with a featured black Care Plan, Karachi areas, reviews with breakdown, FAQ, final black call to action, black 4-column footer, sticky mobile Call/Book bar.

## Booking
Service, area and time slot, then name, phone and address. Area choice shows response time and starting price before booking. Confirmation shows a booking reference (FF-####), a rotating technician (Ahmed Raza, Sara Khan, Bilal Malik), an arrival window, and a calendar (.ics) download. Test booking only — no real plumber is dispatched.

## Test data only
FlowFix is a fictional test business. Test phone +92 300 0000000, test email hello@flowfix.example, fictional licence reference KHI-PLM-2024-1187, no real office address. Prices, reviews and response times are test content. Pictures are the same four honestly credited Wikimedia pictures of the trade and Karachi streets, not FlowFix's own team or premises; credits are in the footer.
