import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 50, suffix: "+", label: "Projects Delivered" },
  { number: 12, suffix: "", label: "Years Experience" },
  { number: 3, suffix: "×", label: "Avg. Conversion Lift" },
  { number: 98, suffix: "%", label: "Client Retention" },
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
    <div ref={ref} className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
      {count}{suffix}
    </div>
  );
};

const PhilosophySection = () => {
  return (
    <section id="about" className="section-light" style={{ padding: "100px 0" }}>
      <div className="container-site">
        {/* ± divider above stats */}
        <div className="pm-divider mb-16">
          <span className="font-display italic text-xl text-foreground-muted">±</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <CountUp target={stat.number} suffix={stat.suffix} />
              <div className="text-sm font-medium text-foreground-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
