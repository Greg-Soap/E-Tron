import React from "react";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import ServiceArea from "../Components/ServiceArea";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <div className="axil-breadcrumb-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="inner">
                  <ul className="axil-breadcrumb">
                    <li className="axil-breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="separator"></li>
                    <li
                      className="axil-breadcrumb-item active"
                      aria-current="page"
                    >
                      My Account
                    </li>
                  </ul>
                  <h1 className="title">Explore All Products</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="inner">
                  <div className="bradcrumb-thumb">
                    <img
                      src="assets/images/product/product-45.png"
                      alt="p-mage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-shop-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="axil-shop-top">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="category-select">
                        <select className="single-select">
                          <option>Categories</option>
                          <option>Fashion</option>
                          <option>Electronics</option>
                          <option>Furniture</option>
                          <option>Beauty</option>
                        </select>

                        <select className="single-select">
                          <option>Color</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Green</option>
                          <option>Pink</option>
                        </select>

                        <select className="single-select">
                          <option>Price Range</option>
                          <option>0 - 100</option>
                          <option>100 - 500</option>
                          <option>500 - 1000</option>
                          <option>1000 - 1500</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-select mt_md--10 mt_sm--10 justify-content-lg-end">
                        <select className="single-select">
                          <option>Sort by Latest</option>
                          <option>Sort by Name</option>
                          <option>Sort by Price</option>
                          <option>Sort by Viewed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-01.png"
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
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">3D™ wireless headset</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$30</span>
                        <span className="price old-price">$30</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-02.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Media remote</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$40</span>
                        <span className="price old-price">$50</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-03.png"
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
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">HD camera</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$45</span>
                        <span className="price old-price">$60</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-04.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Guys Bomber Jacket</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$70</span>
                        <span className="price old-price">$100</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-05.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="label-block label-right">
                      <div className="product-badget">15% OFF</div>
                    </div>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Level 20 RGB Cherry</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$38</span>
                        <span className="price old-price">$50</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-06.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Level 20 RGB Cherry</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$25</span>
                        <span className="price old-price">$40</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-07.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="label-block label-right">
                      <div className="product-badget">5% OFF</div>
                    </div>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Logitech Streamcam</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$15</span>
                        <span className="price old-price">$20</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/electric/product-08.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Bass Meets Clarity</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$60</span>
                        <span className="price old-price">$80</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/fashion/product-9.png"
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
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Wall Mount</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$30</span>
                        <span className="price old-price">$30</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/fashion/product-10.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">MX Master 3</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$40</span>
                        <span className="price old-price">$50</span>
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

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/fashion/product-11.png"
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
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Zone Headphone</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$45</span>
                        <span className="price old-price">$60</span>
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link to="/SingleProduct">
                      <img
                        src="assets/images/product/fashion/product-12.png"
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link to="/Wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
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
                        <Link to="/SingleProduct">Mice Logitech</Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">$70</span>
                        <span className="price old-price">$100</span>
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
            </div>
            <div className="text-center pt--30">
              <a href="#" className="axil-btn btn-bg-lighter btn-load-more">
                Load more
              </a>
            </div>
          </div>
        </div>
        <div className="axil-newsletter-area axil-section-gap pt--0">
          <div className="container">
            <div className="etrade-newsletter-wrapper bg_image bg_image--5">
              <div className="newsletter-content">
                <span className="title-highlighter highlighter-primary2">
                  <i className="fas fa-envelope-open"></i>Newsletter
                </span>
                <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
                <div className="input-group newsletter-form">
                  <div className="position-relative newsletter-inner mb--15">
                    <input placeholder="example@gmail.com" type="text" />
                  </div>
                  <button type="submit" className="axil-btn mb--15">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ServiceArea />
      <Footer />
    </>
  );
};

export default Shop;
