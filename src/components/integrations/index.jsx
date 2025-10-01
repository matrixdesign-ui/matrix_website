import BreadcrumbFour from "@/src/common/breadcrumbs/breadcrumb-4";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';

const TechnicalPartners = () => {
  // State management
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const observerRefs = useRef([]);

  // Filter options focused on technology categories
  const filterOptions = [
    { key: 'all', label: 'All Partners', icon: 'fas fa-cogs' },
    { key: 'cloud', label: 'Cloud Services', icon: 'fas fa-cloud' },
    { key: 'enterprise', label: 'Enterprise', icon: 'fas fa-building' },
    { key: 'networking', label: 'Networking', icon: 'fas fa-network-wired' },
    { key: 'security', label: 'Security', icon: 'fas fa-shield-alt' },
    { key: 'analytics', label: 'Analytics', icon: 'fas fa-chart-line' }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Partner filtering logic - only for technical partners
  const filterTechnicalPartners = (partners, category = 'all', search = '') => {
    return partners.filter(partner => {
      const matchesSearch = search === '' || partner.name.toLowerCase().includes(search.toLowerCase()) || partner.partnership.toLowerCase().includes(search.toLowerCase());
      if (category === 'all') return matchesSearch;

      switch (category) {
        case 'cloud':
          return matchesSearch && (partner.category.toLowerCase().includes('cloud') || partner.partnership.toLowerCase().includes('cloud'));
        case 'enterprise':
          return matchesSearch && (partner.category.toLowerCase().includes('enterprise') || partner.category.toLowerCase().includes('erp'));
        case 'networking':
          return matchesSearch && (partner.category.toLowerCase().includes('networking') || partner.category.toLowerCase().includes('network'));
        case 'security':
          return matchesSearch && (partner.category.toLowerCase().includes('security') || partner.partnership.toLowerCase().includes('security'));
        case 'analytics':
          return matchesSearch && (partner.category.toLowerCase().includes('analytics') || partner.partnership.toLowerCase().includes('analytics'));
        default:
          return matchesSearch;
      }
    });
  };

  // Technical & Strategic Partners Data - Expanded
  const technicalPartners = [
    {
      name: "Microsoft Corporation",
      logo: "/assets/img/partners/microsoft-logo.png",
      category: "Cloud Services & Enterprise Software",
      partnership: "Cloud Solutions & AI Platform Integration",
      type: "Strategic Partner"
    },
    {
      name: "Cisco Systems",
      logo: "/assets/img/partners/cisco-logo.png",
      category: "Networking Infrastructure",
      partnership: "Network Infrastructure & Communications Solutions",
      type: "Technology Partner"
    },
    {
      name: "IBM",
      logo: "/assets/img/partners/ibm-logo.png",
      category: "Enterprise & Analytics",
      partnership: "Data Analytics & AI Consulting Services",
      type: "Strategic Partner"
    },
    {
      name: "Google Cloud",
      logo: "/assets/img/partners/google-cloud-logo.png",
      category: "Cloud Services",
      partnership: "Enterprise Cloud Infrastructure & Big Data Solutions",
      type: "Technology Partner"
    },
    {
      name: "Amazon Web Services (AWS)",
      logo: "/assets/img/partners/aws-logo.png",
      category: "Cloud Services",
      partnership: "Enterprise Cloud Solutions & Scalable Computing",
      type: "Technology Partner"
    },
    {
      name: "Dell Technologies",
      logo: "/assets/img/partners/dell-logo.png",
      category: "Enterprise Infrastructure",
      partnership: "Server & Storage Solutions for Data Centers",
      type: "Technology Partner"
    },
    {
      name: "VMware",
      logo: "/assets/img/partners/vmware-logo.png",
      category: "Virtualization & Cloud",
      partnership: "Virtual Infrastructure & Cloud Computing Platforms",
      type: "Technology Partner"
    },
    {
      name: "SAP SE",
      logo: "/assets/img/partners/sap-logo.png",
      category: "Enterprise Resource Planning",
      partnership: "Enterprise Resource Planning & Business Software Solutions",
      type: "Strategic Partner"
    },
    {
      name: "Oracle Corporation",
      logo: "/assets/img/partners/oracle-logo.png",
      category: "Database & Analytics",
      partnership: "Database Solutions & Analytics Platform",
      type: "Technology Partner"
    },
    {
      name: "Adobe Systems",
      logo: "/assets/img/partners/adobe-logo.png",
      category: "Creative & Digital Experience",
      partnership: "Digital Experience Platform & Document Management",
      type: "Technology Partner"
    },
    {
      name: "Salesforce",
      logo: "/assets/img/partners/salesforce-logo.png",
      category: "Customer Relationship Management",
      partnership: "Customer Relationship Management & Marketing Solutions",
      type: "Strategic Partner"
    },
    {
      name: "Huawei Technologies",
      logo: "/assets/img/partners/huawei-logo.png",
      category: "Telecommunications & Networking",
      partnership: "Network Infrastructure & 5G Communications",
      type: "Technology Partner"
    },
    {
      name: "HP Enterprise",
      logo: "/assets/img/partners/hp-logo.png",
      category: "Computing Solutions",
      partnership: "Computing & Printer Solutions for Enterprise",
      type: "Technology Partner"
    },
    {
      name: "Red Hat",
      logo: "/assets/img/partners/redhat-logo.png",
      category: "Open Source Enterprise",
      partnership: "Linux & OpenShift Platform Solutions",
      type: "Technology Partner"
    },
    {
      name: "Intel Corporation",
      logo: "/assets/img/partners/intel-logo.png",
      category: "Computing & IoT",
      partnership: "Computing Solutions & IoT Technologies",
      type: "Technology Partner"
    },
    {
      name: "Qualcomm",
      logo: "/assets/img/partners/qualcomm-logo.png",
      category: "Semiconductor & Connectivity",
      partnership: "Mobile Connectivity & IoT Solutions",
      type: "Technology Partner"
    },
    {
      name: "NVIDIA Corporation",
      logo: "/assets/img/partners/nvidia-logo.png",
      category: "AI & Graphics Computing",
      partnership: "AI Computing & Deep Learning Solutions",
      type: "Strategic Partner"
    },
    {
      name: "Siemens AG",
      logo: "/assets/img/partners/siemens-logo.png",
      category: "Industrial Automation",
      partnership: "Smart Infrastructure & IoT Solutions",
      type: "Technology Partner"
    },
    {
      name: "Ericsson",
      logo: "/assets/img/partners/ericsson-logo.png",
      category: "Telecommunications & 5G",
      partnership: "5G Network Infrastructure & Mobile Solutions",
      type: "Strategic Partner"
    },
    {
      name: "Lenovo",
      logo: "/assets/img/partners/lenovo-logo.png",
      category: "Enterprise Computing",
      partnership: "Enterprise Computing Solutions & Data Centers",
      type: "Technology Partner"
    }
  ];

  const filteredTechnicalPartners = filterTechnicalPartners(technicalPartners, activeFilter, searchTerm);

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFour />

            {/* TECHNICAL PARTNERS HERO */}
            <div className="simple-partners-hero pt-120 pb-120" style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-8">
                    <div className="hero-content">
                      <h5 className="tp-subtitle mb-20">
                        <i className="fas fa-cogs" style={{marginRight: '10px'}}></i>
                        Technical Partnerships
                      </h5>
                      <h1 className="hero-title mb-30">
                        Technology <span style={{color: '#60a5fa'}}>Innovation</span> Partners
                      </h1>
                      <p className="hero-description mb-40">
                        Strategic alliances with world-leading technology companies providing
                        cutting-edge solutions and platforms that power our services across Kenya and East Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-bg-elements">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="floating-shape tech-shape" style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}></div>
                ))}
              </div>
            </div>

            {/* TECHNICAL PARTNERS SECTION */}
            <div className="technical-partners-section pt-120 pb-120" style={{backgroundColor: '#ffffff'}}>
              <div className="container">
                <div className="row justify-content-center text-center mb-80">
                  <div className="col-xl-8">
                    <div className="section-title-wrapper">
                      <h5 className="tp-subtitle color-blue mb-20">
                        <i className="fas fa-cogs" style={{marginRight: '10px'}}></i>
                        Technology Partners
                      </h5>
                      <h2 className="tp-section-title mb-30">
                        Global Technology <span>Alliances</span>
                      </h2>
                      <p className="section-description">
                        Partnerships with industry-leading technology companies enabling us to deliver
                        innovative, scalable, and future-ready solutions to our clients across the region.
                      </p>
                    </div>
                  </div>
                </div>

                {/* INTERACTIVE CONTROLS */}
                <div className="interactions-bar mb-60" style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  {/* SEARCH BAR */}
                  <div className="search-section mb-4">
                    <div className="position-relative" style={{maxWidth: '400px'}}>
                      <div className="search-input-wrapper" style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#f8fafc',
                        border: '2px solid transparent',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                      }}>
                        <i className="fas fa-search" style={{
                          color: '#6b7280',
                          fontSize: '1rem',
                          marginRight: '12px'
                        }}></i>
                        <input
                          type="text"
                          placeholder="Search technology partners..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            width: '100%',
                            fontSize: '1rem',
                            color: '#374151',
                            fontWeight: '500'
                          }}
                        />
                        {searchTerm && (
                          <button
                            onClick={() => setSearchTerm('')}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              padding: '0',
                              marginLeft: '8px',
                              cursor: 'pointer',
                              color: '#6b7280'
                            }}
                          >
                            <i className="fas fa-times" style={{fontSize: '0.875rem'}}></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* FILTER TABS */}
                  <div className="filter-tabs">
                    <div className="filter-tabs-wrapper" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      gap: '8px',
                      padding: '12px 0'
                    }}>
                      {filterOptions.map(option => (
                        <button
                          key={option.key}
                          onClick={() => setActiveFilter(option.key)}
                          className={`filter-tab ${activeFilter === option.key ? 'active' : ''}`}
                          style={{
                            background: activeFilter === option.key ? 'linear-gradient(135deg, #2563eb, #1e40af)' : '#f8fafc',
                            color: activeFilter === option.key ? '#ffffff' : '#6b7280',
                            border: 'none',
                            padding: '12px 20px',
                            borderRadius: '25px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: activeFilter === option.key ? '0 4px 16px rgba(37,99,235,0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
                            textTransform: 'none',
                            letterSpacing: '0.025em'
                          }}
                        >
                          <i className={option.icon} style={{fontSize: '0.875rem'}}></i>
                          {option.label}
                          {(option.key !== 'all') && (
                            <span style={{
                              fontSize: '0.75rem',
                              background: activeFilter === option.key ? 'rgba(255,255,255,0.2)' : 'rgba(37,99,235,0.1)',
                              color: activeFilter === option.key ? '#ffffff' : '#2563eb',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontWeight: '700',
                              marginLeft: '4px'
                            }}>
                              {filteredTechnicalPartners.filter(p => {
                                if (option.key === 'cloud') return p.category.toLowerCase().includes('cloud');
                                if (option.key === 'enterprise') return p.category.toLowerCase().includes('enterprise') || p.category.toLowerCase().includes('erp');
                                if (option.key === 'networking') return p.category.toLowerCase().includes('networking') || p.category.toLowerCase().includes('telecom');
                                if (option.key === 'security') return p.category.toLowerCase().includes('security');
                                if (option.key === 'analytics') return p.category.toLowerCase().includes('analytics');
                                return false;
                              }).length}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TECHNICAL PARTNERS GRID */}
                <div className="partners-grid blog-grid-inner">
                  <div className="row">
                    {filteredTechnicalPartners.map((partner, i) => (
                      <div key={`tech-${i}`} className="col-xl-4 col-lg-6 col-md-6 mb-30" style={{animationDelay: `${i * 0.1}s`}}>
                        <div className="tp-blog-item">
                          <div className="tp-blog-thumb fix" style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '180px'
                          }}>
                            <div className="partner-logo-modern" style={{
                              width: '70px',
                              height: '70px',
                              borderRadius: '12px',
                              background: (() => {
                                switch(partner.category) {
                                  case 'Cloud Services': return 'linear-gradient(135deg, #10b981, #059669)';
                                  case 'Cloud Services & Enterprise Software': return 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
                                  case 'Networking Infrastructure': return 'linear-gradient(135deg, #f59e0b, #d97706)';
                                  case 'Enterprise & Analytics': return 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
                                  default: return 'linear-gradient(135deg, #2563eb, #1e40af)';
                                }
                              })(),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '24px',
                              fontWeight: 'bold',
                              letterSpacing: '1px',
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                              boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                              transition: 'all 0.3s ease'
                            }}>
                              {partner.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                            </div>
                          </div>
                          <div className="tp-blog-content">
                            <div className="tp-blog-meta d-flex align-items-center">
                              <div className="tp-blog-category category-color-1" style={{
                                background: partner.type === 'Strategic Partner'
                                  ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                                  : 'linear-gradient(135deg, #2563eb, #1e40af)',
                                color: 'white'
                              }}>
                                <span>{partner.type.split(' ')[0]}</span>
                              </div>
                              <div className="tp-blog-date">
                                <span>{partner.category.split(' ')[0]}</span>
                              </div>
                            </div>
                            <div className="tp-blog-title-box">
                              <h4 className="tp-blog-title-sm">
                                {partner.name}
                              </h4>
                            </div>
                            <p style={{
                              color: '#6b7280',
                              fontSize: '0.875rem',
                              lineHeight: '1.5',
                              marginBottom: '20px'
                            }}>
                              {partner.partnership}
                            </p>
                            <div className="tp-blog-author-info-box d-flex align-items-center">
                              <div className="tp-blog-avata" style={{
                                background: partner.type === 'Strategic Partner'
                                  ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                                  : 'linear-gradient(135deg, #2563eb, #1e40af)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <i className="fas fa-cogs" style={{
                                  color: 'white',
                                  fontSize: '14px'
                                }}></i>
                              </div>
                              <div className="tp-blog-author-info">
                                <h5>{partner.type.replace(' Partner', '')}</h5>
                                <span>Technology Partner</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredTechnicalPartners.length === 0 && (
                      <div className="col-12">
                        <div style={{textAlign: 'center', padding: '60px', background: 'white', borderRadius: '30px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}}>
                          <i className="fas fa-search" style={{fontSize: '3rem', color: '#cccccc', marginBottom: '20px'}}></i>
                          <h3>No partners found</h3>
                          <p>Try adjusting your search terms or filters</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>

      {/* TECHNICAL PARTNERS STYLING */}
      <style jsx>{`
        .color-blue {
          color: #2563eb;
        }

        /* CLEAN MODERN HERO */
        .simple-partners-hero {
          position: relative;
          overflow: hidden;
        }

        .hero-content h5 {
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
          opacity: 0.9;
        }

        .hero-content i {
          color: #60a5fa;
        }

        .hero-title {
          font-weight: 900;
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.6;
          opacity: 0.9;
          max-width: 600px;
        }

        .hero-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape.tech-shape {
          position: absolute;
          background: rgba(96, 165, 250, 0.1);
          border-radius: 50%;
          animation: techFloat 8s ease-in-out infinite;
        }

        .floating-shape.tech-shape:nth-child(1) { width: 100px; height: 100px; top: 10%; right: 8%; }
        .floating-shape.tech-shape:nth-child(2) { width: 80px; height: 80px; top: 50%; left: 10%; animation-delay: 2s; }
        .floating-shape.tech-shape:nth-child(3) { width: 120px; height: 120px; bottom: 15%; right: 15%; animation-delay: 4s; }

        @keyframes techFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg) scale(1.1); opacity: 0.15; }
        }

        /* CLEAN PARTNERS GRID */
        .partners-grid-section, .client-partners-section, .technical-partners-section {
          background: #f8fafc;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .partner-logo-modern {
          transition: all 0.3s ease;
        }

        .tp-blog-item:hover .partner-logo-modern {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .category-color-1 {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .category-color-2 {
          background: linear-gradient(135deg, #2563eb, #1e40af);
          color: white;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-bg-elements .floating-shape {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default TechnicalPartners;
