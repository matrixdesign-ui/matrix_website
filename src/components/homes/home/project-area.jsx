import project_data from '@/src/data/project-data';
import RightArrow from '@/src/svg/right-arrow';

// Helper function to map project titles to correct slugs
const getProjectSlug = (title) => {
  const titleToSlug = {
    'Internet Connectivity and Infrastructure': 'internet-connectivity-infrastructure',
    'Legal Management System (LMS)': 'legal-management-system-lms',
    'Electronic Board Management (E-Board)': 'electronic-board-management-e-board',
    'AI Powered Video Surveillance Systems': 'ai-powered-video-surveillance-systems',
    'Mobile Assets Management System': 'mobile-assets-management-system',
    'ICT Infrastructure & Connectivity': 'ict-infrastructure-connectivity',
    'Enterprise IT Helpdesk System': 'enterprise-it-helpdesk-system',
    'Unified Emergency Mass Notification': 'unified-emergency-mass-notification',
    'Smart Access Control System': 'smart-access-control-system'
  };
  
  return titleToSlug[title] || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
};
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
   loop: true,
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 30,
   breakpoints: {
      '1200': {
         slidesPerView: 3,
      },
      '992': {
         slidesPerView: 1,
      },
      '768': {
         slidesPerView: 1,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },

   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
}

const ProjectArea = () => {
   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };
   return (
      <>
         <div className="tp-project__area grey-bg pt-50 pb-110 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="tp-project__section-box wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <h3 className="tp-section-title">Discover What We've Been Building for Our Partners.</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid gx-0">
               <div className="row gx-0">
                  <div className="col-xl-12">
                     <div className="tp-project__slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container tp-project__slider-active ${isDragged ? "dragged" : ""
                              }`}>
                           {project_data.map((item, i) =>
                              <SwiperSlide
                                 key={i}
                                 className="swiper-slide wow tpfadeUp"
                                 data-wow-duration=".9s"
                                 data-wow-delay={item.delay}
                              >
                                 <div className="tp-project__slider-wrapper">
                                    <div className="tp-project__item d-flex align-items-center">
                                       <div className="tp-project__thumb">
                                          <Image src={item.img_1} alt="theme-pure" />
                                       </div>
                                       <div className="tp-project__content">
                                          <div className="tp-project__brand-icon">
                                             <Image src={item.img_2} alt="theme-pure" />
                                          </div>
                                          <div className="tp-project__title-box">
                                             <h4 className="tp-project__title-sm">
                                                <Link
                                                   href={`/project-details/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}
                                                >
                                                   {item.title}
                                                </Link>
                                             </h4>
                                             <p>{item.description}</p>
                                          </div>
                                          <div className="tp-project__meta d-flex align-items-center">
                                             <div className="tp-project__author-info">
                                                <span>Client Name</span>
                                                <h4>{item.client_name}</h4>
                                             </div>
                                             <div className="tp-project__budget">
                                                <span>Status</span>
                                                <h4>{item.status}</h4>
                                             </div>

                                             <div className="tp-project__link">
                                                <Link
                                                   href={`/project-details/${getProjectSlug(item.title)}`}
                                                >
                                                   <RightArrow />
                                                </Link>
                                             </div>

                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           )}
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectArea;
