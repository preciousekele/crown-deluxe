import React from "react";
import "./About.css";
// import aboutImage from "../../../public/images/aboutImage.png";
import about1 from "../../../public/images/about/about1.png";
import about2 from "../../../public/images/about/about2.png";
import about3 from "../../../public/images/about/about3.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-title-wrapper">
          <h2 className="about-title">ABOUT US</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-left">
          <h3 className="about-headline">
            We are your one-stop shop for all gas delivery needs, providing
            reliable LPG to individuals and organizations.
          </h3>

          <p className="about-description">
            We understand that everyone has different needs when it comes to gas
            delivery. Some people need gas delivered on a regular basis, while
            others only need it occasionally. Some people need gas delivered to
            their home or office, while others need it delivered to a job site
            or other location. That's why we offer a variety of gas delivery
            options to meet your needs.
          </p>
        </div>

        <div className="about-right">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">20 </div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>

          <div className="about-image">
            {/* <img src={aboutImage} alt="Gas cylinders storage" /> */}
            <img src={about1} alt="Gas cylinders" className="about1"/>
            <img src={about2} alt="Gas cylinders" className="about2" />
            <img src={about3} alt="Gas cylinders" className="about3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;