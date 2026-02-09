import imgEmoji from "../assets/d7652b13a9697a39c39ce1bd5e5f4a55ca1b0b8b.png";
import svgPaths from "../imports/svg-vwdc2ur8x1";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f0] w-full relative">
      <div className="mx-auto max-w-[1280px] px-8 md:px-8 xl:px-0">

        {/* CTA Section */}
        <div className="min-h-[400px] md:h-[586px] w-full flex flex-col items-center pt-[64px] md:pt-[128px] gap-[32px] md:gap-[48px] relative pb-16 md:pb-0">

          {/* Heading */}
          <div className="relative w-full flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[900px] text-center"
            >
              <h2 className="font-oswald font-bold text-[60px] md:text-[128px] leading-[0.9] md:leading-[115px] text-black tracking-[-3px] md:tracking-[-6.4px] uppercase">
                Let's Cut <br /> The BS.
              </h2>
              <img src={imgEmoji} alt="Call Me Hand" className="absolute -bottom-8 right-8 md:top-[114px] md:right-[200px] w-[64px] h-[64px] md:w-[96px] md:h-[96px] object-contain hidden md:block" />
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] w-full md:w-auto items-center">
            {/* Talk To Us */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-[170px] h-[52px] bg-black rounded-full flex items-center justify-center gap-[8px] group"
            >
              <div className="w-[16px] h-[16px]">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p405f80} stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-oswald font-bold text-[14px] leading-[20px] text-white tracking-[1.4px] uppercase">Talk To Us</span>
            </motion.button>

            {/* Email Us */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-[156px] h-[52px] bg-[#ff4d00] rounded-full flex items-center justify-center gap-[8px] group"
            >
              <div className="w-[16px] h-[16px]">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p2f8e7e80} stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17070980} stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-oswald font-bold text-[14px] leading-[20px] text-white tracking-[1.4px] uppercase">Email Us</span>
            </motion.button>
          </div>

        </div>

        {/* Links Section */}
        <div className="border-t border-black/5 py-[48px] md:py-[64px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[48px] md:gap-[32px]">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[32px] h-[32px] bg-white rounded-[4px] flex items-center justify-center">
                <span className="font-oswald font-bold text-[18px] text-black">E</span>
              </div>
              <span className="font-oswald font-bold text-[20px] text-black tracking-[-0.5px]">Enuoh Creative Co.</span>
            </div>
            <p className="font-oswald font-normal text-[#6a7282] text-[12px] leading-[19.5px] max-w-[282px]">
              Full Service Digital Agency based in Quebec. Creating meaningful digital experiences for brands that want to move forward.
            </p>
          </div>

          {/* Col 2: Menu */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-oswald font-bold text-[#6a7282] text-[10px] tracking-[1px] uppercase">Menu</h4>
            <ul className="flex flex-col gap-[12px]">
              {["Work", "Services", "About", "Contact"].map(item => (
                <li key={item}><a href="#" className="font-oswald font-bold text-[#d1d5dc] text-[14px] leading-[20px] hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-oswald font-bold text-[#6a7282] text-[10px] tracking-[1px] uppercase">Socials</h4>
            <ul className="flex flex-col gap-[12px]">
              {["Instagram", "LinkedIn", "Behance", "Dribbble"].map(item => (
                <li key={item}><a href="#" className="font-oswald font-bold text-[#d1d5dc] text-[14px] leading-[20px] hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-oswald font-bold text-[#6a7282] text-[10px] tracking-[1px] uppercase">Legal</h4>
            <ul className="flex flex-col gap-[12px]">
              {["Privacy Policy", "Terms of Service", "Cookies"].map(item => (
                <li key={item}><a href="#" className="font-oswald font-bold text-[#d1d5dc] text-[14px] leading-[20px] hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
