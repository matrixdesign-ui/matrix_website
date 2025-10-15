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
    description: "Comprehensive software solutions encompassing Legal Case Management, Contracts Lifecycle Management, Electronic Board Management,  Audit Management,Ccustomer Relationship Management, Helpdesk Systems, and various specialized applications.",
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
    description: "Custom software development and system integration services to build scalable, secure, and efficient business applications.",
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
    description: "Scalable enterprise-grade solutions for customer relationship management, helpdesk services, electronic board management, and IT support.",
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
    description: "Comprehensive solutions for Contract Lifecycle Management, Legal Case Management, Audit Management, and Social Media Monitoring to ensure your organization's compliance.",
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
    description: "Advanced Computer-Aided Facility Management, Asset Tracking, Automated Visitor Management, and Meeting Room Management.",
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
    description: "Comprehensive security solutions such as AI-Powered Surveillance, Access Control Systems, Incident Management, and Environmental Health and Safety systems.",
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
    description: "Advanced ICT and telecommunications solutions spanning Data Center Management, Unified Communications, VoIP systems, and AI-Powered analytics.",
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
    description: "Comprehensive Learning Management system,and Examination Management System designed specifically for educational institutions to create, administer, and evaluate exams.",
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
                   <div className="row">
                      <div className="col-xl-12">
                          <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                              <h3 className="tp-section-title tp-title-anim">{title}</h3>
                               <Link className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                                   data-wow-duration=".9s"
                                   data-wow-delay=".3s"
                                   href="/service">
                                   <span>{btn_text}</span>
                                   <b></b>
                               </Link>
                          </div>
                      </div>
                   </div>
                   <div className="row g-4">
                      {/* SERVICE CATEGORY CARDS - Updated to have icons on top with different icons per card */}
                      {service_categories.map((item, i) => {
                        // Split description into title and description parts
                        const descriptionParts = item.description.split(':');
                        const boldTitle = descriptionParts.length > 1 ? descriptionParts[0] : '';
                        const descriptionText = descriptionParts.length > 1 ? descriptionParts.slice(1).join(':') : item.description;
                        
                        return (
                          <div key={item.id} className="col-xl-4 col-md-6">
                            <div className="service-card">
                              {/* Background image container with gradient overlay */}
                              <div className="service-bg-container">
                                <Image 
                                  src={item.img} 
                                  alt={item.title} 
                                  className="service-bg-image"
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                                {/* Gradient overlay for better text visibility */}
                                <div className="service-bg-overlay"></div>
                              </div>
                              
                              {/* Content positioned on top of the background image */}
                              <div className="service-content">
                                <div className="service-content-inner">
                                  <div className="service-icon-top mb-25">
                                    <div className="icon-placeholder">
                                      <i className={`${item.cardIcon}`} style={{ fontSize: '48px', color: '#007bff' }}></i>
                                    </div>
                                  </div>
                                  
                                  <div className="service-header mb-25">
                                    <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <h3 className="service-name" style={{ fontWeight: 'bold', fontSize: '22px', color: '#fff', marginBottom: '15px', textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{item.title}</h3>
                                    </Link>
                                  </div>
                                  
                                  <div className="service-details mb-25">
                                    {boldTitle && (
                                      <h4 className="service-title" style={{ fontWeight: '600', fontSize: '18px', color: '#fff', marginBottom: '15px', textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                        {boldTitle}:
                                      </h4>
                                    )}
                                    <p className="service-description" style={{ fontSize: '14px', color: '#fff', lineHeight: '1.5', marginBottom: '0', textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{descriptionText}</p>
                                  </div>
                                  
                                  <div className="service-type">
                                    <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <span className="tp-btn-inner tp-btn-hover alt-color-white">
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
                background: white;
                border-radius: 15px;
                padding: 0;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                transition: all 0.3s ease;
                height: 400px;
                border: 1px solid #eee;
                position: relative;
                overflow: hidden;
              }
              
              .service-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
              }
              
              .service-bg-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
              }
              
              .service-bg-image {
                object-fit: cover;
                transition: transform 0.3s ease;
              }
              
              .service-bg-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
                z-index: 1;
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
                z-index: 2;
                padding: 30px;
                box-sizing: border-box;
              }
              
              .service-content-inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
              }
              
              .service-card:hover .service-bg-image {
                transform: scale(1.05);
              }
              
              .service-type {
                margin-top: auto;
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
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                width: 90px;
                height: 90px;
                margin: 0 auto;
                position: relative;
                z-index: 3;
                backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
              }
              
              @media (max-width: 768px) {
                .section-title h2 {
                  font-size: 28px;
                }
                
                .service-card {
                  height: 350px;
                }
                
                .service-content {
                  padding: 20px;
                }
              }
            `}</style>
        </>
    );
};

export default ServiceArea;