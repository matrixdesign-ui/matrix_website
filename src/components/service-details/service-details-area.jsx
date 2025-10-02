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
                                    
                                    {/* Key Benefit Highlight */}
                                    {key_benefit && (
                                        <div className="key-benefit-highlight" style={{
                                            background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                            color: 'white',
                                            padding: '16px 24px',
                                            borderRadius: '12px',
                                            margin: '20px 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.2)'
                                        }}>
                                            <div style={{
                                                background: 'rgba(255,255,255,0.2)',
                                                borderRadius: '50%',
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '16px'
                                            }}>
                                                <i className="fas fa-star" style={{ fontSize: '18px' }}></i>
                                            </div>
                                            <div>
                                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>
                                                    Key Benefit
                                                </strong>
                                                <span style={{ fontSize: '0.95rem', opacity: '0.95' }}>
                                                    {key_benefit}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <p>{overview_des}</p>
                                </div>

                                {/* ATTRACTIVE FEATURES CARDS - Using Blog Grid Structure */}
                                <div className="service-features-cards mb-50 blog-grid-inner">
                                    <h4 className="sv-details-text-title pb-30">Going Beyond the Usual</h4>
                                    <div className="row">
                                        {overview_list.map((item, i) => {
                                            // Array of gradient colors for feature cards
                                            const gradients = [
                                                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                                'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
                                            ];
                                            const gradient = gradients[i % gradients.length];

                                            // Array of icons for features
                                            const icons = [
                                                'fas fa-star',
                                                'fas fa-cogs',
                                                'fas fa-users',
                                                'fas fa-shield-alt',
                                                'fas fa-rocket',
                                                'fas fa-chart-line'
                                            ];
                                            const iconClass = icons[i % icons.length];

                                            return (
                                                <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
                                                     data-wow-duration=".9s" data-wow-delay={`${0.2 + (i * 0.1)}s`}>
                                                    <div className="tp-blog-item">
                                                        {/* Feature Icon/Thumb */}
                                                        <div className="tp-blog-thumb fix" style={{
                                                          background: gradient,
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          justifyContent: 'center',
                                                          minHeight: '140px',
                                                          position: 'relative'
                                                        }}>
                                                          <i className={`${iconClass}`} style={{
                                                            fontSize: '36px',
                                                            color: 'white',
                                                            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                                          }}></i>
                                                          
                                                          {/* Feature Number */}
                                                          <div style={{
                                                            position: 'absolute',
                                                            top: '16px',
                                                            right: '16px',
                                                            background: 'rgba(255,255,255,0.2)',
                                                            backdropFilter: 'blur(10px)',
                                                            color: 'white',
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                          }}>
                                                            {String(i + 1).padStart(2, '0')}
                                                          </div>
                                                        </div>

                                                        {/* Feature Content */}
                                                        <div className="tp-blog-content">
                                                            {/* Meta Information */}
                                                            <div className="tp-blog-meta d-flex align-items-center">
                                                                <div className="tp-blog-category category-color-1">
                                                                    <span>Feature</span>
                                                                </div>
                                                                <div className="tp-blog-date">
                                                                    <span>Key Benefit</span>
                                                                </div>
                                                            </div>

                                                            {/* Feature Description */}
                                                            <div className="tp-blog-title-box">
                                                                <p className="tp-blog-title-sm" style={{
                                                                  color: '#212529',
                                                                  fontSize: '0.95rem',
                                                                  lineHeight: '1.5',
                                                                  margin: '0',
                                                                  fontWeight: '500'
                                                                }}>
                                                                  {item}
                                                                </p>
                                                            </div>

                                                            {/* Author/Action Info */}
                                                            <div className="tp-blog-author-info-box d-flex align-items-center">
                                                                <div className="tp-blog-avata" style={{
                                                                  width: '36px',
                                                                  height: '36px',
                                                                  borderRadius: '50%',
                                                                  background: gradient,
                                                                  display: 'flex',
                                                                  alignItems: 'center',
                                                                  justifyContent: 'center',
                                                                  color: 'white'
                                                                }}>
                                                                  <i className="fas fa-check" style={{fontSize: '12px'}}></i>
                                                                </div>
                                                                <div className="tp-blog-author-info">
                                                                    <h5>Enhanced</h5>
                                                                    <span>Service Quality</span>
                                                                </div>
                                                            </div>
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

                                {/* SUB-SERVICES SECTION - Using Blog Grid Structure */}
                                {serviceData?.sub_services && serviceData.sub_services.length > 0 && (
                                    <div className="sv-details-sub-services mb-50 blog-grid-inner">
                                        <h4 className="sv-details-text-title mb-30">Service Components</h4>
                                        <div className="row">
                                            {serviceData.sub_services.map((subService, i) => {
                                                // Array of gradient colors for sub-services
                                                const gradients = [
                                                    'linear-gradient(135deg, #007bff, #0056b3)',
                                                    'linear-gradient(135deg, #28a745, #1e5e2a)',
                                                    'linear-gradient(135deg, #fd7e14, #b8570c)',
                                                    'linear-gradient(135deg, #6f42c1, #4a2680)',
                                                    'linear-gradient(135deg, #20c997, #167f5c)',
                                                    'linear-gradient(135deg, #dc3545, #a71e2a)'
                                                ];
                                                const gradient = gradients[i % gradients.length];

                                                // Array of icons for sub-services
                                                const icons = [
                                                    'fas fa-cogs',
                                                    'fas fa-users',
                                                    'fas fa-chart-bar',
                                                    'fas fa-shield-alt',
                                                    'fas fa-cloud',
                                                    'fas fa-tools'
                                                ];
                                                const iconClass = icons[i % icons.length];

                                                return (
                                                    <div key={i} className="col-lg-4 col-md-6 mb-30">
                                                        <div className="tp-blog-item">
                                                            {/* Sub-service Icon/Thumb */}
                                                            <div className="tp-blog-thumb fix" style={{
                                                              background: gradient,
                                                              display: 'flex',
                                                              alignItems: 'center',
                                                              justifyContent: 'center',
                                                              minHeight: '140px'
                                                            }}>
                                                              <i className={`${iconClass}`} style={{
                                                                fontSize: '32px',
                                                                color: 'white',
                                                                textShadow: '0 2px 6px rgba(0,0,0,0.3)'
                                                              }}></i>
                                                            </div>

                                                            {/* Sub-service Content */}
                                                            <div className="tp-blog-content">
                                                                {/* Meta Information */}
                                                                <div className="tp-blog-meta d-flex align-items-center">
                                                                    <div className="tp-blog-category category-color-1">
                                                                        <span>Component</span>
                                                                    </div>
                                                                    <div className="tp-blog-date">
                                                                        <span>{String(i + 1).padStart(2, '0')}</span>
                                                                    </div>
                                                                </div>

                                                                {/* Sub-service Title */}
                                                                <div className="tp-blog-title-box">
                                                                    <h4 className="tp-blog-title-sm">
                                                                        {subService.title}
                                                                    </h4>
                                                                </div>

                                                                {/* Sub-service Description */}
                                                                <p style={{
                                                                  color: '#64748b',
                                                                  fontSize: '0.875rem',
                                                                  lineHeight: '1.5',
                                                                  marginBottom: '20px'
                                                                }}>
                                                                  {subService.description}
                                                                </p>

                                                                {/* Features List */}
                                                                <div className="features-list mb-3">
                                                                    {subService.features.slice(0, 2).map((feature, j) => (
                                                                        <small key={j} style={{
                                                                          display: 'block',
                                                                          color: '#6c757d',
                                                                          marginBottom: '4px',
                                                                          fontSize: '0.8rem'
                                                                        }}>
                                                                            <i className="fas fa-check" style={{color: '#28a745', marginRight: '6px'}}></i>
                                                                            {feature}
                                                                        </small>
                                                                    ))}
                                                                </div>

                                                                {/* Author/Action Info */}
                                                                <div className="tp-blog-author-info-box d-flex align-items-center">
                                                                    <div className="tp-blog-avata" style={{
                                                                      width: '36px',
                                                                      height: '36px',
                                                                      borderRadius: '50%',
                                                                      background: gradient,
                                                                      display: 'flex',
                                                                      alignItems: 'center',
                                                                      justifyContent: 'center',
                                                                      color: 'white'
                                                                    }}>
                                                                      <i className="fas fa-plus" style={{fontSize: '12px'}}></i>
                                                                    </div>
                                                                    <div className="tp-blog-author-info">
                                                                        <h5>Service Module</h5>
                                                                        <span>Available Features</span>
                                                                    </div>
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

            <style jsx>{`
                /* Service details custom enhancements */
                .features-list {
                    text-align: left;
                }
                
                .tp-blog-item .features-list {
                    margin-bottom: 20px;
                }
                
                /* Custom hover effects for service features */
                .service-features-cards .tp-blog-item:hover {
                    transform: translateY(-6px);
                }
                
                .sv-details-sub-services .tp-blog-item:hover {
                    transform: translateY(-4px);
                }
            `}</style>
        </>
    );
};

export default ServiceDetailsArea;
