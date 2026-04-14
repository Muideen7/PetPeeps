"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";

export function Features() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative" id="features">
      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 mb-12"
        >
          <div className="bg-[#FF4D4D] text-white p-1 rounded-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-bold text-gray-800 text-xs tracking-widest uppercase">Connect with us</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[2.8rem] md:text-5xl font-[900] text-black mb-12 leading-[1.05] tracking-tight max-w-5xl mx-auto"
        >
          Because Home is <br className="hidden md:block" /> Where They&apos;re Happiest
        </motion.h2>

        {/* Central Illustration Area */}
        <div className="relative max-w-5xl mx-auto min-h-[500px] md:min-h-[700px] flex flex-col items-center">
          
          {/* Main Characters Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] aspect-[1.5/1] z-20"
          >
            <Image
              src="/booking_characters.png"
              alt="Kids playing with pets"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </motion.div>

          {/* Decorative Elements - Aligned with the scene */}
          


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute left-[15%] bottom-[20%] w-24 h-24 hidden lg:block"
          >
            <Image src="/yellow_ball.png" alt="dog toy" fill className="object-contain" />
          </motion.div>





          {/* Content Over the Illustration (Bottom Part) */}
          <div className="mt-auto pt-24 max-w-2xl relative z-40">
            <p className="text-gray-500 font-medium text-lg md:text-xl mb-10 leading-relaxed mx-auto italic">
              Some pets feel safest in their own space—and we&apos;re here to make sure they get the same love and attention without leaving home. Because nothing beats the feeling of being cared for where they feel most at ease.
            </p>
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
              Booking appointment
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Lines (as seen in screenshot) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M720 400L0 800" stroke="black" strokeWidth="1" />
          <path d="M720 400L1440 800" stroke="black" strokeWidth="1" />
          <path d="M720 400L720 800" stroke="black" strokeWidth="1" />
          <path d="M720 400L360 800" stroke="black" strokeWidth="1" />
          <path d="M720 400L1080 800" stroke="black" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
