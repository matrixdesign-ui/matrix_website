import React from 'react';

const clientsData = [
  {
    id: 1,
    initials: "KR",
    category: "Government",
    since: "2017",
    name: "Kenya Revenue Authority (KRA)",
    project: "Integrated Legal Management System ILMS",
    partnership: "8 years partnership"
  },
  {
    id: 2,
    initials: "CA",
    category: "Government",
    since: "2024",
    name: "Communications Authority of Kenya (CA)",
    project: "Integrated Legal Case Management System ILCMS",
    partnership: "1 years partnership"
  },
  {
    id: 3,
    initials: "KB",
    category: "Government",
    since: "2023",
    name: "Kenya Bureau of Standards (KEBS)",
    project: "Legal Information Management System LEMIS",
    partnership: "2 years partnership"
  },
  {
    id: 4,
    initials: "RE",
    category: "Government",
    since: "2020",
    name: "Rural Electrification Authority (REA)",
    project: "Emergency Communication Systems & Rural Connectivity",
    partnership: "5 years partnership"
  },
  {
    id: 5,
    initials: "IL",
    category: "Agriculture",
    since: "2019",
    name: "International Livestock Research Institute (ILRI)",
    project: "Biometric Access Control System, CCTV Surveillance System, Structured Cabling Systems, Fire Detection and Suppression System, Air Conditioning Systems.",
    partnership: "6 years partnership"
  },
  {
    id: 6,
    initials: "KS",
    category: "Technology",
    since: "2017",
    name: "Kenya School of Law",
    project: "CCTV Security Surveillance System",
    partnership: "8 years partnership"
  },
  {
    id: 7,
    initials: "NH",
    category: "Healthcare",
    since: "2023",
    name: "Nairobi Hospital",
    project: "Electronic Board Management & Healthcare Information Systems",
    partnership: "2 years partnership"
  },
  {
    id: 8,
    initials: "MT",
    category: "Healthcare",
    since: "2024",
    name: "Moi Teaching & Referral Hospital",
    project: "Enterprise IT Helpdesk System & Patient Management",
    partnership: "1 years partnership"
  },
  {
    id: 9,
    initials: "MI",
    category: "Government",
    since: "2024",
    name: "Moi International Sports Centre (MISC)- kasarani",
    project: "WiFi Systems Installation of Rehabilation & Upgrading of Moi International Sports Centre Kasarani",
    partnership: "1 years partnership"
  },
  {
    id: 10,
    initials: "MU",
    category: "Education",
    since: "2019",
    name: "Machakos University",
    project: "Biometric Controlled Gate Security Systems",
    partnership: "6 years partnership"
  },
  {
    id: 11,
    initials: "Mo",
    category: "Government",
    since: "2024",
    name: "Ministry of Sports, Culture & Heritage",
    project: "Internet Connectivity Infrastructure for National Sports Programs",
    partnership: "1 years partnership"
  },
  {
    id: 12,
    initials: "TN",
    category: "Healthcare",
    since: "2022",
    name: "The Nairobi Hospital",
    project: "Electronic Meeting and Governance System",
    partnership: "3 years partnership"
  },
  {
    id: 13,
    initials: "KR",
    category: "Government",
    since: "2017",
    name: "Kenya Revenue Authority",
    project: "Integrated Board Management System",
    partnership: "8 years partnership"
  },
  {
    id: 14,
    initials: "HE",
    category: "Government",
    since: "2018",
    name: "Higher Education Loans Board (HELB)",
    project: "E-Board Management System",
    partnership: "7 years partnership"
  },
  {
    id: 15,
    initials: "KU",
    category: "Government",
    since: "2018",
    name: "Kenya Universities and Colleges Central Placement Service (KUCCPS)",
    project: "Board Management System",
    partnership: "7 years partnership"
  },
  {
    id: 16,
    initials: "KA",
    category: "Government",
    since: "2018",
    name: "Kenya Accountants and Secretaries National Examinations Board (KASNEB)",
    project: "Electronic Board Management System",
    partnership: "7 years partnership"
  },
  {
    id: 17,
    initials: "NC",
    category: "Government",
    since: "2019",
    name: "National Construction Authority (NCA)",
    project: "Cloud-Based E-Board Management System",
    partnership: "6 years partnership"
  },
  {
    id: 18,
    initials: "CI",
    category: "Insurance",
    since: "2019",
    name: "CIC Insurance Group",
    project: "Access Control, CCTV and Traffic Arm Barriers.",
    partnership: "6 years partnership"
  },
  {
    id: 19,
    initials: "C(",
    category: "Agriculture",
    since: "2020",
    name: "CIMMYT (International Maize & Wheat Improvement Center)",
    project: "CCTV Surveillance System",
    partnership: "5 years partnership"
  },
  {
    id: 20,
    initials: "CA",
    category: "Government",
    since: "2017",
    name: "Communications Authority of Kenya",
    project: "Installation of Airconditioning units, UPS Systems, CCTV Surveillance Systems at Regional Offices and Equipment Stations and Linking to HQ for remote monitoring",
    partnership: "8 years partnership"
  },
  {
    id: 21,
    initials: "KM",
    category: "Healthcare",
    since: "2021",
    name: "Kenya Medical Training College (KMTC)",
    project: "Fingerprint Access Control System at Registries, Payroll Section and Examination Secretariat Offices",
    partnership: "4 years partnership"
  },
  {
    id: 22,
    initials: "KM",
    category: "Healthcare",
    since: "2021",
    name: "Kenya Medical Research Institute (KEMRI)",
    project: "Access Control Systems",
    partnership: "4 years partnership"
  },
  {
    id: 23,
    initials: "CI",
    category: "Healthcare",
    since: "2019",
    name: "Centum Investments Company PLC",
    project: "Integrated Gate Security System with Bollards, Automatic Barriers and Biometric-based access control for visitors and staff at Centum's International House.",
    partnership: "6 years partnership"
  },
  {
    id: 24,
    initials: "K+",
    category: "Transportation",
    since: "2018",
    name: "KUEHNE + NAGEL Limited",
    project: "Automatic Gate Access Control System with Pedestrian Turnstiles, Security Bollards & Traffic Barriers",
    partnership: "7 years partnership"
  },
  {
    id: 25,
    initials: "MI",
    category: "Education",
    since: "2024",
    name: "Moi International Sports Centre (MISC)- kasarani",
    project: "Lifts Installation Works at MISC Kasarani",
    partnership: "1 years partnership"
  },
  {
    id: 26,
    initials: "CE",
    category: "Manufacturing",
    since: "2025",
    name: "CSI Energy Kenya",
    project: "ICT Infrastructure and Security Systems",
    partnership: "0 years partnership"
  },
  {
    id: 27,
    initials: "RE",
    category: "Government",
    since: "2025",
    name: "Rural Electrification and Renewable Energy Corporation (REREC)",
    project: "Cameras and Public Address System to REREC",
    partnership: "0 years partnership"
  },
  {
    id: 28,
    initials: "SS",
    category: "Government",
    since: "2018",
    name: "SONY Sugar",
    project: "E-Board Management System",
    partnership: "7 years partnership"
  },
  {
    id: 29,
    initials: "L",
    category: "Energy",
    since: "2023",
    name: "LOMARO",
    project: "Collaboration and Projects Management System",
    partnership: "2 years partnership"
  }
];

