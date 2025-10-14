import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// journey_data
  const journey_data = [
    {
        id: "01",
        date: "2009",
        title: <>Matrix <br/>Foundation</>,
        description: <>Matrix Vision Systems was founded with a vision to provide innovative technology solutions.</>,
    },
    {
        id: "02",
        date: "2017",
        title: <>Expanded Service<br/>Offerings</>,
        description: <>Expanded service offerings to include enterprise software solutions, facilities and asset management solutions.</>,
    },
    {
        id: "03",
        date: "2019",
        title: <>Advanced security<br/>Solutions</>,
        description: <>Launched advanced security solutions, including AI-powered video surveillance systems.</>,
    },
    {
        id: '04',
        date: "2021",
        title: <>Strategic<br/>Partnerships</>,
        description: <>Established strategic partnerships with leading technology providers to enhance service delivery.</>,
    },
    {
        id: "05",
        date: "2023",
        title: <>Expanded Regional<br/>Presence</>,
        description: <>Expanded regional presence across Africa, serving a diverse range of clients.</>,
    },
    {
        id: "06",
        date: "2024",
        title: <>Innovation &<br/>Development</>,
        description: <>Continued focus on innovation and development, investing in cutting-edge technologies.</>,
    },
    {
      id: "07",
      date: "Present",
      title: <>Continued Growth<br/>& Success</>,
      description: <>Committed to delivering exceptional value and driving client success through technology solutions.</>,
  },

  ]

const JourneyArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <>
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    The Journey
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      >
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>{item.date}</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default JourneyArea;