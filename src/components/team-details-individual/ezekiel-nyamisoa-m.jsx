import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import CheckboxIcon from '@/src/svg/checkbox-icon';
import LocationIconThree from '@/src/svg/location-icon-3';
import React from 'react';
import Image from 'next/image';
import CtaArea from "../contact/cta-area";

import team_img_4 from "../../../public/assets/img/team/team-4-4.png";

const EzekielNyamisoaM = () => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo title="Ezekiel Nyamisoa M." innertitle="Head Technician" team_details={true} />
                        <div className="team-details-area pt-100 pb-100">
                           <div className="container">
                              <div className="row justify-content-center">
                                 <div className="col-xl-10">
                                    <div className="team-details-wrapper">
                                       <div className="row">
                                          <div className="col-xl-4">
                                             <div className="team-details-img-box text-center">
                                                <div className="team-details-img">
                                                   <Image src={team_img_4} alt="Ezekiel Nyamisoa M." />
                                                </div>
                                                <div className="team-details-work-tag">
                                                   <span><CheckboxIcon /></span>
                                                   <span>Available for Support</span>
                                                </div>
                                                <div className="team-details-work-location">
                                                   <span><LocationIconThree /></span>
                                                   <span>Nairobi, Kenya</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xl-8">
                                             <div className="team-details-info-box">
                                                <h3 className="team-details-client-title">Ezekiel Nyamisoa M.</h3>
                                                <h4 className="team-details-client-role">Head Technician (Engineering Unit)</h4>
                                                <div className="team-details-expricence-box d-flex align-items-center">
                                                   <div className="team-details-expricence-box-1">
                                                       <span>Role:</span> <br />
                                                       <em>Engineering Technician</em>
                                                   </div>
                                                   <div className="team-details-expricence-box-1">
                                                       <span>Experience:</span> <br />
                                                       <em>8+ years</em>
                                                   </div>
                                                </div>
                                                <div className="team-details-skill">
                                                   <h5>Expertise Areas:</h5>
                                                   <span>Technical Support</span>
                                                   <span>Equipment Maintenance</span>
                                                   <span>Quality Control</span>
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
                                          <h4 className="team-details-title">About Ezekiel Nyamisoa M.</h4>
                                          <p>As Head Technician of the Engineering Unit, Ezekiel Nyamisoa M. oversees Matrix's technical operations and equipment maintenance. With over 8 years of experience in technical engineering, he ensures that all engineering equipment and systems operate optimally.</p>
                                       </div>
                                       <div className="team-details-feature-list">
                                          <ul>
                                          <li>Providing technical support and maintenance services</li>
                                          <li>Managing engineering equipment and technical operations</li>
                                          <li>Ensuring quality control and technical compliance</li>
                                          </ul>
                                          <p>Ezekiel specializes in preventative maintenance, equipment calibration, and technical troubleshooting. He has been instrumental in maintaining Matrix's engineering standards and ensuring that all technical solutions meet quality and safety requirements. His expertise spans across various technical domains, providing comprehensive support for both hardware and software systems.</p>
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

export default EzekielNyamisoaM;