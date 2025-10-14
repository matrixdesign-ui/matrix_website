import service_data from '@/src/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"


const service_content = {
    // UPDATED: Main section title to reflect Matrix's broad offering
    title: "Leading Engineering and Tech Solutions for a Smarter, Secured Future",
    
    // UPDATED: Call-to-action button text
    btn_text: "Explore All Solutions",
 
    bg_img: "/assets/img/service/service-3-bg.png",
    
    // UPDATED: Featured service title (Highlighting E-Board/Governance)
    service_title: "Corporate Governance Solutions",
    
    // UPDATED: Featured service info (Highlighting E-Board function from profile)
    service_info: "Secure, Paperless Board Meetings and Executive Communications",

    // ADDED: Key for the specific service detail link
    service_key: "e-board" 
}

// NOTE: The de-structured variables below are retained for the component's logic
// but the component code itself is not included in this edit as requested.
const {title, btn_text, bg_img, service_title, service_info, service_key}  = service_content


const ServiceArea = () => {
    // ... Component logic (omitted as requested)
    
    // --- NOTE ON LINKING:
    // To correctly link the featured block, the "service_key" must be used in the Link components:
    // <Link href={`/service-details?service=${service_key}`}>
    // ...
    
    return (
        <>
            <div className="tp-service-area pb-120 z-index">
               <div className="container">
                   <div className="row">
                      <div className="col-xl-12">
                          <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                              <h3 className="tp-section-title tp-title-anim">{title}</h3>
                               <Link className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight" 
                                   data-wow-duration=".9s" 
                                   data-wow-delay=".3s" 
                                   href="/service"> {/* Updated to main /service page */}
                                   <span>{btn_text}</span>
                                   <b></b>
                               </Link>
                          </div>
                      </div>
                   </div>
                   <div className="row g-4">
                      {/* SERVICE CATEGORY CARDS - Updated to have icons on top with different icons per card */}
                      {service_data.slice(17, 24).map((item, i) => {
                        // Split description into title and description parts
                        let boldTitle = '';
                        let descriptionText = '';
                        if (typeof item.description === 'string') {
                            const descriptionParts = item.description.split(':');
                            boldTitle = descriptionParts.length > 1 ? descriptionParts[0] : '';
                            descriptionText = descriptionParts.length > 1 ? descriptionParts.slice(1).join(':') : item.description;
                        } else {
                            descriptionText = 'Learn more about this service';
                        }
                        
                        // Determine relevant icon based on item title
                        let cardIcon = "fas fa-cogs";
                        if (item.title.includes("Software") || item.title.includes("Application")) {
                            cardIcon = "fas fa-laptop-code";
                        } else if (item.title.includes("Infrastructure") || item.title.includes("Development")) {
                            cardIcon = "fas fa-server";
                        } else if (item.title.includes("Enterprise")) {
                            cardIcon = "fas fa-building";
                        } else if (item.title.includes("Governance") || item.title.includes("Compliance")) {
                            cardIcon = "fas fa-gavel";
                        } else if (item.title.includes("Facilities") || item.title.includes("Asset")) {
                            cardIcon = "fas fa-warehouse";
                        } else if (item.title.includes("Security") || item.title.includes("Safety")) {
                            cardIcon = "fas fa-shield-alt";
                        } else if (item.title.includes("ICT") || item.title.includes("Telecom") || item.title.includes("Analytics")) {
                            cardIcon = "fas fa-network-wired";
                        } else if (item.title.includes("Education")) {
                            cardIcon = "fas fa-graduation-cap";
                        }
                        
                        return (
                          <div key={i} className="col-xl-4 col-md-6">
                            <div className="service-card">
                              {/* Icon on top */}
                              <div className="service-icon-top mb-25">
                                <div className="icon-placeholder">
                                  <i className={cardIcon} style={{ fontSize: '48px', color: '#007bff' }}></i>
                                </div>
                              </div>
                              
                              <div className="service-header mb-25">
                                <Link href={item.key ? `/services/${item.key}` : "/service-details"} style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <h3 className="service-name" style={{ fontWeight: 'bold', fontSize: '22px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>{item.title}</h3>
                                </Link>
                              </div>
                              
                              <div className="service-details mb-25">
                                {boldTitle && (
                                  <h4 className="service-title" style={{ fontWeight: '600', fontSize: '18px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>
                                    {boldTitle}:
                                  </h4>
                                )}
                                <p className="service-description" style={{ fontSize: '14px', color: '#495057', lineHeight: '1.5', marginBottom: '0', textAlign: 'center' }}>
                                  {descriptionText}
                                </p>
                              </div>
                              
                              <div className="service-type">
                                <Link href={item.key ? `/services/${item.key}` : "/service-details"} style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <span className="type-badge">Learn More</span>
                                </Link>
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
                padding: 30px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                transition: all 0.3s ease;
                height: 100%;
                border: 1px solid #eee;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
              }
              
              .service-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
              }
              
              .service-type {
                padding-top: 20px;
                border-top: 1px solid #eee;
                width: 100%;
              }
              
              .type-badge {
                background-color: #007bff; /* Blue color for services */
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
              }
              
              .icon-placeholder {
                border: none;
                border-radius: 8px;
                padding: 20px;
                min-height: 90px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
              }
              
              @media (max-width: 768px) {
                .section-title h2 {
                  font-size: 28px;
                }
                
                .service-card {
                  padding: 20px;
                }
              }
            `}</style>
        </>
    );
};

export default ServiceArea;