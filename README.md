# Matrix Vision Systems Website 🚀

A modern, high-performance, and accessible business website built with Next.js showcasing Matrix's comprehensive IT and business solutions across Kenya and East Africa.

## ✨ Enhanced Features

### 🎯 **Core Business Solutions**
- **Infrastructure & Development**: System architecture and application development
- **Enterprise Solutions**: Business process automation and optimization  
- **Software & Applications**: Custom software development
- **ICT, Telecom & Analytics**: Technology infrastructure and data analytics
- **Security & Operational Safety**: Cybersecurity and compliance
- **Governance & Compliance**: Regulatory compliance and risk management
- **Facilities & Asset Management**: Facility management solutions
- **Education Solutions**: Training and educational technology

### 🔧 **Technical Enhancements (v2.0)**

#### **Performance & Optimization**
- ⚡ **Next.js 13.4+** with App Router and React 18
- 🖼️ **Advanced Image Optimization** with WebP/AVIF support
- 📱 **Responsive Design** with mobile-first approach
- 🎯 **Bundle Optimization** with code splitting and tree shaking
- 💾 **Caching Strategy** with static generation and ISR
- 🚀 **Core Web Vitals** optimized for excellent performance scores

#### **Security & SEO**
- 🔒 **Enhanced Security Headers** (CSP, HSTS, X-Frame-Options)
- 🔍 **Comprehensive SEO** with meta tags, structured data, and social sharing
- 🌐 **OpenGraph & Twitter Cards** for rich social media previews
- 📍 **Local SEO** optimized for Kenya and East Africa markets
- 🛡️ **Error Boundaries** for graceful error handling

#### **Accessibility & UX**
- ♿ **WCAG 2.1 AA Compliant** with ARIA attributes
- ⌨️ **Keyboard Navigation** and focus management
- 🎨 **High Contrast** and reduced motion support
- 📖 **Screen Reader** optimized content structure
- 🔄 **Loading States** and visual feedback

#### **Forms & Validation**
- ✅ **Advanced Form Validation** with react-hook-form and Yup
- 🎯 **Real-time Validation** with instant feedback
- 💬 **User-friendly Error Messages** and success states
- 📧 **Email Integration** ready for backend services
- 🔄 **Auto-save** and form persistence

## 🛠 **Technology Stack**

### **Frontend**
- **Framework**: Next.js 13.4+ (React 18)
- **Language**: JavaScript (ES2022+)
- **Styling**: SCSS/Sass with CSS Modules
- **Components**: Functional components with hooks
- **Routing**: Next.js App Router
- **State Management**: React Context API + useReducer

### **Development Tools**
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier
- **Type Checking**: TypeScript ready
- **Bundle Analysis**: @next/bundle-analyzer
- **Performance**: Lighthouse CI integration

### **Third-party Integrations**
- **Animations**: GSAP with ScrollTrigger
- **Forms**: React Hook Form + Yup validation
- **UI Components**: Bootstrap 5 + Custom components
- **Carousels**: Swiper.js and React Slick
- **Icons**: FontAwesome Pro + Custom SVGs

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 16.0+ 
- npm 8.0+ or yarn 1.22+
- Git

### **Installation**

1. **Clone the repository**:
```bash
git clone https://github.com/matrix-vision-systems/matrix-website.git
cd matrix-website
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking

# Analysis
npm run analyze      # Bundle size analysis
```

## 📁 **Project Structure**

