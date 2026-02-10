import imgSarah from "../assets/9b83359900bb65f8442c7837f9020a8c93a223e5.png";
import imgMarcus from "../assets/7b6a5b8b9e946bc0cd570feef04622c9857434cb.png";
import imgEmily from "../assets/c7bc8b933f4b89a372fc54b830c07c07db005c81.png";
import svgPaths from "../imports/svg-vwdc2ur8x1";
import { motion } from "motion/react";
import { useRef } from "react";
import { useNavTheme } from "../hooks/useNavTheme";

export function Testimonials() {
   const containerRef = useRef(null);
   const ref = useNavTheme("light");

   const testimonials = [
      {
         quote: "Working with the Enuoh team was a seamless experience. They translated our vision into a digital reality.",
         name: "Sarah Jenkins",
         role: "CMO, Lumen Banking",
         image: imgSarah,
         width: "w-[300px] md:w-[400px] lg:w-[600px] flex-grow" // flexible
      },
      {
         quote: "The motion design work provided by Enuoh gave our product launch the energy it needed.",
         name: "Marcus Chen",
         role: "Founder, FitSync",
         image: imgMarcus,
         width: "w-[300px] md:w-[413px]"
      },
      {
         quote: "Design isn't just about looks, it's about how it works. Enuoh understands this better than anyone.",
         name: "Emily Ross",
         role: "Director, Studio Archi",
         image: imgEmily,
         width: "w-[300px] md:w-[439px]"
      }
   ];

   return (
      <section ref={ref} className="bg-[#f5f5f0] w-full min-h-[606px] pt-[97px] overflow-hidden relative border-t border-black/5 pb-24">
         <div className="mx-auto max-w-[1280px] px-8 md:px-8 xl:px-0 h-full flex flex-col gap-[64px]">

            {/* Header - Made Relative for responsiveness */}
            <div className="relative w-full flex flex-col md:block md:h-[81px] gap-8 md:gap-0">
               <div className="w-full flex justify-center md:justify-start md:absolute md:top-0 md:left-0 md:pl-[80px]">
                  <p className="font-oswald font-bold text-[#6a7282] text-[10px] tracking-[1px] uppercase text-center md:text-left">/ Testimonials /</p>
               </div>

               <div className="w-full flex justify-center md:absolute md:top-[31px]">
                  <div className="relative w-full max-w-[567px] h-auto md:h-[48px] text-center">
                     <h2 className="font-oswald font-bold text-[32px] md:text-[48px] leading-[1.1] md:leading-[48px] text-black text-center tracking-[-1px] md:tracking-[-2.4px] uppercase whitespace-normal md:whitespace-nowrap">
                        Don't take our word for it
                     </h2>
                     <div className="hidden md:block absolute -right-8 top-2 w-[32px] h-[32px]">
                        <svg viewBox="0 0 32 32" fill="none">
                           <path d={svgPaths.p2137b930} fill="#FF6900" stroke="#FF6900" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>

            {/* Cards Scroll */}
            <div className="w-full overflow-visible" ref={containerRef}>
               <motion.div
                  drag="x"
                  dragConstraints={containerRef}
                  className="flex gap-[24px] px-0 md:px-[80px] w-max cursor-grab active:cursor-grabbing"
               >
                  {testimonials.map((t, i) => (
                     <div
                        key={i}
                        className={`h-auto min-h-[236px] bg-black rounded-[16px] border border-white/10 shadow-xl p-[24px] md:p-[33px] flex flex-col justify-between shrink-0 ${t.width}`}
                     >
                        {/* Stars */}
                        <div className="flex gap-[4px] mb-4">
                           {[1, 2, 3, 4, 5].map(s => (
                              <div key={s} className="w-[16px] h-[16px]">
                                 <svg viewBox="0 0 16 16" fill="none">
                                    <path d={svgPaths.p13832a00} fill="#FF6900" stroke="#FF6900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </div>
                           ))}
                        </div>

                        {/* Quote */}
                        <p className="font-oswald font-light text-[16px] md:text-[18px] leading-[26px] md:leading-[29px] text-white whitespace-normal mb-6">"{t.quote}"</p>

                        {/* Person */}
                        <div className="flex items-center gap-[16px]">
                           <div className="w-[40px] h-[40px] rounded-full overflow-hidden shrink-0">
                              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="flex flex-col">
                              <p className="font-oswald font-bold text-[14px] leading-[20px] text-white">{t.name}</p>
                              <p className="font-oswald font-normal text-[#99a1af] text-[10px] leading-[15px] tracking-[1px] uppercase">{t.role}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>

         </div>
      </section>
   );
}
