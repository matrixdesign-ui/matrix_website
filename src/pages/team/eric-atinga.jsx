import React from "react";
import SEO from "../../common/seo";
import EricAtinga from "../../components/team-details-individual/eric-atinga";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Eric Atinga - CTO - ICT Innovation & Software"} />
      <EricAtinga />
    </Wrapper>
  );
};

export default index;
