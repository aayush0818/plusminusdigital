import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "PlusMinus transformed our digital presence. The website finally reflects the quality of our work and has driven a 4× increase in qualified leads.",
    name: "Martijn de Vries",
    company: "Trots Architects",
  },
  {
    quote: "Working with PlusMinus felt like a true partnership. They understood our brand instantly and delivered beyond what we thought was possible.",
    name: "Sophie Laurent",
    company: "Refinnd Restaurant Group",
  },
  {
    quote: "The attention to detail is exceptional. Every interaction, every page transition — it all feels considered. Our conversion rate doubled within three months.",
    name: "James Chen",
    company: "Velora Finance",
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
            Testimonials
          </p>
        </motion.div>

        <div className="min-h-[300px] md:min-h-[250px] relative">
          {/* Large decorative quotation mark */}
          <div
            className="absolute -top-8 -left-4 font-display italic select-none pointer-events-none"
            style={{ fontSize: "clamp(120px, 15vw, 240px)", lineHeight: 1, color: "hsl(0 0% 12%)" }}
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
                style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.2, color: "hsl(0 0% 85%)" }}
              >
                {testimonials[current].quote}
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <span className="font-display italic text-lg" style={{ color: "hsl(0 0% 25%)" }}>±</span>
                <div>
                  <p className="text-base font-semibold" style={{ color: "hsl(0 0% 70%)" }}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "hsl(0 0% 40%)" }}>
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
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
