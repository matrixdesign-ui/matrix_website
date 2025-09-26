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

export async function getServerSideProps({ params }) {
  const { service } = params;

  return {
    props: {
      service: service || null,
    },
  };
}
