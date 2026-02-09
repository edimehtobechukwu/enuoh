import imgLumen from "../assets/7f77ddeb66e44742e180b8bb6f3cb3c1cc38251c.png";
import imgTaskFlow from "../assets/8829e6dc4c9b53f1fe8e022823902732923974f0.png";
import imgFitSync from "../assets/1edb7b09d8d3b0516e19eb84dda8fc15b5ca372b.png";
import imgStudio from "../assets/1183a8119a896de33fe7c40956e62f807143b437.png";
import imgJS from "../assets/d53d54111ba8d07a72b3f5ba12ec4f50ffafe2a7.png";
import svgPaths from "../imports/svg-vwdc2ur8x1";
import { motion } from "motion/react";

export function FeaturedWork() {
  return (
    <section className="bg-[#f5f5f0] w-full pb-32">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0">

        {/* Header */}
        <div className="flex justify-between items-center mb-12 border-b border-black/10 pb-6 pt-12">
          <div className="flex items-center gap-2">
            <h2 className="font-oswald font-bold text-[36px] uppercase tracking-[-1.8px] leading-[40px]">Featured Work</h2>
            <div className="w-[20px] h-[20px]">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <button className="flex items-center gap-2 group">
            <span className="font-oswald font-bold text-[12px] uppercase leading-[16px]">Filter</span>
            <div className="w-[16px] h-[16px]">
              <svg viewBox="0 0 16 16" fill="none">
                <path d={svgPaths.p12824f00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </button>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-[32px]">

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-[32px]">
            {/* Lumen Banking - ~66% width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:flex-[2] flex flex-col gap-[16px] group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] md:h-[674px] bg-white rounded-[16px] overflow-hidden border border-black/5 shadow-sm relative">
                <div className="absolute inset-0 p-[1px]">
                  <img src={imgLumen} alt="Lumen Banking" className="w-full h-full object-cover rounded-[15px] transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-oswald font-bold text-[18px] uppercase leading-[28px]">Lumen Banking</h3>
                <p className="font-oswald font-normal text-[#6a7282] text-[10px] tracking-[1px] uppercase leading-[15px]">Web Design / Branding</p>
              </div>
            </motion.div>

            {/* Task Flow - ~33% width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:flex-1 flex flex-col gap-[16px] group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] md:h-[674px] bg-[#b9553c] rounded-[16px] overflow-hidden relative flex items-center justify-center">
                <div className="w-[80%] max-w-[239px] h-auto aspect-[239/358] shadow-xl">
                  <img src={imgTaskFlow} alt="Task Flow" className="w-full h-full object-contain transition-transform duration-700 group-hover:-translate-y-4" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-oswald font-bold text-[18px] uppercase leading-[28px]">Task Flow</h3>
                <p className="font-oswald font-normal text-[#6a7282] text-[10px] tracking-[1px] uppercase leading-[15px]">Product Design</p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: FitSync */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col gap-[16px] group cursor-pointer"
          >
            <div className="w-full aspect-square md:aspect-[16/10] md:h-[800px] lg:h-[1000px] xl:h-[1312px] bg-[#111] rounded-[16px] overflow-hidden border border-white/5 relative flex items-center justify-center">
              <div className="w-full md:w-[80%] h-full md:h-[90%]">
                <img src={imgFitSync} alt="FitSync" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-oswald font-bold text-[18px] uppercase leading-[28px]">FitSync X</h3>
              <p className="font-oswald font-normal text-[#6a7282] text-[10px] tracking-[1px] uppercase leading-[15px]">Wearable OS</p>
            </div>
          </motion.div>

          {/* Row 3 - 50/50 split */}
          <div className="flex flex-col md:flex-row gap-[32px]">
            {/* Studio Archi */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:flex-1 flex flex-col gap-[16px] group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] md:h-[935px] bg-[#f3f4f6] rounded-[16px] overflow-hidden relative p-[1px]">
                <img src={imgStudio} alt="Studio Archi" className="w-full h-full object-cover rounded-[15px] transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-oswald font-bold text-[18px] uppercase leading-[28px]">Studio Archi</h3>
                <p className="font-oswald font-normal text-[#6a7282] text-[10px] tracking-[1px] uppercase leading-[15px]">Portfolio</p>
              </div>
            </motion.div>

            {/* JS Collection */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:flex-1 flex flex-col gap-[16px] group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] md:h-[935px] bg-[#991b1b] rounded-[16px] overflow-hidden relative">
                <div className="absolute inset-0 opacity-80 mix-blend-multiply">
                  <img src={imgJS} alt="JS Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-white">
                    <p className="font-oswald font-bold text-[24px] uppercase tracking-[-1.2px]">JS</p>
                    <p className="font-oswald font-bold text-[24px] uppercase tracking-[-1.2px] mt-2">Collection</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-oswald font-bold text-[18px] uppercase leading-[28px]">JS Collection</h3>
                <p className="font-oswald font-normal text-[#6a7282] text-[10px] tracking-[1px] uppercase leading-[15px]">E-Commerce</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
