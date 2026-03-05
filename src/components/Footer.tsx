import { motion } from "framer-motion";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
];

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary-foreground/8" style={{ padding: "100px 0 40px" }}>
      <div className="container-site">
        {/* Giant tagline */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-hero font-display italic leading-none" style={{ color: "hsl(0 0% 12%)" }}>
            Minus the Noise.
            <br />
            <span className="text-accent-gold" style={{ opacity: 0.4 }}>Plus the Results.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <span className="font-display text-2xl block mb-4" style={{ color: "hsl(40 7% 80%)" }}>
              Plus<span className="italic text-accent-gold">Minus</span>
            </span>
            <p className="text-small" style={{ color: "hsl(0 0% 35%)" }}>
              Brand-led websites<br />built to perform.
            </p>
          </div>

          <div>
            <h4 className="text-label text-accent-gold mb-8">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-small hover:text-accent-gold transition-colors duration-300"
                  style={{ color: "hsl(0 0% 45%)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-label text-accent-gold mb-8">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@plusminusdigital.com"
                className="text-small hover:text-accent-gold transition-colors duration-300"
                style={{ color: "hsl(0 0% 45%)" }}
              >
                hello@plusminusdigital.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small hover:text-accent-gold transition-colors duration-300"
                style={{ color: "hsl(0 0% 45%)" }}
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-label text-accent-gold mb-8">Location</h4>
            <p className="text-small" style={{ color: "hsl(0 0% 45%)" }}>
              Amsterdam, NL<br />Available worldwide
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-label" style={{ color: "hsl(0 0% 20%)" }}>
            © 2026 PlusMinus Digital
          </p>
          <p className="text-label" style={{ color: "hsl(0 0% 15%)" }}>
            Designed & Built by PlusMinus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
