import { CopyRight } from '@/src/common/social-links';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
// img import 
import footer_logo from "../../../public/assets/img/logo/logo-black.png";


const footer_content = {
    address: <>Mais. 7, B.S.K. Village, Muguga Green, <br />Westlands, Nairobi</>,
    phone: "+254 721 779 429",
    email: "info@matrixsystems.co.ke",

      copy_right: <>Copyright & Design By Matrix Vision Systems – {new Date().getFullYear()}</>,
    footer_lisks : [
        {
            id: 1,
            cls: "footer-col-2-2", 
            title: "Services",
            delay: ".5s",
            links: [
                {name: "Software Solutions", link: "/services/software-applications"},
                {name: "Security Systems", link: "/services/security-operational-safety"},
                {name: "IT Infrastructure", link: "/services/infrastructure-development"},
                {name: "Consulting", link: "/service"},
                {name: "Support", link: "/contact"},
            ]
        },
        {
            id: 2,
            cls: "footer-col-2-3",
            title: "Company",
            delay: ".7s",
            links: [
                {name: "About Us", link: "/about"},
                {name: "Services", link: "/service"},
                {name: "Projects", link: "/project"},
                {name: "Blog", link: "/blog"},
                {name: "Contact Us", link: "/contact"},
            ]
        },

    ],
    social_links : [
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fab fa-facebook-f", 
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fab fa-twitter", 
        },
        {
          link: "http://www.linkedin.com",
          target: "_blank",
          icon: "fab fa-linkedin-in", 
        }, 
      ], 
}
const {address, phone, email, footer_lisks, social_links}  =  footer_content

const FooterTwo = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    return (
        <>
    <footer> 
    <div className="tp-footer__pl-pr grey-bg-2">
      <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                     <div className="tp-footer__logo mb-25">
                        <Link href="/">
                           <Image src={footer_logo} alt="Matrix Vision Systems"/>
                        </Link>
                     </div>
                     <div className="tp-footer__contact-info">
                        <Link href="https://www.google.com/maps/place/Muguga+Green,+Nairobi/@-1.2670336,36.7852327,17z"
                           target="_blank">{address}</Link>
                        <ul>
                           <li>
                              <span>
                              <PhoneTwo /> 
                              </span>
                              <Link className="first-child" href={`tel:${phone}`}>{phone}</Link>
                           </li>
                           <li>
                              <span>
                              <EmailTwo /> 
                              </span>
                              <Link href={`mailto:${email}`}>{email}</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               {footer_lisks.map((item, i)  => 
                  <div key={i} className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <div className={`tp-footer__widget footer-widget-2 ${item.cls}`}>
                     <h4 className="tp-footer__widget-title">{item.title}</h4>
                     <div className="tp-footer__content">
                        <ul>
                           {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li> ) }                        
                        </ul>
                     </div>
                  </div>
               </div>
               )} 

            </div>
         </div>
      </div>
      <div className="tp-copyright__area pt-20 pb-20">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social">
                  
                     {social_links.map((l, i) => (
                           <Link
                           key={i}
                           href={l.link} 
                           target={l.target ? l.target : ""}
                           >
                           <i className={l.icon}></i>
                           </Link>
                        ))} 
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6  d-none d-md-block">
                  <div className="tp-copyright__text tp-copyright__text-2 text-center">
                     <span><CopyRight /></span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div
                     className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>

</footer>
        </>
    );
};

export default FooterTwo;
