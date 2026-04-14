"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Heart, PawPrint, Sparkles, Star } from "lucide-react";

export function Booking() {
  return (
    <section className="relative bg-[#f1f8ff] pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden" id="booking">
      {/* Background Pattern - Vertical Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="h-full w-full flex justify-between px-6 md:px-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-black"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm mb-10 border border-gray-100"
        >
          <div className="w-8 h-8 rounded-full bg-[#1E75FF] flex items-center justify-center text-white">
            <Calendar size={16} />
          </div>
          <span className="font-black text-[#1a1a1a] tracking-widest text-[10px] uppercase">Booking Now</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[2.2rem] md:text-6xl font-black text-black mb-8 max-w-4xl mx-auto leading-[1.1] tracking-tight"
        >
          Ready to give your pet <br className="hidden md:block"/> the care they deserve?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 font-bold text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          From professional grooming to custom nutrition plans, we make high-end pet care simple, stress-free, and full of love.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/book"
            className="inline-flex bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-black/20"
          >
            Book an appointment
          </Link>
        </motion.div>

        {/* Floating Modern Decor (Replaces the large image) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Heart Left */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 5, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] md:left-[15%] top-[20%] text-[#FF4D4D] opacity-20 hidden sm:block"
          >
            <Heart size={48} fill="currentColor" />
          </motion.div>
          
          {/* Paw Right */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] md:right-[15%] top-[30%] text-[#1E75FF] opacity-20 hidden sm:block"
          >
            <PawPrint size={64} fill="currentColor" />
          </motion.div>

          {/* Star Top Center */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-[10%] text-[#FFD700] hidden sm:block"
          >
            <Star size={32} fill="currentColor" />
          </motion.div>

          {/* Sparkle Bottom Left */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-[20%] bottom-[15%] text-[#A3E635] opacity-20 hidden md:block"
          >
            <Sparkles size={40} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
