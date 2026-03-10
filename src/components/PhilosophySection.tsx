import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "12", label: "Years Experience" },
  { number: "3×", label: "Avg. Conversion Lift" },
  { number: "98%", label: "Client Retention" },
];

const PhilosophySection = () => {
  return (
    <section id="about" className="section-light" style={{ padding: "100px 0" }}>
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
