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

import team_img_1 from "../../../public/assets/img/team/team-4-1.png";

const team_details_content = {
    name: "Mogeni Enock Osano (Eng)",
    title: "Technical Director & CEO",
    feature_list: [
        <>Leading strategic technology initiatives and innovation across the organization</>,
        <>Driving digital transformation and implementing cutting-edge software solutions</>,
        <>Managing high-level partnerships and overseeing technical project execution</>,
    ],
    expricence: [
        {id: 1, title: "Role:", info: "Technical Director & CEO"},
        {id: 2, title: "Experience:", info: "15+ years"},
    ],
    skill_title: "Expertise Areas:",
    details_skill: ["Strategic Leadership", "Software Architecture", "Digital Transformation"],
    membur_about_title: "About Mogeni Enock Osano (Eng)",
    about_info_1: <>As Technical Director and CEO, Mogeni Enock Osano (Eng) leads Matrix's technological innovation and business strategy. With over 15 years of experience in software development, systems integration, and technology leadership, he has been instrumental in transforming businesses through innovative technology solutions. His expertise spans across software architecture, cloud computing, and digital transformation initiatives.</>,
    about_info_2: <>Under his leadership, Matrix has developed comprehensive solutions including CRM systems, helpdesk platforms, electronic board management systems, and advanced security solutions. He holds multiple engineering certifications and has led numerous successful technology implementations across various industries, focusing on scalable, secure, and efficient solutions that drive business growth.</>
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

const MogeniEnockOsanoEng = () => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo title={title} innertitle={name} team_details={true} />
                        <div className="team-details-area pt-100 pb-100">
                           <div className="container">
                              <div className="row justify-content-center">
                                 <div className="col-xl-10">
                                    <div className="team-details-wrapper">
                                       <div className="row">
                                          <div className="col-xl-4 col-lg-4 col-md-4">
                                             <div className="team-details-img-box text-center">
                                                <div className="team-details-img">
                                                   <Image src={team_img_1} alt="Mogeni Enock Osano" />
                                                </div>
                                                <div className="team-details-work-tag">
                                                   <span>
                                                      <CheckboxIcon />
                                                   </span>
                                                   <span>Available for Consulting</span>
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

export default MogeniEnockOsanoEng;
