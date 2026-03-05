import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "Understanding the business and goals." },
  { number: "02", title: "Strategy", description: "Defining structure and messaging." },
  { number: "03", title: "Design", description: "Crafting a brand-led visual system." },
  { number: "04", title: "Development", description: "Building a fast, scalable website." },
  { number: "05", title: "Launch", description: "Deployment and optimization." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <motion.h2
          className="text-heading-lg mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Process
        </motion.h2>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <motion.div
            className="absolute top-6 left-0 right-0 h-px bg-accent-gold/30"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative pt-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-accent-gold -translate-y-1.5" />
                <span className="text-small text-accent-gold mb-3 block font-medium tracking-widest">{step.number}</span>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-small text-foreground-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="border-l-2 border-accent-gold pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-small text-accent-gold mb-1 block font-medium">{step.number}</span>
              <h3 className="text-lg font-bold mb-1">{step.title}</h3>
              <p className="text-small text-foreground-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
