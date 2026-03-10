import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Design", "Strategy", "Development", "Conversion"];

const articles = [
  { title: "What Makes a Website Feel Premium", tag: "Design", date: "Mar 2026", gradient: "linear-gradient(135deg, hsl(220 20% 92%), hsl(200 15% 88%))" },
  { title: "Why Most Restaurant Websites Fail", tag: "Strategy", date: "Feb 2026", gradient: "linear-gradient(135deg, hsl(30 20% 92%), hsl(20 15% 88%))" },
  { title: "Design Decisions That Improve Conversions", tag: "Conversion", date: "Jan 2026", gradient: "linear-gradient(135deg, hsl(150 15% 90%), hsl(170 12% 86%))" },
  { title: "The Business Case for Web Performance", tag: "Development", date: "Dec 2025", gradient: "linear-gradient(135deg, hsl(260 20% 92%), hsl(280 15% 88%))" },
  { title: "How to Brief a Design Agency", tag: "Strategy", date: "Nov 2025", gradient: "linear-gradient(135deg, hsl(340 20% 92%), hsl(360 15% 88%))" },
  { title: "Typography Choices That Build Trust", tag: "Design", date: "Oct 2025", gradient: "linear-gradient(135deg, hsl(45 25% 90%), hsl(40 20% 86%))" },
  { title: "Server Components: A Practical Guide", tag: "Development", date: "Sep 2025", gradient: "linear-gradient(135deg, hsl(180 15% 90%), hsl(200 12% 86%))" },
  { title: "Landing Pages That Convert at 8%+", tag: "Conversion", date: "Aug 2025", gradient: "linear-gradient(135deg, hsl(120 15% 90%), hsl(140 12% 86%))" },
  { title: "The Art of Digital Minimalism", tag: "Design", date: "Jul 2025", gradient: "linear-gradient(135deg, hsl(0 0% 92%), hsl(0 0% 88%))" },
];

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? articles : articles.filter((a) => a.tag === activeFilter);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-light pt-40 pb-20">
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
              style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Insights & Ideas
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thoughts on design, development, and building digital products that perform.
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="section-light pb-8">
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
                  className={`text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-300 ${
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

        {/* Articles Grid */}
        <section className="section-light pb-40">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filtered.map((article, i) => (
                <motion.a
                  key={article.title}
                  href="#"
                  className="group block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  layout
                >
                  <div
                    className="rounded-lg h-48 md:h-56 mb-5 transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ background: article.gradient }}
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                      {article.tag}
                    </span>
                    <span className="text-[12px] text-foreground-muted">·</span>
                    <span className="text-[12px] text-foreground-muted">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground-muted transition-colors">
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
