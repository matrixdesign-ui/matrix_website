const projectData = [
    {
        id: 9,
        title: "Internet Connectivity and Infrastructure"
    },
    {
        id: 1,
        title: "Legal Management System (LMS)"
    },
    {
        id: 2,
        title: "Electronic Board Management (E-Board)"
    },
    {
        id: 3,
        title: "AI Powered Video Surveillance Systems"
    },
    {
        id: 4,
        title: "Mobile Assets Management System"
    },
    {
        id: 5,
        title: "ICT Infrastructure & Connectivity"
    },
    {
        id: 6,
        title: "Enterprise IT Helpdesk System"
    },
    {
        id: 7,
        title: "Unified Emergency Mass Notification"
    },
    {
        id: 8,
        title: "Access Control Systems"
    }
];

console.log("Project slugs generated from project data:");
projectData.forEach(project => {
    const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    console.log(`${project.title} => ${slug}`);
});