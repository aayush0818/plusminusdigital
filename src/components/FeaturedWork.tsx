import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import corrxp1 from "@/assets/corrxp-1.png";
import uda1 from "@/assets/uda-1.png";
import sp2 from "@/assets/sp-2.png";
import tsr1 from "@/assets/tsr-1.png";
import sr1 from "@/assets/sr-1.png";
import ii1 from "@/assets/ii-1.png";
import id1 from "@/assets/id-1.png";

const projects = [
  {
    title: "Trots Architects",
    slug: "trots-architects",
    category: "Architecture",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))",
  },
  {
    title: "UDA India",
    slug: "uda-india",
    category: "Architecture & Interior Design",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(30 30% 12%), hsl(40 40% 22%), hsl(20 25% 10%))",
    preview: uda1,
  },
  {
    title: "CORR XP",
    slug: "corrxp",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(20 60% 10%), hsl(25 70% 18%), hsl(15 40% 8%))",
    preview: corrxp1,
  },
  {
    title: "Spaces & Places",
    slug: "spaces-places",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(40 50% 15%), hsl(35 60% 25%), hsl(30 40% 12%))",
    preview: sp2,
  },
  {
    title: "The Smart Realtors",
    slug: "the-smart-realtors",
    category: "Landing Page Design",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(220 50% 15%), hsl(210 60% 22%), hsl(225 40% 12%))",
    preview: tsr1,
  },
  {
    title: "Shharda Reliable",
    slug: "shharda-reliable",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(40 60% 12%), hsl(45 50% 20%), hsl(35 40% 10%))",
    preview: sr1,
  },
  {
    title: "Innovators Interiors",
    slug: "innovators-interiors",
    category: "Web Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(30 25% 15%), hsl(35 30% 22%), hsl(25 20% 10%))",
    preview: ii1,
  },
  {
    title: "Interior Dictionary",
    slug: "interior-dictionary",
    category: "Web App Design & Development",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(30 15% 12%), hsl(35 20% 18%), hsl(25 10% 8%))",
    preview: id1,
  },
];

const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="section-light" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
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
                <Link to={`/work/${project.slug}`} className="py-10 flex items-baseline justify-between block">
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
                      className="text-3xl font-bold transition-colors duration-300"
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
