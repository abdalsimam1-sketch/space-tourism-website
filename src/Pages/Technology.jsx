import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import data from "../data.json";
const techData = data.technology;
export const Technology = () => {
  const [active, setActive] = useState(0);
  const activeTech = techData[active];

  return (
    <>
      <div className="tech-page p-3 text-white ">
        <Navbar></Navbar>
        <section className="d-flex justify-content-center">
          <h2>
            <span className="text-secondary me-4">01</span>
            SPACE LAUNCH 101
          </h2>
        </section>

        <div className="tech-content d-flex flex-column p-3 flex-md-row gap-4 justify-content-between">
          <div className="tech-left d-flex col-12 col-md-6">
            <div className="left-left d-flex  flex-column p-3 pt-5">
              {techData.map((_, index) => {
                return (
                  <i
                    onClick={() => setActive(index)}
                    className={`fs-1 bi bi-${
                      active === index
                        ? `${index + 1}-circle-fill`
                        : `${index + 1}-circle`
                    }`}
                  ></i>
                );
              })}
            </div>
            <div className="left-right p-5">
              {<h3>{activeTech.name}</h3>}
              <p>{activeTech.description}</p>
            </div>
          </div>
          <div className="tech-right d-flex justify-content-end">
            {" "}
            <img
              className="img-fluid"
              src={new URL(activeTech.images.portrait, import.meta.url).href}
              alt={activeTech.name + " image "}
            />
          </div>
        </div>
      </div>
    </>
  );
};
