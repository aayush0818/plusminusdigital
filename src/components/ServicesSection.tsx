import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    minus: "Generic positioning",
    plus: "A brand that owns its space",
    description: "We define your positioning, visual identity, and messaging so your brand connects with the right audience and actually stands out.",
  },
  {
    num: "02",
    title: "Website Design",
    minus: "Cookie-cutter layouts",
    plus: "Designs built around your goals",
    description: "Conversion-focused design rooted in user research. Every layout and interaction is built to communicate value the moment someone lands on your page.",
  },
  {
    num: "03",
    title: "Web Development",
    minus: "Slow, bloated code",
    plus: "Fast, scalable builds",
    description: "Fast, accessible, and well-built websites using React, Next.js, and modern tools. Performance is baked in from the start, not patched on later.",
  },
  {
    num: "04",
    title: "Conversion Optimization",
    minus: "Guessing what works",
    plus: "Data-driven growth",
    description: "Data-backed improvements that stack up over time. We study user behavior, test ideas, and ship changes that grow your numbers.",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleInteraction = (i: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === i ? null : i);
    }
  };

  return (
    <section id="services" className="section-light" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
      <div className="container-site">
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
            What We Do
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold text-foreground">
            Services
          </h2>
        </motion.div>

        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="border-t border-border cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => handleInteraction(i)}
              {...(!isMobile && {
                onMouseEnter: () => setActiveIndex(i),
                onMouseLeave: () => setActiveIndex(null),
              })}
            >
              <div className="py-6 md:py-10 flex items-baseline gap-4 md:gap-12">
                <motion.span
                  className="text-xl md:text-2xl font-display italic flex-shrink-0 w-6 md:w-8 text-center select-none"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {activeIndex === i ? "−" : "+"}
                </motion.span>
                <div className="flex-1">
                  <h3
                    className="font-display italic transition-colors duration-300 relative inline-block"
                    style={{
                      fontSize: "clamp(28px, 4vw, 56px)",
                      lineHeight: 1.05,
                      color: activeIndex === i ? "hsl(var(--foreground))" : activeIndex !== null ? "hsl(0 0% 75%)" : "hsl(var(--foreground))",
                    }}
                  >
                    {service.title}
                    <span
                      className="absolute left-0 right-0 -bottom-1 h-[3px] origin-left transition-transform duration-500"
                      style={{
                        background: "hsl(var(--accent-signal))",
                        transform: activeIndex === i ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </h3>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* ± Duality pair */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-3 md:mt-4 mb-3">
                          <span className="text-sm text-foreground-muted line-through opacity-60">
                            − {service.minus}
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            + {service.plus}
                          </span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-foreground-muted max-w-2xl">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
