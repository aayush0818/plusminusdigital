import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-dark relative overflow-hidden" style={{ borderTop: "1px solid hsl(0 0% 12%)" }}>
      <div className="container-site" style={{ padding: "clamp(60px, 8vw, 120px) 0 32px" }}>
        {/* Top row: editorial caption */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: "hsl(0 0% 45%)" }}>
            Nº 08
          </span>
          <span className="block w-8 h-px" style={{ background: "hsl(0 0% 20%)" }} />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: "hsl(0 0% 45%)" }}>
            End ©2025
          </span>
        </div>

        {/* Massive typographic statement */}
        <div
          className="font-display italic mb-12 md:mb-20"
          style={{
            fontSize: "clamp(64px, 13vw, 220px)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "hsl(0 0% 92%)",
          }}
        >
          Let's make
          <br />
          something <span style={{ color: "hsl(0 0% 50%)" }}>◇</span> good.
        </div>

        {/* Address spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-20" style={{ borderBottom: "1px solid hsl(0 0% 15%)" }}>
          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(0 0% 35%)" }}>
              ⌂ Studio
            </p>
            <p className="text-base md:text-lg" style={{ color: "hsl(0 0% 75%)" }}>
              Mumbai, India
              <br />
              <span style={{ color: "hsl(0 0% 45%)" }}>Working worldwide ⤴</span>
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(0 0% 35%)" }}>
              ✉ Contact
            </p>
            <a
              href="mailto:hello@plusminusdigital.in"
              className="text-base md:text-lg hover:opacity-70 transition-opacity"
              style={{ color: "hsl(0 0% 75%)" }}
            >
              hello@plusminusdigital.in
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(0 0% 35%)" }}>
              ◇ Elsewhere
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/plusminusdigital.in?igsh=MWVvaXZ2bnFha3pyNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg hover:opacity-70 transition-opacity"
                style={{ color: "hsl(0 0% 75%)" }}
              >
                Instagram ⤴
              </a>
              <a
                href="https://www.linkedin.com/company/plusminusdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg hover:opacity-70 transition-opacity"
                style={{ color: "hsl(0 0% 75%)" }}
              >
                LinkedIn ⤴
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-baseline">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: "hsl(0 0% 30%)" }}>
            ©2025 PlusMinus Studio
          </p>
          <nav className="flex flex-wrap gap-4 md:justify-center text-[10px] font-mono uppercase tracking-[0.25em]">
            {[
              { to: "/work", l: "Work" },
              { to: "/services", l: "Services" },
              { to: "/about", l: "About" },
              { to: "/insights", l: "Journal" },
              { to: "/contact", l: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:opacity-100 transition-opacity"
                style={{ color: "hsl(0 0% 50%)" }}
              >
                {link.l}
              </Link>
            ))}
          </nav>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] md:text-right" style={{ color: "hsl(0 0% 30%)" }}>
            Q Minus the noise · Plus the results
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
