const steps = [
  { number: "01", title: "Discovery", description: "Understanding the business and goals." },
  { number: "02", title: "Strategy", description: "Defining structure and messaging." },
  { number: "03", title: "Design", description: "Crafting a brand-led visual system." },
  { number: "04", title: "Development", description: "Building a fast, scalable website." },
  { number: "05", title: "Launch", description: "Deployment and optimization." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <h2 className="text-heading-lg mb-20">Process</h2>
        
        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative pt-12">
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-accent-gold -translate-y-1.5" />
                <span className="text-small text-accent-gold mb-2 block">{step.number}</span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-small text-foreground-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="border-l-2 border-accent-gold pl-6">
              <span className="text-small text-accent-gold mb-1 block">{step.number}</span>
              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-small text-foreground-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
