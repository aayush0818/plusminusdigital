import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-dark relative overflow-hidden grain-overlay" style={{ padding: "200px 0 220px" }}>
      {/* Massive glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: `radial-gradient(circle, hsl(33 33% 55% / 0.06) 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-site text-center relative z-10">
        <motion.span
          className="text-label text-accent-gold block mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get Started
        </motion.span>

        <motion.h2
          className="text-display max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's build something{" "}
          <span className="font-display italic text-accent-gold">exceptional</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 text-label px-10 py-5 rounded-full border border-accent-gold/40 text-accent-gold hover:bg-accent-gold hover:text-background-dark transition-all duration-500"
          >
            Start a Project
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
