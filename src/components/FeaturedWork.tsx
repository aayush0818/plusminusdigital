import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import corrxp1 from "@/assets/corrxp-1.png";
import uda1 from "@/assets/uda-1.png";
import sp2 from "@/assets/sp-2.png";
import sr1 from "@/assets/sr-1.png";
import trotsLaptopHero from "@/assets/trots-laptop-hero.png";

const projects = [
  {
    title: "Trots Architects",
    slug: "trots-architects",
    category: "Architecture",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))",
    preview: trotsLaptopHero,
    minus: "outdated web presence",
    plus: "a site that matches their craft",
  },
  {
    title: "CORR XP",
    slug: "corrxp",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(20 60% 10%), hsl(25 70% 18%), hsl(15 40% 8%))",
    preview: corrxp1,
    minus: "no digital identity",
    plus: "a brand built for scale",
  },
  {
    title: "UDA India",
    slug: "uda-india",
    category: "Architecture & Interior Design",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(30 30% 12%), hsl(40 40% 22%), hsl(20 25% 10%))",
    preview: uda1,
    minus: "slow legacy site",
    plus: "sub-2s load times",
  },
  {
    title: "Spaces & Places",
    slug: "spaces-places",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(40 50% 15%), hsl(35 60% 25%), hsl(30 40% 12%))",
    preview: sp2,
    minus: "low online visibility",
    plus: "3x more inquiries",
  },
  {
    title: "Shharda Reliable",
    slug: "shharda-reliable",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(40 60% 12%), hsl(45 50% 20%), hsl(35 40% 10%))",
    preview: sr1,
    minus: "generic manufacturer site",
    plus: "a presence that builds trust",
  },
];

const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="section-light" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
      <div className="container-site">
        <motion.div
          className="flex items-end justify-between mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
              Selected Work
            </p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold text-foreground">
              Featured{" "}
              <span className="font-display italic font-normal">Projects</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-foreground-muted hover:text-foreground transition-colors"
          >
            All Projects <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Mobile: card layout with gradient previews */}
        <div className="md:hidden flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/work/${project.slug}`} className="block group">
                <div
                  className="w-full aspect-[16/9] rounded-lg mb-3 overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  {project.preview && <img src={project.preview} alt={project.title} className="w-full h-full object-cover" />}
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[13px] font-semibold text-muted-foreground">0{i + 1}</span>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground" />
                </div>
                <div className="flex gap-3 mt-1 ml-7">
                  <span className="text-[12px] text-muted-foreground">{project.category}</span>
                  <span className="text-[12px] text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-7">
                  <span className="text-[11px] line-through opacity-50 text-muted-foreground">− {project.minus}</span>
                  <span className="text-[11px] font-semibold text-foreground-muted">+ {project.plus}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: list + hover preview */}
        <div className="hidden md:grid grid-cols-2 gap-12">
          <div>
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="border-t border-border group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/work/${project.slug}`} className="py-10 flex flex-col block">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-6">
                      <span
                        className="text-[13px] font-semibold transition-colors duration-300"
                        style={{
                          color: hoveredIndex === i ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                        }}
                      >
                        0{i + 1}
                      </span>
                      <h3
                        className="font-display italic transition-colors duration-300"
                        style={{
                          fontSize: "clamp(28px, 4vw, 56px)",
                          lineHeight: 1,
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
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
                        animate={{ opacity: hoveredIndex === i ? 1 : 0, scale: hoveredIndex === i ? 1 : 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={14} className="text-foreground" />
                      </motion.div>
                    </div>
                  </div>
                  {hoveredIndex === i && (
                    <motion.div
                      className="flex items-center gap-3 ml-12 mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[12px] line-through opacity-50 text-foreground-muted">− {project.minus}</span>
                      <span className="text-[12px] font-semibold text-foreground-muted">+ {project.plus}</span>
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>

          <div className="flex items-center justify-center relative" style={{ minHeight: 400 }}>
            {projects.map((project, i) => (
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

        {/* Mobile "All Projects" link */}
        <Link
          to="/work"
          className="md:hidden mt-8 flex items-center justify-center gap-2 text-[13px] font-semibold text-foreground-muted hover:text-foreground transition-colors"
        >
          All Projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
