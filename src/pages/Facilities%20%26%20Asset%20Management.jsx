import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const FacilitiesAssetManagementPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Facilities & Asset Management - Facility Management Solutions" />
      <ServiceDetails service="facilities-asset-management" />
    </Wrapper>
  );
};

export default FacilitiesAssetManagementPage;
