import React, { useState } from "react";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import ServiceArea from "../Components/ServiceArea";
import Products from "./Products";

const Shop = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
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
                      <Link to="/">Home</Link>
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
                      src="./assets/images/product/product-45.png"
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
                        <select
                          name="cat"
                          onChange={handleFilter}
                          className="single-select"
                        >
                          <option>Categories</option>
                          <option>Phones</option>
                          <option>Computers</option>
                          <option>Laptops</option>
                          <option>Pc Gaming</option>
                        </select>

                        <select
                          name="color"
                          onChange={handleFilter}
                          className="single-select"
                        >
                          <option>Color</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Green</option>
                          <option>Pink</option>
                        </select>

                        <select
                          name="priceRange"
                          onChange={handleFilter}
                          className="single-select"
                        >
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
                        <select
                          onChange={(e) => setSort(e.target.value)}
                          className="single-select"
                        >
                          <option value="latest">Sort by Latest</option>
                          <option value="name">Sort by Name</option>
                          <option value="price">Sort by Price</option>
                          <option value="viewed">Sort by Viewed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <Products filters={filters} sort={sort} />
            </div>
            <div className="text-center pt--30">
              <button
                style={{ width: "fit-content" }}
                className="axil-btn btn-bg-lighter btn-load-more"
              >
                Load more
              </button>
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
