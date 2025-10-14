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
                                          <div className="service-icon-top mb-25">
                                            <div className="icon-placeholder">
                                              <i className={`${serviceIcon}`} style={{ fontSize: '48px', color: '#007bff' }}></i>
                                            </div>
                                          </div>
                                          
                                          <div className="service-header mb-25">
                                            <h3 className="service-name" style={{ fontWeight: 'bold', fontSize: '22px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>{serviceTitle}</h3>
                                          </div>
                                          
                                          <div className="service-details mb-25">
                                            <h4 className="service-title" style={{ fontWeight: '600', fontSize: '18px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>
                                              Key Benefit:
                                            </h4>
                                            <p className="service-description" style={{ fontSize: '14px', color: '#495057', lineHeight: '1.5', marginBottom: '0', textAlign: 'center' }}>{key_benefit}</p>
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
                                                      <div className="service-icon-top mb-25">
                                                        <div className="icon-placeholder">
                                                          <i className={`${featureIcon}`} style={{ fontSize: '48px', color: '#007bff' }}></i>
                                                        </div>
                                                      </div>
            
                                                      <div className="service-details mb-25">
                                                        {boldTitle && (
                                                            <h4 className="service-title" style={{ fontWeight: '880', fontSize: '18px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>
                                                                {boldTitle}:
                                                            </h4>
                                                        )}
                                                        <p className="service-description" style={{ fontSize: '14px', color: '#495057', lineHeight: '1.5', marginBottom: '0', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: descriptionText }}></p>
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
                                                          <div className="service-icon-top mb-25">
                                                            <div className="icon-placeholder">
                                                              <i className={`${subServiceIcon}`} style={{ fontSize: '48px', color: '#007bff' }}></i>
                                                            </div>
                                                          </div>
                                                          
                                                          <div className="service-header mb-25">
                                                            <h3 className="service-name" style={{ fontWeight: 'bold', fontSize: '22px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>{subService.title}</h3>
                                                          </div>
                                                          
                                                          <div className="service-details mb-25">
                                                            {boldDescTitle && (
                                                                <h4 className="service-title" style={{ fontWeight: '600', fontSize: '18px', color: '#222', marginBottom: '15px', textAlign: 'center' }}>
                                                                    {boldDescTitle}:
                                                                </h4>
                                                            )}
                                                            <p className="service-description" style={{ fontSize: '14px', color: '#495057', lineHeight: '1.5', marginBottom: '0', textAlign: 'center' }}>{descText}</p>
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

export default ServiceDetailsArea;