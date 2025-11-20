import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/utilites/footer/Footer";
import Navbar from "../pages/utilites/navbar/Navbar";

const Rootlayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Rootlayout;
