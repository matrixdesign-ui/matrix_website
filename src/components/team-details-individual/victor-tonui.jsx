import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import CheckboxIcon from '@/src/svg/checkbox-icon';
import LocationIconThree from '@/src/svg/location-icon-3';
import React from 'react';
import Image from 'next/image';
import CtaArea from "../contact/cta-area";

import team_img_5 from "../../../public/assets/img/team/team-4-5.png";

const VictorTonui = () => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo title="Victor Tonui" innertitle="Electronics Engineer" team_details={true} />
                        <div className="team-details-area pt-100 pb-100">
                           <div className="container">
                              <div className="row justify-content-center">
                                 <div className="col-xl-10">
                                    <div className="team-details-wrapper">
                                       <div className="row">
                                          <div className="col-xl-4">
                                             <div className="team-details-img-box text-center">
                                                <div className="team-details-img">
                                                   <Image src={team_img_5} alt="Victor Tonui" />
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
                                                <h3 className="team-details-client-title">Victor Tonui</h3>
                                                <h4 className="team-details-client-role">Elec & Electronics Engineer (Automation & Systems Integration)</h4>
                                                <div className="team-details-expricence-box d-flex align-items-center">
                                                   <div className="team-details-expricence-box-1">
                                                       <span>Role:</span> <br />
                                                       <em>Electronics Engineer</em>
                                                   </div>
                                                   <div className="team-details-expricence-box-1">
                                                       <span>Experience:</span> <br />
                                                       <em>9+ years</em>
                                                   </div>
                                                </div>
                                                <div className="team-details-skill">
                                                   <h5>Expertise Areas:</h5>
                                                   <span>Electrical Design</span>
                                                   <span>Automation Systems</span>
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
                                          <h4 className="team-details-title">About Victor Tonui</h4>
                                          <p>As Electronics Engineer specializing in Automation & Systems Integration, Victor Tonui brings 9+ years of expertise in electrical automation and systems integration. He specializes in designing and implementing complex electronic systems that optimize operational efficiency.</p>
                                       </div>
                                       <div className="team-details-feature-list">
                                          <ul>
                                          <li>Designing and implementing electrical automation systems</li>
                                          <li>Leading integration projects for complex electronic systems</li>
                                          <li>Developing control systems and automation solutions</li>
                                          </ul>
                                          <p>Victor has successfully designed and deployed numerous automation systems, including electrical control panels, SCADA systems, and industrial automation solutions. His expertise in electrical engineering and systems integration ensures that Matrix delivers reliable, efficient, and scalable solutions for various industrial and commercial applications.</p>
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

export default VictorTonui;