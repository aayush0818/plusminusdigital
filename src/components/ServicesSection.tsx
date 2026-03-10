import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    description: "We define your positioning, visual identity, and messaging framework to build a brand that resonates with your ideal audience and stands apart in a crowded market.",
  },
  {
    num: "02",
    title: "Website Design",
    description: "Conversion-focused design systems rooted in user research. Every layout, interaction, and visual decision is intentional — built to communicate value at first glance.",
  },
  {
    num: "03",
    title: "Web Development",
    description: "Fast, accessible, and meticulously engineered websites built with React, Next.js, and modern tooling. Performance isn't an afterthought — it's the foundation.",
  },
  {
    num: "04",
    title: "Conversion Optimization",
    description: "Data-driven improvements that compound. We analyze behavior, run experiments, and implement changes that measurably grow your revenue.",
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
    <section id="services" className="section-light" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
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
                    className="text-xl md:text-3xl font-bold transition-colors duration-300"
                    style={{
                      color: activeIndex === i ? "hsl(var(--foreground))" : activeIndex !== null ? "hsl(0 0% 75%)" : "hsl(var(--foreground))",
                    }}
                  >
                    {service.title}
                  </h3>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.p
                        className="text-sm md:text-base leading-relaxed text-foreground-muted mt-3 md:mt-4 max-w-2xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
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
