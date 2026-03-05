import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { title: "What Makes a Website Feel Premium", tag: "Design" },
  { title: "Why Most Restaurant Websites Fail", tag: "Strategy" },
  { title: "Design Decisions That Improve Conversions", tag: "Conversion" },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="section-dark" style={{ padding: "160px 0" }}>
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
            Journal
          </span>
        </motion.div>

        <motion.h2
          className="text-heading-lg mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Insights
        </motion.h2>

        <div className="space-y-0">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group cursor-pointer border-t border-primary-foreground/10 py-10 flex items-center justify-between gap-8 hover:pl-4 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-8">
                <span className="text-small text-accent-gold uppercase tracking-widest font-medium flex-shrink-0 w-24">
                  {article.tag}
                </span>
                <h3 className="text-subheading font-bold transition-colors duration-300 group-hover:text-accent-gold">
                  {article.title}
                </h3>
              </div>
              <ArrowUpRight
                size={20}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-gold"
              />
            </motion.article>
          ))}
          <div className="border-t border-primary-foreground/10" />
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
