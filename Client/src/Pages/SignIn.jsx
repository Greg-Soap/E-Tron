import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="axil-signin-area">
      <div className="signin-header">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <a href="index.html" className="site-logo">
              <img src="./assets/images/logo/logo.png" alt="logo" />
            </a>
          </div>
          <div className="col-sm-8">
            <div className="singin-header-btn">
              <p>Not a member?</p>
              <Link
                to="/Register"
                className="axil-btn btn-bg-secondary sign-up-btn"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="axil-signin-banner bg_image bg_image--9">
            <h3 className="title">We Offer the Best Products</h3>
          </div>
        </div>
        <div className="col-lg-6 offset-xl-2">
          <div className="axil-signin-form-wrap">
            <div className="axil-signin-form">
              <h3 className="title">Sign in to eTrade.</h3>
              <p className="b2 mb--55">Enter your detail below</p>
              <form className="singin-form">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value="annie@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value="123456789"
                  />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between">
                  <button
                    type="submit"
                    className="axil-btn btn-bg-primary submit-btn"
                  >
                    Sign In
                  </button>
                  <a href="forgot-password.html" className="forgot-btn">
                    Forget password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
