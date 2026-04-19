

## What I actually found (researched live)

| Site | The thing that makes it stick |
|---|---|
| **Obys Agency** | Pitch-black canvas. Custom counter loader (50 → 100). One numeric/symbolic mark center-screen. Almost zero color. Confidence through emptiness. |
| **Exo Ape** | Full-bleed cinematic photo as hero, with ONE oversized sans word ("Digital") bleeding off the bottom edge over the image. Scroll-to-explore microcopy bottom-right. |
| **Basic / Dept** | Editorial captions everywhere (`©2022`, `B/D® JAMS©`, footnote-style labels). Looks like a magazine masthead, not a website. |
| **Hello Monday** | Center-stacked serif headline alone on white. Tiny "1 day until Monday" widget top-right — playful counter. Whole hero is empty space. |
| **Locomotive** | Brutalist footer is a full art piece — typographic address with iconographic glyphs (◇ Q © ⤴) embedded inline. The footer IS the brand statement. |
| **Ueno** | Massive serif headline ("Hi. We're a strategic design and innovation studio.") flush left over a quiet product photograph. No marquees, no noise. |
| **Active Theory** | Full WebGL hero, single rotating glyph centered. They dare you to scroll. |

**The pattern that actually wins:** restraint, not noise. Every site we admire commits to ONE big move per screen — a photo, a sentence, a glyph. Marquees and grain and rotating text are *symptoms* of insecurity. The current PlusMinus site has too many simultaneous gestures (kinetic letters + marquee wall + rotating ± + grain + signal-color cursor + scroll progress + side rail). It's loud the wrong way.

## Direction shift: "Confident Editorial" (not "loud brutalism")

Pull back. Make every section commit to ONE gesture. Borrow:
- **From Obys:** the counter-loader and pitch-black confidence
- **From Exo Ape:** full-bleed photo hero with oversized type bleeding over it
- **From Basic:** magazine-style editorial captions (`©`, `Nº`, footnotes) on every section header
- **From Hello Monday:** tiny "playful counter" widget in nav corner
- **From Locomotive:** turn the footer into a typographic art piece
- **From Ueno:** one massive serif sentence per section, generous whitespace

## Concrete changes

### 1. Hero — Exo Ape × Obys
- Remove rotating word + minus/plus words + watermark logo + bottom marquee.
- ONE move: full-bleed editorial photograph (architectural / Mumbai cityscape) as background, with a single oversized sentence bleeding off the bottom: *"We make websites that earn their keep."* — Instrument Serif, 14vw, white over the image.
- Top-right: tiny live widget — `Mumbai · 14:32 IST · Open for 2 projects` (Hello Monday pattern).
- Bottom-right: small "Scroll ↓" microcopy. That's it.

### 2. Marquee Wall → Manifesto Page Spread
Convert the three-line marquee into a STATIC editorial spread (Basic-style):
- Left column: large `Nº 01 / Manifesto` label
- Right column: a single 3-sentence paragraph in Instrument Serif 64px about the ± philosophy
- No motion. The stillness is the statement.

### 3. Featured Work — Hello Monday list-as-art
- Already attempted as a list. Refine: each row is JUST the project name in 8vw serif. The image-on-cursor reveal stays but the row should be empty otherwise — no tags, no `−→+`, no metadata visible until hover.
- On hover: row text shifts horizontally, `Nº 01 — Trots Architects, 2024, Architecture` reveals as small caption beneath.

### 4. Philosophy Stats — Obys numeric loader treatment
- Drop the slot-machine + giant rotating ± + animated grid.
- Replace with: 4 stats centered on black, each number in Instrument Serif 18vw, single line at a time, fading between them on scroll. One number on screen at a time. Massive. Quiet.

### 5. Services — Editorial index
- Drop sticky card stack idea. Render as a numbered editorial index:
  ```
  Nº 01  ——  Brand Strategy        →
  Nº 02  ——  Website Design        →
  Nº 03  ——  Web Development       →
  Nº 04  ——  Conversion            →
  ```
- Each row 12vw tall, hovering reveals 1-line description sliding in from the right. Serif numerals, mono labels.

### 6. Process — keep horizontal scroll, strip decoration
- Remove giant background numerals overlay. Each panel: just `01` top-left small, big serif title centered, one paragraph below. Whitespace does the work.

### 7. Testimonials — drop typewriter
- Typewriter on quotes is gimmicky and slows reading. Use static, oversized italic Instrument Serif quotes (12-16vw), one per viewport, soft fade between them on scroll. Attribution as small caps below.

### 8. Insights — keep magazine tiles, add captions
- Add Basic-style metadata to each tile: `Nº 04  ·  Design  ·  6 min  ·  ©2025`. Restrained, footer-style.

### 9. CTA — strip animation, keep duality copy
- Remove split-reveal scroll animation. Static composition: dark left half with `−` and copy, light right half with `+` and copy, ± mark dead-center. Magnetic button stays.

### 10. Global cleanup
- **Remove:** GrainOverlay, ScrollProgress bar, SectionRail dot nav, LoadingScreen countdown, MarqueeWall section. They're noise that competes with content.
- **Keep:** SmoothScroll (Lenis), CustomCursor (but tone down — drop the rotating ± ring; just dot + small ± text on hover, no acid color).
- **Replace acid lime accent everywhere** with the cream/dark palette only. The signal color was an Awwwards trope, not us. Color comes from photographs and editorial restraint.
- **Add a global editorial caption system:** small-caps mono labels (`Nº 0X / Section name · Year`) above every section heading, Basic-style.
- **Footer redesign (Locomotive-inspired):** turn the footer into a typographic address spread with inline iconography. Big, beautiful, unmistakable.

## Files

**Modify:** `HeroSection.tsx`, `FeaturedWork.tsx`, `PhilosophySection.tsx`, `ServicesSection.tsx`, `ProcessSection.tsx`, `TestimonialsSection.tsx`, `InsightsSection.tsx`, `CTASection.tsx`, `Footer.tsx`, `CustomCursor.tsx`, `pages/Index.tsx`, `index.css`, `tailwind.config.ts`

**Delete from rendering:** `MarqueeWall`, `GrainOverlay`, `ScrollProgress`, `SectionRail`, `LoadingScreen` (keep files for now, just unmount)

**Add:** `SectionCaption.tsx` (the `Nº 0X / Label / ©Year` editorial header used everywhere)

**Asset:** generate one full-bleed editorial hero image (Mumbai-architectural, high contrast B&W or moody color)

## What stays
Routing, SEO, content, ± duality concept, DM Sans + Instrument Serif pairing, dark/cream palette, Trots case study, Insights system.

## The vibe shift
From "tasteful and loud" → **"tasteful and certain."** The current site shouts every gesture. The best sites whisper one thing per screen and let the visitor lean in. Confidence reads as luxury; noise reads as desperation.

