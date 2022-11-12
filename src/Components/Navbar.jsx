import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Search, setSearch] = useState(false);
  const OpenSearch = () => {
    setSearch(!Search);
  };

  return (
    <>
      <header className="header axil-header header-style-1">
        <div className="header-top-campaign">
          <div className="container position-relative">
            <div className="campaign-content">
              <p>
                Open Doors To A World Of Fashion <a href="#">Discover More</a>
              </p>
            </div>
          </div>
          <button className="remove-campaign">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="axil-header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="header-top-dropdown">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Arabic
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Spanish
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          AUD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          EUR
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="header-top-link">
                  <ul className="quick-link">
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <Link to="/Register">Join Us</Link>
                    </li>
                    <li>
                      <Link to="/Login">Sign In</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="axil-sticky-placeholder"></div>
        <div className="axil-mainmenu">
          <div className="container">
            <div className="header-navbar">
              <div className="header-brand">
                <Link to="/" className="logo logo-dark">
                  <img src="assets/images/logo/logo.png" alt="Site Logo" />
                </Link>
                <Link to="/" className="logo logo-light">
                  <img
                    src="assets/images/logo/logo-light.png"
                    alt="Site Logo"
                  />
                </Link>
              </div>
              <div className="header-main-nav">
                <nav className="mainmenu-nav">
                  <button className="mobile-close-btn mobile-nav-toggler">
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="mobile-nav-brand">
                    <Link to="/" className="logo">
                      <img src="assets/images/logo/logo.png" alt="Site Logo" />
                    </Link>
                  </div>
                  <ul className="mainmenu">
                    <li>
                      <Link to="/">Home</Link>
                      {/* <ul className="axil-submenu">
                      <li>
                        <a href="index-1.html">Home - Electronics</a>
                      </li>
                    </ul> */}
                    </li>
                    <li>
                      <Link to="/Shop">Shop</Link>
                    </li>
                    {/* <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="my-account.html">Account</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign In</a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                    </ul>
                  </li> */}
                    <li>
                      <Link to="/About">About</Link>
                    </li>

                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <ul className="action-list">
                  <li className="axil-search">
                    <a className="header-search-icon" title="Search">
                      <i className="flaticon-magnifying-glass"></i>
                    </a>
                  </li>
                  <li className="wishlist">
                    <Link to="/Wishlist">
                      <i className="flaticon-heart"></i>
                    </Link>
                  </li>
                  <li className="shopping-cart">
                    <Link to="/Cart" className="cart-dropdown-btn">
                      <span className="cart-count">3</span>
                      <i className="flaticon-shopping-cart"></i>
                    </Link>
                  </li>
                  <li className="my-account">
                    <Link to="/Account">
                      <i className="flaticon-person"></i>
                    </Link>
                    <div className="my-account-dropdown">
                      <span className="title">QUICKLINKS</span>
                      <ul>
                        <li>
                          <Link to="/Account">My Account</Link>
                        </li>
                        <li>
                          <a href="#">Initiate return</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                        <li>
                          <a href="#">Language</a>
                        </li>
                      </ul>
                      <div className="login-btn">
                        <Link to="/Login" className="axil-btn btn-bg-primary">
                          Login
                        </Link>
                      </div>
                      <div className="reg-footer text-center">
                        No account yet?{" "}
                        <Link to="/Register" className="btn-link">
                          REGISTER HERE.
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="axil-mobile-toggle">
                    <button className="menu-btn mobile-nav-toggler">
                      <i className="flaticon-menu-2"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
