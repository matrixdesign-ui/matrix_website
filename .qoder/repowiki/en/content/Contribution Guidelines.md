# Contribution Guidelines

<cite>
**Referenced Files in This Document**   
- [README.md](file://README.md)
- [next.config.js](file://next.config.js)
- [package.json](file://package.json)
- [jsconfig.json](file://jsconfig.json)
- [src/pages/_app.jsx](file://src/pages/_app.jsx)
- [src/styles/index.scss](file://src/styles/index.scss)
- [public/assets/scss/utils/_index.scss](file://public/assets/scss/utils/_index.scss)
- [public/assets/scss/utils/_root.scss](file://public/assets/scss/utils/_root.scss)
- [public/assets/scss/utils/_mixins.scss](file://public/assets/scss/utils/_mixins.scss)
- [public/assets/New Text.txt](file://public/assets/New Text.txt)
</cite>

## Table of Contents
1. [Development Workflow](#development-workflow)
2. [Coding Standards](#coding-standards)
3. [Adding New Content](#adding-new-content)
4. [UI Consistency](#ui-consistency)
5. [Testing and Verification](#testing-and-verification)
6. [Documentation Updates](#documentation-updates)
7. [Code Review and Deployment](#code-review-and-deployment)

## Development Workflow

The Matrix website follows a structured development workflow to ensure code quality and consistency. Contributors should follow the standard branching model where feature development occurs on dedicated branches. The main branch serves as the stable production version. 

All contributions begin by creating a feature branch from the main branch using the naming convention `feature/descriptive-name`. After completing development and testing, contributors submit a pull request to merge their changes into the main branch. Pull requests require approval from at least one project maintainer and must pass all automated checks before merging.

Commit messages should follow conventional commit guidelines, clearly describing the change type (feat, fix, docs, style, refactor, test, chore) followed by a concise description. This practice enables automated changelog generation and versioning.

**Section sources**
- [README.md](file://README.md#L180-L200)

## Coding Standards

### JavaScript and JSX Standards
The codebase uses modern JavaScript (ES2022+) with React 18 and follows functional component patterns with hooks. All JSX files use the `.jsx` extension and follow PascalCase naming convention for component files (e.g., `HeroBanner.jsx`). 

Components should be organized by feature in the `src/components` directory, with shared components placed in appropriate subdirectories. The codebase utilizes React Context API for state management, with providers located in the `src/context` directory.

### SCSS Standards
The styling system uses SCSS with a modular architecture. The main stylesheet imports are defined in `src/styles/index.scss`, which includes Bootstrap, Swiper, and custom SCSS files. Custom styles are organized in `public/assets/scss/` with three main directories:
- `components`: Component-specific styles
- `layout`: Page layout styles
- `utils`: Utility mixins, variables, and functions

The SCSS architecture follows a utility-first approach with reusable mixins for common patterns like transitions, transforms, and responsive breakpoints. Color and typography variables are defined in `utils/_colors.scss` and `utils/_typography.scss` respectively, and imported via `utils/_index.scss`.

File naming follows kebab-case convention (e.g., `_buttons.scss`, `_carousel.scss`). The codebase uses 4-space indentation for both JavaScript and SCSS files.

All CSS custom properties (variables) are prefixed with `--tp-` and follow the pattern `--tp-{category}-{shade}` (e.g., `--tp-primary-500`). This systematic approach ensures consistency across the codebase.

**Section sources**
- [src/styles/index.scss](file://src/styles/index.scss#L1-L6)
- [public/assets/scss/utils/_index.scss](file://public/assets/scss/utils/_index.scss#L1-L4)
- [public/assets/scss/utils/_root.scss](file://public/assets/scss/utils/_root.scss#L1-L22)
- [public/assets/scss/utils/_mixins.scss](file://public/assets/scss/utils/_mixins.scss#L48-L110)

## Adding New Content

### Adding New Pages
New pages should be created in the `src/pages` directory following Next.js routing conventions. The `_app.jsx` file serves as the root component and imports global styles from `src/styles/index.scss`. 

When creating new pages, developers should ensure proper SEO configuration by using the `SEO` component from `src/common/seo.jsx` to set appropriate meta tags, titles, and OpenGraph properties.

### Adding New Components
New components should be placed in the `src/components` directory under appropriate feature-based subdirectories. Each component should be a self-contained module with clear props interface and proper TypeScript definitions when applicable.

Reusable UI elements should be placed in `src/components/common` or `src/ui` directories. The codebase includes several utility components such as `OptimizedImage` for image optimization and `ErrorBoundary` for graceful error handling.

### Adding Data Entries
Static data is managed in the `src/data` directory with files named according to their content (e.g., `team-data.js`, `service-data.js`). Data files export JavaScript objects or arrays that are imported by components as needed.

When adding new data entries, maintain consistency with existing data structures and follow the same naming conventions. For complex data models, consider creating TypeScript interfaces to ensure type safety.

**Section sources**
- [src/pages/_app.jsx](file://src/pages/_app.jsx#L1-L10)
- [src/data](file://src/data)
- [src/components](file://src/components)

## UI Consistency

The codebase maintains UI consistency through a comprehensive system of SCSS variables, mixins, and utility classes. The `utils` directory contains foundational styles that ensure visual harmony across the website.

Color consistency is maintained through the `_colors.scss` file, which defines a comprehensive color palette with multiple shades for each color category. Typography is standardized in `_typography.scss` with defined font families, sizes, and weights.

The `_mixins.scss` file provides reusable styling patterns for common UI elements:
- `transition($time)`: Standardized transition effects
- `transform($transforms)`: Vendor-prefixed transform properties
- `border-radius($man)`: Cross-browser border radius
- `background`: Shorthand for background properties
- `keyframes($name)`: Vendor-prefixed keyframe animations

Component-level consistency is enforced through reusable React components that encapsulate both structure and styling. The codebase includes numerous pre-built components for common UI patterns like buttons, cards, modals, and navigation elements.

Animation consistency is achieved through the integration of GSAP with ScrollTrigger, Animate.css, and custom CSS animations defined in `custom-animation.css`. The `hooks` directory contains custom React hooks for implementing consistent animation patterns across components.

**Section sources**
- [public/assets/scss/utils/_colors.scss](file://public/assets/scss/utils/_colors.scss)
- [public/assets/scss/utils/_typography.scss](file://public/assets/scss/utils/_typography.scss)
- [public/assets/scss/utils/_mixins.scss](file://public/assets/scss/utils/_mixins.scss#L48-L110)
- [public/assets/css/animate.css](file://public/assets/css/animate.css)
- [public/assets/css/custom-animation.css](file://public/assets/css/custom-animation.css)

## Testing and Verification

Contributors should verify their changes locally before submitting pull requests. The development environment can be started with `npm run dev` or `yarn dev`, which launches the Next.js development server on port 3000.

The codebase includes several testing mechanisms:
- **Visual verification**: Manual testing of component rendering and responsiveness
- **Form validation**: Testing of form components with react-hook-form and Yup validation
- **Accessibility checks**: Ensuring WCAG 2.1 AA compliance with proper ARIA attributes
- **Performance testing**: Monitoring Core Web Vitals and bundle size

The `next.config.js` file includes configuration for image optimization, security headers, and performance optimizations that should be considered during testing. Developers should verify that their changes do not negatively impact page load performance or accessibility metrics.

For CSS changes, contributors should test across different screen sizes and browsers to ensure responsive design consistency. The codebase uses Bootstrap 5's responsive grid system with custom breakpoint definitions in `utils/_breakpoints.scss`.

**Section sources**
- [next.config.js](file://next.config.js#L1-L102)
- [package.json](file://package.json#L10-L15)
- [README.md](file://README.md#L70-L75)

## Documentation Updates

All new features and significant changes require corresponding documentation updates. The primary documentation is maintained in the `README.md` file, which includes sections on:
- Project overview and features
- Technology stack
- Getting started instructions
- Project structure
- Available scripts
- Deployment procedures
- Configuration options
- Contributing guidelines

When adding new components or features, update the README to include relevant information about usage, configuration options, and examples. For complex functionality, consider adding JSDoc comments to the code to improve maintainability.

Configuration changes should be documented in the appropriate sections of the README, particularly in the Configuration and Environment Variables sections. The `.env.example` file should be updated to reflect any new environment variables.

**Section sources**
- [README.md](file://README.md#L1-L236)

## Code Review and Deployment

The code review process ensures code quality and adherence to project standards. Pull requests are reviewed for:
- Code quality and readability
- Performance implications
- Security considerations
- Accessibility compliance
- Documentation completeness
- Test coverage

Maintainers verify that all automated checks pass, including linting, formatting, and type checking. The codebase uses ESLint with Next.js configuration and Prettier for code formatting, which can be run with `npm run lint` and `npm run format` respectively.

Deployment is coordinated through the main branch, which represents the production-ready codebase. The deployment process involves:
1. Building the production version with `npm run build`
2. Starting the production server with `npm run start`
3. Optional static export with `npm run export`

The website can be deployed to various platforms including Vercel (recommended), Netlify, AWS S3 with CloudFront, or traditional hosting via static export. The `next.config.js` file includes production optimizations such as image optimization, security headers, and bundle analysis.

**Section sources**
- [README.md](file://README.md#L140-L180)
- [package.json](file://package.json#L16-L25)
- [next.config.js](file://next.config.js#L1-L102)