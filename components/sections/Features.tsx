"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";

export function Features() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative" id="features">
      {/* Background Pattern - Vertical Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="h-full w-full flex justify-between px-6 md:px-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-black"></div>
          ))}
        </div>
      </div>
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
          className="text-[2.8rem] md:text-5xl font-[900] text-black mb-3 leading-[1.05] tracking-tight max-w-5xl mx-auto"
        >
          Because Home is <br className="hidden md:block" /> Where They&apos;re Happiest
        </motion.h2>

        {/* Central Illustration Area - Larger Image */}
        <div className="relative w-full max-w-[1100px] mx-auto aspect-[1.4/1] mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
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
        </div>

        {/* Content Below the Illustration */}
        <div className="max-w-2xl mx-auto mt-2">
          <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed mx-auto italic">
            Some pets feel safest in their own space—and we&apos;re here to make sure they get the same love and attention without leaving home. Because nothing beats the feeling of being cared for where they feel most at ease.
          </p>
        </div>
      </div>
    </section>
  );
}