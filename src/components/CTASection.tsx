import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="section-dark" style={{ padding: "200px 0" }}>
      <div className="container-site text-center">
        <motion.h2
          className="font-bold mx-auto max-w-4xl"
          style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's build something{" "}
          <span className="font-display italic font-normal">together.</span>
        </motion.h2>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="mailto:hello@plusminusdigital.com"
            className="inline-block text-[13px] font-semibold px-10 py-4 rounded-full bg-white text-background-dark hover:bg-white/90 transition-colors"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
