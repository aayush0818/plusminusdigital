import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-light pt-40 pb-20">
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
              style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              End-to-end digital{" "}
              <span className="font-display italic font-normal">excellence.</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From strategy to launch, we offer a complete suite of services designed to transform your digital presence and accelerate growth.
            </motion.p>
          </div>
        </section>

        {/* Services Accordion */}
        <section className="section-light border-t border-border" style={{ padding: "80px 0 160px" }}>
          <div className="container-site">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                className="border-t border-border cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="py-8 md:py-10 flex items-baseline gap-6 md:gap-12">
                  <span className="text-[13px] font-semibold text-foreground-muted w-8 flex-shrink-0">
                    {service.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-2xl md:text-4xl font-bold transition-colors duration-300"
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
                          <p className="text-base leading-relaxed text-foreground-muted mt-4 max-w-2xl mb-5">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d) => (
                              <span
                                key={d}
                                className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-border text-foreground-muted"
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

        {/* Our Approach */}
        <section className="section-dark" style={{ padding: "160px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 40%)" }}>
                How We Work
              </p>
              <h2
                className="font-bold"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}
              >
                Our Approach
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
              {approach.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="text-4xl font-bold block mb-3" style={{ color: "hsl(0 0% 20%)" }}>
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "hsl(0 0% 80%)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
