import { motion } from "framer-motion";

const plusItems = [
  "Add clarity",
  "Add structure",
  "Add conversion thinking",
  "Add brand presence",
];

const minusItems = [
  "Remove clutter",
  "Remove confusion",
  "Remove generic design",
  "Remove friction",
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <motion.h2
          className="text-heading-lg mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          The PlusMinus Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <motion.div
            className="pr-0 md:pr-16 pb-12 md:pb-0 md:border-r border-accent-gold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-heading font-bold mb-10 text-accent-gold">+</h3>
            <ul className="space-y-6">
              {plusItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="text-body text-foreground-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="pl-0 md:pl-16 pt-12 md:pt-0 border-t md:border-t-0 border-accent-gold"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-heading font-bold mb-10 text-accent-gold">−</h3>
            <ul className="space-y-6">
              {minusItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="text-body text-foreground-light"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
