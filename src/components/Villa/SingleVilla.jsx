import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";
const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filteredVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filteredVilla.image} alt={filteredVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={"/pow.jfif"} alt="villa" />
                <img src={"/pow1.jpg"} alt="villa" />
              </div>
              <div>
                <img src={"/pow2.jpg"} alt="villa" />
                <img src={"/pow3.jpg"} alt="villa" />
              </div>
            </div>
          </div>
          <h4>{filteredVilla.location}</h4>
          <p>
            {filteredVilla.bathrooms} sound / {filteredVilla.guests}  /{" "}
            / {filteredVilla.squareMeter}{" "}
            Capacity
          </p>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6460481609724!2d77.30339197500201!3d28.46008439189178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce75d28ec2ecf%3A0xa4540717a4433ee1!2sJaycee%20Punching%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1719989294369!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVilla;
