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
        <h2 className="text-heading-lg mb-20">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border rounded-lg p-10"
            >
              <blockquote className="text-subheading font-normal mb-8 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-body">{t.name}</p>
                <p className="text-small text-foreground-light">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
