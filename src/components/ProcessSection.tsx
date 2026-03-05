import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business, audience, and goals through research and deep conversation." },
  { num: "02", title: "Strategy", desc: "Defining the structure, messaging, and positioning that will drive results." },
  { num: "03", title: "Design", desc: "Crafting a brand-led visual system that feels premium and converts." },
  { num: "04", title: "Development", desc: "Building a fast, scalable, and meticulously coded website." },
  { num: "05", title: "Launch", desc: "Deployment, optimization, and ongoing performance refinement." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-dark relative overflow-hidden grain-overlay" style={{ padding: "180px 0" }}>
      <div className="container-site relative z-10">
        <motion.span
          className="text-label text-accent-gold block mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.span>

        <motion.h2
          className="text-heading-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          A proven <span className="font-display italic text-accent-gold">process</span>
        </motion.h2>

        <motion.p
          className="text-body-lg max-w-xl mb-24"
          style={{ color: "hsl(0 0% 45%)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Every project follows five deliberate phases. No shortcuts. No guesswork.
        </motion.p>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="group border-t border-primary-foreground/8 py-10 md:py-14 grid grid-cols-12 gap-4 md:gap-8 items-baseline cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="col-span-2 md:col-span-1 text-label text-accent-gold">
                {step.num}
              </span>
              <h3 className="col-span-10 md:col-span-3 text-subheading font-display italic group-hover:text-accent-gold transition-colors duration-400" style={{ color: "hsl(40 7% 85%)" }}>
                {step.title}
              </h3>
              <p className="col-span-12 md:col-span-8 text-body mt-2 md:mt-0" style={{ color: "hsl(0 0% 40%)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-primary-foreground/8" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
