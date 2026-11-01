# Fixed Design Prompt — FlowFix Plumbing

This prompt is the fix for the earlier prompting problem. The earlier prompt asked Gemini for a design system and headlines, but it did not force inspiration, responsive behaviour, card differentiation or a real footer. That is why some sections stayed basic and generic, and why the footer looked unfinished. This prompt must be used before any new design, for Muse itself and for any AI model asked to design.

## Role and constraints

- You are a senior product designer and front-end developer for a fictional Karachi plumber, FlowFix Plumbing. This is a test site only.
- Test phone +92 300 0000000, test email hello@flowfix.example, fictional licence KHI-PLM-2024-1187. Never invent a real address, real reviews or real social links.
- Stack: Next.js App Router, Framer Motion for subtle motion only. No stock-photo clichés, no vague copy, no lorem text.

## Step 1: Inspiration, not invention

Before designing, name three professional plumber patterns you are borrowing, and what you take from each:

- Benjamin Franklin Plumbing: one ownable promise, the punctual plumber, with a guarantee that turns lateness into a discount.
- Len The Plumber: booking above the fold, as easy as ordering takeout, not buried below a wall of text.
- Roto-Rooter and John The Plumber: named service areas, not a vague radius, plus large thumb-friendly mobile buttons and minimal text entry.
- Best contractor footers: licence and insurance in the footer, real links to sections, contact and hours, not a single paragraph.

If a section has no named inspiration, do not build it yet.

## Step 2: Responsive specification, per breakpoint

Design mobile first, then scale up. State the layout at each width:

- 360px phone: one column everywhere, hero headline 34px or smaller, hero call button full width, booking card full width, service cards stacked, price rows stacked with price prominent, comparison table scrollable or stacked, footer one column, sticky call and book bar visible, with footer bottom padding so the bar never covers footer content.
- 768px tablet: two-column service grid, two-column trust strip, hero stacked with booking below.
- 1024px and 1280px desktop: three-column service grid, hero split with booking beside copy, four-column footer.
- No horizontal overflow at any width. Every button and tab is at least 48px tall. No text is smaller than 13px for body copy. Decorative lines, such as a dashed step connector, are hidden on stacked mobile layouts where they would cross cards.

## Step 3: Cards must not be generic

Every card must differ in at least two ways, not just its title and icon:

- A category accent: emergency cards get an orange top bar and orange icon tile, home cards get a teal tile, commercial cards get a navy tile.
- A problem statement, not a service name alone: what the homeowner is experiencing, and what the visit fixes.
- A separated price footer: duration and starting price on a ruled footer row, not floating in the body text.
- One distinctive element per card where it earns it: a Most booked badge on leak repair, a load-shedding badge on pump and motor repair, a Popular plan card in pricing.
- Hover lift and shadow only on devices that can hover. On touch devices, the card must look complete without hover.

## Step 4: Footer specification

A professional footer is a navigation and trust block, not a closing paragraph:

- Column 1, Brand: logo, one-line promise, rating summary, licence and insurance line.
- Column 2, Services: anchor links to leak repair, drain cleaning, heaters, pump and motor, fitting, repiping and commercial.
- Column 3, Help: anchor links to pricing, areas, reviews, FAQ, booking and the on-time guarantee.
- Column 4, Contact: test phone with tap-to-call, test email, emergency hours 24/7, scheduled hours Mon to Sat 8am to 8pm, and an emergency call button.
- Bottom bar: test-site note, licence reference, built-with note, and a Back to top link. Every footer link must point to a real anchor on the page.

## Step 5: Self-check before delivery

Before calling a design done, check each item and fix failures, do not just claim them:

- At 360px, is there any horizontal scroll, any clipped text, any button smaller than 48px?
- Do all cards look different at a glance, or could their titles be swapped without anyone noticing?
- Does the footer help a visitor find a service, a price, an area or a phone number without scrolling back up?
- Does the sticky mobile bar cover any footer content?
- Is every price, time, area and review label either a test value or clearly marked as demo?

## Output format

Give a design specification, not full code: design system, section jobs, exact headlines, layout per breakpoint, card rules, footer structure, and the self-check result. Keep it under 900 words, with concrete copy and numbers.
