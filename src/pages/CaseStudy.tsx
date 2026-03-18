import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProjectMockup from "@/components/ProjectMockup";
import logoMark from "@/assets/logo-icon.png";
import uda1 from "@/assets/uda-1.png";
import uda2 from "@/assets/uda-2.png";
import uda3 from "@/assets/uda-3.png";
import uda4 from "@/assets/uda-4.png";
import uda5 from "@/assets/uda-5.png";
import uda6 from "@/assets/uda-6.png";
import uda7 from "@/assets/uda-7.png";
import uda8 from "@/assets/uda-8.png";
import uda9 from "@/assets/uda-9.png";
import corrxpFullpageReal from "@/assets/corrxp-fullpage-real.png";

import corrxpMobile from "@/assets/corrxp-mobile.jpg";
import corrxpTablet from "@/assets/corrxp-tablet.jpg";
import corrxp1 from "@/assets/corrxp-1.png";
import corrxp2 from "@/assets/corrxp-2.png";
import corrxp3 from "@/assets/corrxp-3.png";
import corrxp4 from "@/assets/corrxp-4.png";
import corrxp5 from "@/assets/corrxp-5.png";
import corrxp6 from "@/assets/corrxp-6.png";
import corrxp7 from "@/assets/corrxp-7.png";
import corrxp8 from "@/assets/corrxp-8.png";
import corrxp9 from "@/assets/corrxp-9.png";
import sp1 from "@/assets/sp-1.png";
import sp2 from "@/assets/sp-2.png";
import sp3 from "@/assets/sp-3.png";
import sp4 from "@/assets/sp-4.png";
import sp5 from "@/assets/sp-5.png";
import sp6 from "@/assets/sp-6.png";
import sp7 from "@/assets/sp-7.png";
import sp8 from "@/assets/sp-8.png";
import sp9 from "@/assets/sp-9.png";
import spFullpage from "@/assets/sp-fullpage.png";
import tsrHero from "@/assets/tsr-hero.png";
import tsrFullpage from "@/assets/tsr-fullpage.png";
import tsr1 from "@/assets/tsr-1.png";
import tsr2 from "@/assets/tsr-2.png";
import tsr3 from "@/assets/tsr-3.png";
import tsr4 from "@/assets/tsr-4.png";
import tsr5 from "@/assets/tsr-5.png";
import tsr6 from "@/assets/tsr-6.png";
import tsr7 from "@/assets/tsr-7.png";
import tsr8 from "@/assets/tsr-8.png";

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  year: string;
  heroGradient: string;
  tagline: string;
  overview: string;
  mockupColors: string[];
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  strategy: {
    title: string;
    description: string;
    pillars: {label: string;detail: string;}[];
  };
  designSystem: {
    fonts: {name: string;style: string;specimen: string;}[];
    colors: {name: string;hex: string;}[];
    gridNote: string;
  };
  results: {
    stats: {value: string;label: string;}[];
    quote?: {text: string;author: string;role: string;};
  };
  heroImage?: string;
  heroImages?: {
    browser?: string;
    mobile?: string;
    tablet?: string;
  };
  resultImage?: string;
  galleryImages?: string[];
  galleryContain?: boolean;
  techStack?: {name: string;purpose: string;}[];
  sitePages?: {name: string;description: string;}[];
  nextProject?: {slug: string;title: string;gradient: string;};
  liveUrl?: string;
}

