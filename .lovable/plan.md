

## Plan: Expand UDA India Case Study with 10+ Real Screenshots & Device Mockups

### Current State
- UDA India has only 3 screenshots (uda-1, uda-2, uda-3) and no techStack/sitePages
- CORR XP has 9 gallery images + fullpage screenshot + mobile/tablet mockups + techStack + sitePages
- UDA's browser animation starts immediately without waiting for image load

### Step 1: Capture 10+ Screenshots from udaindia.co.in
Fetch screenshots from different pages:
1. Homepage (already have as uda-1)
2. Projects/Portfolio page (already have as uda-2)
3. Contact page (already have as uda-3)
4. About page
5. Individual project page (e.g., a restaurant/venue)
6. Another project page
7. Services or process page
8. Team or philosophy page
9. Mobile viewport of homepage
10. Tablet viewport of homepage

Save as `uda-4.png` through `uda-10.png`, plus update `uda-mobile.jpg` and `uda-tablet.jpg` with real mobile/tablet screenshots.

### Step 2: Update UDA India Case Study Data
- Expand `galleryImages` array to include all 10+ images
- Add `techStack` array (matching CORR XP pattern)
- Add `sitePages` array (matching CORR XP pattern)
- Use a real full-page screenshot for the browser mockup auto-scroll

### Step 3: Add Animation Delay for Image Loading
- Add a 2-3 second delay before the browser mockup auto-scroll animation starts using framer-motion's `delay` property
- Apply to both hero and "The Result" browser mockups

### Step 4: Device Mockups with Real Screenshots
The gallery sections will render screenshots inside device frames (browser chrome, phone notch, tablet bezels) — matching the CORR XP pattern where images are distributed between sections:
- After Overview: 7+5 col grid with first two screenshots
- After Problem: 2-col grid with screenshots 4 & 5
- "Section Snapshots": 2-col grid with screenshots 6 & 7
- After Design System: full-width screenshot 8
- Mobile & tablet mockups using real viewport screenshots in the device frame sections

### Technical Details
- Browser mockup animation: change `animate` to use `y: ["0%", "-72%", "0%"]` with `delay: 3` for the UDA full-page screenshot (same technique as CORR XP)
- All new images saved as PNGs via `fetch_website` with screenshot format
- Mobile screenshot captured at 375px viewport, tablet at 768px viewport

