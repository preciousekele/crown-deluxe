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
function App() {
  const dispatch = useDispatch();
  const { activeSection } = useSelector((state) => state.navigation);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      dispatch(setScrollPosition(scrollPosition));

      const sections = ["home", "offer", "services", "partners", "map", "contact"];
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
      <main>
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Service />
        </section> 
        <section id="partners">
          <Partners />
        </section>
        {/* <section id="map">
          <Map />
        </section> */}
        <section id="footer">
          <Footer />
        </section>{" "}
        
      </main>
    </div>
  );
}

export default App;
