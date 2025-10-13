import React from 'react';
import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import Image from 'next/image';
import Link from 'next/link';

// office location data
const office_data = [
    {
        id: 1,
        cls:"p-relative",
        img: img_1,
        badge: "Main Office",
        location: "Nairobi, Kenya",
        address: <>Mais. 7, B.S.K. Village, Muguga Green, Westlands, Nairobi.<br />P.O Box 6030 - 00200 Nairobi</>,
    },
    // Removed other office locations
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-90">
          <div className="container">
            <div className="row">
              {/* Map Section */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="contact-map">
                  {/* Replace this with your actual map implementation */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8694499378423!2d36.78523267479869!3d-1.2670335987415745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1722ea058c91%3A0x694ca46704a4a02c!2sMuguga%20Green%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1703767429948!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '10px' }} // Added borderRadius
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Card Section */}
              <div className="col-xl-5 col-lg-5 col-md-5 d-flex justify-content-center"> {/* Added d-flex and justify-content-center */}
                {office_data.map((item, i) => (
                  <div key={i} className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>{item.badge}</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href="#">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default OfficeLocation;