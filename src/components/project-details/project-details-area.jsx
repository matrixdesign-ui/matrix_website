import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import project_img from "../../../public/assets/img/project/project-img-1.jpg";
import project_details_data from '../../data/project-details-data';

const ProjectDetailsArea = ({ project }) => {
    const projectData = project_details_data[project];

    if (!projectData) {
        return (
            <div className="sv-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Project not found</h2>
                            <Link href="/project" className="tp-btn-blue-lg tp-btn-hover">
                                <span>Back to Projects</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sv-details-wrapper">
                                <div className="sv-details-title-box mb-55">
                                    <h4 className="sv-details-title">{projectData.title}</h4>
                                    <p>{projectData.overview_des}</p>
                                    <div className="project-meta mt-4">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6 mb-3">
                                                <div className="project-meta-item">
                                                    <h6 className="meta-title">Client</h6>
                                                    <p className="meta-value">{projectData.client_name}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 mb-3">
                                                <div className="project-meta-item">
                                                    <h6 className="meta-title">Status</h6>
                                                    <span className={`status-badge ${projectData.status.toLowerCase()}`}>
                                                        {projectData.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 mb-3">
                                                <div className="project-meta-item">
                                                    <h6 className="meta-title">Duration</h6>
                                                    <p className="meta-value">{projectData.duration}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 mb-3">
                                                <div className="project-meta-item">
                                                    <h6 className="meta-title">Team Size</h6>
                                                    <p className="meta-value">{projectData.team_size}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TECHNOLOGIES USED */}
                                {projectData.technologies && (
                                    <div className="sv-details-text mb-35">
                                        <h4 className="sv-details-text-title pb-10">Technologies Used</h4>
                                        <div className="technologies-list">
                                            {projectData.technologies.split(',').map((tech, i) => (
                                                <span key={i} className="tech-badge">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* PROJECT OVERVIEW */}
                                <div className="sv-details-text mb-35">
                                    <h4 className="sv-details-text-title pb-10">Project Overview</h4>
                                    <ul>
                                        {projectData.overview_list?.map((item, i) => (
                                            <li key={i}>
                                                <i className="fal fa-check"></i>
                                                <p> {item} </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* THE CHALLENGE */}
                                <div className="sv-details-text-2 mb-50">
                                    <h4 className="sv-details-text-title">The Challenge</h4>
                                    <p>{projectData.challange_des}</p>
                                </div>

                                {/* PROJECT COMPONENTS SUB-SERVICES */}
                                {projectData.sub_services && projectData.sub_services.length > 0 && (
                                    <div className="sv-details-sub-services mb-50">
                                        <h4 className="sv-details-text-title mb-30">Project Components</h4>
                                        <div className="row">
                                            {projectData.sub_services.map((subService, i) => {
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

            {/* Custom styles for project details */}
            <style jsx>{`
                .technologies-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 20px;
                }

                .tech-badge {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    display: inline-block;
                    margin: 4px;
                }

                .project-meta .meta-item {
                    padding: 15px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    text-align: center;
                }

                .meta-title {
                    font-size: 0.9rem;
                    color: #666;
                    margin-bottom: 5px;
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .meta-value {
                    font-size: 1.1rem;
                    color: #333;
                    margin: 0;
                    font-weight: 500;
                }

                .status-badge {
                    padding: 4px 12px;
                    border-radius: 16px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .status-badge.completed {
                    background: #4caf50;
                    color: white;
                }

                .status-badge.ongoing {
                    background: #ff9800;
                    color: white;
                }

                .technologies-list .tech-badge:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                    transition: all 0.3s ease;
                }
            `}</style>
        </>
    );
};

export default ProjectDetailsArea;
