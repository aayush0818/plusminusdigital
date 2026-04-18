import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const previewArticles = articles.slice(0, 3);

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

        {/* Magazine cover tiles — asymmetric editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {previewArticles.map((article, i) => {
            // Asymmetric sizing: large / tall / wide
            const layouts = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-5",
            ];
            const heights = ["h-72 md:h-[560px]", "h-56 md:h-[260px]", "h-56 md:h-[260px]"];
            return (
              <motion.div
                key={article.title}
                className={`group block ${layouts[i] ?? "md:col-span-4"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/insights/${article.slug}`} className="block">
                  <div className={`relative overflow-hidden rounded-lg mb-4 ${heights[i] ?? "h-56"}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Clip-path reveal overlay with title */}
                    <div className="clip-reveal absolute inset-0 flex items-end p-6 md:p-8" style={{ background: "linear-gradient(to top, hsl(0 0% 7% / 0.92), hsl(0 0% 7% / 0.2))" }}>
                      <div>
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(var(--accent-signal))" }}>
                          {article.tag}
                        </span>
                        <h3 className="font-display italic text-2xl md:text-4xl mt-2" style={{ color: "hsl(0 0% 95%)", lineHeight: 1.1 }}>
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                    {article.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-foreground-muted transition-colors">
                    {article.title}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
