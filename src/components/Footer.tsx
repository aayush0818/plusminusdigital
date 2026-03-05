const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#philosophy" },
  { label: "Insights", href: "#insights" },
];

const Footer = () => {
  return (
    <footer className="section-dark border-t border-foreground-light/10" style={{ padding: "80px 0 40px" }}>
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-xl tracking-tight mb-3">PlusMinus</h3>
            <p className="text-small" style={{ color: "hsl(0, 0%, 50%)" }}>
              Minus the Noise. Plus the Results.
            </p>
          </div>
          <div>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-small transition-colors duration-200 hover:text-accent-gold"
                  style={{ color: "hsl(0, 0%, 60%)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@plusminusdigital.com"
              className="text-small transition-colors duration-200 hover:text-accent-gold"
              style={{ color: "hsl(0, 0%, 60%)" }}
            >
              hello@plusminusdigital.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small transition-colors duration-200 hover:text-accent-gold"
              style={{ color: "hsl(0, 0%, 60%)" }}
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t border-foreground-light/10 pt-8">
          <p className="text-small" style={{ color: "hsl(0, 0%, 35%)" }}>
            © 2026 PlusMinus Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
