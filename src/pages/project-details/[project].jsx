import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Wrapper from "../../layout/wrapper";

// Dynamically import to avoid SSR issues
const ProjectDetails = dynamic(() => import("../../components/project-details"), {
  ssr: false
});

const ProjectPage = ({ project }) => {
  const pageTitle = project ? `${project.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Project Details - Matrix Vision Systems` : 'Project Details - Matrix Vision Systems';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`Learn more about our ${project} project and implementation details.`} />
      </Head>
      <Wrapper>
        <ProjectDetails project={project} />
      </Wrapper>
    </>
  );
};

export default ProjectPage;

export async function getServerSideProps({ params }) {
  const { project } = params;

  return {
    props: {
      project: project || null,
    },
  };
}
