import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';  // ✅ Router navigation
import { Link as ScrollLink } from 'react-scroll';      // ✅ Smooth scrolling

const NavBar = ({ onFAQClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFAQClick = () => {
    if (onFAQClick) onFAQClick();
    setMenuOpen(false);
  };

  return (
    <div className="w-full absolute top-0 left-0 z-50">

      {/* ================= Desktop / Tablet Nav ================= */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto px-4 py-4 justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[64px] h-[64px]">
            <img src={logo} alt="Consultixs Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-white font-bold text-[28px] leading-[100%] tracking-[-0.01em]">
              Consultixs
            </span>
            <span className="font-medium text-[12px] text-white leading-[100%] tracking-tightest mt-[4px]">
              Business Consulting
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap gap-[24px] text-white font-normal text-[16px] lg:text-[18px]">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/hire-talent">Hire Talent</RouterLink>

          <button onClick={onFAQClick} className="hover:text-blue-400">FAQ</button>
          <button onClick={onContactClick} className="hover:text-blue-400">Contact</button>
        </nav>

        {/* Contact Button (smooth scroll if same page) */}
        <ScrollLink
          to="contact"
          smooth
          offset={-80}
          duration={500}
          className="w-[130px] lg:w-[150px] h-[45px] lg:h-[50px] px-[16px] lg:px-[20px] py-[10px] lg:py-[12px] 
                     rounded-[12px] text-white text-sm lg:text-base font-medium 
                     bg-[linear-gradient(180deg,#0BC0FD_0%,#055EF2_71.63%)] 
                     hover:scale-105 transition cursor-pointer flex items-center justify-center"
        >
          Contact Us
        </ScrollLink>
      </div>

      {/* ================= Mobile / Small Tablet Nav ================= */}
      <div className="flex lg:hidden max-w-[1440px] mx-auto px-4 py-4 justify-between items-center">
        
        {/* Hamburger */}
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Logo Centered */}
        <div className="flex items-center space-x-2">
         
<div className="w-[40px] h-[40px]">
  <Link to="/">
    <img
      src={logo}
      alt="Consultixs Logo"
      className="w-full h-full object-contain cursor-pointer"
    />
  </Link>
</div>
          <div className="flex flex-col justify-center">
            <span className="text-white font-bold text-[18px] leading-[100%] tracking-[-0.01em]">
              Consultixs
            </span>
            <span className="font-medium text-[10px] text-white leading-[100%] tracking-tightest mt-[2px]">
              Business Consulting
            </span>
          </div>
        </div>

        {/* Contact Button */}
        <ScrollLink
          to="contact"
          smooth
          offset={-80}
          duration={500}
          className="w-[110px] h-[40px] px-[16px] py-[8px] rounded-[12px] text-white text-sm font-medium 
                     bg-[linear-gradient(180deg,#0BC0FD_0%,#055EF2_71.63%)] 
                     hover:scale-105 transition cursor-pointer flex items-center justify-center"
        >
          Contact Us
        </ScrollLink>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg px-4 py-6 flex flex-col gap-4 text-white text-lg">
          <RouterLink to="/" onClick={() => setMenuOpen(false)}>Home</RouterLink>
          <RouterLink to="/services" onClick={() => setMenuOpen(false)}>Services</RouterLink>
          <RouterLink to="/hire-talent" onClick={() => setMenuOpen(false)}>Hire Talent</RouterLink>
          <ScrollLink to="contact" smooth offset={-80} duration={500} onClick={() => setMenuOpen(false)}>Contact</ScrollLink>
          <button onClick={handleFAQClick} className="text-left bg-transparent border-none">
            FAQ
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
