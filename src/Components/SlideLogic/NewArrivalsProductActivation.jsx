import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export const NewArrivalsProductActivation = () => {
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
    arrows: true,
    dots: false,
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
        <div className="axil-product product-style-two">
          <div className="thumbnail">
            <Link to="/SingleProduct">
              <img
                data-sal="zoom-out"
                data-sal-delay="200"
                data-sal-duration="500"
                src="./assets/images/product/electric/product-05.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">10% OFF</div>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <div className="color-variant-wrapper">
                <ul className="color-variant">
                  <li className="color-extra-01 active">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-02">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-03">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h5 className="title">
                <Link to="/SingleProduct">Demon's Souls</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$40</span>
                <span className="price current-price">$30</span>
              </div>
              <div className="product-hover-action">
                <ul className="cart-action">
                  <li className="quickview">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quick-view-modal"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </li>
                  <li className="select-option">
                    <Link to="/SingleProduct">Add to Cart</Link>
                  </li>
                  <li className="wishlist">
                    <Link to="/Wishlist">
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-product product-style-two">
          <div className="thumbnail">
            <Link to="/SingleProduct">
              <img
                data-sal="zoom-out"
                data-sal-delay="300"
                data-sal-duration="500"
                src="./assets/images/product/electric/product-06.png"
                alt="Product Images"
              />
            </Link>
          </div>
          <div className="product-content">
            <div className="inner">
              <div className="color-variant-wrapper">
                <ul className="color-variant">
                  <li className="color-extra-01 active">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-02">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-03">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h5 className="title">
                <Link to="/SingleProduct">Google Home</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$50</span>
                <span className="price current-price">$40</span>
              </div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
                <li className="select-option">
                  <Link to="/SingleProduct">Select Option</Link>
                </li>
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-product product-style-two">
          <div className="thumbnail">
            <Link to="/SingleProduct">
              <img
                data-sal="zoom-out"
                data-sal-delay="400"
                data-sal-duration="500"
                src="./assets/images/product/electric/product-07.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">15% OFF</div>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <div className="color-variant-wrapper">
                <ul className="color-variant">
                  <li className="color-extra-01 active">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-02">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-03">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h5 className="title">
                <Link to="/SingleProduct">Netfilx Remot</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$60</span>
                <span className="price current-price">$45</span>
              </div>
              <div className="product-hover-action">
                <ul className="cart-action">
                  <li className="quickview">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quick-view-modal"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </li>
                  <li className="select-option">
                    <Link to="/SingleProduct">Add to Cart</Link>
                  </li>
                  <li className="wishlist">
                    <Link to="/Wishlist">
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-product product-style-two">
          <div className="thumbnail">
            <Link to="/SingleProduct">
              <img
                data-sal="zoom-out"
                data-sal-delay="500"
                data-sal-duration="500"
                src="./assets/images/product/electric/product-08.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">30% OFF</div>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <div className="color-variant-wrapper">
                <ul className="color-variant">
                  <li className="color-extra-01 active">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-02">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-03">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h5 className="title">
                <Link to="/SingleProduct">Digital Accessories</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$30</span>
                <span className="price current-price">$20</span>
              </div>
              <div className="product-hover-action">
                <ul className="cart-action">
                  <li className="quickview">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quick-view-modal"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </li>
                  <li className="select-option">
                    <Link to="/SingleProduct">Add to Cart</Link>
                  </li>
                  <li className="wishlist">
                    <Link to="/Wishlist">
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-product product-style-two">
          <div className="thumbnail">
            <Link to="/SingleProduct">
              <img
                data-sal="zoom-out"
                data-sal-delay="100"
                data-sal-duration="500"
                src="./assets/images/product/electric/product-04.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">50% OFF</div>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <div className="color-variant-wrapper">
                <ul className="color-variant">
                  <li className="color-extra-01 active">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-02">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                  <li className="color-extra-03">
                    <span>
                      <span className="color"></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h5 className="title">
                <Link to="/SingleProduct">PS5 Smart Remote</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$50</span>
                <span className="price current-price">$25</span>
              </div>
              <div className="product-hover-action">
                <ul className="cart-action">
                  <li className="quickview">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#quick-view-modal"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </li>
                  <li className="select-option">
                    <Link to="/SingleProduct">Add to Cart</Link>
                  </li>
                  <li className="wishlist">
                    <Link to="/Wishlist">
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
