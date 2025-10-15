// Project data titles
const projectTitles = [
  "Internet Connectivity and Infrastructure",
  "Legal Management System (LMS)",
  "Electronic Board Management (E-Board)",
  "AI Powered Video Surveillance Systems",
  "Mobile Assets Management System",
  "ICT Infrastructure & Connectivity",
  "Enterprise IT Helpdesk System",
  "Unified Emergency Mass Notification",
  "Access Control Systems"
];

// Project details keys (updated)
const projectKeys = [
  'internet-connectivity-and-infrastructure',
  'legal-management-system-lms',
  'electronic-board-management-e-board',
  'ai-powered-video-surveillance-systems',
  'mobile-assets-management-system',
  'ict-infrastructure--connectivity', // Fixed: double hyphen
  'enterprise-it-helpdesk-system',
  'unified-emergency-mass-notification',
  'access-control-systems'
];

console.log("Project Title => Generated Slug => Match Status");
console.log("================================================");

projectTitles.forEach((title, index) => {
  // Generate slug the same way as in the project page
  const generatedSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  const expectedKey = projectKeys[index];
  const match = generatedSlug === expectedKey ? "✓" : "✗";
  
  console.log(`${title} => ${generatedSlug} => ${match}`);
});