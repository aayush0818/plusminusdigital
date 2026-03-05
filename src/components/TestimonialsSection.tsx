import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "PlusMinus transformed our digital presence. The website finally reflects the quality of our work.",
    name: "Martijn de Vries",
    company: "Trots Architects",
  },
  {
    quote: "Working with PlusMinus felt like a partnership. They understood our brand instantly and delivered beyond expectations.",
    name: "Sophie Laurent",
    company: "Refinnd Restaurant Group",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-light relative overflow-hidden" style={{ padding: "180px 0" }}>
      <div className="container-site">
        <motion.span
          className="text-label block mb-6"
          style={{ color: "hsl(var(--accent-gold))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.span>

        <motion.h2
          className="text-heading-lg mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          What clients <span className="font-display italic text-accent-gold">say</span>
        </motion.h2>

        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="border-t border-border py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="md:col-span-1">
                <span className="font-display text-6xl text-accent-gold leading-none">"</span>
              </div>
              <div className="md:col-span-8">
                <blockquote className="text-heading-lg font-display italic leading-snug">
                  {t.quote}
                </blockquote>
              </div>
              <div className="md:col-span-3 flex flex-col justify-end">
                <p className="font-medium text-body">{t.name}</p>
                <p className="text-small text-foreground-light mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
