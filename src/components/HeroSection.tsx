import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "@/assets/logo-mark.png";

const clients = [
  "Stripe", "Vercel", "Linear", "Notion", "Figma", "Webflow", "Framer", "Arc",
  "Stripe", "Vercel", "Linear", "Notion", "Figma", "Webflow", "Framer", "Arc",
];

const rotatingWords = ["growth.", "revenue.", "conversions.", "results.", "impact."];

const minusWords = ["noise", "clutter", "guesswork", "bloat", "complexity"];
const plusWords = ["clarity", "results", "precision", "speed", "impact"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [dualityIndex, setDualityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDualityIndex((prev) => (prev + 1) % minusWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-dark min-h-screen relative flex flex-col overflow-hidden">
      {/* Logo watermark instead of ± text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <img
          src={logoMark}
          alt=""
          className="w-[40vw] max-w-[500px] opacity-[0.04]"
          style={{ filter: "invert(1)" }}
        />
      </div>

      <div className="flex-1 flex items-center container-site pt-32 pb-20 relative z-10">
        <div className="w-full">
          {/* Duality tagline */}
          <motion.div
            className="flex items-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>
                Minus the
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={minusWords[dualityIndex]}
                  className="text-[13px] font-semibold tracking-[0.2em] uppercase text-strikethrough"
                  style={{ color: "hsl(0 0% 35%)" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {minusWords[dualityIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <img src={logoMark} alt="" className="h-4 w-auto opacity-30" style={{ filter: "invert(1)" }} />
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>
                Plus the
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={plusWords[dualityIndex]}
                  className="text-[13px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "hsl(0 0% 70%)" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {plusWords[dualityIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Main headline */}
          <h1 className="flex flex-wrap gap-x-[0.3em]" style={{ fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            {["We", "design", "websites", "that", "drive"].map((word, i) => (
              <span key={i} className="overflow-hidden">
                <motion.span
                  className="inline-block font-bold"
                  style={{ color: "hsl(0 0% 70%)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="overflow-hidden relative inline-flex" style={{ minWidth: "2.5ch" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[currentWordIndex]}
                  className="inline-block font-display italic font-normal"
                  style={{ color: "hsl(0 0% 100%)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <p className="text-lg max-w-md leading-relaxed" style={{ color: "hsl(0 0% 40%)" }}>
              We partner with ambitious brands to create digital experiences that convert visitors into customers.
            </p>
            <a
              href="#work"
              className="text-[13px] font-semibold px-8 py-3.5 rounded-full bg-white hover:bg-white/90 transition-colors flex-shrink-0"
              style={{ color: "hsl(var(--background-dark))" }}
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Client logo bar */}
      <motion.div
        className="border-t py-8 overflow-hidden"
        style={{ borderColor: "hsl(0 0% 15%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex whitespace-nowrap animate-logo-scroll">
          {clients.map((client, i) => (
            <span
              key={i}
              className="mx-12 text-sm font-semibold tracking-wider uppercase flex-shrink-0"
              style={{ color: "hsl(0 0% 25%)" }}
            >
              {client}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
