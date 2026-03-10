import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import logoMark from "@/assets/logo-mark.png";

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  year: string;
  heroGradient: string;
  tagline: string;
  overview: string;
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  strategy: {
    title: string;
    description: string;
    pillars: { label: string; detail: string }[];
  };
  designSystem: {
    fonts: { name: string; style: string }[];
    colors: { name: string; hex: string }[];
    gridNote: string;
  };
  results: {
    stats: { value: string; label: string }[];
    quote?: { text: string; author: string; role: string };
  };
  nextProject?: { slug: string; title: string };
}

const caseStudies: Record<string, CaseStudyData> = {
  "trots-architects": {
    slug: "trots-architects",
    title: "Trots Architects",
    category: "Architecture",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))",
    tagline: "A digital presence as refined as their builds.",
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
        "Brand identity didn't match the quality of their builds",
      ],
    },
    strategy: {
      title: "Our Strategy",
      description:
        "We took a content-first approach, restructuring the site around their best projects and making the inquiry process seamless from any page.",
      pillars: [
        { label: "Content Architecture", detail: "Reorganized the sitemap to lead with projects, not corporate pages" },
        { label: "Visual Identity", detail: "Developed a restrained, editorial design system inspired by architectural journals" },
        { label: "Performance", detail: "Optimized image delivery with lazy loading, WebP, and responsive srcsets" },
        { label: "Conversion", detail: "Embedded contextual CTAs within project pages — inquiries are always one click away" },
      ],
    },
    designSystem: {
      fonts: [
        { name: "Neue Montreal", style: "Headlines & Navigation" },
        { name: "Inter", style: "Body & Captions" },
      ],
      colors: [
        { name: "Slate", hex: "#1E293B" },
        { name: "Stone", hex: "#78716C" },
        { name: "Warm White", hex: "#FAF9F6" },
        { name: "Accent Blue", hex: "#3B82F6" },
      ],
      gridNote: "12-column grid with asymmetric project layouts. Full-bleed hero images with 80px site margins.",
    },
    results: {
      stats: [
        { value: "340%", label: "Increase in inquiries" },
        { value: "2.8×", label: "Longer session duration" },
        { value: "68%", label: "Mobile conversion lift" },
        { value: "< 1.5s", label: "Page load time" },
      ],
      quote: {
        text: "PlusMinus understood our vision immediately. The site finally reflects the quality of work we deliver.",
        author: "Arjun Mehta",
        role: "Founding Partner, Trots Architects",
      },
    },
    nextProject: { slug: "refinnd-restaurant", title: "Refinnd Restaurant" },
  },
  "refinnd-restaurant": {
    slug: "refinnd-restaurant",
    title: "Refinnd Restaurant",
    category: "Hospitality",
    year: "2025",
    heroGradient: "linear-gradient(135deg, hsl(25 40% 22%), hsl(15 35% 18%), hsl(35 30% 12%))",
    tagline: "Where flavor meets digital finesse.",
    overview:
      "Refinnd is a fine-dining experience in South Mumbai. We crafted a website that captures the warmth, artistry, and atmosphere of their restaurant — driving reservations and private event inquiries.",
    problem: {
      title: "The Challenge",
      description:
        "Their previous site was a basic template that felt generic. It didn't convey the exclusivity of the dining experience and lacked reservation integration.",
      challenges: [
        "Generic template with no brand personality",
        "No online reservation system",
        "Menu was a downloadable PDF — not mobile-friendly",
        "Event inquiry process required phone calls only",
      ],
    },
    strategy: {
      title: "Our Strategy",
      description:
        "We designed an immersive, image-driven experience that makes you feel the ambiance before you walk through the door.",
      pillars: [
        { label: "Atmosphere First", detail: "Full-screen imagery and moody color palette that mirrors the dining experience" },
        { label: "Seamless Reservations", detail: "Integrated booking widget accessible from every page" },
        { label: "Digital Menu", detail: "Interactive, seasonal menu with dietary filters and chef's notes" },
        { label: "Event Pipeline", detail: "Dedicated private dining section with instant quote requests" },
      ],
    },
    designSystem: {
      fonts: [
        { name: "Playfair Display", style: "Headlines" },
        { name: "DM Sans", style: "Body & UI" },
      ],
      colors: [
        { name: "Espresso", hex: "#3E2723" },
        { name: "Warm Gold", hex: "#D4A574" },
        { name: "Cream", hex: "#FFF8F0" },
        { name: "Charcoal", hex: "#1A1A1A" },
      ],
      gridNote: "Asymmetric layouts with generous whitespace. Menu sections use card-based layouts with hover reveals.",
    },
    results: {
      stats: [
        { value: "5×", label: "Online reservations vs. phone" },
        { value: "45%", label: "Increase in private event inquiries" },
        { value: "92%", label: "Mobile satisfaction score" },
        { value: "12s", label: "Avg. time to complete reservation" },
      ],
      quote: {
        text: "The website captures exactly what it feels like to dine with us. Our bookings have never been stronger.",
        author: "Chef Priya Sharma",
        role: "Owner, Refinnd Restaurant",
      },
    },
    nextProject: { slug: "overchends-real-estate", title: "Overchends Real Estate" },
  },
  "overchends-real-estate": {
    slug: "overchends-real-estate",
    title: "Overchends Real Estate",
    category: "Real Estate",
    year: "2024",
    heroGradient: "linear-gradient(135deg, hsl(150 15% 15%), hsl(170 20% 20%), hsl(140 15% 12%))",
    tagline: "Premium properties deserve a premium presence.",
    overview:
      "Overchends is a luxury real estate firm operating across Mumbai and Dubai. We built a property showcase platform that elevates their listings and converts high-net-worth leads.",
    problem: {
      title: "The Challenge",
      description:
        "Their site was listing-heavy but experience-poor. Luxury buyers expect a premium feel, and the existing site felt transactional rather than aspirational.",
      challenges: [
        "No visual hierarchy — all listings looked the same",
        "Lead capture was a basic contact form",
        "Property pages lacked immersive media",
        "No differentiation from aggregator sites like 99acres",
      ],
    },
    strategy: {
      title: "Our Strategy",
      description:
        "We positioned each property as a story, not just a listing — creating cinematic property pages that drive qualified inquiries.",
      pillars: [
        { label: "Property Stories", detail: "Each listing has a narrative arc: location, lifestyle, specs, and a strong CTA" },
        { label: "Lead Qualification", detail: "Multi-step inquiry form that pre-qualifies leads by budget and timeline" },
        { label: "Virtual Tours", detail: "Integrated 360° walkthroughs for premium listings" },
        { label: "Market Authority", detail: "Blog and market reports section positioning Overchends as thought leaders" },
      ],
    },
    designSystem: {
      fonts: [
        { name: "Instrument Serif", style: "Headlines" },
        { name: "DM Sans", style: "Body & Data" },
      ],
      colors: [
        { name: "Forest", hex: "#1B2E1B" },
        { name: "Sage", hex: "#87A87B" },
        { name: "Pearl", hex: "#F5F5F0" },
        { name: "Gold", hex: "#C9A96E" },
      ],
      gridNote: "Property pages use full-bleed hero images with overlaid text. Grid shifts from 2-column on listing pages to full-width on property detail pages.",
    },
    results: {
      stats: [
        { value: "280%", label: "Qualified lead increase" },
        { value: "4.2×", label: "Time on property pages" },
        { value: "35%", label: "Reduction in unqualified inquiries" },
        { value: "₹12Cr", label: "In deals attributed to the website" },
      ],
    },
    nextProject: { slug: "velora-finance", title: "Velora Finance" },
  },
  "velora-finance": {
    slug: "velora-finance",
    title: "Velora Finance",
    category: "Fintech",
    year: "2024",
    heroGradient: "linear-gradient(135deg, hsl(260 25% 18%), hsl(280 20% 22%), hsl(250 20% 14%))",
    tagline: "Making finance feel human.",
    overview:
      "Velora is a fintech startup simplifying wealth management for young professionals in India. We designed their brand identity and built a product-led website that drives app signups.",
    problem: {
      title: "The Challenge",
      description:
        "As a new entrant in a crowded fintech space, Velora needed to stand out visually while building trust with a skeptical audience.",
      challenges: [
        "No established brand identity",
        "Complex product needed simple explanation",
        "Trust deficit — new brand in a trust-heavy industry",
        "Low conversion from landing page to app download",
      ],
    },
    strategy: {
      title: "Our Strategy",
      description:
        "We built a brand that feels approachable yet premium, with a website that educates before it sells.",
      pillars: [
        { label: "Brand Identity", detail: "Created a complete visual system: logo, type, color, illustration style" },
        { label: "Product Storytelling", detail: "Scroll-driven animations that explain the product step by step" },
        { label: "Social Proof", detail: "Integrated testimonials, press mentions, and security certifications prominently" },
        { label: "Conversion Funnel", detail: "Optimized signup flow with progressive disclosure and trust signals" },
      ],
    },
    designSystem: {
      fonts: [
        { name: "Cabinet Grotesk", style: "Headlines & Brand" },
        { name: "Inter", style: "Body & Product UI" },
      ],
      colors: [
        { name: "Deep Purple", hex: "#2D1B4E" },
        { name: "Electric Violet", hex: "#7C3AED" },
        { name: "Soft Lavender", hex: "#F3F0FF" },
        { name: "Midnight", hex: "#0F0A1A" },
      ],
      gridNote: "Alternating full-width sections with contained 8-column content areas. Heavy use of gradients and glassmorphism for a modern fintech feel.",
    },
    results: {
      stats: [
        { value: "8×", label: "App signup conversion" },
        { value: "15K", label: "Signups in first month" },
        { value: "4.8★", label: "App Store rating post-launch" },
        { value: "₹2Cr", label: "Seed funding attributed to brand" },
      ],
      quote: {
        text: "PlusMinus didn't just build us a website — they built us a brand. The response from investors and users has been incredible.",
        author: "Rohan Kapoor",
        role: "Co-founder, Velora Finance",
      },
    },
    nextProject: { slug: "trots-architects", title: "Trots Architects" },
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
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
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="min-h-[85vh] relative flex items-end"
          style={{ background: study.heroGradient }}
        >
          {/* Logo watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <img src={logoMark} alt="" className="w-[30vw] max-w-[400px] opacity-[0.04]" style={{ filter: "invert(1)" }} />
          </div>

          <div className="container-site pb-20 pt-40 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-[13px] font-medium mb-12 transition-colors hover:text-white"
                style={{ color: "hsl(0 0% 50%)" }}
              >
                <ArrowLeft size={14} /> Back to Work
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-[13px] font-semibold tracking-[0.15em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                  {study.category}
                </span>
                <span style={{ color: "hsl(0 0% 30%)" }}>·</span>
                <span className="text-[13px] font-semibold" style={{ color: "hsl(0 0% 50%)" }}>
                  {study.year}
                </span>
              </div>

              <h1
                className="font-bold mb-6"
                style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 95%)" }}
              >
                {study.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl font-display italic" style={{ color: "hsl(0 0% 60%)" }}>
                {study.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-light" style={{ padding: "120px 0" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                  Overview
                </p>
                <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  The <span className="font-display italic font-normal">project</span>
                </h2>
              </motion.div>
              <motion.p
                className="text-lg leading-relaxed text-foreground-muted"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {study.overview}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-dark" style={{ padding: "120px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                − Minus
              </p>
              <h2 className="font-bold mb-8" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}>
                {study.problem.title}
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "hsl(0 0% 50%)" }}>
                {study.problem.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.problem.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  className="border-t py-6 flex items-start gap-4"
                  style={{ borderColor: "hsl(0 0% 15%)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="text-[13px] font-semibold flex-shrink-0 mt-1" style={{ color: "hsl(0 0% 30%)" }}>
                    0{i + 1}
                  </span>
                  <p className="text-base text-strikethrough" style={{ color: "hsl(0 0% 40%)" }}>
                    {challenge}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="section-light" style={{ padding: "120px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                + Plus
              </p>
              <h2 className="font-bold text-foreground mb-8" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                {study.strategy.title}
              </h2>
              <p className="text-lg leading-relaxed text-foreground-muted max-w-3xl">
                {study.strategy.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {study.strategy.pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  className="border-t border-border pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src={logoMark} alt="" className="h-3 w-auto opacity-20" />
                    <h3 className="text-lg font-bold text-foreground">{pillar.label}</h3>
                  </div>
                  <p className="text-base text-foreground-muted leading-relaxed">{pillar.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="section-light border-t border-border" style={{ padding: "120px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                Design System
              </p>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Visual <span className="font-display italic font-normal">language</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-6">Typography</h3>
                <div className="space-y-4">
                  {study.designSystem.fonts.map((font) => (
                    <div key={font.name} className="border-t border-border pt-4">
                      <p className="text-xl font-bold text-foreground">{font.name}</p>
                      <p className="text-sm text-foreground-muted">{font.style}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-6">Color Palette</h3>
                <div className="grid grid-cols-2 gap-3">
                  {study.designSystem.colors.map((color) => (
                    <div key={color.name}>
                      <div
                        className="w-full aspect-square rounded-lg mb-2"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-sm font-medium text-foreground">{color.name}</p>
                      <p className="text-[12px] text-foreground-muted">{color.hex}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-6">Layout & Grid</h3>
                <div className="border-t border-border pt-4">
                  <p className="text-base leading-relaxed text-foreground-muted">{study.designSystem.gridNote}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-dark" style={{ padding: "120px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                Impact
              </p>
              <h2 className="font-bold" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}>
                The <span className="font-display italic font-normal">results</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {study.results.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "hsl(0 0% 45%)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {study.results.quote && (
              <motion.div
                className="border-t pt-16 max-w-3xl"
                style={{ borderColor: "hsl(0 0% 15%)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-display italic text-6xl block mb-6" style={{ color: "hsl(0 0% 20%)" }}>"</span>
                <p className="text-xl md:text-2xl leading-relaxed mb-8 -mt-8" style={{ color: "hsl(0 0% 70%)" }}>
                  {study.results.quote.text}
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "hsl(0 0% 80%)" }}>{study.results.quote.author}</p>
                  <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>{study.results.quote.role}</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Next Project */}
        {study.nextProject && (
          <section className="section-light border-t border-border" style={{ padding: "80px 0" }}>
            <div className="container-site">
              <Link
                to={`/work/${study.nextProject.slug}`}
                className="group flex items-center justify-between"
              >
                <div>
                  <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-2">
                    Next Project
                  </p>
                  <h3
                    className="font-bold text-foreground group-hover:text-foreground-muted transition-colors"
                    style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                  >
                    {study.nextProject.title}
                  </h3>
                </div>
                <ArrowUpRight size={32} className="text-foreground-muted group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
