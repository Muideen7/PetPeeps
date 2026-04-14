"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="reviews">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F6F9FF] px-4 py-2 rounded-full mb-8 border border-blue-50 shadow-sm">
              <span className="text-sm">😻</span>
              <span className="text-[10px] font-black tracking-widest text-[#1E75FF] uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-[2.8rem] md:text-[3.5rem] font-black text-black leading-[1.05] tracking-tight">
              Here&apos;s what <br /> petpeeps are saying
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-gray-400 font-bold text-lg leading-relaxed max-w-sm ml-auto">
              From wagging tails to happy purrs, nothing makes us prouder than
              the trust and love we&apos;ve earned from pet parents.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#1E75FF] rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Quote Side */}
            <div className="flex-1 z-10">
              <p className="text-[1.8rem] md:text-4xl font-black text-white leading-tight mb-16 relative">
                <span className="absolute -left-6 -top-4 text-white/20 text-6xl">
                  &ldquo;
                </span>
                Petpeeps is the only place I trust with my golden retriever,
                Luna. The staff is so gentle and genuinely cares.
                <span className="absolute -bottom-8 text-white/20 text-6xl">
                  &rdquo;
                </span>
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden relative">
                  <Image
                    src="/testimonial_girl_stars.png"
                    alt="Jessica"
                    fill
                    className="object-cover mix-blend-multiply"
                  />
                </div>
                <div>
                  <h4 className="text-white font-black text-lg leading-none mb-1">
                    Jessica Thompson
                  </h4>
                  <p className="text-white/60 text-sm font-bold tracking-wide">
                    UX Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Illustration Side */}
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              <div className="absolute inset-x-4 inset-y-4 bg-white/10 rounded-[4rem] backdrop-blur-sm -rotate-3"></div>
              <div className="relative w-full h-full transform translate-y-4">
                <Image
                  src="/testimonial_girl_stars.png"
                  alt="Happy pet parent"
                  fill
                  className="object-contain mix-blend-multiply"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* Smaller Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F8F9FB] rounded-[3rem] p-10 flex flex-col justify-between min-h-[350px]"
          >
            <p className="text-2xl font-black text-black leading-tight mb-12">
              &ldquo;Affordable, reliable, and always gentle with my rescue pup.
              Highly recommend!&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-white p-2 shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative w-full h-full bg-[#FF8A00]/10 rounded-2xl overflow-hidden">
                  <Image
                    src="/playful_dog.png"
                    alt="Avatar"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-black text-black">Marcus Chen</h4>
                <p className="text-gray-400 text-sm font-bold">
                  Software Engineer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Smaller Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#F8F9FB] rounded-[3rem] p-10 flex flex-col justify-between min-h-[350px] relative"
          >
            <p className="text-2xl font-black text-black leading-tight mb-12">
              &ldquo;I was worried about taking my cat to a groomer, but
              Petpeeps knows how to handle even the sassiest felines.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-white p-2 shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative w-full h-full bg-[#1E75FF]/10 rounded-2xl overflow-hidden">
                  <Image
                    src="/running_cat.png"
                    alt="Cat Avatar"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-black text-black">Sarah Jenkins</h4>
                <p className="text-gray-400 text-sm font-bold">
                  Marketing Director
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
