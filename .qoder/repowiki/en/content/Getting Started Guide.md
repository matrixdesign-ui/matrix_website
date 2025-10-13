# Getting Started Guide

<cite>
**Referenced Files in This Document**   
- [package.json](file://package.json)
- [next.config.js](file://next.config.js)
- [README.md](file://README.md)
</cite>

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Project Installation](#project-installation)
4. [Development Workflow](#development-workflow)
5. [Environment Configuration](#environment-configuration)
6. [Project Structure Overview](#project-structure-overview)
7. [Troubleshooting Common Issues](#troubleshooting-common-issues)

## Prerequisites

Before setting up the Matrix website development environment, ensure you have the following prerequisites installed on your system:

- **Node.js**: Version 16.0 or higher
- **npm**: Version 8.0 or higher (or yarn 1.22+)
- **Git**: For repository cloning and version control

The project specifies these requirements in its `engines` field within package.json, ensuring compatibility with modern development environments.

**Section sources**
- [package.json](file://package.json#L25-L28)

## Environment Setup

### Installing Node.js

To install Node.js for the Matrix website development environment:

1. Visit the official Node.js website (https://nodejs.org)
2. Download the LTS (Long Term Support) version, which should be 16.0 or higher
3. Run the installer with default settings
4. Verify the installation by opening a terminal/command prompt and running:
```bash
node --version
npm --version
```

The commands should return version numbers that meet the project's requirements (Node.js >=16.0.0 and npm >=8.0.0).

## Project Installation

### Cloning the Repository

To clone the Matrix website repository, execute the following commands in your terminal:

```bash
git clone https://github.com/matrix-vision-systems/matrix-website.git
cd matrix-website
```

This will create a local copy of the repository in a directory named "matrix-website" and navigate into the project folder.

### Installing Dependencies

After cloning the repository, install the required dependencies using npm:

```bash
npm install
```

Alternatively, if you prefer using yarn:
```bash
yarn install
```

The installation process will read the package.json file and download all necessary packages, including Next.js 13.4.19, React 18.2.0, Bootstrap 5.2.3, and various development tools.

**Section sources**
- [package.json](file://package.json#L1-L75)
- [README.md](file://README.md#L78-L92)

## Development Workflow

### Starting the Development Server

Once dependencies are installed, start the development server with:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

This command executes `next dev` as defined in the package.json scripts, launching the Next.js development server. The application will be accessible at http://localhost:3000 by default.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This command executes `next build`, which compiles the application, performs optimizations like code splitting and minification, and prepares the app for deployment.

### Running in Production Mode

After building the application, start the production server with:

```bash
npm run start
```

This runs `next start`, serving the pre-built application with optimal performance settings.

**Section sources**
- [package.json](file://package.json#L7-L14)

## Environment Configuration

### Next.js Configuration

The Matrix website uses a comprehensive next.config.js configuration file that includes several important settings:

#### Image Optimization Settings

The configuration enables advanced image optimization with support for modern formats:

- **Supported formats**: WebP and AVIF
- **Allowed domains**: localhost and matrix.co.ke
- **Device sizes**: Multiple breakpoints from 640px to 3840px
- **Image sizes**: Various thumbnail sizes from 16px to 384px
- **Cache TTL**: Minimum 60 seconds for image optimization cache

#### Security Headers

The configuration implements multiple security headers:

- **X-Frame-Options**: DENY (prevents clickjacking)
- **X-Content-Type-Options**: nosniff (prevents MIME type sniffing)
- **Referrer-Policy**: origin-when-cross-origin
- **X-XSS-Protection**: 1; mode=block (enables XSS filtering)

#### Performance and Optimization

Additional configuration includes:
- React strict mode for development
- SWC minification for faster builds
- Scroll restoration for better user experience
- Console removal in production environment
- Custom webpack configuration for code splitting

**Section sources**
- [next.config.js](file://next.config.js#L1-L103)

## Project Structure Overview

The Matrix website follows a standard Next.js project structure with organized directories:

- **src/**: Contains all source code
  - **components/**: Reusable React components
  - **pages/**: Next.js routing and page components
  - **styles/**: SCSS stylesheets and enhancements
  - **utils/**: Utility functions and helpers
  - **hooks/**: Custom React hooks
  - **context/**: React Context providers
  - **data/**: Static data and configurations

- **public/**: Static assets like images, CSS, and JavaScript files
- **next.config.js**: Next.js configuration
- **package.json**: Project dependencies and scripts

To verify the installation, navigate to http://localhost:3000 in your browser after starting the development server. You should see the Matrix website homepage with all components loading correctly.

## Troubleshooting Common Issues

### Port Conflicts

If you encounter a port conflict when starting the development server:

1. Check if another process is using port 3000:
```bash
npx kill-port 3000
```

2. Or start the server on a different port:
```bash
npm run dev -- -p 3001
```

### Missing Dependencies

If you encounter missing dependency errors:

1. Clear npm cache:
```bash
npm cache clean --force
```

2. Delete node_modules and package-lock.json:
```bash
rm -rf node_modules package-lock.json
```

3. Reinstall dependencies:
```bash
npm install
```

### Environment Variable Issues

If environment variables are not being recognized:

1. Create a .env.local file from the example:
```bash
cp .env.example .env.local
```

2. Ensure the file is in the root directory
3. Restart the development server after making changes

These steps should resolve most common setup issues encountered when configuring the Matrix website development environment.

**Section sources**
- [README.md](file://README.md#L93-L126)
- [next.config.js](file://next.config.js#L1-L103)
- [package.json](file://package.json#L1-L75)