# Technology Stack & Dependencies

<cite>
**Referenced Files in This Document**   
- [package.json](file://package.json)
- [next.config.js](file://next.config.js)
- [src/context/ContextProvider.js](file://src/context/ContextProvider.js)
- [src/hooks/useTitleAnimation.js](file://src/hooks/useTitleAnimation.js)
- [src/hooks/useCharAnimation.js](file://src/hooks/useCharAnimation.js)
- [src/hooks/useMultipleAnime.js](file://src/hooks/useMultipleAnime.js)
- [src/forms/loging-form.jsx](file://src/forms/loging-form.jsx)
- [src/forms/contact-us-form.jsx](file://src/forms/contact-us-form.jsx)
- [src/forms/hero-form.jsx](file://src/forms/hero-form.jsx)
- [src/common/count.jsx](file://src/common/count.jsx)
- [src/ui/nice-select.jsx](file://src/ui/nice-select.jsx)
- [src/modals/video-popup.jsx](file://src/modals/video-popup.jsx)
</cite>

## Table of Contents
1. [Core Frameworks](#core-frameworks)
2. [Animation & Interaction Libraries](#animation--interaction-libraries)
3. [Carousel & Slider Implementations](#carousel--slider-implementations)
4. [Form Handling & Validation](#form-handling--validation)
5. [State Management](#state-management)
6. [UI Enhancement Components](#ui-enhancement-components)
7. [Build & Optimization Tools](#build--optimization-tools)
8. [Dependency Interrelationships](#dependency-interrelationships)
9. [Technology Integration Examples](#technology-integration-examples)

## Core Frameworks

The Matrix website is built on a modern React-based technology stack with Next.js 13.4+ serving as the foundation for server-side rendering (SSR), static site generation, and routing. React 18 provides the component architecture with concurrent rendering capabilities, while Bootstrap 5 delivers responsive layout and UI components. This combination enables fast initial loading, excellent SEO performance, and consistent cross-device experiences.

Next.js 13.4+ was selected for its hybrid rendering capabilities, file-based routing system, and built-in API routes, allowing for both static and dynamic content delivery. The framework's Image component with automatic optimization and the App Router pattern (though not explicitly shown) enable efficient content loading and navigation. Bootstrap 5 was chosen over custom CSS frameworks for its comprehensive component library, responsive grid system, and accessibility features, reducing development time while ensuring cross-browser compatibility.

**Section sources**
- [package.json](file://package.json#L1-L75)
- [next.config.js](file://next.config.js#L1-L102)

## Animation & Interaction Libraries

GSAP (GreenSock Animation Platform) 3.11.5 serves as the primary animation library, providing high-performance JavaScript animations with precise control over timing, easing, and sequencing. GSAP is integrated with ScrollTrigger to create scroll-based animations that activate when elements enter the viewport, enhancing user engagement through dynamic visual effects.

The implementation includes custom React hooks that encapsulate GSAP functionality for reusable animation patterns. `useTitleAnimation` applies entrance animations to heading elements with vertical movement and opacity transitions triggered by scroll position. `useCharAnimation` enables character-by-character text animations, while `useMultipleAnime` creates staggered entrance animations for lists of elements with back-easing effects. These hooks leverage React's lifecycle methods to ensure animations are properly initialized and cleaned up.

**Section sources**
- [src/hooks/useTitleAnimation.js](file://src/hooks/useTitleAnimation.js#L3-L17)
- [src/hooks/useCharAnimation.js](file://src/hooks/useCharAnimation.js#L4-L10)
- [src/hooks/useMultipleAnime.js](file://src/hooks/useMultipleAnime.js#L3-L25)

## Carousel & Slider Implementations

The website employs both react-slick and Swiper.js for carousel functionality, leveraging the strengths of each library for different use cases. react-slick provides a lightweight, accessible carousel solution for simpler implementations, while Swiper.js offers advanced features like navigation controls, scrollbars, and touch gestures for more complex slider requirements.

Swiper.js is used in journey timeline components and testimonial sections, where its modular architecture allows for navigation, scrollbar, and responsive breakpoint configuration. The implementation includes custom settings objects that define slides per view, spacing, and breakpoints for different screen sizes. react-slick appears to be used in testimonial areas, providing a simpler carousel experience with basic navigation controls.

**Section sources**
- [src/components/about/journey-area.jsx](file://src/components/about/journey-area.jsx#L0-L51)
- [src/common/testimonial-area.jsx](file://src/common/testimonial-area.jsx#L82-L101)

## Form Handling & Validation

Form handling is implemented using react-hook-form for efficient form state management and validation, integrated with Yup for schema-based validation. This combination provides a robust, performant solution for form validation with minimal re-renders and excellent developer experience. The implementation includes custom form components for login, contact, and hero section forms with loading states, error handling, and submission feedback.

The contact form demonstrates advanced form handling patterns with service selection via NiceSelect, real-time validation feedback with visual indicators, and submission status messaging. Form data is processed through utility functions that trim string inputs and format error messages consistently. The implementation includes accessibility features such as ARIA attributes, error messaging with role="alert", and proper form labeling.

**Section sources**
- [src/forms/loging-form.jsx](file://src/forms/loging-form.jsx#L16-L124)
- [src/forms/contact-us-form.jsx](file://src/forms/contact-us-form.jsx#L16-L240)
- [src/forms/hero-form.jsx](file://src/forms/hero-form.jsx#L12-L130)
- [src/utils/formUtils.js](file://src/utils/formUtils.js#L52-L64)

## State Management

State management is implemented using React's Context API through a centralized ContextProvider component. This approach provides a simple, effective solution for managing global UI state without the complexity of external state management libraries. The ContextProvider manages hover states for interactive elements, exposing state values and handler functions through a context object.

The implementation follows React best practices with useState hooks for local component state and useCallback for memoizing event handlers. The context pattern enables consistent hover behavior across the application, such as cursor changes and visual feedback, while maintaining a clean separation between state logic and presentation components.

**Section sources**
- [src/context/ContextProvider.js](file://src/context/ContextProvider.js#L4-L22)

## UI Enhancement Components

The website incorporates several specialized UI components to enhance user experience. react-modal-video provides YouTube video embedding with modal presentation, enabling seamless video playback without leaving the current page. The NiceSelect component enhances native select elements with customizable styling, keyboard navigation, and click-away detection for improved accessibility and visual consistency.

NiceSelect implements a custom dropdown interface with React hooks for state management, click-outside detection, and keyboard interaction. The component supports dynamic option rendering, selected state highlighting, and callback functions for value changes. These UI enhancements maintain Bootstrap's design language while adding functionality not available in standard components.

**Section sources**
- [src/ui/nice-select.jsx](file://src/ui/nice-select.jsx#L0-L61)
- [src/modals/video-popup.jsx](file://src/modals/video-popup.jsx#L0-L21)

## Build & Optimization Tools

The build process leverages Sass for CSS preprocessing, enabling modular styling with partials, variables, and mixins organized in a component-based directory structure. Critters is used for critical CSS inlining, automatically extracting and inlining above-the-fold CSS to improve initial page load performance. The Next.js configuration includes image optimization with WebP and AVIF formats, responsive image sizing, and caching headers.

The development workflow includes code formatting with Prettier, linting with ESLint, and type checking with TypeScript. The next.config.js file configures security headers, redirects, and webpack optimization for code splitting and bundle analysis. The build process generates optimized assets with long-term caching for static resources and implements scroll restoration for improved user experience.

**Section sources**
- [next.config.js](file://next.config.js#L1-L102)
- [package.json](file://package.json#L1-L75)

## Dependency Interrelationships

The technology stack demonstrates careful consideration of version compatibility and dependency relationships. Next.js 13.4+ is compatible with React 18's concurrent features, while Bootstrap 5's CSS-only approach avoids JavaScript conflicts. GSAP 3.x integrates smoothly with React through custom hooks that manage animation lifecycles. The form validation stack of react-hook-form and Yup works together through schema resolvers, enabling declarative validation rules.

Peer dependency management ensures compatibility between React and its ecosystem libraries, with react-slick and react-countup supporting React 18. The use of react-use for utilities like useClickAway demonstrates a preference for lightweight, focused packages. The overall dependency strategy prioritizes stability, with specific version locking to prevent breaking changes in production.

**Section sources**
- [package.json](file://package.json#L1-L75)

## Technology Integration Examples

The integration of GSAP with React components demonstrates effective pattern usage through custom hooks that abstract animation logic. The useTitleAnimation hook combines GSAP's timeline functionality with React's useIsomorphicLayoutEffect to ensure animations work correctly during server-side rendering and client hydration. This pattern enables reusable, composable animations that respond to scroll position through ScrollTrigger.

Form components illustrate the integration of react-hook-form with Bootstrap styling, maintaining visual consistency while leveraging modern form handling patterns. The contact form combines Yup validation schemas with real-time feedback, loading states, and submission handling in a cohesive user experience. The Context API implementation shows how global state can be managed simply without external libraries, providing a clean API for component interaction.

**Section sources**
- [src/hooks/useTitleAnimation.js](file://src/hooks/useTitleAnimation.js#L3-L17)
- [src/forms/contact-us-form.jsx](file://src/forms/contact-us-form.jsx#L16-L240)
- [src/context/ContextProvider.js](file://src/context/ContextProvider.js#L4-L22)