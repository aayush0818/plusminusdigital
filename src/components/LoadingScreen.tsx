import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [count, setCount] = useState(-100);
  const [done, setDone] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("pm_loaded") === "1") {
      setShouldShow(false);
      setDone(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShouldShow(false);
      setDone(true);
      sessionStorage.setItem("pm_loaded", "1");
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1600;
    let id: number;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(-100 + eased * 100));
      if (p < 1) {
        id = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("pm_loaded", "1");
          document.body.style.overflow = "";
        }, 350);
      }
    };
    id = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center section-dark"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.86, 0, 0.07, 1] }}
        >
          <div className="flex items-end gap-4 md:gap-8">
            <span
              className="font-display italic"
              style={{
                fontSize: "clamp(80px, 18vw, 220px)",
                lineHeight: 1,
                color: "hsl(var(--accent-signal))",
              }}
            >
              ±
            </span>
            <div
              className="font-bold tabular-nums"
              style={{
                fontSize: "clamp(60px, 14vw, 180px)",
                lineHeight: 1,
                color: "hsl(0 0% 90%)",
                letterSpacing: "-0.04em",
              }}
            >
              {count >= 0 ? `+${count}` : count}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
