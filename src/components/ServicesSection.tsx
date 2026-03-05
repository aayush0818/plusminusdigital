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
    <section id="services" className="section-dark" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <motion.h2
          className="text-heading-lg mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="border-t border-foreground-light/15 pt-10 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-small text-accent-gold mb-4 block font-medium tracking-widest">
                0{i + 1}
              </span>
              <h3 className="text-subheading font-bold mb-4 transition-colors duration-300 group-hover:text-accent-gold">
                {service.title}
              </h3>
              <p className="text-body" style={{ color: "hsl(0,0%,50%)" }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
