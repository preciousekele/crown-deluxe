import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSection,
  setScrollPosition,
} from "./redux/slices/navigationSlice";

// Components
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import AppDownloadModal from "./components/appmodal/Appmodal";

// Legal pages
import PrivacyPolicy from "./components/company/privacypolicy/privacyPolicy";
import ReturnsRefund from "./components/company/return/return";
import LpgSafety from "./components/company/safety/safety";
import TermsConditions from "./components/company/terms/terms";

// Main page component
const MainPage = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const { activeSection } = useSelector((state) => state.navigation);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      dispatch(setScrollPosition(scrollPosition));

      const sections = ["home", "offer", "services", "partners", "footer"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      let currentSection = "home";
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sections[index];
          }
        }
      });

      if (currentSection !== activeSection) {
        dispatch(setActiveSection(currentSection));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, activeSection]);

  return (
    <main>
      <section id="home">
        <Hero onNavigate={onNavigate} />
      </section>
      <section id="offer">
        <About />
      </section>
      <section id="services">
        <Service onNavigate={onNavigate} />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="footer">
        <Footer onNavigate={onNavigate} />
      </section>
    </main>
  );
};

// Contact page component
const ContactPage = ({ onNavigate }) => {
  return <Contact onNavigate={onNavigate} />;
};

// App content component (handles navigation logic)
const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Update active section based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      dispatch(setActiveSection('home'));
    } else if (path === '/contact') {
      dispatch(setActiveSection('contact'));
    } else if (path === '/privacy-policy') {
      dispatch(setActiveSection('privacy-policy'));
    } else if (path === '/terms-conditions') {
      dispatch(setActiveSection('terms-conditions'));
    } else if (path === '/returns-refund') {
      dispatch(setActiveSection('returns-refund'));
    } else if (path === '/lpg-safety') {
      dispatch(setActiveSection('lpg-safety'));
    }
  }, [location.pathname, dispatch]);

  const handleNavigation = (sectionId) => {
    if (sectionId === 'contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'privacy-policy') {
      navigate('/privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'terms-conditions') {
      navigate('/terms-conditions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'returns-refund') {
      navigate('/returns-refund');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'lpg-safety') {
      navigate('/lpg-safety');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to main page sections
      navigate('/');
      dispatch(setActiveSection(sectionId));
      
      // Small delay to ensure page is loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={<MainPage onNavigate={handleNavigation} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage onNavigate={handleNavigation} />} 
        />
        <Route 
          path="/privacy-policy" 
          element={<PrivacyPolicy onNavigate={handleNavigation} />} 
        />
        <Route 
          path="/terms-conditions" 
          element={<TermsConditions onNavigate={handleNavigation} />} 
        />
        <Route 
          path="/returns-refund" 
          element={<ReturnsRefund onNavigate={handleNavigation} />} 
        />
        <Route 
          path="/lpg-safety" 
          element={<LpgSafety onNavigate={handleNavigation} />} 
        />
      </Routes>
      <AppDownloadModal />
    </div>
  );
};

// Main App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;