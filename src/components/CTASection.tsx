import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ minHeight: "400px" }}>
      {/* Split background */}
      <div className="absolute inset-0 md:grid md:grid-cols-2" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="hidden md:block" style={{ background: "hsl(0 0% 7%)" }} />
        <div className="hidden md:block" style={{ background: "hsl(0 0% 11%)" }} />
      </div>

      <div className="relative z-10 container-site flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
        {/* Left: Minus */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base md:text-xl font-medium" style={{ color: "hsl(0 0% 40%)" }}>
            <span className="font-display italic mr-2" style={{ color: "hsl(0 0% 30%)" }}>−</span>
            Done settling for less?
          </p>
        </motion.div>

        {/* Center: ± and CTA */}
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-display italic text-5xl md:text-8xl" style={{ color: "hsl(0 0% 25%)" }}>±</span>
          <Link
            to="/contact"
            className="inline-block text-[13px] font-semibold px-10 py-4 rounded-full bg-white hover:bg-white/90 transition-colors"
            style={{ color: "hsl(var(--background-dark))" }}
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Right: Plus */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}
          >
            <span className="font-display italic font-normal mr-2" style={{ color: "hsl(0 0% 50%)" }}>+</span>
            Let's build{" "}
            <span className="font-display italic font-normal">what's next.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
