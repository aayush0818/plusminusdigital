import { motion } from "framer-motion";

const line1 = "MINUS THE NOISE • MINUS THE FLUFF • MINUS THE GUESSWORK • MINUS THE BLOAT • ";
const line2 = "PLUS THE CLARITY • PLUS THE CRAFT • PLUS THE RESULTS • PLUS THE SPEED • ";
const line3 = "± we don't decorate, we engineer ± ";

const Row = ({
  text,
  reverse,
  duration,
  className,
  style,
}: {
  text: string;
  reverse?: boolean;
  duration: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const repeated = Array.from({ length: 6 }).map((_, i) => text).join("");
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-block whitespace-nowrap ${className ?? ""}`}
        style={style}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </motion.div>
    </div>
  );
};

const MarqueeWall = () => {
  return (
    <section
      className="section-dark relative overflow-hidden border-y"
      style={{ borderColor: "hsl(0 0% 12%)", padding: "clamp(60px, 10vw, 120px) 0" }}
      aria-label="Brand manifesto"
    >
      <div className="flex flex-col gap-6 md:gap-10">
        <Row
          text={line1}
          duration={45}
          className="font-bold tracking-tight"
          style={{
            fontSize: "clamp(36px, 7vw, 96px)",
            color: "hsl(0 0% 22%)",
            letterSpacing: "-0.02em",
          }}
        />
        <Row
          text={line3}
          reverse
          duration={60}
          className="font-display italic"
          style={{
            fontSize: "clamp(44px, 9vw, 130px)",
            color: "hsl(var(--accent-signal))",
            lineHeight: 1,
          }}
        />
        <Row
          text={line2}
          duration={50}
          className="font-bold tracking-tight"
          style={{
            fontSize: "clamp(36px, 7vw, 96px)",
            color: "hsl(0 0% 88%)",
            letterSpacing: "-0.02em",
          }}
        />
      </div>
    </section>
  );
};

export default MarqueeWall;
