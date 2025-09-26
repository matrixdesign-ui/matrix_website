import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const GovernanceCompliancePage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Governance & Compliance - Regulatory Solutions" />
      <ServiceDetails service="governance-compliance" />
    </Wrapper>
  );
};

export default GovernanceCompliancePage;
