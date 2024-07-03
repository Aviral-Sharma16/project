import React from "react";
import { villas } from "../villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiEngineFill } from "react-icons/pi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiChemicalTank } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";

const TopVillas = () => {
  return (
    <section id="topVillas">
      <h2>HIGHEST RATED PRODUCTS</h2>
      <p>
      Jaycee Punching Solutions is the energy solution provider and partner to a multitude of 
      brands across industries and is a significant global player with exports to numerous countries.
      </p>
      <div className="villasContainer">
        {villas.slice(0,3).map((element) => {
          const guests = String(element.guests);
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <PiEngineFill />
                    <span>{guests}</span>
                  </div>
                  <div className="spec">
                    <BsFillFuelPumpDieselFill />
                    <span>{element.bedrooms}</span>
                  </div>
                  <div className="spec">
                    <GiChemicalTank />
                    <span>{element.squareMeter}</span>
                  </div>
                  <div className="spec">
                    <AiFillSound />
                    <span>{element.bathrooms}</span>
                  </div>
                </div>
                <div className="badge">
                  From <span>₹ {element.dailyRent} /Pc </span>
                </div>
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;
