import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="section-dark" style={{ padding: "160px 0" }}>
      <div className="container-site text-center">
        <motion.h2
          className="text-heading-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's Build Something{" "}
          <span className="text-accent-gold">Exceptional</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="hero" size="lg" className="text-base px-10 py-4 h-auto">
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
