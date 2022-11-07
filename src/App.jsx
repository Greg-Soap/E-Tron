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

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
