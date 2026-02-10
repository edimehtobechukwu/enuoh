import imgAbstract from "../assets/ea2305de32166537453a573463cbddbb3d72751c.png";
import svgPaths from "../imports/svg-vwdc2ur8x1";
import { motion } from "motion/react";
import { useNavTheme } from "../hooks/useNavTheme";

export function Hero() {
    const ref = useNavTheme("dark");
    return (
        <section ref={ref} className="relative w-full min-h-[1000px] bg-[#f5f5f0] p-4 md:p-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[1486px] h-full min-h-[800px] md:h-[952px] bg-[#0a0a0a] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col md:block">

                {/* Navigation is absolute on top, handled by Navbar component */}

                <div className="md:absolute md:inset-0 w-full max-w-[1280px] mx-auto h-full px-4 md:px-0 relative flex flex-col-reverse md:block">
                    {/* Right Side: Abstract Shape & Blur - Mobile: Top (but strictly bottom in DOM order due to column-reverse, wait. 
                If I want image on top on mobile, I should use flex-col and image first in DOM. 
                But desktop relies on absolute positioning. 
                Let's keep the desktop absolute layout but make mobile relative stacking.
            */}

                    {/* Mobile: Image Section */}
                    <div className="relative w-full h-[400px] md:absolute md:left-[50%] md:ml-[24px] md:top-0 md:w-[616px] md:h-full overflow-visible md:pointer-events-none order-1 md:order-none mt-8 md:mt-0">
                        {/* Orange Blur */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.6, 0.5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 md:top-[158px] md:left-[123px] md:translate-x-0 md:translate-y-0 w-[250px] md:w-[370px] h-[300px] md:h-[475px] bg-[#ff4d00] rounded-full blur-[80px] md:blur-[120px] opacity-50"
                        />

                        {/* Abstract 3D Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 md:-top-[99px] md:-left-[77px] md:translate-x-0 md:translate-y-0 w-[300px] md:w-[770px] h-[400px] md:h-[990px]"
                        >
                            <img src={imgAbstract} alt="" className="w-full h-full object-contain" />
                        </motion.div>
                    </div>

                    {/* Left Side: Text Content */}
                    <div className="relative pt-[120px] md:absolute md:left-0 md:top-[207px] w-full md:w-[616px] z-10 order-2 md:order-none">
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="text-[#ff6900] font-mono text-[10px] uppercase tracking-[1px] font-consolas">[ We Are Enuoh ]</span>
                        </motion.div>

                        {/* Heading */}
                        <div className="relative w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-col items-start"
                            >
                                <h1 className="font-oswald font-medium text-[48px] md:text-[96px] leading-[0.9] text-white tracking-[-2px] md:tracking-[-4.8px] uppercase whitespace-pre-wrap">
                                    Moving Brands
                                </h1>
                                <h1 className="font-oswald font-medium text-[48px] md:text-[96px] leading-[0.9] text-white tracking-[-2px] md:tracking-[-4.8px] uppercase">
                                    Forward
                                </h1>
                            </motion.div>
                        </div>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-8 text-[#99a1af] font-oswald font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] w-full md:w-[448px]"
                        >
                            Enuoh builds motion-driven brand systems, unifying branding, web, and motion into a single evolving execution.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-[16px] mt-12"
                        >
                            {/* Our Shorts Button */}
                            <button className="h-[40px] px-6 bg-white rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 group">
                                <div className="w-[12px] h-[12px]">
                                    <svg viewBox="0 0 12 12" className="w-full h-full" fill="none">
                                        <path d={svgPaths.p32f38800} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[12px] font-bold uppercase text-black font-oswald tracking-[0.6px]">Our Shorts</span>
                            </button>

                            {/* Reach Out Button */}
                            <button className="h-[42px] w-[131px] relative rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 group">
                                <div className="absolute inset-0 border border-white/20 rounded-full" />
                                <span className="text-[12px] font-bold uppercase text-white font-oswald tracking-[0.6px]">Reach Out</span>
                                <div className="w-[12px] h-[12px]">
                                    <svg viewBox="0 0 12 12" className="w-full h-full" fill="none">
                                        <path d="M3.5 3.5H8.5V8.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.5 8.5L8.5 3.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>
                        </motion.div>
                    </div>

                    {/* Bottom Footer in Hero */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute left-0 bottom-[24px] w-full px-4 md:px-[80px] flex justify-between items-end z-20"
                    >
                        <div className="w-[104px] hidden md:block">
                            <p className="text-[#99a1af] font-oswald font-bold text-[10px] uppercase tracking-[1px] relative">
                                Scroll for more
                                <span className="absolute -top-[3px] left-[100px] text-[10px]">↓</span>
                            </p>
                        </div>
                        <div className="w-[62px]">
                            <p className="text-[#99a1af] font-oswald font-bold text-[10px] uppercase tracking-[1px]">Est. in 2019</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
