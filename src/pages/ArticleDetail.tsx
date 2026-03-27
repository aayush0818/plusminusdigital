import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articles } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="section-light pt-40 pb-40">
          <div className="container-site text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
            <Link to="/insights" className="text-foreground-muted hover:text-foreground transition-colors text-sm">
              ← Back to Journal
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = articles.indexOf(article);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <>
      <SEOHead
        title={`${article.title} | PlusMinus Studio`}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-light pt-28 md:pt-40 pb-8 md:pb-12">
          <div className="container-site max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={14} /> Back to Journal
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted">
                {article.tag}
              </span>
              <span className="text-[12px] text-foreground-muted">·</span>
              <span className="text-[12px] text-foreground-muted">{article.date}</span>
              <span className="text-[12px] text-foreground-muted">·</span>
              <span className="text-[12px] text-foreground-muted">{article.readTime}</span>
            </motion.div>

            <motion.h1
              className="font-bold text-foreground mb-6"
              style={{ fontSize: "clamp(28px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {article.title}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-foreground-muted leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {article.excerpt}
            </motion.p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="section-light pb-8 md:pb-12">
          <div className="container-site max-w-4xl mx-auto">
            <motion.div
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 md:h-[420px] object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-light pb-16 md:pb-28">
          <div className="container-site max-w-3xl mx-auto">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {article.content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-2"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-[15px] md:text-base text-foreground-muted leading-[1.8]">
                    {block}
                  </p>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ± Divider */}
        <div className="section-light">
          <div className="container-site max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-foreground-muted text-lg font-light">±</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>
        </div>

        {/* Next Article */}
        {nextArticle && (
          <section className="section-light py-12 md:py-20">
            <div className="container-site max-w-3xl mx-auto">
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-4">
                Next Article
              </p>
              <Link to={`/insights/${nextArticle.slug}`} className="group block">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-foreground-muted transition-colors mb-2">
                  {nextArticle.title}
                </h3>
                <p className="text-sm text-foreground-muted line-clamp-2 max-w-xl">
                  {nextArticle.excerpt}
                </p>
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-light border-t border-border" style={{ padding: "clamp(60px, 8vw, 120px) 0" }}>
          <div className="container-site text-center max-w-xl mx-auto">
            <h2
              className="font-bold text-foreground mb-4"
              style={{ fontSize: "clamp(24px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Got a project in mind?
            </h2>
            <p className="text-foreground-muted text-sm md:text-base mb-6 leading-relaxed">
              We'd love to hear about it. Drop us a line and let's figure out how to make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-foreground hover:text-foreground-muted transition-colors"
            >
              Start a conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticleDetail;
