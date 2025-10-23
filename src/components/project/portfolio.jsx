import project_data_all from '@/src/data/project-data';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';

// Project status categories for filtering
const categories = [
    "All",
    "Ongoing",
    "Completed"
];

const Portfolio = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(project_data_all);

    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);

      if (cateItem === "All") {
        return setItems(project_data_all);
      } else {
        const findItems = project_data_all.filter((findItem) => {
          return findItem.status == cateItem;
        });
        setItems(findItems);
      }
    };

    return (
        <>
            <div className="portfolio-area pt-100 pb-90">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="portfolio-filter masonary-menu text-center mb-35">
                            {categories.map((cate, i) => (
                                <button
                                onClick={() => filterItems(cate)}
                                key={i}
                                className={`${cate === activeCategory ? "active" : ""}`}
                                >
                                <span>{cate}</span>
                                </button>
                            ))}
                        </div>
                     </div>
                  </div>
                  <div className="row grid">
                    {items.map((item, i)  =>
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item">
                            <div className="project-card-modern mb-40">
                                <div className="project-card-image-wrapper">
                                    <div className="project-card-image-container">
                                        <Image className="project-card-image w-100" src={item.img_1} alt={item.title} />
                                        <div className="project-card-client-logo">
                                            <img
                                               src={item.img_2}
                                               alt={`${item.client_name} logo`}
                                               loading="lazy"
                                               style={{ maxWidth: "120px", maxHeight: "60px", width: "100%", objectFit: "contain" }}
                                            />
                                        </div>
                                        <div className="project-card-status-overlay">
                                           <span className={`project-status-badge ${item.status.toLowerCase()}`}>
                                              {item.status}
                                           </span>
                                        </div>
                                     </div>
                                </div>

                                <div className="project-card-content">
                                    <div className="project-card-meta">
                                        <span className="project-client-name">{item.client_name}</span>
                                        <div className="project-card-icon">
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </div>

                                    <h3 className="project-card-title">
                                       <Link href={`/project-details/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}>
                                          {item.title}
                                       </Link>
                                    </h3>

                                    <p className="project-card-description">{item.description}</p>

                                    <div className="project-card-footer">
                                        <Link
                                           href={`/project-details/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}
                                           className="project-card-link"
                                        >
                                            View Details
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                  </div>
               </div>
            </div>
            <style jsx>{`
                /* Modern Project Card Styles */
                .project-card-modern {
                    background: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                .project-card-modern:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 64px rgba(0, 0, 0, 0.12);
                    border-color: rgba(0, 123, 255, 0.2);
                }

                .project-card-image-wrapper {
                    position: relative;
                    overflow: hidden;
                }

                .project-card-image-container {
                    position: relative;
                    height: 220px;
                    overflow: hidden;
                }

                .project-card-image {
                    height: 220px;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .project-card-modern:hover .project-card-image {
                    transform: scale(1.05);
                }

                .project-card-client-logo {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 8px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                }

                .project-card-client-logo img {
                    width: 40px;
                    height: 40px;
                    object-fit: contain;
                }

                .project-card-status-overlay {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                }

                .project-status-badge {
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                }

                .project-status-badge.ongoing {
                    background: linear-gradient(135deg, #ff6b35, #ff9800);
                    color: white;
                }

                .project-status-badge.completed {
                    background: linear-gradient(135deg, #00c853, #4caf50);
                    color: white;
                }

                .project-card-content {
                    padding: 24px;
                }

                .project-card-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                }

                .project-client-name {
                    color: #6c757d;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .project-card-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #007bff, #6610f2);
                    color: white;
                    border-radius: 50%;
                    font-size: 0.875rem;
                }

                .project-card-title {
                    margin-bottom: 12px;
                    line-height: 1.3;
                }

                .project-card-title a {
                    color: #212529;
                    text-decoration: none;
                    font-size: 1.25rem;
                    font-weight: 700;
                    transition: color 0.3s ease;
                }

                .project-card-title a:hover {
                    color: #007bff;
                }

                .project-card-description {
                    color: #6c757d;
                    font-size: 0.875rem;
                    line-height: 1.5;
                    margin-bottom: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .project-card-footer {
                    border-top: 1px solid rgba(0, 123, 255, 0.1);
                    padding-top: 16px;
                    margin-top: 16px;
                }

                .project-card-link {
                    display: inline-flex;
                    align-items: center;
                    color: #007bff;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                }

                .project-card-link:hover {
                    color: #0056b3;
                    transform: translateX(4px);
                }

                .project-card-link i {
                    margin-left: 8px;
                    transition: transform 0.3s ease;
                }

                .project-card-link:hover i {
                    transform: translateX(4px);
                }

                /* Filter Buttons Enhancement */
                .portfolio-filter button {
                    background: transparent;
                    border: none;
                    padding: 12px 24px;
                    margin: 0 8px;
                    border-radius: 25px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .portfolio-filter button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #007bff, #6610f2);
                    transition: left 0.3s ease;
                }

                .portfolio-filter button:hover::before,
                .portfolio-filter button.active::before {
                    left: 0;
                }

                .portfolio-filter button span {
                    position: relative;
                    z-index: 1;
                    color: #6c757d;
                }

                .portfolio-filter button.active span,
                .portfolio-filter button:hover span {
                    color: white;
                }

                /* Grid Layout Enhancements */
                .grid {
                    gap: 0;
                }

                .grid-item {
                    display: flex;
                    justify-content: center;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .project-card-modern {
                        margin-bottom: 30px;
                    }

                    .project-card-image-container {
                        height: 180px;
                    }

                    .project-card-image {
                        height: 180px;
                    }

                    .project-card-content {
                        padding: 20px;
                    }

                    .project-card-title a {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 576px) {
                    .portfolio-filter button {
                        padding: 10px 16px;
                        margin: 0 4px;
                        font-size: 0.875rem;
                    }

                    .project-card-modern {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </>
    );
};

export default Portfolio;
