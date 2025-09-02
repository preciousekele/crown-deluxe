import { useState, useEffect } from "react";
import "./Service.css";
import { ChevronRight } from "lucide-react";
import playstore from "../../../public/images/playstore.png"

const CAROUSEL_DATA = [
  {
    id: 1,
    title: "Automated Gas Station Construction",
    description:
      "We provide easy retail LPG services. Families and neighbourhood retailers can easily obtain cooking gas thanks to our refilling plants.",
    image: "../../../public/images/services/gas.png",
    icon: "../../../public/images/services/services1.svg",
  },
  {
    id: 2,
    title: "Bulk LPG Sale",
    description:
      "We provide easy retail LPG services. Families and neighbourhood retailers can easily obtain cooking gas thanks to our refilling plants.",
    image: "../../../public/images/services/brandgas.png",
    icon: "../../../public/images/services/services2.svg",
  },
  {
    id: 3,
    title: "Real-time Gas Tracking",
    description:
      "We provide easy retail LPG services. Families and neighbourhood retailers can easily obtain cooking gas thanks to our refilling plants.",
    image: "../../../public/images/services/truck.jpg",
    icon: "../../../public/images/services/services1.svg",
  },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "3kg Gas Cylinder",
    category: "Accessories",
    price: "₦5,000.00",
    image: "../../../public/images/featured/about3.png",
  },
  {
    id: 2,
    name: "6kg Gas Cylinder",
    category: "Accessories",
    price: "₦8,500.00",
    image: "../../../public/images/featured/about3.png",
  },
  {
    id: 3,
    name: "12kg Gas Cylinder",
    category: "Accessories",
    price: "₦15,000.00",
    image: "../../../public/images/featured/about2.png",
  },
  {
    id: 4,
    name: "50kg Gas Cylinder",
    category: "Accessories",
    price: "₦45,000.00",
    image: "../../../public/images/featured/about1.png",
  },
];

const AUTO_SCROLL_INTERVAL = 5000;

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isProductAutoScrolling, setIsProductAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  useEffect(() => {
    if (!isProductAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % FEATURED_PRODUCTS.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isProductAutoScrolling]);

  const handleSlideSelect = (index) => {
    setCurrentSlide(index);
    setIsAutoScrolling(false);

    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 10000);
  };

  const handleProductSelect = (index) => {
    setCurrentProduct(index);
    setIsProductAutoScrolling(false);

    setTimeout(() => {
      setIsProductAutoScrolling(true);
    }, 10000);
  };

  const handleProductNav = (direction) => {
    setIsProductAutoScrolling(false);
    
    if (direction === "prev") {
      setCurrentProduct((prev) =>
        prev === 0 ? FEATURED_PRODUCTS.length - 1 : prev - 1
      );
    } else {
      setCurrentProduct((prev) => (prev + 1) % FEATURED_PRODUCTS.length);
    }

    setTimeout(() => {
      setIsProductAutoScrolling(true);
    }, 10000);
  };

  const currentData = CAROUSEL_DATA[currentSlide];
  const currentProductData = FEATURED_PRODUCTS[currentProduct];

  return (
    <>
      <div className="what-we-offer">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">WHAT WE OFFER</h2>
            <div className="title-underline"></div>
            <div className="slide-indicator">
              <span className="slide-number">{currentSlide + 1}</span>
            </div>
          </div>

          <div className="main-content">
            <h3 className="main-title">
              We provide bulk LPG supply, automated
              <br />
              gas station construction, and real-time
              <br />
              delivery tracking for seamless operations.
            </h3>
          </div>

          <div className="carousel-container">
            <div className="services-sidebar">
              {CAROUSEL_DATA.map((item, index) => (
                <div
                  key={item.id}
                  className={`service-item ${
                    index === currentSlide ? "active" : ""
                  } service-item-${item.id}`}
                  onClick={() => handleSlideSelect(index)}
                >
                  <div className="service-header">
                    <div className="service-icon">
                      <img src={item.icon} alt={item.title + " icon"} />
                    </div>
                    <h4 className="service-title">{item.title}</h4>
                  </div>
                  <div className="service-content">
                    <p className="service-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-main">
              <div className="progress-indicators">
                {CAROUSEL_DATA.map((_, index) => (
                  <div
                    key={index}
                    className={`progress-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => handleSlideSelect(index)}
                  />
                ))}
              </div>

              <div className="slide-container">
                <div className="slide-image">
                  <img
                    src={currentData.image}
                    alt={currentData.title}
                    loading="lazy"
                  />
                </div>

                <div className="slide-content">
                  <p className="slide-description">
                    We are dedicated to providing high-quality LPG at
                    competitive prices. We provide easy retail LPG services.
                    Families and neighbourhood retailers can easily obtain
                    cooking gas thanks to our refilling plants. To give clients
                    safe, effective and reasonably priced energy for their daily
                    needs, we are committed to offering premium LPG at
                    competitive rates.
                  </p>

                  <button className="contact-btn">
                    Contact us now
                    <ChevronRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-products">
        <div className="featured-container">
          <div className="featured-content">
            <div className="product-showcase">
                <div className="featured-header">
                  <h2 className="featured-title">FEATURED PRODUCTS</h2>
                </div>
              <div className="product-info">
                <h3 className="product-name">{currentProductData.name}</h3>
                <p className="product-category">
                  {currentProductData.category}
                </p>
                <div className="product-price">
                  <span className="price-label">Price</span>
                  <span className="price-value">
                    {currentProductData.price}
                  </span>
                </div>
              </div>

              <div className="product-image">
                <img
                  src={FEATURED_PRODUCTS[currentProduct].image}
                  alt={FEATURED_PRODUCTS[currentProduct].name}
                  className={`product-${FEATURED_PRODUCTS[currentProduct].id}`}
                />
              </div>

              <div className="product-controls">
                <div className="product-indicators">
                  {FEATURED_PRODUCTS.map((_, index) => (
                    <button
                      key={index}
                      className={`product-dot ${
                        index === currentProduct ? "active" : ""
                      }`}
                      onClick={() => handleProductSelect(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <div className="product-nav">
                  <button
                    className="nav-btn prev-btn"
                    onClick={() => handleProductNav("prev")}
                  >
                    <ChevronRight className="nav-arrow prev-arrow" />
                  </button>
                  <button
                    className="nav-btn next-btn"
                    onClick={() => handleProductNav("next")}
                  >
                    <ChevronRight className="nav-arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="app-download">
            <p className="download-text">
              View all Products by downloading our mobile app
            </p>
            <div className="download-buttons">
              
            </div>

            <div className="download-buttons">
            <a href="#" className="download-btn google-play">
              <div className="btn-icon">
                <img src={playstore} alt="Gas flame background"/>
              </div>
              <div className="btn-text">
                <span className="btn-sub">Download on Google Play</span>
              </div>
            </a>
            
            <a href="#" className="download-btn app-store">
              <div className="btn-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="btn-text">
                <span className="btn-sub">Download on Apple Store</span>
              </div>
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;