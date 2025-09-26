import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const EducationSolutionsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Education Solutions - Modern Assessment Platforms" />
      <ServiceDetails service="education-solutions" />
    </Wrapper>
  );
};

export default EducationSolutionsPage;
