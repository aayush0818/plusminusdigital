import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionCaption from "@/components/SectionCaption";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    description: "Positioning, identity, and messaging that gives you something to defend.",
  },
  {
    num: "02",
    title: "Website Design",
    description: "Conversion-led design rooted in research, not Pinterest.",
  },
  {
    num: "03",
    title: "Web Development",
    description: "Fast, accessible builds. React and modern tooling, no shortcuts.",
  },
  {
    num: "04",
    title: "Conversion",
    description: "Data-backed iteration that compounds month over month.",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section id="services" className="section-light" style={{ padding: "clamp(80px, 12vw, 160px) 0", borderTop: "1px solid hsl(var(--border))" }}>
      <div className="container-site">
        <SectionCaption number="04" label="Services" />

        <div>
          {services.map((service, i) => {
            const isActive = activeIndex === i;
            const isDimmed = activeIndex !== null && !isActive;
            return (
              <motion.div
                key={service.num}
                className="border-t border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => !isMobile && setActiveIndex(i)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => isMobile && setActiveIndex(isActive ? null : i)}
              >
                <div className="py-6 md:py-10 grid grid-cols-12 items-center gap-4 cursor-pointer">
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className="font-mono text-[11px] md:text-[13px] tracking-[0.2em] transition-colors duration-500"
                      style={{ color: isActive ? "hsl(var(--foreground))" : "hsl(var(--foreground-muted))" }}
                    >
                      Nº {service.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h3
                      className="font-display italic transition-colors duration-500"
                      style={{
                        fontSize: "clamp(40px, 7vw, 110px)",
                        lineHeight: 0.95,
                        letterSpacing: "-0.02em",
                        color: isActive
                          ? "hsl(var(--foreground))"
                          : isDimmed
                          ? "hsl(0 0% 78%)"
                          : "hsl(var(--foreground))",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div className="hidden md:block col-span-5">
                    <motion.p
                      className="text-base leading-relaxed"
                      style={{ color: "hsl(var(--foreground-muted))" }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : 30,
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                  <div className="col-span-12 md:col-span-1 flex justify-end">
                    <motion.div
                      animate={{
                        x: isActive ? 8 : 0,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <ArrowRight size={20} className="text-foreground" />
                    </motion.div>
                  </div>
                  {isMobile && isActive && (
                    <motion.p
                      className="col-span-12 text-sm leading-relaxed mt-2 text-foreground-muted"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      {service.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
