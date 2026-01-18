import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const cta_content ={ 
     bg_img: "/assets/img/cta/cta-bg.jpg",
     title: "Ready to Transform Your Business?",
     description: <>Ready to elevate your business? Let's start the conversation.</>,
     btn_text: "Get a Free Consultation",
}
const {bg_img, title, description, btn_text}  = cta_content

const CtaArea = ({ animate = false }) => {
    const ctaRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (!animate || !ctaRef.current) return;

        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            // Animate CTA section
            if (contentRef.current) {
                gsap.from(contentRef.current.children, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }
        }, ctaRef);

        return () => ctx.revert();
    }, [animate]);

    return (
        <>
            <div ref={ctaRef} className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div ref={contentRef} className="tp-cta-content tp-inner-font text-center">
                              <h3 ref={titleRef} className="tp-section-title text-white">{title}</h3>
                              <p ref={descRef}>{description}</p>
                              <Link ref={buttonRef} className="tp-btn-inner tp-btn-hover alt-color-black hero-btn-orange" href="/contact">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <style jsx>{`
                .hero-btn-orange {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%) !important;
                    color: white !important;
                    box-shadow: 0 4px 14px 0 rgba(249, 115, 22, 0.4);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    position: relative;
                    z-index: 10;
                }
                
                .hero-btn-orange:hover {
                    background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%) !important;
                    box-shadow: 0 6px 20px 0 rgba(249, 115, 22, 0.5);
                    transform: translateY(-2px);
                }
                
                .hero-btn-orange span {
                    color: white !important;
                    position: relative;
                    z-index: 5;
                }
                
                .hero-btn-orange span::after {
                    content: ' →';
                    display: inline-block;
                    margin-left: 0.5rem;
                    transition: transform 0.3s ease;
                }
                
                .hero-btn-orange:hover span::after {
                    transform: translateX(4px);
                }
            `}</style>
        </>
    );
};

export default CtaArea;