import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "PlusMinus completely reimagined our online presence. The website captures our brand perfectly and has significantly boosted our client inquiries.",
    name: "Spaces & Places",
    company: "Interior Design Studio",
  },
  {
    quote: "They understood our vision from day one. The result was a website that not only looks great but actually converts visitors into booked consultations.",
    name: "The Smart Realtors",
    company: "Real Estate Consultancy",
  },
  {
    quote: "The level of craft and attention to detail is unmatched. Every scroll, every transition, it all feels intentional. Truly elevated our digital presence.",
    name: "SH Harda Reliable",
    company: "Manufacturing & Engineering",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-dark" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
      <div className="container-site">
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 40%)" }}>
            Testimonials
          </p>
        </motion.div>

        <div className="min-h-[250px] md:min-h-[300px] relative">
          {/* Large decorative quotation mark — smaller on mobile */}
          <div
            className="absolute -top-4 md:-top-8 -left-2 md:-left-4 font-display italic select-none pointer-events-none"
            style={{ fontSize: "clamp(80px, 15vw, 240px)", lineHeight: 1, color: "hsl(0 0% 12%)" }}
            aria-hidden="true"
          >
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote
                className="font-display italic max-w-4xl"
                style={{ fontSize: "clamp(22px, 4vw, 52px)", lineHeight: 1.2, color: "hsl(0 0% 85%)" }}
              >
                {testimonials[current].quote}
              </blockquote>
              <div className="mt-8 md:mt-10 flex items-center gap-4">
                <span className="font-display italic text-lg" style={{ color: "hsl(0 0% 25%)" }}>±</span>
                <div>
                  <p className="text-sm md:text-base font-semibold" style={{ color: "hsl(0 0% 70%)" }}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs md:text-sm mt-1" style={{ color: "hsl(0 0% 40%)" }}>
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-12 md:mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? "hsl(0 0% 70%)" : "hsl(0 0% 25%)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
