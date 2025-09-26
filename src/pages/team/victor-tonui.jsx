import React from "react";
import SEO from "../../common/seo";
import VictorTonui from "../../components/team-details-individual/victor-tonui";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Victor Tonui - Electronics Engineer"} />
      <VictorTonui />
    </Wrapper>
  );
};

export default index;
