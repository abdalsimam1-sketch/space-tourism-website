import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import data from "../data.json";
const techData = data.technology;
export const Technology = () => {
  const [active, setActive] = useState(0);
  const activeTech = techData[active];

  return (
    <>
      <div className="tech-page p-3 ">
        <Navbar></Navbar>

        <div
          className="tech-content d-flex flex-column p-3 flex-md-row gap-4 justify-content-between"
          style={{ border: "2px solid white" }}
        >
          <div
            className="tech-left d-flex col-12 col-md-6"
            style={{ border: "2px solid white" }}
          >
            <div
              className="left-left d-flex  flex-column p-3 pt-5"
              style={{ border: "2px solid white" }}
            >
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
            <div
              className="left-right p-5"
              style={{ border: "2px solid white" }}
            >
              {<h3>{activeTech.name}</h3>}
              <p>{activeTech.description}</p>
            </div>
          </div>
          <div
            className="tech-right d-flex justify-content-end"
            style={{ border: "2px solid white" }}
          >
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
