import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  fill = false,
  style,
  objectFit = 'cover',
  objectPosition = 'center',
  loading = 'lazy',
  unoptimized = false,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  // Default blur placeholder (small base64 image)
  const defaultBlurDataURL = blurDataURL || 
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7/2Q==';

  // Generate responsive sizes if not provided
  const generateSizes = () => {
    if (sizes) return sizes;
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  // Fallback image component
  const FallbackImage = () => (
    <div 
      className={`image-fallback ${className}`}
      style={{
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999',
        fontSize: '14px',
        ...style
      }}
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21,15 16,10 5,21"/>
      </svg>
      <span style={{ marginLeft: '8px' }}>Image not available</span>
    </div>
  );

  if (imageError) {
    return <FallbackImage />;
  }

  return (
    <div className={`optimized-image-wrapper ${isLoading ? 'loading' : 'loaded'}`}>
      {isLoading && (
        <div className="image-skeleton" style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          backgroundColor: '#f0f0f0',
          animation: 'pulse 2s infinite',
          position: fill ? 'absolute' : 'static',
          top: 0,
          left: 0,
          zIndex: 1
        }} />
      )}
      
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={className}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
        sizes={generateSizes()}
        style={{
          objectFit,
          objectPosition,
          transition: 'opacity 0.3s ease-in-out',
          opacity: isLoading ? 0 : 1,
          ...style
        }}
        loading={priority ? 'eager' : loading}
        unoptimized={unoptimized}
        onLoad={handleImageLoad}
        onError={handleImageError}
        {...props}
      />
      
      <style jsx>{`
        .optimized-image-wrapper {
          position: relative;
          overflow: hidden;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .image-skeleton {
          border-radius: inherit;
        }
        
        .image-fallback {
          border: 2px dashed #ddd;
          border-radius: 8px;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;
