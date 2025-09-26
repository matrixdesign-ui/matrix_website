import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import serviceDetailsData from "../../data/service-details-data";

const ServiceDetails = ({ service }) => {
  const serviceData = serviceDetailsData[service];
  const title = serviceData ? serviceData.title : "Service Details";
  const innertitle = serviceData ? `${serviceData.title} Service Details` : "Service Details";

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={title} innertitle={innertitle} />
            <ServiceDetailsArea service={service} />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
