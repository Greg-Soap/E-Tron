import React from "react";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import ServiceArea from "../Components/ServiceArea";
const About = () => {
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
                      About Us
                    </li>
                  </ul>
                  <h1 className="title">About Our Store</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="inner">
                  <div className="bradcrumb-thumb">
                    <img
                      src="assets/images/product/product-45.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-about-area about-style-1 axil-section-gap ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-6">
                <div className="about-thumbnail">
                  <div className="thumbnail">
                    <img
                      src="assets/images/about/about-01.png"
                      alt="About Us"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6">
                <div className="about-content content-right">
                  <span className="title-highlighter highlighter-primary2">
                    {" "}
                    <i className="far fa-shopping-basket"></i>About Store
                  </span>
                  <h3 className="title">
                    Online shopping includes both buying things online.
                  </h3>
                  <span className="text-heading">
                    Salesforce B2C Commerce can help you create unified,
                    intelligent digital commerce experiences — both online and
                    in the store.
                  </span>
                  <div className="row">
                    <div className="col-xl-6">
                      <p>
                        Empower your sales teams with industry tailored
                        solutions that support manufacturers as they go digital,
                        and adapt to changing markets & customers faster by
                        creating new business.
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <p className="mb--0">
                        Salesforce B2B Commerce offers buyers the seamless,
                        self-service experience of online shopping with all the
                        B2B
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-info-area">
          <div className="container">
            <div className="row row--20">
              <div className="col-lg-4">
                <div className="about-info-box">
                  <div className="thumb">
                    <img src="assets/images/about/shape-01.png" alt="Shape" />
                  </div>
                  <div className="content">
                    <h6 className="title">40,000+ Happy Customer</h6>
                    <p>
                      Empower your sales teams with industry tailored solutions
                      that support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-info-box">
                  <div className="thumb">
                    <img src="assets/images/about/shape-02.png" alt="Shape" />
                  </div>
                  <div className="content">
                    <h6 className="title">16 Years of Experiences</h6>
                    <p>
                      Empower your sales teams with industry tailored solutions
                      that support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-info-box">
                  <div className="thumb">
                    <img src="assets/images/about/shape-03.png" alt="Shape" />
                  </div>
                  <div className="content">
                    <h6 className="title">12 Awards Won</h6>
                    <p>
                      Empower your sales teams with industry tailored solutions
                      that support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-team-area bg-wild-sand">
          <div className="team-left-fullwidth">
            <div className="container ml--xxl-0">
              <div className="section-title-wrapper">
                <span className="title-highlighter highlighter-primary">
                  {" "}
                  <i className="fas fa-users"></i> Our Team
                </span>
                <h3 className="title">Expart Management Team</h3>
              </div>
              <div className="team-slide-activation slick-layout-wrapper--20 axil-slick-arrow  arrow-top-slide">
                <div className="slick-single-layout">
                  <div className="axil-team-member">
                    <div className="thumbnail">
                      <img
                        src="assets/images/team/team-01.png"
                        alt="Cody Fisher"
                      />
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
                      <img
                        src="assets/images/team/team-02.png"
                        alt="Cody Fisher"
                      />
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
                      <img
                        src="assets/images/team/team-03.png"
                        alt="Cody Fisher"
                      />
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
                      <img
                        src="assets/images/team/team-04.png"
                        alt="Cody Fisher"
                      />
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
                      <img
                        src="assets/images/team/team-02.png"
                        alt="Cody Fisher"
                      />
                    </div>
                    <div className="team-content">
                      <span className="subtitle">Designer</span>
                      <h5 className="title">Alonso M. Miklonax</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-about-area about-style-2">
          <div className="container">
            <div className="row align-items-center mb--80 mb_sm--60">
              <div className="col-lg-5">
                <div className="about-thumbnail">
                  <img src="assets/images/about/about-02.png" alt="about" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-content content-right">
                  <span className="subtitle">Features #01</span>
                  <h4 className="title">Solutions that work together</h4>
                  <p>
                    Publish your eCommerce site quickly with our easy-to-use
                    store builder— no coding required. Migrate your items from
                    your point of sale system or turn your Instagram feed into a
                    shopping site and start selling fast. Square Online works
                    for all kinds of businesses—retail, restaurants, services.
                  </p>
                  <a href="contact.html" className="axil-btn btn-outline">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-2">
                <div className="about-thumbnail">
                  <img src="assets/images/about/about-03.png" alt="about" />
                </div>
              </div>
              <div className="col-lg-7 order-lg-1">
                <div className="about-content content-left">
                  <span className="subtitle">Features #01</span>
                  <h4 className="title">Solutions that work together</h4>
                  <p>
                    Publish your eCommerce site quickly with our easy-to-use
                    store builder— no coding required. Migrate your items from
                    your point of sale system or turn your Instagram feed into a
                    shopping site and start selling fast. Square Online works
                    for all kinds of businesses—retail, restaurants, services.
                  </p>
                  <a href="contact.html" className="axil-btn btn-outline">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-newsletter-area axil-section-gap">
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

export default About;
