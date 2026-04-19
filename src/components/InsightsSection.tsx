import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import SectionCaption from "@/components/SectionCaption";

const previewArticles = articles.slice(0, 3);

const InsightsSection = () => {
  return (
    <section
      id="journal"
      className="section-light"
      style={{ padding: "clamp(80px, 12vw, 160px) 0", borderTop: "1px solid hsl(var(--border))" }}
    >
      <div className="container-site">
        <SectionCaption number="07" label="Journal" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {previewArticles.map((article, i) => {
            const layouts = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-5",
            ];
            const heights = ["h-72 md:h-[600px]", "h-56 md:h-[290px]", "h-56 md:h-[290px]"];
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
                  <div className={`relative overflow-hidden mb-4 ${heights[i] ?? "h-56"}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-foreground-muted">
                    <span>Nº 0{i + 1}</span>
                    <span>·</span>
                    <span>{article.tag}</span>
                    <span>·</span>
                    <span>©2025</span>
                  </div>
                  <h3
                    className="font-display italic mt-3 group-hover:opacity-70 transition-opacity"
                    style={{
                      fontSize: i === 0 ? "clamp(28px, 3.6vw, 48px)" : "clamp(22px, 2.4vw, 32px)",
                      lineHeight: 1.05,
                      color: "hsl(var(--foreground))",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {article.title}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 flex justify-end">
          <Link
            to="/insights"
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground-muted hover:text-foreground transition-colors"
          >
            All Articles <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
