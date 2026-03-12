import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProjectMockup from "@/components/ProjectMockup";
import logoMark from "@/assets/logo-mark.png";
import udaHero from "@/assets/uda-hero.jpg";
import udaMobile from "@/assets/uda-mobile.jpg";
import udaTablet from "@/assets/uda-tablet.jpg";

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
    pillars: { label: string; detail: string }[];
  };
  designSystem: {
    fonts: { name: string; style: string; specimen: string }[];
    colors: { name: string; hex: string }[];
    gridNote: string;
  };
  results: {
    stats: { value: string; label: string }[];
    quote?: { text: string; author: string; role: string };
  };
  heroImages?: {
    browser?: string;
    mobile?: string;
    tablet?: string;
  };
  nextProject?: { slug: string; title: string; gradient: string };
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
        { name: "Neue Montreal", style: "Headlines & Navigation", specimen: "Architecture is frozen music" },
        { name: "Inter", style: "Body & Captions", specimen: "The detail is not the detail. It makes the design." },
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
    nextProject: { slug: "uda-india", title: "UDA India", gradient: "linear-gradient(135deg, hsl(30 30% 12%), hsl(40 40% 22%), hsl(20 25% 10%))" },
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
        "Brand positioning didn't reflect their premium hospitality portfolio",
      ],
    },
    strategy: {
      title: "Our Strategy",
      description:
        "We positioned UDA as a luxury hospitality design authority, crafting an editorial experience that treats each project as a story — not just a gallery.",
      pillars: [
        { label: "Full-Screen Imagery", detail: "Hero carousel showcasing their best venues — Kyma, Blabber, Nama — at cinematic scale" },
        { label: "Project-First Architecture", detail: "Portfolio-driven navigation where spaces take center stage, not corporate pages" },
        { label: "Editorial Storytelling", detail: "Each venue gets a dedicated narrative — concept, execution, photography — like an architecture journal" },
        { label: "Inquiry Pipeline", detail: "Contextual contact forms on every project page — qualified leads are one click away" },
      ],
    },
    designSystem: {
      fonts: [
        { name: "Cormorant Garamond", style: "Headlines & Display", specimen: "Where space becomes experience" },
        { name: "DM Sans", style: "Body & Navigation", specimen: "Forty years of transforming hospitality spaces across India." },
      ],
      colors: [
        { name: "Walnut", hex: "#1A1614" },
        { name: "Antique Gold", hex: "#C9A96E" },
        { name: "Ivory", hex: "#FAF7F2" },
        { name: "Espresso", hex: "#2C2420" },
      ],
      gridNote: "Full-bleed hero imagery with editorial text overlays. Venue pages use masonry layouts with generous whitespace to let photography breathe.",
    },
    results: {
      stats: [
        { value: "4×", label: "Increase in project inquiries" },
        { value: "3.2×", label: "Longer session duration" },
        { value: "85%", label: "Mobile traffic now optimized" },
        { value: "6", label: "Venue showcases launched" },
      ],
      quote: {
        text: "For 40 years we let our spaces speak for themselves. PlusMinus gave us a digital space that finally does the same.",
        author: "Umesh Desai",
        role: "Founder, Umesh Desai & Associates",
      },
    },
    heroImages: {
      browser: udaHero,
      mobile: udaMobile,
      tablet: udaTablet,
    },
    nextProject: { slug: "trots-architects", title: "Trots Architects", gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))" },
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
        {/* Hero with browser mockup */}
        <section
          className="min-h-[90vh] md:min-h-[95vh] relative flex flex-col justify-end"
          style={{ background: study.heroGradient }}
        >
          {/* Logo watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <img src={logoMark} alt="" className="w-[25vw] max-w-[300px] opacity-[0.04]" style={{ filter: "invert(1)" }} />
          </div>

          <div className="container-site pb-12 md:pb-20 pt-28 md:pt-40 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-[13px] font-medium mb-8 md:mb-12 transition-colors hover:text-white"
                style={{ color: "hsl(0 0% 50%)" }}
              >
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
                style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 95%)" }}
              >
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
              {study.heroImages?.browser ? (
                <motion.div
                  className="rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl mx-auto"
                  style={{ background: "hsl(0 0% 6%)", border: "1px solid hsl(0 0% 15%)" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
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
                  <div className="relative overflow-hidden" style={{ maxHeight: 500 }}>
                    <motion.img
                      src={study.heroImages.browser}
                      alt={`${study.title} website`}
                      className="w-full object-cover object-top"
                      animate={{ y: [0, -100, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              ) : (
                <ProjectMockup variant="browser" colors={study.mockupColors} className="w-full max-w-5xl mx-auto" />
              )}
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
                transition={{ duration: 0.7 }}
              >
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
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {study.overview}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Full-bleed visual break — device mockups */}
        <section className="relative overflow-hidden" style={{ background: study.heroGradient, padding: "clamp(60px, 10vw, 120px) 0" }}>
          <div className="container-site">
            <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-10">
              {study.heroImages?.tablet ? (
                <motion.div
                  className="hidden md:block rounded-2xl overflow-hidden shadow-2xl"
                  style={{ background: "hsl(0 0% 6%)", border: "2px solid hsl(0 0% 15%)", width: 360 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="flex justify-center pt-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: "hsl(0 0% 12%)" }} />
                  </div>
                  <div className="aspect-[4/3] p-1 overflow-hidden">
                    <img src={study.heroImages.tablet} alt={`${study.title} tablet view`} className="w-full h-full object-cover object-top rounded-lg" />
                  </div>
                </motion.div>
              ) : (
                <div className="hidden md:block">
                  <ProjectMockup variant="tablet" colors={study.mockupColors} />
                </div>
              )}
              {study.heroImages?.mobile ? (
                <motion.div
                  className="rounded-[28px] overflow-hidden shadow-2xl"
                  style={{ background: "hsl(0 0% 6%)", border: "3px solid hsl(0 0% 18%)", width: 220 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="flex justify-center pt-2 pb-1">
                    <div className="w-16 h-4 rounded-full" style={{ background: "hsl(0 0% 10%)" }} />
                  </div>
                  <div className="aspect-[9/18] px-1 pb-2 overflow-hidden">
                    <img src={study.heroImages.mobile} alt={`${study.title} mobile view`} className="w-full h-full object-cover object-top rounded-lg" />
                  </div>
                </motion.div>
              ) : (
                <ProjectMockup variant="phone" colors={study.mockupColors} />
              )}
              {!study.heroImages?.mobile && (
                <div className="hidden md:block">
                  <ProjectMockup variant="phone" colors={[...study.mockupColors].reverse()} style={{ width: 200 }} />
                </div>
              )}
            </div>
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
                transition={{ duration: 0.7 }}
              >
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
                  {study.problem.challenges.map((challenge, i) => (
                    <motion.div
                      key={i}
                      className="border-t py-4 md:py-6 flex items-start gap-3 md:gap-4"
                      style={{ borderColor: "hsl(0 0% 15%)" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <span className="text-[13px] font-semibold flex-shrink-0 mt-1" style={{ color: "hsl(0 0% 30%)" }}>
                        0{i + 1}
                      </span>
                      <p className="text-sm md:text-base text-strikethrough" style={{ color: "hsl(0 0% 40%)" }}>
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                  <div className="border-t" style={{ borderColor: "hsl(0 0% 15%)" }} />
                </div>
              </motion.div>

              {/* "Before" — generic ugly wireframe */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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
                      {[...Array(6)].map((_, k) => (
                        <div key={k} className="aspect-square rounded" style={{ background: "hsl(0 0% 14%)" }} />
                      ))}
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

        {/* Strategy */}
        <section className="section-light" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
              {study.strategy.pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  className="border-t border-border pt-5 md:pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <img src={logoMark} alt="" className="h-3 w-auto opacity-20" />
                    <h3 className="text-base md:text-lg font-bold text-foreground">{pillar.label}</h3>
                  </div>
                  <p className="text-sm md:text-base text-foreground-muted leading-relaxed">{pillar.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: study.heroGradient, padding: "clamp(40px, 8vw, 100px) 0" }}>
          <div className="container-site">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>The Result</span>
            </motion.div>
            {study.heroImages?.browser ? (
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl mx-auto"
                style={{ background: "hsl(0 0% 6%)", border: "1px solid hsl(0 0% 15%)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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
                <img src={study.heroImages.browser} alt={`${study.title} final result`} className="w-full" />
              </motion.div>
            ) : (
              <ProjectMockup variant="browser" colors={study.mockupColors} className="w-full max-w-5xl mx-auto" />
            )}
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
              transition={{ duration: 0.7 }}
            >
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
                {study.designSystem.fonts.map((font, i) => (
                  <motion.div
                    key={font.name}
                    className="border-t border-border pt-6 md:pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                      <div>
                        <p className="text-lg md:text-xl font-bold text-foreground">{font.name}</p>
                        <p className="text-sm text-foreground-muted">{font.style}</p>
                      </div>
                    </div>
                    {/* Large specimen text */}
                    <p
                      className="text-foreground/80 leading-tight"
                      style={{ fontSize: "clamp(24px, 4vw, 48px)", letterSpacing: "-0.02em" }}
                    >
                      {font.specimen}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Color palette — horizontal Pantone-style bars */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-8">Color Palette</h3>
              <div className="space-y-3">
                {study.designSystem.colors.map((color, i) => (
                  <motion.div
                    key={color.name}
                    className="flex items-stretch rounded-lg overflow-hidden"
                    style={{ height: "clamp(48px, 6vw, 72px)" }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="flex-1" style={{ backgroundColor: color.hex }} />
                    <div className="flex items-center gap-4 px-4 md:px-6 bg-background border border-border border-l-0 min-w-[140px] md:min-w-[200px]">
                      <span className="text-sm font-semibold text-foreground">{color.name}</span>
                      <span className="text-xs text-foreground-muted ml-auto">{color.hex}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Grid note with visual overlay */}
            <motion.div
              className="relative rounded-lg overflow-hidden"
              style={{ background: study.mockupColors[0], padding: "clamp(32px, 4vw, 48px)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Grid overlay visualization */}
              <div className="absolute inset-0 flex opacity-10 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex-1 border-r" style={{ borderColor: study.mockupColors[2] }} />
                ))}
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

        {/* Results — with animated gradient background */}
        <section
          className="relative overflow-hidden"
          style={{ padding: "clamp(60px, 10vw, 120px) 0" }}
        >
          {/* Animated gradient bg */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, hsl(0 0% 6%), ${study.mockupColors[0]}44, hsl(0 0% 8%))` }} />

          <div className="container-site relative z-10">
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                Impact
              </p>
              <h2 className="font-bold" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}>
                The <span className="font-display italic font-normal">results</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
              {study.results.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium" style={{ color: "hsl(0 0% 45%)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {study.results.quote && (
              <motion.div
                className="border-t pt-10 md:pt-16 max-w-3xl"
                style={{ borderColor: "hsl(0 0% 15%)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-display italic text-5xl md:text-6xl block mb-4 md:mb-6" style={{ color: "hsl(0 0% 20%)" }}>"</span>
                <p className="text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 -mt-6 md:-mt-8" style={{ color: "hsl(0 0% 70%)" }}>
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

        {/* Next Project — with gradient preview */}
        {study.nextProject && (
          <section className="section-light border-t border-border" style={{ padding: "clamp(40px, 6vw, 80px) 0" }}>
            <div className="container-site">
              <Link
                to={`/work/${study.nextProject.slug}`}
                className="group block"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-2">
                      Next Project
                    </p>
                    <h3
                      className="font-bold text-foreground group-hover:text-foreground-muted transition-colors"
                      style={{ fontSize: "clamp(24px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                    >
                      {study.nextProject.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    {/* Gradient preview of next project */}
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg flex-shrink-0"
                      style={{ background: study.nextProject.gradient }}
                    />
                    <ArrowUpRight size={28} className="text-foreground-muted group-hover:text-foreground transition-colors" />
                  </div>
                </div>
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
