

## Plan: Use icon-only transparent logo everywhere

The `logo-mark-transparent.png` asset is already imported in Navbar, HeroSection, and CaseStudy. However, **Footer**, **About**, and **Contact** still import the old `logo-mark.png` (which has a background). All instances need to switch to the transparent version, and any accompanying brand text (like "PlusMinus" next to the footer logo) should be removed.

### Changes

1. **Footer.tsx** (line 2, 25-27)
   - Change import from `logo-mark.png` to `logo-mark-transparent.png`
   - Remove the `<span>PlusMinus</span>` text next to the logo icon
   - Keep the logo `<img>` only

2. **About.tsx** (line 5)
   - Change import from `logo-mark.png` to `logo-mark-transparent.png`

3. **Contact.tsx** (line 5)
   - Change import from `logo-mark.png` to `logo-mark-transparent.png`

4. **CaseStudy.tsx** (line 707) — already uses transparent, but the small logo next to strategy pillars also uses it. No change needed.

5. **HeroSection.tsx** — already uses transparent. No change needed.

6. **Navbar.tsx** — already uses transparent. No change needed.

### Summary
3 files to edit. The only visual change is: everywhere the ± mark appears, it will render as a clean icon with no background box, and the footer drops the "PlusMinus" text label next to the icon.

