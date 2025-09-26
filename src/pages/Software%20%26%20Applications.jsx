import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const SoftwareApplicationsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Software & Applications - Complete Software Solutions" />
      <ServiceDetails service="software-applications" />
    </Wrapper>
  );
};

export default SoftwareApplicationsPage;
