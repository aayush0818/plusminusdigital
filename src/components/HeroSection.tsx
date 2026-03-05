import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const line1 = "Minus the";
const line2 = "Noise.";
const line3 = "Plus the";
const line4 = "Results.";

const HeroSection = () => {
  return (
    <section className="section-dark min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large decorative accent */}
      <motion.div
        className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: `radial-gradient(circle, hsl(33 33% 55%) 0%, transparent 70%)` }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container-site w-full relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Overline */}
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-px bg-accent-gold" />
            <span className="text-small tracking-[0.3em] uppercase text-accent-gold font-medium">
              Digital Design Studio
            </span>
          </motion.div>

          {/* Headline with staggered reveal */}
          <h1 className="text-hero mb-12">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {line2}
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-2">
              <motion.span
                className="block text-accent-gold italic"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {line3}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-accent-gold italic"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {line4}
              </motion.span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="text-body max-w-lg mb-14"
            style={{ color: "hsl(0, 0%, 50%)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Brand-led websites designed to elevate perception
            and convert visitors into customers.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button variant="hero" asChild className="text-base px-10 py-5 h-auto">
              <a href="#cta">Start a Project</a>
            </Button>
            <Button variant="hero-outline" asChild className="text-base px-10 py-5 h-auto">
              <a href="#work">View Work</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-small tracking-[0.2em] uppercase" style={{ color: "hsl(0,0%,35%)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "hsl(0,0%,35%)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
