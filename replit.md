# replit.md

## Overview

Techxica is a futuristic, neon-themed technology company website built with React and Vite. The application serves as a comprehensive corporate presence featuring a modern UI with cyberpunk aesthetics, showcasing company services, team information, career opportunities, and providing interactive contact functionality. The site emphasizes cutting-edge engineering and AI-powered solutions with a strong visual identity centered around neon colors and tech-inspired design elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18.2.0 with Vite 7.0.0 as the build tool and development server
- **Styling Strategy**: Component-scoped CSS with consistent design system using CSS custom properties (CSS variables)
- **Routing**: React Router DOM 7.6.3 for client-side navigation and page management
- **Component Structure**: Modular component architecture with dedicated CSS files for each component
- **Design System**: Cyberpunk/neon theme with consistent color palette and gradient system across all components

### Key Design Patterns
- **CSS Architecture**: Centralized design tokens using CSS custom properties for colors, gradients, shadows, and transitions
- **Responsive Design**: Mobile-first approach with clamp() functions and flexible grid layouts
- **Animation System**: CSS animations for gradients, glitch effects, and interactive elements
- **Component Isolation**: Each component has its own CSS file with scoped styles to prevent conflicts

### UI/UX Features
- **Interactive Elements**: Animated cursors, hover effects, and smooth transitions throughout the interface
- **Visual Effects**: Gradient backgrounds, neon glow effects, and tech-inspired animations
- **Accessibility**: Proper semantic HTML structure and transition timing for better user experience
- **Performance**: Optimized animations and effects to maintain smooth performance

### Content Management
- **Static Content**: All content is component-based with no external CMS integration
- **Image Handling**: Static assets served through Vite's asset pipeline
- **SEO Optimization**: React Helmet for meta tag management and structured data

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18.2.0, React DOM, React Router DOM for core functionality
- **Build Tools**: Vite 7.0.0 with React plugin for fast development and optimized builds
- **Styling**: TailwindCSS 4.1.10 with PostCSS and Autoprefixer for enhanced CSS capabilities

### UI Enhancement Libraries
- **Icons**: React Icons 5.5.0 and FontAwesome 6.7.2 for comprehensive icon support
- **Animations**: React Animated Cursor 2.11.2 for enhanced cursor interactions
- **Carousels**: React Responsive Carousel 3.2.23 and React Slick 0.30.3 with Slick Carousel 1.8.1 for content sliders
- **Scrolling**: React Scroll 1.9.0 for smooth scroll navigation
- **Styling Utilities**: Clsx 2.1.1, Tailwind Merge 3.3.1, and Tailwind Variants 1.0.0 for conditional styling

### Communication & Forms
- **Email Service**: EmailJS Browser 4.4.1 for client-side email functionality without backend infrastructure
- **HTTP Client**: Axios 1.10.0 for potential API communications
- **Form Handling**: Custom form components with file upload support integrated with EmailJS

### SEO & Analytics
- **Meta Management**: React Helmet 6.1.0 and React Helmet Async 2.0.5 for dynamic head management
- **Analytics**: Google Tag Manager and Google Analytics integration for tracking and insights
- **Search Optimization**: Google Site Verification and structured robots.txt for search engine optimization

### Graphics & Visual Effects
- **WebGL**: OGL 1.0.11 for advanced graphics and visual effects
- **Internationalization**: i18next-http-backend 3.0.2 for potential multi-language support

### Development Tools
- **Code Quality**: ESLint with React-specific plugins for code consistency and error prevention
- **Type Safety**: TypeScript type definitions for React components
- **Build Optimization**: Vite's built-in optimization features for production builds

### Third-Party Services
- **Email Delivery**: EmailJS service for handling contact form submissions and file attachments
- **Web Analytics**: Google Analytics and Google Tag Manager for user behavior tracking
- **Search Engine Integration**: Google Search Console verification and sitemap management