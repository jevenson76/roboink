# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
React + TypeScript + Vite e-commerce application for RoboInkTees, featuring steampunk-themed merchandise. The site uses Tailwind CSS with a custom steampunk design system.

## Development Commands
```bash
npm run dev      # Start development server (port 5173)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

### Routing & State Management
- **React Router**: Single-page app with routes defined in `AppWithRouter.tsx`
- **Context API**: Cart state managed via `CartContext.tsx` with compound keys (id + size)
- **Entry Point**: `main.tsx` → `AppWithRouter.tsx` → route components

### Data Organization
Static product data in `src/data/`:
- `products.ts`: Product catalog with ratings, descriptions, categories
- `categories.ts`: 9 product categories including custom requests
- `productTypes.ts`: Hierarchical product type taxonomy

### Component Structure
- `/components/`: Reusable UI components with TypeScript interfaces
- `/pages/`: Route-specific page components
- `/context/`: Cart context provider
- Custom steampunk components: `BrassButton`, `OrnamentalDivider`, `SearchModal`

### Design System
Tailwind config defines steampunk theme:
- **Colors**: parchment (#f4e8d0), navy (#1a1a2e), brass-gold (#d4a574), copper (#b87333), muted-teal (#5a7a7a)
- **Fonts**: Roboto Slab (headings), Roboto (body)
- **Animations**: gearSpin, steamPulse, softFloat
- **Custom Effects**: gear-shaped box shadows

### Search & Filtering
- Real-time search across title, description, and category
- URL-based collection filtering with query parameters
- Modal interface with keyboard navigation support

## Key Patterns
- Products identified by compound key: `${id}-${size}`
- All images stored in `src/assets/`
- Responsive grid layouts with Tailwind breakpoints
- Consistent hover effects with brass/copper color transitions