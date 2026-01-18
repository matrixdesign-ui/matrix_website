import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ProductArea from "./product-area";

const Products = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section - Similar to Boardcloud */}
            <div className="products-hero-area">
              {/* Animated Background Shapes */}
              <div className="floating-shapes-container">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
                <div className="floating-shape shape-5"></div>
                <div className="floating-shape shape-6"></div>
              </div>
              
              <div className="products-hero-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                    <div className="products-hero-content text-center">
                      <h1 className="products-hero-title">
                        Our Products
                      </h1>
                      <p className="products-hero-subtitle">
                        Discover innovative solutions designed to transform your business operations and drive success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductArea /> 
            <CardArea style_service={true} />
            <SalesArea style_service={true} />
            <TestimonialArea />
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>

      {/* Hero Styles */}
      <style jsx>{`
        .products-hero-area {
          position: relative;
          background: #0a0a0f;
          min-height: 450px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 30px 0;
        }
        
        .products-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 15, 0.4);
          z-index: 1;
        }
        
        .floating-shapes-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
          animation: floatShape 20s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
          bottom: 20%;
          left: 50%;
          animation-delay: 4s;
        }
        
        .shape-4 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
          top: 30%;
          right: 30%;
          animation-delay: 1s;
        }
        
        .shape-5 {
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          bottom: 10%;
          right: 10%;
          animation-delay: 3s;
        }
        
        .shape-6 {
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
          top: 50%;
          left: 5%;
          animation-delay: 5s;
        }
        
        @keyframes floatShape {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, -30px) scale(0.9);
          }
          75% {
            transform: translate(40px, 20px) scale(1.05);
          }
        }
        
        .products-hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .products-hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        
        .products-hero-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 0;
          line-height: 1.6;
          max-width: 42rem;
          font-weight: 400;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .products-hero-area {
            min-height: 400px;
            padding: 80px 0 20px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Products;

