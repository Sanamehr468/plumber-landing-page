# FlowRight Plumbing - Design System & UI Blueprint

## 1. Color Palette
- **Base / Background**: Deep Navy / Ink
  - `bg-primary`: `#0A1128` (Deep navy base)
  - `bg-surface`: `#121E3B` (Elevated cards and panels)
  - `bg-surface-hover`: `#1A2A52` (Interactive surface state)
- **Primary Accent**: Electric Cyan
  - `accent`: `#00E5FF` (High-contrast CTAs, badges, interactive highlights)
  - `accent-hover`: `#00B8D4`
- **Secondary Accent**: Warm Copper
  - `copper`: `#D48356` (Plumbing pipe aesthetic, secondary tags, warning callouts)
  - `copper-light`: `#E8A278`
- **Neutrals**:
  - `text-main`: `#F8FAFC` (Slate 50)
  - `text-muted`: `#94A3B8` (Slate 400)
  - `border-color`: `#1E293B` (Slate 800)

## 2. Typography
- **Display Font**: `Plus Jakarta Sans` (Geometric Sans, modern, authoritative) via `next/font/google`
- **Body Font**: `Inter` (Clean, highly readable neutral sans-serif) via `next/font/google`
- **Scale**:
  - Hero Display: `text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none`
  - Section Title: `text-3xl md:text-4xl font-bold tracking-tight`
  - Body: `text-base text-muted leading-relaxed`

## 3. Spacing, Radius, Shadows & Grid
- **Spacing Scale**: Standard Tailwind spacing (4px base unit). Section padding `py-20 md:py-28`.
- **Border Radius**: 
  - Buttons & Badges: `rounded-xl`
  - Cards & Containers: `rounded-2xl`
  - Modals & Banners: `rounded-3xl`
- **Shadows**:
  - Subtle card: `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]`
  - Glowing accent: `shadow-[0_0_30px_-5px_rgba(0,229,255,0.25)]`
- **Grid**: Max container width `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

## 4. Component Styles
- **Buttons**:
  - Primary (Cyan): `bg-[#00E5FF] text-[#0A1128] font-bold rounded-xl px-6 py-3.5 hover:bg-[#00B8D4] transition-all shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)]`
  - Secondary (Outline): `border border-[#1E293B] text-white font-semibold rounded-xl px-6 py-3.5 hover:bg-[#121E3B] hover:border-[#00E5FF]/50 transition-all`
- **Cards**: `bg-[#121E3B] border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-[#00E5FF]/40 transition-all duration-300`
- **Badges**: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#121E3B] text-[#00E5FF] border border-[#00E5FF]/20`
- **Inputs**: `w-full bg-[#0A1128] border border-[#1E293B] rounded-xl px-4 py-3.5 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00E5FF] transition-all`

## 5. Motion Rules
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Smooth luxury deceleration)
- **Durations**: Fast `200ms`, Default `400ms`, Slow `700ms`
- **Hover States**: Translate Y `-2px`, border color highlight, shadow intensification.
