import { motion } from "framer-motion";

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
        <motion.h2
          className="text-heading-lg mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group cursor-pointer border-t-2 border-border pt-10 hover:border-accent-gold transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-small text-accent-gold uppercase tracking-widest mb-5 block font-medium">
                {article.tag}
              </span>
              <h3 className="text-subheading font-bold transition-colors duration-300 group-hover:text-accent-gold leading-tight">
                {article.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
