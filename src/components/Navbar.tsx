import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoMark from "@/assets/logo-mark.png";

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
  const isCaseStudy = location.pathname.startsWith("/work/") && location.pathname !== "/work";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isDark = (isHome || isCaseStudy) && !pastHero;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 flex items-center transition-all duration-500 ${
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
        <Link to="/" className="flex items-center transition-colors duration-300">
          <img
            src={logoMark}
            alt="PlusMinus"
            className="h-8 md:h-10 w-auto transition-all duration-300"
            style={{ filter: isDark ? "invert(1)" : "none" }}
          />
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
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: isDark ? "hsl(0 0% 95%)" : "hsl(0 0% 8%)" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-16 md:top-20 left-0 right-0 backdrop-blur-xl border-b border-border md:hidden"
            style={{ background: isDark ? "hsl(0 0% 7% / 0.98)" : "hsl(var(--background) / 0.98)" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-site py-8 flex flex-col gap-4">
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
                    className="text-2xl font-bold transition-colors block min-h-[44px] flex items-center"
                    style={{ color: isDark ? "hsl(0 0% 90%)" : "hsl(var(--foreground))" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-[13px] font-semibold px-6 py-3 rounded-full w-fit"
                style={{
                  backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(var(--foreground))",
                  color: isDark ? "hsl(0 0% 8%)" : "hsl(var(--background))",
                }}
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
