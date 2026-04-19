import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
    setIsHovering(!!interactive);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice, handleMouseMove, handleMouseOver, handleMouseLeave]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 35, mass: 0.3 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>

      {/* ± text on hover */}
      <AnimatePresence>
        {isHovering && isVisible && (
          <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: position.x - 12,
              y: position.y - 14,
              scale: 1,
              opacity: 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.4 }}
          >
            <span
              className="font-display italic select-none"
              style={{ fontSize: "28px", color: "hsl(0 0% 100%)", lineHeight: 1 }}
            >
              ±
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
