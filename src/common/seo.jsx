import Head from "next/head";

const SEO = ({ 
  pageTitle,
  description = "Matrix Vision Systems - Leading provider of comprehensive IT solutions including Infrastructure Development, Enterprise Solutions, Security Systems, and Digital Transformation services across Kenya and East Africa.",
  keywords = "IT solutions, legal management, Contract lifecycle management, e-board, enterprise software, digital transformation, cybersecurity, infrastructure development, Kenya, East Africa, Matrix Vision Systems",
  image = "/assets/img/matrix-og-image.jpg",
  url,
  type = "website",
  author = "Matrix Vision Systems",
  publishedTime,
  modifiedTime,
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  structuredData
}) => {
  const siteTitle = "Matrix Vision Systems";
  const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://matrixsystems.co.ke";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="robots" content={robotsContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImage} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="en_KE" />
        
        {/* Article specific meta tags */}
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {author && <meta property="article:author" content={author} />}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImage} />
        <meta name="twitter:site" content="@MatrixVisionKE" />
        <meta name="twitter:creator" content="@MatrixVisionKE" />
        
        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#007bff" />
        <meta name="msapplication-TileColor" content="#007bff" />
        
        {/* Additional Meta Tags for Better SEO */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Geo Meta Tags for Kenya/East Africa */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.country" content="Kenya" />
        <meta name="geo.placename" content="Nairobi" />
        
        {/* Structured Data for Rich Snippets */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
        
        {/* Default Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Matrix Vision Systems",
              "description": description,
              "url": baseUrl,
              "logo": `${baseUrl}/assets/img/logo/matrix-logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-700-000-000",
                "contactType": "customer service",
                "areaServed": "KE",
                "availableLanguage": ["English", "Swahili"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Muguga Green",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "sameAs": [
                "https://www.linkedin.com/company/matrix-vision-systems",
                "https://twitter.com/MatrixVisionKE"
              ]
            })
          }}
        />
      </Head>
    </>
  );
};

export default SEO;