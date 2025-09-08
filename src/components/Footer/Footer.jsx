import "./Footer.css";
import logoImg from "/images/logo.png";
import facebookImg from "/images/footer/facebook.svg";
import instagramImg from "/images/footer/instagram.svg";
import linkedLnImg from "/images/footer/linkedln.webp";
import whatsappImg from "/images/footer/whatsapp.svg";
import emailImg from "/images/footer/email.png";
import playstore from "/images/playstore.png";
import { useDispatch } from 'react-redux'
import { openAppDownloadModal } from '../../redux/slices/appSlice'

const Footer = ({ onNavigate }) => {
  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(openAppDownloadModal())
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(sectionId)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info Section */}
          <div className="company-info">
            <div className="logo-container">
              <div className="logo-icon">
                <div className="logo">
                  <img
                    src={logoImg}
                    alt="crown deluxe logo"
                    className="logo-image"
                  />
                </div>
              </div>
            </div>
            <p className="company-description">
              Crown Deluxe is your one-stop shop for all your gas delivery
              needs. We are a leading provider of liquefied petroleum gas (LPG)
              to individuals and organizations, and we pride ourselves on
              providing a personalized experience that is tailored to your
              needs.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul className="link-list">
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'offer')}>About Us</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'services')}>Our Products</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'offer')}>What we offer</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'partners')}>Our Partners</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'contact')}>Contact us</a>
              </li>
            </ul>
          </div>

          {/* Featured Products Section */}
          <div className="footer-products">
            <h3 className="footer-title">Featured Products</h3>
            <ul className="link-list">
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'services')}>3kg gas cylinder</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'services')}>12.5kg gas cylinder</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'services')}>Gas Aluminium Burner</a>
              </li>
              <li className="link-item">
                <a href="#" onClick={(e) => handleNavClick(e, 'services')}>Gas Regulators</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and App Downloads */}
        <div className="footer-bottom">
          <div className="social-download-container">
            {/* Social Media Links */}
            <div className="social-links">
              <a href="https://web.facebook.com/people/Crown-Deluxe-Limited/61553264131720/?mibextid=LQQJ4d" className="social-link social-facebook">
                <img src={facebookImg} alt="Facebook" className="social-icon" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/crowndeluxeltd/?igshid=N2Z1OG8zZ3JhOTU0&utm_source=qr" className="social-link social-instagram">
                <img
                  src={instagramImg}
                  alt="Instagram"
                  className="social-icon"
                />
                <span>Instagram</span>
              </a>
              <a href="http://linkedin.com/company/crown-deluxe-limited" className="social-link social-linkedin">
                <img src={linkedLnImg} alt="LinkedIn" className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=2348108367553&text&type=phone_number&app_absent=0" className="social-link social-whatsapp">
                <img src={whatsappImg} alt="WhatsApp" className="social-icon" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:sales@crowndeluxe.com" className="social-link social-email">
                <img src={emailImg} alt="Email" className="social-icon" />
                <span>Send a mail</span>
              </a>
            </div>

            {/* App Download Buttons */}
            <div className="footer-app-download-buttons">
              <a href="#" className="footer-download-btn google-play" onClick={handleClick}>
                <div className="footer-btn-icon">
                  <img src={playstore} alt="Google Play" className="footer-icon-google"/>
                </div>
                <div className="footer-btn-text">
                  <span className="footer-btn-sub">
                    Download on Google Play
                  </span>
                </div>
              </a>

              <a href="#" className="footer-download-btn app-store" onClick={handleClick}>
                <div className="footer-btn-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                    />
                  </svg>
                </div>
                <div className="footer-btn-text">
                  <span className="footer-btn-sub">
                    Download on Apple Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>Crown Deluxe © 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;