"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What kind of services do you offer at Petpeeps?",
    answer: "We offer a full range of professional pet care services designed to keep your furry friends happy and healthy. These include grooming, basic health checkups, nail trimming, coat care, de-shedding treatments, ear cleaning, and more. We also provide day care and short-term boarding depending on availability.",
  },
  {
    question: "Do i need to book an appointment in advance?",
    answer: "Yes, we recommend booking at least 24-48 hours in advance to ensure your preferred time slot is available, though we do our best to accommodate last-minute requests.",
  },
  {
    question: "How do you keep my pet safe and comfortable?",
    answer: "Our trained professionals use gentle handling techniques and vet-approved products. We conduct a stress-assessment for every pet before starting any service.",
  },
  {
    question: "Do you offer pickup, delivery, or mobile grooming?",
    answer: "Yes! We offer a fully-equipped mobile grooming van that comes right to your doorstep for maximum convenience.",
  },
  {
    question: "My pet has anxiety or special needs. Can you handle that?",
    answer: "Absolutely. We specialize in working with senior pets and those with anxiety. Our groomers take extra time to build trust and ensure a calm experience.",
  },
  {
    question: "What if i need to reschedule or cancel my appointment?",
    answer: "You can easily reschedule or cancel through our portal up to 24 hours before your appointment without any fee.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 lg:px-12 bg-[#F1F8FF] rounded-[4rem] p-12 md:p-20 border border-blue-50/50 relative overflow-hidden">
        
        {/* Background Decorative - subtle lines again to match Booking section */}
        <div className="absolute inset-x-0 inset-y-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="h-full w-full flex justify-between px-10">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-black"></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          
          {/* Left Column: Title & Illustration */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8 border border-gray-100 shadow-sm">
               <span className="text-sm">🤖</span>
               <span className="text-[10px] font-black tracking-widest text-[#1a1a1a] uppercase">FAQ</span>
            </div>
            
            <h2 className="text-[2.8rem] md:text-[3.5rem] font-black text-black leading-[1.05] tracking-tight mb-12">
              Frequently asked <br /> questions
            </h2>
            
            <p className="text-gray-400 font-bold text-lg mb-16 leading-relaxed max-w-sm">
              We&apos;ve answered the most common questions below to help you feel confident and informed—because your pet deserves nothing less.
            </p>

            {/* Main FAQ Illustration: Snake on Skateboard + Cactus */}
            <div className="relative w-full max-w-[450px] aspect-square transform -translate-x-8">
               {/* Cactus in Pot */}
               <motion.div 
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute right-0 bottom-1/4 w-40 h-56 z-10"
               >
                  <Image src="/corner_plants.png" alt="cactus deco" fill className="object-contain" />
               </motion.div>
               
               {/* Snake Character on Skateboard (simulated with snake + ball) */}
               <motion.div 
                 animate={{ x: [-10, 10, -10] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute left-0 bottom-4 w-full h-full z-20"
               >
                  <div className="relative w-full h-full">
                     <Image src="/snake.png" alt="Snake character" fill className="object-contain" unoptimized />
                     {/* Floating ball deco */}
                     <div className="absolute left-[-20px] top-1/2 w-16 h-16 opacity-50">
                        <Image src="/yellow_ball.png" alt="ball" fill className="object-contain" />
                     </div>
                  </div>
               </motion.div>
               
               {/* Question mark floaty */}
               <div className="absolute top-1/4 right-1/4 text-8xl font-black text-[#FF8A00] opacity-90 animate-pulse">?</div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-[2rem] transition-all duration-500 border-2 ${
                  openIndex === index 
                  ? 'bg-white border-[#1E75FF] shadow-2xl shadow-blue-500/10' 
                  : 'bg-white border-transparent'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className={`font-black text-xl pr-8 transition-colors ${
                    openIndex === index ? 'text-[#1E75FF]' : 'text-black'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-[#1E75FF] text-white rotate-0' : 'bg-slate-100 text-slate-400 rotate-180'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-gray-400 font-bold leading-relaxed text-lg border-t border-slate-50 mt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
