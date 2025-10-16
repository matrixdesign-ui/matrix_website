import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import CheckboxIcon from '@/src/svg/checkbox-icon';
import LocationIconThree from '@/src/svg/location-icon-3';
import React from 'react';
import Image from 'next/image';
import CtaArea from "../contact/cta-area";

import team_img_3 from "../../../public/assets/img/team/team-4-3.png";

const RobertMwongera = () => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo title="Robert Mwongera" innertitle="Elec & Software Eng. (Software, Automation & Systems Integration)" team_details={true} />
                        <div className="team-details-area pt-100 pb-100">
                           <div className="container">
                              <div className="row justify-content-center">
                                 <div className="col-xl-10">
                                    <div className="team-details-wrapper">
                                       <div className="row">
                                          <div className="col-xl-4">
                                             <div className="team-details-img-box text-center">
                                                <div className="team-details-img">
                                                   <Image src={team_img_3} alt="Robert Mwongera" />
                                                </div>
                                                <div className="team-details-work-tag">
                                                   <span><CheckboxIcon /></span>
                                                   <span>Available for Projects</span>
                                                </div>
                                                <div className="team-details-work-location">
                                                   <span><LocationIconThree /></span>
                                                   <span>Nairobi, Kenya</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xl-8">
                                             <div className="team-details-info-box">
                                                <h3 className="team-details-client-title">Robert Mwongera</h3>
                                                <h4 className="team-details-client-role">Elec & Software Eng. (Software, Automation & Systems Integration)</h4>
                                                <div className="team-details-expricence-box d-flex align-items-center">
                                                   <div className="team-details-expricence-box-1">
                                                       <span>Role:</span> <br />
                                                       <em>Electronics & Software Engineer</em>
                                                   </div>
                                                   <div className="team-details-expricence-box-1">
                                                       <span>Experience:</span> <br />
                                                       <em>10+ years</em>
                                                   </div>
                                                </div>
                                                <div className="team-details-skill">
                                                   <h5>Expertise Areas:</h5>
                                                   <span>Embedded Systems</span>
                                                   <span>Automation</span>
                                                   <span>Systems Integration</span>
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
                                          <h4 className="team-details-title">About Robert Mwongera</h4>
                                          <p>As Electronics & Software Engineer specializing in Software, Automation & Systems Integration, Robert Mwongera brings over 10 years of experience in developing embedded systems and automation solutions. He specializes in integrating hardware and software components to create robust, scalable automation systems.</p>
                                       </div>
                                       <div className="team-details-feature-list">
                                          <ul>
                                          <li>Developing embedded systems and automation solutions</li>
                                          <li>Integrating hardware and software for industrial applications</li>
                                          <li>Leading technical implementations of automation systems</li>
                                          </ul>
                                          <p>Robert has successfully implemented numerous automation projects, including industrial control systems, IoT solutions, and custom embedded applications. His expertise in microcontroller programming, PLC systems, and SCADA platforms ensures that Matrix delivers cutting-edge automation solutions that optimize industrial processes and improve operational efficiency.</p>
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

export default RobertMwongera;