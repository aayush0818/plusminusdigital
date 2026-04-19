import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

const stats = [
  { number: "20+", label: "Projects Shipped" },
  { number: "8+", label: "Industries Covered" },
  { number: "3×", label: "Avg. Conversion Lift" },
  { number: "98%", label: "On-Time Delivery" },
];

const PhilosophySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // Map scroll progress to a stat index (0..3) within the central scroll band
      const clamped = Math.max(0, Math.min(0.999, (v - 0.15) / 0.7));
      setActive(Math.floor(clamped * stats.length));
    });
  }, [scrollYProgress]);

  return (
    <section
      id="about"
      ref={ref}
      className="section-dark relative"
      style={{ padding: "clamp(80px, 14vw, 200px) 0", borderTop: "1px solid hsl(0 0% 12%)" }}
    >
      <div className="container-site">
        <SectionCaption number="02" label="By the numbers" tone="dark" />
      </div>

      <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            animate={{
              opacity: active === i ? 1 : 0,
              y: active === i ? 0 : 30,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="font-display italic tabular-nums"
              style={{
                fontSize: "clamp(140px, 22vw, 380px)",
                lineHeight: 0.9,
                color: "hsl(0 0% 92%)",
                letterSpacing: "-0.04em",
              }}
            >
              {stat.number}
            </div>
            <div
              className="text-[11px] md:text-[13px] font-mono uppercase tracking-[0.3em] mt-6"
              style={{ color: "hsl(0 0% 45%)" }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}

        {/* Index dots */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {stats.map((_, i) => (
            <span
              key={i}
              className="block w-1 h-1 rounded-full transition-all duration-500"
              style={{
                background: active === i ? "hsl(0 0% 90%)" : "hsl(0 0% 25%)",
                transform: active === i ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
