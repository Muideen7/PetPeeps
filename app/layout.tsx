import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'PetPeeps | Professional At-Home Pet Care',
  description: 'Reliable and professional at-home pet care services. Grooming, wellness, and more for your furry family members.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased`} suppressHydrationWarning>
      <body className="bg-white text-black overflow-x-hidden min-h-screen selection:bg-primary/20">
        <ThemeProvider forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
