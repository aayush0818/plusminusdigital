import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const categories = ["All", "Design", "Strategy", "Development", "Conversion"];

const articles = [
  { title: "What Makes a Website Feel Premium", tag: "Design", date: "Mar 2026", gradient: "linear-gradient(135deg, hsl(220 20% 92%), hsl(200 15% 88%))", featured: true },
  { title: "Why Most Restaurant Websites Fail", tag: "Strategy", date: "Feb 2026", gradient: "linear-gradient(135deg, hsl(30 20% 92%), hsl(20 15% 88%))", featured: false },
  { title: "Design Decisions That Improve Conversions", tag: "Conversion", date: "Jan 2026", gradient: "linear-gradient(135deg, hsl(150 15% 90%), hsl(170 12% 86%))", featured: false },
  { title: "The Business Case for Web Performance", tag: "Development", date: "Dec 2025", gradient: "linear-gradient(135deg, hsl(260 20% 92%), hsl(280 15% 88%))", featured: false },
  { title: "How to Brief a Design Agency", tag: "Strategy", date: "Nov 2025", gradient: "linear-gradient(135deg, hsl(340 20% 92%), hsl(360 15% 88%))", featured: false },
  { title: "Typography Choices That Build Trust", tag: "Design", date: "Oct 2025", gradient: "linear-gradient(135deg, hsl(45 25% 90%), hsl(40 20% 86%))", featured: false },
  { title: "Server Components: A Practical Guide", tag: "Development", date: "Sep 2025", gradient: "linear-gradient(135deg, hsl(180 15% 90%), hsl(200 12% 86%))", featured: false },
  { title: "Landing Pages That Convert at 8%+", tag: "Conversion", date: "Aug 2025", gradient: "linear-gradient(135deg, hsl(120 15% 90%), hsl(140 12% 86%))", featured: false },
  { title: "The Art of Digital Minimalism", tag: "Design", date: "Jul 2025", gradient: "linear-gradient(135deg, hsl(0 0% 92%), hsl(0 0% 88%))", featured: false },
];

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? articles : articles.filter((a) => a.tag === activeFilter);
  const featuredArticle = filtered.find((a) => a.featured) || filtered[0];
  const restArticles = filtered.filter((a) => a !== featuredArticle);

  return (
    <>
      <SEOHead
        title="Journal | PlusMinus Studio"
        description="Our takes on design, development, and building digital products that actually perform. Written by the PlusMinus team."
        path="/insights"
      />
      <Navbar />
      <main>
        <section className="section-light pt-28 md:pt-40 pb-12 md:pb-20">
          <div className="container-site">
            <motion.p
              className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Journal
            </motion.p>
            <motion.h1
              className="font-bold text-foreground"
              style={{ fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Insights <span className="font-display italic font-normal">&</span> Ideas
            </motion.h1>
            <motion.p
              className="mt-4 md:mt-6 text-base md:text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thoughts on design, development, and building digital products that perform.
            </motion.p>
          </div>
        </section>

        <section className="section-light pb-6 md:pb-8">
          <div className="container-site">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[13px] font-medium px-4 md:px-5 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-foreground text-background"
                      : "text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {featuredArticle && (
          <section className="section-light pb-8 md:pb-12">
            <div className="container-site">
              <motion.a
                href="#"
                className="group block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <div
                  className="rounded-lg h-48 md:h-[400px] mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-[1.01] relative overflow-hidden"
                  style={{ background: featuredArticle.gradient }}
                >
                  <span
                    className="absolute bottom-3 right-4 md:bottom-4 md:right-6 font-display italic text-4xl md:text-6xl select-none pointer-events-none"
                    style={{ color: "hsl(0 0% 0% / 0.04)" }}
                    aria-hidden="true"
                  >
                    ±
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                    {featuredArticle.tag}
                  </span>
                  <span className="text-[12px] text-foreground-muted">·</span>
                  <span className="text-[12px] text-foreground-muted">{featuredArticle.date}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-foreground group-hover:text-foreground-muted transition-colors">
                  {featuredArticle.title}
                </h3>
              </motion.a>
            </div>
          </section>
        )}

        <section className="section-light pb-20 md:pb-40">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {restArticles.map((article, i) => (
                <motion.a
                  key={article.title}
                  href="#"
                  className="group block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.06 }}
                  layout
                >
                  <div
                    className="rounded-lg h-40 md:h-56 mb-4 md:mb-5 transition-transform duration-500 group-hover:scale-[1.02] relative overflow-hidden"
                    style={{ background: article.gradient }}
                  >
                    <span
                      className="absolute bottom-2 right-3 md:right-4 font-display italic text-3xl md:text-4xl select-none pointer-events-none"
                      style={{ color: "hsl(0 0% 0% / 0.04)" }}
                      aria-hidden="true"
                    >
                      ±
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                      {article.tag}
                    </span>
                    <span className="text-[12px] text-foreground-muted">·</span>
                    <span className="text-[12px] text-foreground-muted">{article.date}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-foreground-muted transition-colors">
                    {article.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
