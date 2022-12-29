import React from "react";
import Slider from "react-slick";
export const TeamSlide = () => {
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="slide-arrow prev-arrow" onClick={onClick}>
        <i className="fal fa-long-arrow-left"></i>
      </button>
    );
  }
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button className="slide-arrow next-arrow" onClick={onClick}>
        <i className="fal fa-long-arrow-right"></i>
      </button>
    );
  }
  let settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="slick-single-layout">
        <div className="axil-team-member">
          <div className="thumbnail">
            <img src="./assets/images/team/team-01.png" alt="Cody Fisher" />
          </div>
          <div className="team-content">
            <span className="subtitle">Founder</span>
            <h5 className="title">Rosalina D. Willson</h5>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-team-member">
          <div className="thumbnail">
            <img src="./assets/images/team/team-02.png" alt="Cody Fisher" />
          </div>
          <div className="team-content">
            <span className="subtitle">CEO</span>
            <h5 className="title">Ukolilix X. Xilanorix</h5>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-team-member">
          <div className="thumbnail">
            <img src="./assets/images/team/team-03.png" alt="Cody Fisher" />
          </div>
          <div className="team-content">
            <span className="subtitle">Designer</span>
            <h5 className="title">Alonso M. Miklonax</h5>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-team-member">
          <div className="thumbnail">
            <img src="./assets/images/team/team-04.png" alt="Cody Fisher" />
          </div>
          <div className="team-content">
            <span className="subtitle">Designer</span>
            <h5 className="title">Alonso M. Miklonax</h5>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-team-member">
          <div className="thumbnail">
            <img src="./assets/images/team/team-02.png" alt="Cody Fisher" />
          </div>
          <div className="team-content">
            <span className="subtitle">Designer</span>
            <h5 className="title">Alonso M. Miklonax</h5>
          </div>
        </div>
      </div>
    </Slider>
  );
};
