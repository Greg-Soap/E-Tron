import React from "react";
import Slider from "react-slick";
export const TestimonialSlickActivation = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 500,
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="slick-single-layout testimonial-style-one">
        <div className="review-speech">
          <p>
            “ It’s amazing how much easier it has been to meet new people and
            create instantly non connections. I have the exact same personal the
            only thing that has changed is my mind set and a few behaviors. “
          </p>
        </div>
        <div className="media">
          <div className="thumbnail">
            <img
              src="./assets/images/testimonial/image-1.png"
              alt="testimonial image"
            />
          </div>
          <div className="media-body">
            <span className="designation">Head Of Idea</span>
            <h6 className="title">James C. Anderson</h6>
          </div>
        </div>
      </div>
      <div className="slick-single-layout testimonial-style-one">
        <div className="review-speech">
          <p>
            “ It’s amazing how much easier it has been to meet new people and
            create instantly non connections. I have the exact same personal the
            only thing that has changed is my mind set and a few behaviors. “
          </p>
        </div>
        <div className="media">
          <div className="thumbnail">
            <img
              src="./assets/images/testimonial/image-2.png"
              alt="testimonial image"
            />
          </div>
          <div className="media-body">
            <span className="designation">Head Of Idea</span>
            <h6 className="title">James C. Anderson</h6>
          </div>
        </div>
      </div>
      <div className="slick-single-layout testimonial-style-one">
        <div className="review-speech">
          <p>
            “ It’s amazing how much easier it has been to meet new people and
            create instantly non connections. I have the exact same personal the
            only thing that has changed is my mind set and a few behaviors. “
          </p>
        </div>
        <div className="media">
          <div className="thumbnail">
            <img
              src="./assets/images/testimonial/image-3.png"
              alt="testimonial image"
            />
          </div>
          <div className="media-body">
            <span className="designation">Head Of Idea</span>
            <h6 className="title">James C. Anderson</h6>
          </div>
        </div>
      </div>
      <div className="slick-single-layout testimonial-style-one">
        <div className="review-speech">
          <p>
            “ It’s amazing how much easier it has been to meet new people and
            create instantly non connections. I have the exact same personal the
            only thing that has changed is my mind set and a few behaviors. “
          </p>
        </div>
        <div className="media">
          <div className="thumbnail">
            <img
              src="./assets/images/testimonial/image-2.png"
              alt="testimonial image"
            />
          </div>
          <div className="media-body">
            <span className="designation">Head Of Idea</span>
            <h6 className="title">James C. Anderson</h6>
          </div>
        </div>
      </div>
    </Slider>
  );
};
