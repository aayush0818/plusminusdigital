import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import corrxp1 from "@/assets/corrxp-1.png";
import uda1 from "@/assets/uda-1.png";
import sp2 from "@/assets/sp-2.png";
import tsr1 from "@/assets/tsr-1.png";

const categories = ["All", "Web Design", "Development", "Branding"];

const projects = [
  { title: "Trots Architects", slug: "trots-architects", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))" },
  { title: "UDA India", slug: "uda-india", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(30 30% 12%), hsl(40 40% 22%), hsl(20 25% 10%))", preview: uda1 },
  { title: "CORR XP", slug: "corrxp", category: "Development", year: "2025", gradient: "linear-gradient(135deg, hsl(20 60% 10%), hsl(25 70% 18%), hsl(15 40% 8%))", preview: corrxp1 },
  { title: "Spaces & Places", slug: "spaces-places", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(40 50% 15%), hsl(35 60% 25%), hsl(30 40% 12%))", preview: sp2 },
  { title: "The Smart Realtors", slug: "the-smart-realtors", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(220 50% 15%), hsl(210 60% 22%), hsl(225 40% 12%))", preview: tsr1 },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main>
        <section className="section-light pt-28 md:pt-40 pb-12 md:pb-20">
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
              style={{ fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="mt-4 md:mt-6 text-base md:text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A curated selection of projects where strategy, design, and engineering converge.
            </motion.p>
          </div>
        </section>

        <section className="section-light pb-6 md:pb-8">
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
                  className={`text-[13px] font-medium px-4 md:px-5 py-2 rounded-full transition-all duration-300 ${
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

        <section className="section-light pb-20 md:pb-40">
          <div className="container-site">
            {/* Mobile: card grid */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Link to={`/work/${project.slug}`} className="block group">
                    <div
                      className="w-full aspect-[16/9] rounded-lg mb-3 overflow-hidden"
                      style={{ background: project.gradient }}
                    >
                      {project.preview && <img src={project.preview} alt={project.title} className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                      <ArrowUpRight size={14} className="text-muted-foreground" />
                    </div>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[12px] text-muted-foreground">{project.category}</span>
                      <span className="text-[12px] text-muted-foreground">{project.year}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop: list + preview */}
            <div className="hidden md:grid grid-cols-2 gap-12">
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
                    <Link to={`/work/${project.slug}`} className="py-8 flex items-baseline justify-between block">
                      <div className="flex items-baseline gap-5">
                        <span className="text-[13px] font-semibold text-foreground-muted">0{i + 1}</span>
                        <h3
                          className="text-2xl font-bold transition-colors duration-300"
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
                      <div className="flex items-center gap-4 text-[13px] text-foreground-muted">
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

              <div className="flex items-center justify-center relative sticky top-32" style={{ height: 500 }}>
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="absolute inset-0 rounded-lg overflow-hidden"
                    style={{ background: project.gradient }}
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      scale: hoveredIndex === i ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {project.preview && <img src={project.preview} alt={project.title} className="w-full h-full object-cover" />}
                  </motion.div>
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
