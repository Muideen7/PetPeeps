"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";

const stats = [
  { label: "Happy pets", value: "5000+" },
  { label: "Satisfaction", value: "98%" },
  { label: "Professionals", value: "1,000+" },
  { label: "Experience", value: "10 years" },
];

export function Stats() {
  return (
    <section className="px-6 py-12 bg-white" id="about-us">
      <div className="container mx-auto">
        <div className="bg-[#1E75FF] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden">
          {/* Orange Paw Decorative Element (Top Right) */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 translate-x-1/4 -translate-y-1/4 rotate-[15deg] opacity-90 z-20 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FF8A00]">
              <circle cx="50" cy="50" r="40" />
              <circle cx="20" cy="20" r="15" />
              <circle cx="80" cy="20" r="15" />
              <circle cx="50" cy="10" r="10" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mb-12 md:mb-16">
            {/* Left Column: Fluffy Dog Illustration */}
            <div className="relative flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[450px] md:max-w-[600px] aspect-square lg:aspect-[1.2/1]"
              >
                <Image
                  src="/fluffy.png"
                  alt="Happy Fluffy Dog"
                  fill
                  priority
                  className="object-contain object-bottom transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </motion.div>
            </div>

            {/* Right Column: Copy and Decorative Elements */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[2.2rem] md:text-5xl font-[900] mb-6 md:mb-8 leading-[1.1] tracking-tight text-white max-w-lg">
                  More than pet lovers, <br className="hidden md:block" />
                  trained professionals <br className="hidden md:block" />
                  treating pets like family
                </h2>
                <p className="text-lg md:text-2xl text-white/70 mb-10 md:mb-12 max-w-md leading-relaxed font-bold">
                  Whether it&apos;s a grooming day, a health checkup, or just some
                  extra love, we&apos;re here to make pet care simple, safe, and
                  stress-free.
                </p>

                {/* Yellow Ball Decorative Element */}
                <div className="flex justify-end md:pr-16">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    className="relative w-20 h-20 md:w-32 md:h-32"
                  >
                    <Image
                      src="/yellow_ball.png"
                      alt="dog toy"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="relative z-10 w-full pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  className="whitespace-nowrap"
                >
                  <div className="text-3xl md:text-[3.5rem] font-black text-white leading-none mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-sm font-black text-white/60 uppercase tracking-widest leading-none">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
