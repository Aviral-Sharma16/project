import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Contact us </p>
        <p>
          for getting the best product an best service that will be available in the market!
        </p>
        <div className="container">
          <img src="/connection.png" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+0129 1234 999</span>
              </div>
              <div>
                <p>Email</p>
                <span>jayceepspl@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>67JX+6PQ, Prithla - Tatarpur Rd, Tatarpur, Pirthla, Haryana 121102</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
