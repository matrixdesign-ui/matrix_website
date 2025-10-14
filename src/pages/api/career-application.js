import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Parse form data
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    
    // Set upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Create upload directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    form.uploadDir = uploadDir;

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Process the form data
    const formData = {};
    Object.keys(fields).forEach(key => {
      formData[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key];
    });

    let filePath = null;
    let fileName = null;
    if (files.cv) {
      const file = Array.isArray(files.cv) ? files.cv[0] : files.cv;
      filePath = file.filepath;
      fileName = file.originalFilename;
      formData.fileName = fileName;
    }

    // Create email content
    let emailContent = `
New Career Application Received
===============================

Position: Intern of Elec & Electronics Engineer (Automation & Systems Integration)

Applicant Details:
------------------
Full Name: ${formData.fullName || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Address: ${formData.address || 'N/A'}

Application Details:
--------------------
LinkedIn Profile: ${formData.linkedin || 'N/A'}
Personal Website: ${formData.website || 'N/A'}
Years of Experience: ${formData.experience || 'N/A'}
Expected Salary: ${formData.salary || 'N/A'}

Work Authorization:
-------------------
Legally authorized to work in Kenya: ${formData.workAuthorization ? 'Yes' : 'No'}
Requires visa sponsorship: ${formData.visaRequired ? 'Yes' : 'No'}

Personal Note:
--------------
${formData.personalNote || 'N/A'}
`;

    // Log the application data to console (in a real implementation, this would send an email)
    console.log('=== NEW CAREER APPLICATION ===');
    console.log(emailContent);
    console.log('==============================');
    
    if (filePath) {
      console.log(`CV File Uploaded: ${fileName}`);
      console.log(`File Location: ${filePath}`);
      console.log('==============================');
    }

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Clean up uploaded file after processing
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Respond with success
    res.status(200).json({ 
      message: 'Thank you! Your application has been submitted successfully. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error processing career application:', error);
    res.status(500).json({ 
      message: 'Oops! Something went wrong and we couldn\'t send your application. Please try again later.' 
    });
  }
}