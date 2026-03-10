import { motion } from "framer-motion";

interface MockupProps {
  variant: "browser" | "phone" | "tablet";
  colors: string[];
  className?: string;
  style?: React.CSSProperties;
}

const BrowserContent = ({ colors }: { colors: string[] }) => (
  <div className="w-full h-full flex flex-col gap-[3%] p-[4%]">
    {/* Nav */}
    <div className="flex items-center justify-between">
      <div className="w-[15%] h-[8px] rounded-full" style={{ background: colors[0] }} />
      <div className="flex gap-[2%]">
        {[1, 2, 3].map((n) => (
          <div key={n} className="w-[40px] h-[6px] rounded-full opacity-40" style={{ background: colors[1] }} />
        ))}
      </div>
    </div>
    {/* Hero */}
    <div className="flex-1 flex flex-col md:flex-row gap-[4%]">
      <div className="flex-1 flex flex-col justify-center gap-[8%]">
        <div className="w-[80%] h-[12px] rounded-full" style={{ background: colors[0] }} />
        <div className="w-[95%] h-[24px] md:h-[32px] rounded-lg" style={{ background: colors[0], opacity: 0.15 }} />
        <div className="w-[60%] h-[8px] rounded-full opacity-50" style={{ background: colors[1] }} />
        <div className="w-[35%] h-[28px] rounded-full mt-[4%]" style={{ background: colors[0] }} />
      </div>
      <div className="flex-1 rounded-lg" style={{ background: `linear-gradient(135deg, ${colors[0]}33, ${colors[1]}55)` }} />
    </div>
    {/* Cards row */}
    <div className="flex gap-[3%]">
      {colors.slice(0, 3).map((c, i) => (
        <div key={i} className="flex-1 rounded-lg aspect-[4/3]" style={{ background: `${c}22`, borderLeft: `3px solid ${c}` }} />
      ))}
    </div>
  </div>
);

const PhoneContent = ({ colors }: { colors: string[] }) => (
  <div className="w-full h-full flex flex-col gap-[3%] p-[6%]">
    <div className="w-[30%] h-[6px] rounded-full mx-auto" style={{ background: colors[0], opacity: 0.3 }} />
    <div className="flex-1 rounded-lg" style={{ background: `linear-gradient(180deg, ${colors[0]}22, ${colors[1]}33)` }}>
      <div className="p-[8%] flex flex-col gap-[6%]">
        <div className="w-[60%] h-[8px] rounded-full" style={{ background: colors[0] }} />
        <div className="w-[90%] h-[6px] rounded-full opacity-40" style={{ background: colors[1] }} />
        <div className="w-[75%] h-[6px] rounded-full opacity-30" style={{ background: colors[1] }} />
        <div className="w-[40%] h-[20px] rounded-full mt-[4%]" style={{ background: colors[0] }} />
      </div>
    </div>
    <div className="flex gap-[3%]">
      {[0, 1].map((i) => (
        <div key={i} className="flex-1 rounded-md aspect-square" style={{ background: `${colors[i]}22` }} />
      ))}
    </div>
    <div className="w-[25%] h-[4px] rounded-full mx-auto" style={{ background: colors[0], opacity: 0.2 }} />
  </div>
);

const ProjectMockup = ({ variant, colors, className = "", style }: MockupProps) => {
  if (variant === "browser") {
    return (
      <motion.div
        className={`rounded-xl overflow-hidden shadow-2xl ${className}`}
        style={{ background: "hsl(0 0% 6%)", border: "1px solid hsl(0 0% 15%)", ...style }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: "hsl(0 0% 10%)", borderBottom: "1px solid hsl(0 0% 15%)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 70% 55%)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(45 70% 55%)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(130 50% 50%)" }} />
          </div>
          <div className="flex-1 mx-8">
            <div className="h-5 rounded-md mx-auto max-w-[240px]" style={{ background: "hsl(0 0% 14%)" }} />
          </div>
        </div>
        {/* Content */}
        <div className="aspect-[16/10]">
          <BrowserContent colors={colors} />
        </div>
      </motion.div>
    );
  }

  if (variant === "phone") {
    return (
      <motion.div
        className={`rounded-[28px] overflow-hidden shadow-2xl ${className}`}
        style={{ background: "hsl(0 0% 6%)", border: "3px solid hsl(0 0% 18%)", width: 220, ...style }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-16 h-4 rounded-full" style={{ background: "hsl(0 0% 10%)" }} />
        </div>
        <div className="aspect-[9/18] px-1 pb-2">
          <PhoneContent colors={colors} />
        </div>
      </motion.div>
    );
  }

  // tablet
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden shadow-2xl ${className}`}
      style={{ background: "hsl(0 0% 6%)", border: "2px solid hsl(0 0% 15%)", width: 360, ...style }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="flex justify-center pt-2">
        <div className="w-3 h-3 rounded-full" style={{ background: "hsl(0 0% 12%)" }} />
      </div>
      <div className="aspect-[4/3] p-1">
        <BrowserContent colors={colors} />
      </div>
    </motion.div>
  );
};

export default ProjectMockup;
