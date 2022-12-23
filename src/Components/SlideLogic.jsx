import React, { useEffect, useRef, useState } from "react";
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

export const HeroSlider = () => {
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
                  <div className="single-slide slick-slide">
                    <span className="subtitle">
                      <i className="fas fa-fire"></i> Hot Deal In This Week
                    </span>
                    <h1 className="title">Roco Wireless Headphone</h1>
                    <div className="slide-action">
                      <div className="shop-btn">
                        <a href="shop.html" className="axil-btn btn-bg-white">
                          <i className="fal fa-shopping-cart"></i>Shop Now
                        </a>
                      </div>
                      <div className="item-rating">
                        <div className="thumb">
                          <ul>
                            <li>
                              <img
                                src="./assets/images/others/author1.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author2.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author3.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author4.png"
                                alt="Author"
                              />
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
                            <span>100+</span> Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide slick-slide">
                    <span className="subtitle">
                      <i className="fas fa-fire"></i> Hot Deal In This Week
                    </span>
                    <h1 className="title">Smart Digital Watch</h1>
                    <div className="slide-action">
                      <div className="shop-btn">
                        <a href="shop.html" className="axil-btn btn-bg-white">
                          <i className="fal fa-shopping-cart"></i>Shop Now
                        </a>
                      </div>
                      <div className="item-rating">
                        <div className="thumb">
                          <ul>
                            <li>
                              <img
                                src="./assets/images/others/author1.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author2.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author3.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author4.png"
                                alt="Author"
                              />
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
                            <span>100+</span> Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide slick-slide">
                    <span className="subtitle">
                      <i className="fas fa-fire"></i> Hot Deal In This Week
                    </span>
                    <h1 className="title">Roco Wireless Headphone</h1>
                    <div className="slide-action">
                      <div className="shop-btn">
                        <a href="shop.html" className="axil-btn btn-bg-white">
                          <i className="fal fa-shopping-cart"></i>Shop Now
                        </a>
                      </div>
                      <div className="item-rating">
                        <div className="thumb">
                          <ul>
                            <li>
                              <img
                                src="./assets/images/others/author1.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author2.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author3.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author4.png"
                                alt="Author"
                              />
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
                            <span>100+</span> Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide slick-slide">
                    <span className="subtitle">
                      <i className="fas fa-fire"></i> Hot Deal In This Week
                    </span>
                    <h1 className="title">Smart Digital Watch</h1>
                    <div className="slide-action">
                      <div className="shop-btn">
                        <a href="shop.html" className="axil-btn btn-bg-white">
                          <i className="fal fa-shopping-cart"></i>Shop Now
                        </a>
                      </div>
                      <div className="item-rating">
                        <div className="thumb">
                          <ul>
                            <li>
                              <img
                                src="./assets/images/others/author1.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author2.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author3.png"
                                alt="Author"
                              />
                            </li>
                            <li>
                              <img
                                src="./assets/images/others/author4.png"
                                alt="Author"
                              />
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
                            <span>100+</span> Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="main-slider-large-thumb">
              <div className="slider-thumb-activation-one axil-slick-dots">
                <Slider {...settings}>
                  <div className="single-slide slick-slide">
                    <img
                      src="./assets/images/product/product-38.png"
                      alt="Product"
                    />
                    <div className="product-price">
                      <span className="text">From</span>
                      <span className="price-amount">$49.00</span>
                    </div>
                  </div>
                  <div className="single-slide slick-slide">
                    <img
                      src="./assets/images/product/product-39.png"
                      alt="Product"
                    />
                    <div className="product-price">
                      <span className="text">From</span>
                      <span className="price-amount">$49.00</span>
                    </div>
                  </div>
                  <div className="single-slide slick-slide">
                    <img
                      src="./assets/images/product/product-38.png"
                      alt="Product"
                    />
                    <div className="product-price">
                      <span className="text">From</span>
                      <span className="price-amount">$49.00</span>
                    </div>
                  </div>
                  <div className="single-slide slick-slide">
                    <img
                      src="./assets/images/product/product-39.png"
                      alt="Product"
                    />
                    <div className="product-price">
                      <span className="text">From</span>
                      <span className="price-amount">$49.00</span>
                    </div>
                  </div>
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
