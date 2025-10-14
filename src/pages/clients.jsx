import BreadcrumbFour from "@/src/common/breadcrumbs/breadcrumb-4";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import SEO from "../common/seo";
import ClientsPage from "../components/clients";
import Wrapper from "../layout/wrapper";

const Clients = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Matrix - Our Clients"} />
      <ClientsPage />
    </Wrapper>
  );
};

export default Clients;