```
matrix/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── common/          # Shared components (OptimizedImage, ErrorBoundary)
│   │   ├── forms/           # Enhanced form components
│   │   └── [feature]/       # Feature-specific components
│   ├── pages/               # Next.js pages and routing
│   ├── styles/              # SCSS stylesheets and enhancements
│   ├── utils/               # Utility functions and helpers
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Context providers
│   └── data/                # Static data and configurations
├── public/                  # Static assets (images, icons, etc.)
├── .env.example            # Environment variables template
├── next.config.js          # Enhanced Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎯 **Key Components**

### **Enhanced Forms**
- [`HeroForm`](src/forms/hero-form.jsx) - Newsletter signup with validation
- [`ContactUsForm`](src/forms/contact-us-form.jsx) - Full contact form with service selection
- [`formUtils.js`](src/utils/formUtils.js) - Form utilities and validation helpers

### **Performance Components**
- [`OptimizedImage`](src/components/common/OptimizedImage.jsx) - Lazy loading with fallbacks
- [`ErrorBoundary`](src/components/common/ErrorBoundary.jsx) - Error handling component
- [`SEO`](src/common/seo.jsx) - Comprehensive SEO meta tags

## 🚢 **Deployment**

### **Production Build**
```bash
npm run build
npm run start
```

### **Static Export** (Optional)
```bash
npm run build
npm run export
```

### **GitHub Pages Deployment**

This project is configured to deploy to GitHub Pages using GitHub Actions. The deployment happens automatically when changes are pushed to the `main` branch.

1. **Automatic Deployment**: Push to the `main` branch triggers automatic deployment via GitHub Actions
2. **Manual Deployment**: The site is built automatically through GitHub Actions when you push to the main branch

#### **GitHub Pages Configuration**
1. Go to your repository Settings > Pages
2. Under "Source", select "GitHub Actions"
3. No additional configuration is needed - the workflow will automatically deploy

#### **Custom Domain Setup**
To use your custom domain (https://matrixsystems.co.ke):

1. Update the `CNAME` file in the `public/` directory with your domain:
   ```
   matrixsystems.co.ke
   ```

2. Configure DNS settings with your domain provider:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add an ALIAS record pointing to:
     ```
     matrixdesign-ui.github.io
     ```

3. Update repository settings:
   - Go to your repository Settings > Pages
   - In the "Custom domain" field, enter: `matrixsystems.co.ke`
   - Enforce HTTPS if available

4. Wait for DNS propagation (may take up to 24 hours)

#### **Troubleshooting Custom Domain**
If your custom domain isn't working:
1. Verify the CNAME file contains only your domain (no http:// or https://)
2. Check that DNS records are correctly configured
3. Ensure GitHub Pages is enabled in repository settings
4. Confirm HTTPS enforcement isn't causing issues during certificate provisioning

### **Deployment Platforms**
- **Vercel** (Recommended): Zero-config deployment
- **Netlify**: Static site hosting
- **AWS S3 + CloudFront**: Custom infrastructure
- **Traditional Hosting**: Via static export

## 🔧 **Configuration**

### **Environment Variables**
```bash
NEXT_PUBLIC_SITE_URL=https://matrix.co.ke
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
API_BASE_URL=https://api.matrix.co.ke
```

### **Performance Optimization**
- Bundle size monitoring with webpack-bundle-analyzer
- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- Static generation for improved performance

## 🤝 **Contributing**

1. **Fork the repository**
2. **Create your feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure accessibility standards are met

## 📊 **Performance Metrics**

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Size**: Optimized for fast loading
- **Accessibility**: WCAG 2.1 AA compliant

## 📄 **License**

This project is proprietary software owned by Matrix Vision Systems Ltd.

## 📞 **Contact & Support**

For technical inquiries or business partnerships:

- **Website**: [https://matrix.co.ke](https://matrix.co.ke)
- **Email**: info@matrix.co.ke
- **Phone**: +254-700-000-000
- **Location**: Muguga Green, Nairobi, Kenya

---

**Built with ❤️ by Matrix Vision Systems Team**

*Empowering businesses through innovative technology solutions across Kenya and East Africa.*

```

## **GitHub Pages Deployment Instructions**

### **Initial Setup**
1. Ensure your repository is on GitHub
2. Go to your repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. No additional configuration is needed - the workflow will automatically deploy

### **Enabling GitHub Pages**
If you encounter a "Not Found" error during deployment:
1. Visit your repository Settings > Pages
2. Under "Source", make sure "GitHub Actions" is selected
3. If it's not available, select any branch first, then switch back to "GitHub Actions"
4. Wait a few minutes and try the deployment again

### **How It Works**
- When you push changes to the `main` branch, GitHub Actions automatically:
  1. Builds your Next.js application
  2. Exports it as static files
  3. Deploys to GitHub Pages

### **Troubleshooting Deployment**
If the deployment fails:
1. Check the Actions tab in your GitHub repository
2. Look at the deployment logs for specific error messages
3. Ensure GitHub Pages is enabled in your repository settings (Settings > Pages)
4. Make sure all dynamic routes have proper getStaticPaths configuration
5. Verify there are no conflicting paths in your pages
