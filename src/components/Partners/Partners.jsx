import React from 'react';
import './Partners.css'; 

const PARTNERS = [
  { url: "/images/featured/partner1.svg" },
  { url: "/images/featured/partner2.svg" },
  { url: "/images/featured/partner3.svg" },
  { url: "/images/featured/partner4.svg" },
  // { url: "../../../public/images/featured/partner5.png" },
  { url: "/images/featured/partner7.svg" },
  { url: "/images/featured/partner9.png" },
  { url: "/images/featured/partner8.svg" },
];

const Partners = () => {
  return (
    <div className="partner-container">
      <div className="partner-content">
        <div className="partner-title-wrapper">
          <div className="partner-header">
            <p className="partner-subtitle">OUR PARTNERS</p>
            <h2 className="partner-title">We work with the best partners</h2>
          </div>
        </div>
        
        {/* Partner slider section */}
        <div className="partner-slider-container">
          <div className="partner-track">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={index} className="partner-item">
                <img 
                  src={partner.url} 
                  alt={`Partner ${(index % PARTNERS.length) + 1}`}
                  className="partner-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;