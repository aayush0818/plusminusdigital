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
    <section className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <motion.h2
          className="text-heading-lg mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          What Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="border border-border rounded-lg p-12 hover:border-accent-gold/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <blockquote className="text-subheading font-normal mb-10 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
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
