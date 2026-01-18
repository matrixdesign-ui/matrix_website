import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const ProductFeatures = ({ features }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || !features) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [features]);

  if (!features || features.length === 0) return null;

  return (
    <>
      <div ref={sectionRef} id="features" className="product-features-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title-wrapper text-center mb-40">
                <h2 className="tp-section-title tp-title-anim">Key Features</h2>
                <p className="section-subtitle">Discover what makes our product exceptional</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div 
                  ref={el => cardsRef.current[i] = el}
                  className="product-feature-card"
                >
                  <div className="feature-icon-wrapper">
                    <i className={feature.icon || "fas fa-check-circle"}></i>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .product-features-area {
          background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
        }
        
        .section-title-wrapper .tp-section-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          margin-bottom: 0;
          font-weight: 400;
        }
        
        .product-feature-card {
          background: #ffffff;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          text-align: center;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .product-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-feature-card::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
          pointer-events: none;
        }
        
        .product-feature-card:hover {
          transform: translateY(-8px) rotateX(2deg);
          box-shadow: 
            0 20px 40px rgba(59, 130, 246, 0.15),
            0 10px 20px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .product-feature-card:hover::before {
          transform: scaleX(1);
        }
        
        .product-feature-card:hover::after {
          width: 300px;
          height: 300px;
        }
        
        .feature-icon-wrapper {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-feature-card:hover .feature-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            0 8px 20px rgba(59, 130, 246, 0.4),
            0 0 30px rgba(59, 130, 246, 0.2);
          animation: iconGlow 2s ease-in-out infinite;
        }
        
        @keyframes iconGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(139, 92, 246, 0.6));
          }
        }
        
        .feature-icon-wrapper i {
          font-size: 1.75rem;
          color: white;
        }
        
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        
        .feature-description {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .product-feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ProductFeatures;

