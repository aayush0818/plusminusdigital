const plusItems = [
  "Add clarity",
  "Add structure",
  "Add conversion thinking",
  "Add brand presence",
];

const minusItems = [
  "Remove clutter",
  "Remove confusion",
  "Remove generic design",
  "Remove friction",
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <h2 className="text-heading-lg mb-20">The PlusMinus Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Plus column */}
          <div className="pr-0 md:pr-12 pb-12 md:pb-0 md:border-r border-accent-gold">
            <h3 className="text-subheading font-semibold mb-8 text-accent-gold">Plus</h3>
            <ul className="space-y-4">
              {plusItems.map((item) => (
                <li key={item} className="text-body text-foreground-light">{item}</li>
              ))}
            </ul>
          </div>
          {/* Minus column */}
          <div className="pl-0 md:pl-12 pt-12 md:pt-0 border-t md:border-t-0 border-accent-gold">
            <h3 className="text-subheading font-semibold mb-8 text-accent-gold">Minus</h3>
            <ul className="space-y-4">
              {minusItems.map((item) => (
                <li key={item} className="text-body text-foreground-light">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
