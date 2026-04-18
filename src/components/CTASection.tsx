import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Halves slide apart from center as section enters
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["-50%", "0%"]);
  const symbolScale = useTransform(scrollYProgress, [0.1, 0.5, 0.7], [0.4, 1.2, 1]);
  const symbolRotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      {/* Split background — slides apart on scroll */}
      <div className="absolute inset-0 flex">
        <motion.div
          className="w-1/2 h-full"
          style={{ background: "hsl(0 0% 7%)", x: leftX }}
        />
        <motion.div
          className="w-1/2 h-full"
          style={{ background: "hsl(0 0% 11%)", x: rightX }}
        />
      </div>

      <div
        className="relative z-10 container-site flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center"
        style={{ padding: "clamp(80px, 12vw, 160px) 0" }}
      >
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

        <div className="flex flex-col items-center gap-6 md:gap-8">
          <motion.span
            className="font-display italic"
            style={{
              fontSize: "clamp(80px, 14vw, 200px)",
              lineHeight: 1,
              color: "hsl(var(--accent-signal))",
              scale: symbolScale,
              rotate: symbolRotate,
            }}
          >
            ±
          </motion.span>
          <MagneticButton strength={0.4}>
            <Link
              to="/contact"
              className="inline-block text-[13px] font-semibold px-10 py-4 rounded-full bg-white hover:bg-white/90 transition-colors"
              style={{ color: "hsl(var(--background-dark))" }}
            >
              Start a Project
            </Link>
          </MagneticButton>
        </div>

        <motion.div
          className="flex-1 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "hsl(0 0% 90%)",
            }}
          >
            <span className="font-display italic font-normal mr-2" style={{ color: "hsl(var(--accent-signal))" }}>+</span>
            Let's build{" "}
            <span className="font-display italic font-normal">what's next.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
