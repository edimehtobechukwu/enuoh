import { motion } from "motion/react";
import { useNavTheme } from "../hooks/useNavTheme";

export function Marquee() {
  const ref = useNavTheme("light");
  const logos = [
    { text: "DEHIT", style: "font-black tracking-tight" },
    { text: "BOOMBOX®", style: "font-bold tracking-widest" },
    { text: "W", style: "font-black text-[40px]" }, // Placeholder for logo icon
    { text: "Work is Play", style: "font-light italic" },
    { text: "KASTLE", style: "font-bold tracking-[4px]" },
    { text: "Glyf ⚡", style: "font-bold font-mono" },
  ];

  return (
    <section ref={ref} className="w-full bg-[#f5f5f0] h-[160px] md:h-[223px] relative flex flex-col items-center overflow-hidden border-b border-black/5">
      {/* Top Tag */}
      <div className="absolute top-[32px] md:top-[64px] flex items-center gap-2 z-10">
        <span className="text-[#99a1af] font-mono font-normal text-[10px] uppercase tracking-[1px] font-consolas">[ Moving Forward Together ]</span>
        <span className="text-[#99a1af] font-mono font-normal text-[10px] uppercase tracking-[1px] font-consolas">↓</span>
      </div>

      {/* Logos Container */}
      <div className="absolute top-[80px] md:top-[111px] w-full">
        <div className="w-full overflow-hidden mask-linear-fade">
          <motion.div
            className="flex items-center gap-16 md:gap-32 min-w-max"
            animate={{ x: [0, -1035] }} // Adjusted approximate width of one set
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Content duplicated 4 times for seamless loop */}
            {[1, 2, 3, 4].map((set) => (
              <div key={set} className="flex items-center gap-16 md:gap-32 shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

                {/* DEHIT */}
                <span className="font-oswald font-black text-[32px] md:text-[40px] text-black uppercase tracking-[-2px]">DEHIT</span>

                {/* BOOMBOX */}
                <div className="flex items-center gap-1 border-2 border-black px-2 py-1">
                  <span className="font-oswald font-bold text-[20px] md:text-[24px] text-black uppercase tracking-[2px]">BOOMBOX</span>
                  <span className="text-[10px] align-top">®</span>
                </div>

                {/* W (Logo Mark) */}
                <div className="flex flex-col items-center justify-center w-[50px] h-[50px] bg-black rounded-full text-white">
                  <span className="font-oswald font-bold text-[28px] leading-none mb-1">W</span>
                </div>

                {/* Work is Play */}
                <span className="font-serif italic font-bold text-[24px] md:text-[32px] text-black">Work is Play</span>

                {/* KASTLE */}
                <div className="flex items-center gap-1 relative">
                  <span className="font-oswald font-bold text-[24px] md:text-[32px] text-black uppercase tracking-[4px]">KASTLE</span>
                  <span className="text-[20px]">🏰</span>
                </div>

                {/* Glyf */}
                <div className="flex items-center gap-1 relative">
                  <span className="font-mono font-bold text-[24px] md:text-[32px] text-black uppercase tracking-[-1px]">Glyf</span>
                  <span className="text-[24px] text-[#ff4d00]">⚡</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
