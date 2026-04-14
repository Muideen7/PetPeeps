"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PawPrint } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Main text animation
      gsap.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".hero-subtext", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "back.out(1.7)",
      });

    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-32 pb-16 md:pb-20 overflow-hidden bg-white"
      id="home"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="z-10 relative">
          <div className="overflow-hidden mb-6 md:mb-8">
            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-black flex flex-col">
              <span className="hero-title-line">Because they</span>
              <span className="hero-title-line flex items-center gap-4 flex-wrap">
                are family
              </span>
              <span className="hero-title-line">not just pets</span>
            </h1>
          </div>

          <p className="hero-subtext text-lg sm:text-xl text-gray-400 max-w-lg mb-10 md:mb-12 leading-relaxed font-bold">
            Skip the stress of traveling for pet care. Whether it&apos;s a
            checkup, bath, or wellness visit, we make it simple and
            comforting right from your home.
          </p>

          <div className="hero-cta flex flex-wrap gap-4">
            <button className="bg-black text-white pl-8 pr-2 py-2 rounded-full font-black flex items-center gap-6 hover:bg-gray-800 transition-all group active:scale-95 shadow-2xl shadow-black/10 cursor-pointer">
              <span className="text-base md:text-lg">Schedule now</span>
              <div className="bg-[#1E75FF] p-3.5 md:p-4 rounded-full transition-transform group-hover:rotate-12">
                <PawPrint size={22} className="text-white fill-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Elements */}
        <div className="relative h-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[500px] md:max-w-[650px] aspect-square">
            {/* Main Illustration Scene */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-full"
            >
              <Image
                src="/pet_hero_main.png"
                alt="Girl with her pets"
                fill
                className="object-contain scale-110 lg:scale-125 origin-center"
                priority
                quality={100}
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[80px] md:blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-50/50 blur-[80px] md:blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
