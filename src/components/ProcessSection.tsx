import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business, audience, and goals." },
  { num: "02", title: "Strategy", desc: "Defining structure, messaging, and positioning." },
  { num: "03", title: "Design", desc: "Crafting a visual system that converts." },
  { num: "04", title: "Development", desc: "Building fast, scalable, and clean." },
  { num: "05", title: "Launch", desc: "Deployment and ongoing optimization." },
];

const ProcessSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="process" className="section-light border-t border-border" style={{ padding: "160px 0" }}>
      <div className="container-site">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
            How We Work
          </p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold text-foreground">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="cursor-pointer group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="text-5xl md:text-6xl font-bold tracking-tight transition-colors duration-300 mb-4"
                style={{
                  color: hovered === i ? "hsl(var(--foreground))" : "hsl(var(--border))",
                }}
              >
                {step.num}
              </div>
              <div className="text-base font-semibold text-foreground mb-2">
                {step.title}
              </div>
              <motion.div
                className="text-sm text-foreground-muted leading-relaxed overflow-hidden"
                initial={false}
                animate={{
                  height: hovered === i ? "auto" : 0,
                  opacity: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {step.desc}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
