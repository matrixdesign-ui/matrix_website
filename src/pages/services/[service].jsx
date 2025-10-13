import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Wrapper from "../../layout/wrapper";

// Dynamically import to avoid SSR issues
const ServiceDetails = dynamic(() => import("../../components/service-details"), {
  ssr: false
});

const ServicePage = ({ service }) => {
  const pageTitle = service ? `${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Softec` : 'Service - Softec';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`Learn more about our ${service} services and solutions.`} />
      </Head>
      <Wrapper>
        <ServiceDetails service={service} />
      </Wrapper>
    </>
  );
};

export default ServicePage;

// Use getStaticProps instead of getServerSideProps for static export
export async function getStaticProps({ params }) {
  const { service } = params;

  return {
    props: {
      service: service || null,
    },
  };
}

// Add getStaticPaths for static export
export async function getStaticPaths() {
  // Return empty paths array for now - you can add specific paths here if needed
  return {
    paths: [],
    fallback: 'blocking'
  };
}