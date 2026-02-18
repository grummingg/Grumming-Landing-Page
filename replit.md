# SalonBook Landing Page

## Overview

SalonBook is a modern salon booking landing page built with React and Express. The page allows users to discover and explore salons, browse service categories, view popular locations, and see featured salon listings. The design uses a deep teal (#2D5F5D) primary color and warm gold (#D4A574) accent color with Inter font family.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- Landing page sections as separate components (Navbar, Hero, Categories, Locations, Featured Salons, How It Works, App Download, Footer)
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
- `GET /api/salon-config` - Fetch salon page configuration (categories, locations, featured salons)

### Data Storage
- **Current**: In-memory storage (`MemStorage` class in `server/storage.ts`)
- **Schema Ready**: Drizzle ORM configured with PostgreSQL dialect
- **Database Schema**: Defined in `shared/schema.ts`

### Shared Code
The `shared/` directory contains:
- Database schema definitions (Drizzle tables)
- Zod validation schemas for salon data (categories, locations, salons)
- TypeScript types shared between frontend and backend
- Default salon configuration data

## Landing Page Sections

1. **Navbar** - Fixed navigation with brand logo, nav links, theme toggle, and login button
2. **Hero** - Full-height section with search bar, city selector, and stats
3. **Categories** - 6 service categories (Haircut, Spa, Facial, Makeup, Massage, Nail Art)
4. **Locations** - 6 popular cities with salon counts
5. **Featured Salons** - Horizontal carousel of 5 top-rated salons with booking CTAs
6. **How It Works** - 3-step process (Search, Book, Enjoy)
7. **App Download** - Mobile app promotion with store links
8. **Footer** - Newsletter signup, contact info, social links, and legal pages

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
