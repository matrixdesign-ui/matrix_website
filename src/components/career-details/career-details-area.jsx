import ClockIcon from '@/src/svg/clock-icon';
import LocationIconThree from '@/src/svg/location-icon-3';
import NiceSelect from '@/src/ui/nice-select';
import Link from 'next/link';
import React,{useState} from 'react';


const career_contents = {
    'intern-of-elec-electronics-engineer': {
        sub_title: "Engineering",
        title: "Intern: Elec & Electronics Engineer (Automation & Systems Integration)",
        location: "Nairobi, Kenya",
        type: "Internship",
        level: "Entry Level",
        job_post_details: [
            {
                id: 1, 
                cls: "mb-45",
                title: "Job Responsibilities",
                description: <>As an Electrical & Electronics Engineering Intern, you will work closely with our senior engineers on automation and systems integration projects. You'll gain hands-on experience in designing, implementing, and maintaining automated systems for various industrial applications.</>,
                experiences: [
                    <>Assist in the design and development of automation systems</>,
                    <>Support the integration of electrical and electronic components</>,
                    <>Participate in testing and commissioning of automated systems</>,
                    <>Document technical specifications and system designs</>,
                    <>Collaborate with cross-functional teams on project implementation</>,
                    <>Troubleshoot and resolve technical issues in existing systems</>
                ],
            },
            {
                id: 2, 
                cls: "mb-45",
                title: "Job Requirements",
                description: <>We are looking for a motivated Electrical & Electronics Engineering student or recent graduate who is passionate about automation and systems integration.</>,
                experiences: [
                    <>Currently pursuing or recently completed a degree in Electrical & Electronics Engineering</>,
                    <>Basic understanding of automation systems and control theory</>,
                    <>Familiarity with PLC programming (preferred)</>,
                    <>Knowledge of electrical circuit design and analysis</>,
                    <>Strong problem-solving skills and attention to detail</>,
                    <>Excellent communication and teamwork abilities</>
                ],
            },
            {
                id: 3, 
                cls: "mb-45",
                title: "Our Benefits",
                description: <>As an intern at Matrix Vision Systems, you'll gain valuable industry experience while working on cutting-edge technology projects.</>,
                experiences: [
                    <>Hands-on experience with real-world projects</>,
                    <>Mentorship from experienced engineers</>,
                    <>Exposure to latest automation technologies</>,
                    <>Flexible working hours to accommodate academic schedule</>,
                    <>Potential for future employment opportunities</>,
                    <>Certificate of completion</>
                ],
            },
            {
                id: 4, 
                cls: "",
                title: "Education & Experience",
                description: <>Applicants should be currently enrolled in or have recently completed a Bachelor's degree in Electrical & Electronics Engineering or related field.</>,
            },
        ]
    },
    'administrative-assistant-corporate-software-sales': {
        sub_title: "Administrative",
        title: "Administrative Assistant – Corporate Software Sales",
        location: "Nairobi, Kenya",
        type: "Full-time",
        level: "Entry Level",
        fuzu_url: "https://www.fuzu.com/kenya/jobs/administrative-assistant-corporate-software-sales-matrix-vision-systems-ltd-c0c60504",
        job_post_details: [
            {
                id: 1, 
                cls: "mb-45",
                title: "About the Company",
                description: <>Matrix Visions Systems is a leading technology company providing engineering, security, and software-integrated solutions. We are committed to driving smarter technology interoperability in businesses across Africa and beyond. We focus on being a reliable partner and resource to our customers, offering a variety of value-added services designed to help your business run efficiently. Powered by deep expertise and diverse technical know-how, we deliver innovation that sets new standards.</>,
            },
            {
                id: 2, 
                cls: "mb-45",
                title: "Position Overview",
                description: <>We are seeking a highly organised and proactive Administrative Assistant to provide essential support to our corporate software sales team. This role ensures smooth day-to-day operations by managing administrative tasks, coordinating schedules, handling documentation, and supporting internal and external communications. The Administrative Assistant will be a key partner in enabling the sales team to focus on driving business growth.</>,
            },
            {
                id: 3, 
                cls: "mb-45",
                title: "Key Responsibilities",
                description: <></>,
                experiences: [
                    <>Manage calendars, schedule meetings, and coordinate travel arrangements for the team</>,
                    <>Prepare, format, and distribute reports, presentations, and meeting materials</>,
                    <>Maintain organized filing systems (digital and physical) for contracts, proposals, and client records</>,
                    <>Carry out research into various companies, concepts and people as may be required</>,
                    <>Accounting, bookkeeping and petty cash management</>,
                    <>Mine opportunities on EGP, MyGov and other Public Procurement related sites and portals</>,
                    <>Assist in tracking sales leads, updating CRM systems, and monitoring pipeline activities</>,
                    <>Support proposal preparation and ensure timely submission of documents</>,
                    <>Coordinate logistics for client meetings, demos, and workshops</>,
                    <>Scour different tender boards for opportunities</>,
                    <>Act as the first point of contact for internal and external inquiries</>,
                    <>Draft and manage correspondence, including emails, memos, and meeting notes</>,
                    <>Liaise with other departments (finance, HR, IT) to ensure smooth workflow</>,
                    <>Ensure proper documentation of contracts, agreements, and compliance records</>,
                    <>Support statutory and regulatory reporting requirements</>,
                    <>Maintain confidentiality and data integrity in all administrative processes</>
                ],
            },
            {
                id: 4, 
                cls: "mb-45",
                title: "Qualifications",
                description: <></>,
                experiences: [
                    <>Bachelor's degree in Business Administration, Office Management, or related field</>,
                    <>1+ years of experience in administrative support, preferably in a corporate or sales environment</>,
                    <>Proficiency in MS Office Suite (Word, Excel, PowerPoint) and familiarity with CRM tools</>,
                    <>Strong organisational skills with attention to detail</>,
                    <>Excellent communication and interpersonal skills</>,
                    <>Ability to multitask and prioritise effectively in a fast-paced environment</>
                ],
            },
            {
                id: 5, 
                cls: "mb-45",
                title: "Key Competencies",
                description: <></>,
                experiences: [
                    <>Highly organized and detail-oriented</>,
                    <>Strong problem-solving and coordination skills</>,
                    <>Professional demeanor with excellent customer service orientation</>,
                    <>Adaptable and resourceful in handling multiple tasks</>,
                    <>Team player with a proactive mindset</>
                ],
            },
            {
                id: 6, 
                cls: "mb-45",
                title: "Why You'd Be a Good Fit",
                description: <>This role is ideal for professionals who enjoy supporting dynamic teams and ensuring smooth operations, have a knack for organization, documentation, and process efficiency, thrive in environments where multitasking and prioritization are key, value collaboration and can bridge communication between departments and clients, and want to contribute to the success of a growing corporate software sales organisation by enabling the team to focus on strategic goals.</>,
            },
            {
                id: 7, 
                cls: "mb-45",
                title: "Impact of the Role",
                description: <>By providing reliable administrative support, the Administrative Assistant will enhance team productivity and efficiency, ensure accurate documentation and compliance, strengthen client and stakeholder confidence through professional coordination, and contribute to the overall success of the corporate software sales division.</>,
            },

        ]
    },
    'business-development-associate-corporate-software-sales': {
        sub_title: "Business Development",
        title: "Business Development Associate – Corporate Software Sales",
        location: "Nairobi, Kenya",
        type: "Full-time",
        level: "Mid Level",
        fuzu_url: "https://www.fuzu.com/kenya/jobs/business-development-associate-corporate-software-sales-matrix-vision-systems-ltd",
        job_post_details: [
            {
                id: 1, 
                cls: "mb-45",
                title: "About the Company",
                description: <>Matrix Visions Systems is a leading technology company providing engineering, security, and software-integrated solutions. We are committed to driving smarter technology interoperability in businesses across Africa and beyond. We focus on being a reliable partner and resource to our customers, offering a variety of value-added services designed to help your business run efficiently. Powered by deep expertise and diverse technical know-how, we deliver innovation that sets new standards.</>,
            },
            {
                id: 2, 
                cls: "mb-45",
                title: "Position Overview",
                description: <>We are seeking a dynamic and results-driven Business Development Associate to spearhead growth in our corporate software sales division. This role is responsible for identifying new business opportunities, building strategic partnerships, and driving revenue growth through consultative sales of enterprise-grade software solutions.</>,
            },
            {
                id: 3, 
                cls: "mb-45",
                title: "Key Responsibilities",
                description: <></>,
                experiences: [
                    <>Develop and execute sales strategies to penetrate corporate accounts across multiple industries</>,
                    <>Identify, qualify, and close new business opportunities in enterprise software solutions</>,
                    <>Achieve and exceed quarterly and annual sales targets</>,
                    <>Mine opportunities on EGP, MyGov and other Public Procurement related sites and portals</>,
                    <>Build and maintain strong relationships with C-level executives, IT decision-makers, and procurement teams</>,
                    <>Conduct needs assessments and deliver tailored software solutions that align with client objectives</>,
                    <>Negotiate contracts and manage the end-to-end sales cycle</>,
                    <>Research and analyze industry trends, competitor offerings, and emerging technologies</>,
                    <>Provide feedback to product and marketing teams to refine offerings and positioning</>,
                    <>Represent the company at industry events, conferences, and networking forums</>,
                    <>Work closely with pre-sales, technical, and customer success teams to ensure seamless solution delivery</>,
                    <>Prepare accurate sales forecasts, pipeline reports, and performance dashboards</>,
                    <>Contribute to strategic planning and business development initiatives</>
                ],
            },
            {
                id: 4, 
                cls: "mb-45",
                title: "Qualifications",
                description: <></>,
                experiences: [
                    <>Bachelor's degree in Business, Marketing, Communication, Commerce, IT, or any other related field (MBA is an added advantage)</>,
                    <>3+ years of experience in enterprise software sales or business development</>,
                    <>Proven track record of meeting and exceeding sales targets in B2B environments</>,
                    <>Strong understanding of corporate IT ecosystems (ERP, CRM, cloud, SaaS, cybersecurity, etc.)</>,
                    <>Excellent communication, negotiation, and presentation skills</>,
                    <>Ability to build trust and credibility with senior stakeholders</>,
                    <>Strong understanding of EGP and the Public procurement cycle</>
                ],
            },
            {
                id: 5, 
                cls: "mb-45",
                title: "Key Competencies",
                description: <></>,
                experiences: [
                    <>Strategic thinker with strong analytical skills</>,
                    <>Self-motivated and results-oriented</>,
                    <>Skilled in consultative selling and solution-based approaches</>,
                    <>Strong networking and relationship-building abilities</>,
                    <>Comfortable working in fast-paced, target-driven environments</>
                ],
            },
            {
                id: 6, 
                cls: "mb-45",
                title: "Why You'd Be a Good Fit",
                description: <>This role is ideal for professionals who thrive in enterprise sales environments and enjoy building long-term client partnerships, have a consultative approach to selling, focusing on solving client challenges with tailored software solutions, are motivated by targets and growth opportunities, with a proven ability to exceed expectations, value collaboration across teams and can bridge technical solutions with business needs, and want to make a tangible impact by driving transformation in corporate organizations.</>,
            },
            {
                id: 7, 
                cls: "mb-45",
                title: "Impact of the Role",
                description: <>By driving corporate software adoption, the Business Development Associate will expand market share and revenue streams, strengthen client relationships and long-term partnerships, and position the company as a trusted provider of enterprise technology solutions.</>,
            },
            {
                id: 8, 
                cls: "mb-45",
                title: "Contract Period",
                description: <>The contract will be issued on an annual basis, with renewal contingent upon the candidate's successful achievement of agreed-upon Key Performance Indicators (KPIs). Performance will be reviewed at the end of each contract year, and continuation of the engagement will depend on meeting or exceeding the set targets.</>,
            },

        ]
    }
};

