// images import
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

const service_data = [

    // --- MAIN SERVICE CATEGORIES ---
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "Software & Applications",
        description: <>Transforming business processes with cloud-based (SaaS) or on-premise software solutions including CRMs, helpdesk systems, electronic board management, and custom application development[cite: 41, 46].</>,
        delay: ".4s",
        key: "software-applications"
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Enterprise Solutions",
        description: <>Scalable enterprise-grade solutions for customer relationship management, helpdesk services, electronic board management, and comprehensive IT support for large organizations[cite: 48, 50].</>,
        delay: ".6s",
        key: "enterprise-solutions"
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "Enterprise Facilities & Asset Management",
        description: <>Integration of software and hardware for computer-aided facility management, automated visitor management, meeting room coordination, and centralized asset control[cite: 196, 213].</>,
        delay: ".7s",
        key: "enterprise-facilities-asset-management"
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Operational Safety",
        description: <>Technologically advanced solutions for physical security, health, and environmental compliance, including incident management and environmental health systems[cite: 290, 292].</>,
        delay: ".8s",
        key: "operational-safety"
    },
    {
        id: 5,
        icon: img_5,
        img: img_5,
        title: "Advanced Security",
        description: <>Comprehensive security systems including AI-powered video surveillance, access control, smart key management, and emergency alarm systems for enhanced protection[cite: 347, 434].</>,
        delay: ".9s",
        key: "advanced-security"
    },
    {
        id: 6,
        icon: icon_1,
        img: icon_1,
        title: "Time & Attendance Management Systems",
        description: <>Biometric attendance tracking systems with seamless integration to payroll and ERP systems for accurate workforce management[cite: 501, 503].</>,
        delay: "1.0s",
        key: "time-attendance-management"
    },
    {
        id: 7,
        icon: icon_2,
        img: icon_2,
        title: "Access Control Systems",
        description: <>Advanced access control solutions with multi-factor authentication, time-based permissions, and detailed audit trails for secure premises management[cite: 481, 487].</>,
        delay: "1.1s",
        key: "access-control-systems"
    },
    {
        id: 8,
        icon: icon_3,
        img: icon_3,
        title: "Fire, Burglar & Emergency Alarm Systems",
        description: <>Integrated alarm systems for fire detection, burglary prevention, and emergency response with automated alerts and centralized monitoring[cite: 520, 524].</>,
        delay: "1.2s",
        key: "fire-burglar-emergency-systems"
    },
    {
        id: 9,
        icon: icon_4,
        img: icon_4,
        title: "ICT & Telecommunications",
        description: <>Custom turnkey solutions for data centres, unified communications, IP PABX, VoIP systems, and scalable network infrastructure[cite: 538, 540].</>,
        delay: "1.3s",
        key: "ict-telecommunications"
    },

    // --- DETAILED SUB-SERVICES ---
    
    // --- DETAILED/FEATURED APPLICATIONS (Mapped to menu structure keys) ---

    // SOFTWARE & APPS
    {
        id: 6,
        icon: img_1,
        img: img_1,
        title: "Electronic Board Management (E-Board)",
        description: <>A digital tool for secure, paperless communication between directors and senior executives, enhancing transparency and accountability.</>,
        delay: "1.0s",
        key: "e-board",
        link: "/services/e-board"
    },
    {
        id: 7,
        icon: img_2,
        img: img_2,
        title: "Customer Relations Management (CRM)",
        description: <>A business system to manage customer and prospect interactions, driving growth and increasing loyalty through lead management and automated workflows.</>,
        delay: "1.1s",
        key: "crm",
        link: "/services/crm"
    },
    {
        id: 8,
        icon: img_3,
        img: img_3,
        title: "Contract Lifecycle Management (CLM)",
        description: <>Automate your contract repository, enabling effortless OCR, advanced search, and alerts to prevent missing critical dates impacting revenue.</>,
        delay: "1.2s",
        key: "contract",
        link: "/services/contract"
    },
    {
        id: 9,
        icon: img_4,
        img: img_4,
        title: "Helpdesk & Complaint Management (HCMS)",
        description: <>A web-based platform for quick, accurate resolution of customer complaints and support requests, featuring a self-service knowledgebase.</>,
        delay: "1.3s",
        key: "helpdesk",
        link: "/services/helpdesk"
    },
    {
        id: 10,
        icon: img_5,
        img: img_5,
        title: "Social Media Monitoring",
        description: <>Advanced social media monitoring solution for tracking brand mentions, sentiment analysis, and customer engagement across all social media platforms.</>,
        delay: "1.4s",
        key: "social-media-monitoring",
        link: "/services/social-media-monitoring"
    },
    {
        id: 11,
        icon: img_6,
        img: img_6,
        title: "Exam Management Software",
        description: <>Comprehensive exam management solution for educational institutions to create, administer, and evaluate exams online with secure testing environments.</>,
        delay: "1.5s",
        key: "exam-management",
        link: "/services/exam-management"
    },
    {
        id: 12,
        icon: img_7,
        img: img_7,
        title: "Audit Management System (AMS)",
        description: <>A cloud-based solution providing end-to-end functionality for planning, managing, and conducting the complete audit lifecycle.</>,
        delay: "1.6s",
        key: "audit",
        link: "/services/audit"
    },

    // FACILITIES & SECURITY
    {
        id: 13,
        icon: img_7, // Reused for CAFM
        img: img_7,
        title: "Computer-Aided Facility & Asset Management (CAFM)",
        description: <>A centralized system to plan, manage, and maintain work, resources, and assets from a web browser or mobile app, optimizing facility operations[cite: 213, 215].</>,
        delay: "1.7s",
        key: "cafm",
        link: "/services/cafm"
    },
    {
        id: 14,
        icon: img_8,
        img: img_8,
        title: "Automated Visitor Management System",
        description: <>Modern visitor management solution with automated check-in, security verification, and visitor tracking for enhanced security and improved visitor experience.</>,
        delay: "1.8s",
        key: "automated-visitor-management",
        link: "/services/automated-visitor-management"
    },
    {
        id: 15,
        icon: icon_2, // Reused icon_2
        img: icon_2,
        title: "Meeting Room Management Systems",
        description: <>Intelligent meeting room booking and management solution to optimize space utilization, reduce scheduling conflicts, and enhance productivity[cite: 226, 228].</>,
        delay: "1.9s",
        key: "meeting-room-management",
        link: "/services/meeting-room-management"
    },
    {
        id: 16,
        icon: icon_3, // Reused icon_3
        img: icon_3,
        title: "Incident Management Software",
        description: <>Comprehensive incident management solution for reporting, tracking, and resolving security incidents and emergencies with structured response processes[cite: 310, 312].</>,
        delay: "2.0s",
        key: "incident-management",
        link: "/services/incident-management"
    },
    {
        id: 17,
        icon: img_7, // Reused img_7
        img: img_7,
        title: "Smart Key Management Solutions",
        description: <>A smart, secure, and self-issuing key management system using Access Cards, PIN, and Biometrics to control access to keys[cite: 487, 489].</>,
        delay: "2.1s",
        key: "key-management",
        link: "/services/key-management"
    },
    {
        id: 18,
        icon: img_8, // Reused img_8
        img: img_8,
        title: "Unified Emergency Mass Notification",
        description: <>A multimodal system integrating software and hardware to initiate alerts across various disbursement modes, ensuring 100% alert coverage[cite: 370, 371, 374].</>,
        delay: "2.2s",
        key: "mass-notification",
        link: "/services/mass-notification"
    },

    // ICT & SUPPORT
    {
        id: 19,
        icon: img_9, // Reused img_9
        img: img_9,
        title: "Data Centre & Server Room Solutions",
        description: <>One-stop-shop for design, installation, and maintenance of critical infrastructure, including cooling, power protection (UPS), and network data cabling[cite: 541, 543, 545].</>,
        delay: "2.3s",
        key: "data-centre",
        link: "/services/data-centre"
    },
    {
        id: 20,
        icon: img_6, // Reused img_6
        img: img_6,
        title: "Managed Support Services",
        description: <>Providing top-level after-sales support, maintenance, and expert project management across all our systems and solutions[cite: 57].</>,
        delay: "2.4s",
        key: "managed-support",
        link: "/services/managed-support"
    },
    {
        id: 21,
        icon: icon_4,
        img: icon_4,
        title: "Environmental, Health and Safety (EHS)",
        description: <>Technologically advanced software making the workplace safer, healthier, and more sustainable by tracking incidents, risks, and environmental performance[cite: 422, 424].</>,
        delay: "2.5s",
        key: "ehs",
        link: "/services/ehs"
    },

    // --- GENERAL & SUPPORT SERVICES (Retaining original generic utility) ---
    {
        id: 22,
        icon: img_1,
        img: img_1,
        title: "IT Consulting & Strategy",
        description: <>Strategic consulting services designed to align your technology investments with your business needs, including migration and optimization.</>,
        delay: "2.6s",
        link: "/service"
    },
    {
        id: 23,
        icon: img_2,
        img: img_2,
        title: "System Integration",
        description: <>Integrating various security, software, and IT systems with each other to attain complete visibility and enhanced efficiency.</>,
        delay: "2.7s",
        link: "/service"
    },
    {
        id: 24,
        icon: img_3,
        img: img_3,
        title: "Disaster Recovery & BCP",
        description: <>Robust business continuity planning and recovery solutions to protect critical business documents and ensure uninterrupted operation.</>,
        delay: "2.8s",
        link: "/service"
    },
    {
        id: 25,
        icon: img_4,
        img: img_4,
        title: "Cybersecurity & Network Solutions",
        description: <>Designing, implementing, and securing your network infrastructure to protect against threats and ensure reliable connectivity.</>,
        delay: "2.9s",
        link: "/service"
    },
    {
        id: 26,
        icon: img_5,
        img: img_5,
        title: "Time & Attendance Management",
        description: <>Biometric systems for capturing user entries and exits, seamlessly integrable with payroll and ERP systems.</>,
        delay: "3.0s",
        key: "time-attendance",
        link: "/services/time-attendance"
    },
    {
        id: 27,
        icon: img_6,
        img: img_6,
        title: "Remote Monitoring & Diagnostics",
        description: <>Proactive support through remote monitoring to identify and resolve issues before they impact your business.</>,
        delay: "3.1s",
        link: "/service"
    },
    {
        id: 28,
        icon: img_7,
        img: img_7,
        title: "X-Ray & Detection Systems",
        description: <>Turnkey solutions for high-security entrance control, including X-ray baggage scanners and walk-through metal detectors.</>,
        delay: "3.2s",
        link: "/service"
    },
]
export default service_data
