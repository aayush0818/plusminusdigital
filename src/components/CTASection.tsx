import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ minHeight: "500px" }}>
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div style={{ background: "hsl(0 0% 7%)" }} />
        <div style={{ background: "hsl(0 0% 11%)" }} />
      </div>

      <div className="relative z-10 container-site flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center" style={{ padding: "160px 0" }}>
        {/* Left: Minus */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg md:text-xl font-medium" style={{ color: "hsl(0 0% 40%)" }}>
            Done with mediocre websites?
          </p>
        </motion.div>

        {/* Center: ± and CTA */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-display italic text-6xl md:text-8xl" style={{ color: "hsl(0 0% 25%)" }}>±</span>
          <a
            href="mailto:hello@plusminusdigital.com"
            className="inline-block text-[13px] font-semibold px-10 py-4 rounded-full bg-white hover:bg-white/90 transition-colors"
            style={{ color: "hsl(var(--background-dark))" }}
          >
            Start a Project
          </a>
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
            style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}
          >
            Let's build something{" "}
            <span className="font-display italic font-normal">better.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
