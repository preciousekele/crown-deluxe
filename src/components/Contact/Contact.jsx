import Header from '../Header/Header';
import './Contact.css';
import phoneImg from "/images/contact/phone.png";
import locationImg from "/images/contact/location.png";
import emailImg from "/images/contact/email.png";
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import PlaceOrder from '../placeorder/Placeorder';

const Contact = ({ onNavigate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="contact-page">
      <Header onNavigate={onNavigate} />
      
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>
              Have questions or need assistance? Reach out to us today — we're here to provide the support you need.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={locationImg} alt="WhatsApp" className="social-icon" />
                </div>
                <div>
                  <p>Plot 19, Block IV Amen Estate Phase 2,</p>
                  <p>Ibeju Lekki Lagos State.</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={phoneImg} alt="WhatsApp" className="social-icon" />
                </div>
                <div>
                  <p>+234 810 836 7553</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={emailImg} alt="WhatsApp" className="social-icon" />
                </div>
                <div>
                  <p>sales@crowndeluxe.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Olabanji David"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+234 811 474 6609"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="benjidheevid216@gmail.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
         <Map width="100%vw" 
              height="786px"
              className="rounded-lg shadow-md"
            />
           <PlaceOrder />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};


export default Contact;
