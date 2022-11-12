import React from "react";
//Bootstrap Css
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/flaticon/flaticon.css";
import "./assets/css/vendor/slick.css";
import "./assets/css/vendor/slick-theme.css";
import "./assets/css/vendor/jquery-ui.min.css";
import "./assets/css/vendor/sal.css";
import "./assets/css/vendor/magnific-popup.css";
import "./assets/css/vendor/base.css";
import "./assets/css/style.min.css";
//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
// import Account from "./pages/Account";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import WishList from "./Pages/WishList";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SingleProduct from "./Pages/SingleProduct";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Account" element={<Account />} /> */}
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<CheckOut />} />
        <Route path="/Wishlist" element={<WishList />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Register" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
