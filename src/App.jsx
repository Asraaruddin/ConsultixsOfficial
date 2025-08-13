import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import backgroundImage from './assets/bghome.png';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Hire from './Pages/Hire';
import Portfolio from './Pages/Portfolio';
import ScrollToTop from './Components/ScrooltoTop';

function App() {
  const contactRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to FAQ if URL has #faq
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#faq') {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        const top = faqSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top - 80, behavior: 'smooth' });
      }
    }
  }, [location]);

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onFAQClick = () => {
    if (location.pathname !== '/') {
      // Navigate to home with #faq hash
      navigate('/#faq');
    } else {
      // Already on home page → just scroll
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        const top = faqSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top - 80, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
    <ScrollToTop/>
      {/* Root-level fixed background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />
      
      {/* Fixed blur overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(40px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <NavBar onContactClick={onContactClick} onFAQClick={onFAQClick} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire-talent" element={<Hire />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
