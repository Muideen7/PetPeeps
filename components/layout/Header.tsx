"use client";

import Link from "next/link";
import { PawPrint, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = id.toLowerCase().replace(" ", "-");
    const element = document.getElementById(targetId);
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: `#${targetId}`, offsetY: 80 },
        ease: "expo.out",
      });
    }
  };

  const navItems = ["Home", "Services", "Pricing", "Reviews", "FAQ"];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-50"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Mobile Menu Toggle (Left) */}
          <button
            className="lg:hidden p-2 -ml-2 text-black cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>

          {/* Logo (Center on mobile, Left on desktop) */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-black flex items-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            PetPeeps<span className="text-[#1E75FF]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={(e) => scrollToSection(e, item)}
                className="text-sm font-bold text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA (Right) */}
          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-xs md:text-sm font-black hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-black/10 cursor-pointer">
              Schedule <span className="hidden sm:inline">now</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Full Screen Opaque */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 300 }}
            className="fixed inset-0 w-full h-full bg-white z-[9999] lg:hidden p-8 flex flex-col overflow-y-auto"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="flex items-center justify-between mb-16">
              <span className="text-2xl font-black tracking-tight text-black">
                PetPeeps<span className="text-[#1E75FF]">.</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-slate-50 rounded-full text-black hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X size={28} strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 md:gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={(e) => scrollToSection(e, item)}
                    className="text-[3.2rem] md:text-[4.5rem] font-black text-black leading-tight hover:text-[#1E75FF] transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-12 md:mt-auto pt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-[#f1f8ff] p-8 md:p-12 rounded-[3.5rem] border border-blue-50"
              >
                <div className="bg-[#1E75FF] w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                  <PawPrint size={24} />
                </div>
                <p className="text-black font-black text-2xl mb-4 leading-tight">
                  Professional pet <br /> care at your door
                </p>
                <p className="text-gray-500 font-bold text-lg leading-relaxed mb-8">
                  Available 24/7 for you and your beloved furry friends.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex bg-black text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-black/10 active:scale-95 transition-all cursor-pointer"
                >
                  Contact Support
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
