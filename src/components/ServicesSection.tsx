import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    description: "Positioning and digital foundations that give your brand clarity and direction in a crowded market.",
    tags: ["Brand Identity", "Positioning", "Research"],
  },
  {
    num: "02",
    title: "Website Design",
    description: "Visually refined, conversion-focused designs that communicate your brand's value at first glance.",
    tags: ["UI/UX", "Interaction", "Prototyping"],
  },
  {
    num: "03",
    title: "Development",
    description: "Fast, scalable, and meticulously built websites using modern technologies and clean architecture.",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    num: "04",
    title: "Conversion Optimization",
    description: "Data-informed improvements that turn visitors into customers and grow your revenue predictably.",
    tags: ["Analytics", "A/B Testing", "CRO"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-light" style={{ padding: "180px 0" }}>
      <div className="container-site">
        <motion.span
          className="text-label block mb-6"
          style={{ color: "hsl(var(--accent-gold))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.span>

        <div className="flex items-end justify-between mb-24">
          <motion.h2
            className="text-heading-lg max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Services built around{" "}
            <span className="font-display italic text-accent-gold">results</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`group relative p-10 md:p-12 cursor-pointer transition-colors duration-500 hover:bg-muted/50 ${
                i < 2 ? "border-b border-border" : ""
              } ${i % 2 === 0 ? "md:border-r border-border" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-label text-accent-gold">{service.num}</span>
                <ArrowUpRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent-gold group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="text-heading font-medium mb-4 group-hover:text-accent-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-body text-foreground-light mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-label px-3 py-1.5 rounded-full border border-border text-foreground-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
