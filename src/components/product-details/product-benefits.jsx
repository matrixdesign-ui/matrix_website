import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const ProductBenefits = ({ benefits }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || !benefits) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Animate benefit cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            x: index % 2 === 0 ? -30 : 30,
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
  }, [benefits]);

  if (!benefits || benefits.length === 0) return null;

  return (
    <>
      <div ref={sectionRef} className="product-benefits-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title-wrapper text-center mb-40">
                <h2 className="tp-section-title tp-title-anim">Why Choose Our Solution</h2>
                <p className="section-subtitle">Key benefits that drive value for your organization</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="col-xl-6 col-md-6">
                <div 
                  ref={el => cardsRef.current[i] = el}
                  className="product-benefit-card"
                >
                  <div className="benefit-content">
                    <div className="benefit-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="benefit-text">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .product-benefits-area {
          background-color: #ffffff;
        }
        
        .product-benefit-card {
          background: #ffffff;
          border-radius: 0.75rem;
          padding: 1.25rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          height: 100%;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }
        
        .product-benefit-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #3b82f6, #2563eb);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-benefit-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateX(8px) scale(1.02);
          box-shadow: 
            0 12px 24px rgba(59, 130, 246, 0.12),
            0 4px 8px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(59, 130, 246, 0.1);
        }
        
        .product-benefit-card:hover::before {
          transform: scaleY(1);
        }
        
        .benefit-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .benefit-icon {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-benefit-card:hover .benefit-icon {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 
            0 8px 20px rgba(59, 130, 246, 0.4),
            0 0 30px rgba(59, 130, 246, 0.2);
          animation: iconPulse 2s ease-in-out infinite;
        }
        
        @keyframes iconPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(37, 99, 235, 0.6));
          }
        }
        
        .benefit-icon i {
          font-size: 1.25rem;
          color: white;
        }
        
        .benefit-text {
          flex: 1;
        }
        
        .benefit-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.375rem;
          letter-spacing: -0.01em;
        }
        
        .benefit-description {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .product-benefit-card {
            padding: 1rem;
          }
          
          .benefit-content {
            flex-direction: column;
            text-align: center;
          }
          
          .benefit-icon {
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
};

export default ProductBenefits;

