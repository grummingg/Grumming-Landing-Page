# Horizon Landing Page Builder

## Overview

This is a customizable landing page application built with React and Express. The project allows users to view and customize a modern landing page with features like hero sections, feature showcases, testimonials, and pricing tiers. Configuration is stored server-side and can be modified through a built-in customizer panel.

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
- Landing page sections as separate components (Hero, Features, Testimonials, Pricing, CTA, Footer)
- A customizer panel that allows real-time editing of page content
- Theme support (light/dark mode) via ThemeProvider context

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful JSON API with `/api` prefix
- **Validation**: Zod schemas for request/response validation

Routes are registered in `server/routes.ts` with the main endpoints:
- `GET /api/config` - Fetch landing page configuration
- `POST /api/config` - Save landing page configuration

### Data Storage
- **Current**: In-memory storage (`MemStorage` class in `server/storage.ts`)
- **Schema Ready**: Drizzle ORM configured with PostgreSQL dialect
- **Database Schema**: Defined in `shared/schema.ts` with users table and landing page config types

The storage layer uses an interface (`IStorage`) allowing easy swap between in-memory and database implementations.

### Shared Code
The `shared/` directory contains:
- Database schema definitions (Drizzle tables)
- Zod validation schemas for landing page configuration
- TypeScript types shared between frontend and backend

## External Dependencies

### Database
- **ORM**: Drizzle ORM with PostgreSQL driver
- **Migrations**: Drizzle Kit for schema management (`db:push` script)
- **Connection**: Requires `DATABASE_URL` environment variable

### UI Libraries
- **shadcn/ui**: Full component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **react-icons**: Additional social media icons

### Build & Development
- **Vite**: Frontend bundler with HMR
- **esbuild**: Server bundler for production
- **tsx**: TypeScript execution for development

### Session Management
- **connect-pg-simple**: PostgreSQL session store (available but not currently active)
- **express-session**: Session middleware support