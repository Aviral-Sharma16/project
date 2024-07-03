import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
      <iframe width="700" height="470" src="https://www.youtube.com/embed/Zqs2Gn9N8ZI?si=8UM4pWmnNuYCxBs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="content">
          <h3>INFRASTRUCTURE</h3>
          <p>Jaycee’s original equipment manufacturing (OEM) facilities include multiple modern plants with certified cutting edge technology and high-quality output. Our plants are designed to accelerate productivity, enhance quality, and improve outcomes.</p>
          <p> The plants at Prithla, near Faridabad, are integrated manufacturing unit for DG sets with dedicated facilities and imported machinery for designing, turret punching, cutting, bending, fabrication, and assembly. The manufacturing equipment and procedures are all ISO 9001:2015 and 14001:2015 certified.</p>
          <p> A third plant was commissioned in 2018 for the manufacture of electrical stamping up to 1200mm. It is equipped with progressive tools that enable the production of precise parts with high cutting accuracy.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
