import service_data from '@/src/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"


const service_content = {
    // UPDATED: Main section title to reflect Matrix's broad offering
    title: "Leading Engineering and Tech Solutions for a Smarter, Secured Future",
    
    // UPDATED: Call-to-action button text
    btn_text: "Explore All Solutions",
 
    bg_img: "/assets/img/service/service-3-bg.png",
    
    // UPDATED: Featured service title (Highlighting E-Board/Governance)
    service_title: "Corporate Governance Solutions",
    
    // UPDATED: Featured service info (Highlighting E-Board function from profile)
    service_info: "Secure, Paperless Board Meetings and Executive Communications",

    // ADDED: Key for the specific service detail link
    service_key: "e-board" 
}

// NOTE: The de-structured variables below are retained for the component's logic
// but the component code itself is not included in this edit as requested.
const {title, btn_text, bg_img, service_title, service_info, service_key}  = service_content


const ServiceArea = () => {
    // ... Component logic (omitted as requested)
    
    // --- NOTE ON LINKING:
    // To correctly link the featured block, the "service_key" must be used in the Link components:
    // <Link href={`/service-details?service=${service_key}`}>
    // ...
    
    return (
        <>
            <div className="tp-service-area pb-120 z-index">
               <div className="container">
                   <div className="row">
                      <div className="col-xl-12">
                          <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                              <h3 className="tp-section-title tp-title-anim">{title}</h3>
                               <Link className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight" 
                                   data-wow-duration=".9s" 
                                   data-wow-delay=".3s" 
                                   href="/service"> {/* Updated to main /service page */}
                                   <span>{btn_text}</span>
                                   <b></b>
                               </Link>
                          </div>
                      </div>
                   </div>
                   <div className="row">

                      {/* FEATURED SERVICE BLOCK */}
                      <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                          <div className="tp-service-3-item mb-30 p-relative z-index" style={{backgroundImage: `url(${bg_img})`}}>
                              <div className="tp-service-3-icon">
                                  <Image src={service_icon_1} alt="theme-pure" />
                              </div>
                              <div className="tp-service-3-content">
                                  <span>{service_title}</span>
                                  <h4 className="tp-service-3-title-sm">
                                      {/* LINK UPDATE REQUIRED: Should use service_key: */}
                                      <Link href={`/services/${service_key}`}>{service_info}</Link></h4>
                              </div>
                              <div className="tp-service-3-btn">
                                  {/* LINK UPDATE REQUIRED: Should use service_key: */}
                                  <Link className="tp-btn-white-solid" href={`/services/${service_key}`}>Learn More</Link>
                              </div>
                              <div className="tp-service-3-shape">
                                  <Image src={service_icon_2} alt="theme-pure" />
                              </div>
                          </div>
                      </div>

                      {/* SMALL SERVICE CARDS */}
                      {service_data.slice(17, 24).map((item, i)  => 
                          <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                  <div className="tp-service-sm-icon">
                                      {item.icon}
                                  </div>
                                  <div className="tp-service-sm-content">
                                      <span>{item.title}</span>
                                      <h3 className="tp-service-sm-title">
                                         <Link href={item.key ? `/services/${item.key}` : "/service-details"} style={{ textDecoration: 'none', color: 'inherit' }}>
                                           {item.title}
                                         </Link>
                                      </h3>
                                      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>
                                        {typeof item.description === 'string' ? item.description : 'Learn more about this service'}
                                      </p>
                                      <div className="tp-service-sm-link">
                                         <Link href={item.key ? `/services/${item.key}` : "/service-details"}>Learn More <i className="far fa-arrow-right"></i></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )} 
                   </div>
               </div>
            </div>
        </>
    );
};

export default ServiceArea;