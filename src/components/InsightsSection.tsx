import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { title: "What Makes a Website Feel Premium", tag: "Design", num: "01" },
  { title: "Why Most Restaurant Websites Fail", tag: "Strategy", num: "02" },
  { title: "Design Decisions That Improve Conversions", tag: "Conversion", num: "03" },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="section-charcoal" style={{ padding: "180px 0" }}>
      <div className="container-site">
        <motion.span
          className="text-label text-accent-gold block mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Journal
        </motion.span>

        <motion.h2
          className="text-heading-lg mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Insights
        </motion.h2>

        <div className="space-y-0">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group cursor-pointer border-t border-primary-foreground/8 py-10 md:py-14 flex items-center justify-between gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-label text-accent-gold flex-shrink-0 w-8">
                  {article.num}
                </span>
                <span className="text-label flex-shrink-0 w-24 hidden md:block" style={{ color: "hsl(0 0% 35%)" }}>
                  {article.tag}
                </span>
                <h3 className="text-subheading font-display italic transition-colors duration-400 group-hover:text-accent-gold" style={{ color: "hsl(40 7% 85%)" }}>
                  {article.title}
                </h3>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:border-accent-gold">
                <ArrowUpRight size={14} className="text-accent-gold" />
              </div>
            </motion.article>
          ))}
          <div className="border-t border-primary-foreground/8" />
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
