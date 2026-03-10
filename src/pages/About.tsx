import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const values = [
  { title: "Intentional Design", description: "Every pixel serves a purpose. We don't decorate — we communicate. Design decisions are rooted in strategy, not trends." },
  { title: "Engineering Excellence", description: "Performance, accessibility, and clean architecture aren't extras — they're the foundation everything is built on." },
  { title: "Transparent Partnership", description: "No black boxes. We bring you into the process, share our thinking, and build trust through radical transparency." },
  { title: "Measurable Impact", description: "Beautiful work that doesn't perform is just decoration. We measure success by the growth we create for our clients." },
];

const milestones = [
  { year: "2014", event: "Founded in Amsterdam as a two-person design studio" },
  { year: "2016", event: "Expanded into full-stack development" },
  { year: "2018", event: "Crossed 25 projects with a 100% client retention rate" },
  { year: "2020", event: "Launched conversion optimization practice" },
  { year: "2023", event: "50+ projects delivered across 12 countries" },
  { year: "2025", event: "Recognized as a top 10 European digital studio" },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "12", label: "Years Experience" },
  { number: "3×", label: "Avg. Conversion Lift" },
  { number: "98%", label: "Client Retention" },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero - Split Screen */}
        <section className="section-light pt-40 pb-32">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                  About Us
                </p>
                <h1
                  className="font-bold text-foreground"
                  style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
                >
                  We believe great design is{" "}
                  <span className="font-display italic font-normal">invisible.</span>
                </h1>
              </motion.div>

              <motion.div
                className="pt-2 md:pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-lg leading-relaxed text-foreground-muted mb-6">
                  PlusMinus is a digital design and development studio based in Amsterdam. We partner with ambitious brands to create web experiences that look exceptional and perform even better.
                </p>
                <p className="text-lg leading-relaxed text-foreground-muted">
                  Our approach is simple: strip away the unnecessary, amplify what matters. Every project starts with understanding your business goals and ends with measurable results. No fluff, no filler — just work that works.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-light border-t border-border" style={{ padding: "80px 0" }}>
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-foreground-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-light" style={{ padding: "160px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                Our Values
              </p>
              <h2
                className="font-bold text-foreground"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                What drives us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <span className="text-[13px] font-semibold text-foreground-muted">0{i + 1}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">{value.title}</h3>
                  <p className="text-base leading-relaxed text-foreground-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-dark" style={{ padding: "160px 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 40%)" }}>
                Our Journey
              </p>
              <h2
                className="font-bold"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}
              >
                Milestones
              </h2>
            </motion.div>

            <div className="space-y-0">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  className="border-t py-8 md:py-10 flex items-baseline gap-8 md:gap-16"
                  style={{ borderColor: "hsl(0 0% 15%)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(0 0% 30%)" }}>
                    {milestone.year}
                  </span>
                  <p className="text-lg" style={{ color: "hsl(0 0% 60%)" }}>
                    {milestone.event}
                  </p>
                </motion.div>
              ))}
              <div className="border-t" style={{ borderColor: "hsl(0 0% 15%)" }} />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default About;
