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
    excerpt: "Most websites look fine. But fine doesn't build trust, and it definitely doesn't justify higher prices. We break down the details that separate a forgettable site from one that makes visitors think, 'these people know what they're doing.' From whitespace to micro-interactions, it's all in the craft.",
    image: imgPremium,
    featured: true,
  },
  {
    title: "Why Most Restaurant Websites Still Get It Wrong",
    tag: "Strategy",
    date: "Feb 2026",
    readTime: "4 min read",
    excerpt: "You spent years perfecting your menu. Your website took a weekend. That disconnect is costing you covers every single night. We looked at what the best restaurant sites do differently and why most still bury their hours three clicks deep.",
    image: imgRestaurant,
    featured: false,
  },
  {
    title: "5 Design Decisions That Actually Move Conversion Numbers",
    tag: "Conversion",
    date: "Jan 2026",
    readTime: "6 min read",
    excerpt: "Not theory. These are specific layout and copy changes we made for clients that led to measurable lifts in form submissions, calls, and purchases. We share the before, the after, and what we learned.",
    image: imgConversions,
    featured: false,
  },
  {
    title: "Your Slow Website Is Costing You More Than You Think",
    tag: "Development",
    date: "Dec 2025",
    readTime: "5 min read",
    excerpt: "We ran the numbers on how load time affects bounce rates across the sites we manage. A one-second delay doesn't sound like much until you see what it does to your conversion funnel. Here's the data and exactly what to fix first.",
    image: imgPerformance,
    featured: false,
  },
  {
    title: "How to Write a Design Brief That Saves Everyone Time",
    tag: "Strategy",
    date: "Nov 2025",
    readTime: "3 min read",
    excerpt: "A vague brief means weeks of revisions and mismatched expectations. We share the exact framework we send to new clients, covering goals, audience, tone, and scope so the first round of work already feels right.",
    image: imgBrief,
    featured: false,
  },
  {
    title: "Typography Is Doing More Work Than You Realize",
    tag: "Design",
    date: "Oct 2025",
    readTime: "4 min read",
    excerpt: "Swap a geometric sans for a humanist one and your brand feels warmer overnight. Pair a serif headline with a clean body and suddenly there's authority. We walk through real font pairings that shifted how our clients' brands are perceived.",
    image: imgTypography,
    featured: false,
  },
  {
    title: "React Server Components: When They Help and When They Don't",
    tag: "Development",
    date: "Sep 2025",
    readTime: "7 min read",
    excerpt: "Everyone's talking about server components. Not everyone needs them. We tested them on three different project types and share where the performance gains are real, where they add unnecessary complexity, and how to decide for your own stack.",
    image: imgServer,
    featured: false,
  },
  {
    title: "What Our Best-Performing Landing Pages Have in Common",
    tag: "Conversion",
    date: "Aug 2025",
    readTime: "5 min read",
    excerpt: "We audited every landing page we shipped last year. The ones converting above 8% all shared a handful of patterns around headline structure, social proof placement, and CTA positioning. Here's what we found.",
    image: imgLanding,
    featured: false,
  },
  {
    title: "Doing More by Designing Less",
    tag: "Design",
    date: "Jul 2025",
    readTime: "4 min read",
    excerpt: "Minimalism isn't about removing things until nothing's left. It's about removing things until everything that remains earns its spot. We look at how restraint in layout, color, and content creates sites that feel calm, confident, and easy to use.",
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
        title="Journal | PlusMinus Studio - Web Design & Strategy Insights"
        description="Straight-talk on web design, development, and conversion strategy. No fluff, just lessons from real projects by the PlusMinus team in Mumbai."
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
