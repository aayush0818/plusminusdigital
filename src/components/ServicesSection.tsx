const services = [
  {
    title: "Brand Strategy",
    description: "Positioning and digital foundations that give your brand clarity and direction.",
  },
  {
    title: "Website Design",
    description: "Visually refined, conversion-focused designs that communicate your brand's value.",
  },
  {
    title: "Development",
    description: "Fast, scalable, and meticulously built websites using modern technologies.",
  },
  {
    title: "Conversion Optimization",
    description: "Data-informed improvements that turn visitors into customers and grow revenue.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-dark" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <h2 className="text-heading-lg mb-20">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="border-t border-foreground-light/15 pt-8"
            >
              <span className="text-small text-foreground-light/40 mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-subheading font-semibold mb-3">{service.title}</h3>
              <p className="text-body text-foreground-light/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