const CareerDetailsArea = ({ id }) => {
    // Default content if no ID is provided or ID is not found
    const career_content = id && career_contents[id] ? career_contents[id] : {
        sub_title: "Developer",
        title: "Senior Frontend Developer",
        location: "London, UK",
        type: "Full-time",
        level: "Senior",
        job_post_details: [
            {
                id: 1, 
                cls: "mb-45",
                title: "Job Responsibilities",
                description: <>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum,anything embarrassing hidden.</>, 
            },
            {
                id: 2, 
                cls: "mb-45",
                title: "Job Requirements",
                description: <>There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable. If you are going to use a passage
                of Lorem Ipsum,anything embarrassing hidden.</>,
                experiences: [
                    <>5+ years experience in backend engineering, <br />
                    ideally in Python or Node</>,
                    <>Experience building and operating backend <br />
                    distributed systems</>,
                    <>Experience designing serverless architectures <br />
                    on AWS infrastructure</>, 

                ],
            },
            {
                id: 3, 
                cls: "mb-45",
                title: "Our Benefits",
                description: <>Now, the paradigm has shifted. The question is not why you should include
                a content marketing strategy.</>,
                experiences: [
                    <>Flexible hours</>,
                    <>Unlimited PTO</>,
                    <>Medical insurance</>,
                    <>Career growth</>,

                ],
            },
            {
                id: 4, 
                cls: "mb-20",
                title: "Job Requirements",
                description: <>There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable. If you are going to use a passage
                of Lorem Ipsum,anything embarrassing hidden.</>,
                experiences: [
                    <>Experience building software and systems that balance <br /> simplicity,
                    flexibility, and security.</>,
                    <>Track record with a smart contract language <br /> such as Solidity</>,
                    <>A customer-focused and product-focused mindset.</>,
                    

                ],
            },
            {
                id: 5, 
                cls: "",
                title: "Education & Experience",
                description: <>Bachelors Degree in Interaction, Graphic Design, Media Arts or similar.</>, 
            },

        ]
    };
    
    const {sub_title, title, location, type, level, job_post_details, fuzu_url}  = career_content;
    const [isOpen, setIsOpen]  = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [experienceValue, setExperienceValue] = useState('');
    const applyHandler = () =>{
        if (fuzu_url) {
            window.open(fuzu_url, '_blank', 'noopener,noreferrer');
        } else {
            setIsOpen(true);
        }
    }

    const selectHandler = (value) => {
        setExperienceValue(value);
    };


    return (
        <>
            <div className="career-details-area career-border-bottom pt-110 pb-110">
               <div className="container">
                  <div className="row align-content-start">
                     <div className="col-xl-7 col-lg-7">
                        <div className="career-details-wrapper">
                           {/* Back button */}
                           <div className="mb-30">
                              <Link href="/career" className="tp-btn-inner tp-btn-hover alt-color-orange">
                                 <span>
                                    <i className="fal fa-arrow-left"></i> Back to Careers
                                 </span>
                                 <b></b>
                              </Link>
                           </div>
                           
                           <div className="career-details-title-box">
                              <span>{sub_title}</span>
                              <h4 className="career-details-title">{title}</h4>
                           </div>
                           <div className="career-details-location-box">
                              <span> 
                                 <LocationIconThree />
                                 {location}
                              </span>
                              <span> 
                                 <ClockIcon />
                                 {type}
                              </span>
                              <span>{level}</span>
                           </div>
                           {job_post_details.map((item, i)  => 
                              <div key={i} className={`career-details-job-responsiblity ${item.cls}`}>
                              <h4 className="career-details-title-sm">{item.title}</h4>
                              <p className="pb-15">{item.description}</p>
                              {item.experiences && 
                              <div className="career-details-job-list">
                                 <ul>
                                 {item?.experiences?.map((list , index)  =>
                                    <li key={index}> 
                                          <i className="fal fa-long-arrow-right"></i>
                                             {list}
                                    </li>
                                 )} 
                                 </ul>
                              </div>
                              }
                           </div>
                              )
                           } 
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 career-details-pin">
                        <div className="col-xxl-12">
                           <div className="postbox__apply-btn-border">
                              <div id="my-btn" className="postbox__apply-btn-box">
                                 {!isOpen && 
                                 <button onClick={() => applyHandler()} className="submit-btn mb-50 w-100" 
                                 >{fuzu_url ? 'Apply on Fuzu' : 'Apply For This Job'}</button>
                                 }
                              </div>
                           </div>
                        </div>
                        {isOpen &&
                        <div id="show" className="career-details-hide-wrapper" >
                        
                           <form onSubmit={(e) => {
                                e.preventDefault();
                                setIsSubmitting(true);
                                setSubmitMessage('');
                                
                                // Get form data
                                const formData = new FormData(e.target);
                                // Add experience value manually since NiceSelect doesn't directly support it
                                if (experienceValue) {
                                    formData.append('experience', experienceValue);
                                }
                                
                                // For static export, we'll just show the data that would be sent
                                // In a real implementation with a backend, this would send to Victor.Tonui@matrixsystems.co.ke
                                const formEntries = {};
                                for (let [key, value] of formData.entries()) {
                                    formEntries[key] = value;
                                }
                                
                                console.log('Career Application Data:', formEntries);
                                
                                // Simulate API call delay
                                setTimeout(() => {
                                    setIsSubmitting(false);
                                    setSubmitMessage('Thank you! Your application has been submitted successfully. We will contact you soon.');
                                    
                                    // Reset form on success
                                    if (true) { // Simulating success
                                        e.target.reset();
                                        setExperienceValue('');
                                    }
                                }, 1500);
                           }}>
                           <div className="career-details-apply-info-box pb-10">
                              <div className="career-details-profile-box pb-20">
                                 <h4 className="career-details-title-xs">Profile</h4>
                                 <p>Basic information about you</p>
                              </div>
                              <div className="postbox__comment-form">
                                 <div className="box">
                                    <div className="row gx-20">
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" name="fullName" className="inputText" required />
                                             <span className="floating-label">Full  Name</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="email" name="email" className="inputText" required />
                                             <span className="floating-label">Your Email</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="tel" name="phone" className="inputText" required />
                                             <span className="floating-label">Phone</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-35">
                                             <input type="text" name="address" className="inputText" required />
                                             <span className="floating-label">Address</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="career-details-apply-info-box">
                              <div className="career-details-profile-box pb-20">
                                 <h4 className="career-details-title-xs">Application Details</h4>
                                 <p>Summarize your relevant experience</p>
                              </div>
                              <div className="postbox__comment-form">
                                 <div className="box">
                                    <div className="row gx-20">
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" name="linkedin" className="inputText" required />
                                             <span className="floating-label">LinkedIn Profile</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" name="website" className="inputText" />
                                             <span className="floating-label">Personal website</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__select mb-30"> 
                                             <NiceSelect
                                             options={[
                                             { value: "", text: "Years of Experience" },
                                             { value: "0", text: "No Experience" },
                                             { value: "1", text: "1 Year" },
                                             { value: "2", text: "2 Years" },
                                             { value: "3", text: "3 Years" },
                                             { value: "4", text: "4 Years" },
                                             { value: "5+", text: "5+ Years" },
                                             ]}
                                             defaultCurrent={0}
                                             onChange={selectHandler}
                                             />
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-35">
                                             <input type="text" name="salary" className="inputText" required />
                                             <span className="floating-label">Expected salary</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__authorization-title-box">
                                    <h5 className="career-details-title-xs pb-15">Kenya Work Authorization<span>*</span></h5>
                                 </div>
                                 <div className="postbox__authorization p-relative">
                                    <div className="switcher mb-15">
                                       <label htmlFor="toggle-0">
                                          <small className="switcher-icon"> 
                                             Are you legally authorized to work in <br /> Kenya?
                                          </small>
                                          <input type="checkbox" id="toggle-0" name="workAuthorization" />
                                          <span><small></small></span>
                                       </label>
                                    </div>
                                    <div className="switcher">
                                       <label htmlFor="toggle-1">
                                          <small className="switcher-icon"> 
                                             Do you or will you require sponsorship for a Kenyan <br /> employment permit?
                                          </small>
                                          <input type="checkbox" id="toggle-1" name="visaRequired" />
                                          <span><small></small></span>
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__comment-input mb-30">
                                    <textarea name="personalNote" className="textareaText" required ></textarea>
                                    <span className="floating-label-2">Personal note</span>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__resume-title-box">
                                    <h5 className="career-details-title-xs pb-15">Upload a recent resume or CV</h5>
                                 </div>
                                 <div className="postbox__resume mb-30">
                                    <input id="cv" name="cv" type="file" hidden />
                                    <label htmlFor="cv">
                                       <span> 
                                          Drag to upload your resume, or browse
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__btn-box mb-50">
                                    <button 
                                      type="submit" 
                                      className="submit-btn w-100"
                                      disabled={isSubmitting}
                                    >
                                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                    {submitMessage && (
                                      <div className={`mt-20 ${submitMessage.includes('Thank you!') ? 'text-success' : 'text-danger'}`}>
                                        {submitMessage}
                                      </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                           </form>

                        </div>
                        }
                        <div className="col-xxl-12">
                           <div className="career-details-social-box mb-20">
                              <Link className="facebook" href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link className="twitter" href="#"><i className="fab fa-twitter"></i></Link>
                              <Link className="instagram p-relative" href="#">
                                 <div className="insta-bg"></div>
                                 <i className="fab fa-instagram"></i>
                              </Link>
                              <Link className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></Link>
                           </div>
                           <div className="career-details-bottom-text text-center">
                              <Link href="#">Employee at Matrix?</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CareerDetailsArea;