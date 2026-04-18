import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9997] origin-left pointer-events-none"
      style={{
        scaleX,
        backgroundColor: "hsl(var(--accent-signal))",
      }}
    />
  );
};

export default ScrollProgress;
