import { motion } from "motion/react";

export function MotionIndex() {
  const items = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: `Motion Study 0${i + 1}`,
    tag: "Experiment"
  }));

  return (
    <div className="pt-32 pb-32 bg-[#050505] min-h-screen text-white">
      <div className="mx-auto max-w-[1280px] px-8 md:px-0">
        
        {/* Header */}
        <div className="mb-24 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-oswald font-bold text-[60px] md:text-[96px] leading-[0.9] tracking-[-4.8px] uppercase"
          >
            Motion Index
          </motion.h1>
          <div className="flex items-center gap-4 mt-8">
            <span className="w-2 h-2 bg-[#ff4d00] rounded-full animate-pulse" />
            <p className="font-oswald text-[#99a1af] uppercase tracking-[1px]">Live Archive</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Box */}
              <div className="w-full aspect-[4/5] bg-[#111] rounded-[16px] border border-white/10 overflow-hidden relative mb-4">
                {/* Placeholder Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      rotate: index % 2 === 0 ? 360 : -360,
                      scale: [1, 1.2, 1],
                      borderRadius: ["20%", "50%", "20%"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className={`w-32 h-32 border-2 ${index % 3 === 0 ? 'border-[#ff4d00]' : 'border-white'} opacity-20`}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-1" />
                   </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start">
                <h3 className="font-oswald font-bold text-xl uppercase">{item.title}</h3>
                <span className="font-mono text-xs text-[#6a7282] border border-white/10 px-2 py-1 rounded-full">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
