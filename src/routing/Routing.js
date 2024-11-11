import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Resgister from "../components/authentication/Resgister";
import LogIn from "../components/authentication/LogIn";
import Profile from "../components/profile/Profile";
import Home from "../components/Home";
import AllProducts from "../components/products/AllProducts";
import ProtectRoute from "./IsAuth";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ProductDetails from "../components/products/ProductDetails";
import Cart from "../components/products/Cart";
import AboutUs from "../pages/AboutUs";

function Routing() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Resgister />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route element={<ProtectRoute />}>
            <Route path="/all" element={<AllProducts />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Routing;
