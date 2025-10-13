import BreadcrumbFour from "@/src/common/breadcrumbs/breadcrumb-4";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React, { useState } from "react";

const Clients = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = [
    { key: 'all', label: 'All Clients', icon: 'fas fa-users', color: '#2563eb' },
    { key: 'government', label: 'Government', icon: 'fas fa-landmark', color: '#2563eb' },
    { key: 'finance', label: 'Financial', icon: 'fas fa-university', color: '#dc2626' },
    { key: 'technology', label: 'Technology', icon: 'fas fa-code', color: '#2563eb' },
    { key: 'healthcare', label: 'Healthcare', icon: 'fas fa-heartbeat', color: '#dc2626' },
    { key: 'education', label: 'Education', icon: 'fas fa-graduation-cap', color: '#2563eb' }
  ];

  const filterPartners = (partners, category = 'all', search = '') => {
    return partners.filter(partner => {
      const matchesSearch = search === '' || partner.name.toLowerCase().includes(search.toLowerCase()) || partner.partnership.toLowerCase().includes(search.toLowerCase());
      if (category === 'all') return matchesSearch;

      switch (category) {
        case 'government':
          return matchesSearch && (partner.partnership.toLowerCase().includes('government') || partner.partnership.toLowerCase().includes('county') || partner.partnership.toLowerCase().includes('authority') || partner.partnership.toLowerCase().includes('ministry') || partner.partnership.toLowerCase().includes('sports'));
        case 'finance':
          return matchesSearch && (partner.partnership.toLowerCase().includes('bank') || partner.partnership.toLowerCase().includes('finance') || partner.partnership.toLowerCase().includes('commerce') || partner.partnership.toLowerCase().includes('money') || partner.partnership.toLowerCase().includes('equity'));
        case 'technology':
          return matchesSearch && (partner.partnership.toLowerCase().includes('ict') || partner.partnership.toLowerCase().includes('communication') || partner.partnership.toLowerCase().includes('internet') || partner.partnership.toLowerCase().includes('connectivity'));
        case 'healthcare':
          return matchesSearch && (partner.partnership.toLowerCase().includes('hospital') || partner.partnership.toLowerCase().includes('health') || partner.partnership.toLowerCase().includes('medical') || partner.partnership.toLowerCase().includes('referral') || partner.partnership.toLowerCase().includes('teaching'));
        case 'education':
          return matchesSearch && (partner.partnership.toLowerCase().includes('university') || partner.partnership.toLowerCase().includes('education') || partner.partnership.toLowerCase().includes('campus') || partner.partnership.toLowerCase().includes('digital learning'));
        default:
          return matchesSearch;
      }
    });
  };

  const clientPartners = [
    {
      name: "Kenya Revenue Authority (KRA)",
      logo: "/assets/img/clients/kra-logo.png",
      partnership: "Integrated Legal Management System ILMS",
      since: "2017",
      category: "Government"
    },
    {
      name: "Communications Authority of Kenya (CA)",
      logo: "/assets/img/clients/kra-logo.png",
      partnership: "Integrated Legal Case Management System ILCMS",
      since: "2024",
      category: "Government"
    },
    {
      name: "Kenya Bureau of Standards (KEBS)",
      logo: "/assets/img/clients/kra-logo.png",
      partnership: "Legal Information Management System LEMIS",
      since: "2023",
      category: "Government"
    },
    {
      name: "Rural Electrification Authority (REA)",
      logo: "/assets/img/clients/rea-logo.png",
      partnership: "Emergency Communication Systems & Rural Connectivity",
      since: "2020",
      category: "Government"
    },
    {
      name: "International Livestock Research Institute (ILRI)",
      logo: "/assets/img/clients/ilri-logo.png",
      partnership: "Biometric Access Control System, CCTV Surveillance System, Structured Cabling Systems, Fire Detection and Suppression System, Air Conditioning Systems.",
      since: "2019",
      category: "Agriculture"
    },
    {
      name: "Kenya School of Law",
      logo: "/assets/img/clients/safaricom-logo.png",
      partnership: "CCTV Security Surveillance System ",
      since: "2017",
      category: "Technology"
    },
    {
      name: "Nairobi Hospital",
      logo: "/assets/img/clients/nairobi-hospital-logo.png",
      partnership: "Electronic Board Management & Healthcare Information Systems",
      since: "2023",
      category: "Healthcare"
    },
    {
      name: "Moi Teaching & Referral Hospital",
      logo: "/assets/img/clients/mtrh-logo.png",
      partnership: "Enterprise IT Helpdesk System & Patient Management",
      since: "2024",
      category: "Healthcare"
    },
    {
      name: "Moi International Sports Centre (MISC)- kasarani",
      logo: "/assets/img/clients/misc.png",
      partnership: "WiFi Systems Installation of Rehabilation & Upgrading of Moi  International Sports Centre Kasarani",
      since: "2024",
      category: "Government"
    },
    {
      name: "Machakos University",
      logo: "/assets/img/clients/machakos-uni-logo.png",
      partnership: "Biometric Controlled Gate Security Systems",
      since: "2019",
      category: "Education"
    },
    {
      name: "Ministry of Sports, Culture & Heritage",
      logo: "/assets/img/clients/ministry-sports-logo.png",
      partnership: "Internet Connectivity Infrastructure for National Sports Programs",
      since: "2024",
      category: "Government"
    },
    {
      name: "The Nairobi Hospital",
      logo: "/assets/img/clients/tnh-logo.png",
      partnership: "Electronic Meeting and Governance System",
      since: "2022",
      category: "Healthcare"
    },
    {
      name: "Kenya Revenue Authority",
      logo: "/assets/img/clients/kra-logo.png",
      partnership: "Integrated Board Management System",
      since: "2017",
      category: "Government"
    },
    {
      name: "Higher Education Loans Board (HELB)",
      logo: "/assets/img/clients/helb-logo.png",
      partnership: "E-Board Management System",
      since: "2018",
      category: "Government"
    },
    {
      name: "Kenya Universities and Colleges Central Placement Service (KUCCPS)",
      logo: "/assets/img/clients/kuccps-logo.png",
      partnership: "Board Management System",
      since: "2018",
      category: "Government"
    },
    {
      name: "Kenya Accountants and Secretaries National Examinations Board (KASNEB)",
      logo: "/assets/img/clients/kasneb-logo.png",
      partnership: "Electronic Board Management System",
      since: "2018",
      category: "Government"
    },
    {
      name: "National Construction Authority (NCA)",
      logo: "/assets/img/clients/nca-logo.png",
      partnership: "Cloud-Based E-Board Management System",
      since: "2019",
      category: "Government"
    },
    {
      name: "CIC Insurance Group",
      logo: "/assets/img/clients/cic-logo.png",
      partnership: "Access Control, CCTV and Traffic Arm Barriers.",
      since: "2019",
      category: "Insurance"
    },
    {
      name: "CIMMYT (International Maize & Wheat Improvement Center)",
      logo: "/assets/img/clients/cimmyt-logo.png",
      partnership: "CCTV Surveillance System",
      since: "2020",
      category: "Agriculture"
    },
    {
      name: "Communications Authority of Kenya",
      logo: "/assets/img/clients/tuskys-logo.png",
      partnership: "Installation of Airconditioning units, UPS Systems, CCTV Surveillance Systems at Regional Offices and Equipment Stations and Linking to HQ for remote monitoring",
      since: "2017",
      category: "Government"
    },
    {
      name: "Kenya Medical Training College (KMTC)",
      logo: "/assets/img/clients/kmtc-logo.png",
      partnership: "Fingerprint Access Control System at Registries, Payroll Section and Examination Secretariat Offices",
      since: "2021",
      category: "Healthcare"
    },
    {
      name: "Kenya Medical Research Institute (KEMRI) ",
      logo: "/assets/img/clients/kemri-logo.png",
      partnership: "Access Control Systems",
      since: "2021",
      category: "Healthcare"
    },
    {
      name: "Centum Investments Company PLC",
      logo: "/assets/img/clients/centum-logo.png",
      partnership: "Integrated Gate Security System with Bollards, Automatic Barriers and Biometric-based access control for visitors and staff at Centum’s International House.",
      since: "2019",
      category: "Healthcare"
    },
    {
      name: "KUEHNE + NAGEL Limited",
      logo: "/assets/img/clients/kuehne-logo.png",
      partnership: "Automatic Gate Access Control System with Pedestrian Turnstiles, Security Bollards & Traffic Barriers",
      since: "2018",
      category: "Transportation"
    },
   {
      name: "Moi International Sports Centre (MISC)- kasarani",
      logo: "/assets/img/clients/misc.png",
      partnership: "Lifts Installation Works at MISC Kasarani",
      since: "2024",
      category: "Education"
    },
     {
      name: "CSI Energy Kenya",
      logo: "/assets/img/clients/csi-logo.png",
      partnership: "ICT Infrastructure and Security Systems ",
      since: "2025",
      category: "Manufacturing"
    },
    {
      name: "Rural Electrification and Renewable Energy Corporation (REREC)",
      logo: "/assets/img/clients/rerec-logo.png",
      partnership: "Cameras and Public Address System to REREC",
      since: "2025",
      category: "Government"
    },
    {
      name: "SONY Sugar",
      logo: "/assets/img/clients/sony-logo.png",
      partnership: "E-Board Management System",
      since: "2018",
      category: "Government"
    },
    {
      name: "LOMARO",
      logo: "/assets/img/clients/lomaro-logo.png",
      partnership: "Collaboration and Projects Management  System",
      since: "2023",
      category: "Energy"
    },
    /*{
      name: "Karen Hospital",
      logo: "/assets/img/clients/karen-hospital-logo.png",
      partnership: "Healthcare Information Systems & Patient Management",
      since: "2023",
      category: "Healthcare"
    },
    {
      name: "Strathmore University",
      logo: "/assets/img/clients/strathmore-logo.png",
      partnership: "Digital Learning Platform & Campus Management",
      since: "2022",
      category: "Education"
    },
   {
      name: "Bank of Kigali (Rwanda)",
      logo: "/assets/img/clients/bk-logo.png",
      partnership: "Regional Banking Integration & Cross-Border Solutions",
      since: "2023",
      category: "Finance"
    },
    {
      name: "Uganda Revenue Authority",
      logo: "/assets/img/clients/ura-logo.png",
      partnership: "East African Taxation & Revenue Management",
      since: "2024",
      category: "Government"
    },
    {
      name: "Kenya Wildlife Service",
      logo: "/assets/img/clients/kws-logo.png",
      partnership: "Wildlife Management & Park Security Systems",
      since: "2023",
      category: "Government"
    },
    {
      name: "Naivas Supermarkets Ltd",
      logo: "/assets/img/clients/naivas-logo.png",
      partnership: "Retail Automation & Inventory Management Solutions",
      since: "2024",
      category: "Retail"
    },
    {
      name: "Koinange Technical College",
      logo: "/assets/img/clients/koinange-logo.png",
      partnership: "Technical Education Platform & Student Tracking",
      since: "2023",
      category: "Education"
    },
    {
      name: "Kenya Airways Cargo",
      logo: "/assets/img/clients/kq-cargo-logo.png",
      partnership: "Air Cargo Management & Logistics Solutions",
      since: "2022",
      category: "Transportation"
    },
    {
      name: "Bamburi Cement Limited",
      logo: "/assets/img/clients/bamburi-logo.png",
      partnership: "Manufacturing ERP & Production Control Systems",
      since: "2023",
      category: "Manufacturing"
    }*/
  ];

  const filteredClientPartners = filterPartners(clientPartners, activeFilter, searchTerm);

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFour />

            {/* PREMIUM CLIENTS HERO */}
            <section className="clients-hero-section" style={{
              background: `linear-gradient(135deg, ${'#2563eb'} 0%, #667eea 50%, ${'#2563eb'} 100%)`,
              color: 'white',
              padding: '80px 0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h1 className="hero-title" style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        marginBottom: '20px',
                        lineHeight: '1.2'
                      }}>
                        Our Trusted <span style={{color: '#2563eb'}}>Clients</span>
                      </h1>

                      <p className="hero-subtitle" style={{
                        fontSize: '1.3rem',
                        opacity: '0.9',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                      }}>
                        Partnering with leading organizations across Kenya and East Africa
                        to deliver transformative technology solutions that drive success.
                      </p>

                      <div className="hero-stats" style={{display: 'flex', gap: '30px'}}>
                        <div className="stat-item">
                          <h3 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#fbbf24',
                            marginBottom: '8px'
                          }}>
                            33+
                          </h3>
                          <p style={{margin: '0', opacity: '0.9'}}>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                          <h3 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#fbbf24',
                            marginBottom: '8px'
                          }}>
                            7+
                          </h3>
                          <p style={{margin: '0', opacity: '0.9'}}>Years Experience</p>
                        </div>
                        <div className="stat-item">
                          <h3 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#fbbf24',
                            marginBottom: '8px'
                          }}>
                            6
                          </h3>
                          <p style={{margin: '0', opacity: '0.9'}}>Sectors Served</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="hero-visual">
                      <div className="brand-logos-showcase" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                      }}>
                        {clientPartners.slice(0, 4).map((client, i) => (
                          <div key={i} className="brand-circle" style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255,255,255,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: `fadeInUp 0.8s ease-out ${i * 0.2}s forwards`,
                            opacity: '0'
                          }}>
                            <div style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '12px',
                              background: ['linear-gradient(135deg, #6366f1, #8b5cf6)',
                                         'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                                         'linear-gradient(135deg, #f59e0b, #d97706)',
                                         'linear-gradient(135deg, #10b981, #059669)'][i],
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '24px',
                              fontWeight: 'bold',
                              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}>
                              {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating shapes */}
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </section>

            {/* CLIENTS EXPLORER SECTION */}
            <section className="clients-explorer-section" style={{padding: '80px 0'}}>
              <div className="container">
                {/* SEARCH AND FILTER CONTROLS */}
                <div className="controls-container" style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '40px',
                  marginBottom: '60px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '20px',
                        color: '#1e293b'
                      }}>
                        Search Clients
                      </h4>
                      <div className="search-bar">
                        <input
                          type="text"
                          placeholder="Type organization name..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '15px 20px',
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'border-color 0.3s ease'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '20px',
                        color: '#1e293b'
                      }}>
                        Filter by Sector ({filteredClientPartners.length} clients)
                      </h4>
                      <div className="filter-buttons" style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                        {filterOptions.map(option => (
                          <button
                            key={option.key}
                            onClick={() => setActiveFilter(option.key)}
                            style={{
                              padding: '12px 20px',
                              borderRadius: '25px',
                              border: 'none',
                              background: activeFilter === option.key ? `linear-gradient(135deg, ${option.color}, ${option.color}dd)` : '#f8fafc',
                              color: activeFilter === option.key ? 'white' : '#64748b',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              boxShadow: activeFilter === option.key ? '0 4px 16px rgba(0,0,0,0.2)' : 'none',
                              transform: activeFilter === option.key ? 'translateY(-2px)' : 'translateY(0)'
                            }}
                          >
                            <i className={option.icon}></i>
                            {option.label}
                            {option.key !== 'all' && (
                              <span style={{
                                background: activeFilter === option.key ? 'rgba(255,255,255,0.2)' : 'rgba(100,116,139,0.1)',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                fontSize: '0.8rem'
                              }}>
                                {option.key === 'government' ? filteredClientPartners.filter(p => p.category === 'Government' || p.partnership.toLowerCase().includes('ministry')).length :
                                 option.key === 'finance' ? filteredClientPartners.filter(p => p.category === 'Finance' || p.partnership.toLowerCase().includes('bank')).length :
                                 option.key === 'technology' ? filteredClientPartners.filter(p => p.category === 'Technology' || p.partnership.toLowerCase().includes('ict')).length :
                                 option.key === 'healthcare' ? filteredClientPartners.filter(p => p.category === 'Healthcare' || p.partnership.toLowerCase().includes('hospital')).length :
                                 option.key === 'education' ? filteredClientPartners.filter(p => p.category === 'Education' || p.partnership.toLowerCase().includes('university')).length : 0}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CLIENTS GRID */}
                <div className="clients-grid blog-grid-inner">
                  <div className="row">
                    {filteredClientPartners.length > 0 ? (
                      filteredClientPartners.map((client, i) => (
                        <div key={`client-${i}`} className="col-xl-4 col-lg-6 col-md-6 mb-30" style={{
                          animation: `fadeInUp 0.6s ease-out ${i * 0.07}s both`
                        }}>
                          <div className="tp-blog-item">
                            {/* Client Logo/Thumb */}
                            <div className="tp-blog-thumb fix" style={{
                              background: `linear-gradient(135deg, ${['#6366f1', '#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#f97316', '#84cc16', '#36b9cc', '#fdba74', '#89f6e6'][i % 12]}, ${['#8b5cf6', '#1d4ed8', '#d97706', '#059669', '#dc2626', '#6366f1', '#0891b2', '#ea580c', '#65a30d', '#2c98b5', '#fb923c', '#5fdfdf'][i % 12]})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minHeight: '200px',
                              color: 'white',
                              fontSize: '48px',
                              fontWeight: 'bold',
                              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                            }}>
                              {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                            </div>

                            {/* Client Content */}
                            <div className="tp-blog-content">
                              {/* Meta Information */}
                              <div className="tp-blog-meta d-flex align-items-center">
                                <div className="tp-blog-category category-color-1">
                                  <span>{client.category}</span>
                                </div>
                                <div className="tp-blog-date">
                                  <span>Since {client.since}</span>
                                </div>
                              </div>

                              {/* Client Title */}
                              <div className="tp-blog-title-box">
                                <h3 className="tp-blog-title-sm">
                                  {client.name}
                                </h3>
                              </div>

                              {/* Partnership Description */}
                              <p style={{
                                color: '#64748b',
                                lineHeight: '1.6',
                                marginBottom: '24px',
                                fontSize: '1rem'
                              }}>
                                {client.partnership}
                              </p>

                              {/* Author/Partnership Info */}
                              <div className="tp-blog-author-info-box d-flex align-items-center">
                                <div className="tp-blog-avata" style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: '#059669',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white'
                                }}>
                                  <i className="fas fa-handshake"></i>
                                </div>
                                <div className="tp-blog-author-info">
                                  <h5>Trusted Partner</h5>
                                  <span>{new Date().getFullYear() - parseInt(client.since)} years partnership</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-12">
                        <div style={{
                          textAlign: 'center',
                          padding: '80px',
                          background: 'white',
                          borderRadius: '30px',
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
                        }}>
                          <i className="fas fa-search" style={{fontSize: '4rem', color: '#cbd5e1', marginBottom: '20px'}}></i>
                          <h3 style={{color: '#64748b', marginBottom: '10px'}}>No clients found</h3>
                          <p style={{color: '#94a3b8'}}>Try adjusting your search or filter criteria</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>

      <style jsx>{`
        .floating-shapes .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .floating-shapes .shape-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          right: 10%;
        }

        .floating-shapes .shape-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 20%;
          animation-delay: -2s;
        }

        .floating-shapes .shape-3 {
          width: 60px;
          height: 60px;
          bottom: 20%;
          left: 15%;
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }

          .brand-logos-showcase {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .brand-circle {
            width: 80px !important;
            height: 80px !important;
          }
        }

        @media (max-width: 576px) {
          .controls-container {
            padding: 20px !important;
          }

          .filter-buttons {
            flex-direction: column !important;
          }

          .filter-buttons button {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default Clients;
