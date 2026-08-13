import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import {
  navLinks,
  heroInfo,
  aboutInfo,
  highlights,
  statCards,
  skillsCategories,
  projects,
  educationTimeline,
  contactCards,
  contactSocialLinks,
  footerLinks,
} from "./data/portfolioData";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 120;
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Navbar
        navLinks={navLinks}
        activeSection={activeSection}
        onLinkClick={handleNavClick}
      />
      <main>
        <Hero info={heroInfo} />
        <About info={aboutInfo} highlights={highlights} statCards={statCards} />
        <Skills categories={skillsCategories} />
        <Projects projects={projects} />
        <Education timeline={educationTimeline} />
        <Contact cards={contactCards} socialLinks={contactSocialLinks} />
      </main>
      <Footer links={footerLinks} />
      <BackToTop
        visible={showTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

export default App;
