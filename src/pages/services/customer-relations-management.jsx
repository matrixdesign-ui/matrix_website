import React from "react";
import SEO from "../../common/seo";
import ServiceDetails from "../../components/service-details";
import Wrapper from "../../layout/wrapper";

const CustomerRelationsManagementPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Customer Relations Management - Advanced CRM Solutions" />
      <ServiceDetails service="customer-relations-management" />
    </Wrapper>
  );
};

export default CustomerRelationsManagementPage;
