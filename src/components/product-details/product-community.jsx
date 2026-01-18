import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

const ProductCommunity = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 40,
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
  }, []);

  const communityLinks = [
    {
      title: 'GitHub',
      description: 'Star us on GitHub and contribute',
      icon: 'fab fa-github',
      link: '#',
      color: 'from-gray-900 to-gray-800'
    },
    {
      title: 'Discord',
      description: 'Join our community discussions',
      icon: 'fab fa-discord',
      link: '#',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Twitter',
      description: 'Follow us for updates',
      icon: 'fab fa-twitter',
      link: '#',
      color: 'from-blue-400 to-blue-500'
    }
  ];

  return (
    <>
      <div ref={sectionRef} className="product-community-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title-wrapper text-center mb-60">
                <h2 className="tp-section-title tp-title-anim">Join Our Community</h2>
                <p className="section-subtitle">Connect with developers and stay updated</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {communityLinks.map((item, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <Link 
                  href={item.link}
                  ref={el => cardsRef.current[i] = el}
                  className="community-card"
                >
                  <div className="community-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="community-title">{item.title}</h3>
                  <p className="community-description">{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .product-community-area {
          background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
        }
        
        .community-card {
          background: #ffffff;
          border-radius: 1rem;
          padding: 2.5rem;
          display: block;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
        }
        
        .community-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .community-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 40px rgba(59, 130, 246, 0.15),
            0 10px 20px rgba(0, 0, 0, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .community-card:hover::before {
          opacity: 1;
        }
        
        .community-icon {
          width: 4.5rem;
          height: 4.5rem;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .community-card:hover .community-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }
        
        .community-icon i {
          font-size: 2rem;
          color: white;
        }
        
        .community-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        
        .community-description {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .community-card {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default ProductCommunity;

