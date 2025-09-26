const menu_data = [
  // --- 1. HOME (Mapped to /) ---
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/", title: "Data analytics (Sample)" }, 
      { link: "/home-2", title: "Payment Gateway (Sample)" },
      { link: "/home-3", title: "CRM Software (Sample)" },
    ],
  },

  // --- 2. ABOUT US (Mapped to /about and /partners) ---
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "About Us",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About Us" },
      { link: "/clients", title: "Clients" },
      { link: "/partners", title: "Technical Partners" },
      { link: "/team", title: "Team" },
      { link: "/career", title: "Career" },
    ],
  },
  
  // --- 3. PRODUCT AND SERVICES (CLEANED MEGA MENU) ---
  {
    id: 3,
    mega_menu: true, 
    has_dropdown: true,
    title: "Product and services",
    link: "/service",
    active: "",
    sub_menus: [

      // COLUMN 1: Software & Applications
      {
        title: "Software & Applications",
        link: "/services/software-applications",
        sub_menus: [
          { link: "/services/customer-relations-management", title: "Customer Relations Management" },
          { link: "/services/helpdesk-complaint-management", title: "Helpdesk & Complaint Management" },
          { link: "/services/electronic-board-management", title: "Electronic Board Management (E-Board)" },
          { link: "/services/social-media-monitoring", title: "Social Media Monitoring" },
          { link: "/services/exam-management-software", title: "Exam Management Software" },
          { link: "/services/e-sign", title: "E-Sign" },
          { link: "/services/contract-management", title: "Contract Management" },
          { link: "/services/legal-management-software", title: "Legal Management Software" },
          { link: "/services/knowledge-management", title: "Knowledge Management" },
          { link: "/services/audit-management", title: "Audit Management" },
          { link: "/services/document-management-system", title: "Document Management System" },
        ],
      },

      // COLUMN 2: Infrastructure & Development
      {
        title: "Infrastructure & Development",
        link: "/services/infrastructure-development",
        sub_menus: [
          { link: "/services/custom-software-development", title: "Custom Software Development" },
          { link: "/services/integration-services", title: "Integration Services" },
        ],
      },

      // COLUMN 2: Enterprise Management Solutions (Specific Applications)
      {
        title: "Enterprise Solutions",
        link: "/services/enterprise-solutions",
        sub_menus: [
          { link: "/services/customer-relations-management", title: "Customer Relations Management" },
          { link: "/services/helpdesk-complaint-management", title: "Helpdesk & Complaint Management" },
          { link: "/services/electronic-board-management", title: "Electronic Board Management (E-Board)" },
          { link: "/services/enterprise-it-helpdesk-system", title: "Enterprise IT Helpdesk System" },
        ],
      },

      // COLUMN 3: Governance, Risk, & Compliance
      {
        title: "Governance & Compliance",
        link: "/services/governance-compliance",
        sub_menus: [
          { link: "/services/contract-management", title: "Contract Management" },
          { link: "/services/legal-management-software", title: "Legal Management Software" },
          { link: "/services/audit-management", title: "Audit Management" },
          { link: "/services/social-media-monitoring", title: "Social Media Monitoring" },
        ],
      },

      // COLUMN 4: Facilities & Asset Management (Detailed)
      {
        title: "Facilities & Asset Management",
        link: "/services/facilities-asset-management",
        sub_menus: [
          { link: "/services/computer-aided-facility-asset-management", title: "Computer-Aided Facility & Asset Mgt" },
          { link: "/services/enterprise-facilities-asset-management", title: "Enterprise Facilities & Asset Mgt" },
          { link: "/services/automated-visitor-management-system", title: "Automated Visitor Management System" },
          { link: "/services/meeting-room-management-systems", title: "Meeting Room Management Systems" },
        ],
      },

      // COLUMN 5: Security & Safety
      {
        title: "Security & Operational Safety",
        link: "/services/security-operational-safety",
        sub_menus: [
          { link: "/services/ai-powered-video-surveillance-systems", title: "AI Powered Video Surveillance" },
          { link: "/services/access-control-systems", title: "Access Control Systems" },
          { link: "/services/smart-key-management-systems", title: "Smart Key Management Systems" },
          { link: "/services/fire-burglar-emergency-alarm-systems", title: "Fire & Emergency Alarm Systems" },
          { link: "/services/high-security-gates-entrance-systems", title: "High Security Gates & Entrance" },
          { link: "/services/incident-management-software", title: "Incident Management Software" },
          { link: "/services/unified-emergency-mass-notification", title: "Unified Emergency Mass Notification" },
          { link: "/services/environmental-health-safety-system", title: "Environmental Health & Safety" },
        ],
      },

      // COLUMN 6: ICT & Analytics
      {
        title: "ICT, Telecom & Analytics",
        link: "/services/ict-telecom-analytics",
        sub_menus: [
          { link: "/services/data-centre-server-firms-room-solutions", title: "Data Centre & Server Room Solutions" },
          { link: "/services/unified-communication", title: "Unified Communication" },
          { link: "/services/ip-hybrid-pabx-voip-solutions", title: "IP & Hybrid PABX, & VOIP Solutions" },
          { link: "/services/time-attendance-management-systems", title: "Time & Attendance Management" },
          { link: "/services/ai-data-analytics", title: "AI & Data Analytics" },
        ],
      },

      // COLUMN 7: Education & Examination
      {
        title: "Education Solutions",
        link: "/services/education-solutions",
        sub_menus: [
          { link: "/services/exam-management-software", title: "Exam Management Software" },
        ],
      },

    ],
  },

  // --- 4. PROJECTS (Mapped to /project) ---
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Projects",
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "All Projects" },
      { link: "/project#ongoing", title: "Ongoing Projects" },
      { link: "/project#completed", title: "Completed Projects" },
    ],
  },

  // --- 5. BLOG (Mapped to /blog) ---
  //{
    //id: 5,
    //mega_menu: false,
    //has_dropdown: false,
    //title: "Blog",
    //link: "/blog",
    //active: "",
    //sub_menus: [
      //{ link: "/blog", title: "Blog" },
      //{ link: "/blog-list", title: "Blog List" },
      //{ link: "/blog-details", title: "Blog Details" },
      //{ link: "/blog-details-2", title: "Blog Details 02" },
   // ],
  //},
  
  

  // --- 6. CONTACT (Mapped to /contact) ---
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];

export default menu_data;
