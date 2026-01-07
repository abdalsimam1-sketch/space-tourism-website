import React, { act, useState } from "react";
import data from "../data.json";
import moon from "../../public/assets/destination/image-moon.png";
import mars from "../../public/assets/destination/image-mars.png";
import europa from "../../public/assets/destination/image-europa.png";
import titan from "../../public/assets/destination/image-titan.png";
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
      <div className="destination-page  text-white pt-5" id="destination">
        <section className=" d-flex justify-content-center">
          <h2>
            <span className="text-secondary me-2">01</span>
            PICK YOUR DESTINATION
          </h2>
        </section>

        <div className="main-content-section d-flex flex-column flex-lg-row gap-3 p-5">
          <div className="destination-img col-12 col-lg-6 d-flex justify-content-center">
            <img
              className="img-fluid"
              src={imageMap[activeDestination.name]}
              alt={activeDestination.name}
            />
          </div>
          <div className="buttons-info col-12 col-lg-4 ">
            <div className="buttons d-flex ">
              {destinations.map((destination) => (
                <button
                  className="btn btn-outline-tertiary text-white buttons"
                  onClick={() => setActiveDestination(destination)}
                  key={destination.name}
                >
                  {destination.name}
                </button>
              ))}
            </div>
            <div className="info">
              <p style={{ fontSize: "6rem" }}>{activeDestination.name}</p>
              <p>{activeDestination.description}</p>
              <hr />
              <table style={{ width: "100%" }}>
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
