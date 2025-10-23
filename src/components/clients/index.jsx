import React from 'react';
import HeaderSix from "@/src/layout/headers/header-6";
import FooterFive from "@/src/layout/footers/footer-5";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import CtaArea from "../contact/cta-area";

const ClientsPage = () => {
  // Client data - Complete list of all clients with placeholder logos
  const clients = [
    {
      id: 1,
      name: "Kenya Revenue Authority (KRA)",
      sector: "Government",
      since: "2017",
      projects: [
        "Integrated Legal Management System ILMS",
        "Integrated Board Management System"
      ],
      partnership: "8 years",
      logo: "/assets/img/brand/kra.webp"
    },
    {
      id: 2,
      name: "Communications Authority of Kenya (CA)",
      sector: "Government",
      since: "2024",
      projects: [
        "Integrated Legal Case Management System ILCMS",
        "Installation of Airconditioning units, UPS Systems, CCTV Surveillance Systems at Regional Offices"
      ],
      partnership: "1 year",
      logo: "/assets/img/brand/ca.jpg"
    },
    {
      id: 3,
      name: "Kenya Bureau of Standards (KEBS)",
      sector: "Government",
      since: "2023",
      projects: [
        "Legal Information Management System LEMIS"
      ],
      partnership: "2 years",
      logo: "/assets/img/brand/kebs.png"
    },
    {
      id: 4,
      name: "Rural Electrification Authority (REA)",
      sector: "Government",
      since: "2020",
      projects: [
        "Emergency Communication Systems & Rural Connectivity"
      ],
      partnership: "5 years",
      logo: "/assets/img/brand/rerec.jpg"
    },
    {
      id: 5,
      name: "International Livestock Research Institute (ILRI)",
      sector: "Agriculture",
      since: "2019",
      projects: [
        "Biometric Access Control System",
        "CCTV Surveillance System",
        "Structured Cabling Systems",
        "Fire Detection and Suppression System"
      ],
      partnership: "6 years",
      logo: "/assets/img/brand/ilri.png"
    },
    {
      id: 6,
      name: "Kenya School of Law",
      sector: "Education",
      since: "2017",
      projects: [
        "CCTV Security Surveillance System"
      ],
      partnership: "8 years",
      logo: "/assets/img/brand/ksl.png"
    },
    {
      id: 7,
      name: "Nairobi Hospital",
      sector: "Healthcare",
      since: "2023",
      projects: [
        "Electronic Board Management & Healthcare Information Systems"
      ],
      partnership: "2 years",
      logo: "/assets/img/brand/nh.png"
    },
    {
      id: 8,
      name: "Moi Teaching & Referral Hospital",
      sector: "Healthcare",
      since: "2024",
      projects: [
        "Enterprise IT Helpdesk System & Patient Management"
      ],
      partnership: "1 year",
      logo: "/assets/img/brand/mtrh.png"
    },
    {
      id: 9,
      name: "Moi International Sports Centre (MISC)- kasarani",
      sector: "Government",
      since: "2024",
      projects: [
        "WiFi Systems Installation of Rehabilation & Upgrading of Moi International Sports Centre Kasarani",
        "Lifts Installation Works at MISC Kasarani"
      ],
      partnership: "1 year",
      logo: "/assets/img/brand/sk.png"
    },
    {
      id: 10,
      name: "Machakos University",
      sector: "Education",
      since: "2019",
      projects: [
        "Biometric Controlled Gate Security Systems"
      ],
      partnership: "6 years",
      logo: "/assets/img/brand/mu.png"
    },
    {
      id: 11,
      name: "Ministry of Sports, Culture & Heritage",
      sector: "Government",
      since: "2024",
      projects: [
        "Internet Connectivity Infrastructure for National Sports Programs"
      ],
      partnership: "1 year",
      logo: "/assets/img/brand/moyasa.jpg"
    },
    {
      id: 12,
      name: "The Nairobi Hospital",
      sector: "Healthcare",
      since: "2022",
      projects: [
        "Electronic Meeting and Governance System"
      ],
      partnership: "3 years",
      logo: "/assets/img/brand/nh.png"
    },
    {
      id: 13,
      name: "Higher Education Loans Board (HELB)",
      sector: "Government",
      since: "2018",
      projects: [
        "E-Board Management System"
      ],
      partnership: "3 years",
      logo: "/assets/img/brand/helb.png"
    },
    {
      id: 14,
      name: "Kenya Universities and Colleges Central Placement Service (KUCCPS)",
      sector: "Government",
      since: "2018",
      projects: [
        "Board Management System"
      ],
      partnership: "3 years",
      logo: "/assets/img/brand/kuc.png"
    },
    {
      id: 15,
      name: "Kenya Accountants and Secretaries National Examinations Board (KASNEB)",
      sector: "Government",
      since: "2018",
      projects: [
        "Electronic Board Management System"
      ],
      partnership: "2 years",
      logo: "/assets/img/brand/kasneb.png"
    },
    {
      id: 16,
      name: "National Construction Authority (NCA)",
      sector: "Government",
      since: "2019",
      projects: [
        "Cloud-Based E-Board Management System"
      ],
      partnership: "5 years",
      logo: "/assets/img/brand/nca.png"
    },
    {
      id: 17,
      name: "CIC Insurance Group",
      sector: "Insurance",
      since: "2019",
      projects: [
        "Access Control, CCTV and Traffic Arm Barriers"
      ],
      partnership: "6 years",
      logo: "/assets/img/brand/cic.png"
    },
    {
      id: 18,
      name: "CIMMYT (International Maize & Wheat Improvement Center)",
      sector: "Agriculture",
      since: "2020",
      projects: [
        "CCTV Surveillance System"
      ],
      partnership: "5 years",
      logo: "/assets/img/brand/cim.png"
    },
    {
      id: 19,
      name: "Kenya Medical Training College (KMTC)",
      sector: "Healthcare",
      since: "2021",
      projects: [
        "Fingerprint Access Control System at Registries, Payroll Section and Examination Secretariat Offices"
      ],
      partnership: "4 years",
      logo: "/assets/img/brand/kmtc.png"
    },
    {
      id: 20,
      name: "Kenya Medical Research Institute (KEMRI)",
      sector: "Healthcare",
      since: "2021",
      projects: [
        "Access Control Systems"
      ],
      partnership: "4 years",
      logo: "/assets/img/brand/kemri.png"
    },
    {
      id: 21,
      name: "Centum Investments Company PLC",
      sector: "Healthcare",
      since: "2019",
      projects: [
        "Integrated Gate Security System with Bollards, Automatic Barriers and Biometric-based access control for visitors and staff at Centum's International House"
      ],
      partnership: "6 years",
      logo: "/assets/img/brand/centum.png"
    },
    {
      id: 22,
      name: "KUEHNE + NAGEL Limited",
      sector: "Transportation",
      since: "2018",
      projects: [
        "Automatic Gate Access Control System with Pedestrian Turnstiles, Security Bollards & Traffic Barriers"
      ],
      partnership: "7 years",
      logo: "/assets/img/brand/kue.png"
    },
    {
      id: 23,
      name: "CSI Energy Kenya",
      sector: "Manufacturing",
      since: "2025",
      projects: [
        "ICT Infrastructure and Security Systems"
      ],
      partnership: "0 years",
      logo: "/assets/img/brand/csi.jpg"
    },
    {
      id: 24,
      name: "Rural Electrification and Renewable Energy Corporation (REREC)",
      sector: "Government",
      since: "2025",
      projects: [
        "Cameras and Public Address System to REREC"
      ],
      partnership: "0 years",
      logo: "/assets/img/brand/rerec.jpg"
    },
    {
      id: 25,
      name: "SONY Sugar",
      sector: "Government",
      since: "2018",
      projects: [
        "E-Board Management System"
      ],
      partnership: "7 years",
      logo: "/assets/img/brand/sony.png"
    },
    {
      id: 26,
      name: "Emoru Hydrogen LLP",
      sector: "Energy",
      since: "2023",
      projects: [
        "Collaboration and Projects Management System"
      ],
      partnership: "2 years",
      logo: "/assets/img/brand/emoru.png"
    }
  ];

  return (
    <>
      <HeaderSix />
      
      {/* Breadcrumb */}
      <Breadcrumb title_top="Our" title_bottom="Clients" />
      
      {/* Clients Section */}
      <div className="clients-list-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-60">
                <h2 className="mb-20">Our Valued Clients</h2>
                <p>We're proud to work with organizations that share our commitment to excellence and innovation.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {clients.map((client) => (
              <div key={client.id} className="col-xl-4 col-md-6">
                <div className="client-card">
                  <div className="client-header mb-25">
                    <h3 className="client-name">{client.name}</h3>
                    <div className="client-meta">
                      <span className="sector-badge">{client.sector}</span>
                      <span className="since">Since {client.since}</span>
                    </div>
                  </div>
                  
                  <div className="client-projects mb-25">
                    <h4 className="projects-title">Key Projects:</h4>
                    <ul className="projects-list">
                      {client.projects.map((project, index) => (
                        <li key={index} className="project-item">
                          <i className="fas fa-check"></i>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="client-partnership">
                    <span className="partnership-years">{client.partnership} partnership</span>
                  </div>
                  
                  <div className="client-logo-placeholder mt-30">
                    <div className="logo-placeholder">
                      <img
                        src={client.logo}
                        alt={`${client.name} placeholder logo`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CtaArea />

      <FooterFive style_contact={true} style_team={true} />
      
      {/* Styles */}
      <style jsx>{`
        .section-title h2 {
          font-size: 36px;
          font-weight: 700;
          color: #222;
        }
        
        .client-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid #eee;
        }
        
        .client-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        
        .client-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #222;
        }
        
        .client-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .sector-badge {
          background: #e9ecef;
          color: #495057;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .since {
          color: #6c757d;
          font-size: 13px;
        }
        
        .projects-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #222;
        }
        
        .projects-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .project-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          font-size: 14px;
          color: #495057;
        }
        
        .project-item i {
          color: #007bff;
          margin-right: 10px;
          margin-top: 4px;
          font-size: 12px;
        }
        
        .client-partnership {
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .partnership-years {
          font-size: 14px;
          color: #6c757d;
          font-weight: 500;
        }
        
        .logo-placeholder {
          border: 2px dashed #007bff;
          border-radius: 8px;
          padding: 20px;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9ff;
        }
        
        .logo-placeholder img {
          max-width: 140px;
          max-height: 70px;
          width: 100%;
          object-fit: contain;
        }
        
        @media (max-width: 768px) {
          .section-title h2 {
            font-size: 28px;
          }
          
          .client-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ClientsPage;
