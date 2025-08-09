import React from "react";
import backgroundImage from '../assets/bghome.png';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer
            className="relative bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-cover bg-center bg-no-repeat font-dmsans"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Branding */}
                <div>
                    {/* Logo and Consultixs side by side */}
                    <div className="flex items-center mb-2 sm:mb-4">
                        <img
                            src={logo}
                            alt="Consultixs Logo"
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        />
                        <div className="flex flex-col ml-3">
                            <h2 className="text-xl sm:text-2xl font-bold font-dmsans leading-tight">Consultixs</h2>
                            <p className="text-white text-xs sm:text-sm font-medium mt-1">Business Consulting</p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-white text-sm sm:text-base">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQ’s</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">Services</h3>
                    <ul className="space-y-2 text-white text-sm sm:text-base">
                        <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                        <li><a href="#" className="hover:text-white transition">Android Development</a></li>
                        <li><a href="#" className="hover:text-white transition">UX/UI Designer</a></li>
                        <li><a href="#" className="hover:text-white transition">Software Engineer</a></li>
                        <li><a href="#" className="hover:text-white transition">Blockchain Engineer</a></li>
                        <li><a href="#" className="hover:text-white transition">Cyber Security</a></li>
                        <li><a href="#" className="hover:text-white transition">Microsoft Development</a></li>
                        <li><a href="#" className="hover:text-white transition">Bitcoin Generative Bot Engineers</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">Contact</h3>
                    <p className="text-gray-300 max-w-xs text-xs sm:text-sm mb-3">
                        Let us transform your ideas into scalable solutions.
                    </p>
                    <ul className="text-white space-y-2 mb-4 text-sm sm:text-base">
                        <li>Email: <a href="mailto:info@consultixs.com" className="hover:text-white transition">info@consultixs.com</a></li>
                        <li>Phone: <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a></li>
                        <li>Location: Hyderabad, India</li>
                    </ul>
                </div>

            </div>

            <div className="relative mt-10 text-center text-gray-400 text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} Consultixs. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
