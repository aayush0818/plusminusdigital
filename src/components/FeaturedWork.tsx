import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Trots Architects",
    slug: "trots-architects",
    category: "Architecture",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))",
  },
  {
    title: "Refinnd Restaurant",
    slug: "refinnd-restaurant",
    category: "Hospitality",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(25 40% 22%), hsl(15 35% 18%), hsl(35 30% 12%))",
  },
  {
    title: "Overchends Real Estate",
    slug: "overchends-real-estate",
    category: "Real Estate",
    year: "2024",
    gradient: "linear-gradient(135deg, hsl(150 15% 15%), hsl(170 20% 20%), hsl(140 15% 12%))",
  },
  {
    title: "Velora Finance",
    slug: "velora-finance",
    category: "Fintech",
    year: "2024",
    gradient: "linear-gradient(135deg, hsl(260 25% 18%), hsl(280 20% 22%), hsl(250 20% 14%))",
  },
];

const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="section-light" style={{ padding: "160px 0" }}>
      <div className="container-site">
        <motion.div
          className="flex items-end justify-between mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
              Selected Work
            </p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold text-foreground">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
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
                <Link to={`/work/${project.slug}`} className="py-8 md:py-10 flex items-baseline justify-between block">
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
                      className="text-2xl md:text-3xl font-bold transition-colors duration-300"
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
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
                      animate={{ opacity: hoveredIndex === i ? 1 : 0, scale: hoveredIndex === i ? 1 : 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={14} className="text-foreground" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>

          <div className="hidden md:flex items-center justify-center relative" style={{ minHeight: 400 }}>
            {projects.map((project, i) => (
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
  );
};

export default FeaturedWork;
