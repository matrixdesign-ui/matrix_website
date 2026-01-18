import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceDetailsData from '../../data/service-details-data';

// Import service images
import service_img_1 from "../../../public/assets/img/service/sv-icon-1.png";
import service_img_2 from "../../../public/assets/img/service/sv-icon-2.png";
import service_img_3 from "../../../public/assets/img/service/sv-icon-3.png";
import service_img_4 from "../../../public/assets/img/service/sv-icon-4.png";
import service_img_5 from "../../../public/assets/img/service/sv-icon-5.png";
import service_img_6 from "../../../public/assets/img/service/sv-icon-4-1.png";
import service_img_7 from "../../../public/assets/img/service/sv-icon-4-2.png";
import service_img_8 from "../../../public/assets/img/service/sv-icon-4-3.png";
import service_img_9 from "../../../public/assets/img/service/sv-icon-4-4.png";

// Services category data for main services page
const service_categories = [
  {
    id: 1,
    title: "Software & Applications",
    description: "Comprehensive software solutions for legal case management, contracts lifecycle, electronic board management, and specialized applications.",
    link: "/services/software-applications",
    icon: "fas fa-laptop-code",
    img: service_img_1,
    key: "software-applications",
    type: "Product",
    cardIcon: "fas fa-laptop-code"
  },
  {
    id: 2,
    title: "Infrastructure & Development",
    description: "Custom software development and system integration services to build scalable and secure business applications.",
    link: "/services/infrastructure-development",
    icon: "fas fa-cogs",
    img: service_img_2,
    key: "infrastructure-development",
    type: "Service",
    cardIcon: "fas fa-server"
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description: "Scalable enterprise-grade solutions for customer relationship management, helpdesk services, and IT support.",
    link: "/services/enterprise-solutions",
    icon: "fas fa-building",
    img: service_img_3,
    key: "enterprise-solutions",
    type: "Solution",
    cardIcon: "fas fa-building"
  },
  {
    id: 4,
    title: "Governance & Compliance",
    description: "Comprehensive solutions for contract lifecycle management, legal case management, and audit management for compliance.",
    link: "/services/governance-compliance",
    icon: "fas fa-gavel",
    img: service_img_4,
    key: "governance-compliance",
    type: "Solution",
    cardIcon: "fas fa-gavel"
  },
  {
    id: 5,
    title: "Facilities & Asset Management",
    description: "Advanced facility management, asset tracking, automated visitor management, and meeting room management solutions.",
    link: "/services/facilities-asset-management",
    icon: "fas fa-building-user",
    img: service_img_5,
    key: "facilities-asset-management",
    type: "Solution",
    cardIcon: "fas fa-warehouse"
  },
  {
    id: 6,
    title: "Security & Operational Safety",
    description: "Comprehensive security solutions including AI-powered surveillance, access control systems, and incident management.",
    link: "/services/security-operational-safety",
    icon: "fas fa-shield-alt",
    img: service_img_6,
    key: "security-operational-safety",
    type: "Solution",
    cardIcon: "fas fa-shield-alt"
  },
  {
    id: 7,
    title: "ICT, Telecom & Analytics",
    description: "Advanced ICT and telecommunications solutions for data center management, unified communications, and VoIP systems.",
    link: "/services/ict-telecom-analytics",
    icon: "fas fa-network-wired",
    img: service_img_7,
    key: "ict-telecom-analytics",
    type: "Service",
    cardIcon: "fas fa-network-wired"
  },
  {
    id: 8,
    title: "Education Solutions",
    description: "Comprehensive learning management and examination management systems designed specifically for educational institutions.",
    link: "/services/education-solutions",
    icon: "fas fa-graduation-cap",
    img: service_img_8,
    key: "education-solutions",
    type: "Solution",
    cardIcon: "fas fa-graduation-cap"
  }
];


const service_content = {
    title: "Leading Engineering and ICT Solutions for a Smarter, Secure Future",
    btn_text: "Explore All Solutions",
    bg_img: "/assets/img/service/service-3-bg.png",
    service_title: "Corporate Governance Solutions",
    service_info: "Secure, Paperless Board Meetings and Executive Communications",
    service_key: "electronic-board-management"
}

const {title, btn_text, bg_img, service_title, service_info, service_key} = service_content


const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area pb-120 z-index">
               <div className="container">
                   <div className="row g-4" style={{ marginTop: '60px' }}>
                      {/* SERVICE CATEGORY CARDS - Updated to have icons on top with different icons per card */}
                      {service_categories.map((item, i) => {
                        // Split description into title and description parts
                        const descriptionParts = item.description.split(':');
                        const boldTitle = descriptionParts.length > 1 ? descriptionParts[0] : '';
                        const descriptionText = descriptionParts.length > 1 ? descriptionParts.slice(1).join(':') : item.description;
                        
                        return (
                          <div key={item.id} className="col-xl-4 col-md-6">
                            <div className="service-card">
                              {/* Content */}
                              <div className="service-content">
                                <div className="service-content-inner">
                                  <div className="service-icon-top">
                                    <div className="icon-placeholder">
                                      <i className={`${item.cardIcon}`} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                                    </div>
                                  </div>
                                  
                                  <h3 className="service-title">{item.title}</h3>
                                  
                                  <div className="service-details" style={{ marginBottom: '0' }}>
                                    <p className="service-description" style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: '1.6', marginBottom: '0' }}>{descriptionText}</p>
                                  </div>
                                  
                                  <div className="service-type" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                                    <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <span className="tp-btn-inner tp-btn-hover alt-color-black">
                                        <span>Learn More</span>
                                        <b></b>
                                      </span>
                                    </Link>
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
                display: flex;
                flex-direction: column;
                cursor: pointer;
              }
              
              .service-card::before {
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
              
              .service-card::after {
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
              
              .service-card:hover {
                transform: translateY(-8px) rotateX(2deg);
                box-shadow: 
                  0 20px 40px rgba(59, 130, 246, 0.15),
                  0 10px 20px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(59, 130, 246, 0.1);
                border-color: rgba(59, 130, 246, 0.3);
              }
              
              .service-card:hover::before {
                transform: scaleX(1);
              }
              
              .service-card:hover::after {
                width: 300px;
                height: 300px;
              }
              
              .service-content {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                text-align: center;
                padding: 0;
              }
              
              .service-content-inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                height: 100%;
                width: 100%;
              }
              
              .service-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 0.75rem;
                letter-spacing: -0.01em;
              }
              
              .service-type {
                margin-top: auto;
                width: 100%;
                margin-bottom: 0;
                padding-top: 1.5rem;
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
                width: 4rem;
                height: 4rem;
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                border-radius: 0.75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                z-index: 3;
              }
              
              .service-card:hover .icon-placeholder {
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
              
              @media (max-width: 768px) {
                .section-title h2 {
                  font-size: 28px;
                }
                
                .service-card {
                  padding: 1.5rem;
                }
              }
            `}</style>
        </>
    );
};

export default ServiceArea;