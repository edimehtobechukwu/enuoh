import { motion } from "motion/react";
import { useNavTheme } from "../hooks/useNavTheme";

export function Awards() {
   const ref = useNavTheme("light");
   const awards = [
      { name: "CSS Design Awards", count: "3x", year: "2024" },
      { name: "Awwwards", count: "5x", year: "2023" },
      { name: "FWA of the Day", count: "2x", year: "2023" },
      { name: "Clutch Top Agency", count: "1x", year: "2022" },
      { name: "Behance Featured", count: "10x", year: "2022" },
      { name: "Dribbble Trending", count: "∞", year: "2021" },
   ];

   return (
      <section ref={ref} className="bg-[#f5f5f0] w-full pt-[97px] pb-32 border-t border-black/5 relative">
         <div className="mx-auto max-w-[1280px] px-8 md:px-8 xl:px-0 flex flex-col gap-[64px]">

            <div className="flex flex-col gap-[64px]">

               {/* Header */}
               <div className="flex flex-col gap-[16px] md:h-[114px] w-full relative">
                  <p className="font-oswald font-bold text-[#6a7282] text-[10px] tracking-[1px] uppercase">/ Awards & Recognition /</p>
                  <div className="relative w-full">
                     <h2 className="font-oswald font-bold text-[48px] md:text-[60px] leading-[0.9] md:leading-[60px] text-black tracking-[-2px] md:tracking-[-3px] uppercase">
                        We Don't <br className="md:hidden" /> Chase Awards.
                        <span className="inline-block md:absolute md:left-[572px] md:-top-[15px] font-oswald font-bold text-[60px] leading-[60px] text-[#ff6900] tracking-[-3px] ml-2 md:ml-0">*</span>
                     </h2>
                  </div>
                  <p className="font-oswald font-bold text-[#ff6900] text-[10px] uppercase mt-2 md:mt-0">*But we take them.</p>
               </div>

               {/* Grid of Awards */}
               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[48px] gap-y-[16px] content-start">
                  {awards.map((award, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between pb-px border-b border-black/10 h-[53px] group hover:pl-4 transition-all duration-300 cursor-default"
                     >
                        <span className="font-oswald font-bold text-[14px] leading-[20px] text-black uppercase">{award.name}</span>
                        <div className="flex gap-[16px] opacity-50 group-hover:opacity-100 transition-opacity">
                           <span className="font-consolas font-normal text-[12px] leading-[16px] text-black w-[13px]">{award.count}</span>
                           <span className="font-consolas font-normal text-[12px] leading-[16px] text-black">{award.year}</span>
                        </div>
                     </motion.div>
                  ))}
               </div>

            </div>
         </div>
      </section>
   );
}
