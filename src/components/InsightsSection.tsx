import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "What Makes a Website Feel Premium",
    tag: "Design",
    gradient: "linear-gradient(135deg, hsl(220 20% 92%), hsl(200 15% 88%))",
  },
  {
    title: "Why Most Restaurant Websites Fail",
    tag: "Strategy",
    gradient: "linear-gradient(135deg, hsl(30 20% 92%), hsl(20 15% 88%))",
  },
  {
    title: "Design Decisions That Improve Conversions",
    tag: "Conversion",
    gradient: "linear-gradient(135deg, hsl(150 15% 90%), hsl(170 12% 86%))",
  },
];

const InsightsSection = () => {
  return (
    <section id="journal" className="section-light border-t border-border" style={{ padding: "160px 0" }}>
      <div className="container-site">
        <motion.div
          className="flex items-end justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
              Journal
            </p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }} className="font-bold text-foreground">
              Insights
            </h2>
          </div>
          <a
            href="#journal"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-foreground-muted hover:text-foreground transition-colors"
          >
            All Articles <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              className="group block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="rounded-lg h-48 md:h-56 mb-5 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ background: article.gradient }}
              />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                {article.tag}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-foreground-muted transition-colors">
                {article.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
