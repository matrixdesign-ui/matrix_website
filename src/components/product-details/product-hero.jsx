import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const ProductHero = ({ hero }) => {
  const heroRef = useRef(null);
  const topTitleRef = useRef(null);
  const logoRef = useRef(null);
  const smallTitleRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  // Animations removed as per user request

  if (!hero) return null;

  const isExternalLink = (url) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <>
      <div ref={heroRef} className="product-hero-area">
        {/* Background Image */}
        {hero.bg_image && (
          <div className="product-hero-bg-image">
            <div 
              className="bg-image-layer" 
              style={{ backgroundImage: `url(${hero.bg_image})` }}
            ></div>
            <div className="bg-gradient-overlay"></div>
          </div>
        )}
        
        {/* Animated Background Shapes */}
        <div className="floating-shapes-container">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="floating-shape shape-5"></div>
          <div className="floating-shape shape-6"></div>
        </div>
        
        <div className="product-hero-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="product-hero-content text-center">
                {hero.logo && (
                  <div ref={logoRef} className="product-hero-logo mb-40">
                    <Image
                      src={hero.logo}
                      alt={`${hero.headline || 'Product'} Logo`}
                      width={300}
                      height={100}
                      className="hero-logo-image"
                      priority
                    />
                  </div>
                )}
                <h1 ref={titleRef} className="product-hero-title">
                  {hero.top_title || hero.headline || 'Product'}
                </h1>
                <p ref={subtitleRef} className="product-hero-subtitle">
                  {hero.subheadline}
                </p>
                <div ref={buttonsRef} className="product-hero-btns d-flex gap-3 flex-wrap justify-content-center">
                  {hero.cta_primary && (
                    <>
                      {isExternalLink(hero.cta_primary_link) ? (
                        <a 
                          href={hero.cta_primary_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="tp-btn-inner tp-btn-hover alt-color-black hero-btn-orange"
                        >
                          <span>{hero.cta_primary}</span>
                          <b></b>
                        </a>
                      ) : (
                        <Link 
                          href={hero.cta_primary_link || '/contact'} 
                          className="tp-btn-inner tp-btn-hover alt-color-black hero-btn-orange"
                        >
                          <span>{hero.cta_primary}</span>
                          <b></b>
                        </Link>
                      )}
                    </>
                  )}
                  {hero.cta_secondary && (
                    <Link 
                      href={hero.cta_secondary_link || '#features'} 
                      className="tp-btn-white alt-color-black tp-btn-hover"
                    >
                      <span>{hero.cta_secondary}</span>
                      <b></b>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .product-hero-area {
          position: relative;
          background: #0a0a0f;
          min-height: 450px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 30px 0;
        }
        
        .product-hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        
        .bg-image-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          transform: scale(1.1);
          transition: transform 10s ease-in-out;
        }
        
        .bg-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(10, 10, 15, 0.85) 0%,
            rgba(30, 41, 59, 0.75) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          animation: gradientShift 8s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 15, 0.85) 0%,
              rgba(30, 41, 59, 0.75) 50%,
              rgba(15, 23, 42, 0.9) 100%
            );
          }
          33% {
            background: linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.85) 0%,
              rgba(59, 130, 246, 0.3) 50%,
              rgba(10, 10, 15, 0.9) 100%
            );
          }
          66% {
            background: linear-gradient(
              135deg,
              rgba(30, 41, 59, 0.85) 0%,
              rgba(139, 92, 246, 0.25) 50%,
              rgba(15, 23, 42, 0.9) 100%
            );
          }
        }
        
        .product-hero-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
          z-index: 1;
          animation: gradientShift 20s ease infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        .product-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 15, 0.4);
          z-index: 1;
        }
        
        .product-hero-area::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(236, 72, 153, 0.03) 25%, rgba(236, 72, 153, 0.03) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.03) 75%, rgba(59, 130, 246, 0.03) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          z-index: 1;
          opacity: 0.4;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-shapes-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
          animation: floatShape 20s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
          bottom: 20%;
          left: 50%;
          animation-delay: 4s;
        }
        
        .shape-4 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
          top: 30%;
          right: 30%;
          animation-delay: 1s;
        }
        
        .shape-5 {
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          bottom: 10%;
          right: 10%;
          animation-delay: 3s;
        }
        
        .shape-6 {
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
          top: 50%;
          left: 5%;
          animation-delay: 5s;
        }
        
        @keyframes floatShape {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, -30px) scale(0.9);
          }
          75% {
            transform: translate(40px, 20px) scale(1.05);
          }
        }
        
        .product-hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .product-hero-top-title {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          line-height: 1.4;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 0;
        }
        
        .product-hero-small-title {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          letter-spacing: 0;
          margin-top: 0;
        }
        
        .product-hero-logo {
          display: flex;
          justify-content: center;
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
        
        .hero-logo-image {
          max-width: 350px;
          height: auto;
          filter: brightness(1.1);
        }
        
        @media (max-width: 768px) {
          .product-hero-logo {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-logo-image {
            max-width: 250px;
          }
        }
        
        .product-hero-small-title {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.4;
          letter-spacing: 0;
        }
        
        .product-hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        
        .product-hero-title .product-hero-accent {
          color: #ec4899;
          background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .product-hero-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.75rem;
          line-height: 1.6;
          max-width: 42rem;
          font-weight: 400;
          text-align: center;
        }
        
        .product-hero-btns {
          gap: 1rem;
        }
        
        .product-hero-btns .tp-btn-inner {
          min-width: 160px;
          padding: 0.875rem 1.75rem;
          font-weight: 500;
        }
        
        .product-hero-btns .hero-btn-orange {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(249, 115, 22, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-hero-btns .hero-btn-orange:hover {
          background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
          box-shadow: 0 6px 20px 0 rgba(249, 115, 22, 0.5);
          transform: translateY(-2px);
        }
        
        .product-hero-btns .hero-btn-orange span::after {
          content: ' →';
          display: inline-block;
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .product-hero-btns .hero-btn-orange:hover span::after {
          transform: translateX(4px);
        }
        
        .product-hero-btns .tp-btn-white {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: white !important;
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-hero-btns .tp-btn-white span {
          color: white !important;
        }
        
        .product-hero-btns .tp-btn-white:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);
          transform: translateY(-2px);
          color: white !important;
        }
        
        .product-hero-btns .tp-btn-white:hover span {
          color: white !important;
        }
        
        @media (max-width: 768px) {
          .product-hero-area {
            min-height: 400px;
            padding: 80px 0 20px 0;
          }
          
          .product-hero-btns {
            flex-direction: column;
            align-items: stretch;
          }
          
          .product-hero-btns a {
            width: 100%;
            max-width: none;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default ProductHero;

