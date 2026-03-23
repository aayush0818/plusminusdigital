

# Deepening the ± Duality Across the Site

## The Problem
Right now the ± concept appears mostly as small decorative symbols (dividers, watermarks, cursor) and the hero rotating words. It doesn't feel like a core design system that differentiates the brand. The duality needs to be structural and conceptual, not just ornamental.

## What Changes

### 1. Services Section: "Minus → Plus" Framing
Each service gets a duality pair showing what you remove vs. what you deliver:
- Brand Strategy: − Generic positioning → + A brand that owns its space
- Website Design: − Cookie-cutter layouts → + Designs built around your goals
- Web Development: − Slow, bloated code → + Fast, scalable builds
- Conversion Optimization: − Guessing what works → + Data-driven growth

On hover/expand, both the minus (struck-through, muted) and plus (bold, prominent) lines appear above the description.

### 2. Featured Work: Project Result Tags
Each project card gets a small "− → +" result line, e.g.:
- "− outdated presence → + 3× more inquiries"
- "− slow legacy site → + sub-2s load times"

Subtle but reinforces every project through the lens of subtraction and addition.

### 3. Testimonials: Structured as Transformations
Rework the testimonials layout to show a small "before → after" framing:
- A muted struck-through "minus" line (the problem)
- The quote itself
- A bold "plus" line (the result)

### 4. Process Section: Each Step as ±
Each process step gets a "we subtract / we add" micro-pair:
- Discovery: − Assumptions → + Clarity
- Strategy: − Guesswork → + Direction
- Design: − Clutter → + Intent
- Development: − Bloat → + Performance
- Launch: − Uncertainty → + Momentum

These appear as small paired lines under each step title.

### 5. Section Transitions: ± Animated Dividers
Replace the single pm-divider between hero and stats with richer ± transition moments between key sections. A horizontal line that splits into "−" on the left and "+" on the right as it scrolls into view, with the content below following that theme.

### 6. CTA Section: Stronger Duality
The CTA already has a split background but the copy is generic. Reframe:
- Left (dark): "− Done settling for less?"
- Right (lighter): "+ Let's build what's next."
- Center stays the ± symbol and button

### 7. Philosophy Stats Bar (Homepage)
Add a subtle "± by the numbers" label and frame the stats as outcomes of the plus/minus approach.

## Files Modified
- `src/components/ServicesSection.tsx` — add minus/plus pairs per service
- `src/components/FeaturedWork.tsx` — add result transformation tags
- `src/components/TestimonialsSection.tsx` — add before/after framing
- `src/components/ProcessSection.tsx` — add ± pairs per step
- `src/components/PhilosophySection.tsx` — enhanced ± divider
- `src/components/CTASection.tsx` — stronger duality copy

## What Stays the Same
Everything about the current layout, colors, typography, animations, and structure. This plan only layers in the ± concept more deeply into existing components through content and micro-interactions.

