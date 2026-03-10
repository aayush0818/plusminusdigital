

# Plan: Rotating Word Animation, Tagline Integration, and New Pages

## 1. Hero Rotating Word Animation (`HeroSection.tsx`)
- Replace the static "growth." word with a cycling word animation using `framer-motion`'s `AnimatePresence`
- Words rotate through: **growth**, **revenue**, **conversions**, **results**, **impact**
- Each word slides up and fades in, then slides up and fades out before the next one appears
- Use `useEffect` with a 2.5s interval to cycle through words
- The rotating word keeps the italic serif styling to create contrast with the bold sans-serif headline

## 2. Tagline Integration
- Add "Minus the noise. Plus the results." as a subtle tagline element
- Place it in the **hero section** below the subtext paragraph, styled as a small caps tracked-out line in muted color -- not competing with the headline but adding brand identity
- Also add it to the **footer** as the brand descriptor next to the logo

## 3. New Pages (5 total)

### Work Page (`/work`)
- Hero: "Our Work" headline + brief intro
- Filterable grid of all projects (All / Web Design / Development / Branding)
- Each project card: gradient thumbnail, title, category, year
- Asymmetric masonry layout matching homepage style

### About Page (`/about`)
- Split-screen hero: bold statement left, body text right
- Team values section with 3-4 core values
- Stats bar (reuse PhilosophySection pattern)
- Timeline/milestones section
- CTA at bottom

### Services Page (`/services`)
- Hero with headline
- Expanded accordion-style service list (reuse ServicesSection pattern but with more detail per service)
- "Our Approach" section explaining the methodology
- CTA at bottom

### Contact Page (`/contact`)
- Split layout: contact form on the right, info on the left (email, location, social links)
- Form fields: Name, Email, Company, Budget range (select), Project description (textarea)
- Clean, minimal styling

### Insights/Blog Page (`/insights`)
- Hero with "Journal" headline
- Grid of article cards with category filters
- Each card: gradient background, tag, title, date
- Reuse InsightsSection card style

## 4. Navbar + Routing Updates
- Update `Navbar.tsx` to use `react-router-dom` `Link` instead of anchor `#` links
- Nav links: Work → `/work`, Services → `/services`, About → `/about`, Journal → `/insights`
- Keep homepage section anchors working for smooth scroll when on homepage
- Add all routes to `App.tsx`
- Update mobile menu accordingly

## Files to Create
- `src/pages/Work.tsx`
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Insights.tsx`

## Files to Modify
- `src/components/HeroSection.tsx` -- rotating word + tagline
- `src/components/Navbar.tsx` -- router links + "Contact" added
- `src/components/Footer.tsx` -- tagline addition
- `src/App.tsx` -- new routes

