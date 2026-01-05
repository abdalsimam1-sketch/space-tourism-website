import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-capitalize p-5">
      <div className="d-flex  justify-content-between">
        <Link to="/">
          <img src={Logo} alt="logo.svg" className="mb-2" />
        </Link>
        <i
          onClick={() => setIsOpen(!isOpen)}
          className="bi bi-list btn btn-ouline-dark d-inline d-md-none text-white fs-1"
        ></i>
        <hr className="navbar-divider d-none d-md-inline text-white " />
        <div
          className="d-flex gap-4 nav-links align-items-center ms-3 d-none d-md-flex ps-5 "
          style={{ height: "5rem" }}
        >
          <Link to="/">home</Link>
          <Link to="/destination">destination</Link>
          <Link to="/crew">crew</Link>
          <Link to="/technology" className="me-5">
            technology
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="d-flex nav-links flex-column gap-4 bg-transparent ">
          <Link to="/">home</Link>
          <Link to="/destination">destination</Link>
          <Link to="/crew">crew</Link>
          <Link to="/technology" className="me-5">
            technology
          </Link>
        </div>
      )}
    </nav>
  );
};
