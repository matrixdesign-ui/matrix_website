import React from "react";
import SEO from "../../common/seo";
import TeamDetails from "../../components/team-details";
import Wrapper from "../../layout/wrapper";
import { useRouter } from "next/router";
import team_data from "../../data/team-data";

const TeamDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the team member by ID
  const teamMember = team_data.find(member => member.id === parseInt(id));
  
  if (!teamMember) {
    return (
      <Wrapper>
        <SEO pageTitle={"Team Member Not Found - Matrix Vision Systems"} />
        <div className="container pt-120 pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Team Member Not Found</h2>
              <p>The requested team member could not be found.</p>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle={`${teamMember.name} - Matrix Vision Systems`} />
      <TeamDetails teamMember={teamMember} />
    </Wrapper>
  );
};

export default TeamDetailPage;