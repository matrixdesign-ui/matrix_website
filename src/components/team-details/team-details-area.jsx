import CheckboxIcon from '@/src/svg/checkbox-icon';
import EmailFive from '@/src/svg/email-5';
import LocationIconThree from '@/src/svg/location-icon-3';
import ShareIcon from '@/src/svg/share-icon';
import React from 'react';


import team_img from "../../../public/assets/img/team/team-details-1.jpg";
import Image from 'next/image';
import Link from 'next/link';


const team_details_content = {
    name: "Imdat Cimsit",
    feature_list: [
        <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
        <>Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />dignissim</>,
        <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>,
    ],
    expricence: [
        {id: 1, title: "Role:", info: "Design"},
        {id: 2, title: "Experience:", info: "14 years"},
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Interaction Design", "User Research", "Figma"],
    membur_about_title: "About Imdat Cimsit",
    about_info_1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 </>,
    about_info_2: <>Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Posuere morbi leo urna molestie.
    </>,
}
const {
    name, 
    feature_list, 
    expricence,  
    skill_title, 
    details_skill, 
    membur_about_title, 
    about_info_1, 
    about_info_2
}  = team_details_content

const TeamDetailsArea = ({ teamMember }) => {
    // Use teamMember data if provided, otherwise fall back to default content
    const memberData = teamMember || {
        name: "Team Member",
        job_title: "Position",
        img: team_img,
        experience: "N/A",
        location: "Location",
        email: "email@matrixvision.co.ke",
        phone: "+254 700 000 000",
        education: "Education Details",
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        about: "About this team member...",
        achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
        certifications: ["Certification 1", "Certification 2"],
        languages: ["English"]
    };

    return (
        <>
            <div className="team-details-area pt-100 pb-100">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-10">
                        <div className="team-details-wrapper">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                 <div className="team-details-img-box text-center">
                                    <div className="team-details-img">
                                       <Image src={memberData.img || team_img} alt={`${memberData.name} - ${memberData.job_title}`} />
                                    </div>
                                    <div className="team-details-work-tag">
                                       <span> 
                                          <CheckboxIcon />
                                       </span>
                                       <span>Available for Projects</span>
                                    </div>
                                    <div className="team-details-work-location">
                                       <span> 
                                          <LocationIconThree />
                                       </span>
                                       <span>{memberData.location || "Nairobi, Kenya"}</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                 <div className="team-details-info-box">
                                    <h3 className="team-details-client-title">{memberData.name}</h3>
                                    <p className="mb-3 text-muted" style={{fontSize: '16px', fontWeight: '500'}}>{memberData.job_title}</p>
                                    <div className="team-details-contact-box d-flex align-items-center mb-4">
                                       <div className="team-details-social-info">
                                          <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                          <Link href="#"><i className="fab fa-twitter"></i></Link>
                                          <Link href={memberData.linkedin || "#"}><i className="fab fa-linkedin-in"></i></Link>
                                          <Link href="#"><i className="fab fa-instagram"></i></Link>
                                       </div>
                                       <div className="team-details-personal-info">
                                          <Link href={`mailto:${memberData.email}`}> 
                                             <EmailFive />
                                             <span>Email</span>
                                          </Link>
                                          <Link href={`tel:${memberData.phone}`}> 
                                             <ShareIcon />
                                             <span>Call</span>
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="team-details-expricence-box d-flex align-items-center mb-4">
                                       <div className="team-details-expricence-box-1">
                                          <span>Experience:</span> <br />
                                          <em>{memberData.experience || "N/A"}</em>
                                       </div>
                                       <div className="team-details-expricence-box-1">
                                          <span>Education:</span> <br />
                                          <em style={{fontSize: '14px'}}>{memberData.education || "N/A"}</em>
                                       </div>
                                    </div>
                                    <div className="team-details-skill mb-4">
                                       <h5>Core Skills:</h5>
                                       {(memberData.skills || []).map((skill, i) => <span key={i}>{skill}</span>)} 
                                    </div>
                                    {memberData.certifications && memberData.certifications.length > 0 && (
                                       <div className="team-details-skill mb-4">
                                          <h5>Certifications:</h5>
                                          {memberData.certifications.map((cert, i) => <span key={i} style={{backgroundColor: '#e8f4f8'}}>{cert}</span>)} 
                                       </div>
                                    )}
                                    {memberData.languages && memberData.languages.length > 0 && (
                                       <div className="team-details-skill">
                                          <h5>Languages:</h5>
                                          {memberData.languages.map((lang, i) => <span key={i} style={{backgroundColor: '#f0f8e8'}}>{lang}</span>)} 
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div> 
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-xl-8 col-lg-10">
                        <div className="team-details-text-wrapper pt-80">
                           <div className="team-details-text">
                              <h4 className="team-details-title">About {memberData.name}</h4>
                              <p>{memberData.about || "Information about this team member..."}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <h5 className="mb-3">Key Achievements:</h5>
                              <ul>
                              {(memberData.achievements || []).map((achievement, i) => <li key={i}>{achievement}</li>)} 
                              </ul>
                              <p style={{marginTop: '30px'}}>With extensive experience and proven expertise, {memberData.name} continues to drive innovation and excellence in their role at Matrix Vision Systems, contributing to our mission of delivering cutting-edge technology solutions.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        </>
    );
};

export default TeamDetailsArea;