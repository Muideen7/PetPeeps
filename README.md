# PetPeeps — Premium Pet Care Reimagined

**PetPeeps** is a high-fidelity, modern landing page for a premier pet care platform. Designed with a focus on vibrant aesthetics, smooth interactions, and a professional-grade user experience, it serves as the digital storefront for a service that treats pets like family.

## 🐾 Project Overview

PetPeeps is built to bridge the gap between busy pet owners and professional pet care services. The platform emphasizes ease of access, trust, and a playful yet professional brand identity.

### Key Features
- **Modern Hero Section**: High-impact editorial design with custom 2D vector illustrations and GSAP-powered entry animations.
- **Interactive Services**: A beautifully tiled grid of premium services including Grooming, Nutrition, and Insurance.
- **Dribbble-Inspired Testimonials**: A modern masonry-style review section with transparent asset blending and elegant hover states.
- **Responsive Navigation**: A bespoke mobile-first navigation system with a solid-opaque side menu and localized toggle positioning.
- **Catchy Booking Section**: A minimalist, high-conversion section featuring floating decorative particles and sleek typography.
- **GSAP & Framer Motion**: Advanced animation system combining scroll-triggered kinetic layouts with micro-interactions.

## 🛠 Tech Stack

This project is built using the latest industry-standard tools for performance and scale:

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15+](https://nextjs.org/) (App Router) |
| **Styling** | [TailwindCSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |

## 📁 Project Structure

Following a strict **No `src` folder** architectural pattern:

```bash
PetPeep/
├── app/                  # Next.js App Router (Pages & Layouts)
├── components/           # UI Component Library
│   ├── layout/           # Shared Layout (Header, Footer)
│   ├── ui/               # Atomic Shadcn-style primitives
│   └── sections/         # Feature-scoped landing page sections
├── lib/                  # Shared utilities and constants
├── public/               # Static assets & 2D Vector Illustrations
└── types/                # Global TypeScript definitions
```

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

- **High-Contrast**: Utilizing a clean white base with "PetPeep Blue" (#1E75FF) and vibrant accent colors.
- **Minimalist Grid**: A focus on large whitespace and structured information hierarchy.
- **2D Vector Aesthetic**: All pet and character illustrations follow a consistent 2D sticker-style vector aesthetic for brand cohesion.
