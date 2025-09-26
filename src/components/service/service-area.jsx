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
    link: "/Software%20%26%20Applications",
    icon: "fas fa-laptop-code"
  },
  {
    id: 2,
    title: "Infrastructure & Development",
    description: "Custom software development and system integration services to build scalable, secure, and efficient business applications.",
    link: "/Infrastructure%20%26%20Development",
    icon: "fas fa-cogs"
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description: "Scalable enterprise-grade solutions for customer relationship management, helpdesk services, electronic board management, and IT support.",
    link: "/Enterprise%20Solutions",
    icon: "fas fa-building"
  },
  {
    id: 4,
    title: "Governance & Compliance",
    description: "Comprehensive solutions for contract management, legal services, audit processes, and social media monitoring to ensure compliance.",
    link: "/Governance%20%26%20Compliance",
    icon: "fas fa-gavel"
  },
  {
    id: 5,
    title: "Facilities & Asset Management",
    description: "Advanced solutions for computer-aided facility management, asset tracking, automated visitor management, and meeting room coordination.",
    link: "/Facilities%20%26%20Asset%20Management",
    icon: "fas fa-building-user"
  },
  {
    id: 6,
    title: "Security & Operational Safety",
    description: "Comprehensive security solutions including AI-powered surveillance, access control systems, incident management, and environmental health systems.",
    link: "/Security%20%26%20Operational%20Safety",
    icon: "fas fa-shield-alt"
  },
  {
    id: 7,
    title: "ICT, Telecom & Analytics",
    description: "Advanced ICT and telecommunications solutions with data center management, unified communications, VoIP systems, and AI-powered analytics.",
    link: "/ICT%2C%20Telecom%20%26%20Analytics",
    icon: "fas fa-network-wired"
  },
  {
    id: 8,
    title: "Education Solutions",
    description: "Comprehensive examination management software designed specifically for educational institutions to create, administer, and evaluate exams.",
    link: "/Education%20Solutions",
    icon: "fas fa-graduation-cap"
  }
];