const Clients = () => {
  return (
    <>
      
          
          {/* Clients Grid */}
          <div className="row">
            {clientsData.map((client) => (
              <div key={client.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="clients-item mb-30">
                  <div className="clients-item-inner" style={{ backgroundColor: 'white' }}>
                    <div className="clients-header d-flex justify-content-between align-items-start mb-20">
                      <div className="clients-initials">
                        <span className="initials-box">{client.initials}</span>
                      </div>
                      <div className="clients-meta text-end">
                        <span className="category">{client.category}</span>
                        <span className="since">Since {client.since}</span>
                      </div>
                    </div>
                    
                    <div className="clients-content">
                      <h5 className="clients-name">{client.name}</h5>
                      <p className="clients-project">{client.project}</p>
                      <div className="clients-partnership">
                        <span className="partnership-badge">Trusted Partner</span>
                        <span className="partnership-years">{client.partnership}</span>
                      </div>
                    </div>
                    
                    <div className="clients-logo-placeholder">
                      <div className="logo-placeholder">
                        <span>Logo Placeholder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      
      
      <style jsx>{`
        .clients-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #222;
        }
        
        .clients-item {
          transition: transform 0.3s ease;
        }
        
        .clients-item:hover {
          transform: translateY(-5px);
        }
        
        .clients-item-inner {
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          height: 100%;
          position: relative;
          border: 1px solid #eee;
        }
        
        .initials-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          font-size: 24px;
          font-weight: 700;
          border-radius: 10px;
        }
        
        .clients-meta {
          font-size: 14px;
        }
        
        .category {
          display: block;
          background: #e9ecef;
          color: #495057;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 5px;
        }
        
        .since {
          display: block;
          color: #6c757d;
          font-size: 13px;
        }
        
        .clients-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #222;
        }
        
        .clients-project {
          font-size: 14px;
          color: #495057;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        
        .clients-partnership {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .partnership-badge {
          background: #28a745;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .partnership-years {
          font-size: 13px;
          color: #6c757d;
        }
        
        .logo-placeholder {
          border: 2px dashed #dee2e6;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          color: #adb5bd;
          font-size: 14px;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .clients-title {
            font-size: 28px;
          }
          
          .clients-item-inner {
            padding: 20px;
          }
          
          .initials-box {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Clients;