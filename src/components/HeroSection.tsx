import { motion } from "framer-motion";

const clients = [
  "Stripe", "Vercel", "Linear", "Notion", "Figma", "Webflow", "Framer", "Arc",
  "Stripe", "Vercel", "Linear", "Notion", "Figma", "Webflow", "Framer", "Arc",
];

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HeroSection = () => {
  const words = ["We", "design", "websites", "that", "drive", "growth."];

  return (
    <section className="section-dark min-h-screen relative flex flex-col">
      <div className="flex-1 flex items-center container-site pt-32 pb-20">
        <div className="w-full max-w-5xl">
          <motion.p
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-12"
            style={{ color: "hsl(0 0% 40%)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Digital Design & Development Studio
          </motion.p>

          <h1 className="flex flex-wrap gap-x-[0.3em]" style={{ fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            {words.map((word, i) => (
              <span key={i} className="overflow-hidden">
                <motion.span
                  className="inline-block font-bold"
                  style={{ color: word === "growth." ? "hsl(0 0% 100%)" : "hsl(0 0% 70%)" }}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {word === "growth." ? (
                    <span className="font-display italic font-normal" style={{ color: "hsl(0 0% 100%)" }}>
                      {word}
                    </span>
                  ) : word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <p className="text-lg max-w-md leading-relaxed" style={{ color: "hsl(0 0% 40%)" }}>
              We partner with ambitious brands to create digital experiences that convert visitors into customers.
            </p>
            <a
              href="#work"
              className="text-[13px] font-semibold px-8 py-3.5 rounded-full bg-white text-background-dark hover:bg-white/90 transition-colors flex-shrink-0"
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
        transition={{ delay: 1.3, duration: 0.8 }}
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
