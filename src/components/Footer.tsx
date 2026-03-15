import { Link } from "react-router-dom";
import logoMark from "@/assets/logo-mark-transparent.png";

const footerLinks = {
  Navigation: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/insights" },
  ],
  Contact: [
    { label: "hello@plusminus.studio", href: "mailto:hello@plusminus.studio" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};

const Footer = () => {
  return (
    <footer className="section-dark border-t" style={{ borderColor: "hsl(0 0% 15%)", padding: "60px 0 32px" }}>
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoMark} alt="PlusMinus" className="h-5 md:h-6 w-auto" style={{ filter: "invert(1)" }} />
              <span className="text-base md:text-lg font-bold" style={{ color: "hsl(0 0% 80%)" }}>PlusMinus</span>
            </Link>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "hsl(0 0% 30%)" }}>
              Minus the noise. Plus the results.
            </p>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(0 0% 40%)" }}>
              A digital design and development studio from Mumbai, India — helping ambitious brands grow through exceptional web experiences worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-4 md:mb-6" style={{ color: "hsl(0 0% 40%)" }}>
                {title}
              </h4>
              <nav className="flex flex-col gap-2 md:gap-3">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto");
                  return isExternal ? (
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
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm hover:text-white transition-colors duration-300"
                      style={{ color: "hsl(0 0% 50%)" }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 md:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-2" style={{ borderColor: "hsl(0 0% 15%)" }}>
          <p className="text-[12px] font-medium" style={{ color: "hsl(0 0% 25%)" }}>
            © 2025 PlusMinus Studio. All rights reserved.
          </p>
          <p className="text-[12px] font-medium" style={{ color: "hsl(0 0% 20%)" }}>
            Mumbai, India — Available worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
