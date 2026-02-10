import imgMap from "../assets/27c58bf6501b866922f10189914d7684e80d0170.png";
import imgFounder from "../assets/2b9ef09f6892e65c2f6b68b67b59e19642716597.png";
import imgFounderFront from "../assets/da7d1ff6362f06d73d65f2b8968988b602f9d655.png";
import { motion } from "motion/react";
import { useNavTheme } from "../hooks/useNavTheme";

export function About() {
   const ref = useNavTheme("dark");
   return (
      <section ref={ref} className="bg-[#050505] w-full pt-[97px] pb-32 overflow-hidden">
         <div className="mx-auto max-w-[1280px] px-8 md:px-8 xl:px-0 flex flex-col gap-[80px]">

            {/* Map Section */}
            <div className="flex flex-col gap-[24px]">
               {/* Fixed Alignment Header */}
               <div className="flex items-center justify-center md:justify-start gap-3 w-full">
                  <h3 className="font-oswald font-bold text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase whitespace-nowrap">
                     Based in Quebec, Canada
                  </h3>
                  <div className="w-[8px] h-[8px] bg-[#00c950] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,201,80,0.6)]" />
               </div>

               <div className="w-full h-[300px] md:h-[548px] bg-[#0a0a0a] rounded-[16px] border border-white/10 relative overflow-hidden group">
                  <img src={imgMap} alt="World Map" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                  {/* Pin - Repositioned to be more accurate to generic Quebec location on a world map projection */}
                  <motion.div
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className="absolute top-[28%] left-[28%] md:top-[192px] md:left-[358px] w-[16px] h-[16px] bg-[#ff6900] border-[4px] border-[#0a0a0a] rounded-full shadow-[0_0_20px_rgba(255,165,0,0.5)] z-10"
                  >
                     <div className="absolute -inset-4 bg-[#ff6900] opacity-20 rounded-full animate-ping" />
                  </motion.div>

                  {/* Gradient Overlay for better text integration if needed later */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
               </div>
            </div>

            {/* Stats Section */}
            <div className="md:h-[170px] py-8 md:py-0 border-y border-white/10 relative flex items-center">
               <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0 px-0 md:pr-[0px]">
                  {/* Stat 1 */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="flex flex-col gap-[8px] w-full md:w-1/3 text-center md:text-left"
                  >
                     <h3 className="font-oswald font-bold text-[48px] leading-[48px] text-white">13+</h3>
                     <p className="font-oswald font-normal text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">Experience</p>
                  </motion.div>

                  {/* Stat 2 */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="flex flex-col gap-[8px] w-full md:w-1/3 text-center md:text-left"
                  >
                     <h3 className="font-oswald font-bold text-[48px] leading-[48px] text-white">15+</h3>
                     <p className="font-oswald font-normal text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">Awards</p>
                  </motion.div>

                  {/* Stat 3 */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 }}
                     className="flex flex-col gap-[8px] w-full md:w-1/3 text-center md:text-left"
                  >
                     <h3 className="font-oswald font-bold text-[48px] leading-[48px] text-white">350+</h3>
                     <p className="font-oswald font-normal text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">Projects</p>
                  </motion.div>
               </div>
            </div>

            {/* Founder Section */}
            <div className="flex flex-col md:flex-row gap-[32px] md:h-[780px]">
               {/* Text Content */}
               <div className="w-full md:flex-1 order-2 md:order-1 relative md:pt-[300px] flex flex-col justify-center md:justify-start">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex flex-col gap-[24px]"
                  >
                     <h3 className="font-oswald font-bold text-[24px] leading-[32px] text-white uppercase">The Founder</h3>
                     <p className="font-oswald font-normal text-[#99a1af] text-[16px] leading-[26px] w-full whitespace-pre-wrap">
                        "A Nigerian creative based in Canada, I co-founded AmonCraft with a vision to push boundaries. As modern designers, we look beyond aesthetics to solve real problems and create lasting impact."
                     </p>

                     {/* Socials */}
                     <div className="flex gap-[16px]">
                        {["IG", "LI", "TW"].map((social) => (
                           <div key={social} className="w-[40px] h-[40px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                              <span className="font-oswald font-normal text-[16px] leading-[24px] text-white">{social}</span>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </div>

               {/* Image */}
               <div className="w-full md:flex-1 h-[500px] md:h-full order-1 md:order-2 relative rounded-[16px] overflow-hidden group">
                  <img src={imgFounder} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <motion.img
                     src={imgFounderFront}
                     alt="Eric Enuoh"
                     className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-[16px] left-[16px] z-20 flex flex-col">
                     <p className="font-oswald font-bold text-[18px] leading-[28px] text-white">Eric Enuoh</p>
                     <p className="font-oswald font-bold text-[#ff6900] text-[12px] leading-[16px] tracking-[1.2px] uppercase">Founder / Creative Director</p>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
}
