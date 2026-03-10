import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/insights" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always use light style
  const isDark = isHome && !pastHero;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-background-dark/95 backdrop-blur-xl"
            : "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-site w-full flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight transition-colors duration-300"
          style={{ color: isDark ? "hsl(0 0% 95%)" : "hsl(0 0% 8%)" }}
        >
          PlusMinus
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-foreground/5"
              style={{ color: isDark ? "hsl(0 0% 60%)" : "hsl(0 0% 45%)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 8%)",
              color: isDark ? "hsl(0 0% 8%)" : "hsl(0 0% 100%)",
            }}
          >
            Let's Talk
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: isDark ? "hsl(0 0% 95%)" : "hsl(0 0% 8%)" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-site py-10 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-bold text-foreground hover:text-foreground-muted transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-[13px] font-semibold px-6 py-3 rounded-full bg-foreground text-background w-fit"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
