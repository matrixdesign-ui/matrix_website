import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Import products data from centralized data file
import products from '../../data/product-data';

const ProductArea = () => {
    return (
        <>
            <div className="tp-service-area pb-120 z-index">
               <div className="container">
                   <div className="row g-4" style={{ marginTop: '60px' }}>
                      {/* PRODUCT CARDS */}
                      {products.map((item, i) => {
                        return (
                          <div key={item.id} className="col-xl-6 col-md-6">
                            <div className="service-card">
                              {/* Content */}
                              <div className="service-content">
                                <div className="service-content-inner">
                                  <div className="service-logo mb-0" style={{ marginTop: '0' }}>
                                    <Image 
                                      src={item.img} 
                                      alt={`${item.title} Logo`}
                                      width={200}
                                      height={100}
                                      style={{ 
                                        maxWidth: '100%', 
                                        height: 'auto', 
                                        objectFit: 'contain',
                                        display: 'block',
                                        margin: '0 auto'
                                      }}
                                    />
                                  </div>
                                  
                                  <div className="service-details" style={{ marginTop: '1rem', marginBottom: '0' }}>
                                    <p className="service-description" style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginBottom: '0', textAlign: 'center' }}>{item.description}</p>
                                  </div>
                                  
                                  <div className="service-type" style={{ marginTop: '1.5rem' }}>
                                    {item.external ? (
                                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <span className="tp-btn-inner tp-btn-hover alt-color-black">
                                          <span>Visit Website</span>
                                          <b></b>
                                        </span>
                                      </a>
                                    ) : (
                                      <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <span className="tp-btn-inner tp-btn-hover alt-color-black">
                                          <span>Learn More</span>
                                          <b></b>
                                        </span>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                   </div>
               </div>
            </div>
            
            {/* Styles */}
            <style jsx>{`
              .section-title h2 {
                font-size: 36px;
                font-weight: 700;
                color: #222;
              }
              
              .service-card {
                background: white;
                border-radius: 15px;
                padding: 20px 20px 10px 20px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                transition: all 0.3s ease;
                height: 350px;
                border: 1px solid #e2e8f0;
                position: relative;
                overflow: hidden;
                display: flex;
                flex-direction: column;
              }
              
              .service-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
                border-color: #cbd5e1;
              }
              
              .service-content {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 0;
              }
              
              .service-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                min-height: 100px;
              }
              
              .service-content-inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                height: 100%;
                width: 100%;
                padding-top: 0;
              }
              
              .service-type {
                margin-top: auto;
                width: 100%;
                margin-bottom: 0;
              }
              
              @media (max-width: 768px) {
                .section-title h2 {
                  font-size: 28px;
                }
                
                .service-card {
                  height: 320px;
                  padding: 15px;
                }
              }
            `}</style>
        </>
    );
};

export default ProductArea;

