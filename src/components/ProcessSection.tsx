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
    <section id="process" className="section-dark" style={{ padding: "160px 0" }}>
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
            How We Work
          </span>
        </motion.div>

        <motion.h2
          className="text-heading-lg mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Process
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group border-t border-primary-foreground/10 py-12 grid grid-cols-12 gap-4 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="col-span-2 md:col-span-1 text-small text-accent-gold font-medium tracking-widest pt-1">
                {step.number}
              </span>
              <h3 className="col-span-5 md:col-span-4 text-subheading font-bold group-hover:text-accent-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="col-span-5 md:col-span-7 text-body" style={{ color: "hsl(0,0%,45%)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-primary-foreground/10" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
