import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

const testimonials = [
  {
    quote: "PlusMinus completely reimagined our online presence. The website captures our brand perfectly.",
    name: "Spaces & Places",
    company: "Interior Design Studio",
  },
  {
    quote: "They understood our vision from day one. The result actually converts visitors into bookings.",
    name: "The Smart Realtors",
    company: "Real Estate Consultancy",
  },
  {
    quote: "The level of craft and attention to detail is unmatched. Every transition feels intentional.",
    name: "SH Harda Reliable",
    company: "Manufacturing & Engineering",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-dark" style={{ padding: "clamp(80px, 12vw, 160px) 0", borderTop: "1px solid hsl(0 0% 12%)" }}>
      <div className="container-site">
        <SectionCaption number="06" label="Testimonials" tone="dark" />

        <div className="min-h-[50vh] md:min-h-[60vh] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <blockquote
                className="font-display italic"
                style={{
                  fontSize: "clamp(36px, 7vw, 120px)",
                  lineHeight: 1.05,
                  color: "hsl(0 0% 92%)",
                  letterSpacing: "-0.02em",
                }}
              >
                "{testimonials[current].quote}"
              </blockquote>

              <div className="mt-10 md:mt-16 flex items-center gap-4">
                <span className="block w-10 h-px" style={{ background: "hsl(0 0% 30%)" }} />
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em]" style={{ color: "hsl(0 0% 75%)" }}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] mt-1" style={{ color: "hsl(0 0% 40%)" }}>
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="w-1 h-1 rounded-full transition-all duration-500"
              style={{
                background: i === current ? "hsl(0 0% 90%)" : "hsl(0 0% 25%)",
                transform: i === current ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
