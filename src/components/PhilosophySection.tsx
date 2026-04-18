import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 20, suffix: "+", label: "Projects Shipped" },
  { number: 8, suffix: "+", label: "Industries Covered" },
  { number: 3, suffix: "×", label: "Avg. Conversion Lift" },
  { number: 98, suffix: "%", label: "On-Time Delivery" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
      {count}{suffix}
    </div>
  );
};

const PhilosophySection = () => {
  return (
    <section id="about" className="section-light relative overflow-hidden" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
      {/* Giant rotating ± watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 select-none animate-slow-rotate"
        style={{
          fontSize: "clamp(400px, 50vw, 900px)",
          lineHeight: 1,
          color: "hsl(var(--foreground) / 0.04)",
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
        }}
      >
        ±
      </div>

      <div className="container-site relative">
        {/* ± Animated divider */}
        <div className="mb-10 md:mb-16 flex items-center gap-4 md:gap-6">
          <motion.div
            className="flex-1 h-px"
            style={{ background: "hsl(var(--border))" }}
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="text-xs font-semibold tracking-widest text-foreground-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            − MINUS THE NOISE
          </motion.span>
          <motion.span
            className="font-display italic text-xl"
            style={{ color: "hsl(var(--accent-signal))" }}
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            ±
          </motion.span>
          <motion.span
            className="text-xs font-semibold tracking-widest text-foreground-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            PLUS THE RESULTS +
          </motion.span>
          <motion.div
            className="flex-1 h-px"
            style={{ background: "hsl(var(--border))" }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-display text-foreground mb-2 tabular-nums" style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                <CountUpInline target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-medium text-foreground-muted uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Slot-machine style number reveal — digits scroll into place
const CountUpInline = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const duration = 1600;
    let id: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.round(target * eased));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      <span style={{ color: "hsl(var(--accent-signal))" }}>{suffix}</span>
    </span>
  );
};

export default PhilosophySection;
