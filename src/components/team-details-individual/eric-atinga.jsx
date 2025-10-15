import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import CheckboxIcon from '@/src/svg/checkbox-icon';
import EmailFive from '@/src/svg/email-5';
import LocationIconThree from '@/src/svg/location-icon-3';
import ShareIcon from '@/src/svg/share-icon';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CtaArea from "../contact/cta-area";

import team_img_2 from "../../../public/assets/img/team/team-4-2.png";

const team_details_content = {
    name: "Eric Atinga",
    title: "CTO - ICT Innovation & Software",
    feature_list: [
        <>Leading ICT innovation and software development initiatives</>,
        <>Designing scalable software architectures and cloud solutions</>,
        <>Managing software development teams and technical implementations</>,
    ],
    expricence: [
        {id: 1, title: "Role:", info: "Chief Technology Officer"},
        {id: 2, title: "Experience:", info: "12+ years"},
    ],
    skill_title: "Expertise Areas:",
    details_skill: ["Software Development", "ICT Innovation", "System Architecture"],
    membur_about_title: "About Eric Atinga",
    about_info_1: <>As CTO of ICT Innovation & Software, Eric Atinga spearheads Matrix's software development and technological innovation efforts. With over 12 years of experience in software engineering and ICT solutions, he specializes in developing innovative software solutions that address complex business challenges.</>,
    about_info_2: <>Eric has led the development of numerous CRM systems, helpdesk platforms, and custom software solutions. His expertise in modern programming languages, cloud computing, and agile development methodologies ensures that Matrix delivers cutting-edge solutions that are scalable, secure, and user-friendly. He holds certifications in software architecture and has been instrumental in integrating emerging technologies like AI and machine learning into business solutions.</>
}
const {
    name,
    title,
    feature_list,
    expricence,
    skill_title,
    details_skill,
    membur_about_title,
    about_info_1,
    about_info_2
}  = team_details_content

const EricAtinga = () => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo title={name} innertitle={title} team_details={true} />
                        <div className="team-details-area pt-100 pb-100">
                           <div className="container">
                              <div className="row justify-content-center">
                                 <div className="col-xl-10">
                                    <div className="team-details-wrapper">
                                       <div className="row">
                                          <div className="col-xl-4 col-lg-4 col-md-4">
                                             <div className="team-details-img-box text-center">
                                                <div className="team-details-img">
                                                   <Image src={team_img_2} alt="Eric Atinga" />
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
                                                   <span>Nairobi, Kenya</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xl-8 col-lg-8 col-md-8">
                                             <div className="team-details-info-box">
                                                <h3 className="team-details-client-title">{name}</h3>
                                                <h4 className="team-details-client-role">{title}</h4>
                                                <div className="team-details-contact-box d-flex align-items-center">
                                                   <div className="team-details-social-info">
                                                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                                                   </div>
                                                   <div className="team-details-personal-info">
                                                      <Link href="#">
                                                         <EmailFive />
                                                         <span>Contact</span>
                                                      </Link>
                                                      <Link href="#">
                                                         <ShareIcon />
                                                         <span>Share</span>
                                                      </Link>
                                                   </div>
                                                </div>
                                                <div className="team-details-expricence-box d-flex align-items-center">
                                                   {expricence.map((item, i) =>
                                                      <div key={i} className="team-details-expricence-box-1">
                                                         <span>{item.title}</span> <br />
                                                         <em>{item.info}</em>
                                                      </div>
                                                   )}
                                                </div>
                                                <div className="team-details-skill">
                                                   <h5>{skill_title}</h5>
                                                   {details_skill.map((item, i)  => <span key={i}>{item}</span>)}
                                                </div>
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
                                          <h4 className="team-details-title">{membur_about_title}</h4>
                                          <p>{about_info_1}</p>
                                       </div>
                                       <div className="team-details-feature-list">
                                          <ul>
                                          {feature_list.map((item, i) => <li key={i}>{item}</li>)}
                                          </ul>
                                          <p>{about_info_2}</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         </div>
                        <CtaArea />
                    </main>
                    <FooterFive style_contact={true} style_team={true} />
                </div>
            </div>
        </>
    );
};

export default EricAtinga;