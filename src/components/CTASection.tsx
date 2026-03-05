import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="section-light relative overflow-hidden" style={{ padding: "200px 0" }}>
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: `radial-gradient(circle, hsl(33 33% 55%) 0%, transparent 70%)` }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container-site text-center relative z-10">
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-accent-gold" />
          <span className="text-small tracking-[0.3em] uppercase text-accent-gold font-medium">
            Get Started
          </span>
          <div className="w-12 h-px bg-accent-gold" />
        </motion.div>

        <motion.h2
          className="text-hero mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's Build Something{" "}
          <span className="font-display italic text-accent-gold">Exceptional</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            variant="secondary"
            className="text-base px-12 py-5 h-auto border-foreground hover:border-accent-gold hover:text-accent-gold"
          >
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
