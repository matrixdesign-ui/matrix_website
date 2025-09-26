import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const InfrastructureDevelopmentPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Infrastructure & Development - Custom Software Solutions" />
      <ServiceDetails service="infrastructure-development" />
    </Wrapper>
  );
};

export default InfrastructureDevelopmentPage;
