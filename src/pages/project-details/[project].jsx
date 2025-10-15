import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Wrapper from "../../layout/wrapper";
import projectData from "../../data/project-data";

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

// Use getStaticProps instead of getServerSideProps for static export
export async function getStaticProps({ params }) {
  const { project } = params;

  return {
    props: {
      project: project || null,
    },
  };
}

// Add getStaticPaths for static export - must use fallback: false for output: export compatibility
export async function getStaticPaths() {
  // Generate paths based on actual project data
  const paths = projectData.map(item => {
    // Generate slug the same way as in the links
    const slug = item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    return { params: { project: slug } };
  });

  // Must use fallback: false for compatibility with output: export
  return {
    paths,
    fallback: false
  };
}