// Product details data - detailed information for product landing pages
// Key-based structure using product slugs as keys
const productDetailsData = {
  "boardcloud": {
    title: "Boardcloud",
    slug: "boardcloud",
    tagline: "Secure, Paperless Board Meetings & Executive Communication",
    hero: {
      top_title: "Digital Board Management",
      headline: "Transform Your Board Meetings",
      subheadline: "Secure, paperless board meeting and executive communication platform enabling seamless collaboration for board members with advanced governance and compliance features.",
      cta_primary: "Request Demo",
      cta_secondary: "Learn More",
      cta_primary_link: "/contact",
      cta_secondary_link: "#features",
      bg_image: "/assets/img/product/meeting_hero_bg.jpg",
      screenshot: "/assets/img/service/sv-dashbord.png",
      logo: "/assets/img/logo/Boardcloud.png"
    },
    key_benefit: "Enhanced Governance & Seamless Collaboration",
    overview_des: "Boardcloud is a comprehensive digital governance platform designed to modernize board meetings and executive communications. With advanced security features, intuitive collaboration tools, and compliance capabilities, Boardcloud enables organizations to conduct efficient, paperless board meetings while maintaining the highest standards of governance and security.",
    features: [
      {
        title: "Paperless Board Meetings",
        description: "Eliminate paper-based board packs and move to a fully digital meeting experience with secure document distribution and real-time updates.",
        icon: "fas fa-file-alt"
      },
      {
        title: "Secure Communication",
        description: "Enterprise-grade encryption ensures all board communications and documents remain confidential and secure.",
        icon: "fas fa-shield-alt"
      },
      {
        title: "Meeting Management",
        description: "Streamline meeting scheduling, agenda creation, and minute taking with integrated tools designed for board effectiveness.",
        icon: "fas fa-calendar-alt"
      },
      {
        title: "Document Management",
        description: "Centralized repository for all board documents with version control, access management, and audit trails.",
        icon: "fas fa-folder-open"
      },
      {
        title: "Compliance & Governance",
        description: "Built-in compliance features ensure adherence to corporate governance standards and regulatory requirements.",
        icon: "fas fa-check-circle"
      },
      {
        title: "Mobile Access",
        description: "Access board materials and participate in meetings from any device, anywhere, at any time.",
        icon: "fas fa-mobile-alt"
      }
    ],
    benefits: [
      {
        title: "Time Efficiency",
        description: "Reduce time spent on meeting preparation and administration by up to 70% with automated workflows and document management."
      },
      {
        title: "Cost Savings",
        description: "Eliminate printing and courier costs associated with traditional board packs while reducing environmental impact."
      },
      {
        title: "Enhanced Security",
        description: "Protect sensitive board information with enterprise-grade security, encryption, and access controls."
      },
      {
        title: "Better Collaboration",
        description: "Enable real-time collaboration and communication among board members, improving decision-making processes."
      }
    ],
    overview_list: [
      "Digital Board Packs: Paperless distribution and management of board meeting materials",
      "Secure Communication: Encrypted messaging and document sharing for board members",
      "Meeting Scheduler: Integrated calendar and meeting management tools",
      "Document Repository: Centralized storage with version control and access management",
      "Compliance Tools: Built-in governance and regulatory compliance features",
      "Mobile Application: Full-featured mobile access for iOS and Android devices",
      "Voting & Resolutions: Digital voting and resolution management capabilities",
      "Audit Trail: Complete audit logs for all board activities and decisions"
    ],
    challenge_des: "Traditional board meetings rely on paper-based processes that are time-consuming, costly, and difficult to manage. Organizations need a secure, efficient platform that enables seamless collaboration while maintaining governance standards and compliance requirements. Boardcloud addresses these challenges with a comprehensive digital solution designed specifically for board operations.",
    faqs: [
      {
        question: "Is Boardcloud secure enough for sensitive board communications?",
        answer: "Yes, Boardcloud uses enterprise-grade encryption and security measures. All communications and documents are encrypted in transit and at rest, with role-based access controls and comprehensive audit trails."
      },
      {
        question: "Can board members access materials offline?",
        answer: "Yes, Boardcloud provides offline access capabilities through its mobile application, allowing board members to download and review materials even without an internet connection."
      },
      {
        question: "How does Boardcloud ensure compliance with governance standards?",
        answer: "Boardcloud includes built-in compliance features such as audit trails, document retention policies, and governance reporting tools that help organizations meet regulatory requirements."
      },
      {
        question: "Can we integrate Boardcloud with our existing systems?",
        answer: "Yes, Boardcloud offers API integration capabilities and can connect with enterprise systems such as document management, calendar, and email systems for seamless workflows."
      }
    ],
    testimonials: [
      {
        name: "Board Member",
        role: "Technology Sector",
        company: "Leading Corporation",
        quote: "Boardcloud has transformed how we conduct board meetings. The efficiency gains and improved collaboration have been remarkable.",
        rating: 5
      }
    ]
  },
  "sheria360": {
    title: "Sheria360",
    slug: "sheria360",
    tagline: "Comprehensive Legal Management Software",
    hero: {
      headline: "Complete Legal Practice Management",
      subheadline: "Comprehensive legal management software solution for law firms and legal departments. Streamline case management, document handling, and client relations with our advanced legal technology platform.",
      cta_primary: "Visit Website",
      cta_secondary: "Learn More",
      cta_primary_link: "https://www.sheria360.com/",
      cta_secondary_link: "#features",
      bg_image: "/assets/img/service/sv-icon-1.png"
    },
    key_benefit: "Streamlined Legal Operations & Enhanced Client Service",
    overview_des: "Sheria360 is a comprehensive legal management software platform designed to help law firms and legal departments manage all aspects of their practice. From case management and client relations to document handling and billing, Sheria360 provides an integrated solution that streamlines legal operations and enhances client service delivery.",
    features: [
      {
        title: "Case Management",
        description: "Comprehensive case tracking and management with timeline views, task management, and deadline tracking.",
        icon: "fas fa-briefcase"
      },
      {
        title: "Client Management",
        description: "Centralized client database with contact management, communication history, and relationship tracking.",
        icon: "fas fa-users"
      },
      {
        title: "Document Management",
        description: "Secure document storage, version control, and template management for legal documents.",
        icon: "fas fa-file-contract"
      },
      {
        title: "Time & Billing",
        description: "Accurate time tracking and automated billing with customizable invoicing and payment tracking.",
        icon: "fas fa-clock"
      }
    ],
    benefits: [
      {
        title: "Efficiency",
        description: "Streamline legal operations and reduce administrative overhead with automated workflows."
      },
      {
        title: "Client Satisfaction",
        description: "Improve client communication and service delivery with better case visibility and management."
      },
      {
        title: "Compliance",
        description: "Ensure compliance with legal practice requirements and maintain proper documentation."
      }
    ],
    overview_list: [
      "Case Management: Track and manage all case activities, deadlines, and milestones",
      "Client Relations: Maintain comprehensive client databases and communication histories",
      "Document Handling: Secure document storage and management with version control",
      "Billing & Accounting: Time tracking, invoicing, and financial management"
    ],
    challenge_des: "Legal practices require efficient management of cases, clients, documents, and billing. Manual processes and disconnected systems create inefficiencies and potential for errors. Sheria360 provides an integrated platform that addresses these challenges.",
    faqs: [],
    testimonials: []
  }
};

export default productDetailsData;

