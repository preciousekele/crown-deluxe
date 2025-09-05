import { useState, useEffect, useRef } from "react";
import "./About.css";
// import aboutImage from "../../../public/images/aboutImage.png";
// import about1 from "../../../public/images/about/about1.png";
// import about2 from "../../../public/images/about/about2.png";
// import about3 from "../../../public/images/about/about3.png";
import gasImages from "/images/about/frame83.png";
import gasImagesmobile from "/images/about/frame84.png";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      //animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutExpo);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };
    
    updateCounter();
  };

  return (
    <div ref={countRef} className="stat-number">
      {count}{suffix}
    </div>
  );
};

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
              <AnimatedCounter end={20} duration={3000} />
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <AnimatedCounter end={30} duration={3500} />
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <AnimatedCounter end={2000} duration={4500} suffix="+" />
              <div className="stat-label">Customers</div>
            </div>
          </div>

          <div className="about-image">
            <img src={gasImages} alt="Gas cylinders storage" className="about-image-desktop"/> 
            <img src={gasImagesmobile} alt="Gas cylinders storage" className="about-image-mobile"/>
            {/* <img src={about1} alt="Gas cylinders" className="about1"/>
            <img src={about2} alt="Gas cylinders" className="about2" />
            <img src={about3} alt="Gas cylinders" className="about3"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;