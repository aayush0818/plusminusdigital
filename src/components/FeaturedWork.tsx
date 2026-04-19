import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import corrxp1 from "@/assets/corrxp-1.png";
import uda1 from "@/assets/uda-1.png";
import sp2 from "@/assets/sp-2.png";
import trotsLaptopHero from "@/assets/trots-laptop-hero.png";
import SectionCaption from "@/components/SectionCaption";

const projects = [
  {
    title: "Trots Architects",
    slug: "trots-architects",
    category: "Architecture",
    year: "2025",
    preview: trotsLaptopHero,
  },
  {
    title: "CORR XP",
    slug: "corrxp",
    category: "Design & Development",
    year: "2025",
    preview: corrxp1,
  },
  {
    title: "UDA India",
    slug: "uda-india",
    category: "Architecture & Interiors",
    year: "2025",
    preview: uda1,
  },
  {
    title: "Spaces & Places",
    slug: "spaces-places",
    category: "Design & Development",
    year: "2025",
    preview: sp2,
  },
];

const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="work" className="section-light" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
      <div className="container-site">
        <SectionCaption number="03" label="Selected Work" />

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/work/${project.slug}`} className="block">
                <div className="w-full aspect-[16/10] overflow-hidden mb-4 bg-muted">
                  <img src={project.preview} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display italic" style={{ fontSize: "44px", lineHeight: 1, color: "hsl(var(--foreground))" }}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-muted">
                  <span>Nº 0{i + 1}</span>
                  <span>·</span>
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: list-as-art with image-follows-cursor */}
        <div
          ref={containerRef}
          className="hidden md:block relative"
          onMouseMove={handleMove}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="border-t border-border"
              onMouseEnter={() => setHoveredIndex(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/work/${project.slug}`} className="block py-8 lg:py-10 group">
                <motion.h3
                  className="font-display italic"
                  style={{
                    fontSize: "clamp(56px, 8vw, 140px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    color:
                      hoveredIndex === i
                        ? "hsl(var(--foreground))"
                        : hoveredIndex !== null
                        ? "hsl(0 0% 80%)"
                        : "hsl(var(--foreground))",
                  }}
                  animate={{
                    x: hoveredIndex === i ? 40 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {project.title}
                </motion.h3>
                <motion.div
                  className="flex items-center gap-3 mt-3 ml-1 text-[10px] font-mono uppercase tracking-[0.25em] text-foreground-muted"
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    x: hoveredIndex === i ? 40 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span>Nº 0{i + 1}</span>
                  <span>—</span>
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                  <ArrowUpRight size={12} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-border" />

          {/* Image that follows cursor */}
          {hoveredIndex !== null && (
            <motion.div
              className="absolute pointer-events-none overflow-hidden shadow-2xl"
              style={{
                left: mouse.x,
                top: mouse.y,
                width: 380,
                height: 240,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={projects[hoveredIndex].preview}
                alt={projects[hoveredIndex].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>

        <div className="mt-12 md:mt-16 flex justify-end">
          <Link
            to="/work"
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground-muted hover:text-foreground transition-colors"
          >
            All Projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
