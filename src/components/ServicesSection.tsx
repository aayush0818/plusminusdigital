import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Strategy",
    description: "Positioning and digital foundations that give your brand clarity and direction.",
  },
  {
    title: "Website Design",
    description: "Visually refined, conversion-focused designs that communicate your brand's value.",
  },
  {
    title: "Development",
    description: "Fast, scalable, and meticulously built websites using modern technologies.",
  },
  {
    title: "Conversion Optimization",
    description: "Data-informed improvements that turn visitors into customers and grow revenue.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-light" style={{ padding: "160px 0" }}>
      <div className="container-site">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-accent-gold" />
          <span className="text-small tracking-[0.3em] uppercase text-accent-gold font-medium">
            What We Do
          </span>
        </motion.div>

        <motion.h2
          className="text-heading-lg mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Services
        </motion.h2>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group border-t border-border py-12 flex items-start justify-between gap-8 cursor-pointer hover:pl-4 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-8">
                <span className="text-small text-accent-gold font-medium tracking-widest pt-2 flex-shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-heading font-bold transition-colors duration-300 group-hover:text-accent-gold">
                    {service.title}
                  </h3>
                  <p className="text-body text-foreground-light mt-3 max-w-md">{service.description}</p>
                </div>
              </div>
              <motion.div
                className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-foreground text-lg">→</span>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
