import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We dig into your business, your audience, and what you're trying to achieve through research and honest conversations.", minus: "Assumptions", plus: "Clarity" },
  { num: "02", title: "Strategy", desc: "We define the structure, messaging, and positioning based on what the data actually tells us.", minus: "Guesswork", plus: "Direction" },
  { num: "03", title: "Design", desc: "We build a visual system that communicates value and gets visitors to take action.", minus: "Clutter", plus: "Intent" },
  { num: "04", title: "Development", desc: "We write clean, fast, scalable code. No shortcuts, no bloat.", minus: "Bloat", plus: "Performance" },
  { num: "05", title: "Launch", desc: "We deploy, fine-tune, and keep tracking the numbers to make sure it works.", minus: "Uncertainty", plus: "Momentum" },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="process" className="section-dark border-t" style={{ borderColor: "hsl(0 0% 15%)", padding: "clamp(80px, 12vw, 160px) 0" }} ref={containerRef}>
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
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold">
            <span style={{ color: "hsl(0 0% 90%)" }}>Our </span>
            <span className="font-display italic font-normal" style={{ color: "hsl(0 0% 90%)" }}>Process</span>
          </h2>
        </motion.div>

        {/* Connecting line */}
        <div className="relative mb-12 md:mb-16 h-px" style={{ background: "hsl(0 0% 15%)" }}>
          <motion.div className="absolute top-0 left-0 h-full" style={{ width: lineWidth, background: "hsl(0 0% 35%)" }} />
        </div>

        {/* Mobile: vertical stack. Desktop: horizontal grid */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none md:hidden" style={{ background: "linear-gradient(to right, hsl(0 0% 7%), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none md:hidden" style={{ background: "linear-gradient(to left, hsl(0 0% 7%), transparent)" }} />

          <div className="horizontal-scroll-section gap-0 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="horizontal-scroll-item w-[300px] md:w-auto flex-shrink-0 md:flex-shrink pr-8 md:pr-0 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display italic text-lg" style={{ color: "hsl(0 0% 30%)" }}>±</span>
                  <div className="h-px flex-1" style={{ background: "hsl(0 0% 18%)" }} />
                </div>
                <div
                  className="text-4xl md:text-6xl font-bold tracking-tight mb-4 transition-colors duration-500"
                  style={{ color: "hsl(0 0% 20%)" }}
                >
                  {step.num}
                </div>
                <div className="text-base font-semibold mb-3" style={{ color: "hsl(0 0% 80%)" }}>
                  {step.title}
                </div>
                {/* ± micro-pair */}
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-xs line-through opacity-50" style={{ color: "hsl(0 0% 50%)" }}>
                    − {step.minus}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "hsl(0 0% 70%)" }}>
                    + {step.plus}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
