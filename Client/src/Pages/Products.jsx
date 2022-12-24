import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../Data/products";

const Products = () => {
  const [Products] = useState(products);
  return Products.map((product) => {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
        <div className="axil-product product-style-one has-color-pick mt--40">
          <div className="thumbnail">
            <Link to="/SingleProduct">
              <img src={product.img} alt="Product Images" />
            </Link>
            {!product.badget ? null : (
              <div className="label-block label-right">
                <div className="product-badget">{product.badget}</div>
              </div>
            )}

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
                <Link to="/SingleProduct">{product.title}</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price current-price">
                  {product.current_price}
                </span>
                <span className="price old-price">{product.old_price}</span>
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
    );
  });
};

export default Products;
