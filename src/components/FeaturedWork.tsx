import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const projects = [
  {
    image: work1,
    title: "Trots Architects",
    description: "A digital presence designed to match architectural precision.",
  },
  {
    image: work2,
    title: "Refinnd Restaurant",
    description: "An elegant web experience that elevates a premium dining brand.",
  },
  {
    image: work3,
    title: "Overchends Real Estate",
    description: "A luxury property platform built for trust and conversion.",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <motion.h2
          className="text-heading-lg mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-lg mb-8">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-heading font-bold transition-colors duration-300 group-hover:text-accent-gold">
                {project.title}
              </h3>
              <p className="text-body text-foreground-light mt-3">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
