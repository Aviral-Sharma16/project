import React from "react";
import { SiWeightsandbiases } from "react-icons/si";
import { MdFitnessCenter, MdElectricCar, MdOutlinePets, MdShoppingCart } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTowerCell } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdCorporateFare } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";


const OurSpecialities = () => {
  const specialities = [
    {
      id: 1,
      title: "Telecom",
      icon: <FaTowerCell/>,
      subText: "Have a Look"
    },
    {
      id: 2,
      title: "Government",
      icon: <FaBuildingColumns />,
      subText: "Look for industries"
    },
    {
      id: 3,
      title: "Corporates",
      icon: <MdCorporateFare />,
      subText: "Take a tour"
    },
    {
      id: 4,
      title: "Retail",
      icon: <MdShoppingCart />,
      subText: "Search for market"
    },
    {
      id: 5,
      title: "Exports",
      icon: <FiGlobe />,
      subText: "Take a trip"
    },
  ];
  return (
    <>
      <section id="ourSpecialities">
        <h1>INDUSTRIES WE SERVE</h1>
        <div className="specialities_container">
          {
            specialities.map(element=>{
              return(
                <div className="card" key={element.id}>
                    <div className="icon">{element.icon}</div>
                    <div className="title_text">{element.title}</div>
                    <div className="subtitle_text">{element.subText} <FaLongArrowAltRight/></div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default OurSpecialities;
