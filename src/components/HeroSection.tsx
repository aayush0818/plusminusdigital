import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-editorial.jpg";

const HeroSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Mumbai time (IST = UTC+5:30)
      const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000);
      const hh = String(ist.getHours()).padStart(2, "0");
      const mm = String(ist.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-dark min-h-screen relative flex flex-col overflow-hidden">
      {/* Full-bleed editorial photograph */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mumbai architectural facade at dusk"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 0% 4% / 0.55) 0%, hsl(0 0% 4% / 0.25) 40%, hsl(0 0% 4% / 0.85) 100%)",
          }}
        />
      </div>

      {/* Top-right live widget */}
      <motion.div
        className="absolute top-20 md:top-24 right-6 md:right-12 z-10 text-right"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em]" style={{ color: "hsl(0 0% 70%)" }}>
          Mumbai · {time} IST
        </div>
        <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] mt-1" style={{ color: "hsl(0 0% 50%)" }}>
          Open for 2 projects
        </div>
      </motion.div>

      {/* Top-left editorial caption */}
      <motion.div
        className="absolute top-20 md:top-24 left-6 md:left-12 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em]" style={{ color: "hsl(0 0% 70%)" }}>
          Nº 00 — Index
        </div>
        <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] mt-1" style={{ color: "hsl(0 0% 50%)" }}>
          ±   Studio · Est. 2024
        </div>
      </motion.div>

      {/* The single sentence — bleeds off the bottom */}
      <div className="flex-1" />
      <div className="relative z-10 px-6 md:px-12 pb-2 md:pb-0">
        <motion.h1
          className="font-display italic"
          style={{
            fontSize: "clamp(64px, 14vw, 240px)",
            lineHeight: 0.88,
            color: "hsl(0 0% 96%)",
            letterSpacing: "-0.02em",
            marginBottom: "-0.08em",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          We make websites
          <br />
          that earn their keep.
        </motion.h1>
      </div>

      {/* Bottom-right scroll microcopy */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 right-6 md:right-12 z-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em]" style={{ color: "hsl(0 0% 60%)" }}>
          Scroll
        </span>
        <span style={{ color: "hsl(0 0% 60%)" }}>↓</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
