import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const categories = ["All", "Web Design", "Development", "Branding"];

const projects = [
  { title: "Meridian Finance", category: "Web Design", year: "2025", gradient: "linear-gradient(135deg, hsl(220 60% 60%), hsl(260 50% 50%))" },
  { title: "Noma Kitchen", category: "Branding", year: "2025", gradient: "linear-gradient(135deg, hsl(30 70% 60%), hsl(15 60% 45%))" },
  { title: "Volta Energy", category: "Development", year: "2024", gradient: "linear-gradient(135deg, hsl(150 50% 45%), hsl(180 40% 35%))" },
  { title: "Arcade Studio", category: "Web Design", year: "2024", gradient: "linear-gradient(135deg, hsl(280 50% 55%), hsl(320 45% 50%))" },
  { title: "Haven Real Estate", category: "Branding", year: "2024", gradient: "linear-gradient(135deg, hsl(200 40% 50%), hsl(220 35% 40%))" },
  { title: "Prism Analytics", category: "Development", year: "2023", gradient: "linear-gradient(135deg, hsl(45 80% 55%), hsl(30 70% 45%))" },
  { title: "Lyric Music App", category: "Web Design", year: "2023", gradient: "linear-gradient(135deg, hsl(340 55% 55%), hsl(360 50% 45%))" },
  { title: "Bloom Wellness", category: "Branding", year: "2023", gradient: "linear-gradient(135deg, hsl(160 45% 50%), hsl(140 40% 40%))" },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

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
              Portfolio
            </motion.p>
            <motion.h1
              className="font-bold text-foreground"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-foreground-muted max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A curated selection of projects where strategy, design, and engineering converge to create measurable impact.
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

        {/* Project Grid */}
        <section className="section-light pb-40">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  className={`group cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  layout
                >
                  <div
                    className={`rounded-lg transition-transform duration-500 group-hover:scale-[1.02] ${
                      i === 0 ? "h-[400px] md:h-[550px]" : "h-[300px] md:h-[400px]"
                    }`}
                    style={{ background: project.gradient }}
                  />
                  <div className="mt-5 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-foreground-muted transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mt-1">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-foreground-muted">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Work;
