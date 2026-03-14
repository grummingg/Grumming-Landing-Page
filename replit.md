# Grumming Landing Page

## Overview

Grumming is a modern beauty & grooming booking landing page built as a fully static React SPA (no backend server). The platform covers salons, spas, beauty parlors, and grooming studios. Users can discover and explore businesses, browse service categories, view popular locations, and see featured listings. The design uses a deep teal (#2D5F5D) primary color and warm gold (#D4A574) accent color with Inter font family.

## User Preferences

- Preferred communication style: Simple, everyday language.
- Grumming is NOT limited to salons only — it covers all beauty and grooming businesses (salons, spas, beauty parlors, grooming studios).
- User-facing text uses inclusive language: "salons, spas, and studios" or "businesses" or "partners" or "providers" — never salon-only.
- Internal code identifiers (file names, imports, type names) keep original naming for stability.
- Compact UI preferred (small cards, 5-column grids on desktop).
- No navbar required. No "Back to Home" links — users navigate via clickable brand logo or browser back.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript (StrictMode enabled)
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives) — only 13 used components kept
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)
- **Code Splitting**: All pages lazy-loaded via React.lazy() with Suspense fallback
- **Error Handling**: ErrorBoundary wraps all routes; shows reload UI on chunk load failures
- **SEO**: Per-page document titles via useDocumentTitle hook; OG/Twitter meta images; JSON-LD Organization schema; web manifest for PWA
- **Theme**: FOUC prevention via inline script in index.html; ThemeProvider reads/writes localStorage with try-catch for storage-disabled environments

The frontend follows a component-based architecture with:
- Landing page sections as separate components (Hero, Categories, Stats, Locations, App Download, Footer)
- Reusable AppStoreButtons component (shared between Hero and App Download)
- Theme support (light/dark mode) via ThemeProvider context
- Responsive design for mobile, tablet, and desktop

### Color Theme
- **Primary**: Deep navy (#1e3a5f / hsl(214, 52%, 25%)) — all chart/sidebar hues aligned to 214
- **Accent**: Warm gold (#D4A574 / hsl(28, 52%, 64%))
- **Dark Mode Background**: Deep navy (#0f172a) matching the Grumming mobile app
- **Cards**: White with subtle shadows (light), Navy blue #1e293b (dark)
- **Font**: Inter (via CSS var --font-sans; display font also uses Inter)

### Backend API
- **Server**: Express.js (serves Vite in dev, static files in prod)
- **`POST /api/contact`**: Receives contact form submissions with Zod validation, in-memory rate limiting (5 requests/minute per IP), and in-memory storage via `MemStorage`

### Deployment
- **Type**: Static deployment (no backend server in production)
- **Build**: `npx vite build` outputs to `dist/public/`
- **SPA Routing**: 404.html auto-generated from index.html via Vite plugin
- **Data**: All data (categories, locations, featured salons) is bundled directly in the frontend from `shared/schema.ts`
- **Contact Form**: Posts to `/api/contact` in dev; in production static deploy, the form still validates client-side but the API is unavailable
- **Cost**: Free — no server compute needed

### Shared Code
The `shared/` directory contains:
- Zod validation schemas for data (categories, locations, featured listings)
- TypeScript types used by frontend
- Default configuration data (cities, categories, featured salons)

## Landing Page Sections

1. **Hero** - Full-height section with video background (poster image for fast load), Coming Soon app store buttons
2. **Categories** - Phone mockup with auto-rotating service preview videos; category labels (Haircut, Spa, Skincare, Makeup, Hair Colour, Nails) with active indicator below
3. **Stats** - Trust signals row: 500+ partners, 60+ cities, 6 categories, 4.8 rating
4. **Locations** - 60+ Indian cities with dynamic masonry grid and animated card swapping
5. **App Download** - Mobile app promotion with Coming Soon store links
6. **Footer** - 4 columns (Company, Support, Legal, Business), contact info, social links, theme toggle

## Shared Frontend Utilities (`client/src/lib/`)

- **`constants.ts`** — Named exports for all contact info (SUPPORT_EMAIL, SUPPORT_PHONE, SUPPORT_WHATSAPP_NUMBER, SUPPORT_WHATSAPP_DISPLAY, PARTNERS_EMAIL, BOOKINGS_EMAIL, CAREERS_EMAIL, INSTAGRAM_URL, TWITTER_URL). Imported by footer.tsx and contact.tsx.
- **`animations.ts`** — Shared Framer Motion variants: `fadeUp` (spread pattern with `initial/whileInView/viewport/transition`) and `fadeUpVariants` (variant pattern with `hidden/visible`). All 17 sub-pages import from here — no local `const fadeUp` definitions.
- **`utils.ts`** — shadcn `cn()` helper.

## Sub-Pages

All sub-pages follow consistent design: dark hero banner (bg-hero token, resolves to #0f172a) with amber label, white heading, clickable "Grumming" brand logo at top, framer-motion fadeUp animations, SalonFooter at bottom.

- **About Us** (`/about-us`)
- **FAQ** (`/faq`)
- **Contact** (`/contact`)
- **Careers** (`/hiring`)
- **Partner With Us** (`/partner-with-us`)
- **Safety** (`/safety`)
- **Help Center** (`/help-center`)
- **Report Issue** (`/report-issue`)
- **Legal**: Privacy (`/privacy-policy`), Terms (`/terms-of-service`), Cookie Policy (`/cookie-policy`), Refund Policy (`/refund-policy`), Cancellation (`/cancellation-policy`), Disclaimer (`/disclaimer`)
- **Business**: For Business Owners (`/business`), Bulk Bookings (`/bulk-bookings`)

## Business Contact Emails
- partners@grumming.com (general)
- bookings@grumming.com (bulk bookings)
- careers@grumming.com (hiring)
- support@grumming.com (support)

## External Dependencies

### UI Libraries
- **shadcn/ui**: 13 components (accordion, badge, button, card, form, input, label, select, separator, textarea, toast, toaster, tooltip)
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **react-icons**: Social media icons (SiInstagram, SiFacebook, SiX, SiYoutube, SiWhatsapp)

### Build & Development
- **Vite**: Frontend bundler with HMR
- **tsx**: TypeScript execution for development
