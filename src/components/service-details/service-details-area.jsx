import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Image from 'next/image';
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";
import serviceDetailsData from '../../data/service-details-data';

const ServiceDetailsArea = ({ service }) => {
    const serviceData = serviceDetailsData[service];

    const overview_title = "Service Overview";
    const overview_des = serviceData?.overview_des || "Default service overview description.";
    const key_benefit = serviceData?.key_benefit || "";
    const overview_list = serviceData?.overview_list || [];
    const challange_titel = "The Challenge";
    const challange_des = serviceData?.challange_des || "Default challenge description.";

    // Get service title from service data
    const serviceTitle = serviceData?.title || "Service";

    // Determine relevant icon based on service title
    const getServiceIcon = (title) => {
        if (title.includes("Software") || title.includes("Application")) {
            return "fas fa-laptop-code";
        } else if (title.includes("Infrastructure") || title.includes("Development")) {
            return "fas fa-server";
        } else if (title.includes("Enterprise")) {
            return "fas fa-building";
        } else if (title.includes("Governance") || title.includes("Compliance")) {
            return "fas fa-gavel";
        } else if (title.includes("Facilities") || title.includes("Asset")) {
            return "fas fa-warehouse";
        } else if (title.includes("Security") || title.includes("Safety")) {
            return "fas fa-shield-alt";
        } else if (title.includes("ICT") || title.includes("Telecom") || title.includes("Analytics")) {
            return "fas fa-network-wired";
        } else if (title.includes("Education")) {
            return "fas fa-graduation-cap";
        } else {
            return "fas fa-cogs";
        }
    };

    const serviceIcon = getServiceIcon(serviceTitle);

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sv-details-wrapper">
                                <div className="sv-details-thumb mb-45">
                                </div>
                                <div className="sv-details-title-box mb-55">
                                    <h4 className="sv-details-title">{overview_title}</h4>
                                    
                                    {/* Key Benefit Highlight - Updated to have icons on top */}
                                    {key_benefit && (
                                        <div className="key-benefit-highlight service-card">
                                          {/* Icon on top */}
                                          <div className="service-icon-top">
                                            <div className="icon-placeholder">
                                              <i className={`${serviceIcon}`} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                                            </div>
                                          </div>
                                          
                                          <h3 className="service-title">{serviceTitle}</h3>
                                          
                                          <div className="service-details">
                                            <p className="service-description">{key_benefit}</p>
                                          </div>
                                          
                                          <div className="service-type">
                                            <span className="type-badge">Primary Advantage</span>
                                          </div>
                                        </div>
                                    )}
                                    
                                    <p>{overview_des}</p>
                                </div>

                                {/* SERVICE OFFERINGS - Updated to have icons on top */}
                                <div className="service-features-cards mb-50">
                                    <h4 className="sv-details-text-title pb-30">What We Offer</h4>
                                    <div className="row g-4">
                                        {overview_list.map((item, i) => {
                                            // Split item into title and description parts
                                            const itemParts = item.split(':');
                                            const boldTitle = itemParts.length > 1 ? itemParts[0] : '';
                                            const descriptionText = itemParts.length > 1 ? itemParts.slice(1).join(':') : item;
                                            
                                            // Determine different icons for each card
                                            const featureIcons = [
                                              "fas fa-laptop-code",
                                              "fas fa-server",
                                              "fas fa-building",
                                              "fas fa-gavel",
                                              "fas fa-warehouse",
                                              "fas fa-shield-alt",
                                              "fas fa-network-wired",
                                              "fas fa-graduation-cap",
                                              "fas fa-cogs",
                                              "fas fa-chart-line"
                                            ];
                                            const featureIcon = featureIcons[i % featureIcons.length];
                                            
                                            return (
                                                <div key={i} className="col-xl-4 col-md-6">
                                                    <div className="service-card">
                                                      {/* Icon on top */}
                                                      <div className="service-icon-top">
                                                        <div className="icon-placeholder">
                                                          <i className={`${featureIcon}`} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                                                        </div>
                                                      </div>
            
                                                      <h3 className="service-title">{boldTitle || 'Feature'}</h3>
                                                      
                                                      <div className="service-details">
                                                        <p className="service-description" dangerouslySetInnerHTML={{ __html: descriptionText }}></p>
                                                      </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="sv-details-text-2">
                                    <h4 className="sv-details-text-title">{challange_titel}</h4>
                                    <p>{challange_des}</p>
                                </div>

                                {/* RELATED SERVICES - Updated to have icons on top */}
                                {serviceData?.sub_services && serviceData.sub_services.length > 0 && (
                                    <div className="sv-details-sub-services mb-50">
                                        <h4 className="sv-details-text-title mb-30">Related Offerings</h4>
                                        <div className="row g-4">
                                            {serviceData.sub_services.map((subService, i) => {
                                                // Split description into title and description parts
                                                const descParts = subService.description.split(':');
                                                const boldDescTitle = descParts.length > 1 ? descParts[0] : '';
                                                const descText = descParts.length > 1 ? descParts.slice(1).join(':') : subService.description;
                                                
                                                // Determine different icons for each card
                                                const subServiceIcons = [
                                                  "fas fa-cogs",
                                                  "fas fa-tools",
                                                  "fas fa-wrench",
                                                  "fas fa-sliders-h",
                                                  "fas fa-cog",
                                                  "fas fa-gear"
                                                ];
                                                const subServiceIcon = subServiceIcons[i % subServiceIcons.length];
                                                
                                                return (
                                                    <div key={i} className="col-xl-4 col-md-6">
                                                        <div className="service-card">
                                                          {/* Icon on top */}
                                                          <div className="service-icon-top">
                                                            <div className="icon-placeholder">
                                                              <i className={`${subServiceIcon}`} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                                                            </div>
                                                          </div>
                                                          
                                                          <h3 className="service-title">{subService.title}</h3>
                                                          
                                                          <div className="service-details">
                                                            <p className="service-description">{descText}</p>
                                                            <div className="features-list">
                                                                {subService.features.slice(0, 3).map((feature, j) => {
                                                                    // Split feature into title and description parts
                                                                    const featureParts = feature.split(':');
                                                                    const boldFeatureTitle = featureParts.length > 1 ? featureParts[0] : '';
                                                                    const featureText = featureParts.length > 1 ? featureParts.slice(1).join(':') : feature;
                                                                    
                                                                    return (
                                                                        <div key={j} className="feature-item" style={{ marginBottom: '12px' }}>
                                                                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                                                <i className="fas fa-check" style={{ color: '#007bff', marginRight: '8px', marginTop: '4px', fontSize: '12px' }}></i>
                                                                                <div>
                                                                                    {boldFeatureTitle && (
                                                                                        <span style={{ fontWeight: '600', fontSize: '13px', display: 'block', color: '#222', marginBottom: '4px' }}>
                                                                                            {boldFeatureTitle}:
                                                                                        </span>
                                                                                    )}
                                                                                    <span style={{ fontSize: '13px', color: '#495057' }}>{featureText}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="tp-faq-area pt-50">
                                    <div className="container p-0">
                                        <div className="row g-0">
                                            <div className="col-xl-12">
                                                <h4 className="sv-details-title">Any Questions find here.</h4>
                                                <AnswerQuestion style={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                
                .service-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.01em;
                }
                
                .service-description {
                    font-size: 0.9375rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 0;
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

export default ServiceDetailsArea;