import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden flex"
      style={{ minHeight: "70vh" }}
    >
      {/* Static split background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div style={{ background: "hsl(0 0% 7%)" }} />
        <div style={{ background: "hsl(var(--background))" }} />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Dark left */}
        <motion.div
          className="px-6 md:px-12 py-16 md:py-24 flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: "hsl(0 0% 45%)" }}>
            − Done settling for less
          </div>
          <h2
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "hsl(0 0% 92%)",
            }}
          >
            Tired of websites
            <br />
            that don't deliver?
          </h2>
        </motion.div>

        {/* Light right */}
        <motion.div
          className="px-6 md:px-12 py-16 md:py-24 flex flex-col items-start gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground-muted">
            + Let's build what's next
          </div>
          <h2
            className="font-display italic text-foreground"
            style={{
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            We build the
            <br />
            ones that do.
          </h2>
          <MagneticButton strength={0.4}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] px-8 py-4 rounded-full bg-foreground hover:opacity-90 transition-opacity"
              style={{ color: "hsl(var(--background))" }}
            >
              Start a Project →
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Center ± mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none font-display italic select-none mix-blend-difference"
        style={{
          fontSize: "clamp(120px, 18vw, 280px)",
          lineHeight: 1,
          color: "hsl(0 0% 90%)",
        }}
      >
        ±
      </div>
    </section>
  );
};

export default CTASection;
