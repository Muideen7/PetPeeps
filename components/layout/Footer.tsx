import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Grooming & Spa", href: "/services/grooming" },
        { name: "Healthy Nutrition", href: "/services/nutrition" },
        { name: "Pet Insurance", href: "/services/insurance" },
        { name: "Adoption Support", href: "/services/adoption" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQs", href: "/faqs" },
        { name: "Blog & Pet Tips", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Customer Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Book an Appointment", href: "/book" },
        { name: "Find a Location", href: "/locations" },
      ],
    },
  ];
  return (
    <footer className="relative bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          {/* Left Column: Branding & Newsletter */}
          <div className="w-full lg:max-w-[450px]">
            <Link href="/" className="text-[2.6rem] font-extrabold tracking-tight text-black mb-6 inline-block leading-none">
              PetPeeps.
            </Link>
            <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
              Skip the stress of take care of your pets whether it&apos;s a checkup, bath, or wellness visit, we make pet care easy and comforting right from home.
            </p>

            <div className="mb-12">
              <h4 className="font-extrabold text-black mb-6 text-lg">Subscribe to our newsletter</h4>
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full bg-white border border-gray-100 rounded-full py-5 px-8 outline-none focus:border-gray-300 transition-all font-medium text-gray-500 shadow-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-gray-400 mb-6 uppercase tracking-wider text-xs">Follow us on</h5>
              <div className="flex items-center gap-6">
                {[
                  { 
                    name: "Facebook",
                    icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )
                  },
                  { 
                    name: "Instagram",
                    icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )
                  },
                  { 
                    name: "X",
                    icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )
                  },
                  { 
                    name: "LinkedIn",
                    icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )
                  },
                ].map((social, i) => (
                  <Link key={i} href="#" className="text-black hover:opacity-70 transition-opacity">
                    <social.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-12 lg:pl-12">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-extrabold text-black mb-8 text-lg">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-900/60 font-semibold hover:text-black transition-colors text-base whitespace-nowrap">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-900/40 font-bold text-base">
            ©{year} PetPeeps. All rights reserved.
          </p>
          <div className="flex items-center gap-12">
            <Link href="#" className="text-gray-900/80 font-bold text-base hover:text-black transition-colors">Terms and conditions</Link>
            <Link href="#" className="text-gray-900/80 font-bold text-base hover:text-black transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
