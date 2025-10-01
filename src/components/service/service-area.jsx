import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"

// Services category data for main services page
const service_categories = [
  {
    id: 1,
    title: "Software & Applications",
    description: "Comprehensive software solutions encompassing customer relationship management, helpdesk systems, electronic board management, and various specialized applications.",
    link: "/services/software-applications",
    icon: "fas fa-laptop-code",
    key: "software-applications"
  },
  {
    id: 2,
    title: "Infrastructure & Development",
    description: "Custom software development and system integration services to build scalable, secure, and efficient business applications.",
    link: "/services/infrastructure-development",
    icon: "fas fa-cogs",
    key: "infrastructure-development"
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description: "Scalable enterprise-grade solutions for customer relationship management, helpdesk services, electronic board management, and IT support.",
    link: "/services/enterprise-solutions",
    icon: "fas fa-building",
    key: "enterprise-solutions"
  },
  {
    id: 4,
    title: "Governance & Compliance",
    description: "Comprehensive solutions for contract management, legal services, audit processes, and social media monitoring to ensure compliance.",
    link: "/services/governance-compliance",
    icon: "fas fa-gavel",
    key: "governance-compliance"
  },
  {
    id: 5,
    title: "Facilities & Asset Management",
    description: "Advanced solutions for computer-aided facility management, asset tracking, automated visitor management, and meeting room coordination.",
    link: "/services/facilities-asset-management",
    icon: "fas fa-building-user",
    key: "facilities-asset-management"
  },
  {
    id: 6,
    title: "Security & Operational Safety",
    description: "Comprehensive security solutions including AI-powered surveillance, access control systems, incident management, and environmental health systems.",
    link: "/services/security-operational-safety",
    icon: "fas fa-shield-alt",
    key: "security-operational-safety"
  },
  {
    id: 7,
    title: "ICT, Telecom & Analytics",
    description: "Advanced ICT and telecommunications solutions with data center management, unified communications, VoIP systems, and AI-powered analytics.",
    link: "/services/ict-telecom-analytics",
    icon: "fas fa-network-wired",
    key: "ict-telecom-analytics"
  },
  {
    id: 8,
    title: "Education Solutions",
    description: "Comprehensive examination management software designed specifically for educational institutions to create, administer, and evaluate exams.",
    link: "/services/education-solutions",
    icon: "fas fa-graduation-cap",
    key: "education-solutions"
  }
];


const service_content = {
    title: "Leading Engineering and Tech Solutions for a Smarter, Secured Future",
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
                   <div className="row blog-grid-inner">
                      {/* MODERN SERVICE CATEGORY CARDS - Using Blog Grid Structure */}
                      {service_categories.map((item, i) => {
                        // Clean professional color scheme for service categories
                        const categoryColors = [
                          'linear-gradient(135deg, #007bff, #0056b3)', // Software & Applications
                          'linear-gradient(135deg, #28a745, #1e5e2a)', // Infrastructure
                          'linear-gradient(135deg, #fd7e14, #b8570c)', // Enterprise Solutions
                          'linear-gradient(135deg, #6f42c1, #4a2680)', // Governance & Compliance
                          'linear-gradient(135deg, #e83e8c, #a9265c)', // Facilities & Management
                          'linear-gradient(135deg, #20c997, #167f5c)', // Security & Safety
                          'linear-gradient(135deg, #ffc107, #b38600)', // ICT & Telecom
                          'linear-gradient(135deg, #17a2b8, #0f6f81)'  // Education
                        ];
                        const categoryColor = categoryColors[i % categoryColors.length];

                        return (
                          <div key={i} className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={`${0.3 + (i * 0.1)}s`}>
                            <div className="tp-blog-item" style={{ cursor: 'pointer' }}>
                                  {/* Service Icon/Thumb */}
                                  <div className="tp-blog-thumb fix" style={{
                                    background: categoryColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px',
                                    color: 'white'
                                  }}>
                                    <i className={`${item.icon}`} style={{
                                      fontSize: '48px',
                                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                    }}></i>
                                  </div>

                                  {/* Service Content */}
                                  <div className="tp-blog-content">
                                      {/* Meta Information */}
                                      <div className="tp-blog-meta d-flex align-items-center">
                                          <div className="tp-blog-category category-color-1">
                                              <span>Service</span>
                                          </div>
                                          <div className="tp-blog-date">
                                              <span>{String(i + 1).padStart(2, '0')}</span>
                                          </div>
                                      </div>

                                      {/* Service Title - Now Clickable */}
                                      <div className="tp-blog-title-box">
                                          <h3 className="tp-blog-title-sm">
                                              <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                  {item.title}
                                              </Link>
                                          </h3>
                                      </div>

                                      {/* Service Description */}
                                      <p style={{
                                        color: '#64748b',
                                        lineHeight: '1.6',
                                        marginBottom: '24px',
                                        fontSize: '0.95rem'
                                      }}>
                                        {item.description}
                                      </p>

                                      {/* Author/Action Info */}
                                      <div className="tp-blog-author-info-box d-flex align-items-center">
                                          <div className="tp-blog-avata" style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: categoryColor,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'
                                          }}>
                                            <Link href={item.link} style={{ color: 'white' }}>
                                              <i className="fas fa-arrow-right"></i>
                                            </Link>
                                          </div>
                                          <div className="tp-blog-author-info">
                                              <h5>
                                                <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                  Learn More
                                                </Link>
                                              </h5>
                                              <span>Explore Solutions</span>
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
            <style jsx>{`
                /* Service-specific hover effects with colored borders */
                .tp-blog-item:nth-child(1):hover {
                    border-color: rgba(0, 123, 255, 0.3);
                }
                .tp-blog-item:nth-child(2):hover {
                    border-color: rgba(40, 167, 69, 0.3);
                }
                .tp-blog-item:nth-child(3):hover {
                    border-color: rgba(253, 126, 20, 0.3);
                }
                .tp-blog-item:nth-child(4):hover {
                    border-color: rgba(111, 66, 193, 0.3);
                }
                .tp-blog-item:nth-child(5):hover {
                    border-color: rgba(232, 62, 140, 0.3);
                }
                .tp-blog-item:nth-child(6):hover {
                    border-color: rgba(32, 201, 151, 0.3);
                }
                .tp-blog-item:nth-child(7):hover {
                    border-color: rgba(255, 193, 7, 0.3);
                }
                .tp-blog-item:nth-child(8):hover {
                    border-color: rgba(23, 162, 184, 0.3);
                }
            `}</style>
        </>
    );
};

export default ServiceArea;
