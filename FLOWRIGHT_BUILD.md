# FlowRight rebuild — AI Studio prompt from Sana, TypeScript + Tailwind

Date: 2026-11-01. Built at Sana's instruction after she said the previous AI Studio + Uber version still did not satisfy her, and gave her own prompt to put into AI Studio's new app chat, get the design made there, replace the code on GitHub, and share the link.

## How it was made
- Sana's prompt was sent to AI Studio (Gemini, via the Google AI Studio connector, model gemini-3.5-flash-lite) in five chunked calls, because a complete TypeScript + Tailwind project with 10 sections does not fit in one reliable model output. The prompt itself was Sana's, unchanged in substance.
- Call 1: DESIGN.md first, plus project setup (package.json, tsconfig, Tailwind 3.4 config, PostCSS, next.config with Unsplash remotePatterns, globals.css, layout.tsx, Reveal component).
- Calls 2-4: section components, each following the DESIGN.md from Call 1 strictly.
- Call 5: app/page.tsx with LocalBusiness/PlumbingBusiness JSON-LD, plus README.md.
- Taste Skill was not used in this build.

## DESIGN.md (from AI Studio, Call 1)
Deep navy #0A1128 base, surface #121E3B, electric cyan accent #00E5FF, copper #D48356, muted #94A3B8, border #1E293B. Display font Plus Jakarta Sans, body Inter, both via next/font/google. Buttons rounded-xl, cards rounded-2xl, section padding py-20 md:py-28, container max-w-7xl, motion ease cubic-bezier(0.16,1,0.3,1), subtle only.

## Structure
- app/layout.tsx, app/page.tsx, app/globals.css (Tailwind 3.4)
- components/Header.tsx, components/Footer.tsx, components/Reveal.tsx
- components/sections: Hero, TrustBar, Services, EmergencyBand, WhyChooseUs, HowItWorks, Projects (before/after slider), Testimonials (carousel), AreasPricing, FaqCta (accordion + validated contact form)
- Each section is its own component, as Sana's prompt required.

## Only local fixes (no design changes)
- lucide-react version in package.json was corrected from the non-existent 1.16.0 in Gemini's output to ^0.462.0, so npm install can succeed.
- The OpenGraph url https://flowright.com invented by Gemini in layout.tsx was removed, because no domain was given in the prompt.
- Reveal imports in Testimonials, AreasPricing and FaqCta were corrected from ./Reveal to ../Reveal, because Reveal lives in components/, not components/sections/; this was the only build error.
- Old JavaScript files app/page.js, app/layout.js and app/globals.css were removed locally and deleted from GitHub, because Next.js cannot have both page.js and page.tsx; the new project is TypeScript only.

## Layout fix after Sana's screenshots (2026-11-01)
Sana reported hero content missing, services missing, How It Works missing, the 24/7 Areas section broken, and the Request section broken, with screenshots showing the Areas and Request panels squeezed into a narrow column with vertically wrapped text and overlapping panels.
Root cause found in components/Reveal.tsx: Reveal rendered an extra outer div and put className (including lg:col-span-6, lg:col-span-7, lg:col-span-5, flex) on an inner motion.div. In a Tailwind grid only the direct child is a grid item, so those col-span classes were ignored and the Areas (6+6) and Request (7+5) panels collapsed to one narrow grid column. Fixed by making the motion.div itself the grid item, forwarding className to it, with w-full h-full, and relaxing the whileInView viewport margin from -50px to 0px with amount 0.15 so tall panels animate in as soon as they are partly visible. Also fixed: hero floating card left offset on mobile (left-4 sm:-left-6 instead of -left-6), Areas map image opacity 40 to 70 so the visual is not an empty blue panel, and an invalid class text-[#1E293B]/6{-} in Testimonials. Local build passed after the fix, and the local server HTML was checked to contain lg:col-span-6 and the headings for Hero, Services, How It Works, Areas, and Request.

## Performance fix after Sana's slow-load report (2026-11-01)
Sana reported fixes were correct but some sections took time to load, with the hero appearing about 1 minute after opening. Two causes: (1) hero text/image were inside Reveal, which renders at opacity 0 in SSR HTML and only becomes visible after the JS bundle hydrates and framer-motion's IntersectionObserver fires, so on a slow connection the hero stayed blank; (2) next.config had no deviceSizes limit, so Next's defaults included 1920/2048/3840px image variants, and Vercel's image optimiser had to build those huge variants on first load after each new deployment, then the browser had to download them, even though no image is displayed wider than ~900px. Fixes: removed all Reveal wrappers from Hero (headline, subtext, CTAs, trust badges, image, floating cards and quick-quote form now render at full opacity in SSR HTML), capped images in next.config to deviceSizes [640, 828, 1080, 1200] and imageSizes [256, 384, 512], tightened image sizes props (hero 560px, Why/Areas 640px), and raised the hero Unsplash source width from 800 to 1200 so the optimiser downscales instead of upscaling. Fonts were already display:swap and self-hosted, so they were not the blocker. First load after a fresh deployment will still be a little slower than repeat loads, because Vercel optimises each image variant once and then caches it.

## Placeholder data only
FlowRight Plumbing is the placeholder business from Sana's prompt. Phone (000) 123-4567, email hello@flowright.com, areas, prices (89 / 149 / 199 USD), and reviews are placeholder data, not a real business, and no real street address, licence number, or booking is claimed. Forms show a thank-you state only and send nothing.
