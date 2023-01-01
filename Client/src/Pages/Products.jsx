import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../Data/products";
import axios from "axios";

const Products = ({ filters, sort }) => {
  const [Products] = useState(products);
  console.log(products);
  let cat = filters.cat;
  console.log(cat);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return Products.map((product) => {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
        <div className="axil-product product-style-one has-color-pick mt--40">
          <div className="thumbnail">
            <Link to="/Product">
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
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/Product">{product.title}</Link>
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
