import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const categories = ["All", "Web Design", "Development", "Branding"];

const projects = [
  { title: "Trots Architects", slug: "trots-architects", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))" },
  { title: "Refinnd Restaurant", slug: "refinnd-restaurant", category: "Branding", year: "2025", gradient: "linear-gradient(135deg, hsl(25 40% 22%), hsl(15 35% 18%), hsl(35 30% 12%))" },
  { title: "Overchends Real Estate", slug: "overchends-real-estate", category: "Web Design", year: "2024", gradient: "linear-gradient(135deg, hsl(150 15% 15%), hsl(170 20% 20%), hsl(140 15% 12%))" },
  { title: "Velora Finance", slug: "velora-finance", category: "Development", year: "2024", gradient: "linear-gradient(135deg, hsl(260 25% 18%), hsl(280 20% 22%), hsl(250 20% 14%))" },
  { title: "Meridian Finance", slug: "trots-architects", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(220 60% 60%), hsl(260 50% 50%))" },
  { title: "Noma Kitchen", slug: "refinnd-restaurant", category: "Branding", year: "2025", gradient: "linear-gradient(135deg, hsl(30 70% 60%), hsl(15 60% 45%))" },
  { title: "Volta Energy", slug: "velora-finance", category: "Development", year: "2024", gradient: "linear-gradient(135deg, hsl(150 50% 45%), hsl(180 40% 35%))" },
  { title: "Arcade Studio", slug: "overchends-real-estate", category: "Web Design", year: "2024", gradient: "linear-gradient(135deg, hsl(280 50% 55%), hsl(320 45% 50%))" },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main>
        <section className="section-light pt-40 pb-20">
          <div className="container-site">
            <motion.p
              className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio
            </motion.p>
            <motion.h1
              className="font-bold text-foreground"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A curated selection of projects where strategy, design, and engineering converge.
            </motion.p>
          </div>
        </section>

        <section className="section-light pb-8">
          <div className="container-site">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-foreground text-background"
                      : "text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section-light pb-40">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
              <div>
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="border-t border-border group"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <Link to={`/work/${project.slug}`} className="py-6 md:py-8 flex items-baseline justify-between block">
                      <div className="flex items-baseline gap-5">
                        <span className="text-[13px] font-semibold text-foreground-muted">0{i + 1}</span>
                        <h3
                          className="text-xl md:text-2xl font-bold transition-colors duration-300"
                          style={{
                            color: hoveredIndex === i
                              ? "hsl(var(--foreground))"
                              : hoveredIndex !== null
                              ? "hsl(0 0% 78%)"
                              : "hsl(var(--foreground))",
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <div className="hidden md:flex items-center gap-4 text-[13px] text-foreground-muted">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                        <motion.div
                          animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight size={14} />
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-border" />
              </div>

              <div className="hidden md:flex items-center justify-center relative sticky top-32" style={{ height: 500 }}>
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="absolute inset-0 rounded-lg"
                    style={{ background: project.gradient }}
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      scale: hoveredIndex === i ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
                {hoveredIndex === null && (
                  <div className="text-foreground-muted text-sm font-medium flex items-center gap-2">
                    <span className="font-display italic text-lg">±</span> Hover to preview
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Work;
