import React from 'react';
import HeaderSix from "@/src/layout/headers/header-6";
import FooterFive from "@/src/layout/footers/footer-5";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import CtaArea from "../contact/cta-area";

const PartnersPage = () => {
  // Partner data - Expanded list including more Kenyan partners
  const partners = [
    {
      id: 1,
      name: "Microsoft Corporation",
      category: "Cloud Services & Enterprise Software",
      partnership: "Cloud Solutions & AI Platform Integration",
      type: "Strategic Partner"
    },
    {
      id: 2,
      name: "Cisco Systems",
      category: "Networking Infrastructure",
      partnership: "Network Infrastructure & Communications Solutions",
      type: "Technology Partner"
    },
    {
      id: 3,
      name: "IBM",
      category: "Enterprise & Analytics",
      partnership: "Data Analytics & AI Consulting Services",
      type: "Strategic Partner"
    },
    {
      id: 4,
      name: "Google Cloud",
      category: "Cloud Services",
      partnership: "Enterprise Cloud Infrastructure & Big Data Solutions",
      type: "Technology Partner"
    },
    {
      id: 5,
      name: "Amazon Web Services (AWS)",
      category: "Cloud Services",
      partnership: "Enterprise Cloud Solutions & Scalable Computing",
      type: "Technology Partner"
    },
    {
      id: 6,
      name: "Dell Technologies",
      category: "Enterprise Infrastructure",
      partnership: "Server & Storage Solutions for Data Centers",
      type: "Technology Partner"
    },
    {
      id: 7,
      name: "VMware",
      category: "Virtualization & Cloud",
      partnership: "Virtual Infrastructure & Cloud Computing Platforms",
      type: "Technology Partner"
    },
    {
      id: 8,
      name: "SAP SE",
      category: "Enterprise Resource Planning",
      partnership: "Enterprise Resource Planning & Business Software Solutions",
      type: "Strategic Partner"
    },
    {
      id: 9,
      name: "Oracle Corporation",
      category: "Database & Analytics",
      partnership: "Database Solutions & Analytics Platform",
      type: "Technology Partner"
    },
    {
      id: 10,
      name: "Adobe Systems",
      category: "Creative & Digital Experience",
      partnership: "Digital Experience Platform & Document Management",
      type: "Technology Partner"
    },
    {
      id: 11,
      name: "Salesforce",
      category: "Customer Relationship Management",
      partnership: "Customer Relationship Management & Marketing Solutions",
      type: "Strategic Partner"
    },
    {
      id: 12,
      name: "Huawei Technologies",
      category: "Telecommunications & Networking",
      partnership: "Network Infrastructure & 5G Communications",
      type: "Technology Partner"
    },
    {
      id: 13,
      name: "Safaricom PLC",
      category: "Telecommunications",
      partnership: "Mobile Network Infrastructure & Digital Payment Solutions",
      type: "Strategic Partner"
    },
    {
      id: 14,
      name: "Telkom Kenya",
      category: "Telecommunications",
      partnership: "Fixed Line & Data Services",
      type: "Technology Partner"
    },
    {
      id: 15,
      name: "Equity Bank",
      category: "Financial Services",
      partnership: "Digital Banking Infrastructure & Payment Solutions",
      type: "Strategic Partner"
    },
    {
      id: 16,
      name: "KCB Group",
      category: "Financial Services",
      partnership: "Banking Technology Solutions & Core Banking Systems",
      type: "Technology Partner"
    },
    {
      id: 17,
      name: "Kenya Power & Lighting Company",
      category: "Energy & Utilities",
      partnership: "Smart Grid Solutions & Energy Management Systems",
      type: "Technology Partner"
    },
    {
      id: 18,
      name: "National Oil Corporation of Kenya",
      category: "Energy & Utilities",
      partnership: "Enterprise IT Solutions & Digital Transformation",
      type: "Technology Partner"
    },
    {
      id: 19,
      name: "Britam Holdings",
      category: "Financial Services",
      partnership: "Insurance Technology Solutions & Customer Management Systems",
      type: "Technology Partner"
    },
    {
      id: 20,
      name: "Cooperative Bank of Kenya",
      category: "Financial Services",
      partnership: "Banking Infrastructure & Digital Banking Platforms",
      type: "Technology Partner"
    },
    {
      id: 21,
      name: "Jomo Kenyatta International Airport",
      category: "Transportation & Logistics",
      partnership: "Airport Management Systems & Security Solutions",
      type: "Technology Partner"
    },
    {
      id: 22,
      name: "Kenya Airways",
      category: "Transportation & Logistics",
      partnership: "Reservation Systems & Passenger Management Solutions",
      type: "Technology Partner"
    },
    {
      id: 23,
      name: "East African Breweries Limited",
      category: "Consumer Goods",
      partnership: "Supply Chain Management & ERP Solutions",
      type: "Technology Partner"
    },
    {
      id: 24,
      name: "Bidco Africa",
      category: "Consumer Goods",
      partnership: "Enterprise Resource Planning & Manufacturing Systems",
      type: "Technology Partner"
    },
    {
      id: 25,
      name: "Family Bank",
      category: "Financial Services",
      partnership: "Banking Technology Solutions & Mobile Banking Platforms",
      type: "Technology Partner"
    },
    {
      id: 26,
      name: "Absa Bank Kenya",
      category: "Financial Services",
      partnership: "Enterprise Banking Solutions & Digital Transformation",
      type: "Technology Partner"
    },
    {
      id: 27,
      name: "Standard Chartered Bank Kenya",
      category: "Financial Services",
      partnership: "International Banking Solutions & Trade Finance",
      type: "Technology Partner"
    },
    {
      id: 28,
      name: "NCBA Group",
      category: "Financial Services",
      partnership: "Digital Banking Infrastructure & Core Systems",
      type: "Technology Partner"
    },
    {
      id: 29,
      name: "Genghis Khan Restaurant Group",
      category: "Hospitality & Leisure",
      partnership: "Point of Sale Systems & Customer Management",
      type: "Technology Partner"
    },
    {
      id: 30,
      name: "Nairobi Securities Exchange",
      category: "Financial Services",
      partnership: "Trading Platform Infrastructure & Market Data Solutions",
      type: "Technology Partner"
    }
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
                      <span>Partner Logo</span>
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
          padding: 25px;
          text-align: center;
          color: #6c757d; /* Gray color instead of blue */
          font-size: 14px;
          min-height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
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