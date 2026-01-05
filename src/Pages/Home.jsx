import React from "react";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home-page p-3 ">
      <Navbar></Navbar>
      <div
        className="home-content p-5 d-flex flex-column flex-lg-row gap-4 justify-content-around"
        style={{ border: "2px solid white" }}
      >
        <div
          className="left col-12 col-lg-6"
          style={{ border: "2px solid white" }}
        >
          <h3 className="">SO YOU WANT TO TRAVLE TO </h3>
          <h1 className="">SPACE</h1>
          <h6 className="">
            Let's face it; if you want to go to space, you mighit as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            works experience!
          </h6>
        </div>
        <div
          className="right d-flex align-items-center justify-content-center"
          style={{ border: "2px solid white" }}
        >
          <button className="explore-btn" style={{ border: "none" }}>
            explore
          </button>
        </div>
      </div>
    </div>
  );
};
