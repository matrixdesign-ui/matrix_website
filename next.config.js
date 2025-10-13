/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Required for GitHub Pages - export as static HTML
  output: 'export',
  
  // Set base path for GitHub Pages - matches your repository name
  basePath: '/matrix_website',
  
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,

  // Image optimization - disabled for GitHub Pages
  images: {
    unoptimized: true,
  },
  
  // Experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Power-ups for production
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Bundle analyzer in development
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all'
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    }
    
    return config
  },
}

module.exports = nextConfig