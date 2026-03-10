const footerLinks = {
  Navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Journal", href: "#journal" },
  ],
  Contact: [
    { label: "hello@plusminusdigital.com", href: "mailto:hello@plusminusdigital.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};

const Footer = () => {
  return (
    <footer className="section-dark border-t" style={{ borderColor: "hsl(0 0% 15%)", padding: "80px 0 40px" }}>
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="text-xl font-bold block mb-3" style={{ color: "hsl(0 0% 80%)" }}>
              PlusMinus
            </span>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(0 0% 40%)" }}>
              A digital design and development studio helping ambitious brands grow through exceptional web experiences.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: "hsl(0 0% 40%)" }}>
                {title}
              </h4>
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300"
                    style={{ color: "hsl(0 0% 50%)" }}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex items-center justify-between flex-wrap gap-4" style={{ borderColor: "hsl(0 0% 15%)" }}>
          <p className="text-[12px] font-medium" style={{ color: "hsl(0 0% 25%)" }}>
            © 2026 PlusMinus Digital. All rights reserved.
          </p>
          <p className="text-[12px] font-medium" style={{ color: "hsl(0 0% 20%)" }}>
            Amsterdam, NL — Available worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
