import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business, audience, and goals through deep research and stakeholder interviews." },
  { num: "02", title: "Strategy", desc: "Defining structure, messaging, and positioning based on data-driven insights." },
  { num: "03", title: "Design", desc: "Crafting a visual system that communicates value and converts visitors." },
  { num: "04", title: "Development", desc: "Building fast, scalable, and meticulously engineered digital products." },
  { num: "05", title: "Launch", desc: "Deployment, optimization, and continuous measurement of results." },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="process" className="section-dark border-t" style={{ borderColor: "hsl(0 0% 15%)", padding: "160px 0" }} ref={containerRef}>
      <div className="container-site">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 40%)" }}>
            How We Work
          </p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold" >
            <span style={{ color: "hsl(0 0% 90%)" }}>Our </span>
            <span className="font-display italic font-normal" style={{ color: "hsl(0 0% 90%)" }}>Process</span>
          </h2>
        </motion.div>

        {/* Connecting line */}
        <div className="relative mb-16 h-px" style={{ background: "hsl(0 0% 15%)" }}>
          <motion.div className="absolute top-0 left-0 h-full" style={{ width: lineWidth, background: "hsl(0 0% 35%)" }} />
        </div>

        {/* Horizontal scroll strip */}
        <div className="horizontal-scroll-section gap-0 md:gap-0 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="horizontal-scroll-item w-[280px] md:w-auto flex-shrink-0 md:flex-shrink pr-8 md:pr-0 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* ± marker */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display italic text-lg" style={{ color: "hsl(0 0% 30%)" }}>±</span>
                <div className="h-px flex-1" style={{ background: "hsl(0 0% 18%)" }} />
              </div>
              <div
                className="text-5xl md:text-6xl font-bold tracking-tight mb-4 transition-colors duration-500"
                style={{ color: "hsl(0 0% 20%)" }}
              >
                {step.num}
              </div>
              <div className="text-base font-semibold mb-3" style={{ color: "hsl(0 0% 80%)" }}>
                {step.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
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
