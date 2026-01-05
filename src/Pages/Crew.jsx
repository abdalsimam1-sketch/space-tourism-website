import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import data from "../data.json";

const crewData = data.crew;

export const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crewData[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % crewData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="crew-page ">
        <header>
          <Navbar></Navbar>
        </header>
        <section className="text-white  d-flex justify-content-center">
          <h2>
            {" "}
            <span className="text-secondary me-3">02 </span> MEET YOUR CREW
          </h2>
        </section>
        <div className="crew-content d-flex flex-column flex-lg-row  p-5 gap-4">
          <div className="crew-info text-white col-12 col-lg-6 ">
            <h3>{activeCrew.name}</h3>
            <h2>{activeCrew.role}</h2>
            <p>{activeCrew.bio}</p>
          </div>
          <div className="crew-img col-12 col-lg-6">
            <img
              className="img-fluid"
              src={new URL(activeCrew.images.png, import.meta.url).href}
              alt={activeCrew.name + " image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
