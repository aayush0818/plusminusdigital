import { motion } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

const ManifestoSpread = () => {
  return (
    <section
      id="manifesto"
      className="section-dark relative overflow-hidden"
      style={{ padding: "clamp(80px, 14vw, 200px) 0", borderTop: "1px solid hsl(0 0% 12%)" }}
      aria-label="Manifesto"
    >
      <div className="container-site">
        <SectionCaption number="01" label="Manifesto" tone="dark" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <motion.div
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "hsl(0 0% 40%)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              ± A Statement
            </motion.div>
            <motion.div
              className="font-display italic mt-6"
              style={{ fontSize: "clamp(64px, 9vw, 140px)", lineHeight: 0.9, color: "hsl(0 0% 92%)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              ±
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4.2vw, 64px)",
                lineHeight: 1.15,
                color: "hsl(0 0% 88%)",
                letterSpacing: "-0.01em",
              }}
            >
              We don't decorate. We engineer.{" "}
              <span className="italic" style={{ color: "hsl(0 0% 55%)" }}>
                Every pixel earns its place, every line of code answers to the business.
              </span>{" "}
              Minus the noise, plus the results, the rest is just typography.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSpread;
