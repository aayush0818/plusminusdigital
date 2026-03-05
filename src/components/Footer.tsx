import { motion } from "framer-motion";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
];

const Footer = () => {
  return (
    <footer className="section-dark" style={{ padding: "80px 0 40px" }}>
      <div className="container-site">
        {/* Large brand statement */}
        <motion.div
          className="mb-20 border-b border-primary-foreground/10 pb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-heading-lg font-display italic max-w-3xl" style={{ color: "hsl(0,0%,25%)" }}>
            Minus the Noise.
            <br />
            <span className="text-accent-gold">Plus the Results.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-lg tracking-[0.1em] uppercase mb-4">
              Plus<span className="text-accent-gold">Minus</span>
            </h3>
            <p className="text-small" style={{ color: "hsl(0,0%,40%)" }}>
              Brand-led websites built to perform.
            </p>
          </div>
          <div>
            <h4 className="text-small font-semibold tracking-[0.2em] uppercase mb-6 text-accent-gold">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-small transition-colors duration-200 hover:text-accent-gold"
                  style={{ color: "hsl(0,0%,50%)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-small font-semibold tracking-[0.2em] uppercase mb-6 text-accent-gold">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@plusminusdigital.com"
                className="text-small transition-colors duration-200 hover:text-accent-gold"
                style={{ color: "hsl(0,0%,50%)" }}
              >
                hello@plusminusdigital.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small transition-colors duration-200 hover:text-accent-gold"
                style={{ color: "hsl(0,0%,50%)" }}
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-small font-semibold tracking-[0.2em] uppercase mb-6 text-accent-gold">Location</h4>
            <p className="text-small" style={{ color: "hsl(0,0%,50%)" }}>
              Amsterdam, NL
              <br />
              Available worldwide
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-small" style={{ color: "hsl(0,0%,30%)" }}>
            © 2026 PlusMinus Digital
          </p>
          <p className="text-small" style={{ color: "hsl(0,0%,25%)" }}>
            Designed & Built by PlusMinus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
