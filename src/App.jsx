import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import backgroundImage from './assets/bghome.png';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Hire from './Pages/Hire';

function App() {
  const contactRef = useRef(null);

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onFAQClick = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      const top = faqSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
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
        </Routes>

        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
