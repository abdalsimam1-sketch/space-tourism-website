import React from "react";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home-page col-12  ">
      <Navbar></Navbar>
      <div className="d-flex flex-column justify-content-around flex-md-row align-items-center ">
        <div
          className=" col-10 mx-auto col-md-8 d-flex flex-column justify-content-between mt-5"
          style={{ color: "white" }}
        >
          <h3 className="col-12  col-md-9 col-lg-6">
            SO YOU WANT TO TRAVLE TO{" "}
          </h3>
          <h1 className=" col-12  col-md-9 col-lg-6">SPACE</h1>
          <h7 className="col-12 col-md-9 col-lg-6">
            Let's face it; if you want to go to space, you mighit as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            works experience!
          </h7>
        </div>
        <Link to="/destination">
          <button
            className="explore-btn mt-5 me-md-5"
            style={{ border: "none" }}
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};
