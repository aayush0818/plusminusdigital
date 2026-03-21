import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import logoMark from "@/assets/logo-icon.png";

const budgetOptions = ["Under ₹5L", "₹5L – ₹15L", "₹15L – ₹30L", "₹30L – ₹50L", "₹50L+"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <SEOHead
        title="Contact | PlusMinus Studio"
        description="Got a project in mind? Let's talk. Reach out to PlusMinus Studio for web design, development, and brand strategy."
        path="/contact"
      />
      <Navbar />
      <main>
        <section className="section-light pt-28 md:pt-40 pb-20 md:pb-40 min-h-screen">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src={logoMark}
                  alt=""
                  className="absolute -top-4 md:-top-8 -left-2 md:-left-4 h-32 md:h-48 w-auto opacity-[0.06] pointer-events-none select-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-4">
                    Contact
                  </p>
                  <h1
                    className="font-bold text-foreground mb-6 md:mb-8"
                    style={{ fontSize: "clamp(32px, 5vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
                  >
                    Let's start a{" "}
                    <span className="font-display italic font-normal">conversation.</span>
                  </h1>
                  <p className="text-base md:text-lg leading-relaxed text-foreground-muted mb-8 md:mb-12">
                    Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-2">
                        Email
                      </h3>
                      <a href="mailto:hello@plusminus.studio" className="text-base md:text-lg font-medium text-foreground hover:text-foreground-muted transition-colors">
                        hello@plusminus.studio
                      </a>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-2">
                        Location
                      </h3>
                      <p className="text-base md:text-lg font-medium text-foreground">Mumbai, India</p>
                      <p className="text-sm text-foreground-muted mt-1">Working with clients worldwide</p>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground-muted mb-2">
                        Social
                      </h3>
                      <div className="flex gap-6">
                        {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                          <a
                            key={social}
                            href="#"
                            className="text-sm font-medium text-foreground hover:text-foreground-muted transition-colors"
                          >
                            {social}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5 md:space-y-6 pt-2 md:pt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div>
                  <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground-muted block mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-base md:text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground-muted/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground-muted block mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-base md:text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground-muted/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground-muted block mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-base md:text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground-muted/50"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground-muted block mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-background border-b border-border py-3 text-foreground text-base md:text-lg focus:outline-none focus:border-foreground transition-colors rounded-none"
                    style={{ WebkitAppearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0 center" }}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground-muted block mb-2">Project Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-base md:text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground-muted/50 min-h-[100px] resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 text-[13px] font-semibold px-10 py-4 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity w-full md:w-auto"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
