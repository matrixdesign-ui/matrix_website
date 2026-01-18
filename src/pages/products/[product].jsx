import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Wrapper from "../../layout/wrapper";
import productDetailsData from "../../data/product-details-data";

// Dynamically import to avoid SSR issues
const ProductDetails = dynamic(() => import("../../components/product-details"), {
  ssr: false
});

const ProductPage = ({ product }) => {
  const productData = productDetailsData[product];
  const pageTitle = productData ? `${productData.title} - Matrix Vision Systems` : 'Product - Matrix Vision Systems';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={productData?.hero?.subheadline || `Learn more about ${product} and how it can benefit your organization.`} />
      </Head>
      <Wrapper>
        <ProductDetails product={product} />
      </Wrapper>
    </>
  );
};

export default ProductPage;

// Use getStaticProps for static generation
export async function getStaticProps({ params }) {
  const { product } = params;

  return {
    props: {
      product: product || null,
    },
  };
}

// Add getStaticPaths for static export
export async function getStaticPaths() {
  // Generate paths based on product data
  const productSlugs = Object.keys(productDetailsData);
  const paths = productSlugs.map(slug => ({
    params: { product: slug }
  }));

  // Must use fallback: false for compatibility with output: export
  return {
    paths,
    fallback: false
  };
}

