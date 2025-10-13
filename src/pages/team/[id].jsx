import React from "react";
import SEO from "../../common/seo";
import TeamDetails from "../../components/team-details";
import Wrapper from "../../layout/wrapper";
import team_data from "../../data/team-data";

const TeamDetailPage = ({ teamMember }) => {
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

// Use getStaticProps for static export
export async function getStaticProps({ params }) {
  const { id } = params;
  
  // Find the team member by ID
  const teamMember = team_data.find(member => member.id === parseInt(id));
  
  return {
    props: {
      teamMember: teamMember || null,
    },
  };
}

// Add getStaticPaths for static export - must use fallback: false for output: export compatibility
export async function getStaticPaths() {
  // Define all possible team member paths
  const paths = team_data.map(member => ({
    params: { id: member.id.toString() }
  }));

  // Must use fallback: false for compatibility with output: export
  return {
    paths,
    fallback: false
  };
}