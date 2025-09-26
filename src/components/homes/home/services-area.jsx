import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import service_data from '@/src/data/service-data'; //Commented out old import
import RightArrow from '@/src/svg/right-arrow';

import img from "../../../../public/assets/img/service/sv-dashbord.png"

const service_content = {
    title: "Our Expertise",
    sub_title: <>Delivering comprehensive solutions across diverse industries</>,

    bg_img: "/assets/img/service/sv-bg.jpg",
    title_2: <>Customized Solutions for Your Needs</>,
    des: <>We tailor our services to meet your specific business challenges and goals.</>,
    btn_text: "Explore Our Solutions",
}
const { title, sub_title, bg_img, title_2, des, btn_text } = service_content

// New service data for Matrix Vision Systems


const ServicesArea = () => {
    let titleRef = useRef(null)

    useTitleAnimation(titleRef)
    return (
        <>
            <div className="tp-service__area p-relative fix">
                <div className="tp-service__grey-shape grey-bg"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div ref={titleRef} className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                                <h2 className="tp-section-title">{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {service_data.slice(0, 5).map((item, i) =>
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                                <div className="tp-service__item mb-30">
                                    <div className="tp-service__icon">
                                        <Image src={item.img} alt="theme-pure" width={80} height={80} />
                                    </div>
                                    <div className="tp-service__content">
                                        <h3 className="tp-service__title-sm tp-yellow-color"><Link href={item.link || "#"}>{item.title}</Link></h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tp-service__link">
                                        <Link href={item.link || "#"}>
                                            <RightArrow />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                            <div className="tp-service__dashboard"
                                style={{ backgroundImage: `url(${bg_img})` }} >
                                <div className="tp-service__top-content">
                                    <h3 className="tp-service__title-white">{title_2}</h3>
                                    <p>{des}</p>
                                    <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/service">
                                        <span>{btn_text}</span>
                                        <b></b>
                                    </Link>
                                </div>
                                <div className="tp-service__dashdboard-sm-img">
                                    <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s"
                                        src={img} alt="theme-pure" width={270} height={240} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesArea;