const service_content = {
    title: <>Leading Engineering and Tech Solutions <br /> for a Smarter, Secured Future.</>,
    btn_text: <>Explore All Solutions</>,
    bg_img: "/assets/img/service/service-3-bg.png",
    service_title: "Corporate Governance Solutions",
    service_info: <>Secure, Paperless Board Meetings <br /> and Executive Communications.</>,
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
                   <div className="row">

                      {/* MODERN SERVICE CATEGORY CARDS - Matching Project Design */}
                      {service_categories.map((item, i) => {
                        // Clean professional color scheme for service categories
                        const categoryColors = [
                          '#007bff', // Software & Applications
                          '#28a745', // Infrastructure
                          '#fd7e14', // Enterprise Solutions
                          '#6f42c1', // Governance & Compliance
                          '#e83e8c', // Facilities & Management
                          '#20c997', // Security & Safety
                          '#ffc107', // ICT & Telecom
                          '#17a2b8'  // Education
                        ];
                        const categoryColor = categoryColors[i % categoryColors.length];

                        return (
                          <div key={i} className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={`${0.3 + (i * 0.1)}s`}>
                            <div className="service-card-modern">
                                <div className="service-card-content">
                                    <div className="service-card-meta">
                                        <div className="service-card-icon-wrapper">
                                            <i className={`${item.icon} service-category-icon`}></i>
                                        </div>
                                    </div>

                                    <h3 className="service-card-title">
                                       <Link href={item.link}>
                                          {item.title}
                                       </Link>
                                    </h3>

                                    <p className="service-card-description">{item.description}</p>

                                    <div className="service-card-footer">
                                        <Link
                                           href={item.link}
                                           className="service-card-link"
                                        >
                                            Learn More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
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
                /* Modern Service Card Styles - Matching Project Design */
                .service-card-modern {
                    background: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    height: 100%;
                    position: relative;
                }

                .service-card-modern:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 64px rgba(0, 0, 0, 0.12);
                    border-color: rgba(0, 123, 255, 0.2);
                }

                .service-card-content {
                    padding: 32px 24px;
                    text-align: center;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .service-card-meta {
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                }

                .service-card-icon-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #007bff, #6610f2);
                    border-radius: 50%;
                    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.25);
                    transition: all 0.3s ease;
                }

                .service-card-modern:hover .service-card-icon-wrapper {
                    transform: scale(1.1);
                    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.35);
                }

                .service-category-icon {
                    font-size: 28px;
                    color: white;
                    animation: service-icon-pulse 2s ease-in-out infinite alternate;
                }

                @keyframes service-icon-pulse {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.1); }
                }

                .service-card-title {
                    margin-bottom: 16px;
                    line-height: 1.3;
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 60px;
                }

                .service-card-title a {
                    color: #212529;
                    text-decoration: none;
                    font-size: 1.25rem;
                    font-weight: 700;
                    transition: color 0.3s ease;
                    text-align: center;
                }

                .service-card-title a:hover {
                    color: #007bff;
                }

                .service-card-description {
                    color: #6c757d;
                    font-size: 0.875rem;
                    line-height: 1.5;
                    margin-bottom: 24px;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    flex-grow: 1;
                }

                .service-card-footer {
                    margin-top: auto;
                    padding-top: 16px;
                }

                .service-card-link {
                    display: inline-flex;
                    align-items: center;
                    color: #007bff;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                    background: rgba(0, 123, 255, 0.1);
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid rgba(0, 123, 255, 0.2);
                }

                .service-card-link:hover {
                    color: white;
                    background: #007bff;
                    border-color: #007bff;
                    transform: translateX(4px);
                }

                .service-card-link i {
                    margin-left: 8px;
                    transition: transform 0.3s ease;
                }

                .service-card-link:hover i {
                    transform: translateX(4px);
                }

                /* Service-specific color variations */
                .service-card-modern:nth-child(1) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #007bff, #0056b3);
                }
                .service-card-modern:nth-child(2) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #28a745, #1e5e2a);
                }
                .service-card-modern:nth-child(3) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #fd7e14, #b8570c);
                }
                .service-card-modern:nth-child(4) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #6f42c1, #4a2680);
                }
                .service-card-modern:nth-child(5) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #e83e8c, #a9265c);
                }
                .service-card-modern:nth-child(6) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #20c997, #167f5c);
                }
                .service-card-modern:nth-child(7) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #ffc107, #b38600);
                }
                .service-card-modern:nth-child(8) .service-card-icon-wrapper {
                    background: linear-gradient(135deg, #17a2b8, #0f6f81);
                }

                /* Service card hover effects with colored accents */
                .service-card-modern:nth-child(1):hover {
                    border-color: rgba(0, 123, 255, 0.3);
                }
                .service-card-modern:nth-child(2):hover {
                    border-color: rgba(40, 167, 69, 0.3);
                }
                .service-card-modern:nth-child(3):hover {
                    border-color: rgba(253, 126, 20, 0.3);
                }
                .service-card-modern:nth-child(4):hover {
                    border-color: rgba(111, 66, 193, 0.3);
                }
                .service-card-modern:nth-child(5):hover {
                    border-color: rgba(232, 62, 140, 0.3);
                }
                .service-card-modern:nth-child(6):hover {
                    border-color: rgba(32, 201, 151, 0.3);
                }
                .service-card-modern:nth-child(7):hover {
                    border-color: rgba(255, 193, 7, 0.3);
                }
                .service-card-modern:nth-child(8):hover {
                    border-color: rgba(23, 162, 184, 0.3);
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .service-card-content {
                        padding: 24px 16px;
                    }

                    .service-card-icon-wrapper {
                        width: 60px;
                        height: 60px;
                    }

                    .service-category-icon {
                        font-size: 24px;
                    }

                    .service-card-title a {
                        font-size: 1.1rem;
                    }

                    .service-card-modern {
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 576px) {
                    .service-card-title {
                        min-height: 50px;
                    }

                    .service-card-icon-wrapper {
                        width: 55px;
                        height: 55px;
                    }

                    .service-category-icon {
                        font-size: 20px;
                    }
                }
            `}</style>
        </>
    );
};

export default ServiceArea;
