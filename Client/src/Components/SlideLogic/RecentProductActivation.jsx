import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export const RecentProductActivation = () => {
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
        breakpoint: 479,
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
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-01.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">20% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">3D™ wireless headset</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$30</span>
                <span className="price current-price">$30</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-02.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">40% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">Media remote</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$80</span>
                <span className="price current-price">$50</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-03.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">30% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">HD camera</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$60</span>
                <span className="price current-price">$45</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-04.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">50% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">PS Remote Control</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$70</span>
                <span className="price current-price">$35</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-05.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">25% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">PS Remote Control</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$50</span>
                <span className="price current-price">$38</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-03.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">30% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">HD camera</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$60</span>
                <span className="price current-price">$45</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-04.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">50% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">PS Remote Control</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$70</span>
                <span className="price current-price">$35</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="slick-single-layout">
        <div className="axil-product">
          <div className="thumbnail">
            <Link to="/Product">
              <img
                src="./assets/images/product/electric/product-05.png"
                alt="Product Images"
              />
            </Link>
            <div className="label-block label-right">
              <div className="product-badget">25% OFF</div>
            </div>
            <div className="product-hover-action">
              <ul className="cart-action">
                <li className="wishlist">
                  <Link to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="select-option">
                  <Link to="/Cart">Add to Cart</Link>
                </li>
                <li className="quickview">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">PS5 Remote Control</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price old-price">$50</span>
                <span className="price current-price">$38</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
