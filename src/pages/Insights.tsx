import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import imgPremium from "@/assets/insights/premium-website.jpg";
import imgRestaurant from "@/assets/insights/restaurant-websites.jpg";
import imgConversions from "@/assets/insights/conversions.jpg";
import imgPerformance from "@/assets/insights/web-performance.jpg";
import imgBrief from "@/assets/insights/design-brief.jpg";
import imgTypography from "@/assets/insights/typography.jpg";
import imgServer from "@/assets/insights/server-components.jpg";
import imgLanding from "@/assets/insights/landing-pages.jpg";
import imgMinimalism from "@/assets/insights/digital-minimalism.jpg";

const categories = ["All", "Design", "Strategy", "Development", "Conversion"];

const articles = [
  {
    title: "What Makes a Website Feel Premium",
    tag: "Design",
    date: "Mar 2026",
    readTime: "5 min read",
    excerpt: "The subtle details that separate forgettable websites from ones that actually build trust and keep visitors around.",
    image: imgPremium,
    featured: true,
  },
  {
    title: "Why Most Restaurant Websites Fail",
    tag: "Strategy",
    date: "Feb 2026",
    readTime: "4 min read",
    excerpt: "Your food is great. Your online presence? Probably costing you reservations. Here's what we keep seeing go wrong.",
    image: imgRestaurant,
    featured: false,
  },
  {
    title: "Design Decisions That Improve Conversions",
    tag: "Conversion",
    date: "Jan 2026",
    readTime: "6 min read",
    excerpt: "Small layout and copy changes that moved the needle for our clients. Real numbers, no fluff.",
    image: imgConversions,
    featured: false,
  },
  {
    title: "The Business Case for Web Performance",
    tag: "Development",
    date: "Dec 2025",
    readTime: "5 min read",
    excerpt: "Every second your site takes to load costs you visitors. We break down exactly how much and what to do about it.",
    image: imgPerformance,
    featured: false,
  },
  {
    title: "How to Brief a Design Agency",
    tag: "Strategy",
    date: "Nov 2025",
    readTime: "3 min read",
    excerpt: "A good brief saves weeks of back-and-forth. Here's a framework we share with every new client.",
    image: imgBrief,
    featured: false,
  },
  {
    title: "Typography Choices That Build Trust",
    tag: "Design",
    date: "Oct 2025",
    readTime: "4 min read",
    excerpt: "Fonts do more heavy lifting than most people think. The right pairing can shift how your entire brand is perceived.",
    image: imgTypography,
    featured: false,
  },
  {
    title: "Server Components: A Practical Guide",
    tag: "Development",
    date: "Sep 2025",
    readTime: "7 min read",
    excerpt: "Cutting through the hype to show when server components actually help and when they just add complexity.",
    image: imgServer,
    featured: false,
  },
  {
    title: "Landing Pages That Convert at 8%+",
    tag: "Conversion",
    date: "Aug 2025",
    readTime: "5 min read",
    excerpt: "We studied our top-performing landing pages. These patterns showed up in every single one.",
    image: imgLanding,
    featured: false,
  },
  {
    title: "The Art of Digital Minimalism",
    tag: "Design",
    date: "Jul 2025",
    readTime: "4 min read",
    excerpt: "Doing more with less. How stripping away the unnecessary makes everything that remains work harder.",
    image: imgMinimalism,
    featured: false,
  },
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
        description="Practical takes on web design, development strategy, and building digital products that bring in business. Written by the PlusMinus team."
        path="/insights"
      />
      <Navbar />
      <main>
        {/* Hero */}
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
              Practical thoughts on design, development, and building digital products that work.
            </motion.p>
          </div>
        </section>

        {/* Filters */}
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

        {/* Featured Article */}
        {featuredArticle && (
          <section className="section-light pb-8 md:pb-12">
            <div className="container-site">
              <motion.div
                className="group block cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <div className="rounded-lg h-48 md:h-[400px] mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-[1.01] relative overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase bg-background/80 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                    {featuredArticle.tag}
                  </span>
                  <span className="text-[12px] text-foreground-muted">·</span>
                  <span className="text-[12px] text-foreground-muted">{featuredArticle.date}</span>
                  <span className="text-[12px] text-foreground-muted">·</span>
                  <span className="text-[12px] text-foreground-muted">{featuredArticle.readTime}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-foreground group-hover:text-foreground-muted transition-colors mb-2">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm md:text-base text-foreground-muted max-w-2xl leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="section-light pb-20 md:pb-40">
          <div className="container-site">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {restArticles.map((article, i) => (
                  <motion.div
                    key={article.title}
                    className="group block cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <div className="rounded-lg h-40 md:h-56 mb-4 md:mb-5 transition-transform duration-500 group-hover:scale-[1.02] relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                        {article.tag}
                      </span>
                      <span className="text-[12px] text-foreground-muted">·</span>
                      <span className="text-[12px] text-foreground-muted">{article.date}</span>
                      <span className="text-[12px] text-foreground-muted">·</span>
                      <span className="text-[12px] text-foreground-muted">{article.readTime}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-foreground-muted transition-colors mb-1.5">
                      {article.title}
                    </h3>
                    <p className="text-[13px] md:text-sm text-foreground-muted leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="section-light border-t border-border" style={{ padding: "clamp(60px, 8vw, 120px) 0" }}>
          <div className="container-site text-center max-w-xl mx-auto">
            <motion.h2
              className="font-bold text-foreground mb-4"
              style={{ fontSize: "clamp(24px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Got a project in mind?
            </motion.h2>
            <motion.p
              className="text-foreground-muted text-sm md:text-base mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We'd love to hear about it. Drop us a line and let's figure out how to make it happen.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-foreground hover:text-foreground-muted transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Start a conversation <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
