

# Redesign Plan: Making PlusMinus Truly Unique

## Research Findings

### Studio Freight
- **Dark theme** with massive condensed uppercase type filling the entire viewport width
- **3-column single-page layout**: About (left), Project list (center), Project preview (right)
- **Green (#00FF00) accent** used sparingly on active states only
- **Scrolling ticker** at top with manifesto/values
- Everything is on ONE page -- no separate pages, just scroll sections

### Ueno
- **White background**, "Hi. We're a strategic design and innovation studio." -- one simple sentence
- **Multiple scrolling client logo marquees** in different directions (2-3 rows)
- Immediately shows massive project imagery below
- Ultra-minimal nav: just 4 links top-right

### Efront
- **Single bold color (blue #0000FF)** as the entire hero background
- Massive animated type: "built (with) experience" -- words appear sequentially
- **Scattered keyword clouds** floating around the hero (design terms, tech terms)
- Very playful and experimental -- stands out immediately

### Locomotive
- Dark theme, **featured work as a horizontal carousel** with split typography
- Project names split across/around the project image
- **Orange diamond** as a minimal brand mark
- "Digital-first Design Agency" tagline integrated into the logo area

### What Makes Each Unique
Every one of these sites has **one signature visual idea** that makes it instantly recognizable. PlusMinus currently has none.

---

## The Unique PlusMinus Concept

The **± (plus/minus)** brand is a goldmine we're not using. The redesign should make the plus/minus duality the core visual concept:

### Signature Idea: "The Duality Layout"
- Use a **split-screen visual language** throughout -- dark/light, before/after, minus/plus
- The **± symbol** becomes a subtle but recurring design element (section dividers, cursor, loading states)
- Hero plays on the contrast: words that represent "minus" (noise, clutter, guesswork) vs "plus" (results, growth, clarity)

---

## Homepage Redesign

### Hero -- "The Duality Hero"
- Full viewport, split down the middle conceptually
- Left side concept: "Minus the noise" in muted/crossed-out text
- Right side concept: "Plus the results" in bold white
- Below: the rotating word animation stays but with more dramatic entrance
- Scrolling client logos remain
- The **± symbol** appears as a large watermark between the two concepts, very subtle (5% opacity)

### Stats Bar -- Add Motion
- Numbers count up on scroll (animated counters) -- currently static
- Add a thin horizontal rule with a ± symbol in the center as section divider

### Featured Work -- Studio Freight Inspired
- Change to a **hover-preview layout**: project list on the left, hovering reveals a preview image/gradient on the right
- Each project row: number + title + category, with the gradient preview appearing on hover
- More interactive and engaging than the current static grid

### Services -- Keep accordion but add the ± twist
- Each service title prefixed with a **+** symbol that animates to reveal content
- When one opens, others show a **−** symbol (collapsed)
- Creates the plus/minus visual language

### Process -- Horizontal scroll section
- Instead of a grid, make it a **horizontal scrolling strip** that the user scrolls through
- Each step has a large number and a connecting line
- More cinematic and unique

### Testimonials -- Keep but refine
- Add quotation marks as large decorative elements (like Ueno does)

### CTA -- The Duality CTA
- Split screen: left dark "Done with mediocre websites?" / right light "Let's build something better."
- Single CTA button in the center where the two halves meet

---

## Inner Pages Redesign

### Work Page
- **Gallery view with hover previews** instead of grid
- Project list as rows (like Studio Freight): title | category | year
- Hovering a row reveals the gradient/image preview that follows the cursor or appears in a fixed position
- Filter pills stay at top

### About Page
- **Split-screen hero**: dark left half with "Minus" values (what we don't do: templates, bloated code, vanity metrics), light right half with "Plus" values (what we do: custom design, clean code, real results)
- Team values section with ± iconography
- Timeline stays but gets a vertical line with ± markers

### Services Page
- Hero stays clean
- Services use the **+/−** accordion with animated symbols
- Approach section: each step alternates dark/light background strips for visual rhythm

### Contact Page
- Clean and minimal -- this is already decent
- Add the ± symbol as a decorative element near the headline
- Add an animated "sending" state with the ± symbol spinning

### Insights Page
- Add a **featured article** at top (full-width, larger card)
- Rest in a 2-column grid instead of 3 (more readable, more editorial)
- Each card gets a subtle ± watermark in the gradient

---

## Technical Changes

### Files to Modify
- `src/index.css` -- Add ± symbol utility class, horizontal scroll utilities, counter animation
- `src/components/HeroSection.tsx` -- Duality hero with split concept
- `src/components/FeaturedWork.tsx` -- Hover-preview list layout (Studio Freight style)
- `src/components/ServicesSection.tsx` -- +/− animated accordion symbols
- `src/components/ProcessSection.tsx` -- Horizontal scroll section
- `src/components/CTASection.tsx` -- Split-screen duality CTA
- `src/components/PhilosophySection.tsx` -- Animated counter numbers
- `src/components/TestimonialsSection.tsx` -- Large decorative quotes
- `src/components/Footer.tsx` -- Minor refinements
- `src/pages/Work.tsx` -- Hover-preview row layout
- `src/pages/About.tsx` -- Split dark/light minus/plus hero
- `src/pages/Services.tsx` -- +/− accordion symbols, alternating strips
- `src/pages/Contact.tsx` -- ± decorative element
- `src/pages/Insights.tsx` -- Featured article + 2-col grid

### Key New Interactions
1. **Hover-preview on Work list** -- hovering a project row reveals its gradient preview
2. **+/− animated symbols** on service accordion items
3. **Counter animation** on stats numbers (count up on scroll)
4. **Split-screen CTA** with the two halves meeting in the center
5. **Horizontal scroll** for process section

