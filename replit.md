# OpenAI Agent - AI Workforce Platform

## Overview

OpenAI Agent is a comprehensive AI workforce platform that enables enterprises to deploy intelligent multi-agent systems for automating complex internal processes. The platform specializes in parallel execution and collaboration between specialized AI agents, allowing businesses to focus on core innovation while AI handles operational tasks. Currently in beta development with closed testing, the platform targets multiple industries including automotive, manufacturing, healthcare, finance, retail, and logistics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Modern single-page application built with React 18 and TypeScript
- **UI Framework**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with /api prefix routing
- **Development Setup**: Development server with hot module replacement via Vite middleware
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless configuration
- **Schema Management**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Validation**: Zod integration for runtime type validation

### Storage Strategy
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL database with connection pooling
- **Session Management**: Built-in session storage with connect-pg-simple for production
- **Interface Pattern**: Abstract storage interface allowing easy swapping between implementations

### Development & Build
- **Monorepo Structure**: Shared code between client, server, and database layers
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines
- **Type Safety**: Strict TypeScript configuration with comprehensive type checking

### Authentication & Security
- **Session-based Auth**: Cookie-based sessions with PostgreSQL session store
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Environment Variables**: Secure configuration management for database URLs and secrets
- **Input Validation**: Zod schemas for request/response validation

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Modern TypeScript ORM with SQL-like syntax
- **PostgreSQL**: Primary database engine for production deployment

### UI & Design System
- **Shadcn/ui**: Pre-built accessible component library
- **Radix UI**: Headless UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with design tokens
- **Lucide React**: Consistent icon library for UI elements

### Development Tools
- **Vite**: Fast build tool with HMR and optimized bundling
- **TanStack Query**: Powerful data fetching and caching library
- **React Hook Form**: Performant form management with validation
- **Wouter**: Minimalist routing library for React

### Runtime & Utilities
- **Express.js**: Web application framework for Node.js
- **Class Variance Authority**: Utility for component variant management
- **date-fns**: Modern date utility library
- **clsx & twMerge**: Conditional CSS class utilities

### Replit Integration
- **Development Banner**: Replit-specific development environment integration
- **Runtime Error Overlay**: Enhanced error reporting in development
- **Cartographer**: Development tooling for Replit environment