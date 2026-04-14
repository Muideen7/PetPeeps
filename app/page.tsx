import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col w-full relative">
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Pricing />
        <TestimonialsSection />
        <FAQ />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}

