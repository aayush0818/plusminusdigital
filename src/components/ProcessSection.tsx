import { motion } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

const steps = [
  { num: "01", title: "Discovery", desc: "We dig into your business, your audience, and what you're trying to achieve." },
  { num: "02", title: "Strategy", desc: "We define structure, messaging, and positioning based on what the data tells us." },
  { num: "03", title: "Design", desc: "A visual system that communicates value and gets visitors to take action." },
  { num: "04", title: "Development", desc: "Clean, fast, scalable code. No shortcuts, no bloat." },
  { num: "05", title: "Launch", desc: "We deploy, fine-tune, and keep tracking the numbers." },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="section-dark"
      style={{ padding: "clamp(80px, 12vw, 160px) 0", borderTop: "1px solid hsl(0 0% 12%)" }}
    >
      <div className="container-site">
        <SectionCaption number="05" label="Process" tone="dark" />
      </div>

      <div className="container-site">
        <div className="horizontal-scroll-section gap-0 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-5 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="horizontal-scroll-item w-[280px] md:w-auto flex-shrink-0 md:flex-shrink pr-8 md:pr-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="text-[10px] font-mono uppercase tracking-[0.25em] mb-12 md:mb-20"
                style={{ color: "hsl(0 0% 35%)" }}
              >
                Nº {step.num}
              </div>
              <h3
                className="font-display italic mb-4"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "hsl(0 0% 92%)",
                }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 50%)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
