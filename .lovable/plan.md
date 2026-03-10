

# Mobile Optimization + Case Study Visual Overhaul

## Problem Analysis

### Mobile Issues (current state)
1. **Hero**: The duality tagline ("Minus the noise / Plus the results") is a horizontal flex row that overflows on mobile. The headline at `clamp(48px, 8vw, 110px)` is too large for small screens.
2. **Navbar**: Mobile menu background uses `bg-background/98` which won't match on dark-hero pages.
3. **FeaturedWork**: The hover-preview column is `hidden md:flex` — on mobile users just see a plain list with no visual context at all. No images or gradients shown.
4. **ProcessSection**: Horizontal scroll works but items are cramped at 280px with no visual padding.
5. **ServicesSection**: The +/− accordion uses `onMouseEnter/Leave` — doesn't work on touch devices at all.
6. **CTASection**: Split layout collapses awkwardly — the "Done with mediocre websites?" and the large ± stack vertically with too much empty space.
7. **TestimonialsSection**: Large decorative quote mark overlaps text on small screens.
8. **PhilosophySection**: 2x2 grid on mobile looks okay but numbers are large.
9. **About page**: Split hero `grid-cols-1` stacks but the "Minus" half gets `padding: 160px 0 80px` which is excessive on mobile.
10. **Contact page**: Form works but budget select looks unstyled on iOS.
11. **Work page**: Same hover-preview issue — no visuals on mobile.
12. **Footer**: Grid collapses fine but spacing is generous.
13. **All pages**: No scroll-to-top on route change.

### Case Study Issues
The current case studies are **entirely text-based** — no images, no mockups, no visual breaks. Compared to sites like Locomotive or Studio Freight where case studies are 70% imagery, ours feel like a Word document. Specific problems:
- Hero is just a gradient with text — no project screenshot/mockup
- Overview section is two columns of text — no visual
- Problem section is text with numbered items — no visual contrast
- Strategy section is text cards — no imagery
- Design System section shows color swatches (good) but typography is just text names
- Results section is stats + quote — decent but monotonous after all the text above
- No full-bleed imagery anywhere
- No browser mockup frames, no device mockups, no before/after visuals

---

## Plan

### Part 1: Mobile Optimization (all components)

**HeroSection.tsx**
- Stack duality tagline vertically on mobile (`flex-col` below `md:`)
- Reduce headline clamp lower bound to `36px`
- Make "View Our Work" button full-width on mobile
- Reduce `pt-32 pb-20` to `pt-28 pb-16` on mobile

**Navbar.tsx**
- Mobile menu should use dark background when on dark pages (homepage, case study)
- Ensure touch-friendly tap targets (min 44px)

**FeaturedWork.tsx**
- On mobile, show a small gradient preview bar above or below each project title so users get visual context without hover
- Or: show a gradient thumbnail inline next to the project title

**ServicesSection.tsx + Services.tsx**
- Change `onMouseEnter/Leave` to `onClick` toggle on mobile (use `useIsMobile` hook)
- Ensure accordion content is readable with proper padding

**ProcessSection.tsx**
- Add scroll indicator (fade edges) for horizontal scroll on mobile
- Slightly larger items (300px) with better spacing

**TestimonialsSection.tsx**
- Scale down decorative quote mark on mobile
- Reduce `min-h` on mobile

**CTASection.tsx**
- Stack vertically on mobile with better spacing, hide the split background effect

**About.tsx**
- Reduce section padding on mobile (160px → 80px)
- Split hero padding reduced on mobile

**Contact.tsx**
- Style the select element better for mobile
- Stack the grid with less gap on mobile

**Work.tsx**
- Show inline gradient thumbnails on mobile for each project row

**Footer.tsx**
- Tighten spacing on mobile

**App.tsx**
- Add `ScrollToTop` component that scrolls to top on route change

**index.css**
- Add responsive padding utilities and mobile-specific adjustments

### Part 2: Case Study Visual Overhaul

The key problem is **no visuals**. Since we can't use real project images, we'll create rich **generated visual elements** using CSS/SVG that simulate project mockups:

**New visual blocks to add to CaseStudy.tsx:**

1. **Hero**: Add a "browser frame" mockup inside the gradient hero — a CSS-drawn browser window (title bar with dots, URL bar) containing a styled gradient/pattern that represents the project. This immediately makes it look like a real showcase.

2. **Full-bleed image break after Overview**: A full-width gradient section with a large centered browser mockup showing a "homepage" layout (CSS-drawn wireframe-style blocks representing header, hero, content). Each project gets unique colors from its design system.

3. **Problem section**: Add a visual "before" state — a deliberately ugly/generic wireframe mockup (gray, boxy, cramped) contrasting with the styled solution. Use CSS grid blocks to simulate a generic template layout.

4. **Strategy section**: After the text pillars, add a full-width visual showing the project's design system colors as large blocks with typography samples rendered in the actual fonts mentioned.

5. **Design System section overhaul**: Instead of just listing font names, render actual large type specimens. Show the color palette as full-width horizontal bars (like Pantone strips). Add a CSS grid overlay visualization.

6. **Device mockups between sections**: Add phone + laptop frame mockups (CSS-drawn) showing the project at different breakpoints. Use the project's color palette for the content inside.

7. **Results section**: Add a subtle animated gradient background that uses the project's colors, making it more immersive.

8. **Next Project section**: Show a gradient preview of the next project (like a teaser card).

**New component: `ProjectMockup.tsx`**
- A reusable CSS-drawn browser/phone frame component
- Takes colors, layout type as props
- Renders a stylized wireframe inside the frame using the project's design system colors
- Variants: `browser`, `phone`, `tablet`

**Data model update**: Add `mockupColors` and `mockupLayout` to each case study's data so the generated visuals use project-specific palettes.

### Files to Create
- `src/components/ProjectMockup.tsx` — reusable device frame with generated content
- `src/components/ScrollToTop.tsx` — scroll restoration on route change

### Files to Modify
- `src/pages/CaseStudy.tsx` — add visual blocks, mockups, full-bleed imagery sections, mobile padding
- `src/components/HeroSection.tsx` — mobile layout fixes
- `src/components/FeaturedWork.tsx` — mobile gradient previews
- `src/components/ServicesSection.tsx` — touch-friendly accordion
- `src/components/ProcessSection.tsx` — mobile scroll improvements
- `src/components/TestimonialsSection.tsx` — mobile scaling
- `src/components/CTASection.tsx` — mobile stack layout
- `src/components/PhilosophySection.tsx` — minor mobile tweaks
- `src/components/Navbar.tsx` — mobile menu dark mode awareness
- `src/components/Footer.tsx` — mobile spacing
- `src/pages/About.tsx` — mobile padding
- `src/pages/Contact.tsx` — mobile form improvements
- `src/pages/Work.tsx` — mobile gradient thumbnails
- `src/pages/Services.tsx` — touch accordion
- `src/pages/Insights.tsx` — mobile card sizing
- `src/App.tsx` — add ScrollToTop
- `src/index.css` — mobile utilities

