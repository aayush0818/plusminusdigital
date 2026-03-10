import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Trots Architects",
    category: "Architecture",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(220 25% 18%), hsl(200 30% 25%), hsl(180 20% 15%))",
    size: "large",
  },
  {
    title: "Refinnd Restaurant",
    category: "Hospitality",
    year: "2025",
    gradient: "linear-gradient(135deg, hsl(25 40% 22%), hsl(15 35% 18%), hsl(35 30% 12%))",
    size: "small",
  },
  {
    title: "Overchends Real Estate",
    category: "Real Estate",
    year: "2024",
    gradient: "linear-gradient(135deg, hsl(150 15% 15%), hsl(170 20% 20%), hsl(140 15% 12%))",
    size: "small",
  },
  {
    title: "Velora Finance",
    category: "Fintech",
    year: "2024",
    gradient: "linear-gradient(135deg, hsl(260 25% 18%), hsl(280 20% 22%), hsl(250 20% 14%))",
    size: "large",
  },
];

const FeaturedWork = () => {
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
          <a
            href="#work"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-foreground-muted hover:text-foreground transition-colors"
          >
            All Projects <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, i) => {
            const isLarge = project.size === "large";
            return (
              <motion.a
                key={project.title}
                href="#"
                className={`group block ${isLarge ? "md:col-span-7" : "md:col-span-5"}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div
                  className="relative overflow-hidden rounded-lg"
                  style={{
                    background: project.gradient,
                    aspectRatio: isLarge ? "16/10" : "4/3",
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: project.gradient }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={16} style={{ color: "hsl(0 0% 80%)" }} />
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground-muted transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[13px] text-foreground-muted">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
