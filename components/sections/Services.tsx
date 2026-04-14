"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";

const services = [
  {
    title: "Grooming & Spa",
    description: "Gentle care and pampering that keeps pets clean, stylish, and comfortable.",
    image: "/groom.svg",
  },
  {
    title: "Healthy Nutrition",
    description: "Nutritious, vet-approved meals to keep pets healthy and full of life.",
    image: "/nutrition_service.png",
  },
  {
    title: "Pet Insurance",
    description: "Affordable coverage for unexpected vet visits and peace of mind.",
    image: "/insurance_service.png",
  },
];

const ButterflyIcon = () => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="absolute -right-8 md:-right-16 -top-8 hidden md:block"
  >
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 50C50 50 15 25 15 45C15 65 45 75 50 50Z" fill="#3B82F6" fillOpacity="0.8" />
      <path d="M50 50C50 50 85 25 85 45C85 65 55 75 50 50Z" fill="#3B82F6" />
      <path d="M50 50C50 50 25 85 40 95C55 105 60 75 50 50Z" fill="#2563EB" />
      <path d="M50 50C50 50 75 85 60 95C45 105 40 75 50 50Z" fill="#2563EB" />
      <circle cx="50" cy="50" r="3" fill="#1E3A8A" />
    </svg>
  </motion.div>
);

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 bg-[#F6F9FF] text-[#1E75FF] px-4 py-2 rounded-full w-fit mb-10 font-bold text-xs tracking-[0.2em] shadow-sm border border-blue-50">
              <span className="text-base leading-none translate-y-[-1px]">📋</span> SERVICES
            </div>
            
            <h2 className="text-[2.8rem] md:text-5xl font-[900] text-black mb-10 leading-[1.05] tracking-tight relative">
              Here to make pet <br /> 
              care simple & <br /> 
              stress free
              <ButterflyIcon />
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-medium">
              From spa days to health checkups, we offer everything your pet needs to stay happy, healthy, and loved. All delivered by trained professionals who care like family.
            </p>
            
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 group">
              View all services
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-[1.1/1] transform lg:translate-x-12">
              <Image
                src="/services_main_illustration.png"
                alt="Pet care illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(30,117,255,0.15)] hover:border-blue-100 transition-all duration-500 group relative overflow-hidden flex flex-col min-h-[380px] md:min-h-[440px]"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-[900] text-[#111] leading-[1.1] max-w-[150px] md:max-w-[180px]">
                  {service.title.split(' ').map((word, idx) => (
                    <span key={idx} className="block">{word}</span>
                  ))}
                </h3>
                <div className="relative w-20 h-20 md:w-40 md:h-40 -mr-4 md:-mr-6 translate-y-2 md:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-6 transition-transform duration-700 drop-shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
              
              <p className="text-gray-400 font-bold text-base md:text-lg lg:text-xl leading-relaxed mt-auto pr-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
