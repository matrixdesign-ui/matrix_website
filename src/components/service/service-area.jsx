import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceDetailsData from '../../data/service-details-data';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"

// Services category data for main services page
const service_categories = [
  {
    id: 1,
    title: "Software & Applications",
    description: "Comprehensive software solutions encompassing Legal Case Management, Contracts Lifecycle Management, Electronic Board Management,  Audit Management,Ccustomer Relationship Management, Helpdesk Systems, and various specialized applications.",
    link: "/services/software-applications",
    icon: "fas fa-laptop-code",
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
                              {/* Icon on top */}
                              <div className="service-icon-top mb-25">
                                <div className="icon-placeholder">
                                  <i className={`${item.cardIcon}`} style={{ fontSize: '48px', color: '#007bff' }}></i>
                                </div>
                              </div>
                              
                              <div className="service-header mb-25">
                                <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <h3 className="service-name" style={{ fontWeight: 'bold', fontSize: '22px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>{item.title}</h3>
                                </Link>
                              </div>
                              
                              <div className="service-details mb-25">
                                {boldTitle && (
                                  <h4 className="service-title" style={{ fontWeight: '600', fontSize: '18px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>
                                    {boldTitle}:
                                  </h4>
                                )}
                                <p className="service-description" style={{ fontSize: '14px', color: '#495057', lineHeight: '1.5', marginBottom: '0', textAlign: 'center' }}>{descriptionText}</p>
                              </div>
                              
                              <div className="service-type">
                                <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
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