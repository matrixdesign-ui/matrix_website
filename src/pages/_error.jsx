import React from "react";
import Link from "next/link";
import SEO from "../common/seo";
import Footer from "../layout/footers/footer";
import HeaderFour from "../layout/headers/header-4";
import Image from "next/image";

// error shape import here 
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/assets/img/login/text-404.png";

function Error({ statusCode }) {
  return (
    <>
      <SEO pageTitle={"Oops! An Error Occurred"} />
      <HeaderFour style_error={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape_1} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <Image src={error_shape_2} alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">
                        {statusCode
                          ? `An error ${statusCode} occurred on server`
                          : "An error occurred on client"}
                      </h4>
                      <p>We're sorry for the inconvenience. Please try again later.</p>
                      <Link
                        className="tp-btn-inner tp-btn-hover alt-color-black"
                        href="/"
                      >
                        <span> Back To Home</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

