import { motion } from "framer-motion";

const plusItems = ["Clarity", "Structure", "Conversion thinking", "Brand presence"];
const minusItems = ["Clutter", "Confusion", "Generic design", "Friction"];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-charcoal relative overflow-hidden" style={{ padding: "180px 0" }}>
      {/* Giant background text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <span className="font-display text-[30vw] leading-none whitespace-nowrap">±</span>
      </motion.div>

      <div className="container-site relative z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label text-accent-gold">Our Philosophy</span>
        </motion.div>

        <motion.h2
          className="text-heading-lg mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          The <span className="font-display italic text-accent-gold">PlusMinus</span> Approach
        </motion.h2>

        <motion.p
          className="text-body-lg max-w-xl mb-24"
          style={{ color: "hsl(0 0% 45%)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We add what elevates. We remove what dilutes. Every decision is intentional.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Plus side */}
          <div className="md:pr-16 md:border-r border-primary-foreground/10">
            <motion.div
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-display text-6xl text-accent-gold">+</span>
              <span className="text-label text-accent-gold">What we add</span>
            </motion.div>

            <div className="space-y-0">
              {plusItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="group border-t border-primary-foreground/8 py-6 flex items-center justify-between"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <span className="text-subheading font-medium group-hover:text-accent-gold transition-colors duration-300">
                    {item}
                  </span>
                  <span className="text-label text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    0{i + 1}
                  </span>
                </motion.div>
              ))}
              <div className="border-t border-primary-foreground/8" />
            </div>
          </div>

          {/* Minus side */}
          <div className="md:pl-16 mt-16 md:mt-0">
            <motion.div
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-display text-6xl" style={{ color: "hsl(0 0% 25%)" }}>−</span>
              <span className="text-label" style={{ color: "hsl(0 0% 35%)" }}>What we remove</span>
            </motion.div>

            <div className="space-y-0">
              {minusItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="group border-t border-primary-foreground/8 py-6 flex items-center justify-between"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <span
                    className="text-subheading font-medium line-through decoration-accent-gold/30 decoration-1"
                    style={{ color: "hsl(0 0% 30%)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
              <div className="border-t border-primary-foreground/8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
