import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const projects = [
  {
    image: work1,
    title: "Trots Architects",
    description: "A digital presence designed to match architectural precision.",
    category: "Architecture",
    year: "2025",
  },
  {
    image: work2,
    title: "Refinnd Restaurant",
    description: "An elegant web experience that elevates a premium dining brand.",
    category: "Hospitality",
    year: "2025",
  },
  {
    image: work3,
    title: "Overchends Real Estate",
    description: "A luxury property platform built for trust and conversion.",
    category: "Real Estate",
    year: "2024",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="section-dark" style={{ padding: "160px 0" }}>
      <div className="container-site">
        <div className="flex items-end justify-between mb-24">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-px bg-accent-gold" />
              <span className="text-small tracking-[0.3em] uppercase text-accent-gold font-medium">
                Selected Work
              </span>
            </motion.div>
            <motion.h2
              className="text-heading-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Featured <span className="font-display italic text-accent-gold">Projects</span>
            </motion.h2>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-sm mb-10 relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background-dark/0 group-hover:bg-background-dark/30 transition-colors duration-500 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="w-20 h-20 rounded-full border border-primary-foreground/50 flex items-center justify-center">
                      <ArrowUpRight size={28} className="text-primary-foreground" />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-8">
                <div>
                  <h3 className="text-heading font-bold transition-colors duration-300 group-hover:text-accent-gold">
                    {project.title}
                  </h3>
                  <p className="text-body mt-3" style={{ color: "hsl(0,0%,50%)" }}>
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-6 flex-shrink-0 pt-2">
                  <span className="text-small tracking-widest uppercase" style={{ color: "hsl(0,0%,40%)" }}>
                    {project.category}
                  </span>
                  <span className="text-small" style={{ color: "hsl(0,0%,30%)" }}>
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
