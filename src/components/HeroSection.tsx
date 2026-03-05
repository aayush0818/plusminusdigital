import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="section-dark min-h-screen relative overflow-hidden grain-overlay">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/80 to-background-dark" />
      </div>

      {/* Floating accent orb */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: `radial-gradient(circle, hsl(33 33% 55%) 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Top bar with running text */}
        <motion.div
          className="pt-28 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-label mx-8" style={{ color: "hsl(0 0% 20%)" }}>
                Brand Strategy • Web Design • Development • Conversion Optimization • Digital Identity
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="container-site flex-1 flex items-center py-20">
          <div className="w-full">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-label text-accent-gold">Digital Design Studio — Amsterdam</span>
            </motion.div>

            <h1 className="text-display">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  style={{ color: "hsl(40 7% 92%)" }}
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Minus the
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  style={{ color: "hsl(40 7% 92%)" }}
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  Noise.
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-4">
                <motion.span
                  className="block italic text-accent-gold"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  Plus the Results.
                </motion.span>
              </span>
            </h1>

            <motion.div
              className="mt-16 flex items-end justify-between gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-body-lg max-w-md" style={{ color: "hsl(0 0% 45%)" }}>
                Brand-led websites designed to elevate perception
                and convert visitors into customers.
              </p>
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#work"
                  className="text-label text-accent-gold border-b border-accent-gold/30 pb-2 hover:border-accent-gold transition-colors duration-300"
                >
                  View Work
                </a>
                <a
                  href="#cta"
                  className="text-label border-b pb-2 transition-colors duration-300 hover:text-accent-gold hover:border-accent-gold"
                  style={{ color: "hsl(40 7% 70%)", borderColor: "hsl(40 7% 30%)" }}
                >
                  Start Project
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="pb-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 cursor-pointer"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-label" style={{ color: "hsl(0 0% 25%)" }}>Scroll</span>
            <ArrowDown size={14} style={{ color: "hsl(0 0% 25%)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
