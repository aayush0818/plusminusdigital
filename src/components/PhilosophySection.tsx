import { motion } from "framer-motion";

const plusItems = [
  "Clarity",
  "Structure",
  "Conversion thinking",
  "Brand presence",
];

const minusItems = [
  "Clutter",
  "Confusion",
  "Generic design",
  "Friction",
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-light" style={{ padding: "160px 0" }}>
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
            Philosophy
          </span>
        </motion.div>

        <motion.h2
          className="text-heading-lg mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          The <span className="font-display italic text-accent-gold">PlusMinus</span> Approach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <motion.div
            className="pr-0 md:pr-20 pb-16 md:pb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-[120px] leading-none font-display font-bold text-accent-gold mb-10 opacity-20">+</h3>
            <ul className="space-y-8">
              {plusItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="text-heading font-semibold flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="pl-0 md:pl-20 pt-16 md:pt-0 border-t md:border-t-0 md:border-l border-accent-gold/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-[120px] leading-none font-display font-bold text-foreground-light mb-10 opacity-10">−</h3>
            <ul className="space-y-8">
              {minusItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="text-heading font-semibold text-foreground-light flex items-center gap-4 line-through decoration-accent-gold/40"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-foreground-light/30 flex-shrink-0" />
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
