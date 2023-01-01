import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export const HeroSlider = () => {
  const HeroSlides = [
    {
      id: 1,
      title: "Roco Wireless Headphone",
      ProductImg: "./assets/images/product/product-38.png",
      price: "$49.00",
      img1: "./assets/images/others/author1.png",
      img2: "./assets/images/others/author2.png",
      img3: "./assets/images/others/author3.png",
      img4: "./assets/images/others/author4.png",
      review: "3467",
    },
    {
      id: 2,
      title: "Smart Digital Watch",
      ProductImg: "./assets/images/product/product-39.png",
      price: "$69.00",
      img1: "./assets/images/others/author1.png",
      img2: "./assets/images/others/author2.png",
      img3: "./assets/images/others/author3.png",
      img4: "./assets/images/others/author4.png",
      review: "231",
    },
    {
      id: 3,
      title: "Roco Wireless Headphone",
      ProductImg: "./assets/images/product/product-38.png",
      price: "$59.00",
      img1: "./assets/images/others/author1.png",
      img2: "./assets/images/others/author2.png",
      img3: "./assets/images/others/author3.png",
      img4: "./assets/images/others/author4.png",
      review: "22234",
    },
    {
      id: 4,
      title: "Smart Digital Watch",
      ProductImg: "./assets/images/product/product-39.png",
      price: "$899.00",
      img1: "./assets/images/others/author1.png",
      img2: "./assets/images/others/author2.png",
      img3: "./assets/images/others/author3.png",
      img4: "./assets/images/others/author4.png",
      review: "56774",
    },
  ];
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    focusOnSelect: false,
    speed: 1000,
    autoplay: false,
    asNavFor: nav1,
    ref: slider2,
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
    <div className="axil-main-slider-area main-slider-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-sm-6">
            <div className="main-slider-content">
              <div className="slider-content-activation-one">
                <Slider
                  infinite={true}
                  asNavFor={nav2}
                  ref={slider1}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false}
                  dots={false}
                  focusOnSelect={false}
                  speed={500}
                  fade={true}
                  autoplay={true}
                >
                  {HeroSlides.map((Slides) => {
                    return (
                      <div className="single-slide slick-slide" key={Slides.id}>
                        <span className="subtitle">
                          <i className="fas fa-fire"></i> Hot Deal In This Week
                        </span>
                        <h1 className="title">{Slides.title}</h1>
                        <div className="slide-action">
                          <div className="shop-btn">
                            <Link to="/Shop" className="axil-btn btn-bg-white">
                              <i className="fal fa-shopping-cart"></i>Shop Now
                            </Link>
                          </div>
                          <div className="item-rating">
                            <div className="thumb">
                              <ul>
                                <li>
                                  <img src={Slides.img1} alt="Author" />
                                </li>
                                <li>
                                  <img src={Slides.img2} alt="Author" />
                                </li>
                                <li>
                                  <img src={Slides.img3} alt="Author" />
                                </li>
                                <li>
                                  <img src={Slides.img4} alt="Author" />
                                </li>
                              </ul>
                            </div>
                            <div className="content">
                              <span className="rating-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                              </span>
                              <span className="review-text">
                                <span>{Slides.review}</span> Reviews
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="main-slider-large-thumb">
              <div className="slider-thumb-activation-one axil-slick-dots">
                <Slider {...settings}>
                  {HeroSlides.map((Slides) => {
                    return (
                      <div className="single-slide slick-slide">
                        <img src={Slides.ProductImg} alt="Product" />
                        <div className="product-price">
                          <span className="text">From</span>
                          <span className="price-amount">{Slides.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-1">
          <img src="./assets/images/others/shape-1.png" alt="Shape" />
        </li>
        <li className="shape-2">
          <img src="./assets/images/others/shape-2.png" alt="Shape" />
        </li>
      </ul>
    </div>
  );
};
