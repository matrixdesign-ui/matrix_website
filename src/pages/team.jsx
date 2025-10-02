import React from "react";
import SEO from "../common/seo";
import Team from "../components/team";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Our Complete Team - Matrix Vision Systems"} />
      <Team />
    </Wrapper>
  );
};

export default index;
