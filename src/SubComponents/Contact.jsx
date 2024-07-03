import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
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
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
