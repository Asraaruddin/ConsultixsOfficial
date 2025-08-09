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
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backdropFilter: 'blur(40px)'
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        <NavBar onContactClick={onContactClick} onFAQClick={onFAQClick} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire-talent" element={<Hire />} />
        </Routes>

        {/* Common Contact + Footer */}
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
