import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Hero" },
  { id: "manifesto", label: "Manifesto" },
  { id: "about", label: "Philosophy" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "journal", label: "Journal" },
  { id: "cta", label: "Contact" },
];

const SectionRail = () => {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = id === "top" ? document.body : document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-[9996] flex-col gap-4"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          aria-label={`Go to ${s.label}`}
          className="group relative flex items-center justify-end gap-3"
        >
          <span
            className="text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "hsl(var(--accent-signal))" }}
          >
            {s.label}
          </span>
          <span
            className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: active === s.id ? "hsl(var(--accent-signal))" : "hsl(0 0% 45% / 0.5)",
              transform: active === s.id ? "scale(1.6)" : "scale(1)",
            }}
          />
        </button>
      ))}
    </nav>
  );
};

export default SectionRail;
