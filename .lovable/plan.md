

# Case Study: UDA India (udaindia.co.in)

## What We're Building

A new case study page for **Umesh Desai & Associates (UDA India)** — an architecture and interior design firm established in 1984, specializing in luxury hospitality spaces (Kyma, Blabber All Day, Cafe Crema, Nama, Tattva). The website PlusMinus built for them features a full-screen hero carousel, project showcases, and an editorial layout.

## Changes

### 1. Add UDA India case study data to `CaseStudy.tsx`

New entry `"uda-india"` with:
- **Category**: Architecture & Interior Design
- **Year**: 2025
- **Hero gradient**: Warm earthy tones (ivory/gold/charcoal) to match their luxury hospitality aesthetic
- **Mockup colors**: `["#1A1614", "#C9A96E", "#FAF7F2", "#2C2420"]` — dark walnut, gold accent, warm cream, espresso
- **Tagline**: "Four decades of craft, one digital stage."
- **Overview**: UDA India (est. 1984) needed a digital portfolio that matched the caliber of their hospitality interiors — Kyma, Blabber, Nama, Tattva. We built an immersive, image-first experience that lets their spaces speak.
- **Problem challenges**: Outdated site, no project showcase, photography underutilized, zero mobile optimization, no inquiry pipeline from the site
- **Strategy pillars**: Full-screen imagery carousel, Project-first architecture, Editorial storytelling for each venue, Seamless contact/inquiry flow
- **Design system**: Warm palette (Walnut, Antique Gold, Ivory, Charcoal), serif + sans pairing
- **Results**: Stats like 4× inquiries, 3.2× session duration, 85% mobile traffic now optimized, 6 venue showcases
- **Quote**: From Umesh Desai praising the digital transformation

### 2. Add to project lists

- **`FeaturedWork.tsx`**: Add UDA India to the featured projects array (replace or add as 5th, or swap one out)
- **`Work.tsx`**: Add to the projects list
- **`nextProject` chain**: Wire UDA India into the circular next-project navigation

### 3. Files to modify

- `src/pages/CaseStudy.tsx` — Add new case study data entry + update nextProject links
- `src/components/FeaturedWork.tsx` — Add UDA India to projects array
- `src/pages/Work.tsx` — Add UDA India to projects array

