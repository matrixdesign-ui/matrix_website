import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Image from 'next/image';
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";
import serviceDetailsData from '../../data/service-details-data';

const ServiceDetailsArea = ({ service }) => {
    const serviceData = serviceDetailsData[service];

    const overview_title = "Service Overview";
    const overview_des = serviceData?.overview_des || "Default service overview description.";
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
                                    <p>{overview_des}</p>
                                </div>

                                {/* ATTRACTIVE FEATURES CARDS - Replacing Bullet List */}
                                <div className="service-features-cards mb-50">
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
                                                    <div className="service-feature-card-modern">
                                                        <div className="service-feature-card-content">
                                                            <div className="service-feature-card-icon-wrapper"
                                                                 style={{background: gradient}}>
                                                                <i className={`${iconClass} service-feature-icon`}></i>
                                                            </div>

                                                            <div className="service-feature-card-text">
                                                                <p className="service-feature-description">{item}</p>
                                                            </div>

                                                            <div className="service-feature-card-count">
                                                                <span>{String(i + 1).padStart(2, '0')}</span>
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

                                {/* SUB-SERVICES SECTION */}
                                {serviceData?.sub_services && serviceData.sub_services.length > 0 && (
                                    <div className="sv-details-sub-services mb-50">
                                        <h4 className="sv-details-text-title mb-30">Service Components</h4>
                                        <div className="row">
                                            {serviceData.sub_services.map((subService, i) => {
                                                // Array of colored icons for sub-services
                                                const icons = [
                                                    'fas fa-cogs text-primary',
                                                    'fas fa-users text-info',
                                                    'fas fa-chart-bar text-warning',
                                                    'fas fa-shield-alt text-danger',
                                                    'fas fa-cloud text-success',
                                                    'fas fa-tools text-secondary'
                                                ];
                                                const iconClass = icons[i % icons.length];

                                                return (
                                                    <div key={i} className="col-lg-4 col-md-6 mb-30">
                                                        <div className="sv-details-sub-service-card" style={{cursor: 'pointer'}}>
                                                            <div className="card h-100 border-0 shadow-sm">
                                                                <div className="card-body text-center">
                                                                    <div className="mb-3">
                                                                        <i className={`${iconClass} fa-2x`}></i>
                                                                    </div>
                                                                    <h6 className="card-title font-weight-bold mb-3">{subService.title}</h6>
                                                                    <p className="card-text text-muted small mb-3">{subService.description}</p>
                                                                    <div className="features-list">
                                                                        {subService.features.slice(0, 2).map((feature, j) => (
                                                                            <small key={j} className="d-block text-muted mb-1">
                                                                                <i className="fas fa-check text-success mr-1"></i>{feature}
                                                                            </small>
                                                                        ))}
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
                /* MODERN SERVICE FEATURE CARDS - Replacing Bullet Lists */
                .service-feature-card-modern {
                    background: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    height: 100%;
                    position: relative;
                }

                .service-feature-card-modern:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 64px rgba(0, 0, 0, 0.12);
                    border-color: rgba(0, 123, 255, 0.2);
                }

                .service-feature-card-content {
                    padding: 32px 24px;
                    text-align: center;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }

                .service-feature-card-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.25);
                    transition: all 0.3s ease;
                }

                .service-feature-card-modern:hover .service-feature-card-icon-wrapper {
                    transform: scale(1.1);
                    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.35);
                }

                .service-feature-icon {
                    font-size: 28px;
                    color: white;
                    animation: service-feature-pulse 2s ease-in-out infinite alternate;
                }

                @keyframes service-feature-pulse {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.1); }
                }

                .service-feature-card-text {
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 80px;
                }

                .service-feature-description {
                    color: #212529;
                    font-size: 0.95rem;
                    line-height: 1.5;
                    margin: 0;
                    font-weight: 500;
                }

                .service-feature-card-count {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(0, 123, 255, 0.1);
                    color: #007bff;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 0.875rem;
                    backdrop-filter: blur(10px);
                }

                /* RESPONSIVE DESIGN */
                @media (max-width: 768px) {
                    .service-feature-card-content {
                        padding: 24px 16px;
                    }

                    .service-feature-card-icon-wrapper {
                        width: 60px;
                        height: 60px;
                        margin-bottom: 16px;
                    }

                    .service-feature-icon {
                        font-size: 24px;
                    }

                    .service-feature-description {
                        font-size: 0.9rem;
                    }

                    .service-feature-card-modern {
                        margin-bottom: 20px;
                    }
                }

                @media (max-width: 576px) {
                    .service-feature-card-content {
                        padding: 20px;
                    }

                    .service-feature-card-icon-wrapper {
                        width: 55px;
                        height: 55px;
                    }

                    .service-feature-icon {
                        font-size: 20px;
                    }

                    .service-feature-card-count {
                        width: 35px;
                        height: 35px;
                        font-size: 0.75rem;
                        top: 12px;
                        right: 12px;
                    }
                }

                /* CARD NUMBERING HOVER EFFECTS */
                .service-feature-card-count {
                    transition: all 0.3s ease;
                }

                .service-feature-card-modern:hover .service-feature-card-count {
                    background: rgba(0, 123, 255, 0.2);
                    transform: scale(1.1);
                }
            `}</style>
        </>
    );
};

export default ServiceDetailsArea;
