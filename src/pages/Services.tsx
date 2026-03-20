import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    description: "We define your positioning, visual identity, and messaging framework to build a brand that resonates with your ideal audience and stands apart in a crowded market.",
    deliverables: ["Brand Positioning", "Visual Identity", "Messaging Framework", "Brand Guidelines", "Competitive Analysis"],
  },
  {
    num: "02",
    title: "Website Design",
    description: "Conversion-focused design systems rooted in user research. Every layout, interaction, and visual decision is intentional — built to communicate value at first glance.",
    deliverables: ["UX Research", "Wireframes", "UI Design", "Design System", "Interaction Design", "Prototyping"],
  },
  {
    num: "03",
    title: "Web Development",
    description: "Fast, accessible, and meticulously engineered websites built with React, Next.js, and modern tooling. Performance isn't an afterthought — it's the foundation.",
    deliverables: ["Frontend Development", "CMS Integration", "API Development", "Performance Optimization", "Accessibility Audit"],
  },
  {
    num: "04",
    title: "Conversion Optimization",
    description: "Data-driven improvements that compound. We analyze behavior, run experiments, and implement changes that measurably grow your revenue.",
    deliverables: ["Analytics Setup", "A/B Testing", "Heatmap Analysis", "Funnel Optimization", "Landing Page Design"],
  },
  {
    num: "05",
    title: "Content Strategy",
    description: "Strategic content architecture that drives organic growth and builds authority. From SEO foundations to editorial calendars, we make every word count.",
    deliverables: ["SEO Strategy", "Content Architecture", "Copywriting", "Editorial Calendar", "Content Auditing"],
  },
];

const approach = [
  { step: "01", title: "Discover", text: "We immerse ourselves in your business, audience, and goals through research and stakeholder interviews." },
  { step: "02", title: "Define", text: "We synthesize insights into a clear strategy that aligns design decisions with business objectives." },
  { step: "03", title: "Design", text: "We craft pixel-perfect interfaces through iterative design sprints with continuous feedback loops." },
  { step: "04", title: "Develop", text: "We build with modern tools, prioritizing speed, accessibility, and maintainable code architecture." },
  { step: "05", title: "Deliver", text: "We launch, measure, and optimize — ensuring the work performs as beautifully as it looks." },
];

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleInteraction = (i: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === i ? null : i);
    }
  };

  return (
    <>
      <SEOHead
        title="Services — PlusMinus Studio"
        description="End-to-end digital services: brand strategy, website design, web development, conversion optimization, and content strategy for ambitious brands."
        path="/services"
      />
      <Navbar />
      <main>
        <section className="section-light pt-28 md:pt-40 pb-12 md:pb-20">
          <div className="container-site">
            <motion.p
              className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What We Do
            </motion.p>
            <motion.h1
              className="font-bold text-foreground max-w-4xl"
              style={{ fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              End-to-end digital{" "}
              <span className="font-display italic font-normal">excellence.</span>
            </motion.h1>
            <motion.p
              className="mt-4 md:mt-6 text-base md:text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From strategy to launch, we offer a complete suite of services designed to transform your digital presence.
            </motion.p>
          </div>
        </section>

        <section className="section-light border-t border-border" style={{ padding: "60px 0 clamp(80px, 12vw, 160px)" }}>
          <div className="container-site">
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
                      className="text-xl md:text-4xl font-bold transition-colors duration-300"
                      style={{
                        color: activeIndex === i ? "hsl(var(--foreground))" : activeIndex !== null ? "hsl(0 0% 75%)" : "hsl(var(--foreground))",
                      }}
                    >
                      {service.title}
                    </h3>
                    <AnimatePresence>
                      {activeIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm md:text-base leading-relaxed text-foreground-muted mt-3 md:mt-4 max-w-2xl mb-4 md:mb-5">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d) => (
                              <span
                                key={d}
                                className="text-[11px] md:text-[12px] font-medium px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border border-border text-foreground-muted"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </section>

        <section style={{ padding: 0 }}>
          {approach.map((item, i) => (
            <motion.div
              key={item.step}
              className={i % 2 === 0 ? "section-dark" : "section-light"}
              style={{ padding: "clamp(40px, 6vw, 80px) 0" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="container-site flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-16">
                <div className="flex items-center gap-3">
                  <span className="font-display italic text-lg" style={{ color: i % 2 === 0 ? "hsl(0 0% 30%)" : "hsl(var(--muted-foreground))" }}>±</span>
                  <span className="text-3xl md:text-4xl font-bold" style={{ color: i % 2 === 0 ? "hsl(0 0% 25%)" : "hsl(var(--border))" }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold" style={{ color: i % 2 === 0 ? "hsl(0 0% 85%)" : "hsl(var(--foreground))" }}>
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: i % 2 === 0 ? "hsl(0 0% 50%)" : "hsl(var(--muted-foreground))" }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
