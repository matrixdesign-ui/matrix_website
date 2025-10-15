import team_img_1 from  "../../public/assets/img/team/team-4-1.png"
import team_img_2 from  "../../public/assets/img/team/team-4-2.png"
import team_img_3 from  "../../public/assets/img/team/team-4-3.png"
import team_img_4 from  "../../public/assets/img/team/team-4-4.png"
import team_img_5 from  "../../public/assets/img/team/team-4-5.png"
import team_img_6 from  "../../public/assets/img/team/team-4-6.png"
import team_img_7 from  "../../public/assets/img/team/team-4-7.png"
import team_img_8 from  "../../public/assets/img/team/team-4-8.png"

const team_data = [
    {
        id: 1, 
        cls: 1,
        img: team_img_1,
        name: "Mogeni Enock Osano (Eng)",
        job_title:  "Technical Director & CEO",
        experience: "15+ years",
        location: "Nairobi, Kenya",
        email: "mogeni@matrixvision.co.ke",
        phone: "+254 700 123 456",
        linkedin: "https://linkedin.com/in/mogeni-osano",
        education: "Bachelor of Engineering in Electrical & Electronics",
        skills: ["Strategic Leadership", "Technical Innovation", "Project Management", "Systems Integration", "Digital Transformation", "Team Building"],
        about: "Mogeni Enock Osano is the Technical Director and CEO of Matrix Vision Systems, bringing over 15 years of comprehensive experience in engineering and technology leadership. He specializes in strategic planning, technical innovation, and driving digital transformation initiatives across various industries. His vision and leadership have been instrumental in establishing Matrix Vision Systems as a leading technology solutions provider.",
        achievements: [
            "Led multiple successful digital transformation projects for Fortune 500 companies",
            "Pioneered innovative solutions in data analytics and automation systems",
            "Expert in systems integration and enterprise solutions architecture",
            "Established strategic partnerships with international technology vendors",
            "Mentored over 50 engineers and technical professionals"
        ],
        certifications: ["PMP - Project Management Professional", "AWS Solutions Architect", "Microsoft Azure Expert"],
        languages: ["English", "Swahili", "French"]
    },
    {
        id: 2, 
        cls: 2,
        img: team_img_2,
        name: "Eric Atinga",
        job_title:  "CTO - ICT Innovation & Software",
        experience: "12+ years",
        location: "Nairobi, Kenya",
        email: "eric@matrixvision.co.ke",
        phone: "+254 700 234 567",
        linkedin: "https://linkedin.com/in/eric-atinga",
        education: "Master of Science in Computer Science",
        skills: ["Software Development", "ICT Innovation", "Cloud Architecture", "Team Leadership", "DevOps", "Microservices"],
        about: "Eric Atinga serves as the Chief Technology Officer, leading our ICT innovation and software development initiatives. With over 12 years of experience in software engineering and technology leadership, he drives our technical strategy and innovation roadmap. His expertise spans from full-stack development to enterprise architecture and emerging technologies.",
        achievements: [
            "Architected scalable cloud-based solutions serving over 1M users",
            "Led development of cutting-edge fintech applications",
            "Expert in modern software development methodologies and DevOps practices",
            "Implemented CI/CD pipelines reducing deployment time by 80%",
            "Published 15+ technical articles and spoke at 10+ tech conferences"
        ],
        certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional", "Certified Kubernetes Administrator"],
        languages: ["English", "Swahili", "Spanish"]
    },
    {
        id: 3, 
        cls: 3,
        img: team_img_3,
        name: "Robert Mwongera",
        job_title:  "Elec & Software Eng. (Software, Automation & Systems Integration)",
        experience: "10+ years",
        location: "Nairobi, Kenya",
        email: "robert@matrixvision.co.ke",
        phone: "+254 700 345 678",
        linkedin: "https://linkedin.com/in/robert-mwongera",
        education: "Bachelor of Engineering in Electrical & Software Engineering",
        skills: ["Electrical Engineering", "Software Development", "Automation Systems", "Systems Integration", "IoT Solutions", "PLC Programming"],
        about: "Robert Mwongera is a skilled Electrical and Software Engineer specializing in automation and systems integration. He brings a unique blend of hardware and software expertise to create comprehensive solutions for our clients. His innovative approach to bridging traditional electrical systems with modern software solutions has been crucial to many successful projects.",
        achievements: [
            "Designed and implemented complex automation systems for 20+ manufacturing facilities",
            "Expert in electrical and software system integration across multiple industries",
            "Led multiple successful industrial automation projects worth $2M+",
            "Developed custom IoT solutions for smart building management",
            "Reduced operational costs by 30% through automation implementations"
        ],
        certifications: ["Certified Automation Professional (CAP)", "Siemens PLC Programming", "Schneider Electric Certified"],
        languages: ["English", "Swahili"]
    },
    {
        id: 4, 
        cls: 4,
        img: team_img_4,
        name: "Ezekiel Nyamisoa M.",
        job_title:  "Head Technician (Engineering Unit)",
        experience: "8+ years",
        location: "Nairobi, Kenya",
        email: "ezekiel@matrixvision.co.ke",
        phone: "+254 700 456 789",
        linkedin: "https://linkedin.com/in/ezekiel-nyamisoa",
        education: "Diploma in Electrical & Electronics Engineering",
        skills: ["Technical Support", "System Maintenance", "Quality Assurance", "Team Coordination", "Hardware Troubleshooting", "Network Setup"],
        about: "Ezekiel Nyamisoa serves as the Head Technician for our Engineering Unit, ensuring the highest standards of technical excellence and system reliability. His hands-on expertise and attention to detail are crucial to our operations. He leads a team of technicians and ensures all installations meet our quality standards.",
        achievements: [
            "Maintained 99.5%+ system uptime across all client installations",
            "Led technical training programs for 30+ junior technicians",
            "Implemented quality assurance protocols reducing errors by 60%",
            "Managed technical support for 100+ enterprise clients",
            "Developed maintenance schedules reducing system downtime by 40%"
        ],
        certifications: ["CompTIA A+", "Cisco CCNA", "Microsoft Certified Professional"],
        languages: ["English", "Swahili"]
    },
    {
        id: 5, 
        cls: 1,
        img: team_img_5,
        name: "Victor Tonui",
        job_title:  "Elec & Electronics Engineer (Automation & Systems Integration)",
        experience: "7+ years",
        location: "Nairobi, Kenya",
        email: "victor@matrixvision.co.ke",
        phone: "+254 700 567 890",
        linkedin: "https://linkedin.com/in/victor-tonui",
        education: "Bachelor of Engineering in Electrical & Electronics",
        skills: ["Electronics Engineering", "Automation Systems", "Control Systems", "IoT Solutions", "SCADA Systems", "Industrial Networks"],
        about: "Victor Tonui is an experienced Electrical and Electronics Engineer specializing in automation and systems integration. He focuses on developing innovative solutions that bridge the gap between traditional systems and modern technology. His expertise in control systems and IoT solutions has transformed numerous industrial processes.",
        achievements: [
            "Developed IoT-based monitoring solutions for 25+ industrial clients",
            "Specialist in control systems and automation technologies for smart factories",
            "Led integration projects for smart building systems worth $1.5M+",
            "Implemented energy management systems reducing costs by 25%",
            "Designed custom SCADA solutions for water treatment facilities"
        ],
        certifications: ["Certified Control Systems Technician", "Rockwell Automation Certified", "Honeywell Process Solutions"],
        languages: ["English", "Swahili"]
    },
    {
        id: 6, 
        cls: 2,
        img: team_img_6,
        name: "Sarah Johnson",
        job_title: "Senior Systems Analyst & Business Intelligence Specialist",
        experience: "9+ years",
        location: "Nairobi, Kenya",
        email: "sarah@matrixvision.co.ke",
        phone: "+254 700 678 901",
        linkedin: "https://linkedin.com/in/sarah-johnson-matrix",
        education: "Master of Science in Information Systems",
        skills: ["Business Intelligence", "Data Analytics", "Systems Analysis", "Database Design", "Power BI", "SQL Server"],
        about: "Sarah Johnson is our Senior Systems Analyst and Business Intelligence Specialist, bringing deep expertise in data analytics and business process optimization. She specializes in transforming complex data into actionable business insights and designing efficient information systems that drive organizational success.",
        achievements: [
            "Designed BI solutions that improved decision-making efficiency by 45%",
            "Led data migration projects for 15+ enterprise clients",
            "Developed automated reporting systems saving 200+ hours monthly",
            "Expert in database optimization reducing query times by 60%",
            "Implemented data governance frameworks for Fortune 500 companies"
        ],
        certifications: ["Microsoft Certified: Azure Data Scientist", "Tableau Desktop Specialist", "Google Analytics Certified"],
        languages: ["English", "Swahili", "French"]
    },
    {
        id: 7, 
        cls: 3,
        img: team_img_7,
        name: "Michael Chen",
        job_title: "Senior Software Developer & DevOps Engineer",
        experience: "11+ years",
        location: "Nairobi, Kenya",
        email: "michael@matrixvision.co.ke",
        phone: "+254 700 789 012",
        linkedin: "https://linkedin.com/in/michael-chen-dev",
        education: "Bachelor of Science in Computer Engineering",
        skills: ["Full-Stack Development", "DevOps", "Cloud Architecture", "Microservices", "Docker", "Kubernetes"],
        about: "Michael Chen is our Senior Software Developer and DevOps Engineer with extensive experience in building scalable applications and robust deployment pipelines. His expertise spans from front-end development to cloud infrastructure, ensuring our solutions are both user-friendly and technically sound.",
        achievements: [
            "Built and deployed 30+ enterprise applications serving millions of users",
            "Reduced deployment time by 85% through CI/CD pipeline optimization",
            "Led cloud migration projects saving clients 40% in infrastructure costs",
            "Expert in containerization and microservices architecture",
            "Mentored 20+ junior developers in modern development practices"
        ],
        certifications: ["AWS Certified DevOps Engineer", "Docker Certified Associate", "Certified Kubernetes Administrator"],
        languages: ["English", "Mandarin", "Swahili"]
    },
    {
        id: 8, 
        cls: 1,
        img: team_img_8,
        name: "Dr. Priscilla Wanjiku",
        job_title: "Technical Consultant & Research Director",
        experience: "13+ years",
        location: "Nairobi, Kenya",
        email: "priscilla@matrixvision.co.ke",
        phone: "+254 700 890 123",
        linkedin: "https://linkedin.com/in/dr-priscilla-wanjiku",
        education: "PhD in Computer Science, MSc in Information Technology",
        skills: ["Technical Consulting", "Research & Development", "AI/ML Solutions", "Strategic Planning", "Innovation Management", "Academic Partnerships"],
        about: "Dr. Priscilla Wanjiku serves as our Technical Consultant and Research Director, leading our R&D initiatives and maintaining strategic partnerships with academic institutions. With a PhD in Computer Science, she drives innovation in AI/ML solutions and ensures our technology stack remains at the cutting edge of industry developments.",
        achievements: [
            "Published 25+ research papers in top-tier computer science journals",
            "Led AI/ML research projects funded by international organizations",
            "Established partnerships with 10+ universities for technology transfer",
            "Developed proprietary algorithms improving system efficiency by 50%",
            "Secured $2M+ in research grants for innovation projects"
        ],
        certifications: ["Google Cloud Professional ML Engineer", "NVIDIA Deep Learning Institute Certified", "IBM Watson Certified"],
        languages: ["English", "Swahili", "German"]
    },
    // New team members
    {
        id: 9, 
        cls: 2,
        img: team_img_1, // Reusing existing image as placeholder
        name: "Ronald Ochieng",
        job_title: "Technical Solution Engineer",
        experience: "5+ years",
        location: "Nairobi, Kenya",
        email: "ronald@matrixvision.co.ke",
        phone: "+254 700 111 222",
        linkedin: "https://linkedin.com/in/ronald-ochieng",
        education: "Bachelor of Science in Computer Engineering",
        skills: ["Technical Solutions", "System Design", "Client Support", "Troubleshooting", "Network Administration"],
        about: "Ronald Ochieng is a skilled Technical Solution Engineer with expertise in designing and implementing technical solutions for enterprise clients. He specializes in understanding client requirements and translating them into effective technical implementations.",
        achievements: [
            "Implemented solutions for 30+ enterprise clients",
            "Reduced issue resolution time by 40%",
            "Developed custom integration solutions for complex systems",
            "Trained 50+ clients on technical implementations",
            "Maintained 99% client satisfaction rating"
        ],
        certifications: ["Microsoft Certified Solutions Associate", "Cisco Certified Network Associate"],
        languages: ["English", "Swahili"]
    },
    {
        id: 10, 
        cls: 3,
        img: team_img_2, // Reusing existing image as placeholder
        name: "Morris Kitana",
        job_title: "UX/UI Designer",
        experience: "4+ years",
        location: "Nairobi, Kenya",
        email: "morris@matrixvision.co.ke",
        phone: "+254 700 333 444",
        linkedin: "https://linkedin.com/in/morris-kitana",
        education: "Bachelor of Arts in Graphic Design",
        skills: ["User Experience Design", "User Interface Design", "Prototyping", "User Research", "Visual Design"],
        about: "Morris Kitana is a creative UX/UI Designer focused on creating intuitive and engaging user experiences. He combines aesthetic sensibility with user-centered design principles to create interfaces that are both beautiful and functional.",
        achievements: [
            "Designed interfaces for 20+ web and mobile applications",
            "Improved user engagement by 60% through design optimization",
            "Created design systems used across multiple products",
            "Conducted user research for 15+ projects",
            "Won 2 design awards for innovative interface solutions"
        ],
        certifications: ["Adobe Certified Expert", "UX Design Professional"],
        languages: ["English", "Swahili"]
    },
    {
        id: 11, 
        cls: 4,
        img: team_img_3, // Reusing existing image as placeholder
        name: "Yvonne Kituku",
        job_title: "Accounts and Finance",
        experience: "6+ years",
        location: "Nairobi, Kenya",
        email: "yvonne@matrixvision.co.ke",
        phone: "+254 700 555 666",
        linkedin: "https://linkedin.com/in/yvonne-kituku",
        education: "Bachelor of Commerce in Accounting",
        skills: ["Financial Management", "Accounting", "Budgeting", "Financial Reporting", "Tax Compliance"],
        about: "Yvonne Kituku is our Accounts and Finance specialist, responsible for managing all financial operations and ensuring compliance with accounting standards. She brings expertise in financial planning, reporting, and analysis to support strategic decision-making.",
        achievements: [
            "Streamlined accounting processes reducing month-end close by 30%",
            "Implemented financial controls saving the company 15% in operational costs",
            "Prepared accurate financial reports for stakeholders",
            "Ensured 100% compliance with tax regulations",
            "Managed annual audit processes with zero findings"
        ],
        certifications: ["CPA (Kenya)", "Certified Financial Planner"],
        languages: ["English", "Swahili"]
    },
    {
        id: 12, 
        cls: 1,
        img: team_img_4, // Reusing existing image as placeholder
        name: "Assnette Lusasi",
        job_title: "Office Admin",
        experience: "3+ years",
        location: "Nairobi, Kenya",
        email: "assnette@matrixvision.co.ke",
        phone: "+254 700 777 888",
        linkedin: "https://linkedin.com/in/assnette-lusasi",
        education: "Diploma in Business Administration",
        skills: ["Office Management", "Administrative Support", "Event Coordination", "Communication", "Organization"],
        about: "Assnette Lusasi is our Office Administrator, ensuring smooth day-to-day operations of our office. She manages administrative tasks, coordinates events, and provides essential support to all team members.",
        achievements: [
            "Improved office efficiency through process optimization",
            "Coordinated 50+ company events and meetings",
            "Managed vendor relationships reducing office costs by 20%",
            "Implemented document management system saving 100+ hours annually",
            "Maintained 100% employee satisfaction with administrative services"
        ],
        certifications: ["Certified Administrative Professional"],
        languages: ["English", "Swahili"]
    }
];

export default team_data