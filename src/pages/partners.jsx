import React from "react";
import SEO from "../common/seo";
import PartnersPage from "../components/partners";
import Wrapper from "../layout/wrapper";

const Partners = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Matrix Vision Systems - Partners"} />
      <PartnersPage />
    </Wrapper>
  );
};

export default Partners;