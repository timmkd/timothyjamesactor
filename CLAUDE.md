# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Starts the development server with Turbopack on http://localhost:3000
- `npm run build` - Builds the production application
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

### TypeScript
- TypeScript is configured with strict mode enabled
- Path alias `@/*` maps to `./src/*`
- No specific typecheck script exists - TypeScript errors surface during build

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: 
  - Local JSON files in `src/content/` (current)
  - Sanity CMS integration prepared but not yet active
- **Image Gallery**: PhotoSwipe library

### Project Structure
- **src/app/**: Next.js app router pages
  - Each route has its own `page.tsx`
  - `layout.tsx` provides global layout with navigation and footer
  - `studio/` route configured for Sanity Studio (optional feature)
- **src/components/**: Reusable React components
  - `CreditRow.tsx` - Displays individual credits in CV grid
  - `Navigation.tsx` - Site navigation
  - `PhotoSwipeGallery.tsx` - Image gallery component
- **src/content/**: JSON data files
  - `credits.json` - Acting credits/CV data
  - `profile.json` - Actor profile information
  - `training.json` - Training/education data
  - `videos.json` - Video/reel links
  - `images.json` - Image gallery data
- **src/lib/content.ts**: Content loading and utility functions
  - Exports typed interfaces for all content
  - Provides filtering functions for credits (by type, year, etc.)

### Key Features
- Actor portfolio with multiple pages: Home, CV, Images, Videos, Contact
- CV page needs implementation of sorting/grouping controls
- Social media links in footer
- Responsive design with Tailwind CSS

### Sanity CMS (Optional)
- Configuration exists in `sanity.config.ts` and `src/sanity/`
- Schemas defined in `src/schemas/`
- Currently not active - content served from JSON files
- Migration to Sanity is Phase 4 of the project plan

## Development Notes
- The project follows the plan in `PROJECT_PLAN.md`
- Phase 2 items 3-4 still need implementation (CV controls and styling)
- When implementing CV controls, use the utility functions in `src/lib/content.ts`
- Image files should be placed in `public/` directory for static serving