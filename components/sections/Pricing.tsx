"use client";

import { useState } from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { Star } from "lucide-react";

const packages = [
  {
    type: "Essential Care Package",
    tagline: "Best for that need low-maintenance care monthly upkeep.",
    price: "19",
    billing: "/month (billed annually)",
    label: "SELECTED PACKAGE",
    labelColor: "text-orange-500",
    features: [
      "2x Full Grooming Session",
      "Nail Trim & Ear Cleaning",
      "Teeth Brushing",
      "Gentle Shampoo & Conditioning",
      "Flexible Booking Hours",
      "10% Off Add-On Services",
    ],
    theme: "light",
  },
  {
    type: "Total Wellness Package",
    tagline: "Comprehensive care for pets who deserve the very best—inside and out.",
    price: "49",
    billing: "/month (billed annually)",
    label: "ALL IN ONE PACKAGE",
    labelColor: "text-green-400",
    features: [
      "Includes Everything in Essential",
      "1x Free Core Vaccination",
      "Skin & Coat Conditioning Treatment",
      "De-shedding or Breed-Specific Styling",
      "Priority Booking & VIP Support",
      "lorem ipsum dolor sit amet",
    ],
    theme: "dark",
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="pricing">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 relative">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-8"
            >
              <Image src="/yellow_ball.png" alt="icon" width={16} height={16} className="object-contain" />
              <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                Transparent pricing. Flexible options. Happy pets, guaranteed.
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[2.8rem] md:text-5xl font-black text-black leading-[1.05] tracking-tight mb-8"
            >
              Simply choose pricing <br /> plan that fit you the best
            </motion.h2>

            {/* Toggle */}
            <div className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-full w-fit mb-12 shadow-inner border border-slate-100">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  billingCycle === "monthly" ? "bg-white text-black shadow-md" : "text-gray-500"
                }`}
              >
                Monthly
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
                    billingCycle === "yearly" ? "bg-white text-black shadow-md" : "text-gray-500"
                  }`}
                >
                  Yearly
                </button>
                <span className="bg-[#A3E635] text-white px-3 py-1 rounded-md text-[10px] font-black">15% Off</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 hover:shadow-black/10 transition-shadow duration-500 border border-gray-100 ${
                pkg.theme === 'dark' ? 'bg-[#0D1B3E]' : 'bg-[#F8F9FB]'
              }`}
            >
              {/* Left Side: Package Info - Fixed 50% width */}
              <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className={`text-[10px] font-black tracking-widest ${pkg.labelColor} mb-2 block uppercase`}>
                    {pkg.label}
                  </span>
                  <h3 className={`text-2xl lg:text-3xl font-black mb-4 leading-tight whitespace-nowrap overflow-hidden text-ellipsis ${pkg.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {pkg.type}
                  </h3>
                  <p className={`text-base font-medium leading-relaxed mb-8 ${pkg.theme === 'dark' ? 'text-white/60' : 'text-gray-400'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-5xl font-black ${pkg.theme === 'dark' ? 'text-white' : 'text-black'}`}>${pkg.price}</span>
                    <div className="flex flex-col">
                        <span className={`text-sm font-bold ${pkg.theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>/month</span>
                        <span className={`text-[10px] font-bold ${pkg.theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>{pkg.billing}</span>
                    </div>
                  </div>
                  <button className={`w-full py-4 rounded-full font-black text-base transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    pkg.theme === 'dark' ? 'bg-[#1E75FF] text-white shadow-xl shadow-blue-500/30' : 'bg-black text-white'
                  }`}>
                    Get started
                  </button>
                </div>
              </div>

              {/* Right Side: Features - Fixed 50% width */}
              <div className="md:w-1/2 bg-white p-8 lg:p-10 border-l border-gray-100">
                <h4 className="text-lg font-black text-black mb-6">What will you get</h4>
                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 text-black bg-slate-50 p-1 rounded-sm">
                        <Star size={10} fill="currentColor" stroke="none" />
                      </div>
                      <span className="text-gray-700 font-bold text-sm leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
       
      {/* Background Decorative Lines */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 10 }).map((_, idx) => (
            <line key={idx} x1={144 * idx} y1="0" x2={144 * idx} y2="600" stroke="black" strokeWidth="1" />
          ))}
        </svg>
      </div>
    </section>
  );
}
