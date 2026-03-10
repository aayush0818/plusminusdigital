

# Complete Rebuild: Premium Web Development Agency Website

## Research Findings from Top Agency Sites

After analyzing **Clay**, **BASIC/DEPT**, **Humaan**, **Ramotion**, **Fhoke**, **Unfold**, and **Tubik Studio**, here are the patterns that make them feel real and premium vs. what our site currently does wrong:

### What top agencies do:
1. **Hero is a bold statement, not decorated** -- massive sans-serif type, clean white/light backgrounds, no grain overlays or glowing orbs
2. **Work is the star** -- project images are large, colorful, and unobscured (no dark overlays hiding them). Mixed aspect ratios and asymmetric grids create visual interest
3. **Client logos as social proof** -- a scrolling logo bar immediately builds credibility
4. **Each section looks completely different** -- varied layouts prevent monotony. Not every section follows "label + heading + list with borders"
5. **Light backgrounds dominate** -- most top agencies use light/white as the primary background, with dark sections used sparingly for contrast
6. **Bold sans-serif for headlines** -- not italic serif everywhere. Serif is used as an accent on one word, not the default
7. **Color accents are minimal** -- no gold on every heading. One or two accent moments per page
8. **Award badges and stats** build instant credibility

### What our site does wrong:
- Every section follows the identical pattern: gold label > italic serif heading > bordered list
- Too many dark sections create a monotonous, heavy feel
- Gold accent is overused (on every label, heading accent, number, hover state)
- Grain overlay and radial glows feel "template-y"
- Project images are hidden behind dark overlays
- No social proof (client logos, stats, awards)
- No visual variety between sections

---

## Rebuild Plan

### 1. CSS/Typography Overhaul (`src/index.css`)
- Switch primary background to **light** (`#FAFAF9` warm white)
- Use **dark (#111)** for hero and CTA only
- Replace Instrument Serif with a bolder display approach: keep DM Sans but use `font-weight: 800` at massive sizes for headlines
- Keep Instrument Serif for **one accent word** per section only
- Remove grain overlay, glow utilities, marquee
- Simplify to fewer utility classes

### 2. Navbar (`Navbar.tsx`)
- Clean, minimal: logo left, links center, "Let's Talk" button right
- Light background default, dark variant when over hero
- Pill-style nav links (like Humaan)
- No gold accent -- just black/white

### 3. Hero (`HeroSection.tsx`) -- Complete rewrite
- **Light background** below a dark top strip, OR full dark with massive white type
- Massive bold statement: "We design websites that drive growth" -- no decorative elements
- Below headline: one line of muted subtext + a single CTA button
- Below that: a **scrolling client logo bar** (SVG logos of recognizable brands or placeholder company names)
- No background image, no grain, no floating orbs, no marquee ticker
- Clean staggered word animation on load

### 4. Replace Philosophy with **Stats/About Bar**
- Horizontal strip with 3-4 key numbers: "50+ Projects", "12 Years", "3x Avg. Growth"
- Simple, confident, no decorative ± symbol
- Light background, clean typography

### 5. Featured Work (`FeaturedWork.tsx`) -- Major redesign
- **Asymmetric 2-column masonry grid** (like Humaan/Clay)
- First project: large (spans full width or 60%), second: smaller, third: medium -- creates visual rhythm
- **No dark overlay** on images -- let colorful CSS gradient backgrounds shine (since we don't have real screenshots)
- Use vibrant abstract gradients as project thumbnails instead of compressed JPGs
- Project name + category below each image, not overlaid
- Subtle scale on hover (1.02), no arrow circles

### 6. Services (`ServicesSection.tsx`) -- Interactive accordion
- Full-width vertical list, each row: number + title
- On hover, row expands to show description
- Clean black text on light background
- No tags, no 2x2 grid -- simpler and more elegant

### 7. Process (`ProcessSection.tsx`) -- Horizontal numbered steps
- Single horizontal row of 5 numbered steps
- Large numbers (01-05) with title below
- On hover, description fades in
- Thin connecting line between steps
- Light background

### 8. Testimonials (`TestimonialsSection.tsx`) -- Single large quote
- One quote at a time, massive serif italic text
- Simple attribution below
- Auto-rotating or static
- Dark background for contrast

### 9. Insights (`InsightsSection.tsx`) -- Visual blog cards
- 3-column grid with colored background cards (not just text rows)
- Each card: colored top section + title + tag
- Light background section

### 10. CTA (`CTASection.tsx`) -- Bold and clean
- Dark background, massive white headline
- Single centered button
- No glow effects, no breathing animations

### 11. Footer (`Footer.tsx`) -- Minimal and functional
- Light border-top, dark background
- 4-column layout: logo/tagline, navigation, contact, social
- No giant watermark text
- Simple copyright

### Files to modify:
- `src/index.css` -- Simplified CSS system
- `src/components/Navbar.tsx` -- Clean minimal nav
- `src/components/HeroSection.tsx` -- Bold statement + logo bar
- `src/components/PhilosophySection.tsx` -- Stats/credibility bar
- `src/components/FeaturedWork.tsx` -- Asymmetric visual grid
- `src/components/ServicesSection.tsx` -- Accordion layout
- `src/components/ProcessSection.tsx` -- Horizontal steps
- `src/components/TestimonialsSection.tsx` -- Single large quote
- `src/components/InsightsSection.tsx` -- Visual card grid
- `src/components/CTASection.tsx` -- Stripped-down impact
- `src/components/Footer.tsx` -- Clean footer
- `tailwind.config.ts` -- Minor color updates

