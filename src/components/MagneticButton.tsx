import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "div";
}

const MagneticButton = ({ children, className, strength = 0.35, as = "div" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setPos({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
    },
    [strength]
  );

  const reset = () => setPos({ x: 0, y: 0 });

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.4 }}
      className={className}
    >
      {children}
    </Comp>
  );
};

export default MagneticButton;