const caseStudies: Record<string, CaseStudyData> = {
  "trots-architects": {
    slug: "trots-architects",
    title: "Trots Architects",
    category: "Architecture",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))",
    tagline: "A digital presence as refined as their builds.",
    mockupColors: ["#1E293B", "#78716C", "#FAF9F6", "#3B82F6"],
    overview:
    "Trots Architects needed a website that mirrored the precision and elegance of their architectural work. We designed and developed a portfolio-driven experience that lets their projects speak with confidence — clean, immersive, and conversion-ready.",
    problem: {
      title: "The Challenge",
      description:
      "Trots had an outdated website that failed to communicate the caliber of their work. Potential clients were bouncing before reaching the portfolio, and the inquiry form was buried three clicks deep.",
      challenges: [
      "Portfolio images were low-res and poorly cropped",
      "No mobile optimization — 60% of traffic was mobile",
      "Inquiry form completion rate was under 2%",
      "Brand identity didn't match the quality of their builds"]

    },
    strategy: {
      title: "Our Strategy",
      description:
      "We took a content-first approach, restructuring the site around their best projects and making the inquiry process seamless from any page.",
      pillars: [
      { label: "Content Architecture", detail: "Reorganized the sitemap to lead with projects, not corporate pages" },
      { label: "Visual Identity", detail: "Developed a restrained, editorial design system inspired by architectural journals" },
      { label: "Performance", detail: "Optimized image delivery with lazy loading, WebP, and responsive srcsets" },
      { label: "Conversion", detail: "Embedded contextual CTAs within project pages — inquiries are always one click away" }]

    },
    designSystem: {
      fonts: [
      { name: "Neue Montreal", style: "Headlines & Navigation", specimen: "Architecture is frozen music" },
      { name: "Inter", style: "Body & Captions", specimen: "The detail is not the detail. It makes the design." }],

      colors: [
      { name: "Slate", hex: "#1E293B" },
      { name: "Stone", hex: "#78716C" },
      { name: "Warm White", hex: "#FAF9F6" },
      { name: "Accent Blue", hex: "#3B82F6" }],

      gridNote: "12-column grid with asymmetric project layouts. Full-bleed hero images with 80px site margins."
    },
    results: {
      stats: [
      { value: "340%", label: "Increase in inquiries" },
      { value: "2.8×", label: "Longer session duration" },
      { value: "68%", label: "Mobile conversion lift" },
      { value: "< 1.5s", label: "Page load time" }],

      quote: {
        text: "PlusMinus understood our vision immediately. The site finally reflects the quality of work we deliver.",
        author: "Arjun Mehta",
        role: "Founding Partner, Trots Architects"
      }
    },
    liveUrl: "https://trotsarchitects.com",
    nextProject: { slug: "uda-india", title: "UDA India", gradient: "linear-gradient(135deg, hsl(30 30% 12%), hsl(40 40% 22%), hsl(20 25% 10%))" }
  },
  "uda-india": {
    slug: "uda-india",
    title: "UDA India",
    category: "Architecture & Interior Design",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(30 30% 12%), hsl(40 40% 22%), hsl(20 25% 10%))",
    tagline: "Four decades of craft, one digital stage.",
    mockupColors: ["#1A1614", "#C9A96E", "#FAF7F2", "#2C2420"],
    overview:
    "Umesh Desai & Associates (est. 1984) is one of India's most respected architecture and interior design firms, behind iconic hospitality spaces like Kyma, Blabber All Day, Cafe Crema, Nama, and Tattva. They needed a digital portfolio that matched the caliber of their interiors — so we built an immersive, image-first experience that lets their spaces speak.",
    problem: {
      title: "The Challenge",
      description:
      "Despite four decades of award-winning work, UDA's online presence was outdated and failed to convey the sophistication of their hospitality interiors. Prospective clients couldn't experience the quality of their spaces digitally.",
      challenges: [
      "Outdated website with no project showcase or visual narrative",
      "Stunning photography was buried and underutilized",
      "Zero mobile optimization — majority of traffic came from mobile",
      "No inquiry pipeline from the website — all leads came through referrals",
      "Brand positioning didn't reflect their premium hospitality portfolio"]

    },
    strategy: {
      title: "Our Strategy",
      description:
      "We positioned UDA as a luxury hospitality design authority, crafting an editorial experience that treats each project as a story — not just a gallery.",
      pillars: [
      { label: "Full-Screen Imagery", detail: "Hero carousel showcasing their best venues — Kyma, Blabber, Nama — at cinematic scale" },
      { label: "Project-First Architecture", detail: "Portfolio-driven navigation where spaces take center stage, not corporate pages" },
      { label: "Editorial Storytelling", detail: "Each venue gets a dedicated narrative — concept, execution, photography — like an architecture journal" },
      { label: "Inquiry Pipeline", detail: "Contextual contact forms on every project page — qualified leads are one click away" }]

    },
    designSystem: {
      fonts: [
      { name: "Cormorant Garamond", style: "Headlines & Display", specimen: "Where space becomes experience" },
      { name: "DM Sans", style: "Body & Navigation", specimen: "Forty years of transforming hospitality spaces across India." }],

      colors: [
      { name: "Walnut", hex: "#1A1614" },
      { name: "Antique Gold", hex: "#C9A96E" },
      { name: "Ivory", hex: "#FAF7F2" },
      { name: "Espresso", hex: "#2C2420" }],

      gridNote: "Full-bleed hero imagery with editorial text overlays. Venue pages use masonry layouts with generous whitespace to let photography breathe."
    },
    results: {
      stats: [
      { value: "4×", label: "Increase in project inquiries" },
      { value: "3.2×", label: "Longer session duration" },
      { value: "85%", label: "Mobile traffic now optimized" },
      { value: "6", label: "Venue showcases launched" }],

      quote: {
        text: "For 40 years we let our spaces speak for themselves. PlusMinus gave us a digital space that finally does the same.",
        author: "Umesh Desai",
        role: "Founder, Umesh Desai & Associates"
      }
    },
    heroImage: uda1,
    heroImages: {
      browser: uda1,
      mobile: uda7,
      tablet: uda2
    },
    galleryImages: [uda1, uda2, uda3, uda4, uda5, uda6, uda7, uda8, uda9],
    techStack: [
      { name: "React", purpose: "Frontend framework" },
      { name: "Vite", purpose: "Build tool & dev server" },
      { name: "TypeScript", purpose: "Type-safe development" },
      { name: "Tailwind CSS", purpose: "Utility-first styling" },
      { name: "Framer Motion", purpose: "Scroll & interaction animations" },
      { name: "React Router", purpose: "Multi-page SPA routing" },
      { name: "Responsive Design", purpose: "Mobile-first approach" },
      { name: "SEO Optimized", purpose: "Meta tags & structured data" }
    ],
    sitePages: [
      { name: "Home", description: "Full-screen hero carousel showcasing signature hospitality interiors" },
      { name: "Projects", description: "Filterable portfolio of hospitality and residential work with hero imagery" },
      { name: "About Us", description: "Company story, philosophy, and 40-year legacy in architecture & design" },
      { name: "Process", description: "Step-by-step design methodology from concept to handover" },
      { name: "Clients", description: "Categorized client list across hotels, restaurants, residences, and commercial" },
      { name: "Media", description: "Press coverage and magazine features including Surface Reporters" },
      { name: "Contact", description: "Inquiry form with office details, hours, and social links" }
    ],
    liveUrl: "https://udaindia.com",
    nextProject: { slug: "corrxp", title: "CORR XP", gradient: "linear-gradient(135deg, hsl(20 60% 10%), hsl(25 70% 18%), hsl(15 40% 8%))" }
  },
  "corrxp": {
    slug: "corrxp",
    title: "CORR XP",
    category: "Web Design & Development",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(20 60% 10%), hsl(25 70% 18%), hsl(15 40% 8%))",
    tagline: "Restoring strength. Reinforcing trust — digitally.",
    mockupColors: ["#1A1A2E", "#E8612D", "#FAF5F0", "#2D2D3F"],
    overview:
    "CORR XP India is a specialized structural repair, rehabilitation, and retrofitting contractor with 9+ years of expertise. They needed a digital presence that communicated the precision and authority of their engineering work — so we built a bold, conversion-driven website that positions them as India's go-to structural repair specialists.",
    problem: {
      title: "The Challenge",
      description:
      "Despite being MSME registered with a strong project portfolio, CORR XP had no meaningful online presence. Potential clients in the construction and infrastructure sector couldn't find them, and their expertise in advanced repair systems like FRP strengthening went completely unrepresented online.",
      challenges: [
      "No existing website — zero digital presence in a competitive market",
      "Complex technical services were hard to communicate clearly",
      "No lead generation pipeline — all business came through word of mouth",
      "Mobile-first audience (engineers on-site) had no way to access information",
      "Multiple service verticals needed clear, organized presentation"]

    },
    strategy: {
      title: "Our Strategy",
      description:
      "We built CORR XP's digital identity from the ground up — a dark, industrial-grade aesthetic that mirrors the strength of their work, with orange accents that demand attention and drive action.",
      pillars: [
      { label: "Industrial Visual Identity", detail: "Dark charcoal palette with bold orange CTAs — communicating strength, precision, and engineering authority" },
      { label: "Service Architecture", detail: "Six core service verticals organized with clear descriptions, specifications, and relevant certifications (NACE, ASTM)" },
      { label: "Trust Signals", detail: "MSME registration, GST compliance, 9+ years experience, and 25+ completed projects prominently displayed" },
      { label: "Lead Generation", detail: "Multi-touch contact forms with project detail fields — converting site visitors into qualified consultation requests" }]

    },
    designSystem: {
      fonts: [
      { name: "Plus Jakarta Sans", style: "Headlines & Navigation", specimen: "Restoring Strength. Reinforcing Trust." },
      { name: "Inter", style: "Body & Technical Copy", specimen: "Advanced solutions for concrete and steel structures using proven repair systems." }],

      colors: [
      { name: "Deep Navy", hex: "#1A1A2E" },
      { name: "CORR Orange", hex: "#E8612D" },
      { name: "Warm Cream", hex: "#FAF5F0" },
      { name: "Charcoal", hex: "#2D2D3F" }],

      gridNote: "Full-width hero with construction imagery overlay. Service cards in a 2×3 grid with icon accents. Stats section with bold counters and orange highlights."
    },
    results: {
      stats: [
      { value: "5×", label: "Increase in consultation requests" },
      { value: "2.5×", label: "Longer session duration" },
      { value: "90%", label: "Mobile traffic optimized" },
      { value: "7", label: "Service verticals launched" }],

      quote: {
        text: "PlusMinus understood our technical domain and translated it into a website that our clients actually trust. The consultation requests started coming in within the first week.",
        author: "Corrxp Team",
        role: "CORR XP India"
      }
    },
    heroImage: corrxp1,
    heroImages: {
      browser: corrxpFullpageReal,
      mobile: corrxpMobile,
      tablet: corrxpTablet
    },
    galleryImages: [corrxp1, corrxp2, corrxp3, corrxp4, corrxp5, corrxp6, corrxp7, corrxp8, corrxp9],
    techStack: [
    { name: "React", purpose: "Frontend framework" },
    { name: "Vite", purpose: "Build tool & dev server" },
    { name: "TypeScript", purpose: "Type-safe development" },
    { name: "Tailwind CSS", purpose: "Utility-first styling" },
    { name: "Framer Motion", purpose: "Scroll & interaction animations" },
    { name: "React Router", purpose: "Multi-page SPA routing" },
    { name: "Responsive Design", purpose: "Mobile-first approach" },
    { name: "SEO Optimized", purpose: "Meta tags & structured data" }],

    sitePages: [
    { name: "Home", description: "Hero with animated stats, services overview, vision section, and trust badges" },
    { name: "Who We Are", description: "Company story, key services list, industry sectors, and business registrations" },
    { name: "What We Do", description: "7 detailed service pages with NACE/ASTM testing standards and fiber systems breakdown" },
    { name: "Projects", description: "Portfolio showcase of completed structural repair and retrofitting work" },
    { name: "Contact", description: "Multi-field consultation form with project detail capture" }],

    liveUrl: "https://corrxp.com",
    nextProject: { slug: "spaces-places", title: "Spaces & Places", gradient: "linear-gradient(135deg, hsl(40 50% 15%), hsl(35 60% 25%), hsl(30 40% 12%))" }
  },
  "spaces-places": {
    slug: "spaces-places",
    title: "Spaces & Places",
    category: "Web Design & Development",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(40 50% 15%), hsl(35 60% 25%), hsl(30 40% 12%))",
    tagline: "Mumbai's premium real estate, reimagined digitally.",
    mockupColors: ["#8B6914", "#1A1A1A", "#FAF7F2", "#C9A96E"],
    overview:
    "Spaces & Places is a premium Mumbai real estate consultancy specializing in verified properties across the city's prime locations. They needed a modern, trust-driven platform that showcases curated listings, integrates Vastu consultation as a unique differentiator, and converts high-intent property seekers into qualified leads.",
    problem: {
      title: "The Challenge",
      description:
      "Despite 15+ years of market expertise and 500+ happy families served, Spaces & Places lacked a digital platform that matched their on-ground reputation. Property seekers couldn't browse listings, compare projects, or request consultations online.",
      challenges: [
      "No online property listing platform — all inquiries were offline",
      "Vastu consultation USP was not communicated digitally",
      "No search or filter functionality for property discovery",
      "Mobile users (majority of traffic) had no optimized experience",
      "Competing with aggregators like MagicBricks and 99acres without a branded platform"]
    },
    strategy: {
      title: "Our Strategy",
      description:
      "We built a premium property discovery platform that combines editorial aesthetics with powerful search functionality, positioning Spaces & Places as Mumbai's trusted real estate partner — not just another listing site.",
      pillars: [
      { label: "Property Discovery Engine", detail: "Advanced search with filters for Buy/Rent, location, property type, BHK — making Mumbai's premium inventory instantly accessible" },
      { label: "Vastu Integration", detail: "Dedicated Vastu Shastra section with interactive floor plan analysis — turning an ancient science into a modern competitive advantage" },
      { label: "Trust Architecture", detail: "500+ families served, 100% verified properties, and free Vastu consultation prominently displayed as social proof" },
      { label: "Lead Conversion Pipeline", detail: "Multi-touch forms across property pages, contact page, and newsletter — capturing leads at every stage of the buyer journey" }]
    },
    designSystem: {
      fonts: [
      { name: "Playfair Display", style: "Headlines & Display", specimen: "Find Your Perfect Space in Mumbai" },
      { name: "Inter", style: "Body & Navigation", specimen: "Discover premium properties curated by experts across Mumbai's prime locations." }],
      colors: [
      { name: "Gold", hex: "#8B6914" },
      { name: "Dark", hex: "#1A1A1A" },
      { name: "Ivory", hex: "#FAF7F2" },
      { name: "Antique Gold", hex: "#C9A96E" }],
      gridNote: "Full-width hero with property search overlay. Featured projects in responsive card grid. Location sections with 3-column layout and deep-link navigation."
    },
    results: {
      stats: [
      { value: "8×", label: "Increase in online inquiries" },
      { value: "500+", label: "Happy families served" },
      { value: "2,500+", label: "Properties listed" },
      { value: "50+", label: "Areas covered in Mumbai" }],
      quote: {
        text: "PlusMinus transformed our decades of real estate expertise into a digital experience our clients love. The Vastu integration alone sets us apart from every competitor.",
        author: "Spaces & Places Team",
        role: "Spaces & Places, Mumbai"
      }
    },
    heroImage: sp2,
    heroImages: {
      browser: sp1,
    },
    resultImage: spFullpage,
    galleryImages: [sp2, sp4, sp5, sp6, sp9, sp7, sp8, sp3, sp8],
    techStack: [
      { name: "React", purpose: "Frontend framework" },
      { name: "Next.js", purpose: "Server-side rendering & SEO" },
      { name: "TypeScript", purpose: "Type-safe development" },
      { name: "Tailwind CSS", purpose: "Utility-first styling" },
      { name: "Supabase", purpose: "Database & authentication" },
      { name: "Custom Admin Panel", purpose: "Content management for projects, blogs & site" },
      { name: "Framer Motion", purpose: "Scroll & interaction animations" },
      { name: "Responsive Design", purpose: "Mobile-first approach" },
      { name: "SEO Optimized", purpose: "Meta tags & structured data" }
    ],
    sitePages: [
      { name: "Home", description: "Hero with property search, featured projects carousel, Vastu section, and market stats" },
      { name: "Projects", description: "Filterable property listings with search, location filters, and developer info" },
      { name: "Project Detail", description: "Gallery, quick facts, floor plans, amenities, and inquiry form per property" },
      { name: "Blog", description: "Real estate market insights, area guides, and investment advice" },
      { name: "Admin Panel", description: "Full CMS for managing projects, blogs, property listings, and site content" },
      { name: "Vastu Consultation", description: "Interactive floor plan analysis with Vastu grid overlay and recommendations" },
      { name: "Contact", description: "Multi-field inquiry form with office details and business hours" }
    ],
    nextProject: { slug: "the-smart-realtors", title: "The Smart Realtors", gradient: "linear-gradient(135deg, hsl(220 50% 15%), hsl(210 60% 22%), hsl(225 40% 12%))" }
  },
  "the-smart-realtors": {
    slug: "the-smart-realtors",
    title: "The Smart Realtors",
    category: "Landing Page Design",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(220 50% 15%), hsl(210 60% 22%), hsl(225 40% 12%))",
    tagline: "Mumbai's luxury real estate, elevated digitally.",
    mockupColors: ["#1B2A4A", "#2ECC71", "#FAF7F2", "#C8A2FF"],
    overview:
    "The Smart Realtors is a RERA-registered luxury real estate consultancy specializing in South Mumbai's most prestigious addresses — Worli, Malabar Hill, Cuffe Parade, and Altamount Road. They needed a premium digital platform that communicates trust, showcases verified luxury properties, and converts high-net-worth property seekers into qualified leads.",
    problem: {
      title: "The Challenge",
      description:
      "Despite 15+ years of expertise in Mumbai's luxury apartment market and 200+ successful transactions, The Smart Realtors had no digital presence that matched their on-ground reputation. High-net-worth clients couldn't browse verified listings or schedule consultations online.",
      challenges: [
      "No digital platform — all business relied on referrals and offline networks",
      "Luxury positioning wasn't communicated — competing with aggregator sites",
      "RERA registration and channel partner credentials were invisible online",
      "Mobile-first affluent audience had no optimized browsing experience",
      "No structured lead capture for property inquiries and consultations"]
    },
    strategy: {
      title: "Our Strategy",
      description:
      "We crafted a premium real estate platform that positions The Smart Realtors as South Mumbai's most trusted luxury property consultancy — combining editorial elegance with conversion-focused design.",
      pillars: [
      { label: "Luxury Visual Identity", detail: "Deep navy and gold palette with serif typography — communicating exclusivity, trust, and premium positioning" },
      { label: "Property Showcase", detail: "Featured properties with high-resolution imagery, pricing, specifications, and one-click scheduling for viewings" },
      { label: "Trust Architecture", detail: "RERA registration, 10+ registered channel partnerships with top developers (MICL, Birla, Lodha, L&T), and client testimonials" },
      { label: "Multi-Touch Conversion", detail: "WhatsApp integration, consultation forms, and property-specific inquiry CTAs — capturing leads at every touchpoint" }]
    },
    designSystem: {
      fonts: [
      { name: "Playfair Display", style: "Headlines & Display", specimen: "Find Your Perfect Space in Mumbai's Luxury Market" },
      { name: "Inter", style: "Body & Navigation", specimen: "Verified premium homes & smart investments tailored to you." }],
      colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Emerald", hex: "#2ECC71" },
      { name: "Ivory", hex: "#FAF7F2" },
      { name: "Lavender", hex: "#C8A2FF" }],
      gridNote: "Split-screen hero with luxury property imagery. Featured properties in responsive card grid. Channel partner logos in trust section. Services in 3-column layout with icon accents."
    },
    results: {
      stats: [
      { value: "200+", label: "Properties sold" },
      { value: "95%", label: "Client satisfaction" },
      { value: "15+", label: "Years experience" },
      { value: "100%", label: "RERA verified" }],
      quote: {
        text: "PlusMinus understood the luxury real estate space and built a platform that our high-net-worth clients trust instantly. The WhatsApp integration alone doubled our consultation requests.",
        author: "Maushmi",
        role: "Founder, The Smart Realtors"
      }
    },
    heroImage: tsr1,
    heroImages: {
      browser: tsrFullpage,
    },
    resultImage: tsrFullpage,
    galleryImages: [tsr1, tsr2, tsr3, tsr4, tsr5, tsr6, tsr7, tsr8],
    galleryContain: true,
    techStack: [
      { name: "React", purpose: "Frontend framework" },
      { name: "Vite", purpose: "Build tool & dev server" },
      { name: "TypeScript", purpose: "Type-safe development" },
      { name: "Tailwind CSS", purpose: "Utility-first styling" },
      { name: "Framer Motion", purpose: "Scroll & interaction animations" },
      { name: "WhatsApp API", purpose: "Direct client communication" },
      { name: "Responsive Design", purpose: "Mobile-first approach" },
      { name: "SEO Optimized", purpose: "Meta tags & structured data" }
    ],
    sitePages: [
      { name: "Home", description: "Split-screen hero with luxury property imagery, featured listings, and channel partner trust section" },
      { name: "Properties", description: "Curated luxury apartment listings with high-res imagery, specs, and scheduling CTAs" },
      { name: "Services", description: "Three service verticals — Buying, Selling, and Investment Advisory — with detailed breakdowns" },
      { name: "Testimonials", description: "Client success stories with transaction details and satisfaction metrics" },
      { name: "Contact", description: "Multi-field inquiry form with WhatsApp, phone, email, and office details" }
    ],
    nextProject: { slug: "trots-architects", title: "Trots Architects", gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))" }
  }
};


