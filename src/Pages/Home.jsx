import React from "react";
import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    <div className="home-page  ">
      <Navbar></Navbar>
      <div className="home-content p-5 d-flex flex-column flex-lg-row gap-4 justify-content-around">
        <div className="left col-12 col-lg-6 text-white d-flex flex-column justify-content-center">
          <h3 className="">SO, YOU WANT TO TRAVLE TO </h3>
          <p className="fs-1 fw-bold">SPACE</p>
          <h6 className="">
            Let's face it; if you want to go to space, you mighit as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            works experience!
          </h6>
        </div>
        <div className="right d-flex align-items-center justify-content-center">
          <button className="explore-btn mt-3" style={{ border: "none" }}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
