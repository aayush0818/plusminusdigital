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
    <section className="section-light" style={{ padding: "160px 0" }}>
      <div className="container-site">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-accent-gold" />
          <span className="text-small tracking-[0.3em] uppercase text-accent-gold font-medium">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          className="text-heading-lg mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          What Clients <span className="font-display italic text-accent-gold">Say</span>
        </motion.h2>

        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border pt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="md:col-span-8">
                <blockquote className="text-heading font-display italic leading-snug">
                  "{t.quote}"
                </blockquote>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end">
                <p className="font-bold text-body">{t.name}</p>
                <p className="text-small text-foreground-light mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