const CaseStudy = () => {
  const { slug } = useParams<{slug: string;}>();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <>
        <Navbar />
        <main className="section-light min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project not found</h1>
            <Link to="/work" className="text-foreground-muted hover:text-foreground transition-colors">
              ← Back to Work
            </Link>
          </div>
        </main>
        <Footer />
      </>);

  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero with browser mockup */}
        <section
          className="min-h-[90vh] md:min-h-[95vh] relative flex flex-col justify-end overflow-hidden"
          style={{ background: study.heroGradient }}>
          
          {/* Hero background image */}
          {study.heroImage && (
            <div className="absolute inset-0 z-0">
              <img src={study.heroImage} alt="" className="w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(0 0% 5% / 0.8) 60%, hsl(0 0% 5%) 100%)" }} />
            </div>
          )}

          {/* Logo watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]" aria-hidden="true">
            <img src={logoMark} alt="" className="w-[25vw] max-w-[300px] opacity-[0.04]" style={{ filter: "invert(1)" }} />
          </div>

          <div className="container-site pb-12 md:pb-20 pt-28 md:pt-40 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-[13px] font-medium mb-8 md:mb-12 transition-colors hover:text-white"
                style={{ color: "hsl(0 0% 50%)" }}>
                
                <ArrowLeft size={14} /> Back to Work
              </Link>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.15em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                  {study.category}
                </span>
                <span style={{ color: "hsl(0 0% 30%)" }}>·</span>
                <span className="text-[12px] md:text-[13px] font-semibold" style={{ color: "hsl(0 0% 50%)" }}>
                  {study.year}
                </span>
              </div>

              <h1
                className="font-bold mb-4 md:mb-6"
                style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 95%)" }}>
                
                {study.title}
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl font-display italic" style={{ color: "hsl(0 0% 60%)" }}>
                {study.tagline}
              </p>
            </motion.div>
          </div>

          {/* Browser mockup overlapping into next section */}
          <div className="container-site relative z-20 pb-0">
            <div className="translate-y-12 md:translate-y-20">
              {study.heroImages?.browser ?
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl mx-auto"
                style={{ background: "hsl(0 0% 6%)", border: "1px solid hsl(0 0% 15%)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: "hsl(0 0% 10%)", borderBottom: "1px solid hsl(0 0% 15%)" }}>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 70% 55%)" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(45 70% 55%)" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(130 50% 50%)" }} />
                    </div>
                    <div className="flex-1 mx-8">
                      <div className="h-5 rounded-md mx-auto max-w-[240px]" style={{ background: "hsl(0 0% 14%)" }} />
                    </div>
                  </div>
                  <div className="relative overflow-hidden" style={{ height: "clamp(320px, 55vw, 560px)" }}>
                    <motion.img
                    src={study.heroImages.browser}
                    alt={`${study.title} website`}
                    className="w-full h-auto block"
                    style={{ objectPosition: "top" }}
                    animate={study.slug === "corrxp" ? { y: ["0%", "-72%", "0%"] } : { y: ["0%", "-72%", "0%"] }}
                    transition={study.slug === "corrxp" ? { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 } : { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
                  
                  </div>
                </motion.div> :

              <ProjectMockup variant="browser" colors={study.mockupColors} className="w-full max-w-5xl mx-auto" />
              }
            </div>
          </div>
        </section>

        {/* Overview — extra top padding for mockup overlap */}
        <section className="section-light" style={{ paddingTop: "clamp(80px, 10vw, 160px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}>
                
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                  Overview
                </p>
                <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  The <span className="font-display italic font-normal">project</span>
                </h2>
              </motion.div>
              <motion.p
                className="text-base md:text-lg leading-relaxed text-foreground-muted"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}>
                
                {study.overview}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Full-bleed visual break — device mockups or spread gallery */}
        <section className="relative overflow-hidden" style={{ background: study.heroGradient, padding: "clamp(60px, 10vw, 120px) 0" }}>
          <div className="container-site">
            {study.galleryImages ?
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <motion.div
                className="md:col-span-7 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}>
                
                  <img src={study.galleryImages[0]} alt={`${study.title} homepage view`} className={`w-full block ${study.galleryContain ? 'h-auto object-contain' : 'h-full object-cover aspect-[4/3]'}`} loading="lazy" />
                </motion.div>

                <motion.div
                className="md:col-span-5 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08 }}>
                
                  <img src={study.galleryImages[1] ?? study.galleryImages[0]} alt={`${study.title} service section view`} className={`w-full block ${study.galleryContain ? 'h-auto object-contain' : 'h-full object-cover aspect-[4/3]'}`} loading="lazy" />
                </motion.div>

                {study.galleryImages[2] &&
              <motion.div
                className="md:col-span-12 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.14 }}>
                
                    <img src={study.galleryImages[2]} alt={`${study.title} detailed page view`} className="w-full h-auto block" loading="lazy" />
                  </motion.div>
              }
              </div> :

            <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-10">
                {study.heroImages?.tablet ?
              <motion.div
                className="hidden md:block rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "hsl(0 0% 6%)", border: "2px solid hsl(0 0% 15%)", width: 360 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}>
                
                    <div className="flex justify-center pt-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: "hsl(0 0% 12%)" }} />
                    </div>
                    <div className="aspect-[4/3] p-1 overflow-hidden">
                      <img src={study.heroImages.tablet} alt={`${study.title} tablet view`} className="w-full h-full object-cover object-top rounded-lg" />
                    </div>
                  </motion.div> :

              <div className="hidden md:block">
                    <ProjectMockup variant="tablet" colors={study.mockupColors} />
                  </div>
              }
                {study.heroImages?.mobile ?
              <motion.div
                className="rounded-[28px] overflow-hidden shadow-2xl"
                style={{ background: "hsl(0 0% 6%)", border: "3px solid hsl(0 0% 18%)", width: 220 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}>
                
                    <div className="flex justify-center pt-2 pb-1">
                      <div className="w-16 h-4 rounded-full" style={{ background: "hsl(0 0% 10%)" }} />
                    </div>
                    <div className="aspect-[9/18] px-1 pb-2 overflow-hidden">
                      <img src={study.heroImages.mobile} alt={`${study.title} mobile view`} className="w-full h-full object-cover object-top rounded-lg" />
                    </div>
                  </motion.div> :

              <ProjectMockup variant="phone" colors={study.mockupColors} />
              }
                {!study.heroImages?.mobile &&
              <div className="hidden md:block">
                    <ProjectMockup variant="phone" colors={[...study.mockupColors].reverse()} style={{ width: 200 }} />
                  </div>
              }
              </div>
            }
          </div>
        </section>

        {/* Problem — with "before" wireframe */}
        <section className="section-dark" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}>
                
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                  − Minus
                </p>
                <h2 className="font-bold mb-6 md:mb-8" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}>
                  {study.problem.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "hsl(0 0% 50%)" }}>
                  {study.problem.description}
                </p>

                <div className="space-y-0">
                  {study.problem.challenges.map((challenge, i) =>
                  <motion.div
                    key={i}
                    className="border-t py-4 md:py-6 flex items-start gap-3 md:gap-4"
                    style={{ borderColor: "hsl(0 0% 15%)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}>
                    
                      <span className="text-[13px] font-semibold flex-shrink-0 mt-1" style={{ color: "hsl(0 0% 30%)" }}>
                        0{i + 1}
                      </span>
                      <p className="text-sm md:text-base text-strikethrough" style={{ color: "hsl(0 0% 40%)" }}>
                        {challenge}
                      </p>
                    </motion.div>
                  )}
                  <div className="border-t" style={{ borderColor: "hsl(0 0% 15%)" }} />
                </div>
              </motion.div>

              {/* "Before" — generic ugly wireframe */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}>
                
                <div className="w-full max-w-sm rounded-lg overflow-hidden" style={{ background: "hsl(0 0% 10%)", border: "1px solid hsl(0 0% 15%)" }}>
                  {/* Ugly generic "before" wireframe */}
                  <div className="p-3" style={{ background: "hsl(0 0% 12%)", borderBottom: "1px solid hsl(0 0% 15%)" }}>
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: "hsl(0 0% 20%)" }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: "hsl(0 0% 20%)" }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: "hsl(0 0% 20%)" }} />
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {/* Generic header */}
                    <div className="flex justify-between items-center">
                      <div className="w-16 h-3 rounded" style={{ background: "hsl(0 0% 18%)" }} />
                      <div className="flex gap-2">
                        <div className="w-8 h-2 rounded" style={{ background: "hsl(0 0% 15%)" }} />
                        <div className="w-8 h-2 rounded" style={{ background: "hsl(0 0% 15%)" }} />
                        <div className="w-8 h-2 rounded" style={{ background: "hsl(0 0% 15%)" }} />
                      </div>
                    </div>
                    {/* Generic hero — cramped, boring */}
                    <div className="rounded" style={{ background: "hsl(0 0% 14%)", height: 80 }}>
                      <div className="p-3">
                        <div className="w-3/4 h-3 rounded mb-2" style={{ background: "hsl(0 0% 18%)" }} />
                        <div className="w-1/2 h-2 rounded" style={{ background: "hsl(0 0% 16%)" }} />
                      </div>
                    </div>
                    {/* Generic grid — cramped */}
                    <div className="grid grid-cols-3 gap-1.5">
                      {[...Array(6)].map((_, k) =>
                      <div key={k} className="aspect-square rounded" style={{ background: "hsl(0 0% 14%)" }} />
                      )}
                    </div>
                    <div className="w-full h-2 rounded" style={{ background: "hsl(0 0% 14%)" }} />
                    <div className="w-2/3 h-2 rounded" style={{ background: "hsl(0 0% 14%)" }} />
                  </div>
                  {/* "Before" label */}
                  <div className="text-center py-3" style={{ borderTop: "1px solid hsl(0 0% 15%)" }}>
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>Before</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {study.galleryImages?.[3] &&
        <section className="section-light" style={{ padding: "clamp(28px, 6vw, 56px) 0" }}>
            <div className="container-site">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                className="rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                
                  <img src={study.galleryImages[3]} alt={`${study.title} execution phase visual`} className={`w-full block ${study.galleryContain ? 'h-auto object-contain' : 'h-full object-cover aspect-[4/3]'}`} loading="lazy" />
                </motion.div>
                {study.galleryImages[4] &&
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}>
                
                    <img src={study.galleryImages[4]} alt={`${study.title} architecture detail visual`} className={`w-full block ${study.galleryContain ? 'h-auto object-contain' : 'h-full object-cover aspect-[4/3]'}`} loading="lazy" />
                  </motion.div>
              }
              </div>
            </div>
          </section>
        }

        {/* Strategy */}
        <section className="section-light" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                + Plus
              </p>
              <h2 className="font-bold text-foreground mb-6 md:mb-8" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                {study.strategy.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground-muted max-w-3xl">
                {study.strategy.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {study.strategy.pillars.map((pillar, i) =>
              <motion.div
                key={i}
                className="border-t border-border pt-5 md:pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}>
                
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <img src={logoMark} alt="" className="h-3 w-auto opacity-20" />
                    <h3 className="text-base md:text-lg font-bold text-foreground">{pillar.label}</h3>
                  </div>
                  <p className="text-sm md:text-base text-foreground-muted leading-relaxed">{pillar.detail}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Tech Stack — only for projects that have it */}
        {study.techStack &&
        <section className="section-dark" style={{ padding: "clamp(60px, 10vw, 100px) 0" }}>
            <div className="container-site">
              <motion.div
              className="mb-10 md:mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                  Tech Stack
                </p>
                <h2 className="font-bold" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}>
                  Built <span className="font-display italic font-normal">with</span>
                </h2>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {study.techStack.map((tech, i) =>
              <motion.div
                key={tech.name}
                className="rounded-lg p-5 md:p-6"
                style={{ background: "hsl(0 0% 10%)", border: "1px solid hsl(0 0% 15%)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}>
                
                    <p className="text-sm md:text-base font-bold mb-1" style={{ color: "hsl(0 0% 90%)" }}>{tech.name}</p>
                    <p className="text-xs md:text-sm" style={{ color: "hsl(0 0% 45%)" }}>{tech.purpose}</p>
                  </motion.div>
              )}
              </div>
            </div>
          </section>
        }

        {/* Site Pages — only for projects that have it */}
        {study.sitePages &&
        <section className="section-light" style={{ padding: "clamp(60px, 10vw, 100px) 0" }}>
            <div className="container-site">
              <motion.div
              className="mb-10 md:mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                  Site Structure
                </p>
                <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {study.sitePages.length} <span className="font-display italic font-normal">pages</span>
                </h2>
              </motion.div>
              <div className="space-y-0">
                {study.sitePages.map((page, i) =>
              <motion.div
                key={page.name}
                className="border-t border-border py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}>
                
                    <span className="text-[13px] font-semibold text-foreground-muted w-8 flex-shrink-0">0{i + 1}</span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground min-w-[120px]">{page.name}</h3>
                    <p className="text-sm md:text-base text-foreground-muted leading-relaxed">{page.description}</p>
                  </motion.div>
              )}
                <div className="border-t border-border" />
              </div>
            </div>
          </section>
        }

        {/* Section snapshots */}
        {study.galleryImages?.[5] &&
        <section className="relative overflow-hidden" style={{ background: study.heroGradient, padding: "clamp(40px, 8vw, 80px) 0" }}>
            <div className="container-site">
              <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>Section Snapshots</span>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                className="rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                
                  <img src={study.galleryImages[5]} alt={`${study.title} content snapshot 1`} className={`w-full block ${study.galleryContain ? 'h-auto object-contain' : 'h-full object-cover aspect-[3/4]'}`} loading="lazy" />
                </motion.div>
                {study.galleryImages[6] &&
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                
                    <img src={study.galleryImages[6]} alt={`${study.title} content snapshot 2`} className={`w-full block ${study.galleryContain ? 'h-auto object-contain' : 'h-full object-cover aspect-[3/4]'}`} loading="lazy" />
                  </motion.div>
              }
              </div>
            </div>
          </section>
        }

        <section className="relative overflow-hidden" style={{ background: study.heroGradient, padding: "clamp(40px, 8vw, 100px) 0" }}>
          <div className="container-site">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>The Result</span>
            </motion.div>
            {(study.heroImages?.browser || study.resultImage) ?
            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl mx-auto"
              style={{ background: "hsl(0 0% 6%)", border: "1px solid hsl(0 0% 15%)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: "hsl(0 0% 10%)", borderBottom: "1px solid hsl(0 0% 15%)" }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 70% 55%)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(45 70% 55%)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(130 50% 50%)" }} />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="h-5 rounded-md mx-auto max-w-[240px]" style={{ background: "hsl(0 0% 14%)" }} />
                  </div>
                </div>
                <div className="relative overflow-hidden" style={{ height: "clamp(320px, 55vw, 560px)" }}>
                  <motion.img
                  src={study.resultImage || study.heroImages?.browser}
                  alt={`${study.title} final result`}
                  className="w-full h-auto block"
                  animate={{ y: ["0%", "-72%", "0%"] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
                
                </div>
              </motion.div> :

            <ProjectMockup variant="browser" colors={study.mockupColors} className="w-full max-w-5xl mx-auto" />
            }
          </div>
        </section>

        {/* Design System — rich visual */}
        <section className="section-light" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                Design System
              </p>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Visual <span className="font-display italic font-normal">language</span>
              </h2>
            </motion.div>

            {/* Typography specimens — large and visual */}
            <div className="mb-16">
              <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-8">Typography</h3>
              <div className="space-y-8">
                {study.designSystem.fonts.map((font, i) =>
                <motion.div
                  key={font.name}
                  className="border-t border-border pt-6 md:pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}>
                  
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                      <div>
                        <p className="text-lg md:text-xl font-bold text-foreground">{font.name}</p>
                        <p className="text-sm text-foreground-muted">{font.style}</p>
                      </div>
                    </div>
                    {/* Large specimen text */}
                    <p
                    className="text-foreground/80 leading-tight"
                    style={{ fontSize: "clamp(24px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                    
                      {font.specimen}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Color palette — horizontal Pantone-style bars */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-8">Color Palette</h3>
              <div className="space-y-3">
                {study.designSystem.colors.map((color, i) =>
                <motion.div
                  key={color.name}
                  className="flex items-stretch rounded-lg overflow-hidden"
                  style={{ height: "clamp(48px, 6vw, 72px)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}>
                  
                    <div className="flex-1" style={{ backgroundColor: color.hex }} />
                    <div className="flex items-center gap-4 px-4 md:px-6 bg-background border border-border border-l-0 min-w-[140px] md:min-w-[200px]">
                      <span className="text-sm font-semibold text-foreground">{color.name}</span>
                      <span className="text-xs text-foreground-muted ml-auto">{color.hex}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Grid note with visual overlay */}
            <motion.div
              className="relative rounded-lg overflow-hidden"
              style={{ background: study.mockupColors[0], padding: "clamp(32px, 4vw, 48px)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
              {/* Grid overlay visualization */}
              <div className="absolute inset-0 flex opacity-10 pointer-events-none">
                {[...Array(12)].map((_, i) =>
                <div key={i} className="flex-1 border-r" style={{ borderColor: study.mockupColors[2] }} />
                )}
              </div>
              <div className="relative z-10">
                <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: `${study.mockupColors[2]}88` }}>
                  Layout & Grid
                </h3>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: study.mockupColors[2] }}>
                  {study.designSystem.gridNote}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {study.galleryImages?.[7] &&
        <section className="section-light" style={{ padding: "clamp(32px, 6vw, 64px) 0" }}>
            <div className="container-site">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                <motion.div
                className="md:col-span-3 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                
                  <img src={study.galleryImages[7]} alt={`${study.title} final snapshot desktop`} className="w-full h-auto block" loading="lazy" />
                </motion.div>
              </div>
            </div>
          </section>
        }

        {/* Results — with high-contrast background */}
        <section
          className="relative overflow-hidden"
          style={{ padding: "clamp(60px, 10vw, 120px) 0", background: "hsl(0 0% 4%)" }}>
          
          {/* Subtle accent glow */}
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at 20% 50%, ${study.mockupColors[0]}66, transparent 60%)` }} />

          <div className="container-site relative z-10">
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                Impact
              </p>
              <h2 className="font-bold" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}>
                The <span className="font-display italic font-normal">results</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
              {study.results.stats.map((stat, i) =>
              <motion.div
                key={i}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                
                  <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium" style={{ color: "hsl(0 0% 45%)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              )}
            </div>

            {study.results.quote &&
            <motion.div
              className="border-t pt-10 md:pt-16 max-w-3xl"
              style={{ borderColor: "hsl(0 0% 15%)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
                <span className="font-display italic text-5xl md:text-6xl block mb-4 md:mb-6" style={{ color: "hsl(0 0% 20%)" }}>"</span>
                <p className="text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 -mt-6 md:-mt-8" style={{ color: "hsl(0 0% 70%)" }}>
                  {study.results.quote.text}
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "hsl(0 0% 80%)" }}>{study.results.quote.author}</p>
                  <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>{study.results.quote.role}</p>
                </div>
              </motion.div>
            }
          </div>
        </section>

        {/* Next Project — with gradient preview */}
        {study.nextProject &&
        <section className="section-light border-t border-border" style={{ padding: "clamp(40px, 6vw, 80px) 0" }}>
            <div className="container-site">
              <Link
              to={`/work/${study.nextProject.slug}`}
              className="group block">
              
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-2">
                      Next Project
                    </p>
                    <h3
                    className="font-bold text-foreground group-hover:text-foreground-muted transition-colors"
                    style={{ fontSize: "clamp(24px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                    
                      {study.nextProject.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    {/* Gradient preview of next project */}
                    <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg flex-shrink-0"
                    style={{ background: study.nextProject.gradient }} />
                  
                    <ArrowUpRight size={28} className="text-foreground-muted group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          </section>
        }

        <CTASection />
      </main>
      <Footer />
    </>);

};

export default CaseStudy;