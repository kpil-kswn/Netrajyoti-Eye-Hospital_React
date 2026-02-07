import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-16 bg-white shadow-md flex items-center justify-between px-8 relative z-[100]">
     
      <div className="flex items-center gap-3">
        <img src="/src/assets/logo.jpeg" alt="Hospital Logo" className="h-10 rounded-3xl" />
        <span className="text-xl font-semibold text-blue-600 truncate max-w-[200px] md:max-w-none">
          Netrajyoti Eye Hospital Kanota
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Home</Link>
        <Link to="/doctors" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Doctors</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Services</Link>
        <Link to="/Patient" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Patient Awareness</Link>
        <Link to="/Photos" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Gallery</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Contact Us</Link>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 lg:hidden py-4 px-8 gap-4`}>
        <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 text-sm font-medium">Home</Link>
        <Link to="/doctors" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 text-sm font-medium">Doctors</Link>
        <Link to="/services" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 text-sm font-medium">Services</Link>
        <Link to="/Patient" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 text-sm font-medium">Patient Awareness</Link>
        <Link to="/Photos" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 text-sm font-medium">Gallery</Link>
        <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 text-sm font-medium">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;