import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ProductHero from './product-hero';
import ProductSponsors from './product-sponsors';
import ProductBenefits from './product-benefits';
import ProductFeatures from './product-features';
import TestimonialArea from '@/src/common/testimonial-area';
import CtaArea from '@/src/components/contact/cta-area';
import AnswerQuestion from '@/src/common/answer-question';
import productDetailsData from '../../data/product-details-data';

const ProductDetailsArea = ({ product }) => {
    const productData = productDetailsData[product];
    
    // Refs for animations
    const overviewSectionRef = useRef(null);
    const overviewTitleRef = useRef(null);
    const overviewDescRef = useRef(null);
    const overviewCardsRef = useRef([]);
    const challengeRef = useRef(null);
    const faqSectionRef = useRef(null);
    const faqItemsRef = useRef([]);

    if (!productData) {
        return (
            <div className="sv-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Product not found</h2>
                            <Link href="/products" className="tp-btn-inner tp-btn-hover alt-color-black">
                                <span>Back to Products</span>
                                <b></b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const { hero, features, benefits, overview_des, overview_list, challenge_des, faqs } = productData;

    // GSAP Animations for all sections
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            // Overview Section Title Animation
            if (overviewTitleRef.current) {
                gsap.from(overviewTitleRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: overviewSectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            // Overview Description Animation
            if (overviewDescRef.current) {
                gsap.from(overviewDescRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: overviewSectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            // Overview Cards Animation
            overviewCardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        x: index % 2 === 0 ? -30 : 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                        delay: index * 0.1,
                    });
                }
            });

            // Challenge Section Animation
            if (challengeRef.current) {
                gsap.from(challengeRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: challengeRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            // FAQ Items Animation
            faqItemsRef.current.forEach((item, index) => {
                if (item) {
                    gsap.from(item, {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        },
                        delay: index * 0.1,
                    });
                }
            });
        });

        return () => ctx.revert();
    }, [productData]);

    return (
        <>
            {/* 1. Hero Section */}
            <ProductHero hero={hero} />

            {/* 2. Sponsors/Partners Section */}
            <ProductSponsors />

            {/* 3. Benefits Section */}
            <ProductBenefits benefits={benefits} />

            {/* 4. Features Section */}
            <ProductFeatures features={features} />

            {/* 5. Services/Overview Section */}
            <div ref={overviewSectionRef} className="product-overview-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sv-details-wrapper">
                                <div className="sv-details-title-box mb-35">
                                    <h4 ref={overviewTitleRef} className="sv-details-title">Services & Overview</h4>
                                    <p ref={overviewDescRef}>{overview_des}</p>
                                </div>

                                {/* Overview List */}
                                {overview_list && overview_list.length > 0 && (
                                    <div className="product-overview-list mb-30">
                                        <h4 className="sv-details-text-title pb-30">What We Offer</h4>
                                        <div className="row g-4">
                                            {overview_list.map((item, i) => {
                                                // Split item into title and description parts
                                                const itemParts = item.split(':');
                                                const boldTitle = itemParts.length > 1 ? itemParts[0] : '';
                                                const descriptionText = itemParts.length > 1 ? itemParts.slice(1).join(':') : item;
                                                
                                                const featureIcons = [
                                                    "fas fa-check-circle",
                                                    "fas fa-star",
                                                    "fas fa-rocket",
                                                    "fas fa-cog",
                                                    "fas fa-shield-alt",
                                                    "fas fa-chart-line",
                                                    "fas fa-users",
                                                    "fas fa-lock"
                                                ];
                                                const featureIcon = featureIcons[i % featureIcons.length];
                                                
                                                return (
                                                    <div key={i} className="col-xl-6 col-md-6">
                                                        <div 
                                                            ref={el => overviewCardsRef.current[i] = el}
                                                            className="overview-item-card"
                                                        >
                                                            <div className="overview-item-icon">
                                                                <i className={featureIcon}></i>
                                                            </div>
                                                            <div className="overview-item-content">
                                                                {boldTitle && (
                                                                    <h5 className="overview-item-title">{boldTitle}:</h5>
                                                                )}
                                                                <p className="overview-item-text">{descriptionText.trim()}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Challenge Section */}
                                {challenge_des && (
                                    <div ref={challengeRef} className="sv-details-text-2">
                                        <h4 className="sv-details-text-title">The Challenge</h4>
                                        <p>{challenge_des}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. Testimonials Section */}
            <TestimonialArea />

            {/* 8. FAQ Section */}
            {faqs && faqs.length > 0 && (
                <div ref={faqSectionRef} className="product-faq-area pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h4 className="sv-details-title mb-40">Frequently Asked Questions</h4>
                                <div className="tp-faq-area">
                                    <div className="container p-0">
                                        <div className="row g-0">
                                            <div className="col-xl-12">
                                                {faqs.map((faq, i) => (
                                                    <div 
                                                        key={i} 
                                                        ref={el => faqItemsRef.current[i] = el}
                                                        className="faq-item mb-3"
                                                    >
                                                        <div className="faq-question">
                                                            <h5>{faq.question}</h5>
                                                        </div>
                                                        <div className="faq-answer">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 10. CTA Section */}
            <CtaArea animate={false} />

            {/* Styles */}
            <style jsx>{`
                .product-overview-area {
                    background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
                }
                
                .overview-item-card {
                    background: #ffffff;
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid #e2e8f0;
                    height: 100%;
                }
                
                .overview-item-card:hover {
                    border-color: rgba(59, 130, 246, 0.3);
                    transform: translateY(-4px) scale(1.02);
                    box-shadow: 
                        0 12px 24px rgba(59, 130, 246, 0.12),
                        0 4px 8px rgba(0, 0, 0, 0.08),
                        0 0 0 1px rgba(59, 130, 246, 0.1);
                }
                
                .overview-item-icon {
                    flex-shrink: 0;
                    width: 3rem;
                    height: 3rem;
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .overview-item-card:hover .overview-item-icon {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 
                        0 8px 20px rgba(59, 130, 246, 0.4),
                        0 0 30px rgba(59, 130, 246, 0.2);
                    animation: iconGlow 2s ease-in-out infinite;
                }
                
                @keyframes iconGlow {
                    0%, 100% {
                        filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
                    }
                    50% {
                        filter: drop-shadow(0 0 16px rgba(139, 92, 246, 0.6));
                    }
                }
                
                .overview-item-icon i {
                    font-size: 1.25rem;
                    color: white;
                }
                
                .overview-item-content {
                    flex: 1;
                }
                
                .overview-item-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.01em;
                }
                
                .overview-item-text {
                    font-size: 0.9375rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 0;
                }
                
                .product-faq-area {
                    background: #f8fafc;
                }
                
                .faq-item {
                    background: #ffffff;
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .faq-item:hover {
                    border-color: #cbd5e1;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                }
                
                .faq-question h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.01em;
                }
                
                .faq-answer p {
                    font-size: 0.9375rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 0;
                }
                
                @media (max-width: 768px) {
                    .key-benefit-card {
                        padding: 2rem 1.5rem;
                    }
                    
                    .overview-item-card {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .overview-item-icon {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </>
    );
};

export default ProductDetailsArea;

