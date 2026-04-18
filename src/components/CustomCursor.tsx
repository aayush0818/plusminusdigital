import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [snapPos, setSnapPos] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rotationRef = useRef(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    let id: number;
    const loop = () => {
      rotationRef.current = (rotationRef.current + 0.4) % 360;
      setRotation(rotationRef.current);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [isTouchDevice]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]") as HTMLElement | null;
    if (interactive) {
      setIsHovering(true);
      // Magnetic snap to interactive element center
      const rect = interactive.getBoundingClientRect();
      // Only snap to small-ish targets so big sections don't yank the cursor
      if (rect.width < 220 && rect.height < 120) {
        setSnapPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      } else {
        setSnapPos(null);
      }
    } else {
      setIsHovering(false);
      setSnapPos(null);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setSnapPos(null);
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

  const ringX = (snapPos?.x ?? position.x) - 28;
  const ringY = (snapPos?.y ?? position.y) - 28;

  return (
    <>
      {/* Small dot cursor (always visible) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 32, mass: 0.4 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* ± symbol cursor (on hover) — magnetic snap + rotate */}
      <AnimatePresence>
        {isHovering && isVisible && (
          <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: ringX,
              y: ringY,
              scale: 1,
              opacity: 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 26, mass: 0.5 }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{
                border: "1px solid hsl(var(--accent-signal) / 0.6)",
                background: "hsl(var(--accent-signal) / 0.08)",
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <span
                className="font-display italic text-xl select-none"
                style={{ color: "hsl(var(--accent-signal))" }}
              >
                ±
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
