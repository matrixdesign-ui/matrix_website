# Component Architecture

<cite>
**Referenced Files in This Document**   
- [src/pages/_app.jsx](file://src/pages/_app.jsx)
- [src/layout/wrapper.jsx](file://src/layout/wrapper.jsx)
- [src/pages/home-2.jsx](file://src/pages/home-2.jsx)
- [src/components/homes/home-2/hero-area.jsx](file://src/components/homes/home-2/hero-area.jsx)
- [src/components/homes/home-2/service-area.jsx](file://src/components/homes/home-2/service-area.jsx)
- [src/data/service-data.js](file://src/data/service-data.js)
- [src/components/service/service-area.jsx](file://src/components/service/service-area.jsx)
- [src/components/homes/home-3/hero-area.jsx](file://src/components/homes/home-3/hero-area.jsx)
- [src/components/homes/home-4/hero-area.jsx](file://src/components/homes/home-4/hero-area.jsx)
- [src/components/homes/home-5/hero-area.jsx](file://src/components/homes/home-5/hero-area.jsx)
- [src/common/hero-banner.jsx](file://src/common/hero-banner.jsx)
- [src/context/ContextProvider.js](file://src/context/ContextProvider.js)
</cite>

## Table of Contents
1. [Global Layout and Context Providers](#global-layout-and-context-providers)
2. [Feature-Based Component Organization](#feature-based-component-organization)
3. [Component Composition and Hierarchy](#component-composition-and-hierarchy)
4. [Data Flow and Prop Usage](#data-flow-and-prop-usage)
5. [Component Reuse and Conditional Rendering](#component-reuse-and-conditional-rendering)
6. [Best Practices in Component Design](#best-practices-in-component-design)

## Global Layout and Context Providers

The Matrix website's React component architecture is built on a foundation of global layout and context management. The `_app.jsx` file serves as the root component, wrapping all pages and enabling the consistent application of styles and third-party libraries. It imports the global SCSS stylesheet and conditionally loads Bootstrap's JavaScript on the client side, ensuring consistent UI behavior across the application.

The `wrapper.jsx` component provides an additional layer of functionality by integrating GSAP (GreenSock Animation Platform) and ScrollTrigger for scroll-based animations. It also includes a `ScrollToTop` hook that ensures users return to the top of the page when navigating between routes. This wrapper is used across multiple pages to maintain animation consistency and user experience.

Context management is handled through `ContextProvider.js`, which creates a global `AppContext` using React's `createContext`. This context manages mouse interaction states (`isEnter`) and provides handlers for hover effects, enabling consistent UI feedback across components without prop drilling.

**Section sources**
- [src/pages/_app.jsx](file://src/pages/_app.jsx#L1-L11)
- [src/layout/wrapper.jsx](file://src/layout/wrapper.jsx#L1-L26)
- [src/context/ContextProvider.js](file://src/context/ContextProvider.js#L1-L25)

## Feature-Based Component Organization

The component structure follows a feature-based directory organization, grouping related components by functionality rather than by type. The `src/components` directory contains top-level feature folders such as `homes`, `service`, `project`, `blog`, and `career`, each representing a major section of the website.

The `homes` directory exemplifies this approach, containing multiple home page variants (`home-2`, `home-3`, `home-4`, `home-5`) that represent different design iterations or client-specific versions. Each home variant has its own subdirectory with dedicated components like `hero-area.jsx`, `service-area.jsx`, and `testimonial-area.jsx`, allowing for isolated development and customization.

Reusable common components are stored in the `src/common` directory, including elements like `breadcrumb.jsx`, `preloader.jsx`, `seo.jsx`, and `testimonial-area.jsx`. These components are designed for cross-functional use and are imported wherever needed, promoting consistency and reducing duplication.

**Section sources**
- [src/components/homes/home-2](file://src/components/homes/home-2)
- [src/common](file://src/common)

## Component Composition and Hierarchy

The architecture follows a composition pattern where complex pages are constructed from smaller, single-responsibility components. Each home page variant is built by combining modular sections that handle specific UI concerns. For example, `home-2.jsx` composes its layout using `HeroArea`, `ServiceArea`, `TestimonialArea`, and other components, each responsible for a distinct part of the page.

The component hierarchy begins with the page-level component (e.g., `home-2.jsx`), which imports the `Wrapper` and `SEO` components for layout and metadata. It then renders feature-specific components from the `homes` directory. These components, in turn, compose even smaller UI elements like buttons, icons, and image containers.

This hierarchical composition enables a clear separation of concerns, where higher-level components manage page structure while lower-level components handle visual presentation and interaction. The use of Next.js `Link` components and `Image` optimization ensures proper routing and performance throughout the composition tree.

**Section sources**
- [src/pages/home-2.jsx](file://src/pages/home-2.jsx#L1-L15)
- [src/components/homes/home-2/index.jsx](file://src/components/homes/home-2/index.jsx)
- [src/components/homes/home-2/hero-area.jsx](file://src/components/homes/home-2/hero-area.jsx#L1-L128)

## Data Flow and Prop Usage

Data flows from static data files to components through props, enabling a clean separation between content and presentation. The `service-data.js` file serves as a central repository for service-related content, exporting an array of service objects with properties like `title`, `description`, `icon`, and `key`. This data is consumed by various components to render consistent content across the site.

Components receive data through props, often destructuring configuration objects to extract relevant values. For instance, `hero-area.jsx` components across different home variants use a `hero_content` object to define titles, subtitles, and button text. This pattern allows for easy content updates without modifying component logic.

The `service-area.jsx` component demonstrates advanced prop usage by mapping over service data to generate dynamic UI elements. It uses the `service_data` array to create interactive service cards with proper routing, where each service's `title` is transformed into a URL-friendly slug for navigation.

**Section sources**
- [src/data/service-data.js](file://src/data/service-data.js#L1-L340)
- [src/components/homes/home-2/service-area.jsx](file://src/components/homes/home-2/service-area.jsx#L1-L164)
- [src/components/service/service-area.jsx](file://src/components/service/service-area.jsx#L1-L250)

## Component Reuse and Conditional Rendering

The codebase demonstrates extensive component reuse across different home variants, with shared patterns adapted through conditional rendering and prop customization. The `hero-area.jsx` component exists in multiple home directories (`home-2`, `home-3`, `home-4`, `home-5`), each implementing a unique visual design while maintaining the same functional interface.

Conditional rendering is used to enable UI flexibility based on device type or animation state. For example, several `hero-area.jsx` components include conditional classes like `d-none d-sm-block` to show or hide elements based on screen size. Animation hooks like `useCharAnimation` and `useTitleAnimation` control the visibility and timing of animated text elements, creating dynamic entrance effects.

The `hero-banner.jsx` component in the common directory provides a reusable banner pattern that accepts `bg_img`, `title`, and `subtitle` as props, allowing it to be customized for different sections of the site. This approach reduces code duplication while maintaining design consistency across pages.

**Section sources**
- [src/components/homes/home-2/hero-area.jsx](file://src/components/homes/home-2/hero-area.jsx#L1-L128)
- [src/components/homes/home-3/hero-area.jsx](file://src/components/homes/home-3/hero-area.jsx#L1-L89)
- [src/components/homes/home-4/hero-area.jsx](file://src/components/homes/home-4/hero-area.jsx#L1-L67)
- [src/components/homes/home-5/hero-area.jsx](file://src/components/homes/home-5/hero-area.jsx#L1-L77)
- [src/common/hero-banner.jsx](file://src/common/hero-banner.jsx#L1-L38)

## Best Practices in Component Design

The codebase follows several React best practices in component design. Presentational and container components are effectively separated, with data-fetching and state management concerns isolated from UI rendering. The use of custom hooks like `useCharAnimation`, `useTitleAnimation`, and `useIsomorphicEffect` encapsulates reusable logic and promotes code reuse.

Functional components with hooks are consistently used instead of class components, leveraging React's modern API for state and side effects. The architecture embraces composition over inheritance, with components building upon each other through props and children rather than extending base classes.

Performance optimizations are evident through the use of Next.js `Image` components for optimized image loading, `ScrollTrigger` for efficient scroll-based animations, and `useEffect` with proper dependency arrays to prevent unnecessary re-renders. The component structure supports maintainability and scalability, with clear naming conventions and logical file organization that make the codebase easy to navigate and extend.

**Section sources**
- [src/hooks/useCharAnimation.js](file://src/hooks/useCharAnimation.js)
- [src/hooks/useTitleAnimation.js](file://src/hooks/useTitleAnimation.js)
- [src/hooks/useIsomorphicEffect.js](file://src/hooks/useIsomorphicEffect.js)
- [src/components/common/OptimizedImage.jsx](file://src/components/common/OptimizedImage.jsx)