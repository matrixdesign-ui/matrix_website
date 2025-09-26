import ContactUsForm from '@/src/forms/contact-us-form';
import SendIcon from '@/src/svg/send-icon';
import Link from 'next/link';
import React from 'react';

import img from "../../../public/assets/img/contact/contact-icon-sm-4.png";
import Image from 'next/image';


const contact_content  = {
    sub_title: "REACH OUT",
    tilte: <>Let's Start a Conversation <br /> About Your Needs! {" "}<span> <SendIcon /> </span> {" "}</>,
    info: <>Our team is ready to help you find the right solutions. Tell us about your project, and we'll get back to you promptly.</> ,
}
const {sub_title, tilte, info}  =  contact_content


const ContactFormArea = () => {
    return (
        <>
            <div className="contact-form-area pb-120">
               <div className="container">
                  <div className="row gx-0">
                     <div className="col-xl-5 col-lg-6">
                        <div className="contact-form-left">
                           <div className="contact-form-section-box pb-80">
                              <h5 className="inner-section-subtitle">{sub_title}</h5>
                              <h4 className="tp-section-title pb-10">{tilte}</h4>
                              <p>{info}</p>
                           </div>
                           <div className="contact-form-social-box p-relative">
                              <div className="contact-form-social-item">
                                 <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                 <Link href="#"><i className="fab fa-twitter"></i></Link>
                                 <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                 <Link href="#"><i className="fab fa-instagram"></i></Link>
                              </div>
                              <div className="contact-form-section-img">
                                 <Image src={img} alt="theme-pure" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-6">
                        <div className="contact-form-right-warp">
                           <div className="postbox__comment-form">
                            <ContactUsForm includeServiceDropdown={true} /> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ContactFormArea;