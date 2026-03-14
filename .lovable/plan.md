

## Plan: Replace UDA India AI-generated mockups with real website screenshots

### What we have
- Successfully captured 3 screenshots from udaindia.co.in:
  1. **Homepage** — stunning bar/restaurant hero image with navigation
  2. **Projects page** — "Our Projects" hero with portfolio grid below
  3. **Contact page** — clean contact form layout
- Currently UDA India uses AI-generated mockup images (`uda-hero.jpg`, `uda-mobile.jpg`, `uda-tablet.jpg`)

### What to do

1. **Save the fetched screenshots as project assets**
   - Save homepage screenshot as `src/assets/uda-1.png` (hero/primary)
   - Save projects page screenshot as `src/assets/uda-2.png`
   - Save contact page screenshot as `src/assets/uda-3.png`

2. **Update CaseStudy.tsx for UDA India**
   - Import the new real screenshots
   - Replace `heroImages.browser` with the homepage screenshot (`uda-1.png`) for the auto-scrolling browser mockup
   - Add `galleryImages` array to UDA India data with all 3 screenshots (similar to how CORR XP uses its gallery)
   - Add `heroImage` property using the homepage screenshot for the hero background
   - The gallery section will render the real screenshots in the same grid layout used by CORR XP

3. **Update Work.tsx and FeaturedWork.tsx**
   - Add `preview: uda1` to UDA India's project entry in both files so the homepage screenshot shows as the project preview on the Work page and Homepage (matching how CORR XP already works)

### Technical details
- The browser mockup already has auto-scroll animation for UDA (`y: [0, -220, 0]` over 12s) — this will now scroll through the real homepage screenshot instead of an AI image
- The gallery section rendering already exists in CaseStudy.tsx via the `galleryImages` conditional — adding the array to UDA's data will automatically trigger that layout
- Preview images on Work/FeaturedWork pages use the same `{project.preview && <img>}` pattern already in place for CORR XP

