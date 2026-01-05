import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
export const Navbar = () => {
  return (
    <nav className="text-capitalize p-5 d-flex align-items-center ">
      <img src={Logo} alt="logo.svg" />
      <hr className="navbar-divider" />
      <div
        className="d-flex gap-4 bg-black align-items-center ms-3 "
        style={{ height: "5rem" }}
      >
        <Link to="/">home</Link>
        <Link to="/destination">destination</Link>
        <Link to="/crew">crew</Link>
        <Link to="/technology" className="me-5">
          technology
        </Link>
      </div>
    </nav>
  );
};
