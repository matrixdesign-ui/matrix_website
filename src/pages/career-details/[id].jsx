import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Wrapper from "../../layout/wrapper";

// Dynamically import to avoid SSR issues
const CareerDetailsArea = dynamic(() => import("../../components/career-details/career-details-area"), {
  ssr: false
});

const CareerDetailsPage = ({ id }) => {
  const pageTitle = id ? `${id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Matrix Career` : 'Career Details - Matrix';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`Learn more about the ${id} position at Matrix Vision Systems.`} />
      </Head>
      <Wrapper>
        <CareerDetailsArea id={id} />
      </Wrapper>
    </>
  );
};

export default CareerDetailsPage;

// Use getStaticProps instead of getServerSideProps for static export
export async function getStaticProps({ params }) {
  const { id } = params;

  return {
    props: {
      id: id || null,
    },
  };
}

// Add getStaticPaths for static export - must use fallback: false for output: export compatibility
export async function getStaticPaths() {
  // Define all possible career paths
  const paths = [
    { params: { id: 'intern-of-elec-electronics-engineer' } }
  ];

  // Must use fallback: false for compatibility with output: export
  return {
    paths,
    fallback: false
  };
}