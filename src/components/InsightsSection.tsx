const articles = [
  {
    title: "What Makes a Website Feel Premium",
    tag: "Design",
  },
  {
    title: "Why Most Restaurant Websites Fail",
    tag: "Strategy",
  },
  {
    title: "Design Decisions That Improve Conversions",
    tag: "Conversion",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <h2 className="text-heading-lg mb-20">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group cursor-pointer border-t border-border pt-8"
            >
              <span className="text-small text-accent-gold uppercase tracking-widest mb-4 block">
                {article.tag}
              </span>
              <h3 className="text-subheading font-semibold transition-colors duration-300 group-hover:text-accent-gold">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
