import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import logoMark from "@/assets/logo-icon.png";

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
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img src={logoMark} alt="" className="w-[40vw] max-w-[500px] opacity-[0.06]" />
      </div>

      <div className="flex-1 flex items-center container-site pt-28 pb-16 md:pt-32 md:pb-20 relative z-10">
        <div className="w-full">
          {/* Duality tagline */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mb-8 md:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>
                Minus the
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={minusWords[dualityIndex]}
                  className="text-[11px] md:text-[13px] font-semibold tracking-[0.2em] uppercase text-strikethrough"
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
            <img src={logoMark} alt="" className="h-4 w-auto opacity-30 hidden md:block" />
            <div className="flex items-center gap-3">
              <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>
                Plus the
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={plusWords[dualityIndex]}
                  className="text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase"
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
          <h1 className="flex flex-wrap gap-x-[0.3em]" style={{ fontSize: "clamp(36px, 8vw, 110px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
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

          {/* Subtext + CTA */}
          <motion.div
            className="mt-8 md:mt-16 flex flex-col gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <p className="text-base md:text-lg max-w-lg leading-relaxed" style={{ color: "hsl(0 0% 40%)" }}>
              We cut through the noise and build websites that actually move the needle. No templates, no guesswork, just sharp design backed by real strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a
                href="#work"
                className="text-[13px] font-semibold px-8 py-3.5 rounded-full bg-white hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
                style={{ color: "hsl(var(--background-dark))" }}
              >
                View Our Work
              </a>
              <a
                href="/contact"
                className="text-[13px] font-semibold px-8 py-3.5 rounded-full border transition-colors w-full sm:w-auto text-center"
                style={{ borderColor: "hsl(0 0% 30%)", color: "hsl(0 0% 60%)" }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Social links + email - mobile fills the space */}
          <motion.div
            className="mt-10 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.7 }}
          >
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/plusminusdigital.in?igsh=MWVvaXZ2bnFha3pyNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors"
                style={{ color: "hsl(0 0% 35%)" }}
              >
                <Instagram size={16} />
                Instagram
              </a>
              <span className="w-px h-3" style={{ backgroundColor: "hsl(0 0% 20%)" }} />
              <a
                href="https://www.linkedin.com/company/plusminusdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors"
                style={{ color: "hsl(0 0% 35%)" }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
            <a
              href="mailto:hello@plusminusdigital.in"
              className="text-[12px] font-medium tracking-wide hover:text-white transition-colors"
              style={{ color: "hsl(0 0% 35%)" }}
            >
              hello@plusminusdigital.in
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
