import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const EnterpriseSolutionsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Enterprise Solutions - Scalable Business Solutions" />
      <ServiceDetails service="enterprise-solutions" />
    </Wrapper>
  );
};

export default EnterpriseSolutionsPage;
