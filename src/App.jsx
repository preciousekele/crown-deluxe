import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSection,
  setScrollPosition,
} from "./redux/slices/navigationSlice";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import AppDownloadModal from "./components/appmodal/Appmodal";

function App() {
  const dispatch = useDispatch();
  const { activeSection } = useSelector((state) => state.navigation);

  // Check if on the contact page
  const isContactPage = activeSection === "contact";

  useEffect(() => {
    const handleScroll = () => {
      // Don't handle scroll on contact page
      if (isContactPage) return;

      const scrollPosition = window.scrollY;
      dispatch(setScrollPosition(scrollPosition));

      const sections = ["home", "offer", "services", "partners"];
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
  }, [dispatch, activeSection, isContactPage]);

  const handleNavigation = (sectionId) => {
    if (sectionId === 'contact') {
      // Navigate to contact page and scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      dispatch(setActiveSection('contact'));
    } else {
      // Navigate to other sections
      dispatch(setActiveSection(sectionId));
      
      // Scroll to section if not on contact page
      if (!isContactPage) {
        scrollToSection(sectionId);
      } else {
        // If coming from contact page to main page, scroll to top first then to section
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
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

  // Render contact page
  if (isContactPage) {
    return (
      <div className="App">
        <Contact onNavigate={handleNavigation} />
        <AppDownloadModal />
      </div>
    );
  }

  // Render main page
  return (
    <div className="App">
      <main>
        <section id="home">
          <Hero onNavigate={handleNavigation} />
        </section>
        <section id="offer">
          <About />
        </section>
        <section id="services">
          <Service onNavigate={handleNavigation} />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="footer">
          <Footer onNavigate={handleNavigation} />
        </section>
      </main>
      <AppDownloadModal />
    </div>
  );
}

export default App;