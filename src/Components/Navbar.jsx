import React, { useState } from "react";

import Logo from "../../public/assets/shared/logo.svg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-capitalize p-5">
      <div className="d-flex  justify-content-between">
        <a href="#home">
          <img src={Logo} alt="logo.svg" className="mb-5" />
        </a>

        <i
          onClick={() => setIsOpen(!isOpen)}
          className={`bi bi-${
            isOpen ? "x" : "list"
          } btn btn-ouline-dark d-inline d-md-none text-white fs-1`}
        ></i>
        <hr className="navbar-divider d-none d-md-inline text-white " />
        <div
          className="d-flex gap-4 nav-links align-items-center ms-3 d-none d-md-flex ps-5 "
          style={{ height: "5rem" }}
        >
          <a href="#home">home</a>
          <a href="#destination">destination</a>
          <a href="#crew">crew</a>
          <a href="#technology">technology</a>
        </div>
      </div>
      {isOpen && (
        <div className="d-flex nav-links flex-column gap-4 bg-transparent ">
          <a href="#home">home</a>
          <a href="#destination">destination</a>
          <a href="#crew">crew</a>
          <a href="#technology">technology</a>
        </div>
      )}
    </nav>
  );
};
