import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/bghome.png";
import logo from "../assets/logo.png";
import { MapPinCheckInside, Mail } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  
  const goTo = (path) => {
  if (window.location.pathname === path) {
    // Same page → just scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Different page → navigate
    navigate(path);
  }
};

  return (
    <footer
      className="relative bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-cover bg-end bg-no-repeat font-dmsans"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mt-10 mb-40 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Logo */}
        <div>
          <div
            className="flex items-center mb-2 sm:mb-4 cursor-pointer"
            onClick={() => goTo("/")}
          >
            <img
              src={logo}
              alt="Consultixs Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div className="flex flex-col ml-3">
              <h2 className="text-xl sm:text-2xl font-bold font-dmsans leading-tight">
                Consultixs
              </h2>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-30">
          <div>
            <h3 className="font-bold w-[113px] text-lg sm:text-xl mb-5">Quick Links</h3>
            <ul className="space-y-6 text-white text-sm sm:text-base">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Hire Talent", path: "/hire-talent" },
                { label: "Portfolio", path: "/portfolio" }
              ].map((link) => (
                <li
                  key={link.label}
                  className="cursor-pointer hover:text-white transition"
                  onClick={() => goTo(link.path)}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl">Contact</h3>
            <p className="text-gray-300 max-w-xs text-xs sm:text-sm mb-5">
              Let us transform your ideas into scalable solutions.
            </p>
            <ul className="text-white space-y-2 mb-4 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                Email:{" "}
                <a href="mailto:info@consultixs.com" className="hover:text-white transition">
                  info@consultixs.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinCheckInside className="w-4 h-4 text-white" />
                Location: San Jose, CA
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mt-10 text-center text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Consultixs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
