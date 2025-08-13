import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Use NavLink for active state
import logo from '../assets/logo.png';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll'; // ✅ Smooth scrolling

const NavBar = ({ onFAQClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  // Styles for links
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-white font-[550] transition'
      : 'text-gray-300 font-normal';

  return (
    <div className="w-full top-0 left-0 z-50 fixed backdrop-blur-md bg-black/24 rounded-b-[16px]">

      {/* ================= Desktop / Tablet Nav ================= */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto px-12 py-2 justify-between items-center">

        {/* Logo */}
        <NavLink to="/">
        <div className="flex items-center space-x-2">
          <div className="w-[60px] h-[60px]">
            
              <img src={logo} alt="Consultixs Logo" className="w-full h-full object-contain" />
          </div>

          <div className="flex flex-col justify-center cursor-pointer">
            <span className="text-white font-semibold text-[24px] font-dmsans">
              Consultixs
            </span>
          </div>
        </div>
        </NavLink>

        {/* Nav Links */}
        <nav className="flex flex-wrap gap-[24px] font-dmsans text-[16px] lg:text-[20px]">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/hire-talent" className={linkClasses}>
            Hire Talent
          </NavLink>
          <NavLink to="/portfolio" className={linkClasses}>
            Portfolio
          </NavLink>
        </nav>

        {/* Contact Button */}
        <button
          onClick={onContactClick}
          className="bg-[linear-gradient(180deg,#0BC0FD_0%,#055EF2_71.63%)] h-[40px] w-[128px] rounded-[8px] text-white text-dmsans font-semibold text-[16px] cursor-pointer hover:scale-105 transition"
        >
          Book a Call
        </button>
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

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[40px] h-[40px]">
            <NavLink to="/">
              <img
                src={logo}
                alt="Consultixs Logo"
                className="w-full h-full object-contain cursor-pointer"
              />
            </NavLink>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-white font-bold text-[18px] leading-[100%] font-dmsans tracking-[-0.01em]">
              Consultixs
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
          Book a Call
        </ScrollLink>
      </div>

      {/* ================= Mobile Dropdown Menu ================= */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg px-4 py-6 flex flex-col gap-4 text-lg">
          <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/hire-talent" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Hire Talent
          </NavLink>
          <NavLink to="/portfolio" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;