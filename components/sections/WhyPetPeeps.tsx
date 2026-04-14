"use client";

import { Check, X } from "lucide-react";
import * as motion from "framer-motion/client";

const comparisonData = [
  { feature: "Professional grooming at home", petpeeps: true, others: false },
  { feature: "Vet-approved nutrition plans", petpeeps: true, others: false },
  { feature: "24/7 dedicated support", petpeeps: true, others: true },
  { feature: "Insurance discounts", petpeeps: true, others: false },
  { feature: "Zero stress for your pets", petpeeps: true, others: false },
];

export function WhyPetPeeps() {
  return (
    <section className="py-24 bg-[#FFF9F2] overflow-hidden" id="why-us">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
        <div className="badge-playful mb-6 mx-auto w-fit">
          <span className="text-secondary">🤔</span> Why Us?
        </div>
        <h2 className="text-[2.8rem] md:text-5xl font-black text-black mb-6">
          The PetPeeps Difference
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We&apos;re not just another pet service. We bring professional care to
          your doorstep, ensuring your pet is happy, healthy, and stress-free.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-orange-900/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-gray-100 font-black text-xl mb-8">
            <div className="hidden md:block">Feature</div>
            <div className="text-center text-[#1E75FF]">PetPeeps</div>
            <div className="text-center text-gray-400">Others</div>
          </div>

          <div className="space-y-8">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2 group"
              >
                <div className="font-bold text-lg text-black">
                  {item.feature}
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1E75FF]">
                    <Check size={24} strokeWidth={3} />
                  </div>
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                      <Check size={24} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-200">
                      <X size={24} strokeWidth={3} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
