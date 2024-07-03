import React from 'react'
import {villas} from '../../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { PiEngineFill } from "react-icons/pi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiChemicalTank } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";


const Villas = () => {
  return (
    <>
        <div className="page" id='allVillas'>
          <h1>OUR PRODUCTS</h1>
          <p>{villas.length} Products</p>
          <div className="villasContainer">
        {villas.map((element) => {
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
                    <span>{'guests'}</span>
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
                  From <span>₹{element.dailyRent} / Pc </span>
                </div>
              </Link>
          );
        })}
      </div>
        </div>
    </>
  )
}

export default Villas
