### 1. Design System
*   **Palette:** Deep Navy (`#0A192F`) for trust and authority, Industrial Amber (`#FF6B00`) for high-contrast CTAs and alerts, Slate Gray (`#64748B`) for body text, and Pure White (`#FFFFFF`) for backgrounds/cards.
*   **Typography:** Inter (Google Font) for all UI elements and body text. Scale: H1 (48px, Bold), H2 (36px, Bold), H3 (24px, Semi-bold), Body (16px, Regular), Caption (14px, Medium).
*   **Spacing & Radius:** 8pt grid system (8, 16, 24, 32, 48, 64px). Corner radius: `8px` for buttons and cards, `16px` for modal containers.
*   **Distinctive Visual Idea:** "Blueprint Technical Grid." A faint, 40px subtle cyan grid overlaid on the Deep Navy hero section, paired with sharp industrial orange accent lines, giving it an engineered, precision-utility feel rather than a generic contractor look.

### 2. Section-by-Section Specification
*   **Hero:** Job: Hook Karachi homeowners instantly. Layout: Split screen (Left: Copy + CTAs, Right: Trust badge + local Karachi skyline vector). Headline: "Reliable Plumbing in Karachi, Fixed on the First Visit." Subheadline: "Transparent pricing, verified technicians, and on-time arrival across DHA, Clifton, and Gulshan." Interaction: Primary button triggers booking modal; secondary button calls `+92 300 0000000`.
*   **Booking:** Job: Convert intent immediately. Layout: 3-column sticky card. Headline: "Book a Plumber in 60 Seconds." Subheadline: "No waiting around. Pick a slot that fits your day." Interaction: Multi-step form completion.
*   **Services:** Job: Clearly state capabilities. Layout: 3x2 Grid with hover elevation. Headline: "Expert Solutions for Every Pipe & Pump." Subheadline: "From emergency leaks to routine motor maintenance." Interaction: Click card to pre-select service in booking flow.
*   **Why-Us:** Job: Overcome local market skepticism (reliability, cleanliness). Layout: 4 horizontal columns. Headline: "Why Karachi Trusts FlowFix." Subheadline: "We raise the standard of home services." Interaction: None (static proof).
*   **How-It-Works:** Job: Demystify the process. Layout: 3-step horizontal flow with connecting dashed lines. Headline: "Hassle-Free Repairs in 3 Steps." Subheadline: "Simple, transparent, and clean." Interaction: None.
*   **Pricing:** Job: Build trust via transparency. Layout: 3 pricing cards with center "Popular" highlight. Headline: "Upfront Pricing. No Hidden Surprises." Subheadline: "Pay only after the job is done to your satisfaction." Interaction: Toggle between residential and commercial rates.
*   **Service Areas:** Job: Local SEO and user confirmation. Layout: Interactive pill tags grouped by zones (South, East, Central). Headline: "Covering All Major Karachi Neighborhoods." Subheadline: "Rapid dispatch from local hubs." Interaction: Click neighborhood to highlight coverage zone.
*   **Reviews:** Job: Social proof. Layout: Carousel of verified homeowner cards. Headline: "What Your Neighbors Say." Subheadline: "Real reviews from real Karachi homes." Interaction: Swipe/arrow navigation.
*   **FAQ:** Job: Handle final objections. Layout: Accordion list. Headline: "Got Questions? We Have Answers." Subheadline: "Everything you need to know about our service." Interaction: Expand/collapse accordion items.
*   **Final CTA:** Job: Catch remaining scrollers. Layout: Full-width banner with Amber background. Headline: "Got a Plumbing Emergency?" Subheadline: "Our emergency team is on standby 24/7." Interaction: Tap to call or book.

### 3. Booking Flow
1.  **Service:** Select issue (e.g., Water Pump Repair, Leaking Faucet, Blocked Drain).
2.  **Time Slot:** Choose date and 2-hour window (e.g., Today, 4:00 PM – 6:00 PM).
3.  **Minimal Details:** Required fields: Full Name, Karachi Area (dropdown), Mobile Number (`+92...`), Street Address.
4.  **Confirmation:** Shows a success screen with a unique Booking ID (e.g., #FF-8921), assigned technician name, estimated arrival time, and an "Add to Google Calendar" button.

### 4. Mobile Design
*   **Sticky Bar:** Bottom fixed bar with two equal-weight buttons: "Call Now" (tel link) and "Book Online" (opens booking modal).
*   **Thumb-Friendly Targets:** All buttons and interactive cards have a minimum height of `48px`.
*   **Changes vs. Desktop:** Multi-column grids stack vertically to single columns; the right-hand hero graphic is hidden to prioritize above-the-fold value proposition and booking CTAs.

### 5. Animations (Framer Motion)
*   **Use For:** Subtle fade-up on scroll for section headers (`y: 20` to `0`, `opacity: 0` to `1`, duration 0.4s) and smooth accordion expansions.
*   **Do NOT Use For:** Infinite loops, heavy layout shifts, or complex hero particle effects. Keep it snappy so the page feels instantaneous on mobile data connections.

### 6. Avoiding Generic Clichés
1.  *Cliché:* Stock photo of a generic white plumber in a hardhat pointing at a wrench. *Fix:* Use real photos of local Pakistani technicians in branded navy polo shirts holding localized tools (e.g., boring motor pumps).
2.  *Cliché:* Vague "Call for Quote" pricing. *Fix:* Publish exact starting rates in Pakistani Rupees (PKR) for common tasks (e.g., "Water Motor Repair starting at Rs. 1,500").
3.  *Cliché:* Generic "24/7 Service" claim with no proof. *Fix:* Add a live status indicator: "3 Technicians currently dispatched in DHA/Clifton."

### 7. Unique Karachi Feature
*   **"K-Electric Outage Protection" Note:** A small badge on the water pump service card noting: *“All our technicians carry backup generators to test electric water pumps during load shedding.”* Reason: Directly addresses Karachi's frequent power outages during pump installations and repairs.
