import React, { act, useState } from "react";
import data from "../data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { Navbar } from "../Components/Navbar";

const destinations = data.destinations;
export const Destination = () => {
  const imageMap = {
    Moon: moon,
    Mars: mars,
    Europa: europa,
    Titan: titan,
  };

  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  return (
    <>
      <div className="destination-page p-3">
        <header>
          <Navbar></Navbar>
        </header>
        <section className="text-white">
          <h4>
            <span className="text-muted">01</span>
            PICK YOUR DESTINATION
          </h4>
        </section>

        <div
          className="main-content-section d-flex flex-column flex-lg-row gap-3 p-5"
          style={{ border: "2px solid white" }}
        >
          <div
            className="destination-img col-12 col-lg-6 d-flex justify-content-center"
            style={{ border: "2px solid white" }}
          >
            <img
              className="img-fluid"
              src={imageMap[activeDestination.name]}
              alt={activeDestination.name}
            />
          </div>
          <div
            className="buttons-info col-12 col-lg-4 "
            style={{ border: "2px solid white" }}
          >
            <div className="buttons d-flex justify-content-around">
              {destinations.map((destination) => (
                <button
                  onClick={() => setActiveDestination(destination)}
                  key={destination.name}
                >
                  {destination.name}
                </button>
              ))}
            </div>
            <div className="info">
              <h1>{activeDestination.name}</h1>
              <p>{activeDestination.description}</p>
              <hr />
              <table style={{ width: "70%" }}>
                <thead>
                  <tr>
                    <th>AVG. DISTANCE</th>
                    <th>EST. TRAVEL TIME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{activeDestination.distance}</td>
                    <td>{activeDestination.travel}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
