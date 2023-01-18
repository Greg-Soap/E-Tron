import React from "react";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Products from "./Products";
import Newsletter from "../Components/Newsletter";
import ServiceArea from "../Components/ServiceArea";
import { HeroSlider } from "../Components/SlideLogic/HeroSlider";
import { CategrieProductActivation } from "../Components/SlideLogic/CategrieProductActivation";
import { TestimonialSlickActivation } from "../Components/SlideLogic/TestimonialSlickActivation";
import { NewArrivalsProductActivation } from "../Components/SlideLogic/NewArrivalsProductActivation";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <HeroSlider />
        <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-secondary">
                {" "}
                <i className="far fa-tags"></i> Categories
              </span>
              <h2 className="title">Browse by Category</h2>
            </div>
            <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow  arrow-top-slide">
              <CategrieProductActivation />
            </div>
          </div>
        </div>

        <div className="axil-poster-countdown">
          <div className="container">
            <div className="poster-countdown-wrap bg-lighter">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="poster-countdown-content">
                    <div className="section-title-wrapper">
                      <span className="title-highlighter highlighter-secondary">
                        {" "}
                        <i className="fal fa-headphones-alt"></i> Don’t Miss!!
                      </span>
                      <h2 className="title">Enhance Your Music Experience</h2>
                    </div>
                    <div className="poster-countdown countdown mb--40"></div>
                    <a href="#" className="axil-btn btn-bg-primary">
                      Check it Out!
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="poster-countdown-thumbnail">
                    <img
                      src="./assets/images/product/poster/poster-03.png"
                      alt="Poster Product"
                    />
                    <div className="music-singnal">
                      <div className="item-circle circle-1"></div>
                      <div className="item-circle circle-2"></div>
                      <div className="item-circle circle-3"></div>
                      <div className="item-circle circle-4"></div>
                      <div className="item-circle circle-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-product-area bg-color-white axil-section-gap">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-primary">
                {" "}
                <i className="far fa-shopping-basket"></i> Our Products
              </span>
              <h2 className="title">Explore our Products</h2>
            </div>
            <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
              <div className="slick-single-layout">
                <div className="row row--15">
                  <Products />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt--20 mt_sm--0">
                <Link
                  to="/Shop"
                  className="axil-btn btn-bg-lighter btn-load-more"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-testimoial-area axil-section-gap bg-vista-white">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-secondary">
                {" "}
                <i className="fal fa-quote-left"></i>Testimonials
              </span>
              <h2 className="title">Users Feedback</h2>
            </div>
            <div className="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide">
              <TestimonialSlickActivation />
            </div>
          </div>
        </div>
        <div className="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--0">
          <div className="container">
            <div className="product-area pb--50">
              <div className="section-title-wrapper">
                <span className="title-highlighter highlighter-primary">
                  <i className="far fa-shopping-basket"></i>This Week’s
                </span>
                <h2 className="title">New Arrivals</h2>
              </div>
              <div className="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow  arrow-top-slide">
                <NewArrivalsProductActivation />
              </div>
            </div>
          </div>
        </div>
        <div className="axil-most-sold-product axil-section-gap">
          <div className="container">
            <div className="product-area pb--50">
              <div className="section-title-wrapper section-title-center">
                <span className="title-highlighter highlighter-primary">
                  <i className="fas fa-star"></i> Most Sold
                </span>
                <h2 className="title">Most Sold in eTrade Store</h2>
              </div>
              <div className="row row-cols-xl-2 row-cols-1 row--15">
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="100"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-09.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>100+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Media Remote</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$29.99</span>
                        <span className="price old-price">$49.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="200"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-10.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>50+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">HD Camera</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$49.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="300"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-11.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>120+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Gaming Controller</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$50.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="400"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-12.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>30+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Wall Mount </Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$19.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="500"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-13.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>700+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Lenevo Laptop</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$999.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="600"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-14.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>300+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Juice Grinder Machine</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$99.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="400"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-15.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>100+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Wireless Headphone</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$59.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/Product">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="500"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-16.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>100+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/Product">Asus Zenbook Laptop</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$899.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-why-choose-area pb--50 pb_sm--30">
          <div className="container">
            <div className="section-title-wrapper section-title-center">
              <span className="title-highlighter highlighter-secondary">
                <i className="fal fa-thumbs-up"></i>Why Us
              </span>
              <h2 className="title">Why People Choose Us</h2>
            </div>
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service6.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">Fast &amp; Secure Delivery</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service7.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">100% Guarantee On Product</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service8.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">24 Hour Return Policy</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service9.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">24 Hour Return Policy</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service10.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">Next Level Pro Quality</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-poster">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb--30">
                <div className="single-poster">
                  <a href="shop.html">
                    <img
                      src="./assets/images/product/poster/poster-01.png"
                      alt="eTrade promotion poster"
                    />
                    <div className="poster-content">
                      <div className="inner">
                        <h3 className="title">
                          Rich sound, <br /> for less.
                        </h3>
                        <span className="sub-title">
                          Collections{" "}
                          <i className="fal fa-long-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb--30">
                <div className="single-poster">
                  <a href="shop-sidebar.html">
                    <img
                      src="./assets/images/product/poster/poster-02.png"
                      alt="eTrade promotion poster"
                    />
                    <div className="poster-content content-left">
                      <div className="inner">
                        <span className="sub-title">50% Offer In Winter</span>
                        <h3 className="title">
                          Get VR <br /> Reality Glass
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </main>
      <ServiceArea />
      <Footer />
    </>
  );
};

export default Home;
