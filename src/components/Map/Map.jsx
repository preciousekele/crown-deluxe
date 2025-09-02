import React from 'react';

const Map = ({ 
  width = "600", 
  height = "450", 
  className = "",
  style = {},
  title = "Crown Deluxe Limited Location"
}) => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5164695645544!2d3.8365808999999995!3d6.4560516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103953c06913f68f%3A0x2ae44c1719b5686f!2sCrown%20Deluxe%20Limited!5e0!3m2!1sen!2sng!4v1756847704734!5m2!1sen!2sng";

  return (
    <div className={`map-container ${className}`} style={style}>
      <iframe
        src={mapSrc}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        aria-label="Google Maps showing Crown Deluxe Limited location"
      />
    </div>
  );
};

export default Map;