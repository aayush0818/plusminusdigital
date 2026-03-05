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
    <section id="work" className="section-dark" style={{ padding: "180px 0" }}>
      <div className="container-site">
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.span
              className="text-label text-accent-gold block mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Selected Work
            </motion.span>
            <motion.h2
              className="text-heading-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Featured <span className="font-display italic text-accent-gold">Projects</span>
            </motion.h2>
          </div>
          <motion.a
            href="#work"
            className="hidden md:flex items-center gap-2 text-label text-accent-gold border-b border-accent-gold/30 pb-1 hover:border-accent-gold transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            All Projects <ArrowUpRight size={12} />
          </motion.a>
        </div>
      </div>

      {/* Full-width project cards */}
      <div className="container-wide mt-20">
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[21/9] object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Dark overlay that lifts on hover */}
                <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-colors duration-700" />

                {/* Project info overlay */}
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <div className="flex items-end justify-between w-full">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-label" style={{ color: "hsl(0 0% 60%)" }}>{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-accent-gold" />
                        <span className="text-label" style={{ color: "hsl(0 0% 40%)" }}>{project.year}</span>
                      </div>
                      <h3 className="text-heading font-display italic group-hover:text-accent-gold transition-colors duration-500" style={{ color: "hsl(40 7% 92%)" }}>
                        {project.title}
                      </h3>
                      <p className="text-body mt-2 max-w-md" style={{ color: "hsl(0 0% 55%)" }}>
                        {project.description}
                      </p>
                    </div>
                    <div className="hidden md:flex w-16 h-16 rounded-full border border-primary-foreground/20 items-center justify-center group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-500 flex-shrink-0">
                      <ArrowUpRight size={22} className="text-primary-foreground group-hover:text-accent-gold transition-colors duration-500" />
                    </div>
                  </div>
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
