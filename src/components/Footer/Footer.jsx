import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>JAYCEE PUNCHING SOLUTIONS PRIVATE LIMITED</h4>
          <p>
          At Jaycee, we believe in constant innovation. As pioneering providers of best in class solutions, we manufacture a wide
          range of the latest products with ancillary services such as installation, commissioning, maintenance and servicing.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+0129 1234 999 </p>
          <p>jayceepspl@gmail.com</p>
          <p>© All Rights Reserved By JayceePunchingSolutionPvt.Ltd.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
