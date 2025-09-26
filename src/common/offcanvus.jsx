import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenus from '../layout/headers/mobile-menus';
 
// images import 
import logo from "../../public/assets/img/logo/logo-white.png"

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                    <button className="close-btn" onClick={() => setSidebarOpen(false)}><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Image src={logo} alt="Matrix Vision Systems" />
                    </Link>
                    </div>
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>
                    <div className="tpoffcanvas__info text-center">
                    <h4 className="offcanva-title">Contact Us</h4>
                    <Link href="https://www.google.com/maps/place/Muguga+Green,+Nairobi/@-1.2670336,36.7852327,17z" target="_blank">
                        Mais. 7, B.S.K. Village, <br />
                        Muguga Greens, Westlands, Nairobi
                    </Link>
                    <br />
                    <Link href="mailto:info@matrixsystems.co.ke">info@matrixsystems.co.ke</Link>
                    <br />
                    <Link href="tel:+254721779429">+254 721 779 429</Link>
                    </div>
                    <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                        <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen &&  "apply"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Offcanvus;