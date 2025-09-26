import React from "react";
import SEO from "../../common/seo";
import RobertMwongera from "../../components/team-details-individual/robert-mwongera";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Robert Mwongera - Software & Automation Engineer"} />
      <RobertMwongera />
    </Wrapper>
  );
};

export default index;
