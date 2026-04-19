import { motion } from "framer-motion";

interface SectionCaptionProps {
  number: string; // "01", "02"...
  label: string; // "Manifesto"
  year?: string;
  tone?: "light" | "dark";
}

const SectionCaption = ({ number, label, year = "2025", tone = "light" }: SectionCaptionProps) => {
  const color = tone === "dark" ? "hsl(0 0% 55%)" : "hsl(var(--foreground-muted))";
  const divider = tone === "dark" ? "hsl(0 0% 20%)" : "hsl(var(--border))";

  return (
    <motion.div
      className="flex items-center gap-3 mb-10 md:mb-16"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span
        className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em]"
        style={{ color }}
      >
        Nº {number}
      </span>
      <span className="block w-8 h-px" style={{ background: divider }} />
      <span
        className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em]"
        style={{ color }}
      >
        {label}
      </span>
      <span className="block w-8 h-px" style={{ background: divider }} />
      <span
        className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em]"
        style={{ color }}
      >
        ©{year}
      </span>
    </motion.div>
  );
};

export default SectionCaption;
