import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Wrapper from "../../layout/wrapper";

// Dynamically import to avoid SSR issues
const ServiceDetails = dynamic(() => import("../../components/service-details"), {
  ssr: false
});

const ServicePage = ({ service }) => {
  const pageTitle = service ? `${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Matrix` : 'Service - Matrix';

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

// Add getStaticPaths for static export - must use fallback: false for output: export compatibility
export async function getStaticPaths() {
  // Define all possible service paths (excluding those that have static pages)
  const paths = [
    { params: { service: 'software-applications' } },
    { params: { service: 'infrastructure-development' } },
    { params: { service: 'enterprise-solutions' } },
    { params: { service: 'governance-compliance' } },
    { params: { service: 'facilities-asset-management' } },
    { params: { service: 'security-operational-safety' } },
    { params: { service: 'ict-telecom-analytics' } },
    { params: { service: 'education-solutions' } },
    { params: { service: 'e-board' } },
    { params: { service: 'crm' } },
    { params: { service: 'contract' } },
    { params: { service: 'social-media-monitoring' } },
    { params: { service: 'exam-management' } },
    { params: { service: 'audit' } },
    { params: { service: 'cafm' } },
    { params: { service: 'automated-visitor-management' } },
    { params: { service: 'access-control' } },
    { params: { service: 'fire-burglar-emergency-systems' } },
    { params: { service: 'data-centre' } },
    { params: { service: 'time-attendance' } },
    { params: { service: 'key-management' } },
    { params: { service: 'mass-notification' } },
    { params: { service: 'managed-support' } },
    { params: { service: 'ehs' } }
  ];

  // Must use fallback: false for compatibility with output: export
  return {
    paths,
    fallback: false
  };
}