# Grumming Landing Page

## Overview

Grumming is a modern beauty & grooming booking landing page built with React and Express. The platform covers salons, spas, beauty parlors, and grooming studios. Users can discover and explore businesses, browse service categories, view popular locations, and see featured listings. The design uses a deep teal (#2D5F5D) primary color and warm gold (#D4A574) accent color with Inter font family.

## User Preferences

- Preferred communication style: Simple, everyday language.
- Grumming is NOT limited to salons only — it covers all beauty and grooming businesses (salons, spas, beauty parlors, grooming studios).
- User-facing text uses inclusive language: "salons, spas, and studios" or "businesses" or "partners" or "providers" — never salon-only.
- Internal code identifiers (file names, imports, type names) keep original naming for stability.
- Compact UI preferred (small cards, 5-column grids on desktop).
- No navbar required. No "Back to Home" links — users navigate via clickable brand logo or browser back.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

The frontend follows a component-based architecture with:
- Landing page sections as separate components (Hero, Categories, Locations, Featured Salons, How It Works, App Download, Footer)
- Theme support (light/dark mode) via ThemeProvider context
- Responsive design for mobile, tablet, and desktop

### Color Theme
- **Primary**: Deep teal (#2D5F5D / hsl(177, 35%, 27%))
- **Accent**: Warm gold (#D4A574 / hsl(28, 52%, 64%))
- **Dark Mode Background**: Deep navy (#0f172a) matching the Grumming mobile app
- **Cards**: White with subtle shadows (light), Navy blue #1e293b (dark)
- **Font**: Inter

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful JSON API with `/api` prefix
- **Validation**: Zod schemas for request/response validation

Routes registered in `server/routes.ts`:
- `GET /api/salon-config` - Fetch page configuration (categories, locations, featured listings)

### Data Storage
- **Current**: In-memory storage (`MemStorage` class in `server/storage.ts`)
- **Schema Ready**: Drizzle ORM configured with PostgreSQL dialect
- **Database Schema**: Defined in `shared/schema.ts`

### Shared Code
The `shared/` directory contains:
- Database schema definitions (Drizzle tables)
- Zod validation schemas for data (categories, locations, featured listings)
- TypeScript types shared between frontend and backend
- Default configuration data

## Landing Page Sections

1. **Hero** - Full-height section with search bar, city selector, and stats
2. **Categories** - 6 service categories (Haircut, Spa, Skincare, Makeup, Hair Colour, Nails) with custom SVG icons
3. **Locations** - 6 popular cities with business counts
4. **Featured Salons** - Horizontal carousel of 5 top-rated businesses with booking CTAs
5. **How It Works** - 3-step process (Search, Book, Enjoy)
6. **App Download** - Mobile app promotion with store links
7. **Footer** - 4 columns (Company, Support, Legal, Business), newsletter signup, contact info, social links

## Sub-Pages

All sub-pages follow consistent design: dark hero banner (bg-[#0f172a]) with amber label, white heading, clickable "Grumming" brand logo at top, alternating section backgrounds, framer-motion fadeUp animations, SalonFooter at bottom.

- **About Us** (`/about`)
- **FAQ** (`/faq`)
- **Contact** (`/contact`)
- **Careers** (`/careers`)
- **Partner With Us** (`/partner`)
- **Safety** (`/safety`)
- **Help Center** (`/help`)
- **Report Issue** (`/report-issue`)
- **Legal**: Privacy (`/privacy`), Terms (`/terms`), Cookie Policy (`/cookie-policy`), Refund Policy (`/refund-policy`), Cancellation (`/cancellation-policy`), Disclaimer (`/disclaimer`)
- **Business**: For Business Owners (`/for-salon-owners`), Advertise (`/advertise`), Franchise (`/franchise`), Bulk Bookings (`/bulk-bookings`)

## Business Contact Emails
- partners@grumming.com (general)
- ads@grumming.com (advertise)
- franchise@grumming.com (franchise)
- bookings@grumming.com (bulk bookings)

## External Dependencies

### UI Libraries
- **shadcn/ui**: Full component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **react-icons**: Social media icons

### Build & Development
- **Vite**: Frontend bundler with HMR
- **esbuild**: Server bundler for production
- **tsx**: TypeScript execution for development
