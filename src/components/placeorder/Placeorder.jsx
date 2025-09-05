import React from "react";
import "./PlaceOrder.css";
import placeorderman from "/images/footer/manorder.jpg";
import playstore from "/images/playstore.png";
import placeorderimage from "/images/featured/about3.png";

const PlaceOrder = () => {
  return (
    <div className="place-order-container">
      <div className="order-card">
        <div className="order-content">
          <h2 className="order-title">
            Place your order <br /> now
          </h2>

          <div className="download-buttons-order">
            <a href="#" className="download-btn google-play">
              <div className="btn-icon-order">
                <img src={playstore} alt="Gas flame background" className="order-btn-img"/>
              </div>
              <div className="btn-text">
                <span className="btn-sub-order">Download on Google Play</span>
              </div>
            </a>

            <a href="#" className="download-btn app-store">
              <div className="btn-icon">
                <svg viewBox="0 0 20 24" width="30" height="30">
                  <path
                    fill="currentColor"
                    d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                  />
                </svg>
              </div>
              <div className="btn-text">
                <span className="btn-sub-order">Download on Apple Store</span>
              </div>
            </a>
          </div>

          <p className="order-subtitle">
            Get your cooking gas <br /> delivered to you in a giffy
          </p>
        </div>

        <div className="placeorderimage1">
          <img src={placeorderimage} alt="Gas Cylinder" className="gas-cylinder-right" />
        </div>
      </div>

      <div className="order-card-man">
        <div className="delivery-man-card">
          <img
            src={placeorderman}
            alt="Delivery Man"
            className="delivery-man"
          />
        </div>
        
        <div className="placeorderimage2">
          <img src={placeorderimage} alt="Gas Cylinder" className="gas-cylinder-left" />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;