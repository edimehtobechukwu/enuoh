import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-vwdc2ur8x1";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Motion Index", path: "/motion-index" },
    { name: "Store", path: "/store" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 md:top-8 left-0 right-0 z-50 px-4 md:px-10 pointer-events-none"
      >
        <div className="mx-auto max-w-[1444px] pointer-events-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[15px] h-[66px] px-6 flex items-center justify-between relative shadow-lg">
            <div className="absolute inset-0 border border-white/10 rounded-[15px] pointer-events-none" />
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-[8px] z-50">
              <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
                <span className="font-bold text-black font-oswald text-[18px] leading-[28px]">E</span>
              </div>
              <span className="text-white font-bold font-oswald text-[20px] leading-[28px] tracking-[-0.5px]">Enuoh</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-[32px]">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-[#d1d5dc] hover:text-white text-[11px] uppercase tracking-[1.1px] font-bold font-oswald transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-[12px]">
              {/* EN Button */}
              <button className="h-[31px] w-[62px] bg-[#f5f5f0] rounded-full flex items-center justify-center gap-[8px] transition-transform hover:scale-105 active:scale-95">
                <div className="w-[12px] h-[12px] relative">
                  <div className="absolute inset-[8.33%]">
                     <svg className="block w-full h-full" viewBox="0 0 11 11" fill="none">
                        <path d={svgPaths.p16fbdc80} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <div className="absolute inset-[8.33%_33.33%]">
                     <svg className="block w-full h-full" viewBox="0 0 5 11" fill="none">
                        <path d={svgPaths.p2f6c4e80} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                   <div className="absolute top-1/2 left-[8.33%] right-[8.33%] -mt-[0.5px]">
                     <svg className="block w-full h-[1px]" viewBox="0 0 11 1" fill="none">
                        <path d="M0.5 0.5H10.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase text-black font-oswald leading-[15px]">EN</span>
              </button>

              {/* Contact Us Button */}
              <button className="h-[31px] px-[16px] bg-[#ff4d00] rounded-full flex items-center gap-[8px] transition-transform hover:scale-105 active:scale-95">
                <span className="text-[10px] font-bold uppercase text-white font-oswald leading-[15px]">Contact Us</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.5 3.5H8.5V8.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 8.5L8.5 3.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col pt-32 px-8"
          >
             <div className="flex flex-col gap-6">
               {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-white text-[48px] uppercase font-bold font-oswald leading-none tracking-tight block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
               ))}
             </div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="mt-auto mb-12 flex flex-col gap-6"
             >
                <div className="h-px w-full bg-white/10" />
                <div className="flex justify-between items-center">
                   <span className="text-[#99a1af] font-oswald text-sm uppercase tracking-widest">Contact</span>
                   <span className="text-white font-oswald text-sm uppercase tracking-widest">hello@enuoh.co</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-[#99a1af] font-oswald text-sm uppercase tracking-widest">Socials</span>
                   <div className="flex gap-4">
                      <span className="text-white font-oswald text-sm uppercase">IG</span>
                      <span className="text-white font-oswald text-sm uppercase">TW</span>
                      <span className="text-white font-oswald text-sm uppercase">LI</span>
                   </div>
                </div>
                <button className="w-full h-[56px] bg-[#ff4d00] rounded-full flex items-center justify-center gap-2 mt-4">
                  <span className="text-sm font-bold uppercase text-white font-oswald">Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
