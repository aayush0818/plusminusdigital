

# Bold, Artistic Redesign — "PlusMinus, but Loud"

## Inspiration Pulled From The Best
After reviewing leading agency/portfolio sites (Awwwards SOTD winners, SiteInspire's top portfolios), the recurring traits in award-winning work are:

- **Active Theory / Resn** — full-bleed kinetic typography, scroll-driven scenes, audio-reactive moments
- **Locomotive / Studio Brave** — buttery smooth scroll, marquee text walls, oversized editorial type
- **Obys Agency** — brutalist grid breaks, jittery hover states, raw monospace + serif clash
- **Hello Monday / Exo Ape** — magnetic cursor, image-on-hover reveals on link lists, cinematic transitions
- **Edward Hinrichsen / Basic Agency** — black canvas, one accent color, asymmetric layouts, "list as art"
- **Ueno / Bruno Simon-style** — playful WebGL distortions, sticky scroll choreography

The common thread: **opinionated typography + one violent accent color + scroll = the show**. They don't decorate; they perform.

## Direction: "Editorial Brutalism with ± Choreography"

Keep the dark/cream palette (it's strong). Add **one electric accent** (we'll use a hot signal color — choose between Acid Lime `#D6FF3D` or Signal Orange `#FF4A1C` in implementation). Lean harder into Instrument Serif + DM Sans contrast. Make every scroll moment a *moment*.

## What Changes (Section by Section)

### 1. Hero — "Kinetic Manifesto"
- Replace the static headline with **per-character kinetic typography**: each letter has its own spring delay, slight rotation, and Y-offset on enter.
- Add a **scroll-reactive headline**: as the user scrolls, the headline letters drift apart, "minus" letters slide left and "plus" letters slide right (literal duality).
- Add a **continuous marquee strip** at the bottom of hero: `— DESIGN — DEVELOP — REFINE — REPEAT — ±` scrolling infinitely with the accent color.
- Add a **subtle WebGL/CSS noise grain overlay** (cheap canvas grain, no GPU strain) for that "film-developed" texture.
- Add **audio-reactive ± symbol** in corner (optional toggle) — purely decorative pulsing.

### 2. New Section: "Manifesto Marquee Wall"
A full-viewport black section between hero and philosophy. Three stacked marquee lines moving at different speeds and directions:
- Line 1 →: `MINUS THE NOISE • MINUS THE FLUFF • MINUS THE GUESSWORK`
- Line 2 ←: `PLUS THE CLARITY • PLUS THE CRAFT • PLUS THE RESULTS`
- Line 3 →: oversized italic serif `± we don't decorate, we engineer ±`
This becomes the brand's "loudest" moment.

### 3. Featured Work — "Hover Reveals + Magnetic Cards"
- Convert the project list into a **vertical link list** (like Hello Monday/Basic): project titles as massive text rows; hovering a row reveals the project preview floating beside the cursor (image follows mouse with lag).
- On mobile, keep cards but add **scroll-triggered tilt/parallax** so cards feel three-dimensional.
- Each row has the project name in serif + the `−problem → +result` tag in mono caps.

### 4. Philosophy Stats — "Counter Slot Machine"
- Numbers don't just count up — they **slot-machine roll** like an odometer with serif digits.
- Background gets a faint animated grid that pulses with each number reveal.
- Add a giant rotating ± mark behind the stats that turns continuously based on scroll position.

### 5. Services — "Card Stack Scroll"
- Convert services into a **sticky scroll-pinned stack**: each service card pins, the next slides up over it. Classic Apple-style choreography but with our minus→plus reveal embedded.
- Service titles use Instrument Serif italic, oversized, with the accent color underline drawing on enter.

### 6. Process — "Horizontal Cinema"
- The existing horizontal scroll becomes a **proper horizontal scroll-pinned section**: vertical scroll = horizontal motion through the 5 process steps.
- Each step gets a number that scales massive (`01 02 03`) in the background as you pass through.

### 7. Testimonials — "Quote Carousel with Glitch"
- Big editorial quotes that **type-in character by character** as they enter view.
- Soft glitch/displacement on the speaker name on hover.
- Background subtly shifts color tone per testimonial (still within the dark palette).

### 8. Insights — "Magazine Cover Tiles"
- Convert from card grid to **asymmetric editorial tiles** (varying sizes), like a print magazine spread.
- Hover scales the image with a clip-path reveal of the article title.

### 9. CTA — "The Big ± Reveal"
- The split background gets a **scroll-triggered split animation**: as section enters, the dark/light halves slide apart from center, the ± symbol grows massive, then snaps to position.
- Button gets a **magnetic effect** (pulls toward cursor on hover).

### 10. Global Additions
- **Custom cursor**: enhance existing one with magnetic snap to interactive elements + ± symbol that rotates.
- **Smooth scroll** via Lenis (`@studio-freight/lenis`) for that locomotive-quality feel.
- **Page transitions**: serif `±` wipe between routes (covers screen briefly with the mark).
- **Loading screen** (first visit only): countdown from `−100` to `+0` with the ± mark, dismisses to hero.
- **Scroll progress indicator**: thin accent-colored line at top.
- **Section index in side rail**: tiny dot navigation on right edge showing scroll position through homepage sections.

## Technical Implementation

**New deps**: `@studio-freight/lenis` (smooth scroll), keep framer-motion for everything else. No WebGL libraries needed — all effects via CSS/Canvas2D for performance.

**Performance guardrails**:
- All scroll listeners throttled via `useScroll` from framer-motion (already battle-tested).
- Marquees use CSS `@keyframes` (already in `index.css` as `logo-scroll`) — no JS.
- Magnetic cursor uses `requestAnimationFrame` with single rAF loop.
- Reduced motion media query disables grain, magnetic effects, marquees → static fallback.
- Mobile (<768px) auto-disables: smooth scroll, magnetic cursor, image-follow-cursor reveals → falls back to current card layout.

**Files to create**:
- `src/components/MarqueeWall.tsx` — new "Manifesto" section
- `src/components/MagneticButton.tsx` — wraps CTAs
- `src/components/SmoothScroll.tsx` — Lenis provider
- `src/components/PageTransition.tsx` — ± wipe
- `src/components/LoadingScreen.tsx` — first-visit −100→+0
- `src/components/ScrollProgress.tsx` — top progress bar
- `src/components/SectionRail.tsx` — side dot nav
- `src/components/GrainOverlay.tsx` — noise canvas

**Files to modify**:
- `src/components/HeroSection.tsx` — kinetic letters + scroll drift + bottom marquee
- `src/components/FeaturedWork.tsx` — link-list + image-follow-cursor (desktop)
- `src/components/PhilosophySection.tsx` — slot-machine counter + giant rotating ±
- `src/components/ServicesSection.tsx` — sticky card stack
- `src/components/ProcessSection.tsx` — horizontal scroll-pinned
- `src/components/TestimonialsSection.tsx` — typewriter quotes
- `src/components/InsightsSection.tsx` — magazine tile layout
- `src/components/CTASection.tsx` — split-reveal + magnetic button
- `src/components/CustomCursor.tsx` — magnetic snap
- `src/pages/Index.tsx` — insert MarqueeWall after hero
- `src/App.tsx` — wrap with SmoothScroll + PageTransition + LoadingScreen
- `src/index.css` — accent color token, additional keyframes (typewriter, slot, split-reveal, grain)
- `tailwind.config.ts` — add `accent-signal` color token

## What Stays the Same
- Information architecture (same pages, same content blocks)
- Cream/dark palette base, DM Sans + Instrument Serif typography pairing
- Existing ± duality content system (services pairs, work tags, testimonial framing)
- All Trots Architects content & images
- Routing & SEO

## The Vibe
Right now the site is *tasteful and quiet*. After this, it's *tasteful and loud* — the kind of site that makes a visitor stop, screen-record a section, and send it to a friend. Editorial enough for premium clients, kinetic enough to win Awwwards.

