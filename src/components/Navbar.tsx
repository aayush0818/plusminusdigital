import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#philosophy" },
  { label: "Insights", href: "#insights" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-background-dark/95 backdrop-blur-md border-b border-foreground-light/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-site w-full flex items-center justify-between">
        <a href="#" className="text-primary-foreground font-bold text-xl tracking-tight" style={{ color: "hsl(40, 7%, 95%)" }}>
          PlusMinus
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-gold"
              style={{ color: "hsl(40, 7%, 75%)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="default">
            Start Project
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "hsl(40, 7%, 95%)" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background-dark/98 backdrop-blur-md border-b border-foreground-light/10 md:hidden">
          <div className="container-site py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-200 hover:text-accent-gold"
                style={{ color: "hsl(40, 7%, 85%)" }}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" className="w-fit mt-2">
              Start Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
