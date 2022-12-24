import React from "react";
import Slider from "react-slick";
export const CategrieProductActivation = () => {
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
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 1000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
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
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="200"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-4.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Phones</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="300"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-5.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Computers</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="400"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-11.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Accessories</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="500"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-6.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Laptops</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="600"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-2.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Monitors</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="700"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-7.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Networking</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div
          className="categrie-product"
          data-sal="zoom-out"
          data-sal-delay="800"
          data-sal-duration="500"
        >
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-8.png"
              alt="product categorie"
            />
            <h6 className="cat-title">PC Gaming</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="categrie-product">
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-1.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Smartwatches</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="categrie-product">
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-9.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Headphones</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="categrie-product">
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-10.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Camera & Photo</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="categrie-product">
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-8.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Video Games</h6>
          </a>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="categrie-product">
          <a href="#">
            <img
              className="img-fluid"
              src="./assets/images/product/categories/elec-1.png"
              alt="product categorie"
            />
            <h6 className="cat-title">Sports</h6>
          </a>
        </div>
      </div>
    </Slider>
  );
};
