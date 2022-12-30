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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import WishList from "./Pages/WishList";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SingleProduct from "./Pages/SingleProduct";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ErrorPage from "./Pages/ErrorPage";
const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Account"
          element={user ? <Account /> : <Navigate to="/Login" />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="/Checkout"
          element={user ? <CheckOut /> : <Navigate to="/Login" />}
        />
        <Route
          path="/Wishlist"
          element={user ? <WishList /> : <Navigate to="/Login" />}
        />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Product/:id" element={<SingleProduct />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
