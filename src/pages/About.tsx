import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import logoMark from "@/assets/logo-icon.png";

const values = [
  {
    title: "Intentional Design",
    description: "Every pixel serves a purpose. We don't decorate — we communicate. Design decisions are rooted in strategy, not trends.",
    icon: "−",
  },
  {
    title: "Engineering Excellence",
    description: "Performance, accessibility, and clean architecture aren't extras — they're the foundation everything is built on.",
    icon: "+",
  },
  {
    title: "Transparent Partnership",
    description: "No black boxes. We bring you into the process, share our thinking, and build trust through radical transparency.",
    icon: "±",
  },
  {
    title: "Measurable Impact",
    description: "Beautiful work that doesn't perform is just decoration. We measure success by the growth we create for our clients.",
    icon: "+",
  },
];

const stats = [
  { value: "20+", label: "Projects Shipped" },
  { value: "8+", label: "Industries Covered" },
  { value: "3×", label: "Avg. Conversion Lift" },
  { value: "98%", label: "On-Time Delivery" },
];

const capabilities = [
  {
    number: "01",
    title: "Design That Converts",
    description: "Not just pretty screens — every layout, color, and interaction is engineered to move users toward action.",
  },
  {
    number: "02",
    title: "Code That Scales",
    description: "Clean, modular architecture built for performance. No bloated frameworks, no tech debt from day one.",
  },
  {
    number: "03",
    title: "Strategy Before Pixels",
    description: "We study your market, your users, and your goals before we open a design tool. Research first, always.",
  },
  {
    number: "04",
    title: "Speed as a Feature",
    description: "Fast turnarounds without cutting corners. We ship in weeks, not months — because momentum matters.",
  },
  {
    number: "05",
    title: "Full Ownership",
    description: "You own everything we build — the code, the designs, the assets. No lock-in, no licensing games.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="section-dark relative overflow-hidden"
          style={{ padding: "clamp(120px, 18vw, 200px) 0 clamp(80px, 12vw, 140px)" }}
        >
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <img src={logoMark} alt="" className="w-[30vw] max-w-[360px] opacity-[0.04]" />
          </div>

          <div className="container-site relative z-10">
            <motion.p
              className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "hsl(0 0% 40%)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.p>

            <motion.h1
              className="font-bold max-w-4xl"
              style={{ fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 95%)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We subtract the noise.{" "}
              <span className="font-display italic font-normal" style={{ color: "hsl(0 0% 55%)" }}>
                We add the meaning.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 md:mt-8 text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: "hsl(0 0% 50%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              PlusMinus is a design and development studio founded in Mumbai. We partner with ambitious brands to create digital experiences that are as strategic as they are beautiful.
            </motion.p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="section-dark border-t" style={{ borderColor: "hsl(0 0% 12%)" }}>
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="py-8 md:py-12 text-center"
                  style={{ borderRight: i < stats.length - 1 ? "1px solid hsl(0 0% 12%)" : "none" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <p className="text-3xl md:text-5xl font-bold mb-1" style={{ color: "hsl(0 0% 90%)" }}>
                    {stat.value}
                  </p>
                  <p className="text-[12px] md:text-[13px] font-medium tracking-wide uppercase" style={{ color: "hsl(0 0% 40%)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ± Philosophy - Minus / Plus */}
        <section className="section-light" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-16 md:mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                Our Philosophy
              </p>
              <h2
                className="font-bold text-foreground"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                The ± <span className="font-display italic font-normal">approach</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px rounded-xl overflow-hidden border border-border">
              {/* Minus */}
              <motion.div
                className="p-8 md:p-12 lg:p-16"
                style={{ background: "hsl(0 0% 6%)" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-8" style={{ color: "hsl(0 0% 35%)" }}>
                  − Minus
                </p>
                <div className="space-y-4">
                  {["No templates", "No bloated code", "No vanity metrics", "No scope creep"].map((val, i) => (
                    <motion.p
                      key={val}
                      className="text-lg md:text-xl font-medium text-strikethrough"
                      style={{ color: "hsl(0 0% 30%)" }}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    >
                      {val}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* Plus */}
              <motion.div
                className="p-8 md:p-12 lg:p-16 bg-background"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-8">
                  + Plus
                </p>
                <div className="space-y-4">
                  {["Custom design", "Clean architecture", "Real results", "Clear process"].map((val, i) => (
                    <motion.p
                      key={val}
                      className="text-lg md:text-xl font-bold text-foreground"
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    >
                      {val}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-light border-t border-border" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                  Our Story
                </p>
                <h2
                  className="font-bold text-foreground"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                >
                  Great design is{" "}
                  <span className="font-display italic font-normal">invisible.</span>
                </h2>
              </motion.div>

              <motion.div
                className="md:col-span-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="text-base md:text-lg leading-relaxed text-foreground-muted mb-6">
                  PlusMinus was founded in Mumbai, India in 2025 with a clear conviction: the best digital experiences are the ones where design gets out of the way and lets the content, the product, and the brand speak for themselves.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground-muted mb-6">
                  With 20+ projects delivered across India, the Middle East, Europe, and North America, we bring a global perspective to every engagement — while staying rooted in the energy and hustle of Mumbai.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground-muted">
                  Our approach is simple: strip away the unnecessary, amplify what matters. No fluff, no filler — just work that works.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-light border-t border-border" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-12 md:mb-20"
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
                style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                What drives <span className="font-display italic font-normal">us</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  className="p-8 md:p-10 lg:p-12 border-t border-border"
                  style={{ borderRight: i % 2 === 0 ? "1px solid hsl(var(--border))" : "none" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-display italic text-foreground-muted">{value.icon}</span>
                    <span className="text-[12px] font-semibold text-foreground-muted tracking-wider">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-foreground-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-dark" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-12 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(0 0% 40%)" }}>
                Why Us
              </p>
              <h2
                className="font-bold max-w-xl"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "hsl(0 0% 90%)" }}
              >
                What we bring to{" "}
                <span className="font-display italic font-normal" style={{ color: "hsl(0 0% 55%)" }}>
                  the table
                </span>
              </h2>
            </motion.div>

            <div className="space-y-0">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.number}
                  className="border-t grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 group"
                  style={{ borderColor: "hsl(0 0% 14%)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <span className="md:col-span-1 text-[13px] font-semibold" style={{ color: "hsl(0 0% 28%)" }}>
                    {cap.number}
                  </span>
                  <h3 className="md:col-span-4 text-xl md:text-2xl font-bold" style={{ color: "hsl(0 0% 85%)" }}>
                    {cap.title}
                  </h3>
                  <p className="md:col-span-7 text-sm md:text-base leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                    {cap.description}
                  </p>
                </motion.div>
              ))}
              <div className="border-t" style={{ borderColor: "hsl(0 0% 14%)" }} />
            </div>
          </div>
        </section>

        {/* Co-Founders */}
        <section className="section-light border-t border-border" style={{ padding: "clamp(80px, 12vw, 160px) 0" }}>
          <div className="container-site">
            <motion.div
              className="mb-12 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                The Founders
              </p>
              <h2
                className="font-bold text-foreground"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                Built by <span className="font-display italic font-normal">two</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                {
                  name: "Aayush Pandey",
                  role: "Co-Founder",
                  focus: "Strategy & Design",
                  bio: "Obsessed with the intersection of aesthetics and conversion. Leads creative direction and ensures every project communicates with clarity and intent.",
                  initials: "AP",
                },
                {
                  name: "Atharva Khuke",
                  role: "Co-Founder",
                  focus: "Engineering & Development",
                  bio: "Turns ambitious designs into performant, scalable code. Leads technical architecture and ensures every build is as clean under the hood as it looks on screen.",
                  initials: "AK",
                },
              ].map((founder, i) => (
                <motion.div
                  key={founder.name}
                  className="p-8 md:p-10 lg:p-14 border-t border-border"
                  style={{ borderRight: i === 0 ? "1px solid hsl(var(--border))" : "none" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-lg font-bold"
                    style={{ background: "hsl(0 0% 8%)", color: "hsl(0 0% 60%)" }}
                  >
                    {founder.initials}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-1">
                    {founder.role}
                  </p>
                  <p className="text-[13px] font-medium text-foreground-muted mb-5" style={{ color: "hsl(0 0% 45%)" }}>
                    {founder.focus}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-foreground-muted">
                    {founder.bio}
                  </p>
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

export default About;
