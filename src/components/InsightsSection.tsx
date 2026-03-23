import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import imgPremium from "@/assets/insights/premium-website.jpg";
import imgRestaurant from "@/assets/insights/restaurant-websites.jpg";
import imgConversions from "@/assets/insights/conversions.jpg";

const articles = [
  {
    title: "What Makes a Website Feel Premium",
    tag: "Design",
    image: imgPremium,
  },
  {
    title: "Why Most Restaurant Websites Still Get It Wrong",
    tag: "Strategy",
    image: imgRestaurant,
  },
  {
    title: "5 Design Decisions That Actually Move Conversion Numbers",
    tag: "Conversion",
    image: imgConversions,
  },
];

const InsightsSection = () => {
  return (
    <section id="journal" className="section-light border-t border-border" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
      <div className="container-site">
        <motion.div
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10 md:mb-16"
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
          <Link
            to="/insights"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-foreground-muted hover:text-foreground transition-colors"
          >
            All Articles <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              className="group block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to="/insights" className="block">
                <div className="rounded-lg h-48 md:h-56 mb-5 transition-transform duration-500 group-hover:scale-[1.02] relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                  {article.tag}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-foreground-muted transition-colors">
                  {article.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
