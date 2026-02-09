import imgBranding from "../assets/6ee9938b7633fac711c232c84c3ec8681b2d97cc.png";
import imgWeb from "../assets/c03fce936f31f8e8fb13235978b913ec15c16267.png";
import imgMotion from "../assets/450a6f2cd7cab5b5ca9a14b6b64d4b02a52fe239.png";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      title: "Branding Identity",
      image: imgBranding,
      items: ["Visual Strategy", "Logo Design", "Brand Guidelines", "Art Direction"]
    },
    {
      title: "Web Design & Dev",
      image: imgWeb,
      items: ["UI/UX Design", "Frontend Development", "CMS Integration", "E-Commerce"]
    },
    {
      title: "Motion Systems",
      image: imgMotion,
      items: ["3D Animation", "Motion Branding", "Interaction Design", "Showreels"]
    }
  ];

  return (
    <section className="bg-[#0a0a0a] w-full pt-[97px] pb-32 relative">
      <div className="absolute inset-0 border-t border-white/5 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-8 md:px-8 xl:px-0 flex flex-col gap-[80px]">

        {/* Header Container - Rebuilt with Flexbox for robustness */}
        <div className="relative w-full flex flex-col gap-6 md:block md:h-[215px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:absolute md:top-0 md:left-0"
          >
            <p className="font-oswald font-bold text-[#ff6900] text-[10px] tracking-[1px] uppercase">/ Services / Expertise /</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:max-w-[672px] md:absolute md:top-[31px] md:left-0"
          >
            <h2 className="font-oswald font-bold text-[48px] md:text-[60px] leading-[0.9] md:leading-[60px] text-white tracking-[-2px] md:tracking-[-3px] uppercase">
              Digital Design <br /> Powerhouse
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full md:max-w-[576px] md:absolute md:top-[175px] md:left-0"
          >
            <p className="font-oswald font-normal text-[#99a1af] text-[14px] leading-[20px] w-full md:w-[537px]">
              We are a full-service digital agency with a focus on crafting bespoke visual systems, production-ready web platforms, and cutting-edge motion graphics.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="min-h-[438px] rounded-[16px] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors bg-[#0a0a0a]"
            >
              <div className="p-[33px] flex flex-col h-full gap-[32px]">
                {/* Image Area */}
                <div className="h-[192px] w-full flex items-center justify-center">
                  <img src={service.image} alt={service.title} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-oswald font-bold text-[20px] leading-[28px] text-white uppercase">{service.title}</h3>

                {/* List */}
                <div className="flex flex-col gap-[8px]">
                  {service.items.map((item, i) => (
                    <p key={i} className="font-oswald font-normal text-[14px] leading-[20px] text-[#99a1af]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
