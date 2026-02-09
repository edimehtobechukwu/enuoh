import { motion } from "motion/react";
import imgAbstract from "../assets/ea2305de32166537453a573463cbddbb3d72751c.png";

export function Store() {
  const products = [
    { id: 1, name: "Oswald Type System", price: "$49", type: "Font Family", image: "Ag" },
    { id: 2, name: "Abstract 3D Pack", price: "$89", type: "Asset Kit", image: "3D" },
    { id: 3, name: "Motion Presets Vol.1", price: "$29", type: "AE Scripts", image: "Fx" },
    { id: 4, name: "Brutalism UI Kit", price: "$59", type: "UI Design Kit", image: "Ui" },
  ];

  return (
    <div className="pt-32 pb-32 bg-[#f5f5f0] min-h-screen text-black">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <h1 className="font-oswald font-bold text-[48px] md:text-[96px] leading-[0.9] tracking-[-2px] md:tracking-[-4.8px] uppercase">
              The Store
            </h1>
            <p className="font-oswald text-[#6a7282] text-lg md:text-xl mt-6 max-w-md">
              Premium design assets, curated for modern creators.
            </p>
          </div>

          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-4 md:pb-0">
            <button className="px-6 py-3 bg-black text-white rounded-full font-oswald font-bold uppercase text-sm shrink-0">All Products</button>
            <button className="px-6 py-3 bg-white border border-black/10 text-black rounded-full font-oswald font-bold uppercase text-sm shrink-0">Bundles</button>
          </div>
        </div>

        {/* Featured Product */}
        <div className="w-full h-[500px] bg-[#0a0a0a] rounded-[24px] mb-24 relative overflow-hidden flex items-center justify-center group cursor-pointer">
          <img src={imgAbstract} alt="" className="absolute right-0 top-0 h-full object-contain opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="absolute left-6 md:left-12 bottom-12 text-white z-10 max-w-[90%]">
            <span className="bg-[#ff4d00] text-white px-3 py-1 rounded-full text-xs font-bold uppercase font-oswald mb-4 inline-block">New Arrival</span>
            <h2 className="font-oswald font-bold text-3xl md:text-5xl uppercase mb-2">The Master Collection</h2>
            <p className="font-oswald text-gray-400 mb-6 text-sm md:text-base">Everything you need to start. Includes 5 packs.</p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-oswald font-bold uppercase">Buy Now - $199</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-square bg-white rounded-[16px] border border-black/5 mb-6 flex items-center justify-center relative overflow-hidden">
                <span className="font-oswald font-bold text-[80px] text-black/10 group-hover:scale-125 transition-transform duration-500">{product.image}</span>

                <button className="absolute bottom-4 right-4 w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0" title="View details">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33333 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-oswald font-bold text-lg uppercase">{product.name}</h3>
                  <p className="font-oswald text-sm text-[#99a1af] uppercase">{product.type}</p>
                </div>
                <span className="font-oswald font-bold text-lg">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
