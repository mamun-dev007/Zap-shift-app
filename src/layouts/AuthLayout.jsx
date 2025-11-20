import React from "react";
import Logo from "../components/logo/Logo";
import { Link, Outlet } from "react-router";
import authimage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Link to="/" className="btn btn-ghost text-xl"><Logo></Logo></Link>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 ">
          <img src={authimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
