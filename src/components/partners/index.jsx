import React from 'react';
import HeaderSix from "@/src/layout/headers/header-6";
import FooterFive from "@/src/layout/footers/footer-5";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import CtaArea from "../contact/cta-area";

const PartnersPage = () => {
  // Partner data - Expanded list including more Kenyan partners with placeholder logos
  const partners = [
    {
      id: 1,
      name: "Microsoft Corporation",
      category: "Cloud Services & Enterprise Software",
      partnership: "Cloud Solutions & AI Platform Integration",
      type: "Strategic Partner",
      logo: "/assets/img/brand/mocrosoft.jpg"
    },
    {
      id: 2,
      name: "Cisco Systems",
      category: "Networking Infrastructure",
      partnership: "Network Infrastructure & Communications Solutions",
      type: "Technology Partner",
      logo: "/assets/img/brand/cisco.png"
    },
    {
      id: 3,
      name: "IBM",
      category: "Enterprise & Analytics",
      partnership: "Data Analytics & AI Consulting Services",
      type: "Strategic Partner",
      logo: "/assets/img/brand/ibm.jpg"
    },
    {
      id: 4,
      name: "Google Cloud",
      category: "Cloud Services",
      partnership: "Enterprise Cloud Infrastructure & Big Data Solutions",
      type: "Technology Partner",
      logo: "/assets/img/brand/google.png"
    },
    {
      id: 5,
      name: "Amazon Web Services (AWS)",
      category: "Cloud Services",
      partnership: "Enterprise Cloud Solutions & Scalable Computing",
      type: "Technology Partner",
      logo: "/assets/img/brand/aws.png"
    },
    {
      id: 6,
      name: "Dell Technologies",
      category: "Enterprise Infrastructure",
      partnership: "Server & Storage Solutions for Data Centers",
      type: "Technology Partner",
      logo: "/assets/img/brand/dell.png"
    },
    {
      id: 7,
      name: "VMware",
      category: "Virtualization & Cloud",
      partnership: "Virtual Infrastructure & Cloud Computing Platforms",
      type: "Technology Partner",
      logo: "/assets/img/brand/vmare.png"
    },
    {
      id: 8,
      name: "SAP SE",
      category: "Enterprise Resource Planning",
      partnership: "Enterprise Resource Planning & Business Software Solutions",
      type: "Strategic Partner",
      logo: "/assets/img/brand/sap.png"
    },
    {
      id: 9,
      name: "Oracle Corporation",
      category: "Database & Analytics",
      partnership: "Database Solutions & Analytics Platform",
      type: "Technology Partner",
      logo: "/assets/img/brand/oracle.png"
    },
    {
      id: 10,
      name: "Adobe Systems",
      category: "Creative & Digital Experience",
      partnership: "Digital Experience Platform & Document Management",
      type: "Technology Partner",
      logo: "/assets/img/brand/adobe.png"
    },
    {
      id: 11,
      name: "Salesforce",
      category: "Customer Relationship Management",
      partnership: "Customer Relationship Management & Marketing Solutions",
      type: "Strategic Partner",
      logo: "/assets/img/brand/salesforce.png"
    },
    {
      id: 12,
      name: "Huawei Technologies",
      category: "Telecommunications & Networking",
      partnership: "Network Infrastructure & 5G Communications",
      type: "Technology Partner",
      logo: "/assets/img/brand/huawei.png"
    },
    {
      id: 13,
      name: "Lenovo",
      category: "Technology company",
      partnership: " Hardware design, manufacture,  including PCs, servers,",
      type: "Strategic Partner",
      logo: "/assets/img/brand/lenovo.png"
    },

    {
      id: 14,
      name: "Dahua Technology",
      category: "CCTV Technology company",
      partnership: " CCTV, NVR/DVR, access control and intercom solutions",
      type: "Strategic Partner",
      logo: "/assets/img/brand/dahua.png"
    },

    {
      id: 15,
      name: "HIKVision",
      category: "CCTV Technology company",
      partnership: "AIoT solutions and reliable security camera systems,",
      type: "Strategic Partner",
      logo: "/assets/img/brand/hikvision.jpg"
    },
    
    
  ];

  return (
    <>
      <HeaderSix />
      
      {/* Breadcrumb */}
      <Breadcrumb title_top="Our" title_bottom="Partners" />
      
      {/* Partners Section */}
      <div className="partners-list-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-60">
                <h2 className="mb-20">Technology Partners</h2>
                <p>Strategic alliances with world-leading technology companies providing cutting-edge solutions and platforms.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {partners.map((partner) => (
              <div key={partner.id} className="col-xl-4 col-md-6">
                <div className="partner-card">
                  <div className="partner-header mb-25">
                    <h3 className="partner-name">{partner.name}</h3>
                    <div className="partner-meta">
                      <span className="category-badge">{partner.category}</span>
                    </div>
                  </div>
                  
                  <div className="partner-details mb-25">
                    <h4 className="partnership-title">Partnership:</h4>
                    <p className="partnership-description">{partner.partnership}</p>
                  </div>
                  
                  <div className="partner-type">
                    <span className="type-badge">{partner.type}</span>
                  </div>
                  
                  <div className="partner-logo-placeholder mt-30">
                    <div className="logo-placeholder">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} placeholder logo`}
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
        
        .partner-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid #eee;
        }
        
        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        
        .partner-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #222;
        }
        
        .partner-meta {
          margin-bottom: 20px;
        }
        
        .category-badge {
          background: #e9ecef;
          color: #495057;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .partnership-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #222;
        }
        
        .partnership-description {
          font-size: 14px;
          color: #495057;
          line-height: 1.5;
          margin-bottom: 0;
        }
        
        .partner-type {
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .type-badge {
          background-color: #6c757d; /* Gray color instead of blue */
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .logo-placeholder {
          border: 2px dashed #6c757d; /* Gray color instead of blue */
          border-radius: 8px;
          padding: 20px;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fc;
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
          
          .partner-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default PartnersPage;
